import styled from 'styled-components'
import { popularProducts } from '../data'
import { mobile } from '../responsive';
import Product from './Product'

const Container = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 2rem; 
    column-gap: 5%; //shouldn't change percentage no matter screen size
    padding: 20px;
    ${mobile`
      row-gap: 15px; 
      padding: 10px;
    `}
`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product eachproduct = {item} key = {item.id}/> 
        ))}
    </Container>
  )
}

export default Products