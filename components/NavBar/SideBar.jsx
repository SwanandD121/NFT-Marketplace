import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import { 
  TiSocialFacebook, 
  TiSocialLinkedin, 
  TiSocialTwitter, 
  TiSocialYoutube, 
  TiSocialInstagram, 
  TiArrowSortedDown,
  TiArrowSortedUp
} from 'react-icons/ti'

import images from '../../img'
import Button from '../Button'


const SideBar = ( setOpenSideMenu ) => {
  // ======= UseState ========= 
  const [openDiscover, setOpenDiscover] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  // ==== Discover Navigation Menu ====
  const discover = [
    {
      name: "Collection",
      link: "collection"
    },
    {
      name: "Search",
      link: "search"
    },
    {
      name: "Author Profile",
      link: "author-profile"
    },
    {
      name: "NFT Details",
      link: "nft-details"
    },
    {
      name: "Acount Settings",
      link: "account-settings"
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet"
    },
    {
      name: "Blog",
      link: "blog"
    }
  ]

  // ==== HelpCenter Navigation Menu ===== 
  const helpCenter = [
    {
      name: "About",
      link: "about"
    },
    {
      name: "Contact Us", 
      link: "contact-us"
    },
    {
      name: "Sign Up",
      link: "sign-up"
    },
    {
      name: "Log In",
      link: "log-in"
    },
    {
      name: "Subscription",
      link: "subscription"
    },
  ]

  const openDiscoverMenu = () => {
    if(!openDiscover){
      setOpenDiscover(true);
    } else{
      setOpenDiscover(false);
    }
  };

  const openHelpMenu = () => {
    if(!openDiscover){
      setOpenHelp(true);
    } else{
      setOpenHelp(false);
    }
  };

  const closeSideBar = () => {
    setOpenSideMenu(false);
  };

  return (
    <div className="sideBar">
      <GrClose className='sideBar_closeBtn' onClick={() => closeSideBar()}/>
      <div className="sidebar_box">
        <Image src={images.logo} alt='logo' height={150} width={150}/>
        <p>
          Discover the best articles about NFTs and share them anywhere aroud the world!
        </p>
        <div className="sideBar_social">
          <a href="#">
            <TiSocialFacebook/>
          </a>
          <a href="#">
            <TiSocialLinkedin/>
          </a>
          <a href="#">
            <TiSocialTwitter/>
          </a>
          <a href="#">
            <TiSocialYoutube/>
          </a>
          <a href="#">
            <TiSocialInstagram/>
          </a>
        </div>
      </div>
      <div className="sideBar_menu">
        <div>
          <div className="sideBar_menu_box" onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown/>
          </div>
          {
            openDiscover && (
              <div className="sideBar_discover">
                {discover.map((el, i) => {
                  <p key={i + 1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                })}
              </div>
            )
          }
        </div>

        <div>
          <div className="sideBar_menu_box" onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown/>
          </div>
          {
            openHelp && (
              <div className="sideBar_discover">
                {helpCenter.map((el, i) => {
                  <p key={i + 1}>
                    <Link href={{pathname: `${el.link}`}}>{el.name}</Link>
                  </p>
                })}
              </div>
            )
          }
        </div>
      </div>

      <div className="sideBar_button">
        <Button btnName="Create"/>
        <Button btnName="Connect Wallet"/>
      </div>
    </div>
  )
}

export default SideBar
