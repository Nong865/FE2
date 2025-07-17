import { useQuery } from "@tanstack/react-query";
import {  Spin, Table } from "antd";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

function ProductList() {
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:3001/products");
    return res.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
    },

    {
      title: "Description",
      dataIndex: "description",
    },
  ];

  return (
    <div>
      <h2 style={{color: "black"}}>Danh sách sản phẩm</h2>
      {isLoading ? (
        <Spin />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <Table dataSource={data} columns={columns} rowKey="id" />
      )}
    </div>
  );
}

export default ProductList;