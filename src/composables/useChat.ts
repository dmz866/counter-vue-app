import { sleep } from "@/helpers/sleep";
import type { ChatMessage } from "@/interfaces/chat-message.interface";
import type { YesNoResponse } from "@/interfaces/yes-no-response.interface";
import { ref } from "vue";

export const useChat = () => {
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

  const addNewMessage = async (message: string) => {
    messages.value.push({
      id: new Date().getTime(),
      message,
      itsMine: true,
    });

    if (!message.endsWith('?')) return;

    sleep(2);
    const { answer, image } = await getResponse();
    messages.value.push({
      id: new Date().getTime(),
      message: answer,
      image,
      itsMine: false,
    });
  };

  const getResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data: YesNoResponse = await resp.json();

    return data;

  };

  return {
    messages,
    addNewMessage
  };
};
