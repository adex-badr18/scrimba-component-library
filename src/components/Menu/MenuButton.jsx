import { useContext } from "react";
import Button from "../Button/Button";
import { ToggleContext } from "../Toggle/Toggle";
import useToggle from "../../hooks/useToggle";

export default function MenuButton({ children }) {
    return (
        <Button>{children}</Button>
    )
}