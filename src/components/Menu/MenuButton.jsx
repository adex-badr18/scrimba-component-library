import { useContext } from "react";
import Button from "../Button/Button";
import { ToggleContext } from "../Toggle/Toggle";

export default function MenuButton({ children }) {
    const { toggle } = useContext(ToggleContext);

    return (
        <Button>{children}</Button>
    )
}