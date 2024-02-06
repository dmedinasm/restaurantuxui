import React, { useState } from 'react'
import { Header, Hero, MenuMain, Reservation, Testimony, Special, Chef, About, Blog, Awards, GalleryContainer, Footer } from './containers/index'
import { Video } from './components/index'

const App = () => {

  return (
    <>
     <Header/>
      <main className="bg-secondary">
        <Hero />
        <About />
        <Reservation />
        <MenuMain />
        <Special />
        <Chef />
        <Testimony />
        <Video />
        <Awards />
        <Blog />
        <GalleryContainer />
      </main>
      <Footer />
    </>
  )
}

export default App
