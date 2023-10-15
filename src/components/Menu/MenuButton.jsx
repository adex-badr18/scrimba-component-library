import { useContext } from "react";
import Button from "../Button/Button";
import { ToggleContext } from "../Toggle/Toggle";
import { Toggle } from "../Toggle/index";

export default function MenuButton({ children }) {
    const { toggle } = useContext(ToggleContext);

    return (
        <Toggle.Button>
            <Button>{children}</Button>
        </Toggle.Button>
    )
}