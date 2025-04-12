/**
 * Performance optimization utilities
 */

import { useCallback, useMemo, useRef } from 'react';

/**
 * Custom hook for debouncing function calls
 * @param callback The function to debounce
 * @param delay The delay in milliseconds
 * @returns A debounced version of the callback
 */
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};

/**
 * Custom hook for throttling function calls
 * @param callback The function to throttle
 * @param limit The time limit in milliseconds
 * @returns A throttled version of the callback
 */
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  const lastRun = useRef<number>(0);

  return useCallback(
    (...args: Parameters<T>) => {
      const now = Date.now();

      if (now - lastRun.current >= limit) {
        callback(...args);
        lastRun.current = now;
      }
    },
    [callback, limit]
  );
};

/**
 * Custom hook for memoizing expensive computations
 * @param factory The function that creates the value
 * @param deps The dependencies array
 * @returns The memoized value
 */
export const useMemoizedValue = <T>(
  factory: () => T,
  deps: any[]
): T => {
  return useMemo(factory, deps);
};

/**
 * Custom hook for tracking component render performance
 * @param componentName The name of the component
 */
export const useRenderTracking = (componentName: string): void => {
  const renderCount = useRef(0);

  useMemo(() => {
    renderCount.current += 1;
    console.debug(
      `[Performance] ${componentName} rendered ${renderCount.current} times`
    );
  }, [componentName]);
}; 