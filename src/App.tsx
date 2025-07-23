import ProductList from "./components/ProductList";
import "./App.css";
import CategoryList from "./components/CategoryList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BrandList from "./components/BrandList";
import OrderList from "./components/OrderList";
import UserList from "./components/UserList";
import ProductDetail from "./components/ProductDetail";


function App() {
  const router = createBrowserRouter([
     {
      path: "/",
      element: <ProductList />,
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
      path: "/product/detail/:productID",
      element:  <ProductDetail/>
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
