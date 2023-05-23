import React from 'react';

import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  position: relative;
  
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`

const Linked = styled.a`
  display: flex;
  background-color: #2B44A1;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
`

const Git = styled.a`
  display: flex;
  background-color: #282c34;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
`

const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  
`

const SocialMedia = () => {
    return (
        <Container>
            <Left>
                <Img src={'./img/LinkedIn.png'}/>
                <Linked target={'_blank'} href={'https://www.linkedin.com/in/vladyslav-sevastian-9577b0269/'}>LinkedIn</Linked>
            </Left>
            <Right>
                <Img src={'./img/GitHub.png'}/>
                <Git target={'_blank'} href={'https://github.com/Approachablemember'}>GitHub</Git>
            </Right>
        </Container>
    );
};

export default SocialMedia;