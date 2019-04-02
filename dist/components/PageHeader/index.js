"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var emotion_1 = require("emotion");
var index_1 = require("../Themes/index");
var RowLayout1Centered_1 = __importDefault(require("../Grids/RowLayout1Centered"));
/**
 * TitleSubtitleParagraphButton
 */
var PageHeader = function (props) {
    var subtitleText = props.subtitleText, titleText = props.titleText, widthOutOf12 = props.widthOutOf12;
    var styles = getStyles(props);
    return (react_1.default.createElement(RowLayout1Centered_1.default, { className: styles.container, widthOutOf12: widthOutOf12, middleComponent: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Typography, { align: "center", className: styles.title }, titleText),
            react_1.default.createElement(core_1.Typography, { align: "center", className: styles.subtitle }, subtitleText)) }));
};
var getStyles = function (props) {
    return {
        title: emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      && {\n        font-size: ", "px;\n        margin-bottom: ", "px;\n        font-weight: bold;\n        color: white;\n        line-height: 1;\n      }\n    "], ["\n      && {\n        font-size: ", "px;\n        margin-bottom: ", "px;\n        font-weight: bold;\n        color: white;\n        line-height: 1;\n      }\n    "])), index_1.designUnits(10), index_1.designUnits(6)),
        subtitle: emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      && {\n        font-size: ", "px;\n        color: white;\n        font-size: 500;\n      }\n    "], ["\n      && {\n        font-size: ", "px;\n        color: white;\n        font-size: 500;\n      }\n    "])), index_1.designUnits(4)),
        container: emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-image: url(", ");\n      padding-top: ", "px;\n      padding-bottom: ", "px;\n      background-attachment: fixed;\n      background-size: cover;\n      background-position: 50% 50%;\n    "], ["\n      background-image: url(", ");\n      padding-top: ", "px;\n      padding-bottom: ", "px;\n      background-attachment: fixed;\n      background-size: cover;\n      background-position: 50% 50%;\n    "])), props.backgroundImage, index_1.designUnits(15), index_1.designUnits(10)),
    };
};
exports.default = PageHeader;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=index.js.map