import React from 'react'
import Flat from './flat.js'

const FlatList = ({flats, handleClick, selected}) => {
  const flatsComponents = flats.map((flat) => {
    return <Flat
      name={flat.name}
      key={flat.name}
      price={flat.price}
      imageUrl={flat.imageUrl}
      center={{lat: flat.lat, lng:flat.lng}}
      handleClick={handleClick}
      selected={selected}
    />
  })
  return(
    <div className='flat-list'>
      {flatsComponents}
    </div>
  )
}

export default FlatList
