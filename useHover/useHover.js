export const useHover = (onHover) => {
  if (typeof onHover !== "function") {
    return;
  }

  const element = useRef();

  useEffect(() => {
    element.current?.addEventListener("onmouseenter", onHover);

    return () => element.current?.removeEventListener("onmouseenter", onHover);
  }, [])

  return element;
}