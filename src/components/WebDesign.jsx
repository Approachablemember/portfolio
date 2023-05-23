import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import Mac from "./Mac";
import styled from "styled-components";

const Desc = styled.h2`
  position: absolute;
  bottom: 20px;
  left: 0;

  @media only screen and (max-width: 768px) {
    
    bottom: 0;
    
    margin: auto;
  }
`
const WebDesign = () => {
    return (
        <>
            <Canvas>
                <Suspense fallback={null}>
                    <Stage environment="city" intensity={0.6}>
                        <Mac />
                    </Stage>
                    <OrbitControls enableZoom={false} autoRotate />
                </Suspense>
            </Canvas>
            <Desc>
                I excel in designing and maintaining responsive websites that offer a smooth user experience.
                {/*My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and*/}
                {/*utilizing cutting-edge development tools and techniques.*/}
            </Desc>
        </>
    );
};

export default WebDesign;