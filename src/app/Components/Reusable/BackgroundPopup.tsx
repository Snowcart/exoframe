import styled from "styled-components";
import { Background } from "../../types/Background";
import Button from "./InputComponents/Button";
import PilotStatGrid from "./StatComponents/PilotStatGrid";
import PilotFeature from "./Features/PilotFeature";
const BackgroundPop = (props: Props) => {
  const { background, close, select } = props;
  return (
    <>
    <Container>
      <div>
        <Title>{background.label}</Title>
        <QuoteSection>
        <div>
          <h2>{background.quote}</h2>
          <h3>- {background.attribution}</h3>
          </div>
        <img src={background.src} width={300}/>
        </QuoteSection>
        <Desc>{background.description}</Desc>
        <br />
        <div>{background.features.map(feat => {
          if (!feat.visible) {
            if (feat.pilotModifiers) {
              return (<GridContainer><PilotStatGrid pilotStats={feat.pilotModifiers} label={feat.label} /></GridContainer>)
            }
          }
          return (<PilotFeature feature={feat} justInfo />)
          })}</div>
      </div>
      <ButtonContainer>
        <Button onClick={() => close()} label="Close" />
        <Button onClick={() => select()} label="Select" />
      </ButtonContainer>
    </Container>
      </>
  );
};

export default BackgroundPop;

const Container = styled.div`
  display: flex;
  position: absolute;
  min-width: 400px;
  max-width: 550px;
  background-color: #4C4C4D;
  border: 1px solid turquoise;
  margin: auto;
  height: 700px;
  left: 0;
  right: 0;
  box-shadow: 0 0 10px 0px turquoise;
  flex-direction: column;
  overflow-y: scroll;
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
padding-top: 20px;
padding-bottom: 20px;
`;

const Title = styled.h1`
width: 100%;
text-align: center;
font-size: 25px;
`;

const QuoteSection = styled.section`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 35px;
align-items: center;
font-weight: bold;
font-style: italic;
padding: 15px;
h3 {
  padding-left: 10px;
  font-weight: normal;
}
`;

const GridContainer = styled.div`
padding: 5px 10px;
`; 

const Desc = styled.div`
padding: 5px 10px;
`;