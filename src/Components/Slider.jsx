import styled from "styled-components"
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { sliderItems } from "../data";
import { useState } from "react";

const Container = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    /* background-color: coral; */
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e4d1d1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: ${props=> props.direction === 'right' && '10px'};
    left: ${props=> props.direction === 'left' && '10px'};
    cursor: pointer;
    z-index: 2;
    opacity: 50%;
`
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  
`

const Image = styled.img`
  height: 80%;
  /* width: 100%; */
`

const InfoContainer = styled.div`
  flex: 2;
  padding: 50px;
  background-color: pink;
`

const Title = styled.h1`
  font: 70px;
  font-size: 60px;
  font-weight: bold;
  color: #862805;
`

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0); //keep state updated for slider

  const handleClick = (direction) => {
    if(direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
    }
  };

  return (
    <Container>
        <Arrow direction = 'left' onClick={() => handleClick("left")}> <ArrowBackIosOutlinedIcon/> </Arrow>
        <Wrapper slideIndex = {slideIndex}>
          {sliderItems.map(item=>(
            <Slide bg = {item.bg}>
              <ImgContainer>
                <Image src = {item.img}/>
              </ImgContainer>
              <InfoContainer>
                <Title> {item.title} </Title>
                <Description> {item.desc} </Description>
                <Button>SHOW NOW</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow direction = 'right' onClick={() => handleClick("right")}> <ArrowForwardIosOutlinedIcon/> </Arrow>
    </Container>
  )
}

export default Slider