"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var Grommet = __importStar(require("grommet/components/Button"));
/**
 * Button description
 */
var Button = function (_a) {
    var label = _a.label;
    return React.createElement(Grommet.Button, { label: label });
};
exports.default = Button;
//# sourceMappingURL=index.js.map