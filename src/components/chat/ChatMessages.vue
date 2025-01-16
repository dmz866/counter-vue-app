<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';

const { messages } = defineProps<{ messages: ChatMessage[] }>();
</script>

<template>
    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2"></div>
        <!--
        <ChatBubble
            v-for="{ id, itsMine, message, image } in messages"
            :key="id"
            :itsMine="itsMine"
            :image="image"
            :message="message" />
        -->
        <ChatBubble v-for="message in messages" :key="message.id" v-bind="message" />
    </div>
</template>
