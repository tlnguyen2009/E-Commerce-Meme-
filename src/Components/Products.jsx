import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 30px; 
    column-gap: 70px;
    padding: 20px;
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product eachProduct = {item} key = {item.id}/> 
        ))}
    </Container>
  )
}

export default Products