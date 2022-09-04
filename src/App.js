import "./App.css";
import Product from "./components/Product";

function App() {
  const products = [
    {
      title: "Dehydrated Water",
      description: "Just add 2 cups of water for a refreshing drink",
      cost: 49.99,
      initialStock: 14,
    },
    {
      title: "Toy Car",
      description: "Made out of Legos",
      cost: 19.99,
      initialStock: 55,
    },
    {
      title: "iPad",
      description: "Really expensive toy",
      cost: 499.99,
      initialStock: 64,
    },
  ];
  return (
    <div className="App">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}

export default App;
