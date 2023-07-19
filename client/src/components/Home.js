import React from 'react'
import Nav from './Nav'
import HomeLandingPage from './HomeLandingPage'
const Home = () => {
  return (
      <div>
    <Nav />
<div className="pt-20 flex flex-1 flex-wrap justify-evenly ">
    {/* <AddProduct /> */}
    {/* <Product_Details /> */}
    <HomeLandingPage />
</div>
</div>
  )
}

export default Home