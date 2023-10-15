import { createContext, useEffect, useState } from "react";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle }) {
    const [on, setOn] = useState(false);

    function toggle() {
        setOn(currentOn => !currentOn);
    }

    useEffect(() => {
        onToggle();
    }, [on]);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext }