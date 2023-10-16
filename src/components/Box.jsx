import { Toggle } from "./Toggle";

const Box = () => {
    return (
        <Toggle.Display>
            {(on) => (
                <div className={`box ${on ? 'filled' : ''}`}></div>
            )}
        </Toggle.Display>
    )
}

export default Box;