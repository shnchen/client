import React from 'react';
import { Button } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
const Home = ()=>{
  const navigate = useNavigate()
  return (
    <div>
      <Button color='primary' onClick={()=>{
        navigate('/login')
      }}>home</Button>
    </div>
  )
}


export default Home;