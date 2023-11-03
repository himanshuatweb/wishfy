/* eslint-disable react/prop-types */
import {
  Box,
  Grid,
  Typography,
  MenuItem,
  Select,
  FormHelperText,
} from '@mui/material';
import TextInput from './TextInput';
import { Label } from './TextInput';

const Form = (props) => {
  const { values, handleChange, errors, handleBlur, touched } = props;

  return (
    <Box>
      <Box mb={2}>
        <Box mb={2}>
          <Typography variant='h6' textAlign='center'>
            User Information
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={12}>
            <TextInput
              required={true}
              type='text'
              label='Name'
              name='Name'
              fullWidth
              value={values['Name'] || ''}
              onChange={handleChange}
              error={errors['Name'] && touched['Name'] ? true : false}
              helperText={touched['Name'] ? errors['Name'] : ''}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInput
              required={true}
              type='text'
              label='Address'
              name='Address'
              fullWidth
              value={values['Address'] || ''}
              onChange={handleChange}
              error={errors['Address'] && touched['Address'] ? true : false}
              helperText={touched['Address'] ? errors['Address'] : ''}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item xs={12}>
            <TextInput
              required={true}
              type='number'
              label='Phone'
              name='Phone'
              fullWidth
              value={values['Phone'] || ''}
              onChange={handleChange}
              error={errors['Phone'] && touched['Phone'] ? true : false}
              helperText={touched['Phone'] ? errors['Phone'] : ''}
              onBlur={handleBlur}
            />
          </Grid>

          <Grid item xs={12} mb={2}>
            <Label>
              Payment Method <span style={{ color: 'red' }}>*</span>
            </Label>
            <Select
              fullWidth
              labelId='payment-method-label-121'
              id='payment-method-label-id'
              name='Payment'
              value={values['Payment'] || ''}
              onChange={handleChange}
              error={errors['Payment'] && touched['Payment'] ? true : false}
              onBlur={handleBlur}
            >
              <MenuItem value={'PayPal'}>PayPal</MenuItem>
              <MenuItem value={'MasterCard'}>MasterCard</MenuItem>
              <MenuItem value={'COD'}>COD</MenuItem>
            </Select>
            <FormHelperText error>
              {touched['Payment'] ? errors['Payment'] : ''}
            </FormHelperText>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
