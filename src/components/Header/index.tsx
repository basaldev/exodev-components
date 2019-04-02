import React, { FunctionComponent, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';

const styles = createStyles({
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

interface ILogo {
  alt: string;
  src: string;
  width: number;
  href: string;
}

interface ILink {
  label: string;
  href: string;
}

interface IProps extends WithStyles<typeof styles> {
  logo: ILogo;
  links: ILink[];
  buttons: ILink[];
}

/**
 * Exponential Transformation Book Button
 */
const Header: FunctionComponent<IProps> = (props: IProps) => {
  const [state, setState] = useState({ drawerOpen: false });
  const openDrawer = () => setState({ drawerOpen: true });
  const cloaseDrawer = () => setState({ drawerOpen: false });
  const { classes, logo, links, buttons } = props;
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <div className={classes.logo}>
            <a href={logo.href}>
              <img
                width={logo.width}
                src={logo.src}
                alt={logo.alt}
                title={logo.alt}
              />
            </a>
          </div>
          <Hidden smDown>
            {links.map((link: ILink) => (
              <Button key={link.href} href={link.href}>
                {link.label}
              </Button>
            ))}
            <Grid container spacing={8} className={classes.buttons}>
              {buttons.map((button: ILink) => (
                <Grid item>
                  <Button
                    key={button.href}
                    variant="contained"
                    color="primary"
                    href={button.href}
                  >
                    {button.label}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <IconButton color="inherit" aria-label="Menu" onClick={openDrawer}>
              <MenuIcon color="inherit" />
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        open={state.drawerOpen}
        anchor="right"
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.drawerHeader}>
          <IconButton color="default" aria-label="Menu" onClick={cloaseDrawer}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          {links.map((link: ILink) => (
            <ListItem key={link.href} button href={link.href}>
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
          <Divider />
          {buttons.map((button: ILink) => (
            <ListItem key={button.href} button href={button.href}>
              <ListItemText primary={button.label} color="primary" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(Header);
