import { useState, useEffect } from 'react';
import './App.css';
import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';

import { PersonalInfo } from './components/PersonalInfo'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { CvInput } from './components/CvInput';


const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    return {
      fullName: '', setTitle: '', setPhone: '', socialLinks: [], setSummary: ''
    }
  }
}

function App() {
  const [personalInfo, setPersonalInfo] = useState(getLocalStorage())

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(personalInfo))
  }, [personalInfo])

  return (
    <Grid container spacing={2} m={4}>
      <Grid sm={12} md={4}>
        <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '.3rem', 
        boxShadow: '0 0 1px #000'}} fontSize={30} fontWeight={600} color='#3f51b5' width='100%'
        py={4}>
          <PersonalInfo setInfo={setPersonalInfo}/>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '.3rem', 
        boxShadow: '0 0 1px #000'}} 
          fontSize={30} fontWeight={600} color='#3f51b5' 
        >
          <Experience />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', borderRadius: '.3rem', 
        boxShadow: '0 0 1px #000'}} 
          fontSize={30} fontWeight={600} color='#3f51b5' 
        >
          <Education />
        </Box>
      </Grid>
      <Grid sm={12} md={8}>
        <Box sx={{ display: 'flex', justifyContent: 'center'}} 
          fontSize={20} fontWeight={600} color='#3f51b5' 
          height='100%' width='700px'
        >
          <CvInput personalInfo={personalInfo}/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default App
