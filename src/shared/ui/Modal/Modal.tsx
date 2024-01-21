import React, {
    PropsWithChildren, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Portal } from 'shared/ui/Portal/Portal';
import { useTheme } from 'app/providers/ThemeProvider';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string
    isOpen: boolean
    onClose: () => void
    lazy?: boolean

}
const ANUMATION_DELAY = 300;

const Modal = (props: PropsWithChildren<ModalProps>) => {
    const { theme } = useTheme();
    const {
        children, className, isOpen, onClose, lazy = false,
    } = props;

    const [isMounted, setIsMounted] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANUMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
            clearTimeout(timerRef.current);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(
                    className,
                    { [cls.opened]: isOpen, [cls.closing]: isClosing },
                    [cls.Modal, 'modal', theme],
                )}
            >
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
export { Modal };
