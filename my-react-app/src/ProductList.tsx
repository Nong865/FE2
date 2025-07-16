import { useQuery } from '@tanstack/react-query';
import { List, Spin } from 'antd';
import api from './services/api';

type Product = {
  id: number;
  name: string;
};

async function fetchProducts(): Promise<Product[]> {
  const response = await api.get('products');
  return response.data.map((item: any) => ({ id: item.id, name: item.name || item.title }));
}

function ProductList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['products'], queryFn: fetchProducts });

  if (isLoading) return <Spin />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <List
      bordered
      dataSource={data}
      renderItem={(product: Product) => (
        <List.Item>
          {product.name}
        </List.Item>
      )}
    />
  );
}

export default ProductList;
