"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Atoms/EXTCardText', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { text: "As exponential technologies converge and build upon one another, they bring abundance to every industry and, simultaneously, disrupt them all in one way or another." })); });
//# sourceMappingURL=stories.js.map