import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories = () => {
  return <Container>
            {categories.map(item =>(
                <CategoryItem itemTag = {item}/> //pass-in {item} as a parameter
            ))}
        </Container>
}

export default Categories