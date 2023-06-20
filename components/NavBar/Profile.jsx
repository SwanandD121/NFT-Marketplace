import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserAlt, FaRegImage, FaUserEdit, FaUser } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownloadOff, TbDownload } from 'react-icons/tb'

import images from '../../img'

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile_account">
        <Image src={images.user1} className='profile_account_img' alt='user profile' height={50} width={50}/>
        <div className="profile_account_info">
          <p>Saul Goodman</p>
          <small>X9834983948757...</small>
        </div>
      </div>
      <div className="profile_menu">
        <div className="profile_menu_one">
          <div className="profile_menu_one_item">
            <FaUserAlt/>
            <p>
              <Link href={{pathname: '/profile'}}>My Profile</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaRegImage/>
            <p>
              <Link href={{pathname: '/my-items'}}>My Items</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <FaUserEdit/>
            <p>
              <Link href={{pathname: '/edit-profile'}}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className="profile_menu_two">
          <div className="profile_menu_one_item">
            <MdHelpCenter/>
            <p>
              <Link href={{pathname: '/help'}}>Help</Link>
            </p>
          </div>
          <div className="profile_menu_one_item">
            <TbDownload/>
            <p>
              <Link href={{pathname: '/disconnect'}}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
