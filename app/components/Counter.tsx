'use client';

import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks';
import { increment, decrement, incrementByAmount } from '@/lib/redux/features/counter/counterSlice';

/**
 * Counter Component Example
 * 
 * This component demonstrates how to:
 * 1. Read state from the store using `useAppSelector`
 * 2. Dispatch actions to update the store using `useAppDispatch`
 */

export default function Counter() {
  // Select the counter value from the Redux state
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold">Redux Counter: {count}</h2>
      
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Decrement
        </button>
        
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Increment
        </button>
      </div>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Add 5
      </button>
    </div>
  );
}
