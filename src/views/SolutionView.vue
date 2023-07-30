<template>
  <div class="task">
    <h1>Tasks</h1>
    <form @submit.prevent="addTask()">
      <label>New task </label>
      <input
        v-model="newTask"
        data-testid="task-input"
        name="newTask"
        autocomplete="off"
      />
      <button data-testid="add-task-btn">Add task</button>
    </form>
    <h2>task list</h2>
    <transition-group name="task-animation" tag="ul">
      <li
        v-for="(task, index) in tasks"
        :key="index"
        :data-testid="`task-item-${index}`"
      >
        <span :class="{ done: task.done }" @click="doneTask(task)">{{
          task.content
        }}</span>
        <div class="action">
          <button
            class="done-btn"
            :data-testid="`done-btn-${index}`"
            @click="doneTask(task)"
          >
            {{ task.done ? "Undo" : "Done" }}
          </button>
          <button class="delete-btn" @click="removeTodo(index)">Delete</button>
        </div>
      </li>
    </transition-group>
    <h4 v-if="tasks.length === 0">Empty list.</h4>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "SolutionView",
  setup() {
    const newTask = ref("");
    const defaultTasks = [
      {
        done: false,
        content: "Go to the moon",
      },
    ];
    const tasksData = JSON.parse(localStorage.getItem("tasks")) || defaultTasks;
    const tasks = ref(tasksData);
    function addTask() {
      if (newTask.value) {
        tasks.value.push({
          done: false,
          content: newTask.value,
        });
        newTask.value = "";
      }
      saveData();
    }
    function doneTask(task) {
      task.done = !task.done;
      saveData();
    }
    function removeTodo(index) {
      tasks.value.splice(index, 1);
      saveData();
    }
    function saveData() {
      const storageData = JSON.stringify(tasks.value);
      localStorage.setItem("tasks", storageData);
    }
    return {
      tasks,
      newTask,
      addTask,
      doneTask,
      removeTodo,
      saveData,
    };
  },
  transition: {
    name: "task-animation",
    enterActiveClass: "animate__fadeInRight",
    leaveActiveClass: "animate__fadeOutLeft",
  },
};
</script>
<style>
.task {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  width: 100%;
}
.task h1 {
  font-weight: bold;
  font-size: 28px;
  text-align: center;
}
.task form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.task form label {
  font-size: 14px;
  font-weight: bold;
}
.task form input,
.task form button {
  height: 48px;
  box-shadow: none;
  outline: none;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 6px;
  font-size: 18px;
  margin-top: 6px;
  margin-bottom: 12px;
}
.task form input {
  background-color: transparent;
  border: 2px solid rgba(255, 255, 255, 0.35);
  color: inherit;
}
.task button {
  cursor: pointer;
  background-color: #68a8aa;
  border: 1px solid #68a8aa;
  color: #fff;
  font-weight: bold;
  outline: none;
  border-radius: 6px;
}
.action {
  min-width: 106px;
}
.action .done-btn {
  background-color: #68a8aa;
  border: 1px solid #68a8aa;
}
.action .delete-btn {
  background-color: #e74c3c;
  border: 1px solid #e74c3c;
}
.task h2 {
  font-size: 22px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.35);
  padding-bottom: 6px;
}
.task ul {
  padding: 10px;
}
.task ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.35);
  padding: 12px 24px;
  border-radius: 6px;
  margin-bottom: 12px;
}
.task ul li span {
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 12px;
}
.task ul li .done {
  text-decoration: line-through;
}
.task ul li button {
  font-size: 12px;
  padding: 6px;
  min-width: 50px;
  margin-bottom: 2px;
}
.task ul li button:first-child {
  margin-right: 5px;
}
.task h4 {
  text-align: center;
  opacity: 0.5;
  margin: 0;
}
.task-animation-enter-active,
.task-animation-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.task-animation-enter,
.task-animation-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
