## Usage

```javascript
import useTitle from "@learning-react-hooks/use-title";

export default function App() {
  const getTitle = useTitle("Loading..........");
  // setTimeOut(() => getTitle("Home"), 3000);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>
    </div>
  );
}
```
