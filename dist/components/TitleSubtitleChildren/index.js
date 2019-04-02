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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var defaultTitleConfig = {
    variant: "h1"
};
var defaultSubtitleConfig = {
    variant: "h2"
};
/**
 * TitleSubtitleParagraphButton
 */
var TitleSubtitleChildren = function (props) {
    var titleText = props.titleText, subtitleText = props.subtitleText, children = props.children, titleConfig = props.titleConfig, subtitleConfig = props.subtitleConfig;
    var titleProps = typeof titleConfig !== 'undefined' ? __assign({}, defaultTitleConfig, titleConfig) : defaultTitleConfig;
    var subtitleProps = typeof subtitleConfig !== 'undefined' ? __assign({}, defaultSubtitleConfig, subtitleConfig) : defaultSubtitleConfig;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column" },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: titleProps.variant }, titleText)),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: subtitleProps.variant }, subtitleText)),
            react_1.default.createElement(core_1.Grid, { item: true }, children))));
};
exports.default = TitleSubtitleChildren;
//# sourceMappingURL=index.js.map