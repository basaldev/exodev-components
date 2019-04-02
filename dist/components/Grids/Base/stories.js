"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@storybook/react");
var RowLayout1Centered_1 = __importDefault(require("../RowLayout1Centered"));
var RowLayout4And4And4_1 = __importDefault(require("../RowLayout4And4And4"));
var RowLayout6And6_1 = __importDefault(require("../RowLayout6And6"));
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var index_1 = __importDefault(require("../../TitleSubtitleParagraphButton/index"));
var PageHeader_1 = __importDefault(require("../../PageHeader"));
var Themes_1 = __importDefault(require("../../Themes"));
var stories = react_2.storiesOf('ContentPatterns', module);
stories.add('PageExample', function () { return (react_1.default.createElement(core_1.MuiThemeProvider, { theme: Themes_1.default },
    react_1.default.createElement(PageHeader_1.default, { widthOutOf12: 6, titleText: "Building Exponential Organizations", subtitleText: "The Global ExO Transformation Ecosystem", backgroundImage: "https://static1.squarespace.com/static/5b33ad559772aedf7cd44bf7/t/5b4632b5758d46638034d03b/1531327177163/00+Header-Bg.jpg?format=2500w" }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { spacing: 24, titleConfig: {
                text: 'Access the disruptive thinking, exponential technology insights and industry leaders you need to transform for the future Exponential Organizations',
                variant: 'h3',
                align: 'left',
            }, subtitleConfig: {
                text: 'OpenExO is a Global Transformation Ecosystem helping organizations, institutions and people to transform and unlock abundance',
                variant: 'h4',
                align: 'left',
            } }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(RowLayout4And4And4_1.default, { leftComponent: react_1.default.createElement(index_1.default, { spacing: 24, subtitleConfig: {
                    text: 'We do this by helping clients',
                    variant: 'h4',
                    align: 'center',
                }, textAlign: 'center', paragraphTexts: [
                    "Fortune 500 businesses, small and medium sized businesses, cities of one million or more citizens, inspired individuals and community leaders",
                ] }), middleComponent: react_1.default.createElement(index_1.default, { spacing: 24, subtitleConfig: {
                    text: 'We do this by helping clients',
                    variant: 'h4',
                    align: 'center',
                }, textAlign: 'center', paragraphTexts: [
                    "Exponential Organizations (ExO) Sprints and On-Demand Services in the industry, technology or area of expertise you need",
                ] }), rightComponent: react_1.default.createElement(index_1.default, { spacing: 24, subtitleConfig: {
                    text: 'We do this by helping clients',
                    variant: 'h4',
                    align: 'center',
                }, textAlign: "center", paragraphTexts: [
                    "We kickstart and accelerate your ideas and initiatives with the help of the OpenExO Ecosystem, converting disruptive stress into disruptive opportunity",
                ] }) }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { subtitleConfig: {
                text: 'What’s going on now with ExO?',
                variant: 'h4',
                align: 'center',
            }, textAlign: 'center', paragraphTexts: [
                "Check out our events taking place all over the world addressing the disruptive forces shaping industries, businesses and society.",
            ], buttonComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "Event Calendar") }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { titleConfig: { text: 'ExO Books' } }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { paragraphTexts: [
                'Learn how to navigate the shifting business environment caused by the Fourth Industrial Revolution, where new technologies are fusing the digital and physical world. These books have the power to teach you and your company how to overcome the organizational immune system to become a thriving ExO (Exponential Organization).',
                'Want to engage with other readers and practitioners? Discuss the books, the methodology and the global ExO Movement online with the official ExO Book Community.',
            ], buttonComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "JOIN THE EXO BOOK COMMUNITY") }) }),
    react_1.default.createElement(RowLayout6And6_1.default, { leftComponent: react_1.default.createElement(index_1.default, { titleConfig: {
                text: 'WHY do I need to transform?',
                variant: 'h3',
                align: 'left',
            }, buttonComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "Learn More") }), rightComponent: react_1.default.createElement(index_1.default, { titleConfig: {
                text: 'HOW can I transform?',
                variant: 'h3',
                align: 'left',
            }, buttonComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "Learn More") }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { titleConfig: { text: 'ExO Books' } }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { subtitleConfig: {
                text: 'What’s going on now with ExO?',
                variant: 'h4',
                align: 'left',
            }, paragraphTexts: [
                "Check out our events taking place all over the world addressing the disruptive forces shaping industries, businesses and society.",
            ], buttonComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "Event Calendar") }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { titleConfig: { text: 'Transformation as a service' } }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement("div", null,
            react_1.default.createElement(index_1.default, { paragraphTexts: [
                    "Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.",
                ] }),
            react_1.default.createElement("img", { src: "https://static1.squarespace.com/static/5b33ad559772aedf7cd44bf7/t/5b9a3e8d562fa7f08496d756/1536835228817/transformation-service.png?format=300w", alt: "" })) }),
    react_1.default.createElement(RowLayout6And6_1.default, { leftComponent: react_1.default.createElement(index_1.default, { paragraphTexts: [
                "Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.",
            ] }), rightComponent: react_1.default.createElement(index_1.default, { paragraphTexts: [
                "Transform from a traditional to an exponential operating model by moving away from a scarcity mindset towards one based on abundance. By understanding and applying the ExO framework to your organization you'll tap into growth by a factor of 10x.",
            ] }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "REQUEST A SERVICE") }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { titleConfig: { text: 'OpenExO Ecosystem' } }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { paragraphTexts: [
                "The OpenExO Ecosystem is a global transformation playground where 400+ exponential thought leaders, innovation coaches, disruption specialists, startup founders and tech industry gurus gather to solve strategic transformation challenges. We partner with ExO entities, accelerators, incubators, tech companies and technology specialists (artificial intelligence, blockchain, augmented & virtual reality, 3D printing, biotechnology, robotics, drones and more).",
            ] }) }),
    react_1.default.createElement(RowLayout1Centered_1.default, { widthOutOf12: 8, middleComponent: react_1.default.createElement(index_1.default, { subtitleConfig: {
                text: 'Interested to Help Build Exponential Organizations?',
                variant: 'h3',
                align: 'left',
            }, buttonComponent: react_1.default.createElement(core_2.Button, { variant: "flat" }, "REQUEST A SERVICE") }) }))); });
//# sourceMappingURL=stories.js.map