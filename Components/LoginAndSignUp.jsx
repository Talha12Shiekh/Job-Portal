import { Box, Button } from '@mui/material'
import React from 'react'
import CustomTypography from './CustomTypography'
import { GREEN_COLOR } from '../Constants'

const LoginAndSignUp = ({...props}) => {
  return (
    <Box component="div" display="flex" gap={3} {...props}>
    <Button variant="contained" sx={{bgcolor:GREEN_COLOR}}>
      <CustomTypography color="black" text="Post a Job" /> 
    </Button>
    <Button variant="outlined" color="success" sx={{borderWidth:2,borderColor:GREEN_COLOR}}>
      <CustomTypography text="Log in" />
    </Button>
    <Button variant="outlined" color="success" sx={{borderWidth:2,borderColor:GREEN_COLOR}}>
      <CustomTypography text="Sign up" />
    </Button>
  </Box>
  )
}

export default LoginAndSignUp