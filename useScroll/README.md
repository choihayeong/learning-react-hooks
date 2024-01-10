## Usage

```javascript
import useScroll from "@learning-react-hooks/use-scroll ";

export default function App() {
  const { y } = useScroll();

  return (
    <div className="App" style={{ height: "300vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>learning React Hooks</h1>
    </div>
  );
}
```