import { createContext, useEffect, useRef, useState } from "react";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle }) {
    const [on, setOn] = useState(false);
    const firstRender = useRef(true);

    function toggle() {
        setOn(currentOn => !currentOn);
    }

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            onToggle()
        }

    }, [on]);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext }