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
        color: 'rgb(74, 74, 74)',
        fontSize: 16,
        fontWeight: 300,
        lineHeight: '24px',
    },
});
/**
 * Exponential Transformation Book Card Text
 */
var EXTCardText = function (props) {
    var classes = props.classes, text = props.text;
    return (react_1.default.createElement(core_1.Typography, { classes: {
            root: classes.root,
        }, variant: 'h2' }, text));
};
exports.default = styles_1.withStyles(styles)(EXTCardText);
//# sourceMappingURL=index.js.map