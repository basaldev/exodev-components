"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('ContentPatterns/RowLayout1Centered', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement("div", { style: { background: 'yellow', height: 300 } }) })); });
//# sourceMappingURL=stories.js.map