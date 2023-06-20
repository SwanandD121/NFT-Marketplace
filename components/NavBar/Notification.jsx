import React from 'react'
import Image from 'next/image'

import images from '../../img'

const Notification = () => {
  return (
    <div className="notification">
      <p>Notification</p>
      <div className="notification_box">
        <div className="notification_box_image">
          <Image src={images.user1} className='notification_box_image' alt='profile image' height={50} width={50}/>
        </div>
        <div className="notification_box_info">
          <h4>Saul Goodman</h4>
          <p>Money Is The Point!</p>
          <small>3 minutes ago</small>
        </div>
        <span className="notification_box_new"></span> 
      </div>
    </div>
  );
};

export default Notification
