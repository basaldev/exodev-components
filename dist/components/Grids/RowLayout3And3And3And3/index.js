"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * RowLayout3/And3And3And3
 *
 * Material Design’s responsive UI is based on a 12-column grid layout.
 * xs, extra-small: 0px or larger
 * sm, small: 600px or larger
 */
var RowLayout3And3And3And3 = function (props) {
    var farLeftComponent = props.farLeftComponent, leftOfCenterComponent = props.leftOfCenterComponent, rightOfCenterComponent = props.rightOfCenterComponent, farRightComponent = props.farRightComponent;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between" },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 3 }, farLeftComponent),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 3 }, leftOfCenterComponent),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 3 }, rightOfCenterComponent),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 3 }, farRightComponent))));
};
exports.default = RowLayout3And3And3And3;
//# sourceMappingURL=index.js.map