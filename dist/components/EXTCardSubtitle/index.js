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
        color: 'rgb(36, 198, 127)',
        fontWeight: 700,
        lineHeight: 1.25,
        textTransform: 'uppercase',
    },
});
/**
 * Exponential Transformation Book Card Subtitle
 */
var EXTCardSubtitle = function (props) {
    var classes = props.classes, size = props.size, text = props.text;
    return (react_1.default.createElement(core_1.Typography, { classes: {
            root: classes.root,
        }, style: { fontSize: size === 'large' ? 32 : 24 }, variant: 'h2' }, text));
};
exports.default = styles_1.withStyles(styles)(EXTCardSubtitle);
//# sourceMappingURL=index.js.map