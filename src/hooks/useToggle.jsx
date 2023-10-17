import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

const useToggle = (initialValue = false, onToggle) => {
    const [on, setOn] = useState(initialValue);

    const toggle = () => {
        setOn(current => !current);
    }

    useEffectOnUpdate(onToggle, [on]);

    return [on, toggle];
}

export default useToggle;