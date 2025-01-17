import { mount } from "@vue/test-utils";
import { describe } from "node:test";
import { expect, test } from "vitest";
import MyCounter from '../../src/components/MyCounter.vue';

describe('Test My Counter component', () => {
  test('should match snapshot', () => {
    const wrapper = mount(MyCounter);

    expect(wrapper.html()).toMatchSnapshot();
  });

  test('should render the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: { value }
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="squared-label"]').text()).toContain(`Squared Counter: ${value * value}`);
  });

  test('should increment the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: { value }
    });
    const btn = wrapper.find('button');
    await btn.trigger('click');

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value + 1}`);
  });
});
