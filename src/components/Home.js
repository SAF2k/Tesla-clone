import React from 'react'
import styled from 'styled-components'
import Sections from './Section'

function Home() {
  return (
    <Container>       
        <Sections
            title="Model S"
            discription="Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            LeftButton="Custom Order"
            RightButton="Existing Inventory"
         />
        {/*<Sections />  
        <Sections />  
        <Sections />*/}  
    </Container>
  )
}

export default Home
const Container = styled.div`
    height: 100vh;
    
`
