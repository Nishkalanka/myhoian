import { useState, useCallback } from 'react';

/**
 * Универсальный хук для управления булевым состоянием (модалки, меню, drawer).
 * Возвращает объект для удобной деструктуризации.
 */
export const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return { isOpen, toggle, open, close };
};

// Алиас для обратной совместимости, если хочется более специфичное имя
// Но лучше использовать просто useToggle и переименовывать при деструктуризации
export const useDrawerToggle = useToggle;
