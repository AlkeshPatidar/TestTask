import { useState } from 'react'
// import './App.css'
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PostAddIcon from '@mui/icons-material/PostAdd';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import useMediaQuery from '@mui/material/useMediaQuery';



function Hearder() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const styles = isMobile ? {
    position: 'absolute',
    marginLeft: 169,
    marginTop: -8
  } : {};

  return (
    <div
      style={{ zIndex: 1000, }}
      className='header'
    >
      <img src="https://lzycrazy-market-israr.netlify.app/images/logo" alt="" className='headerimg' />

      {!isMobile && <div className='contentHeader'>
        <div>
          <AddHomeIcon sx={{ color: 'black', marginLeft: 1 }} />
          <p style={{ color: 'black', }}>Home</p>
        </div>

        <div>
          <AddBusinessIcon sx={{ color: 'black', marginLeft: 1 }} />
          <p style={{ color: 'black' }}>Market Place</p>
        </div>

        <div>
          <PostAddIcon sx={{ color: 'black', marginLeft: 1 }} />
          <p style={{ color: 'black' }}>PostAds</p>
        </div>

      </div>}


      <div className='contentHeader'
        style={
          styles
        }
      >
        <div>
          <MessageIcon sx={{ color: 'black', marginLeft: 1, }} />
          <p style={{ color: 'black', fontSize: isMobile ? 12 : 16, }}>Response</p>
        </div>

        <div>
          <SettingsIcon style={{ color: 'black', marginLeft: 1 }} />
          <p style={{ color: 'black', fontSize: isMobile ? 12 : 16, }}>Setting</p>
        </div>

        <div>
          {/* <AddHomeIcon sx={{color:'black', marginLeft:1}} /> */}
          <img src="https://lzycrazy-market-israr.netlify.app/images/userImg.jpg" alt=""
            style={{ height: 30, width: 30 }}
          />
          <p style={{ color: 'black', fontSize: isMobile ? 12 : 16, }}>Mohd Israr</p>
        </div>

      </div>

    </div>
  )

}

export default Hearder
