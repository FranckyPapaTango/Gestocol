import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: 0 });

  useEffect(() => {
    axios.get("http://localhost:8000/products/")
      .then(res => setProducts(res.data));
  }, []);

  const addProduct = () => {
    axios.post("http://localhost:8000/products/", newProduct)
      .then(res => setProducts([...products, res.data]));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Gestocol - Produits</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price} €</li>
        ))}
      </ul>
      <h2>Ajouter un produit</h2>
      <input
        type="text"
        placeholder="Nom"
        onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Prix"
        onChange={e => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
      />
      <button onClick={addProduct}>Ajouter</button>
    </div>
  );
}
