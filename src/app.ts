import { defaultStyles, Istyles } from "./defaultStyles";

interface Ithemes {
    [key: string]: string[] | undefined;
}
let themes: Ithemes = Object.keys(defaultStyles).reduce((prev, curr) => ({ ...prev, [curr]: [curr] }), {});
let styles: Istyles = defaultStyles;

const styledString = {
    /**
     * Default styles
     * reset, bright, dim, underscore, blink, reverse, hidden, fg_black, fg_red, fg_green, fg_yellow, fg_blue, fg_magenta, fg_cyan, fg_white, fg_crimson, fg_gray, fg_b_red, fg_b_green, fg_b_yellow, fg_b_blue, fg_b_magenta, fg_b_cyan, fg_b_white, fg_b_crimson, bg_black, bg_red, bg_green, bg_yellow, bg_blue, bg_magenta, bg_cyan, bg_white, bg_crimson, bg_gray, bg_b_red, bg_b_green, bg_b_yellow, bg_b_blue, bg_b_magenta, bg_b_cyan, bg_b_white, bg_b_crimson
     * @param customStyles
     */
    setThemes: (customStyles: Ithemes) => (themes = { ...themes, ...customStyles }),
    setStyles: (customColors: Istyles) => (styles = { ...styles, ...customColors }),
    listThemes: () => themes,
    listStyles: () => styles,
    styleString: (str: string) => {
        const styledBlocks = str
            .split("[")
            .map((str) => str.split("]")[0])
            .filter((str) => str);
        return styledBlocks.reduce((prev, curr) => {
            if (!curr.includes(":")) return str;
            const [themeName, ...theRest] = curr.split(":");
            const stylings = themes[themeName];
            return !stylings
                ? prev
                : prev.replace("[" + curr + "]", stylings.map((str) => "\x1b[" + styles[str] + "m").join("") + theRest.join(":").trim() + "\x1b[0m");
        }, str);
    },
};

// styledString.setThemes({ test: [""] });

export default styledString;
