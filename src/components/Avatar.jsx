import classNames from "classnames";
import { IoPersonSharp } from "react-icons/io5";

export default function Avatar({ children, src, alt, ...rest }) {
    let classes = 'avatar';
    classes += children ? ' avatar-letters' : '';
    classes += !children && !src ? ' avatar-icon' : '';

    return (
        <div className={classes}>
            {
                src ? 
                    <img src={src} alt={alt} className={classes} /> : 
                    children ? children : <IoPersonSharp />
            }
        </div>
    )
}