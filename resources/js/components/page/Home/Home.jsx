import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Slideshow,Twocardlayout,Simplelayout,SectionInfo,Footer } from '../..'



const Home = () => {
    return (
        <>
        <Slideshow/>
        <Simplelayout/>
        <Twocardlayout/>
        <SectionInfo/>
        </>
    )
}

export default Home
