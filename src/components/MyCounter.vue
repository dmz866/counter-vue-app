<template>
    <h1 class="bg-red text-red">Counter: {{ counter }}</h1>
    <h1>Squared Counter: {{ squaredCounter }}</h1>
    <button @click="add">+1</button>
    <button @click="minus">-1</button>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

//const { value } = defineProps({ value: { type: Number, required: true } });
const { value } = defineProps<{ value: number }>();

const counter = ref(value);
const squaredCounter = computed(() => counter.value * counter.value);
const add = () => counter.value++;
const minus = () => counter.value--;
</script>

<style scoped>
h1 {
    color: aqua;
}
</style>
