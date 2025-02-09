document.addEventListener('DOMContentLoaded', () => {
    const taskDialog = document.getElementById('task-dialog');
    const taskForm = document.getElementById('task-form');
    const cancelDialogButton = document.getElementById('cancel-dialog');
    const addTaskButton = document.getElementById('add-task');
    const plannedTasksContainer = document.getElementById('planned-tasks');
    const inProgressTasksContainer = document.getElementById('in-progress-tasks');
    const testingTasksContainer = document.getElementById('testing-tasks');
    const doneTasksContainer = document.getElementById('done-tasks');

    let tasks = [];

    const openDialog = (task = null) => {
        if(task) {
            document.getElementById('dialog-title').textContent = 'Редактировать задачу';
            document.getElementById('task-title').value = task.title;
            document.getElementById('task-desc').value = task.description;
            document.getElementById('task-deadline').value = task.deadline;
            document.getElementById('task-id').value = task.id;
        }else{
            document.getElementById('dialog-title').textContent = 'Новая задача';
            taskForm.reset();
            document.getElementById('task-id').value = '';
        }
        taskDialog.showModal();
    };
}