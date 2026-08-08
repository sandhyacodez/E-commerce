function ProductCard({ product }) {
    return (
        <div className="card">
            <h3>{product.name}</h3>

            <p className="price">
                ₹ {product.price.toLocaleString()}
            </p>
        </div>
    );
}

export default ProductCard;