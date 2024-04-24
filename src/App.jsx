import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayOutWrapper from './components/LayoutWrapper'
import useMediaQuery from '@mui/material/useMediaQuery';


function App() {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <LayOutWrapper>
      <div className='main-section'
      style={{}}
      >

        <div class="banner" style={{
          width:isMobile? '69%': '49%',
        }}>
          <video class="video-size" controls poster="/images/banner5.jpg">
            <source src="../src/images/video2.mp4" type="video/mp4" />
            <source src="" type="video/ogg" />
          </video>
        </div>


        <div class="banner" style={{
          width:isMobile? '69%': '49%',
        }}>
          <video class="video-size" controls poster="/images/banner5.jpg">
            <source src="../src/images/video2.mp4" type="video/mp4" />
            <source src="" type="video/ogg" />
          </video>
        </div>

        <div class="banner" style={{
          width:isMobile? '69%': '49%',
        }}>
          <video class="video-size" controls poster="/images/banner5.jpg">
            <source src="../src/images/video2.mp4" type="video/mp4" />
            <source src="" type="video/ogg" />
          </video>
        </div>

        <div class="banner" style={{
          width:isMobile? '69%': '49%',
        }}>
          <video class="video-size" controls poster="/images/banner5.jpg">
            <source src="../src/images/video2.mp4" type="video/mp4" />
            <source src="" type="video/ogg" />
          </video>
        </div>

        <div class="banner" style={{
          width:isMobile? '69%': '49%',
        }}>
          <video class="video-size" controls poster="/images/banner5.jpg">
            <source src="../src/images/video2.mp4" type="video/mp4" />
            <source src="" type="video/ogg" />
          </video>
        </div>

        <div class="banner" style={{
          width:isMobile? '69%': '49%',
        }}>
          <video class="video-size" controls poster="/images/banner5.jpg">
            <source src="../src/images/video2.mp4" type="video/mp4" />
            <source src="" type="video/ogg" />
          </video>
        </div>
      </div>

     
    </LayOutWrapper>
  )

}

export default App
