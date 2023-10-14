import { useState } from "react"

export default function Menu({ children }) {
    const [open, setOpen] = useState(false);

    function toggle() {
        setOpen(current => !current);
    }

    return (
        <div className="menu">
            { children }
        </div>
    )
}