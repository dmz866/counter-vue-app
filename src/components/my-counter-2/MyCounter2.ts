import { useCounter } from '@/composables/useCounter';
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true },
    },
    setup({ value }) {
        //const { value } = defineProps({ value: { type: Number, required: true } });

        const { counter, squaredCounter } = useCounter(value);
        const add = () => counter.value++;
        const minus = () => counter.value--;

        return {
            counter,
            squaredCounter,
            add,
            minus,
        };
    },
});
