interface Istyles {
    [key: string]: string[] | undefined;
}
interface Icolors {
    [key: string]: string | undefined;
}
declare const styledString: {
    setTheme: (customStyles: Istyles) => {
        [x: string]: string[] | undefined;
    };
    setStyles: (customColors: Icolors) => {
        [x: string]: string | undefined;
    };
    styleString: (str: string) => string;
};
export default styledString;
