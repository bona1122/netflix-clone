import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const x = useMotionValue(0);
  const myScale = useTransform(x, [-800, 0, 800], [2, 1, 0.1]);
  useEffect(() => {
    myScale.on("change", () => {
      // console.log(x.get());
      console.log(myScale.get());
    });
  }, [x]);
  console.log(x);
  return (
    <Wrapper>
      <Box style={{ x, scale: myScale }} drag="x" dragSnapToOrigin />
    </Wrapper>
  );
}

export default App;
