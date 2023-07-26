
import { Typography, Box, Paper, Grid, Stack } from '@mui/material'

export const CvInput = (props) => {
    const {fullName, setTitle, setPhone, socialLinks, setSummary} = props.personalInfo

  return (
    <Paper sx={{width: '100%', height: '980px', mx: 1, overflow: 'auto'}}>
        {/* <Box component='header' sx={{display: 'flex', gap: '1rem',
            backgroundColor: '#164572', color: '#f3f1f1', padding: '1rem',
            overflow: 'hidden', fontSize: '1.2rem', fontWeight: 600}}
        >
            <Typography variant='h4'>{fullName}</Typography>
        </Box> */}
        <Grid container spacing={2} >
            <Grid xs={4}>
                <Stack sx={{width: '100%', height: '996px', bgcolor: '#164572',}}>
                    <Box p={4}>
                        <Typography>Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Adipisci, in, nisi magni, 
                        eos repellat illum voluptatem libero porro 
                        consequuntur voluptate enim vitae sint laboriosam 
                        officia sit ea! Quibusdam, deleniti laudantium!</Typography>
                    </Box>
                </Stack>
            </Grid>
            <Grid xs={8}>
                <Stack sx={{width: '100%', height: '996px', bgcolor: '#e2e8f0'}}>
                    <Box p={4}>
                        <Typography variant='h4'pb={4}>
                            {fullName}
                        </Typography>
                        <Typography variant='h5'>Summary</Typography>
                        <Typography>
                            {setSummary}
                        </Typography>
                        <Typography variant='h5' pt={4}>Work Experience</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Adipisci, in, nisi magni, 
                            eos repellat illum voluptatem libero porro 
                            consequuntur voluptate enim vitae sint laboriosam 
                            officia sit ea! Quibusdam, deleniti laudantium!
                        </Typography>
                        <Typography variant='h5' pt={4}>Education</Typography>
                        <Typography>Lorem ipsum dolor sit amet consectetur, 
                            adipisicing elit. Adipisci, in, nisi magni, 
                            eos repellat illum voluptatem libero porro 
                            consequuntur voluptate enim vitae sint laboriosam 
                            officia sit ea! Quibusdam, deleniti laudantium!
                        </Typography>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    </Paper>
  )
}
