const defaultColors: { [key: string]: string | undefined } = {
    //*stylings
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    //*foreground colors
    black: "\x1b[30m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    crimson: "\x1b[38m",
    scarlet: "\x1b[38m",

    //*backgroud colors
    bg_black: "\x1b[40m",
    bg_red: "\x1b[41m",
    bg_green: "\x1b[42m",
    bg_yellow: "\x1b[43m",
    bg_blue: "\x1b[44m",
    bg_magenta: "\x1b[45m",
    bg_cyan: "\x1b[46m",
    bg_white: "\x1b[47m",
    bg_gray: "\x1b[100m",
    bg_crimson: "\x1b[48m",
};

interface Istyles {
    [key: string]: string[] | undefined;
}
interface Icolors {
    [key: string]: string | undefined;
}

let theme: Istyles = Object.keys(defaultColors).reduce((prev, curr) => ({ ...prev, [curr]: [curr] }), {});
let styles: Icolors = defaultColors;
const styledString = {
    setTheme: (customStyles: Istyles) => (theme = { ...theme, ...customStyles }),
    setStyles: (customColors: Icolors) => (styles = { ...styles, ...customColors }),
    styleString: (str: string) => {
        const styledBlocks = str
            .split("[")
            .map((str) => str.split("]")[0])
            .filter((str) => str);
        return styledBlocks.reduce((prev, curr) => {
            if (!curr.includes(":")) return str;
            const [styleName, ...theRest] = curr.split(":");
            const stylings = theme[styleName];
            if (!stylings) return str;
            return prev.replace("[" + curr + "]", stylings.map((str) => styles[str]).join("") + theRest.join(":").trim() + "\x1b[0m");
        }, str);
    },
};

export default styledString;
