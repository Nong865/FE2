import { useQuery } from "@tanstack/react-query";
import { Table} from "antd";

function BrandList(){
const fetchBrands = async () => {
    const res = await fetch("http://localhost:3001/brands")
    return res.json();
}
const {data, isLoading} = useQuery({
  queryKey: ["brands"],
    queryFn: fetchBrands,
});
const columns = [
      {
      title: "ID",
      dataIndex: "id",
      key: "id", 
    },
    {
      title: "Tên Thương Hiệu",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Xuất xứ",
      dataIndex: "origin",
      key: "origin",
    },
    { title: "Năm",
      dataIndex: "established",
      key: "established",   
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
];
return (
    <div>
      <h2>Danh sách Thương Hiệu</h2>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={"id"}
        loading={isLoading}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default BrandList;