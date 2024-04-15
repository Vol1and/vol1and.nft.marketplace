type Mods = Record<string, boolean | string | undefined>

export const classNames = (
    cls: string | undefined,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string => [
    cls,
    ...additional,
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className]) => className),
].filter((el) => typeof el === 'string')
    .join(' ');
