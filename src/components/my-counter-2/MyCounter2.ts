import { computed, defineComponent, ref } from 'vue';

export default defineComponent({
    props: {
        value: { type: Number, required: true },
    },
    setup({ value }) {
        //const { value } = defineProps({ value: { type: Number, required: true } });

        const counter = ref(value);
        const squaredCounter = computed(() => counter.value * counter.value);
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
