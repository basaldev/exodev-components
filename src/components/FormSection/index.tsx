import React, { FunctionComponent, useState } from 'react';
import {
  Button,
  CardMedia,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';

interface IProps {
  iconSourceUrl: string;
  titleText: string;
  formElements: Array<{
    desiredVariable:
      | 'email'
      | 'name'
      | 'location'
      | 'joinMailingList'
      | 'linkedInUrl';
    id: string;
    label: string;
    type?: 'email' | 'text';
    required: boolean;
  }>;
  formButtonLabel: string;
}

/**
 * FormArea
 *
 * Molecule: Vertical layout of icon above title above form above form submission button
 */
const FormArea: FunctionComponent<IProps> = (props: IProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [joinMailingList, setJoinMailingList] = useState(false);

  const { iconSourceUrl, titleText, formElements, formButtonLabel } = props;

  const getFormElementIndex = (inputVariable: string): number => {
    // If returns -1, then inputVariable is not a permitted variable name
    return formElements.findIndex(
      (item) => item.desiredVariable === inputVariable,
    );
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={40}
        style={{
          maxWidth: 800,
          backgroundColor: 'salmon',
          margin: 50,
          padding: 24,
        }}
      >
        {/* Icon */}
        <Grid item>
          <CardMedia
            component="img"
            image={iconSourceUrl}
            style={{ width: 100 }}
          />
        </Grid>
        {/* Title */}
        <Grid item>
          <Typography variant={'h3'} align="center" style={{ color: 'white' }}>
            {titleText}
          </Typography>
        </Grid>
        {/* Form */}
        <Grid item style={{ width: '100%' }}>
          <form>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                {' '}
                <Typography
                  variant={'body2'}
                  align="right"
                  style={{ color: 'white' }}
                >
                  * indicates required
                </Typography>
              </Grid>
              {getFormElementIndex('email') > -1 && (
                <Grid item>
                  <TextField
                    id={formElements[getFormElementIndex('email')].id}
                    label={formElements[getFormElementIndex('email')].label}
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type={formElements[getFormElementIndex('email')].type}
                    required={
                      formElements[getFormElementIndex('email')].required
                    }
                    value={email}
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </Grid>
              )}
              {getFormElementIndex('name') > -1 && (
                <Grid item>
                  <TextField
                    id={formElements[getFormElementIndex('name')].id}
                    label={formElements[getFormElementIndex('name')].label}
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type={formElements[getFormElementIndex('name')].type}
                    required={
                      formElements[getFormElementIndex('name')].required
                    }
                    value={name}
                    onChange={(event) => setName(event.currentTarget.value)}
                  />
                </Grid>
              )}
              {getFormElementIndex('linkedInUrl') > -1 && (
                <Grid item>
                  <TextField
                    id={formElements[getFormElementIndex('linkedInUrl')].id}
                    label={
                      formElements[getFormElementIndex('linkedInUrl')].label
                    }
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type={formElements[getFormElementIndex('linkedInUrl')].type}
                    required={
                      formElements[getFormElementIndex('linkedInUrl')].required
                    }
                    value={linkedInUrl}
                    onChange={(event) =>
                      setLinkedInUrl(event.currentTarget.value)
                    }
                  />
                </Grid>
              )}
              {getFormElementIndex('location') > -1 && (
                <Grid item>
                  <TextField
                    id={formElements[getFormElementIndex('location')].id}
                    label={formElements[getFormElementIndex('location')].label}
                    style={{ margin: 8 }}
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type={formElements[getFormElementIndex('location')].type}
                    required={
                      formElements[getFormElementIndex('location')].required
                    }
                    value={location}
                    onChange={(event) => setLocation(event.currentTarget.value)}
                  />
                </Grid>
              )}
              {getFormElementIndex('joinMailingList') > -1 && (
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={joinMailingList}
                        onChange={(event) =>
                          setJoinMailingList(event.currentTarget.checked)
                        }
                        id={
                          formElements[getFormElementIndex('joinMailingList')]
                            .id
                        }
                        value="joinMailingList"
                        color="primary"
                        required={
                          formElements[getFormElementIndex('joinMailingList')]
                            .required
                        }
                      />
                    }
                    label={
                      formElements[getFormElementIndex('joinMailingList')].label
                    }
                  />
                </Grid>
              )}
            </Grid>
          </form>
        </Grid>
        {/* Button */}
        <Button
          onClick={() => {
            alert(
              `EXTCardButton onClick fired with email ${email}, name ${name}, linkedInUrl ${linkedInUrl}, location ${location}, joinMailingList ${joinMailingList}`,
            );
          }}
          variant="outlined"
          type="submit"
        >
          {formButtonLabel}
        </Button>
      </Grid>
    </>
  );
};

export default FormArea;
