import { PilotStats } from "@/app/types/PilotStats";

const StatDropdown = (props: Props) => {
    const { options, points, optionKey, updateSelection } = props;
    const usedPoints = (value: number) => {
        let neg1Count = 0;
        if (value === -1) {
            Object.values(points).forEach(val => {
                if (val === -1) {
                    neg1Count++;
                }
            });
            if (neg1Count >= 2) return true;
            return false;
        }
        if (value === points.reflex) {
          return true;
        }
        if (value === points.sway) {
          return true;
        }
        if (value === points.insight) {
          return true;
        }
        if (value === points.mechanics) {
            return true;
        }
        if (value === points.grit) {
            return true;
        }
        return false;
      }
    return (
        <select onChange={(e) => { updateSelection(optionKey, Number(e.target.value)) }}>
            <>
            <option selected={points[optionKey] === undefined} value={undefined}> -- </option>
            {options.map(option => {
                return (
                    <option selected={points[optionKey] === option.value} disabled={usedPoints(option.value)} value={option.value}>{option.label}</option>
                )
            })}
            </>
        </select>
    )
};

interface Props {
    options: {label: string, value: number}[];
    optionKey: "reflex" | "sway" | "insight" | "mechanics" | "grit";
    updateSelection: (key: string, value: number) => void;
    points: PilotStats;
}

export default StatDropdown;