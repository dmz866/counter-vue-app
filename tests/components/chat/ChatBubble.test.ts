import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import ChatBubble from '../../../src/components/chat/ChatBubble.vue';

describe('test ChatBubble', () => {
  test('render ChatBubble', () => {
    const message = 'Hello';
    const wrapper = mount(ChatBubble, { props: { message, itsMine: true } });

    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).contain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBeFalsy();
  });
});
