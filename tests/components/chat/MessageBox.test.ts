/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import MessageBox from '../../../src/components/chat/MessageBox.vue';

describe('test MessageBox', () => {
  const wrapper = mount(MessageBox);

  test('emits addNewMessage when clicking on button', async () => {
    const message = 'Hello';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('addNewMessage')).toBeTruthy();
    expect((wrapper.vm as any).message).toBe('');
  });
});
