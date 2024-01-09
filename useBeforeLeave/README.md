## Usage

```javascript
import useBeforeLeave from "@learning-react-hooks/use-before-leave";

export default function App() {
  const throwAlertMessage = () => console.log("Are you sure to leave this page?");

  useBeforeLeave(throwAlertMessage);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>
    </div>
  )
}
```