import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Table, Button, Alert } from "antd";
import axios from 'axios';

interface Category {
    id: number;
    name: string;
    description: string;
    status: string
}

const fetchCategories = async () :Promise<Category[]> => {
    const {data} = await axios.get("http://localhost:3001/categories")
    return data;
};
const CategoryList: React.FC = () => {
    const {
            data: categories,
            isLoading,
            error,
            refetch,
        } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories, 
    });
const columns = [
      {
      title: "ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: Category, b: Category) => a.id - b.id, 
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",   
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
];
 if (error) {
    return (
      <Alert
        message="Lỗi"
        description="Không thể tải dữ liệu. Vui lòng thử lại!"
        type="error"
        showIcon
      />
    );
  }
return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <Button
        type="primary"
        onClick={() => refetch()}
        style={{ marginBottom: 16 }}
        disabled={isLoading}
      >
        Làm mới dữ liệu
      </Button>
      <Table
        dataSource={categories}
        columns={columns}
        rowKey="id"
        loading={isLoading} // Hiển thị spinner khi đang tải
        pagination={{ pageSize: 5 }} // Phân trang, mỗi trang 5 bản ghi
      />
    </div>
  );
};

export default CategoryList;