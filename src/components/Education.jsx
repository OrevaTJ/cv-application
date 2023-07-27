import React, {useState} from 'react'
import { Stack, Box, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export const Education = () => {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [fieldOfStudy, setFieldOfStudy] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [education, setEducation] = useState([
        {
            school: '',
            degree: '',
            fieldOfStudy: '',
            startDate: '',
            endDate: '',
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducation([...education, {school: school, degree: degree, 
            fieldOfStudy: fieldOfStudy, startDate: startDate, endDate: endDate}]);
        setSchool('');
        setDegree('');
        setFieldOfStudy('');
        setStartDate('');
        setEndDate('');
    }

  return (
    <Stack py={4}>
        <Box component='form' onSubmit={handleSubmit}
            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
            alignItems: 'center', width: '100%', height: '100%', gap: '1rem', 
            backgroundColor: '#fff', color: '#fff', padding: '1rem', 
            overflow: 'hidden' }}
        >
            <TextField type="text" label="School" size='small' fullWidth
                variant='filled' value={school} onChange={(e) =>
                 setSchool(e.target.value)} />
            <TextField type="text" label="Degree" size='small' fullWidth
                variant='filled' value={degree} onChange={(e) =>
                    setDegree(e.target.value)} />
            <TextField type="text" label="Field of Study" size='small' fullWidth
                variant='filled' value={fieldOfStudy} onChange={(e) =>
                    setFieldOfStudy(e.target.value)} />
            <Stack direction='row' spacing={2} sx={{width: '100%', 
                '& .MuiFormControl-root': {width: '100%',}}}
            >
                <DatePicker type="date" label="From" views={['month', 'year']}
                    value={startDate} onChange={(e) =>
                    setStartDate(e.target.value)} sx={{width: '40%',}}
                />
                <DatePicker type="date" label="To" views={['month', 'year']}
                    value={endDate} onChange={(e) =>
                    setEndDate(e.target.value)} sx={{width: '40%',}}
                />
            </Stack>
            <Button variant='contained' size='small' type="submit">Submit</Button>
        </Box>
        {/* <Box>
            {
                education.map((edu, index) => {
                    return (
                        <div key={index}>
                            <h3>{edu.school}</h3>
                            <h4>{edu.degree}</h4>
                            <h4>{edu.fieldOfStudy}</h4>
                            <p>{edu.startDate} - {edu.endDate}</p>
                        </div>
                    )
                })
            }
        </Box> */}
    </Stack>
  )
}
