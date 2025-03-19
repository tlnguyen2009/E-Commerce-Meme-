import styled from 'styled-components'
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Info = styled.div`
  opacity: 0;
  width: 300px;
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  max-width: 300px;
  min-width: 280px;
  margin: 10px;
  height: 350px;;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  
  &:hover ${Info} {
    opacity: 1;
  }
`

const Image = styled.img `
  height: 90%;
  width: 300px;
  position: absolute;
  top:0;
  left: 0;
`

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  
  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`

const Product = ({eachProduct}) => {
  return (
    <Container>
        <Image src = {eachProduct.img}/>
        <Info>
          <Icon>
              <ShoppingCartOutlined/>
          </Icon>
          <Icon>
              <SearchOutlined/>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
        </Info>
    </Container>
  )
}

export default Product
