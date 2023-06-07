import React, { useEffect } from 'react'
import { Button, Card, InputNumber, Input } from 'antd';
import { Menu, Space } from 'antd';
import { LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export default function MessageItem(props:any) {

  const {checked,data:{
    header
  }}=props;
  // useEffect(()=>{

  // },)
  return (
    <div className='msg_overflow_hidden msg_shrink_0' style={{fontSize:'12px'}}>
      <div className='msg_flex msg_items_center  msg-py-2'>
        <div className='msg_flex'>
          <div className='msg_flex msg_bg_neutral_900 msg-rounded-full msg-w-12 msg-h-12 msg_items_center msg-justify-center'>
            <div className='msg-text-base'>
              <div className='msg-xs-base'>
              <img style={{width:'100%',borderRadius:'100%'}} src={header}/>
              </div>
            </div>
          </div>
        </div>
        <div className='msg_flex msg-grow msg_flex_between msg-pr-2 msg-truncate'>
          <div className='msg-truncate msg-flex-col msg-max-w-full'>
            <div>
              <div></div>
            </div>
            {/* <div className='msg-truncate'>
            <LockOutlined />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
