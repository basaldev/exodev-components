"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
/**
 * FormArea
 *
 * Molecule: Vertical layout of icon above title above form above form submission button
 */
var FormArea = function (props) {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), name = _b[0], setName = _b[1];
    var _c = react_1.useState(''), location = _c[0], setLocation = _c[1];
    var _d = react_1.useState(''), linkedInUrl = _d[0], setLinkedInUrl = _d[1];
    var _e = react_1.useState(false), joinMailingList = _e[0], setJoinMailingList = _e[1];
    var iconSourceUrl = props.iconSourceUrl, titleText = props.titleText, formElements = props.formElements, formButtonLabel = props.formButtonLabel;
    var getFormElementIndex = function (inputVariable) {
        // If returns -1, then inputVariable is not a permitted variable name
        return formElements.findIndex(function (item) { return item.desiredVariable === inputVariable; });
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { container: true, direction: "column", justify: "center", alignItems: "center", spacing: 40, style: {
                maxWidth: 800,
                backgroundColor: 'salmon',
                margin: 50,
                padding: 24,
            } },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.CardMedia, { component: "img", image: iconSourceUrl, style: { width: 100 } })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, { variant: 'h3', align: "center", style: { color: 'white' } }, titleText)),
            react_1.default.createElement(core_1.Grid, { item: true, style: { width: '100%' } },
                react_1.default.createElement("form", null,
                    react_1.default.createElement(core_1.Grid, { container: true, direction: "column", justify: "flex-start", alignItems: "stretch" },
                        react_1.default.createElement(core_1.Grid, { item: true },
                            ' ',
                            react_1.default.createElement(core_1.Typography, { variant: 'body2', align: "right", style: { color: 'white' } }, "* indicates required")),
                        getFormElementIndex('email') > -1 && (react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.TextField, { id: formElements[getFormElementIndex('email')].id, label: formElements[getFormElementIndex('email')].label, style: { margin: 8 }, fullWidth: true, margin: "normal", InputLabelProps: {
                                    shrink: true,
                                }, type: formElements[getFormElementIndex('email')].type, required: formElements[getFormElementIndex('email')].required, value: email, onChange: function (event) { return setEmail(event.currentTarget.value); } }))),
                        getFormElementIndex('name') > -1 && (react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.TextField, { id: formElements[getFormElementIndex('name')].id, label: formElements[getFormElementIndex('name')].label, style: { margin: 8 }, fullWidth: true, margin: "normal", InputLabelProps: {
                                    shrink: true,
                                }, type: formElements[getFormElementIndex('name')].type, required: formElements[getFormElementIndex('name')].required, value: name, onChange: function (event) { return setName(event.currentTarget.value); } }))),
                        getFormElementIndex('linkedInUrl') > -1 && (react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.TextField, { id: formElements[getFormElementIndex('linkedInUrl')].id, label: formElements[getFormElementIndex('linkedInUrl')].label, style: { margin: 8 }, fullWidth: true, margin: "normal", InputLabelProps: {
                                    shrink: true,
                                }, type: formElements[getFormElementIndex('linkedInUrl')].type, required: formElements[getFormElementIndex('linkedInUrl')].required, value: linkedInUrl, onChange: function (event) {
                                    return setLinkedInUrl(event.currentTarget.value);
                                } }))),
                        getFormElementIndex('location') > -1 && (react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.TextField, { id: formElements[getFormElementIndex('location')].id, label: formElements[getFormElementIndex('location')].label, style: { margin: 8 }, fullWidth: true, margin: "normal", InputLabelProps: {
                                    shrink: true,
                                }, type: formElements[getFormElementIndex('location')].type, required: formElements[getFormElementIndex('location')].required, value: location, onChange: function (event) { return setLocation(event.currentTarget.value); } }))),
                        getFormElementIndex('joinMailingList') > -1 && (react_1.default.createElement(core_1.Grid, { item: true },
                            react_1.default.createElement(core_1.FormControlLabel, { control: react_1.default.createElement(core_1.Checkbox, { checked: joinMailingList, onChange: function (event) {
                                        return setJoinMailingList(event.currentTarget.checked);
                                    }, id: formElements[getFormElementIndex('joinMailingList')]
                                        .id, value: "joinMailingList", color: "primary", required: formElements[getFormElementIndex('joinMailingList')]
                                        .required }), label: formElements[getFormElementIndex('joinMailingList')].label })))))),
            react_1.default.createElement(core_1.Button, { onClick: function () {
                    alert("EXTCardButton onClick fired with email " + email + ", name " + name + ", linkedInUrl " + linkedInUrl + ", location " + location + ", joinMailingList " + joinMailingList);
                }, variant: "outlined", type: "submit" }, formButtonLabel))));
};
exports.default = FormArea;
//# sourceMappingURL=index.js.map