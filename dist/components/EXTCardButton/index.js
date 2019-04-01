"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var styles = styles_1.createStyles({
    label: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: '16px',
        textTransform: 'capitalize',
    },
    root: {
        backgroundColor: 'rgb(86, 2, 150)',
        border: 0,
        borderRadius: 0,
        color: 'white',
        padding: '28px 0 26px',
        width: 277,
    },
});
/**
 * Exponential Transformation Book Button
 */
var EXTCardButton = function (props) {
    var classes = props.classes, label = props.label;
    return (react_1.default.createElement(core_1.Button, { classes: {
            label: classes.label,
            root: classes.root,
        }, onClick: function () { return alert('EXTCardButton onClick fired!'); }, variant: "contained" }, label));
};
exports.default = styles_1.withStyles(styles)(EXTCardButton);
//# sourceMappingURL=index.js.map