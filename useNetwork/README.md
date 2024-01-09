## Usage

```javascript
import useNetwork from "@learning-react-hooks/use-network";

export default function App() {
  const onLine = useNetwork();

  return (
    <div className="App">
      <h1>learning React Hooks</h1>
      <p>{onLine}</p>
    </div>
  )
}
```