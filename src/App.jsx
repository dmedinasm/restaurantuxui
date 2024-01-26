import React, { useState } from 'react'
import { Header, Hero, MenuMain, Reservation, Testimony, Special, Chef, About, Blog, Awards, GalleryContainer, Footer } from './containers/index'
import { Video } from './components/index'

const App = () => {

  return (
    <>
      <main className="bg-secondary">
        <Header />
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
        <Footer />
      </main>
    </>
  )
}

export default App
