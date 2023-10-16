import { createContext, useEffect, useRef, useState } from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import useToggle from "../../hooks/useToggle";

const ToggleContext = createContext();

export default function Toggle({ children, onToggle = () => {} }) {
    const [on, toggle] = useToggle();

    useEffectOnUpdate(onToggle, [on]);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

export { ToggleContext }