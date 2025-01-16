<template>
    <h1 class="bg-black">Counter: {{ counter }}</h1>
    <h1>Squared Counter: {{ squaredCounter }}</h1>
    <button class="bg-blue-100 text-red-300" @click="add">+1</button>
    <button @click="minus">-1</button>
</template>

<script lang="ts" src="./MyCounter2"></script>
