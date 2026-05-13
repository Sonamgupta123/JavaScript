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