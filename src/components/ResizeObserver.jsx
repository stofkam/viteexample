import React, { useEffect, useRef, useState } from "react";

const ResizableBox = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const newWidth = entries[0].contentRect.width;
      setWidth(newWidth);
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container" style={{ marginTop: "10px" }}>
      {/* Пользователь может менять размер этого div (через CSS resize) */}
      <div
        ref={ref}
        style={{
          resize: "horizontal",
          overflow: "auto",
          border: "1px solid black",
          padding: 20,
        }}
      >
        <h3>Ширина: {Math.round(width)}px</h3>
        {/* Адаптивная логика на уровне JS */}

        {width < 300 ? (
          <p>Compact View (Icon only)</p>
        ) : (
          <p>Full View (Detailed text description...)</p>
        )}
      </div>
    </div>
  );
};

export default ResizableBox;
