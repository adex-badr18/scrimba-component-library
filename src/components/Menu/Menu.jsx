import React, { createContext, useState } from "react";

const MenuContext = createContext();

export default function Menu({ children }) {
    const [open, setOpen] = useState(false);

    function toggleMenu() {
        setOpen(current => !current);
    }

    return (
        <MenuContext.Provider value={{open, toggleMenu}}>
            <div className="menu">
                {children}
            </div>
        </MenuContext.Provider>
    )
}

export { MenuContext }