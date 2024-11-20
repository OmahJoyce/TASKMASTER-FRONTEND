const apiUrl = "https://your-backend.fly.dev/api/tasks"; // Replace with your backend URL

// Load tasks on page load
window.onload = fetchTasks;

async function fetchTasks() {
    try {
        const response = await fetch(apiUrl);
        const tasks = await response.json();
        displayTasks(tasks);
    } catch (error) {
        console.error("Error fetching tasks:", error);
    }
}

function displayTasks(tasks) {
    const tasksContainer = document.getElementById("tasksContainer");
    tasksContainer.innerHTML = "";
    tasks.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Priority: ${task.priority}</p>
            <p>Deadline: ${new Date(task.deadline).toLocaleDateString()}</p>
        `;
        tasksContainer.appendChild(taskElement);
    });
}
