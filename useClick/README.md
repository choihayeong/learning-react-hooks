## Usage

```javascript
import useClick from "@learning-react-hooks/use-click";

export default function App() {
  const getElementContent = (ele) => {
    console.log(ele.target.textContent)
  }

  const title = useClick(getElementContent);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>

      <h2 ref={title}>Hello There!</h2>
    </div>
  );
}
```
