import { useQuery } from '@tanstack/react-query';
import { List, Spin } from 'antd';
import api from './services/api';

type Category = {
  id: number;
  name: string;
};

async function fetchCategories(): Promise<Category[]> {
  const response = await api.get('categories');
  return response.data.map((item: any, idx: number) => ({ id: item.id || idx + 1, name: item.name || item }));
}

function CategoryList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['categories'], queryFn: fetchCategories });

  if (isLoading) return <Spin />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <List
      bordered
      dataSource={data}
      renderItem={(category: Category) => (
        <List.Item>
          {category.name}
        </List.Item>
      )}
    />
  );
}

export default CategoryList;