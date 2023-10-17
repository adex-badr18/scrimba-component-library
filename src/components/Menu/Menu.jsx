import React, { createContext, useState } from "react";
import useToggle from "../../hooks/useToggle";

export default function Menu({ children, onOpen }) {
    return (
        <div className="menu">
            {children}
        </div>
    )
}