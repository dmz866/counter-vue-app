<script setup lang="ts">
import MyCounter2 from './components/my-counter-2/MyCounter2';
import MyCounter from './components/MyCounter.vue';
</script>

<template>
    <h1>My First App</h1>
    <MyCounter2 :value="6" />
    <MyCounter :value="2" />
</template>
