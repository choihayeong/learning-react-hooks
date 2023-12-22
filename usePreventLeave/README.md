## Usage

```javascript
import usePreventLeave from "@learning-react-hooks/use-prevent-leave";

export default function App() {
  const {enablePrevent, disablePrevent} = usePreventLeave();

  return (
    <div className="App">
      <h1>learning React Hooks</h1>

      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
}
```
