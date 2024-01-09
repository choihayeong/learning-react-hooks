## Usage

```javascript
import useFadeIn from "@learning-react-hooks/use-fade-in";

export default function App() {
  const fadeInEl = useFadeIn(2, 1);
  const fadeInEl2 = useFadeIn(5);

  return (
    <div className="App">
      <h1 {...fadeInEl}>learning React Hooks</h1>
      <p {...fadeInEl2}>Nostrum
        voluptates quisquam officiis? Nostrum eveniet rem porro eius odio
        suscipit nihil voluptatum, in accusantium, molestiae eum aperiam
        veritatis quae ex similique.</p>
    </div>
  )
}
```