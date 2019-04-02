"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('ContentPatterns/RowLayout3And3And3And3', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { farLeftComponent: react_1.default.createElement("div", { style: { backgroundColor: 'red', height: 400 } }, "far left"), leftOfCenterComponent: react_1.default.createElement("div", { style: { backgroundColor: 'yellow', height: 400 } }, "left of center"), rightOfCenterComponent: react_1.default.createElement("div", { style: { backgroundColor: 'green', height: 400 } }, "right of center"), farRightComponent: react_1.default.createElement("div", { style: { backgroundColor: 'blue', height: 400 } }, "far right") })); });
//# sourceMappingURL=stories.js.map