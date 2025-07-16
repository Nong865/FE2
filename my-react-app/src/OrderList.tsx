import { useQuery } from '@tanstack/react-query';
import { List, Spin } from 'antd';
import api from './services/api';

type Order = {
  id: number;
  customer: string;
};

async function fetchOrders(): Promise<Order[]> {
  const response = await api.get('orders');
  return response.data.map((item: any) => ({ id: item.id, customer: item.customer || item.title }));
}

function OrderList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['orders'], queryFn: fetchOrders });

  if (isLoading) return <Spin />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <List
      bordered
      dataSource={data}
      renderItem={(order: Order) => (
        <List.Item>
          {order.customer}
        </List.Item>
      )}
    />
  );
}

export default OrderList;