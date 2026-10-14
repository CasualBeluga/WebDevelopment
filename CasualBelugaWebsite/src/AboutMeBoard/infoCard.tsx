import { useState } from 'react'
import './App.css'

interface InfoCardProps {

    cardContents: string;
}

function InfoCard({cardContents}: InfoCardProps) {

  return (
    <>
    <h1>{cardContents}</h1>
    </>
  )
}

export default InfoCard
