import { createContext, useState } from "react";

const ToggleContext = createContext();

export default function Toggle({ children }) {
    const [on, setOn] = useState(false);

    function toggle() {
        console.log('Toggled')
        setOn(currentOn => !currentOn);
    }

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext }