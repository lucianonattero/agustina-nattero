import React, { useRef } from 'react';
import { useButton } from 'react-aria';
import defaultClasses from './button.module.css';

const Button = props => {
    const classes = defaultClasses;
    const {
        children,
        rootClassName,
        priority,
        negative,
        disabled,
        onPress,
        ...restProps
    } = props;

    const buttonRef = useRef();
    
    const { buttonProps } = useButton(
        {
            isDisabled: disabled,
            onPress,
            ...restProps
        },
        buttonRef
    );
    return (
        <button
            ref={buttonRef}
            className={rootClassName}
            {...buttonProps}
            {...restProps}
        >
            <span className={classes.content}>{children}</span>
        </button>
    );
}

export default Button;
