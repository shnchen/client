import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Form,Input,Button,Toast} from 'antd-mobile';
import {getDetail} from '../../api'
const Login = ()=>{
  const navigator = useNavigate()
  return (
    <div className='login'>
      <Form
        onFinish={async(v)=>{ 
          let res = await getDetail(v);
          if(res.status===200 && res.data){
            Toast.show({
              icon:'success',
              content: '登录成功',
            })
            navigator('/home')
          }else{
            Toast.show({
              icon:'fail',
              content: '账号或密码错误',
            })
          }
        }}
        footer={
         [ <Button block type='submit' color='primary' size='large'>登录</Button>,
         <Button onClick={()=>{navigator('/registry')}}  color='primary' fill='none'>
         注册
       </Button>]
        }
      >
        <Form.Header>用户登录</Form.Header>
        <Form.Item
          name='name'
          label='昵称'
          rules={[{ required: true, message: '昵称不能为空' }]}>
          <Input placeholder='请输入昵称' />
        </Form.Item>
        <Form.Item
          name='password' 
          label='密码' 
          rules={[{ required: true, message: '昵称不能为空' }]}>
          <Input type='password' placeholder='请输入密码' />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login;