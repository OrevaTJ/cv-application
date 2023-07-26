import React, {useState} from 'react';
import { Stack, Box, TextField, Button } from '@mui/material';
import { Details } from './Details';

export const PersonalInfo = ({setInfo}) => {
  
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [phone, setPhone] = useState('')
  const [socials, setSocials] = useState('')
  const [socialHandles, setSocialHandles] = useState([])
  const [summary, setSummary] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setInfo({
      fullName: name, 
      setTitle: title,
      setPhone: phone,
      socialLinks: socialHandles, 
      setSummary: summary,
    })
  }

  const handleSocials = (e) => {
    e.preventDefault()
    setSocialHandles([...socialHandles, socials])
    setSocials('')
  }

  return (
    <Stack>
      <Box component='form' onSubmit={handleSubmit} 
        sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', 
        alignItems: 'center', width: '100%', height: '100%', gap: '1rem', 
        backgroundColor: '#fff', color: '#fff', padding: '1rem', 
        overflow: 'hidden' }}
      >
        <TextField type="text" label="Enter Full Name" size='small' fullWidth
          variant='filled' value={name} onChange={(e) => setName(e.target.value)} 
        />
        <TextField type="text" label="Enter Title" size='small' fullWidth
          variant='filled' value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <TextField type="text" label="Phone" size='small' fullWidth
          variant='filled' value={phone} onChange={(e) => setPhone(e.target.value)}
        />
        <TextField type="text" label="Enter Social Links" size='small' fullWidth
          variant='filled' value={socials} onChange={(e) => 
            setSocials([e.target.value])}
        />
        <Button variant='contained' size='small' onClick={handleSocials}>Add</Button>
        <TextField label="Enter Summary" rows={2} multiline fullWidth
        variant='filled' value={summary} onChange={(e) => setSummary(e.target.value)} 
        />
        <Button variant='contained' size='small' type='submit'>Add</Button>
      </Box>
    </Stack>
  )
}
