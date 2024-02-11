'use client'

import React, { Suspense, useLayoutEffect, useState } from 'react';
import styles from './page.module.css'
import { Canvas } from '@react-three/fiber'
import Iphone from './components/Iphone';
import { CustomizationProvider } from './contexts/Customization';
import Experience from './components/Experience';
import Configurator from './components/Configurator';
import { ResponsiveProvider } from './contexts/Responsive3D';
import Link from 'next/link';
import { Loader } from '@react-three/drei';
import { Porsche } from './components/porsche';

export default function Home() {

  useLayoutEffect(() => {
    const popupResponsiveHeight2 = {
      height: typeof window !== 'undefined' && window.innerHeight
    }

    console.log(popupResponsiveHeight2.height)

    document.documentElement.style.setProperty('--fullheight', `${popupResponsiveHeight2.height}px`);
  })

  const containerStyles = {
    backgroundColor: 'red',
  }

  interface PopupProps {
    isOpen: boolean;
    children: React.ReactNode;
  }  

  const Popup = ({ isOpen, children }: PopupProps) => {
  
    return isOpen ? (
      <div id={styles.popupoverlay}>
        <div id={styles.popup}>
          {children}
        </div>
      </div>
    ) : null;
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  }
  
  return (
    <ResponsiveProvider>
    <CustomizationProvider>
    <main className={styles.main}>
      <section id={styles.herosection}>
          <h1>iPhone 15 Pro</h1>
      </section>
      <section id={styles.canvas}>
      <Suspense fallback={<Loader containerStyles={containerStyles}/>}>
        <Canvas>
          <Porsche/>
          <directionalLight position={[0, 0, -1]} intensity={2}/>
          <directionalLight position={[-5, 0, -1]} intensity={2}/>
          <directionalLight position={[5, 0, -1]} intensity={2}/>
          <directionalLight position={[0, 5, -1]} intensity={2}/>
          <directionalLight position={[0, -5, -1]} intensity={2}/>
          <ambientLight intensity={1}/>
        </Canvas>
      </Suspense>
      </section>
      <button id={styles.customizationbutton} onClick={openPopup}>
        <svg height="50px" id="Layer_1" version="1.1" viewBox="0 0 50 50" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M8,14L4,49h42l-4-35H8z" fill="none" stroke="#ffffff"/><rect fill="none" height="50" width="50"/><path d="M34,19c0-1.241,0-6.759,0-8  c0-4.971-4.029-9-9-9s-9,4.029-9,9c0,1.241,0,6.759,0,8" fill="none" stroke="#ffffff" /><circle cx="34" cy="19" r="2"/><circle cx="16" cy="19" r="2"/></svg>
      </button>
      <Popup isOpen={isPopupOpen}>
          <Canvas id={styles.iphonecustom}>
              <Experience/>
              <directionalLight position={[0, 0, -1]} intensity={2}/>
              <directionalLight position={[-5, 0, -1]} intensity={2}/>
              <directionalLight position={[5, 0, -1]} intensity={2}/>
              <directionalLight position={[0, 5, -1]} intensity={2}/>
              <directionalLight position={[0, -5, -1]} intensity={2}/>
              <ambientLight intensity={5}/>         
          </Canvas>
          <div id={styles.configuratorsettings}>
            <span id={styles.closebutton} onClick={closePopup}>
                <p id={styles.closecross}>&times;</p>
            </span>
            <h3 id={styles.configuratortitle}>Personnalisez votre iPhone</h3>
            <Configurator/>
          </div>
      </Popup>
    </main>
    </CustomizationProvider>
    </ResponsiveProvider>
  )
}
