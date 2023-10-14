import { useState } from "react";

export default function Toggle({children}) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(currentOn => !currentOn);
    }

    return children;
}