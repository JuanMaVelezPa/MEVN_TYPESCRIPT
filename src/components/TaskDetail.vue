<template>
  <div class="col-md-4 offset-md-">
    <form @submit.prevent="handleUpdate()" class="card card-body">
      <h1 class="text-center 53 mb-3">task detail</h1>

      <input
        type="text"
        v-model="currentTask.title"
        class="form-control mb-3"
      />
      <textarea
        rows="3"
        v-model="currentTask.description"
        class="form-control mb-3"
      ></textarea>

      <button class="btn btn-primary">Update</button>
    </form>
    <div class="text-center mb-3">
      <button @click="handleDelete()" class="btn btn-danger mt-3">Delete</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      const res = await getTask(id);
      console.log(res);
      this.currentTask = res.data;
    },
    async handleUpdate() {
      if (typeof this.$route.params.id === "string") {
        const res = await updateTask(this.$route.params.id, this.currentTask);
        console.log(res);
        this.$router.push("/tasks");
      }
    },
    async handleDelete() {
      if (typeof this.$route.params.id === "string") {
        const res = await deleteTask(this.$route.params.id);
        console.log(res);
        this.$router.push("/tasks");
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
    console.log(this.$route.params.id);
  },
});
</script>
