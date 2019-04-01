"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Molecules/HeroContent', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { logoSourceUrl: "https://exolaunchpad.com/imgs/social/logo.svg", paragraphTexts: [
        'Launchpad helps you build a new type of organization, an ExO or Exponential Organization. An ExO is a purpose-driven venture that leverages exponential technologies and a set of common attributes to grow and transform the world.',
    ], buttonLabel: "Join the Community" })); });
//# sourceMappingURL=stories.js.map