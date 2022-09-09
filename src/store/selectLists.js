import { createSelector } from 'reselect'

export const selectLists = createSelector(
    state => state.lists,
    state => state.tasks,
    (lists, tasks) => {
        return lists.map(l => l.undone = tasks.reduce((a, k) => a + (k.done === false ? k : 0), 0))
    }
)