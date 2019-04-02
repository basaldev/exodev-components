"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Hidden_1 = __importDefault(require("@material-ui/core/Hidden"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var Close_1 = __importDefault(require("@material-ui/icons/Close"));
var styles_1 = require("@material-ui/core/styles");
var styles = styles_1.createStyles({
    root: {
        background: 'transparent',
        boxShadow: 'none',
        color: 'rgba(0, 0, 0, 0.87);',
    },
    logo: {
        flexGrow: 1,
    },
    buttons: {
        width: 'auto',
        marginLeft: 10,
    },
    drawer: {
        width: '100%',
    },
    drawerHeader: {
        textAlign: 'right',
    },
});
/**
 * Exponential Transformation Book Button
 */
var Header = function (props) {
    var _a = react_1.useState({ drawerOpen: false }), state = _a[0], setState = _a[1];
    var openDrawer = function () { return setState({ drawerOpen: true }); };
    var cloaseDrawer = function () { return setState({ drawerOpen: false }); };
    var classes = props.classes, logo = props.logo, links = props.links, buttons = props.buttons;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(AppBar_1.default, { position: "static", className: classes.root },
            react_1.default.createElement(Toolbar_1.default, null,
                react_1.default.createElement("div", { className: classes.logo },
                    react_1.default.createElement("a", { href: logo.href },
                        react_1.default.createElement("img", { width: logo.width, src: logo.src, alt: logo.alt, title: logo.alt }))),
                react_1.default.createElement(Hidden_1.default, { smDown: true },
                    links.map(function (link) { return (react_1.default.createElement(Button_1.default, { key: link.href, href: link.href }, link.label)); }),
                    react_1.default.createElement(Grid_1.default, { container: true, spacing: 8, className: classes.buttons }, buttons.map(function (button) { return (react_1.default.createElement(Grid_1.default, { item: true },
                        react_1.default.createElement(Button_1.default, { key: button.href, variant: "contained", color: "primary", href: button.href }, button.label))); }))),
                react_1.default.createElement(Hidden_1.default, { mdUp: true },
                    react_1.default.createElement(IconButton_1.default, { color: "inherit", "aria-label": "Menu", onClick: openDrawer },
                        react_1.default.createElement(Menu_1.default, { color: "inherit" }))))),
        react_1.default.createElement(Drawer_1.default, { open: state.drawerOpen, anchor: "right", classes: { paper: classes.drawer } },
            react_1.default.createElement("div", { className: classes.drawerHeader },
                react_1.default.createElement(IconButton_1.default, { color: "default", "aria-label": "Menu", onClick: cloaseDrawer },
                    react_1.default.createElement(Close_1.default, null))),
            react_1.default.createElement(List_1.default, null,
                links.map(function (link) { return (react_1.default.createElement(ListItem_1.default, { key: link.href, button: true, href: link.href },
                    react_1.default.createElement(ListItemText_1.default, { primary: link.label }))); }),
                react_1.default.createElement(Divider_1.default, null),
                buttons.map(function (button) { return (react_1.default.createElement(ListItem_1.default, { key: button.href, button: true, href: button.href },
                    react_1.default.createElement(ListItemText_1.default, { primary: button.label, color: "primary" }))); })))));
};
exports.default = styles_1.withStyles(styles)(Header);
//# sourceMappingURL=index.js.map