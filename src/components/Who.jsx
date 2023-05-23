import React, {Suspense} from 'react';
import styled from "styled-components";
import Cube from "./Cube";
import {OrbitControls} from "@react-three/drei";
import {Canvas} from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const Right = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`

const WhatWeDo = styled.div`
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

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`

const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
                        <Suspense fallback={null}>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[3, 2, 1]} />
                            <Cube />
                            <OrbitControls enableZoom={false} autoRotate />
                        </Suspense>
                    </Canvas>
                </Left>
                <Right>
                    <Title id={'who'}>Think outside the square space</Title>
                    <WhatWeDo>
                        <Line src={"./img/line.png"}/>
                        <Subtitle>
                            Who Am I
                        </Subtitle>
                    </WhatWeDo>
                    <Desc>a creative and highly-motivated developer with a passion for the work i do.</Desc>
                    {/*<Button>See my works</Button>*/}
                </Right>
            </Container>
        </Section>
    );
};

export default Who;