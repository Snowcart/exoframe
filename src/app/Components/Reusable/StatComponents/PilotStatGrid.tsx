import { PilotStats } from "@/app/types/PilotStats";
import styled from "styled-components";

const PilotStatGrid = (props: Props) => {
    const { pilotStats, label } = props;
    return (
        <PilotStatGridContainer>
        {label && <GridLabel>{label}</GridLabel>}
        <table>
            <tr>
                <th>Stat</th>
                <td>reflex</td>
                <td>sway</td>
                <td>insight</td>
                <td>mech</td>
                <td>grit</td>
            </tr>
            <tr>
                <th>Value</th>
                <td>{pilotStats.reflex}</td>
                <td>{pilotStats.sway}</td>
                <td>{pilotStats.insight}</td>
                <td>{pilotStats.mechanics}</td>
                <td>{pilotStats.grit}</td>
            </tr>
        </table>
        </PilotStatGridContainer>
    )

}

export default PilotStatGrid;

interface Props {
    pilotStats: PilotStats;
    label?: string;
}

const PilotStatGridContainer = styled.div`
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
font-size: 15px;
`;