import React, { useEffect, useState } from 'react'
import PartnersComponent from './partners.component'
import Axios from 'axios'
import Partners from '../../../../src/repositories/partnersRepository'

export default function PartnersContainer() {
  const [partners, setPartners] = useState([])

  const fetchPartners = async () => {
    const currentPartners = await Partners.getPartnersList()
    if(currentPartners){
      setPartners(currentPartners)
    }
  }

  useEffect(() => {
    fetchPartners()
  }, [])

  return (
    <div>
      <PartnersComponent data={partners}/>
    </div>
  )
}
