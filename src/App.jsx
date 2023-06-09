import React from 'react'
import styles from './style'

import {Navbar, Hero, Business, Billing, CardDeal,
Testimonials,Clients,CTA,Footer, AboutUs, Contact
} from './components';


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
 <div className={`${styles.paddingX} ${styles.flexCenter}`}>
   <div className={`${styles.boxWidth}`}>
    <Navbar/>
   </div>
 </div>


 <div className={`bg-primary ${styles.flexCenter}`}>
   <div className={`${styles.boxWidth}`}>
      <Hero/>
   </div>
 </div>

 <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
   <div className={`${styles.boxWidth}`}>
      <AboutUs/>
      <Business/>
      <Billing/>
      <CardDeal/>
      <Clients/>
      <Testimonials/>
      <CTA/>
      <Contact/>
      <Footer/>
   </div>
 </div>
</div>
  
);

export default App
