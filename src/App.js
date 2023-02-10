import React from 'react';
import { Button, Space } from 'antd';
import logo from './logo.svg';
import './App.css';
import MainPage from './main.js';
import  {Switch,Route, Link, useHistory} from 'react-router-dom'
import UploadPage from './upload';
import ProductPage from './product';
import { DownloadOutlined } from '@ant-design/icons';

function App() {
  const history = useHistory();
  return (
    <div>
       <div id="header">
          <div id="header-area">
            <Link to= "/">
            <img src="/images/icons/logo.png" /> 
            {/* 처음에 로고 안 떴었는데 '/' 붙여서 절대 경로로 소스처리를 해야함 */}
            </Link>
            <Button 
            size='large'
            onClick={function(){
              history.push('/upload');
              // 링크 사용안하고 페이지 이동하는 새로운 방법  useHistory
            }}
            icon= {<DownloadOutlined />}
            >상품 업로드</Button>
          </div> 
        </div> 

        <div id="body">
          <Switch>
            <Route exact={true} path="/">
              <MainPage />
            </Route>
            <Route exact={true} path="/products/:id"> 
              <ProductPage />
            </Route>
            <Route exact={true} path="/upload">
              <UploadPage />
            </Route>
          </Switch>
        </div>
        <div id="footer"></div>
    </div>
  ); 
} 

export default App;
