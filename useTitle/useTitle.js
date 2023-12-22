export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitleElement = document.querySelector("title");
    htmlTitleElement.innerText = title;
  }

  useEffect(updateTitle, [title]);

  return setTitle;
}