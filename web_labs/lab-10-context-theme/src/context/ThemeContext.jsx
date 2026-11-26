
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useMemo,
  useCallback,
} from 'react';

const ThemeContext = createContext(null);

const availableThemes = ['light', 'dark', 'blue', 'system'];

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');

    return availableThemes.includes(savedTheme)
      ? savedTheme
      : 'light';
  } catch {
    return 'light';
  }
}

function themeReducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return action.payload;

    case 'TOGGLE': {
      const themes = ['light', 'dark', 'blue'];
      const currentIndex = themes.indexOf(state);
      return themes[(currentIndex + 1) % themes.length];
    }

    default:
      return state;
  }
}

function resolveTheme(theme) {
  if (theme !== 'system') {
    return theme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function ThemeProvider({ children }) {
  const [theme, dispatch] = useReducer(
    themeReducer,
    undefined,
    getInitialTheme
  );

  const changeTheme = useCallback((newTheme) => {
    if (availableThemes.includes(newTheme)) {
      dispatch({ type: 'SET_THEME', payload: newTheme });
    }
  }, []);

  const toggleTheme = useCallback(() => {
    dispatch({ type: 'TOGGLE' });
  }, []);

  const resolvedTheme = resolveTheme(theme);

  useEffect(() => {
    document.documentElement.dataset.theme = resolvedTheme;

    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Збереження теми недоступне
    }
  }, [theme, resolvedTheme]);

  useEffect(() => {
  const handleStorage = (event) => {
    if (
      event.key === 'theme' &&
      availableThemes.includes(event.newValue)
    ) {
      dispatch({
        type: 'SET_THEME',
        payload: event.newValue,
      });
    }
  };

  window.addEventListener('storage', handleStorage);

  return () => {
    window.removeEventListener('storage', handleStorage);
  };
}, []);

  useEffect(() => {
    if (theme !== 'system') return;

    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const handleChange = () => {
      document.documentElement.dataset.theme = resolveTheme('system');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      toggleTheme,
      changeTheme,
    }),
    [theme, resolvedTheme, toggleTheme, changeTheme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme потрібно використовувати всередині ThemeProvider'
    );
  }

  return context;
}
