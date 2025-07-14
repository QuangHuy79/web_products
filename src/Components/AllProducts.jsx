import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import Product from "./Product";
import CategoryMenu from "./CategoryMenu";
import Pagination from "./Pagination";

const displayCategory = {
  all: "Tất cả",
  "men's clothing": "Đồ Nam",
  "women's clothing": "Đồ Nữ",
  electronics: "Điện tử",
  jewelery: "Trang sức",
};

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const category = searchParams.get("category") || "all";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const productsPerPage = 4;

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Lỗi khi gọi API:", err));
  }, []);

  const handleCategoryChange = (newCategory) => {
    setSearchParams({ category: newCategory, page: 1 });
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams({ category, page: newPage });
    }
  };

  const filteredProducts =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLast = page * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);

  const handleViewDetails = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div>
      <CategoryMenu
        category={category}
        onCategoryChange={handleCategoryChange}
        displayCategory={displayCategory}
      />

      <div className="product-wrapper">
        {currentProducts.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            onViewDetails={() => handleViewDetails(product.id)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}

export default AllProducts;
