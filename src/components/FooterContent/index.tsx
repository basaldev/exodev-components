import React, { FunctionComponent } from 'react';
import { CardMedia, Grid, Link, Typography } from '@material-ui/core';

interface IProps {
  logoSourceUrl: string;
  links: Array<{
    label: string;
    url: string;
  }>;
  companyInfo: string[];
}

/**
 * FooterContent
 *
 * Molecule: Logo, over horizontally placed links, over "company info".
 * "company info" is vertically centered, comprising several lines of text.
 */
const FooterContent: FunctionComponent<IProps> = (props: IProps) => {
  const { logoSourceUrl, links, companyInfo } = props;

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={40}
        style={{ maxWidth: 800, backgroundColor: 'purple' }}
      >
        {/* Logo */}
        <Grid item>
          <CardMedia component="img" image={logoSourceUrl} />
        </Grid>
        {/* Links */}
        <Grid item>
          <Grid container direction="row" spacing={40}>
            {links.map((link) => {
              return (
                <Grid item>
                  <Link
                    variant={'body1'}
                    href={link.url}
                    underline="always"
                    align="left"
                    style={{ color: 'white' }}
                  >
                    {link.label}
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        {/* Company Info */}
        <Grid item>
          {companyInfo.map((item) => {
            return (
              <Typography
                variant={'body1'}
                align="center"
                style={{ color: 'white' }}
              >
                {item}
              </Typography>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default FooterContent;
