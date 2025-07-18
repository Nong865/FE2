import { useQuery } from "@tanstack/react-query";
import { Table} from "antd";

function OrderList(){
const fetchOrders = async () => {
    const res = await fetch("http://localhost:3001/orders")
    return res.json();
}
const {data, isLoading} = useQuery({
  queryKey: ["orders"],
    queryFn: fetchOrders,
});
const columns = [
      {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Tên Đơn Hàng",
      dataIndex: "customerName",
    },
    { title: "Tổng",
      dataIndex: "total",   
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
];
return (
    <div>
      <h2>Danh sách đơn hàng</h2>
      <Table
        dataSource={data}
        columns={columns}
        rowKey={"id"}
        loading={isLoading}
      />
    </div>
  );
};

export default OrderList;