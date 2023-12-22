## Usage

```javascript
import useConfirm from "@learning-react-hooks/use-confirm";

export default function App() {
  const afterLeaveThisPage = () => console.log("You're out this page");
  const abort = () => console.log("you canceled");

  // const getConfirmLeave = useConfirm("Are you sure?", afterLeaveThisPage);
  const getConfirmLeave = useConfirm("Are you sure?", afterLeaveThisPage, abort);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>

      <button onClick={getConfirmLeave}>Leave this page</button>
    </div>
  );
}
```
