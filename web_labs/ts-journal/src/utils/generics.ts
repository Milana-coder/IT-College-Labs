// Групування будь-яких об'єктів за заданою властивістю
export function groupBy<T, K extends string>(
  items: readonly T[],
  getKey: (item: T) => K
): Map<K, T[]> {
  const result = new Map<K, T[]>();

  for (const item of items) {
    const key = getKey(item);

    if (!result.has(key)) {
      result.set(key, []);
    }

    result.get(key)!.push(item);
  }

  return result;
}

// Отримання значень певної властивості об'єктів
export function getValues<T, K extends keyof T>(
  items: readonly T[],
  key: K
): T[K][] {
  return items.map((item) => item[key]);
}
// Сортування об'єктів за вибраною властивістю
export function sortBy<T>(
  items: readonly T[],
  getValue: (item: T) => string | number
): T[] {
  return [...items].sort((a, b) => {
    const first = getValue(a);
    const second = getValue(b);

    if (typeof first === 'number' && typeof second === 'number') {
      return first - second;
    }

    return String(first).localeCompare(String(second), 'uk');
  });
}