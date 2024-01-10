## Usage

```javascript
import useAxios from "@learning-react-hooks/use-axios";

export default function App() {
  const { loading, data, error, refetch } = useAxios({ url: "https://yts.mx/api/v2/list_movies.json" });

  return (
    <div className="App">
      <h2>#useAxios</h2>
      <h3>{ data && data.status }</h3>
      <h3>{ loading && "loading" }</h3>
      <button type="button" onClick={refetch}>REFETCH</button>
    </div>
  );
}
```
