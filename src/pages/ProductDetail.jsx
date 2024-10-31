import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const products = [
    { id: 0, name: "Cake", price: 1000 },
    { id: 1, name: "Cookie", price: 2000 },
    { id: 2, name: "Pastry", price: 3000 },
    { id: 3, name: "Donut", price: 4000 },
  ];

  const productId = parseInt(id, 10); // Convert id to integer
  const product = products.find((product) => product.id === productId);

  const goBack = () => {
    navigate("/product");
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <h1>Product Detail</h1>
      <hr />
      <p>Product ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <button onClick={goBack}>Back</button>
    </>
  );
};

export default ProductDetail;
