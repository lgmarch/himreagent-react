type Mods = Record<string, boolean | string>

export const classNames = (cls: string, additional: string[], mods?: Mods): string => {
    const returningMods = mods ? mods : {};

    return [
        cls,
        ...additional,
        ...Object.keys(returningMods).filter((key) => mods[key]),
    ].join(' ');
}
