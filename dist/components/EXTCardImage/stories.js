"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Atoms/EXTCardImage', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { title: "Image title", url: "https://images.unsplash.com/photo-1453785675141-67637e2d4b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1636&q=80", width: 200 })); });
//# sourceMappingURL=stories.js.map