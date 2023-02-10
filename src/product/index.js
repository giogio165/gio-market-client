import {useParams} from "react-router-dom";
import axios from "axios";
import { useEffect , useState } from "react";
import "./index.css"

function ProductPage(){
    const {id} = useParams();
    const [product, setProducts] = useState(null);
    useEffect(function(){
        axios
        .get(`https://02a78ff3-a9a6-4f24-851f-4d5dabd0f80f.mock.pstmn.io/products/${id}`)
        .then(function(result){
            setProducts(result.data)
            // console.log(result);
        })
        .catch(function(error){
            console.error(error);
        });
    },[])
  
    if(product == null){
        return <h1>상품 정보를 받고 있습니다...</h1>
    }
    return (
        <div>
            <div id="image-box">
                <img src={"/"+product.imgUrl} />
            </div>
            <div id="profile-box">
                <img src="/images/icons/avatar.png" />
                <span>{product.seller}</span>
            </div>
            <div id="contents-box">
                <div id="name">{product.name}</div>
                <div id="price">{product.price}원</div>
                {/* jsx문법으로 써주는 중! */}
                <div id="createdAt">2020년 12월 8일</div>
                <div id="description">{product.description}</div>
            </div>
        </div>
    )
};

export default ProductPage; 