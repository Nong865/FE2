import ProductList from "./components/ProductList";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import ProductDetail from "./components/ProductDetail";
import ProductCreate from "./components/ProductCreate";
import UserList from "./components/UserList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList />,
    },
    {
      path: "/products",
      element: <ProductList />,
    },
    {
      path: "/product/detail/:productId",
      element: <ProductDetail />,
    },
     {
      path: "/product/create",
      element: <ProductCreate />,
    },
    {
      path: "/categories",
      element: <CategoryList />,
    },
    {
      path: "/orders",
      element: <UserList />,
    },
    {
      path: "/users",
      element: <UserList />,
    },
    {
      path: "/brands",
      element: <CategoryList />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;