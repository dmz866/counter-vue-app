import { mount } from "@vue/test-utils";
import { describe } from "node:test";
import { test } from "vitest";
import MyCounter from '../../src/components/MyCounter.vue';

describe('Test My Counter component', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter);
  });
});
