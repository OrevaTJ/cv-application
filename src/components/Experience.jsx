import React, {useState} from 'react'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Organization" 
                value={organization} 
                onChange={e => setOrganization(e.target.value)} />
            <input type="text" placeholder="Position" 
                value={position} onChange={e => setPosition(e.target.value)}/>
            <input type="text" placeholder="Tasks" 
                value={task} onChange={e => setTasks(e.target.value)}/>
            <button onClick={handleTasks}>Add</button>
            <input type="date" placeholder="Start Date" 
                value={startDate} onChange={e => setStartDate(e.target.value)}/>
            <input type="date" placeholder="End Date" 
                value={endDate} onChange={e => setEndDate(e.target.value)}/>
            <button type='submit'>Add Experience</button>
        </form>
        <div>
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
            )
            )}
        </div>
    </div>
  )
}
