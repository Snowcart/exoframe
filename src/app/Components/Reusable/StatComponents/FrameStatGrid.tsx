import { FrameStats } from "@/app/types/ExoFrame";
import { PilotStats } from "@/app/types/Pilot";
import styled from "styled-components";

const FrameStatGrid = (props: Props) => {
    const { frameStats, label } = props;
    return (
        <FrameStatGridContainer>
        {label && <GridLabel>{label}</GridLabel>}
        <table>
            <tr>
                <th>Stat</th>
                <td>STRG</td>
                <td>LOCK</td>
                <td>RESP</td>
                <td>ARMR</td>
                <td>EXPS</td>
            </tr>
            <tr>
                <th>Value</th>
                <td>{frameStats.strength}</td>
                <td>{frameStats.lockOn}</td>
                <td>{frameStats.response}</td>
                <td>{frameStats.armor}</td>
                <td>{frameStats.expansionBay}</td>
            </tr>
        </table>
        </FrameStatGridContainer>
    )

}

export default FrameStatGrid;

interface Props {
    frameStats: FrameStats;
    label?: string;
}

const FrameStatGridContainer = styled.div`
width: 100%;
table {
    width: 100%;
    border-collapse: collapse;
}
table, th, td {
    border: 1px solid turquoise;
    text-align: center;
}
`;

const GridLabel = styled.label`
padding: 5px 10px;
`;