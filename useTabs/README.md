## Usage

```javascript
import useTabs from "@learning-react-hooks/use-tabs";

const contents = [
  {
    tab: "Section 1",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of Section 2",
  },
];

export default function App() {
  const { currentItem, changeItem } = useTabs(0, contents);

  return (
    <div className="App">
      <h1>learning React Hooks</h1>
      {contents.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
```
