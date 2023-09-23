import styled from "styled-components";
import { Background } from "../../types/Background";

const BackgroundPop = (props: Props) => {
  return (
    <Container>
      <div>
        <h1>Background</h1>
        <div></div>
      </div>
    </Container>
  );
};

export default BackgroundPop;

const Container = styled.div`
  display: flex;
  position: absolute;
  min-width: 400px;
  max-width: 550px;
  background-color: darkgray;
  border: 1px solid turquoise;
  margin: auto;
  height: 700px;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px 0px turquoise;
`;

interface Props {
  background: Background;
}
