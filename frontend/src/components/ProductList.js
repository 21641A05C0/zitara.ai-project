import React, { useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>{prod.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
