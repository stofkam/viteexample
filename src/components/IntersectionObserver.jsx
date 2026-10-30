import React, { useEffect, useRef, useState } from "react";

const IntersectionObservers = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // 1. Создаем наблюдателя

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // entry.isIntersecting — true, если элемент появился во вьюпорте
        if (entry.isIntersecting) {
          setIsVisible(true);
          console.log("Я ВИДИМ!");
          // Опционально: перестаем следить, если нужно сработать только 1 раз
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.5, // Сработает, когда 50% элемента будет видно
      },
    );
    // 2. Начинаем следить за элементом
    observer.observe(element);
    // 3. Очистка (обязательно отключаем наблюдателя при удалении компонента)
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div style={{ height: "150vh" }}>
      <p>Скролль вниз...</p>
      <div
        ref={ref}
        style={{
          marginTop: "100vh",
          height: "200px",
          background: isVisible ? "green" : "red",
          transition: "background 1s",
        }}
      >
        {isVisible ? "Я ВИДИМ!" : "Я спрятан"}
      </div>
    </div>
  );
};

export default IntersectionObservers;
