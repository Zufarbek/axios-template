import React, {useState, useEffect} from 'react'
import Partners from '../../../src/repositories/partnersRepository'

export default function MovieDetailsContainer() {
    const [singlePartner, setSinglePartner] = useState(null)

    const fetchSinglePartner = async () => {
        const singleItem = await Partners.getSinglePartner()
        if(singleItem){
            setSinglePartner(singleItem)
        }
        console.log("singleItem");
        console.log(singleItem);
    }

    useEffect(() =>  {
        fetchSinglePartner()
    }, [])

  return (
    <div>
      {JSON.stringify(singlePartner)}
    </div>
  )
}
