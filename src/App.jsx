import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import LoginPage from "./pages/LoginPage";
import SinglePostPage from "./pages/SinglePostPage";
import ProductsPage from "./pages/ProductsPage";
import Layout from "./components/Layout";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="articles" element={<PostsPage />} />
          <Route path="articles/:postId" element={<SinglePostPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="products" element={<ProductsPage />} />

          <Route path="*" element={<div>Страница не найдена 404</div>} />
        </Route>
        <Route path="/something" element={<div>Something</div>} />
      </Routes>
    </>
  );
}

export default App;
