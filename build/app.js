"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var defaultColors = {
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
var theme = Object.keys(defaultColors).reduce(function (prev, curr) {
    var _a;
    return (__assign(__assign({}, prev), (_a = {}, _a[curr] = [curr], _a)));
}, {});
var styles = defaultColors;
var styledString = {
    setTheme: function (customStyles) { return (theme = __assign(__assign({}, theme), customStyles)); },
    setStyles: function (customColors) { return (styles = __assign(__assign({}, styles), customColors)); },
    styleString: function (str) {
        var styledBlocks = str
            .split("[")
            .map(function (str) { return str.split("]")[0]; })
            .filter(function (str) { return str; });
        return styledBlocks.reduce(function (prev, curr) {
            if (!curr.includes(":"))
                return str;
            var _a = curr.split(":"), styleName = _a[0], theRest = _a.slice(1);
            var stylings = theme[styleName];
            if (!stylings)
                return str;
            return prev.replace("[" + curr + "]", stylings.map(function (str) { return styles[str]; }).join("") + theRest.join(":").trim() + "\x1b[0m");
        }, str);
    },
};
exports.default = styledString;
