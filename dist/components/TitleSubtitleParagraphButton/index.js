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
var defaultProps = {
    titleConfig: {
        text: '',
        variant: 'h1',
        align: 'left',
    },
    subtitleConfig: {
        text: '',
        variant: 'h2',
        align: 'left',
    },
    spacing: 8,
    textAlign: 'left',
    buttonAlign: 'center',
};
var TitleComponent = function (titleConfig) {
    if (!titleConfig) {
        return null;
    }
    return (react_1.default.createElement(core_1.Typography, { align: titleConfig.align, variant: titleConfig.variant }, titleConfig.text));
};
var SubtitleComponent = function (subtitleConfig) {
    if (!subtitleConfig) {
        return null;
    }
    return (react_1.default.createElement(core_1.Typography, { align: subtitleConfig.align, variant: subtitleConfig.variant }, subtitleConfig.text));
};
var TitleSubtitleParagraphButton = function (_a) {
    var titleConfig = _a.titleConfig, subtitleConfig = _a.subtitleConfig, textAlign = _a.textAlign, spacing = _a.spacing, buttonAlign = _a.buttonAlign, paragraphTexts = _a.paragraphTexts, buttonComponent = _a.buttonComponent;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column", spacing: spacing },
            react_1.default.createElement(core_1.Grid, { item: true }, TitleComponent(titleConfig || defaultProps.titleConfig)),
            react_1.default.createElement(core_1.Grid, { item: true }, SubtitleComponent(subtitleConfig || defaultProps.subtitleConfig)),
            react_1.default.createElement(core_1.Grid, { item: true }, paragraphTexts &&
                paragraphTexts.map(function (text) { return (react_1.default.createElement(core_1.Typography, { align: textAlign, variant: 'body1' }, text)); })),
            react_1.default.createElement(core_1.Grid, { item: true, alignItems: buttonAlign }, buttonComponent))));
};
exports.default = TitleSubtitleParagraphButton;
//# sourceMappingURL=index.js.map