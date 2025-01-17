import { useCounter } from "../../src/composables/useCounter";
import { describe, expect, test } from "vitest";

describe('test useCounter', () => {
    test('init counter with initial value', () => {
        const val = 10;
        const { counter, squaredCounter } = useCounter(val);

        expect(counter.value).toBe(val);
        expect(squaredCounter.value).toBe(val * val);
    });
});
