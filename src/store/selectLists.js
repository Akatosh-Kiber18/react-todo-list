export const selectLists = reselect(
    s => s.lists,
    s => s.tasks,
    (lists, tasks) => {

    }
)