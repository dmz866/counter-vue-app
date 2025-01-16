<template>
    <div ref="containerRef" class="flex-1 overflow-y-auto p-4">
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
<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

const props = defineProps<{ messages: ChatMessage[] }>();
const containerRef = ref<HTMLElement>();

watch(props.messages, () => {
    setTimeout(
        () =>
            containerRef.value?.scrollTo({
                top: containerRef.value.scrollHeight,
                behavior: 'smooth',
            }),
        100,
    );
});
</script>
