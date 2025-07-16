import { Button } from "antd";
import ProductList from "./components/ProductList";
import CategoryList from "./components/CategoryList";


function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Management</h1>
      <Button type="primary" style={{ marginBottom: "16px" }}>
        Add Product
      </Button>
      <ProductList />
      <CategoryList/>
    </div>
  );
}

export default App;
