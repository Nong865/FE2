import { useQuery } from "@tanstack/react-query";
import { Image, Spin, Table } from "antd";
import Header from "./Header";
import { Link, useSearchParams } from "react-router-dom";

interface User {
  id: string;
  name: string;
  price: number;
}
function UserList() {

  const [searchParams] = useSearchParams();

  const name = searchParams.get("name");

  const fetchUsers = async () => {
    const res = await fetch(
      `http://localhost:3001/users?name_like=${name || ""}`
    );
    return res.json();
  };
  
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id: number) => {
        return <Link to={`/user/detail/${id}`}>ID: {id}</Link>; 
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
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
        pagination={{ pageSize: 5 }} 
      />
    </div>
  );
}

export default UserList;