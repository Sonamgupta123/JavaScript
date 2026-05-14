let tasks = [];

function addTask(task) {
    tasks.push(task);
    console.log(`Task Added: ${task}`);
}
function showTasks() {
    console.log("\nYour Tasks:");
    
    if (tasks.length === 0) {
        console.log("No tasks available.");
        return;
    }

    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
}
function removeTask(index) {
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    let removed = tasks.splice(index - 1, 1);
    console.log(`Removed: ${removed}`);
}
addTask("Learn JavaScript");
addTask("Build a Project");
addTask("Practice DSA");
