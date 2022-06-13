import React from 'react'
import styled from 'styled-components'

function Sections(props) {
    console.log(props);
    return (
        <Wrap>
            <ItemText>
                <h1>(props.title)</h1>
                <p>Order Online for Touchless Delivery</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>
                    <RightButton>
                        Existing Inventory
                    </RightButton>
                </ButtonGroup>
                <DownArrow src='/images/down-arrow.svg' />
            </Buttons>

        </Wrap>
    )
}

export default Sections

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flax;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height : 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
    
`
const RightButton = styled(LeftButton)`
    background: white;
    opasity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div `

`