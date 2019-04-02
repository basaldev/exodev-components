"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Molecules/TitleSubtitleParagraphButton', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { titleConfig: {
        text: 'Why you need ExO Launchpad?',
    }, subtitleConfig: {
        text: 'Subtitle text here',
    }, paragraphTexts: [
        'ExO Launchpad includes a number of our open tools and resources:',
        'ExO canvas, tools and methods allow anyone to tap into abundance and to manage it to scale exponentially.',
        'We deliver you educational resources, field experts and tools to help you build great exponential organizations.',
    ] })); });
//# sourceMappingURL=stories.js.map