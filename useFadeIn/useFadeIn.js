export const useFadeIn = (duration, delay) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      const { current } = element;

      current.style.setProperty(
        "transition",
        `opacity ${duration}s ease-out ${delay}s`
      );
      current.style.setProperty("opacity", 1);
    }
  }, [])

  return { 
    ref : element, 
    style : {opacity : 0}  
  };
}