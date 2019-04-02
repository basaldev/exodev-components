"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var RowLayout1Centered = function (props) {
    var middleComponent = props.middleComponent, widthOutOf12 = props.widthOutOf12, className = props.className;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Grid, { container: true, className: className, direction: "row", alignContent: "center", justify: "center" },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: widthOutOf12 }, middleComponent))));
};
exports.default = RowLayout1Centered;
//# sourceMappingURL=index.js.map