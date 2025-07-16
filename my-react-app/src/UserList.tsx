import { useQuery } from '@tanstack/react-query';
import { List, Spin } from 'antd';
import api from './services/api';

type User = {
  id: number;
  name: string;
};

async function fetchUsers(): Promise<User[]> {
  const response = await api.get('users');
  return response.data.map((item: any) => ({ id: item.id, name: item.name }));
}

function UserList() {
  const { data, isLoading, error } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  if (isLoading) return <Spin />;
  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <List
      bordered
      dataSource={data}
      renderItem={(user: User) => (
        <List.Item>
          {user.name}
        </List.Item>
      )}
    />
  );
}

export default UserList; 