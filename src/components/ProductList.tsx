import { useQuery } from "@tanstack/react-query";
import { Image, Table } from "antd";
import { Link, useSearchParams } from "react-router-dom";
import Header from "./Header";

interface Product  {
  id: string;
  name: string;
  price: number;
  };
function ProductList() {
  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  const fetchProducts = async () => {
    const res = await fetch(`http://localhost:3001/products?name_like=${name || ''}`);
    return res.json();
  };

  const {data, isLoading, error} = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id: number) => {
         return <Link to={`/product/detail/${id}`}>ID: {id}</Link>;
      }
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: (a: Product, b: Product) => a.price - b.price,
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (src: string, recourd: Product, index: number) => {
        return <Image src={src} width={300} alt={recourd.name} />;
      },
    },
    {
      title: "Description"
    }
  ];

  return (
    <div>
      <Header />
      {error && <p>Error: {error.message}</p>}
      <Table 
        dataSource={data}
        columns={columns}
        rowKey={"id"}
        loading={isLoading}
        pagination={{pageSize: 5}}      
      />
    </div>
  );
}

export default ProductList;
