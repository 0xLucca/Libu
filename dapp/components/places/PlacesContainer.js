import React, { useEffect, useState } from 'react'
import PlacesCards from './PlacesCards'
import Title from '../generals/Title'
import { Link } from 'react-router-dom'
import placesList from '../../data/placesList'

const PlacesContainer = () => {
  const [places, setPlaces] = useState(placesList)
  useEffect(() => {
    setPlaces(placesList)
  }, [])

  return (
    <div className="w-10/12 m-auto border-2 border-lime-500 p-5">
      <Title title={'All places'} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {places.map((p) => (
          <Link to={`/place/${p.id}`} key={p.id}>
            <PlacesCards key={p.id} objPlace={p} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PlacesContainer
