"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * RowLayout8And4
 *
 * Material Design’s responsive UI is based on a 12-column grid layout.
 * xs, extra-small: 0px or larger
 * sm, small: 600px or larger
 *
 * This layout component renders two input components side by side if the viewport
 * is 600px or wider, with the left component taking 2/3 of the width, and the right component
 * taking 1/3 of the width. If the viewport is less than 600px wide, the input components
 * are rendered one above the other, both taking full width.
 */
var RowLayout8And4 = function (props) {
    var leftComponent = props.leftComponent, rightComponent = props.rightComponent;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "row", justify: "space-between" },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 8 }, leftComponent),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12, sm: 4 }, rightComponent))));
};
exports.default = RowLayout8And4;
//# sourceMappingURL=index.js.map