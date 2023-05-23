import React from 'react';
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`
const ListItem = styled.li`
  cursor: pointer;
`
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover{
    background-color: #f650bc;
  }
`
const A = styled.a`
  text-decoration: none;
  color: white;
`


const NavBar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <List>
                        <ListItem><A href={'#home'}>Home</A></ListItem>
                        <ListItem><A href={'#who'}>Who Am I</A></ListItem>
                        <ListItem><A href={'#works'}>Works</A></ListItem>
                        <ListItem><A href={'#contacts'}>Contacts</A></ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src={"./img/search.png"}/>
                    <Button><A href={'#contacts'}>Hire now</A></Button>
                </Icons>
            </Container>
        </Section>
    );
};

export default NavBar;