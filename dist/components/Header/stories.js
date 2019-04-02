"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Molecules/Header', module);
stories.add('default', function () { return (react_1.default.createElement(_1.default, { logo: {
        href: '/',
        alt: 'logo',
        width: 200,
        src: 'https://static1.squarespace.com/static/5b33ad559772aedf7cd44bf7/t/5c48589ccd836610282dfb98/1554129534941/?format=1500w',
    }, links: [
        { label: 'Link 1', href: '/1' },
        { label: 'Link 2', href: '/2' },
        { label: 'Link 3', href: '/3' },
    ], buttons: [
        { label: 'Action 1', href: '/1' },
        { label: 'Action 2', href: '/2' },
    ] })); });
//# sourceMappingURL=stories.js.map