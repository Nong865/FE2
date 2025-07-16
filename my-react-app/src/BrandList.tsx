import { useQuery } from '@tanstack/react-query';
import { List, Spin } from 'antd';
import api from './services/api';

type Brand = {
  id: number;
  name: string;
};

async function fetchBrands(): Promise<Brand[]> {
  const response = await api.get('brands');
  return response.data.map((item: any) => ({ id: item.id, name: item.name }));
}

function BrandList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['brands'], queryFn: fetchBrands });

  if (isLoading) return <Spin />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <List
      bordered
      dataSource={data}
      renderItem={(brand: Brand) => (
        <List.Item>
          {brand.name}
        </List.Item>
      )}
    />
  );
}

export default BrandList;