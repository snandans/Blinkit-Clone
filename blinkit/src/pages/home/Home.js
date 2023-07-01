import React from 'react'
import { Header } from '../../organisms/header'
import { Footer } from '../../organisms/footer'
import { Listing } from './organisms/listing'
function Home() {
  return (
    <div>
    <Header/>
    <Listing/>
    <Footer/>
    </div>
  )
}

export default Home