import React from 'react';
import './index.css'
import axios from 'axios'

function MainPage(){   
    const [products, setProducts] = React.useState([]);   // products 는 기본적으로 배열이므로 useState 안에 빈 배열을 넣어준다. 
    React.useEffect(function(){
        axios.get("https://02a78ff3-a9a6-4f24-851f-4d5dabd0f80f.mock.pstmn.io/products")
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
            <div id="header">
                <div id="header-area">
                <img src="images/icons/logo.png"/>
                </div> 
            </div> 
            <div id="body">
            <div id="banner">
                <img src="images/banners/banner1.png" />
            </div>
            <h1>판매 되는 상품들</h1>
            <div id="product-list">
                {
                    products.map(function(product, index){
                        return (
                            <div className="product-card">
                                <div>
                                    <img className="product-img" src={product.imgUrl}/>
                                </div>
                                <div className="product-content">
                                <span className="product-name">{product.name}</span>
                                <span className="prod uct-price">{product.price}</span>     
                                <div className="product-seller">
                                    <img className="product-avatar"src= "images/icons/avatar.png"/>
                                    <span>{product.seller}</span>
                                </div>
                                </div>
                            </div>
                        ) 
                    })
                }
                
            </div>
             </div>
             <div id="footer"></div>
        </div>
    );
}



export default MainPage;  