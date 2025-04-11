import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="App">
      <h1>Shopping Assistant</h1>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <img src={`http://localhost:8000${item.image}`} alt={item.name} width="100" />
            <p>{item.name} - ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
