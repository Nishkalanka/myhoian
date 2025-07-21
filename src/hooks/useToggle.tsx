import { useState, useCallback } from 'react';

/**
 * Пользовательский хук для управления булевым состоянием переключения (например, для диалогов, drawer-ов).
 * @param initialValue Начальное булево значение.
 * @returns Кортеж, содержащий текущее состояние и функции для его управления.
 */
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  return [value, toggle, setTrue, setFalse] as const;
};

// Мы также можем создать более специфичную версию, если это необходимо:
export const useDrawerToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const openDrawer = useCallback(() => setIsOpen(true), []);
  const closeDrawer = useCallback(() => setIsOpen(false), []);
  const toggleDrawer = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, openDrawer, closeDrawer, toggleDrawer };
};
