import React from 'react'
import './Sidebar.css'
import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Storefront, Timeline, TrendingUp } from '@mui/icons-material'

import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>

                <ul className="sidebarList">

                    <Link to='/' className='link'>
                        <li className="sidebarListItem ">
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                    </Link>

                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon' />
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcon' />
                        Sales
                    </li>
                    
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>

                <ul className="sidebarList">

                    <Link to="/users" className='link'>
                        <li className="sidebarListItem ">
                            <PermIdentity className='sidebarIcon' />
                            Users
                        </li>
                    </Link>
                    <Link to="/newUser" className='link'>
                        <li className="sidebarListItem ">
                            <PermIdentity className='sidebarIcon' />
                            New User
                        </li>
                    </Link>
                    <Link to="/products" className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcon' />
                            Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <AttachMoney className='sidebarIcon' />
                        Transactions
                    </li>
                    <li className="sidebarListItem">
                        <BarChart className='sidebarIcon' />
                        Reports
                    </li>
                    
                </ul>
            </div>


            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>

                <ul className="sidebarList">

                    <li className="sidebarListItem ">
                        <MailOutline className='sidebarIcon' />
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <DynamicFeed className='sidebarIcon' />
                        FeedBack
                    </li>
                    <li className="sidebarListItem">
                        <ChatBubbleOutline className='sidebarIcon' />
                        Message
                    </li>
                    
                </ul>
            </div>

        </div>
    </div>
  )
}
