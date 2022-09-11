import {createSelector} from 'reselect'

const lists = state => state.lists.lists || []
const tasks = state => state.tasks || []

export const selectLists = createSelector(
    [lists, tasks],
    (lists, tasks) => {
        return lists.map(l => {
            return Object.keys(tasks).length > 0 && tasks.hasOwnProperty(l.id) ? {
                name: l.name,
                id: l.id,
                undone: tasks[l.id].reduce((a, t) => !t.done ? a + 1 : a + 0, 0)
            } : l
        })
    }
)

// export const selectTasksOnToday = createSelector(
//     [state => state.lists.today, state => state.tasks],
//     (today, tasks) => {
//         return Object.keys(tasks).length > 0 ?
//     }
// )