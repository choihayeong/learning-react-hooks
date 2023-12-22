## Usage

custom hooks : useClick, useHover를 하나의 references에 쓰고 싶다면...

```javascript
import useClick from "@learning-react-hooks/use-click";
import useHover from "@learning-react-hooks/use-hover";

export default function App() {
  const getElementContent = (ele) => {
    console.log(ele.target.textContent)
  }

  const title = useClick(getElementContent);
  const title__span = useHover(getElementContent);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>

      <h2 ref={title}>
        <span ref={title__span}>Hello There!</span>
      </h2>
    </div>
  );
}
```
