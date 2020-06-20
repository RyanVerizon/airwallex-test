import { useLayoutEffect, useState } from 'react';

export const useLockBodyScroll = () => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);
};

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  return [
    values,
    (formItem) => {
      setValues({
        ...values,
        ...formItem,
      });
    },
  ];
};
