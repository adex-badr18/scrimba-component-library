import { useState } from "react";

const useToggle = (initialValue = false) => {
    const [on, setOn] = useState(initialValue);

    const toggle = () => {
        setOn(current => !current);
    }

    return [on, toggle];
}

export default useToggle;