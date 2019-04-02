"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * HeroContent
 *
 * Molecule: Logo, over hero text, over call-to-action button
 */
var HeroContent = function (props) {
    var logoSourceUrl = props.logoSourceUrl, paragraphTexts = props.paragraphTexts, buttonLabel = props.buttonLabel;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "flex-start", spacing: 40, style: { maxWidth: 800, backgroundColor: 'blue' } },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.CardMedia, { component: "img", image: logoSourceUrl })),
            react_1.default.createElement(core_1.Grid, { item: true }, paragraphTexts.map(function (text) {
                return (react_1.default.createElement(core_1.Typography, { variant: 'body1', align: "left", style: { color: 'white' } }, text));
            })),
            react_1.default.createElement(core_1.Grid, { item: true },
                ' ',
                react_1.default.createElement(core_1.Button, { onClick: function () { return alert('HeroContent Button onClick fired!'); }, variant: "outlined", style: {
                        color: 'yellow',
                        borderRadius: 24,
                        borderColor: 'yellow',
                    } }, buttonLabel)))));
};
exports.default = HeroContent;
//# sourceMappingURL=index.js.map