"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var index_1 = __importDefault(require("./index"));
var stories = react_2.storiesOf('Atoms/Button', module);
stories.add('default', function () { return react_1.default.createElement(index_1.default, { label: "default" }); });
stories.add('primary', function () { return react_1.default.createElement(index_1.default, { label: "primary" }); });
//# sourceMappingURL=stories.js.map