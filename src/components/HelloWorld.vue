<template>
  <div>
    <button @click="fetchExample">Fetch Example.txt</button>
    <div v-if="exampleContent">{{ exampleContent }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000'
});

const exampleContent = ref(null);

const fetchExample = async () => {
  try {
    const response = await axiosInstance.get('/example');
    exampleContent.value = response.data;
  } catch (error) {
    console.error('Error fetching example.txt:', error);
  }
};
</script>
