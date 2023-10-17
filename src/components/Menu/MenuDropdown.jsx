import { useContext } from "react";
import useToggle from "../../hooks/useToggle";

export default function MenuDropdown({ children }) {

    return (
        <div className="menu-dropdown">
            {children}
        </div>
    )
}