import styled from "styled-components";

const Button = (props: Props) => {
    const { label, onClick } = props;
    return (
        <Container>
            <LabeledButton onClick={onClick}>{label}</LabeledButton>
        </Container>
    )
}

export default Button;

interface Props {
    label: string;
    onClick: () => void;
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-direction: space-between;
    justify-content: center;
    padding: 10px 0 10px 0;
`;

const LabeledButton = styled.button`
border-radius: 4px;
height: 35px;
border: 1px solid lightgray;
min-width: 150px;
`