import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

// ?
// sort=popular
// &
// page=1
// &
// fbrand=1584

// query params = search params

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get("https://dummyjson.com/products?limit=100");
      setProducts(response.data.products);
    };
    const getCategories = async () => {
      const response = await axios.get(
        "https://dummyjson.com/products/categories"
      );
      setCategories(response.data);
    };
    getProducts();
    getCategories();
  }, []);


  const category = searchParams.get("cat");
  const filteredProducts = products.filter((product) =>
    product.category === category
  );

  return (
    <div>
      ProductsPage
      <div className="categories">
        <button
          onClick={() => setSearchParams({})}
        >Всё</button>
        {categories &&
          categories.map((category) => (
            <button 
                key={category}
                onClick={() => setSearchParams({cat: category})}
            >{category}</button>
          ))}
      </div>
      <ul className="products">
        {category ?
          filteredProducts.map((product) => <li key={product.id}>{product.title}</li>):
          products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>
    </div>
  );
};
export default ProductsPage;
