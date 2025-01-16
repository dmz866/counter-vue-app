<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
    <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
        <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
            <span>Mi esposa</span>
        </div>
        <ChatMessages :messages />
        <MessageBox />
    </div>
</template>
<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import { ref } from 'vue';

const messages = ref<ChatMessage[]>([
    {
        id: new Date().getTime(),
        message: 'shi',
        itsMine: true,
    },
    {
        id: new Date().getTime(),
        message: 'no',
        itsMine: false,
        image: 'https://yesno.wtf/assets/no/27-8befe9bcaeb66f865dd3ecdcf8821f51.gif',
    },
]);
</script>
