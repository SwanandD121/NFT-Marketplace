import React from 'react'
import React, {useState, useEffect} from "react";
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

// Internal Imports
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index'
import { Button } from '../componentindex'  
import images from '../../img'

const NavBar = () => {

    // =======USESTATE COMPONENTS=========

    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [potification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if(btnText == Discover){
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    }

    return (
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_container_left">
                    <div className="logo">
                        <Image src={images.logo} alt='NFT MARKET PLACE' height={100} width={100}/>
                    </div>
                    <div className="navbar_container_left_box_input">
                        <div className="navbar_container_left_box_input_box">
                            <input type="text" placeholder='Search NFT' />
                            <BsSearch onClick={() =>{}} className='search_con'/>
                        </div>
                    </div>
                </div>
                
                {/* END OF LEFT SECTION */}
                <div className="navbar_container_right">
                    <div className="navbar_container_right_discover">
                        <p onClick={(e) => {}}>Discover</p>
                        <div className="navbar_container_right_discover_box">
                            <Discover/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavBar
