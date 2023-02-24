import React from 'react';
import './index.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime"
import { ApiFilled } from '@ant-design/icons';
import { API_URL } from '../config/constants';

dayjs.extend(relativeTime);

function MainPage(){   
    const [products, setProducts] = React.useState([]);   // products 는 기본적으로 배열이므로 useState 안에 빈 배열을 넣어준다. 
    React.useEffect(function(){
        axios.get("http://localhost:8080/products")
        .then(function(result){
        const products = result.data.products;
        console.log(result);
        setProducts(products);
        }).catch(function(error){
        console.error("에러 발생 :", error);
        })
    }, []) 
    
    return (
        <div>
            <div id="banner">
                <img src="images/banners/banner1.png" />
            </div>
            <h1>판매 되는 상품들</h1>
            <div id="product-list">
                {products.map(function(product, index){
                    return (
                        <div className="product-card">
                            <Link className = "product-link" to = {`/products/${[[product.id]]}`}>
                                <div>
                                    <img className="product-img" src={`${API_URL}/${product.imgUrl}`}/>
                                </div>
                                <div className="product-content">
                                    <span className="product-name">{product.name}</span>
                                    <span className="prod uct-price">{product.price}</span>     
                                    <div className='product-footer'>
                                        <div className="product-seller">
                                            <img className="product-avatar"src= "images/icons/avatar.png"/>
                                            <span>{product.seller}</span>
                                        </div>
                                        <span className='product-date'>{dayjs(product.createdAt).fromNow()}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ); 
                })
                }
                
            </div>
        </div>
    );
}
 
export default MainPage;  