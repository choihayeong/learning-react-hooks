export const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") {
    return;
  }

  useEffect(() => {
    const handle = (event) => {
      const { clientY } = event;

      if (clientY <= 0) {
        onBefore();
      } 
    }

    window.addEventListener("mouseleave", handle);

    return () => window.removeEventListener("mouseleave", handle);
  }, [])
}