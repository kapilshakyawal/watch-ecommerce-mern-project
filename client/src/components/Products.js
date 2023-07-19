import React from 'react'
import Card from './products/Card'
import Nav from './Nav'

const Products = (props) => {
 console.log(document.cookie)
  return (
    <div className=''>
    <Nav />
   <div className="pt-20 flex flex-1 flex-wrap justify-evenly">
    {/* <AddProduct /> */}
    <Card />
</div>
    </div>
  )
}

export default Products