"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
/**
 * FooterContent
 *
 * Molecule: Logo, over horizontally placed links, over "company info".
 * "company info" is vertically centered, comprising several lines of text.
 */
var FooterContent = function (props) {
    var logoSourceUrl = props.logoSourceUrl, links = props.links, companyInfo = props.companyInfo;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column", justify: "center", alignItems: "center", spacing: 40, style: { maxWidth: 800, backgroundColor: 'purple' } },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.CardMedia, { component: "img", image: logoSourceUrl })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Grid, { container: true, direction: "row", spacing: 40 }, links.map(function (link) {
                    return (react_1.default.createElement(core_1.Grid, { item: true },
                        react_1.default.createElement(core_1.Link, { variant: 'body1', href: link.url, underline: "always", align: "left", style: { color: 'white' } }, link.label)));
                }))),
            react_1.default.createElement(core_1.Grid, { item: true }, companyInfo.map(function (item) {
                return (react_1.default.createElement(core_1.Typography, { variant: 'body1', align: "center", style: { color: 'white' } }, item));
            })))));
};
exports.default = FooterContent;
//# sourceMappingURL=index.js.map