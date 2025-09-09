import React from 'react'
import style from './style'
import { Hero, Navbar, Billing, Business, Footer, CTA, CardDeal, Clients, Stats, Testimonials } from './component'

function App() {
  return (
    <>
      <div className={`bg-[#00040f] ${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-[#00040f] ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-[#00040f] ${style.flexStart}`}>
        <div className={`${style.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App