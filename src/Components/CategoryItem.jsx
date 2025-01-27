import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color:white;
  margin-bottom: 15px;
`
const Button = styled.button`
  border:none;
  padding: 10px;
  background-color: white;
  color: gray;
  font-weight: 600;
  cursor: pointer;
`

//{item} will be passed in later in "Categories"
const CategoryItem = ({itemTag}) => {
  return (
    <Container>
      <Image src = {itemTag.img}/>
      <Info>
        <Title>{itemTag.title}</Title>
        <Button>SEE NOW</Button>
      </Info>
    </Container>
  )
}

export default CategoryItem