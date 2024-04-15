import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'> {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    autofocus?: boolean,
    readonly?: boolean
}

const Input = memo((props: InputProps) => {
    const {
        className, value, autofocus = false, readonly = false,
        onChange, type = 'text', placeholder, ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);

    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={classNames(className, {}, [cls.InputWrapper])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder} >`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    {...otherProps}
                    ref={ref}
                    className={classNames(cls.input, { [cls.readonly]: readonly })}
                    type={type}
                    value={value}
                    readOnly={readonly}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                />
                {isFocused && !readonly
                    && (<span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} />)}
            </div>
        </div>
    );
});
export { Input };
