"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@material-ui/core");
function designUnits(num) {
    return num * 8;
}
exports.designUnits = designUnits;
exports.FONT_FAMILY = {
    primary: 'HKGrotesk, "HK Grotesk", sans-serif',
    secondary: 'Roboto, san-serif',
};
exports.FONT_WEIGHT = {
    light: 300,
    regular: 400,
    medium: 500,
    heavy: 700,
};
exports.EXO_CONFIG = {
    xxxs: '4px',
    xxs: '8px',
    xs: '16px',
    sm: '24px',
    md: '32px',
    lg: '40px',
    xl: '48px',
    xxl: '56px',
    xxxl: '64px',
    xxxxl: '72px',
};
exports.INDIGO = {
    900: '#001846',
    800: '#002E58',
    700: '#375B7B',
    600: '#526F8B',
    500: '#6C859C',
    400: '#8699AD',
    300: '#9FAEBE',
    200: '#87C2CE',
    100: '#CFD7DE',
    50: '#E7EBEF',
};
exports.INDIGO['A700'] = exports.INDIGO[600];
exports.INDIGO['A400'] = exports.INDIGO[500];
exports.INDIGO['A200'] = exports.INDIGO[400];
exports.INDIGO['A100'] = exports.INDIGO[200];
exports.PURPLE = {
    900: '#3A1090',
    800: '#5018BF',
    700: '#5C1CD7',
    600: '#6620ED',
    500: '#6F23FF',
    400: '#7E38FF',
    300: '#9A62FF',
    200: '#B48AFF',
    100: '#C29FF',
    50: '#D9C5FF',
};
exports.PURPLE['A700'] = exports.PURPLE[600];
exports.PURPLE['A400'] = exports.PURPLE[500];
exports.PURPLE['A200'] = exports.PURPLE[400];
exports.PURPLE['A100'] = exports.PURPLE[200];
exports.TEAL = {
    900: '#005a5e',
    800: '#00797e',
    700: '#00888d',
    600: '#00a5ad',
    500: '#009688',
    400: '#00b6bc',
    300: '#00c6ca',
    200: '#59d6d9',
    100: '#82dee1',
    50: '#a4e7e9',
};
exports.TEAL['A700'] = '#00BDA3';
exports.TEAL['A400'] = '#00CFB3';
exports.TEAL['A200'] = '#00D7C0';
exports.TEAL['A100'] = '#6AE5D5';
exports.RED = {
    900: '#A13C3D',
    800: '#BB4647',
    700: '#D55252',
    600: '#EF5D5E',
    500: '#FF7273',
    400: '#FF9899',
    300: '#FFB2B3',
    200: '#FFCCCC',
    100: '#FFD9D9',
    50: '#FFE6E6',
};
exports.RED['A700'] = exports.RED[600];
exports.RED['A400'] = exports.RED[500];
exports.RED['A200'] = exports.RED[400];
exports.RED['A100'] = exports.RED[200];
exports.AMBER = {
    900: '#E7934D',
    800: '#FCA155',
    700: '#FFB05C',
    600: '#FFC26B',
    500: '#FFCA75',
    400: '#FFCE82',
    300: '#FFD38F',
    200: '#FFDDA8',
    100: '#FFE7C2',
    50: '#FFF0DA',
};
exports.AMBER['A700'] = exports.AMBER[600];
exports.AMBER['A400'] = exports.AMBER[500];
exports.AMBER['A200'] = exports.AMBER[400];
exports.AMBER['A100'] = exports.AMBER[200];
exports.BLUE = {
    600: '#00a2e6',
    500: '#00c5ff',
    100: '#D0F5FF',
    A700: '#00B4F7',
};
exports.GREY = {
    '50': '#F1F1F1',
    '100': '#EBEBEB',
    '200': '#D2D2D3',
    '300': '#BFBFC0',
    '400': '#A6A6A8',
    '500': '#97979A',
    '600': '#8A8AD',
    '700': '#7A7A7D',
    '800': '#646468',
    '900': '#46464B',
    "A100": '#D5D5D5',
    "A200": '#AAAAAA',
    "A400": '#303030',
    "A700": '#616161',
    "A800": '#1D1D1D',
    'A800-040': 'rgba(29, 29, 29, 0.40)',
    '900-075': 'rgba(70, 70, 75, 0.75)',
    '900-064': 'rgba(70, 70, 75, 0.64)',
    '900-038': 'rgba(70, 70, 75, 0.38)',
    '900-008': 'rgba(70, 70, 75, 0.08)',
    '900-016': 'rgba(70, 70, 75, 0.16)',
};
exports.WHITE = {
    '900': '#FFFFFF',
    '900-075': 'rgba(225, 225, 225, 0.75)',
    '900-038': 'rgba(225, 225, 225, 0.38)',
    '900-008': 'rgba(225, 225, 225, 0.08)',
    '900-016': 'rgba(225, 225, 225, 0.16)',
};
var ELEVATION = [
    'none',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
    '0 2px 9px 0 rgba(178, 178, 178, 0.5)',
];
var PALETTE = {
    common: {
        black: '#000',
        white: '#fff',
    },
    type: 'light',
    primary: {
        light: '#7986cb',
        main: '#6f2fff',
        dark: '#303f9f',
        contrastText: '#fff',
    },
    secondary: {
        light: exports.RED[100],
        main: exports.RED[500],
        dark: exports.RED[700],
        contrastText: '#fff',
    },
    error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
    },
    GREY: {},
};
var typography = {
    fontFamily: exports.FONT_FAMILY.primary,
    fontSize: designUnits(2),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    display1: {
        fontSize: designUnits(6),
        fontWeight: 700,
        fontFamily: exports.FONT_FAMILY.primary,
        lineHeight: '1.2',
        color: exports.PURPLE[500],
    },
    headline: {
        fontSize: designUnits(2.5),
        fontWeight: 700,
        fontFamily: exports.FONT_FAMILY.primary,
        lineHeight: 1.5,
        color: exports.GREY[900],
    },
    title: {
        fontSize: designUnits(3.5),
        fontWeight: 700,
        fontFamily: exports.FONT_FAMILY.primary,
        lineHeight: 1.5,
        color: exports.GREY[900],
        marginBottom: exports.EXO_CONFIG.sm,
    },
    subheading: {
        fontSize: designUnits(3),
        fontWeight: 700,
        fontFamily: exports.FONT_FAMILY.primary,
        lineHeight: 1.1,
        color: exports.GREY[900],
    },
    display3: {
        fontFamily: exports.FONT_FAMILY.primary,
        fontSize: designUnits(1.5),
        fontWeight: 500,
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: 2.14,
        letterSpacing: '2px',
        color: exports.PURPLE[500],
    },
    body1: {
        fontSize: designUnits(2),
        fontWeight: 300,
        fontFamily: exports.FONT_FAMILY.secondary,
        lineHeight: 1.4,
        color: exports.GREY['900-075'],
    },
    body2: {
        fontSize: designUnits(2),
        fontWeight: 600,
        fontFamily: exports.FONT_FAMILY.secondary,
        lineHeight: 1.4,
        color: exports.GREY[900],
    },
    caption: {
        color: exports.GREY['900-075'],
        fontSize: designUnits(1.5),
        fontWeight: 300,
        fontFamily: exports.FONT_FAMILY.secondary,
        lineHeight: 1.2,
    },
    display2: {
        fontSize: designUnits(4),
        fontWeight: 400,
        fontFamily: exports.FONT_FAMILY.secondary,
        lineHeight: 1.2,
        color: exports.GREY['900-075'],
    },
    button: {
        fontSize: designUnits(2),
    },
};
var theme = core_1.createMuiTheme({
    // PALETTE
    palette: PALETTE,
    typography: typography,
    shape: {
        borderRadius: designUnits(0.5),
    },
    // OVERRIDES
    overrides: {
        // Button
        MuiButton: {
            root: {
                height: 48,
                boxShadow: 'none !important',
                borderRadius: '30px',
                padding: '18px 33px',
                lineHeight: '1.0 !important',
            },
            outlined: {
                "lineHeight": 1,
                "backgroundColor": exports.WHITE[900],
                "color": PALETTE.primary.main,
                "border": "1px solid",
                '&:hover': {
                    backgroundColor: PALETTE.primary.main,
                    color: exports.WHITE[900],
                },
            },
            textPrimary: {
                '&:hover': {
                    backgroundColor: exports.GREY['900-016'],
                    color: PALETTE.primary.main,
                },
            },
        },
        // Card
        MuiCard: {
            root: {
                padding: exports.EXO_CONFIG.lg + " " + exports.EXO_CONFIG.xl,
            },
        },
        // Chip
        MuiChip: {
            deleteIcon: {
                "WebkitTapHighlightColor": 'transparent',
                "cursor": 'pointer',
                "height": 'auto',
                "margin": '0 4px 0 -8px',
                '&:hover': {
                    color: exports.GREY[900],
                },
            },
        },
        // Form Control
        MuiFormControl: {
            root: {
                fontSize: '20px',
            },
        },
        // Form Label
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: exports.PURPLE[500],
                },
                '&$disabled': {},
                '&$error': {},
            },
        },
        // Input
        MuiInput: {
            formControl: {
                "paddingLeft": '8px',
                'label + &': {
                    paddingLeft: '8px',
                },
            },
            root: {
                fontSize: '20px',
                height: '50px',
                fontFamily: exports.FONT_FAMILY.primary,
                padding: "0 " + exports.EXO_CONFIG.lg,
                lineHeight: 1,
                borderRadius: 6,
            },
            underline: {
                '&:after': {
                    borderBottom: "3px solid " + exports.PURPLE[500],
                },
                '&$focused:after': {
                    transform: 'scaleX(1)',
                },
                '&$error:after': {
                    borderBottomColor: exports.RED[500],
                    transform: 'scaleX(1)',
                },
                '&:before': {
                    borderBottom: "3px solid transparent",
                },
                '&:hover:not($disabled):not($focused):not($error):before': {
                    borderBottom: "3px solid " + exports.GREY[500],
                },
                '&$disabled:before': {},
            },
        },
        // Input Label
        MuiInputLabel: {
            root: {},
            marginDense: {},
            formControl: {},
        },
        // List
        MuiList: {
            padding: {
                paddingBottom: exports.EXO_CONFIG.xxs,
                paddingTop: exports.EXO_CONFIG.xxs,
            },
            root: {
                background: '#fff',
                borderRadius: 10,
                boxShadow: "0 2px 9px 0 " + ELEVATION[0],
            },
        },
        MuiListItem: {
            root: {
                "marginBottom": exports.EXO_CONFIG.xs,
                "paddingTop": '8px !important',
                // tslint:disable-next-line:object-literal-key-quotes
                paddingBottom: '8px !important',
                '&:hover': {
                    opacity: 0.8,
                    cursor: 'pointer',
                },
            },
            button: {
                '&:hover': {
                    backgroundColor: exports.GREY[100],
                },
            },
            default: {
                paddingBottom: exports.EXO_CONFIG.xxs,
                paddingTop: exports.EXO_CONFIG.xxs,
            },
            gutters: {
                paddingLeft: exports.EXO_CONFIG.xs,
                paddingRight: exports.EXO_CONFIG.xs,
            },
        },
        MuiListSubheader: {
            root: {},
        },
        // List Item Text
        MuiListItemText: {},
        // Menu
        MuiMenu: {},
        // Menu Item
        MuiMenuItem: {
            root: {
                color: exports.GREY[900],
                fontFamily: exports.FONT_FAMILY.secondary,
                fontWeight: exports.FONT_WEIGHT.light,
                fontSize: '16px',
                lineHeight: 1.5,
            },
        },
        // Modal
        MuiModal: {
            root: {
                backgroundColor: 'rgba(70, 70, 75, 0.3)',
            },
            hidden: {
                backgroundColor: 'rgba(70, 70, 75, 0.3)',
            },
        },
        // Paper
        MuiPaper: {
            rounded: {
                borderRadius: 10,
            },
            root: {
                fontFamily: exports.FONT_FAMILY.secondary,
            },
        },
        // Popover
        MuiPopover: {
            paper: {
                borderRadius: 6,
                boxShadow: '0 2px 6px 0 rgba(70, 70, 75, 0.32)',
            },
        },
        // Select
        MuiSelect: {
            root: {},
            selectMenu: {},
        },
        // Snackbar Content
        MuiSnackbarContent: {
            root: {
                backgroundColor: exports.INDIGO[900],
                borderRadius: "6px !important",
                color: exports.WHITE[900],
                fontFamily: exports.FONT_FAMILY.secondary,
                fontSize: '16px',
            },
        },
        MuiTooltip: {
            tooltip: {},
            tooltipPlacementTop: {},
        },
    },
});
exports.default = theme;
//# sourceMappingURL=index.js.map