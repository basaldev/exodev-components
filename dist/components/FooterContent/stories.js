"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Molecules/FooterContent', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { logoSourceUrl: "https://exolaunchpad.com/imgs/social/openexo_logo_white.png", links: [
        {
            label: 'Exponential Organizations',
            url: 'https://exponentialorgs.com/',
        },
        {
            label: 'Exponential Transformation',
            url: 'https://exponentialtransformationbook.com/',
        },
        {
            label: 'ExO Canvas',
            url: 'https://www.exocanvas.com/',
        },
    ], companyInfo: [
        'Building Exponential Organizations - OpenExO® 2019',
        'Copyright © 2019 All rights reserved',
        'Made with ❤ by ExO DevHub',
    ] })); });
//# sourceMappingURL=stories.js.map