## Usage

```javascript
import useNotification from "@learning-react-hooks/use-notification";

export default function App() {
  const triggerNotification = useNotification("Can you see this NOTIFICATION?", { body: "If you saw this NOTIFICATION, shake a carrot 🥕! "});

  return (
    <div className="App">
      <h1>learning React Hooks</h1>

      <button type="button" onClick={triggerNotification}>show Notification</button>
    </div>
  )
}
```