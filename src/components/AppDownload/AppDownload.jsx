import React from 'react'
import "./AppDownload.css";
import assets from '../../assets/assets';
const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For Better Experience Download <br />Tomato App</p>
      <div className="app-download-plateforms">
        <img src={assets.App_Store} alt="" />
        <img src={ assets.PlayStore}alt="" />
      </div>
    </div>
  )
}

export default AppDownload
