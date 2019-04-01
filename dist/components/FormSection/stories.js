"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var _1 = __importDefault(require("./"));
var stories = react_2.storiesOf('Molecules/FormArea', module);
stories.add('form with email, name, location, joinMailingList', function () { return (react_1.default.createElement(_1.default, { iconSourceUrl: "https://exolaunchpad.com/imgs/rocket.png", titleText: "Do you want to join the collaborator community to build the ExO Launchpad?", formElements: [
        {
            desiredVariable: 'email',
            id: 'email',
            label: 'Email Address',
            type: 'email',
            required: true,
        },
        {
            desiredVariable: 'name',
            id: 'name',
            label: 'Name',
            type: 'text',
            required: false,
        },
        {
            desiredVariable: 'location',
            id: 'location',
            label: 'Preferred Location of Summit/Workshop',
            type: 'text',
            required: false,
        },
        {
            desiredVariable: 'joinMailingList',
            id: 'joinMailingList',
            label: 'Join the general ExO Movement email list',
            required: false,
        },
    ], formButtonLabel: "Subscribe" })); });
stories.add('form with email, name, linkedInUrl', function () { return (react_1.default.createElement(_1.default, { iconSourceUrl: "https://exolaunchpad.com/imgs/rocket.png", titleText: "Do you want to join the collaborator community to build the ExO Launchpad?", formElements: [
        {
            desiredVariable: 'email',
            id: 'email',
            label: 'Email Address',
            type: 'email',
            required: true,
        },
        {
            desiredVariable: 'name',
            id: 'name',
            label: 'Name',
            type: 'text',
            required: false,
        },
        {
            desiredVariable: 'linkedInUrl',
            id: 'linkedInUrl',
            label: 'LinkedIn URL',
            type: 'text',
            required: false,
        },
    ], formButtonLabel: "Subscribe" })); });
//# sourceMappingURL=stories.js.map