import { useState } from "react";

const useToggle = () => {
    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(current => !current);
    }

    return [on, toggle];
}

export default useToggle;