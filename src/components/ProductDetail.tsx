import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const {productID} = useParams();
    
    return <h1>Chi tiet San pham {productID} </h1>
}
