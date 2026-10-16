import { useState } from 'react'
import { Box} from '@mui/system';
import './AboutMeBoard.css'

interface InfoCardProps {

    cardContents: string;
}



function InfoCard({cardContents}: InfoCardProps) {
  return (
    <>
    <Box class="cardBody">
      {cardContents}
    </Box>
    </>
  );
}

export default InfoCard


