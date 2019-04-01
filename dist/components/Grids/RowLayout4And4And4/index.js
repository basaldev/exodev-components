"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var RowLayout4And4And4 = function (props) {
    var leftComponent = props.leftComponent, middleComponent = props.middleComponent, rightComponent = props.rightComponent;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "row", alignContent: "center", justify: "space-between" },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 }, leftComponent),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 }, middleComponent),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 }, rightComponent))));
};
exports.default = RowLayout4And4And4;
//# sourceMappingURL=index.js.map