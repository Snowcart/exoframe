import styled from "styled-components";

const Selectable = (props: Props) => {
  const { label, onClick } = props;

  return (
    <SelectableContainer onClick={() => onClick()}>
      <h2>{label}</h2>
    </SelectableContainer>
  );
};

interface Props {
  label: string;
  onClick: () => void;
}

export default Selectable;

const SelectableContainer = styled.div`
  display: flex;
  border: 1px solid turquoise;
  h2 {
    font-size: 1.2rem;
  }
  border-radius: 5px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 3em;
  :hover {
    cursor: pointer;
    background-color: turquoise;
    color: black;
  }
  width: 100%;
`;
