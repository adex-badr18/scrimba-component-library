import classNames from "classnames";

export default function Button({ children, size, variant, className, ...rest }) {
    let customClasses = '';
    customClasses += size ? `btn-${size}` : '';
    customClasses += variant ? `${customClasses && ' '}btn-${variant}` : '';
    const classes = classNames(className, customClasses);

    return (
        <button className={classes ? classes : ''} {...rest}>{children}</button>
    )
}