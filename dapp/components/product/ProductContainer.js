import React from 'react'
import Title from '../generals/Title'
import ProductCard from './ProductCard'

const ProductContainer = ({ entraces }) => {
  return (
    <div className="w-10/12 m-auto">
      <Title title={'Entradas'} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
        {entraces.map((p) => (
          <ProductCard products={p} key={p.id} />
        ))}
      </div>
    </div>
  )
}

export default ProductContainer
