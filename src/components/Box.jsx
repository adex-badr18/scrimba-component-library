import { Toggle } from './Toggle/index';

export default function Box() {
    return (
        <Toggle>
            <Toggle.Button>
                <Toggle.Display>
                    {(on) => (
                        <div className={`box ${on ? 'filled' : ''}`}></div>
                    )}
                </Toggle.Display>
            </Toggle.Button>
        </Toggle>
    )
}