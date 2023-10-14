import React, { createContext, useState } from "react";

export default function Menu({ children }) {
    return (
        <div className="menu">
            {children}
        </div>
    )
}