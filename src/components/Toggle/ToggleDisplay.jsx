import { useContext } from "react";
import { ToggleContext } from "./Toggle/Toggle";

const ToggleDisplay = ({children}) => {
    const { on } = useContext(ToggleContext);

    return children(on);
}

export default ToggleDisplay;