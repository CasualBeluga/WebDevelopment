import { useState } from 'react'
import { Box} from '@mui/system';
import AboutMeBoard from './AboutMeBoard/AboutMeBoard';
import './App.css';
import './DisplayComponents/AreaGoToPlane';
import AreaGotToPlane from './DisplayComponents/AreaGoToPlane';

function App() {

  return (
    <>
    <Box><img src="https://th.bing.com/th/id/OIP.MweDRQpl1L1gGUpX-sZQKwHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" width="100%" height="40%"></img></Box>
    <AboutMeBoard></AboutMeBoard>
    <AreaGotToPlane planeContents="this is the left plane"></AreaGotToPlane>
    </>
  )
}

export default App
