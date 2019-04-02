import { createMuiTheme } from '@material-ui/core';

export function designUnits(num) {
  return num * 8;
}

export const FONT_FAMILY = {
  primary: 'HKGrotesk, "HK Grotesk", sans-serif',
  secondary: 'Roboto, san-serif',
};

export const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  heavy: 700,
};

export const EXO_CONFIG = {
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

export const INDIGO = {
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
INDIGO['A700'] = INDIGO[600];
INDIGO['A400'] = INDIGO[500];
INDIGO['A200'] = INDIGO[400];
INDIGO['A100'] = INDIGO[200];

export const PURPLE = {
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
PURPLE['A700'] = PURPLE[600];
PURPLE['A400'] = PURPLE[500];
PURPLE['A200'] = PURPLE[400];
PURPLE['A100'] = PURPLE[200];

export const TEAL = {
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
TEAL['A700'] = '#00BDA3';
TEAL['A400'] = '#00CFB3';
TEAL['A200'] = '#00D7C0';
TEAL['A100'] = '#6AE5D5';

export const RED = {
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
RED['A700'] = RED[600];
RED['A400'] = RED[500];
RED['A200'] = RED[400];
RED['A100'] = RED[200];

export const AMBER = {
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
AMBER['A700'] = AMBER[600];
AMBER['A400'] = AMBER[500];
AMBER['A200'] = AMBER[400];
AMBER['A100'] = AMBER[200];

export const BLUE = {
  600: '#00a2e6',
  500: '#00c5ff',
  100: '#D0F5FF',
  A700: '#00B4F7',
};

export const GREY = {
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

export const WHITE = {
  '900': '#FFFFFF',
  '900-075': 'rgba(225, 225, 225, 0.75)',
  '900-038': 'rgba(225, 225, 225, 0.38)',
  '900-008': 'rgba(225, 225, 225, 0.08)',
  '900-016': 'rgba(225, 225, 225, 0.16)',
};

const ELEVATION = [
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

const PALETTE: any = {
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
    light: RED[100],
    main: RED[500],
    dark: RED[700],
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

const typography = {
  fontFamily: FONT_FAMILY.primary,
  fontSize: designUnits(2),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  display1: {
    fontSize: designUnits(6),
    fontWeight: 700,
    fontFamily: FONT_FAMILY.primary,
    lineHeight: '1.2',
    color: PURPLE[500],
  },
  headline: {
    fontSize: designUnits(2.5),
    fontWeight: 700,
    fontFamily: FONT_FAMILY.primary,
    lineHeight: 1.5,
    color: GREY[900],
  },
  title: {
    fontSize: designUnits(3.5),
    fontWeight: 700,
    fontFamily: FONT_FAMILY.primary,
    lineHeight: 1.5,
    color: GREY[900],
    marginBottom: EXO_CONFIG.sm,
  },
  subheading: {
    fontSize: designUnits(3),
    fontWeight: 700,
    fontFamily: FONT_FAMILY.primary,
    lineHeight: 1.1,
    color: GREY[900],
  },
  display3: {
    fontFamily: FONT_FAMILY.primary,
    fontSize: designUnits(1.5),
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 2.14,
    letterSpacing: '2px',
    color: PURPLE[500],
  },
  body1: {
    fontSize: designUnits(2),
    fontWeight: 300,
    fontFamily: FONT_FAMILY.secondary,
    lineHeight: 1.4,
    color: GREY['900-075'],
  },
  body2: {
    fontSize: designUnits(2),
    fontWeight: 600,
    fontFamily: FONT_FAMILY.secondary,
    lineHeight: 1.4,
    color: GREY[900],
  },
  caption: {
    color: GREY['900-075'],
    fontSize: designUnits(1.5),
    fontWeight: 300,
    fontFamily: FONT_FAMILY.secondary,
    lineHeight: 1.2,
  },
  display2: {
    fontSize: designUnits(4),
    fontWeight: 400,
    fontFamily: FONT_FAMILY.secondary,
    lineHeight: 1.2,
    color: GREY['900-075'],
  },
  button: {
    fontSize: designUnits(2),
  },
};

const theme = createMuiTheme({
  // PALETTE
  palette: PALETTE,
  typography,
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
        "backgroundColor": WHITE[900],
        "color": PALETTE.primary.main,
        "border": `1px solid`,
        '&:hover': {
          backgroundColor: PALETTE.primary.main,
          color: WHITE[900],
        },
      },
      textPrimary: {
        '&:hover': {
          backgroundColor: GREY['900-016'],
          color: PALETTE.primary.main,
        },
      },
    },
    // Card
    MuiCard: {
      root: {
        padding: `${EXO_CONFIG.lg} ${EXO_CONFIG.xl}`,
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
          color: GREY[900],
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
          color: PURPLE[500],
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
        fontFamily: FONT_FAMILY.primary,
        padding: `0 ${EXO_CONFIG.lg}`,
        lineHeight: 1,
        borderRadius: 6,
      },
      underline: {
        '&:after': {
          borderBottom: `3px solid ${PURPLE[500]}`,
        },
        '&$focused:after': {
          transform: 'scaleX(1)',
        },
        '&$error:after': {
          borderBottomColor: RED[500],
          transform: 'scaleX(1)', // error is always underlined in red
        },
        '&:before': {
          borderBottom: `3px solid transparent`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `3px solid ${GREY[500]}`,
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
        paddingBottom: EXO_CONFIG.xxs,
        paddingTop: EXO_CONFIG.xxs,
      },
      root: {
        background: '#fff',
        borderRadius: 10,
        boxShadow: `0 2px 9px 0 ${ELEVATION[0]}`,
      },
    },
    MuiListItem: {
      root: {
        "marginBottom": EXO_CONFIG.xs,
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
          backgroundColor: GREY[100],
        },
      },
      default: {
        paddingBottom: EXO_CONFIG.xxs,
        paddingTop: EXO_CONFIG.xxs,
      },
      gutters: {
        paddingLeft: EXO_CONFIG.xs,
        paddingRight: EXO_CONFIG.xs,
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
        color: GREY[900],
        fontFamily: FONT_FAMILY.secondary,
        fontWeight: FONT_WEIGHT.light,
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
        fontFamily: FONT_FAMILY.secondary,
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
        backgroundColor: INDIGO[900],
        borderRadius: `6px !important`,
        color: WHITE[900],
        fontFamily: FONT_FAMILY.secondary,
        fontSize: '16px',
      },
    },
    MuiTooltip: {
      tooltip: {},
      tooltipPlacementTop: {},
    },
  },
});

export default theme;
