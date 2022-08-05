import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import placesList from '../../data/placesList'
import productsList from '../../data/productsList'
import ProductContainer from '../product/ProductContainer'
import PlaceInfo from './PlaceInfo'

//Recibo por parametro el id del lugar,
//Busco todas las entradas que correspondan a ese lugar
//Muestro la informacion del lugar
//Muestro las entradas del lugar

const PlaceInfoContainer = () => {
  const { placeId } = useParams()
  const [placeEntraces, setPlaceEntraces] = useState([])
  const [placeInfo, setPlaceInfo] = useState({})
  useEffect(() => {
    setPlaceEntraces(
      productsList.filter(
        (productOfPlace) => productOfPlace.placeId === placeId,
      ),
    )
    setPlaceInfo(placesList.find((place) => place.id === placeId))
  }, [placeId])
  console.log(placeEntraces)
  console.log(placeInfo)

  return (
    <>
      <PlaceInfo place={placeInfo} />
      <br></br>
      <ProductContainer entraces={placeEntraces} />
    </>
  )
}

export default PlaceInfoContainer
