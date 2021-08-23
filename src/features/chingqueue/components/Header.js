import {Layout, Input, Image, Modal, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import '../styles/header.css'
import React, { useState } from 'react';
import Settings from './Settings';
import UserLogin from './UserLogin';
import RegistrationForm from './RegistrationForm';



const Header = () => {
  
  const { Header } = Layout;
  const { Search } = Input;
  const onSearch = value => console.log(value);

  const [isLogInModalVisible, setIsLogInModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);

  const showLogInModal = () => {
    setIsLogInModalVisible(true);
  };

  const showSignupModal = () => {
    setIsSignupModalVisible(true);
  };

  const handleCancel = () => {
    setIsLogInModalVisible(false);
    setIsSignupModalVisible(false);
  };

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
  
  return( 
    
    <React.Fragment>
    <Header >
      
        <div className="location">
        <img  className="responsive " alt="ChingQueue" src="https://i.imgur.com/bP82k1G.png" />
        <Search className="search" placeholder="input search text" onSearch={onSearch} enterButton />
        
        <span className="username">
        Username text here
        <Button type="primary" className="SignIn" onClick={showLogInModal}>
        Sign In 
        </Button>
        <Button type="primary" className="SignIn" onClick={showSignupModal}>
        Sign Up 
        </Button>  
        <Settings className="Settings"/>
        </span>

      <>
      <Modal title="Log-in to ChingQueue!" visible={isLogInModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }}>
        
        <UserLogin/>

      </Modal>
      <Modal title="Register" visible={isSignupModalVisible} onCancel={handleCancel} okButtonProps={{ style: { display: 'none' } }}>
        <RegistrationForm/>
      </Modal>
      </>
    </div>     
     
    </Header>
    
    </React.Fragment>
    
    
    )
}



export default Header
