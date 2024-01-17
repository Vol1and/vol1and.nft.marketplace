import React, {
    InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Input.module.scss';

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    className?: string
    value?: string
    onChange?: (value: string) => void
    autofocus?: boolean
}

const Input = memo((props: InputProps) => {
    const {
        className, value, autofocus = false,
        onChange, type = 'text', placeholder, ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>();

    const [caretPosition, setCaretPosition] = useState(0);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current.focus();
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
        console.log(isFocused)
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
                    ref={ref}
                    className={cls.input}
                    type={type}
                    value={value}
                    onChange={onChangeHandler}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                />
                {isFocused
                    && (<span className={cls.caret} style={{ left: `${caretPosition * 8}px` }} />)}
            </div>
        </div>
    );
});
export { Input };
