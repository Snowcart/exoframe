import styled from "styled-components";

const TextInput = (props: Props) => {
    const { value, onChange, label, textarea=false } = props;
    return (
        <Container>
            {label && <Label>{label}</Label>}
            {textarea ? <Textarea value={value} onChange={(e) => onChange(e.target.value)} /> : <Input value={value} onChange={(e) => onChange(e.target.value)} />}
        </Container>
    )
}

interface Props {
    value: string;
    onChange: (string: string) => void;
    label: string;
    textarea?: boolean;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    input:focus, textarea:focus {
        outline-color: turquoise;
        outline-style: solid;
        outline-width: 2px;
    }
    margin: 10px 0 10px 0;
`;

const Label = styled.label`
    width: 100%;
    color: slategray;
`

const Input = styled.input`
border-radius: 4px;
height: 35px;
border: 1px solid lightgray;
padding: 0 10px 0 10px;
`;

const Textarea = styled.textarea`
border-radius: 4px;
height: 100px;
border: 1px solid lightgray;
resize: none;
padding: 0 10px 0 10px;
`;

export default TextInput;