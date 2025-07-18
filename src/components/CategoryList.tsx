import { useQuery } from "@tanstack/react-query";
import { Table} from "antd";

function CategoryList(){
const fetchCategories = async () => {
    const res = await fetch("http://localhost:3001/categories")
    return res.json();
}
const {data, isLoading} = useQuery({
  queryKey: ["categories"],
    queryFn: fetchCategories,
});
const columns = [
      {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
];
return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={"id"}
        loading={isLoading}
      />
    </div>
  );
};

export default CategoryList;