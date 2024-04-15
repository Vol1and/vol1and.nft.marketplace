import React, { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string
    src?: string
    size?: number
}

const Avatar = ({ className, src, size }: AvatarProps) => {
    const styles = useMemo<CSSProperties>((): CSSProperties => ({
        width: `${size || 100}px`,
        height: `${size || 100}px`,
    }), [size]);

    return (
        <img
            className={classNames(className, {}, [cls.Avatar])}
            style={styles}
            src={src}
            alt=""
        />
    );
};
export { Avatar };
