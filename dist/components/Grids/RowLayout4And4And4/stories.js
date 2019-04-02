"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('ContentPatterns/RowLayout4And4And4', module);
stories.add('Row Layout with three sm=4 width columns', function () { return (react_1.default.createElement(_1.default, { leftComponent: react_1.default.createElement("div", { style: { background: 'red', height: 300 } }), middleComponent: react_1.default.createElement("div", { style: { background: 'green', height: 300 } }), rightComponent: react_1.default.createElement("div", { style: { background: 'yellow', height: 300 } }) })); });
//# sourceMappingURL=stories.js.map