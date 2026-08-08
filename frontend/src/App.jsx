import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {

    const [products, setProducts] = useState([]);

    const [environment, setEnvironment] = useState("Development");

    useEffect(() => {

        fetch("http://localhost:5000/products")
            .then(response => response.json())
            .then(data => setProducts(data));

    }, []);

    return (

        <div className="container">

            <header>

                <h1>Enterprise E-Commerce Platform</h1>

                <div className="subtitle">
                    Products are loaded from
                    <strong> PostgreSQL → Express API → React UI</strong>
                </div>

            </header>

            <div className="toolbar">

                <label>
                    Environment
                </label>

                <select
                    value={environment}
                    onChange={(e) => setEnvironment(e.target.value)}
                >

                    <option>Development</option>

                    <option>Test</option>

                    <option>Production</option>

                </select>

                <span className={`badge ${environment.toLowerCase()}`}>
                    {environment}
                </span>

            </div>

            <div className="grid">

                {products.map(product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </div>

        </div>

    );

}

export default App;