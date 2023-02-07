import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Show product detail {id} </p>
    </div>
  );
};

export default ProductDetailPage;
