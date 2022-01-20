import React from 'react';
import {Form,Input,Button,Toast} from 'antd-mobile';
import { useNavigate } from 'react-router-dom';
import {addUser} from '../../api'
 
const Registry = ()=>{
  const navigate = useNavigate();
  return (
    <div className="registry">
      <Form
        onFinish={async(v)=>{ 
          let res = await addUser(v);
          if(res.status===200){
            Toast.show({
              icon: 'success',
              content: '注册成功',
            })
            navigate('/login')
          }
        }}
        footer={
          <Button block type='submit' color='primary' size='large'>注册</Button>
        }
      >
        <Form.Header>用户注册</Form.Header>
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

export default Registry;