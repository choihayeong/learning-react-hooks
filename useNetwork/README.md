## Usage

```javascript
import useNetwork from "@learning-react-hooks/use-network";

export default function App() {
  const handleNetworkChange = (online) => console.log(online ? "online status" : "offine 🚫");

  const onLine = useNetwork(handleNetworkChange);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>
      <p>{onLine}</p>
    </div>
  )
}
```