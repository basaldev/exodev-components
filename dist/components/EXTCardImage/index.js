"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * Exponential Transformation Book Card Image
 */
var EXTCardImage = function (props) {
    var title = props.title, url = props.url, width = props.width;
    return (react_1.default.createElement(core_1.CardMedia, { component: "img", image: url, style: { width: width }, title: title }));
};
exports.default = EXTCardImage;
//# sourceMappingURL=index.js.map