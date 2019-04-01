"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * TitleSubtitleParagraphButton
 */
var TitleSubtitleParagraphButton = function (props) {
    var titleText = props.titleText, subtitleText = props.subtitleText, paragraphTexts = props.paragraphTexts, buttonComponent = props.buttonComponent;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column" },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: 'h1' }, titleText)),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: 'h2' }, subtitleText)),
            react_1.default.createElement(core_1.Grid, { item: true }, paragraphTexts &&
                paragraphTexts.map(function (text) { return (react_1.default.createElement(core_1.Typography, { variant: 'body1' }, text)); })),
            react_1.default.createElement(core_1.Grid, { item: true }, buttonComponent))));
};
exports.default = TitleSubtitleParagraphButton;
//# sourceMappingURL=index.js.map