import { PilotFeature } from "@/app/types/PilotFeature";
import styled from "styled-components";
import FrameStatGrid from "../StatComponents/FrameStatGrid";

const PilotFeature = (props: Props) => {
    const { feature, justInfo = false, useFeature = () => {} } = props;
   return (
     <PilotFeatureContainer>
       <h3>{feature.label}</h3>
       <hr />
       <div>{feature.description}</div>
       {feature.type === "active" && (
         <>
           {justInfo && <div>Uses per deployment: {feature.uses}</div>}
           {!justInfo && (
             <>
               <span>Feature active: </span>
               <input
                 type="checkbox"
                 checked={props.feature.active}
                 onChange={() => useFeature(props.feature.name)}
               />
             </>
           )}
           {!justInfo && (
             <div>
               Uses Remaining: {feature.usesRemaining}/{feature.uses}
             </div>
           )}
         </>
       )}
       {justInfo && <FrameStatGrid frameStats={feature.frameModifiers} />}
     </PilotFeatureContainer>
   );

};

interface Props {
    feature: PilotFeature;
    justInfo?: boolean;
    useFeature?: (feature: string) => void;
}

export default PilotFeature;

const PilotFeatureContainer = styled.div`
width: 100%;
margin-top: 20px;

h3 {
    font-size: 16px;
    padding: 5px 10px;
}

div {
    padding: 5px 10px;
}

`;