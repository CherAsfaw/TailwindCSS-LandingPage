import React from 'react'
import styles from '../style'
import { clients } from '../constants'

function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className='w-full flex flex-wrap justify-center items-center gap-4'>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}
          >
            <img
              src={client.logo}
              alt="client_logo"
              className="sm:w-[192px] w-[100px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Clients