import { ref, computed } from 'vue';

export const useCounter = (value: number) => {
    const counter = ref(value);
    const squaredCounter = computed(() => counter.value * counter.value);

    return {
        counter,
        squaredCounter,
    };
};
