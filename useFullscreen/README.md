## Usage

```javascript
import useFullscreen from "@learning-react-hooks/use-fullscreen";

export default function App() {
  const onFullS = (isFull) => console.log(isFull ? "Full Screen" : "Exit!");

  const {element, triggerFull, exitFull} = useFullscreen(onFullS);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>

      <div>
        <figure>
          <img ref={element} src="https://picsum.photos/300/200" alt="" />
        </figure>

        <button type="button" onClick={exitFull}>Exit Full screen</button>
      </div>


      <button type="button" onClick={triggerFull}>Make Full Screen</button>
    </div>
  );
}
```
