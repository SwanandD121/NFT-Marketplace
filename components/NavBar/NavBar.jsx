import React from 'react';
import {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'

// Internal Imports
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index'
import { Button, Footer } from '../componentindex'  
import images from '../../img'

const NavBar = () => {

    // =======USESTATE COMPONENTS=========

    const [discover, setDiscover] = useState(false);
    const [help, setHelp] = useState(false);
    const [notification, setNotification] = useState(false);
    const [profile, setProfile] = useState(false);
    const [openSideMenu, setOpenSideMenu] = useState(false);

    const openMenu = (e) => {
        const btnText = e.target.innerText;
        if(btnText == "Discover"){
            setDiscover(true);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        } else if(btnText =="Help Center"){
            setDiscover(false);
            setHelp(true);
            setNotification(false);
            setProfile(false);
        } else{
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(false);
        }
    };

    const openNotification = () => {
        if(!notification){
            setDiscover(false);
            setHelp(false);
            setNotification(true);
            setProfile(false);
        } else{
            setNotification(false);
        }
    };

    const openProfile = () => {
        if(!profile){
            setDiscover(false);
            setHelp(false);
            setNotification(false);
            setProfile(true);
        } else{
            setProfile(false);
        }
    };

    const openSideBar = () => {
        if(!openSideMenu){
            setOpenSideMenu(true);
        } else{
            setOpenSideMenu(false);
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

                        {/* Discover Menu */}
                        <p onClick={(e) => openMenu(e)}>Discover</p>
                        {discover && (
                            <div className="navbar_container_right_discover_box">
                                <Discover/>
                            </div>
                        )}
                    </div>

                    {/* Help Center Menu */}
                    <div className="navbar_container_right_help">
                    <p onClick={(e) => openMenu(e)}>Help Center</p>
                    {help && (
                            <div className="navbar_container_right_help_box">
                                <HelpCenter/>
                            </div>
                        )}
                    </div>

                    {/* Notification */}
                    <div className="navbar_container_right_notify">
                        <MdNotifications className='notify' onClick={() => openNotification()} />
                        {notification && <Notification/>}
                    </div>

                    {/* Create Button Section */}
                    <div className="navbar_container_right_button">
                        <Button btnText = "Create"/>
                    </div>

                    {/* User Profile */}
                    <div className="navbar_container_right_profile_box">
                        <div className="navbar_container_right_profile">
                            <Image src={images.user1} alt='Profile' className='navbar_container_right_profile' height={40} width={40} onClick={() => openProfile()}/>
                            {profile && <Profile/>}
                        </div>
                    </div>

                    {/* Menu Button - Only Visible in smaller devices */}
                    <div className="navbar_container_right_menuBtn">
                        <CgMenuRight className='menuIcon' onClick={() => openSideBar()}/>
                    </div>
                </div>
            </div>

            {/* Sidebar Component - keeping this oot because it only shown on smaller devices */}
            {openSideMenu && (
                <div className="SideBar">
                    <SideBar setOpenSideMenu = {setOpenSideMenu} />
                </div>
            )}
        </div>
    )
};

export default NavBar
