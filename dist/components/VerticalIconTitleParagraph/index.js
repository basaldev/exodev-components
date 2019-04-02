"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * VerticalIconTitleParagraph
 *
 * Molecule: Vertical layout of icon above title above paragraph of text
 */
var VerticalIconTitleParagraph = function (props) {
    var iconSourceUrl = props.iconSourceUrl, titleText = props.titleText, paragraphTexts = props.paragraphTexts;
    return (react_1.default.createElement(core_1.Card, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column", justify: "center", alignItems: "center", spacing: 40, style: { maxWidth: 600 } },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.CardMedia, { component: "img", image: iconSourceUrl })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: 'h3', align: "center" }, titleText)),
            react_1.default.createElement(core_1.Grid, { item: true }, paragraphTexts.map(function (text) {
                return (react_1.default.createElement(core_1.Typography, { variant: 'body1', align: "center" }, text));
            })))));
};
exports.default = VerticalIconTitleParagraph;
//# sourceMappingURL=index.js.map