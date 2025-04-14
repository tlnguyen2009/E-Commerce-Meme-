import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Products from "../Components/Products"
import { mobile } from "../responsive"


const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;

`

const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span` 
    font-size: 20px;
    font-weight: 600;
    margin-right: 10px;
`

const Select = styled.select`
  padding: 2px;
  border-radius: 8px;
  font-size: 16px;
  ${mobile`
    margin-top: 5px;
  `}
`

const Option = styled.option` 
    &:disabled {
    color: #888;
    font-style: italic;
    }
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Funny cat meme</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected> Meme? </Option>
                    <Option>Funny meme</Option>
                    <Option>Crying meme</Option>
                    <Option>Really? meme</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected> Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList