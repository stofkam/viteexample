
function useOnClickOutside(ref, handler) {
    useEffect(() => {
        const listener = (event) => {
            // Если клик был внутри элемента — ничего не делаем
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            // Иначе вызываем закрытие
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}
// Использование
// const menuRef = useRef();
// useOnClickOutside(menuRef, () => setIsOpen(false));