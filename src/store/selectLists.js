import { createSelector } from 'reselect'

export const selectLists = createSelector(
    state => state.lists.lists,
    state => state.tasks,
    (lists, tasks) => {
        lists.map(l => l.undone = tasks[l.id].reduce((a, k) => a + (k.done === false ? 1 : 0), 0))
    }
)