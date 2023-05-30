import React from 'react'

export default function PartnersComponent({data}) {
  return (
    <div>
        {
            data.map(item => {
                return (
                    <div key={item.id}>
                        <img width={150} src={item.img_url} alt={item.title}/>
                        <h3>{item.title}</h3>
                    </div>
                )
            })
        }
    </div>
  )
}
