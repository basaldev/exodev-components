"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var styles = styles_1.createStyles({
    root: {
        color: 'rgb(0, 174, 239)',
        fontWeight: 700,
        lineHeight: 1,
    },
});
/**
 * Exponential Transformation Book Card Headline
 */
var EXTCardHeadline = function (props) {
    var classes = props.classes, size = props.size, text = props.text;
    return (react_1.default.createElement(core_1.Typography, { classes: {
            root: classes.root,
        }, style: { fontSize: size === 'large' ? 70 : 45 }, variant: size === 'large' ? 'h1' : 'h2' }, text));
};
exports.default = styles_1.withStyles(styles)(EXTCardHeadline);
//# sourceMappingURL=index.js.map