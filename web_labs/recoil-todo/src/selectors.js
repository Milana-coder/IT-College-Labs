
import { selector } from 'recoil';
import { todoListState } from './atoms';

export const incompleteCount = selector({
  key: 'incompleteCount',
  get: ({ get }) =>
    get(todoListState).filter((item) => !item.done).length,
});
