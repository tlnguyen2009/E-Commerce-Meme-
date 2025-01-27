import React from 'react'
import styled from 'styled-components'
import Badge from '@mui/material/Badge'
import Search from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

//custom styled component
const Container = styled.div `
    height: 60px;
    
`
const Wrapper = styled.div `
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

//left
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span `
    font-size: 14px;
    cursor: pointer;
`

const Searchcontainer = styled.div` //search box
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input `
    border: none;
`
//center
const Center = styled.div`
    flex: 1
`

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`

//right
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language> EN </Language>
                <Searchcontainer>
                <Input/>    
                <Search style={{color: "gray", fontSize: 16}}/>
                </Searchcontainer>
            </Left>

            <Center>
                <Logo> MEME. </Logo>
            </Center>

            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar