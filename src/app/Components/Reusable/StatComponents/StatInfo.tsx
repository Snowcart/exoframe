import styled from "styled-components";

const StatInfo = (props: Props) => {
    const { title, description } = props;
    return (
        <StatContainer>
            <h1>{title}</h1>
            <hr />
            <p>{description}</p>
        </StatContainer>
    )

}

interface Props {
    title: String;
    description: String;
}

export default StatInfo;

const StatContainer = styled.div`
padding: 5px;
border: 1px solid turquoise;
border-radius: 2px;
width: 40%;
margin: 10px; 
`;