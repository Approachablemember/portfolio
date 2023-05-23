import React, {Suspense} from 'react';
import styled from "styled-components";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Atom from "./Atom";

const Container = styled.div`
  height: 100%;
  position: relative;
`

const DescContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
`
const ListItem = styled.li`
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  color: lightgray;
`
const MySkillSet = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Line = styled.img`
  height: 5px;
`
const Subtitle = styled.h2`
  color: #da4ea2;
`

const Development = () => {
    return (
        <Container>

            <Canvas camera={{position: [0, 0, 10]}}>
                <Suspense fallback={null}>
                    <Atom/>
                    <OrbitControls enableZoom={false} autoRotate/>
                </Suspense>
            </Canvas>

            <DescContainer>
                    <MySkillSet>
                        <Line src={"./img/line.png"}/>
                        <Subtitle>My skill set:</Subtitle>
                    </MySkillSet>
                    <List>
                        <ListItem>React</ListItem>
                        <ListItem>Redux</ListItem>
                        <ListItem>TypeScript</ListItem>
                        <ListItem>JavaScript</ListItem>
                        <ListItem>HTML</ListItem>
                        <ListItem>CSS</ListItem>
                        <ListItem>REST API</ListItem>
                        <ListItem>Storybook</ListItem>
                        <ListItem>Git</ListItem>
                    </List>
            </DescContainer>
        </Container>
    );
};

export default Development;