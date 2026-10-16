import { useState } from 'react'
import { Box} from '@mui/system';


interface GoToPlane {

    planeContents: string;
}



function AreaGotToPlane({planeContents}: GoToPlane) {
  return (
    <>
    <Box>
      {planeContents}
    </Box>
    </>
  );
}

export default AreaGotToPlane


