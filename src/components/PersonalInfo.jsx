import React, {useState} from 'react';
import { Details } from './Details';

export const PersonalInfo = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '', setTitle: '', socialLinks: [], setSummary: ''
  })
  const [name, setName] = useState('')
  const [title, setTitle] = useState('')
  const [socials, setSocials] = useState('')
  const [socialHandles, setSocialHandles] = useState([])
  const [summary, setSummary] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersonalInfo({
      fullName: name, 
      setTitle: title, 
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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Full Name" 
          value={name} onChange={(e) => setName(e.target.value)} 
        />
        <input type="text" placeholder="Enter Title" 
          value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" placeholder="Enter Social Links" 
          value={socials} onChange={(e) => 
            setSocials([e.target.value])}
        />
        <button onClick={handleSocials}>Add</button>
        <textarea placeholder="Enter Summary" value={summary}
          onChange={(e) => setSummary(e.target.value)} 
        />
        <button type='submit'>Add</button>
      </form>
      <div>
        <Details info={personalInfo}/>
      </div>
    </div>
  )
}
