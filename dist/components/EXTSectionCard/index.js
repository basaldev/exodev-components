"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var EXTCardButton_1 = __importDefault(require("../EXTCardButton"));
var EXTCardHeadline_1 = __importDefault(require("../EXTCardHeadline"));
var EXTCardSubtitle_1 = __importDefault(require("../EXTCardSubtitle"));
var EXTCardImage_1 = __importDefault(require("../EXTCardImage"));
var EXTCardText_1 = __importDefault(require("../EXTCardText"));
/**
 * Exponential Transformation Book Section Card
 *
 * Choose from:
 * - imageSide: 'left' or 'right'
 * - variation: 'button' or 'text'
 *
 * If variation is 'button', supply buttonText as a string.
 * If variation is 'text', suppy cardText of an array of strings, one for each paragraph.
 */
var EXTSectionCard = function (props) {
    var buttonText = props.buttonText, cardText = props.cardText, headline = props.headline, imageSide = props.imageSide, imageSourceUrl = props.imageSourceUrl, imageTitle = props.imageTitle, imageWidth = props.imageWidth, subtitle = props.subtitle, variation = props.variation;
    return (react_1.default.createElement("div", { style: { padding: 50 } },
        react_1.default.createElement(core_1.Card, { raised: true, style: { padding: 24 } },
            react_1.default.createElement(core_1.Grid, { container: true, direction: imageSide === 'right' ? 'row' : 'row-reverse', justify: "space-between", alignItems: "flex-start", spacing: 40 },
                react_1.default.createElement(core_1.Grid, { item: true, md: 6 },
                    react_1.default.createElement(core_1.Grid, { container: true, direction: "column", justify: "space-between", alignItems: "flex-start", spacing: 40 },
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(EXTCardHeadline_1.default, { size: "large", text: headline })),
                        react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(EXTCardSubtitle_1.default, { size: "large", text: subtitle })),
                        react_1.default.createElement(core_1.Grid, { item: true, alignContent: "flex-end" }, variation === 'button' ? (react_1.default.createElement(EXTCardButton_1.default, { label: buttonText })) : (react_1.default.createElement(core_1.Grid, { container: true, direction: "column", spacing: 24 }, cardText &&
                            cardText.map(function (txt) {
                                return (react_1.default.createElement(core_1.Grid, { item: true },
                                    react_1.default.createElement(EXTCardText_1.default, { text: txt })));
                            })))))),
                react_1.default.createElement(core_1.Grid, { item: true, md: 6 },
                    react_1.default.createElement(EXTCardImage_1.default, { title: imageTitle, url: imageSourceUrl, width: imageWidth }))))));
};
exports.default = EXTSectionCard;
//# sourceMappingURL=index.js.map