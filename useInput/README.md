## Usage

```javascript
import useInput from "@learning-react-hooks/use-input";

const App = () => {
  const hasAt = value => !value.includes("@"); // validator
  // const maxLen = value => value.length <= 10;

  const name = useInput("ABC ", hasAt);

  return (
    <div className="App">
      <input placeholder="Name" {...name} />
      {/* <input placeholder="Name" value={name.value} onChange={name.onChange} /> */}
    </div>
  );
};
```
