import React, {useState} from 'react'
import { Stack, Box, TextField, Button } from '@mui/material';

export const Experience = () => {
    const [organization, setOrganization] = useState('');
    const [position, setPosition] = useState('');
    const [task, setTasks] = useState('');
    const [newTask, setNewTask] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [experience, setExperience] = useState([
        {
            organization: '',
            position: '',
            tasks: [],
            startDate: '',
            endDate: '',
        }
    ]);

    const handleTasks = (e) => {
        e.preventDefault();
        setNewTask([...newTask, task]);
        setTasks('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setExperience([...experience, {
            organization: organization,
            position: position,
            tasks: newTask,
            startDate: startDate,
            endDate: endDate,
        }]);
        setOrganization('');
        setPosition('');
        setTasks('');
        setStartDate('');
        setEndDate('');
        setNewTask([]);
    }

  return (
    <Stack>
        <Box component='form' onSubmit={handleSubmit}
            sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
            alignItems: 'center', width: '100%', height: '100%', gap: '1rem', 
            backgroundColor: '#fff', color: '#fff', padding: '1rem', 
            overflow: 'hidden' }}
        >
            <TextField type="text" label="Organization" size='small' fullWidth
                variant='filled' value={organization} onChange={e => setOrganization(e.target.value)} 
            />
            <TextField type="text" label="Position" size='small' fullWidth 
                variant='filled' value={position} onChange={e => setPosition(e.target.value)}
            />
            <TextField type="text" label="Tasks" rows={2} fullWidth multiline
                variant='filled' value={task} onChange={e => setTasks(e.target.value)}
            />
            <Button variant='contained' size='small' onClick={handleTasks}>Add</Button>
            <input type="date" placeholder="Start Date" 
                value={startDate} onChange={e => setStartDate(e.target.value)}/>
            <input type="date" placeholder="End Date" 
                value={endDate} onChange={e => setEndDate(e.target.value)}/>
            <Button variant='contained' size='small' type='submit'>Add Experience</Button>
        </Box>
        {/* <Box>
            {experience.map((exp, index) => (
                <div key={index}>
                    <h3>{exp.organization}</h3>
                    <h4>{exp.position}</h4>
                    <ul>
                        {exp.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                    <p>{exp.startDate} - {exp.endDate}</p>
                </div>
                ))}
        </Box> */}
    </Stack>
  )
}
