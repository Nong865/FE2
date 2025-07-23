import { Button, Form, Input, InputNumber} from "antd";

function ProductCreate() {
    const [form] = Form.useForm();
    const handleSubmit = (value: any) => {
        console.log("handleSubmit", value);
        
    }
    return (
        <div className="mt-6 max-w-[1200px] mx-auto">
            <h1 className="text-3xl font-bold text-center">Product Create</h1>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
                <Form.Item 
                    label="Product Name*" 
                    name="name" 
                    rules={[
                        {required: true, message: 'Name is required'},
                        {
                            min: 3,
                            message: "It nhat phai co 3 ky tu"
                        }
                ]}>
                    <Input/>
                </Form.Item>
                <Form.Item 
                    label="Product Price*" 
                    name="price" 
                    rules={[
                        {required: true, message: 'Price is required'},
                        {
                            min: 6,
                            type: "number",
                            message: "Gia tri lon hon 6"
                        }
                ]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item label="Product Image*" name="image" rules={[{required: true, message: 'Image is required'}]}>
                    <Input type="text" />
                </Form.Item>
                <Button type="primary" htmlType="submit">Submit</Button>
            </Form>
        </div>
    );
}
export default ProductCreate;