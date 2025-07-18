import ProductList from "./components/ProductList";
import "./App.css";
import CategoryList from "./components/CategoryList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrandList from "./components/BrandList";
import OrderList from "./components/OrderList";
import UserList from "./components/UserList";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <h1>Trang chủ</h1>
    },
    {
      path:"/products",
      element: <ProductList/>
    },
    {
      path:"/categories",
      element: <CategoryList/>
    },
    {
      path:"/brands",
      element: <BrandList/>
    },
    {
      path:"/orders",
      element: <OrderList/>
    },
    {
      path:"/users",
      element: <UserList/>
    }
  ])
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
