import React from 'react'
import './Topbar.css'
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import SettingsIcon from '@mui/icons-material/Settings';

export default function Topbar() {
  return (
    <div className="topbar">

      <div className="topbarWrapper">

        <div className="topLeft">
          <span className="Logo">Ali Behmaram  ❤</span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img src='https://picsum.photos/200' className='topAvatar' />
        </div>

      </div>
    </div>
  )
}
