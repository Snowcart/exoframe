import styled from "styled-components";
import { Background } from "../../types/Background";
import Button from "./InputComponents/Button";

const BackgroundPop = (props: Props) => {
  const { background, close, select } = props;
  return (
    <Container>
      <div>
        <h1>{background.label}</h1>
        <h2>{background.quote}</h2>
        <div>{background.description}</div>
        <div>{background.features.map(f => { return (<div>{f.label}</div>)})} </div>
      </div>
      <ButtonContainer>
        <Button onClick={() => close()} label="Close" />
        <Button onClick={() => select()} label="Select" />
      </ButtonContainer>
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
  flex-direction: column;
`;

interface Props {
  background: Background;
  close: () => void;
  select: () => void;
}

const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;