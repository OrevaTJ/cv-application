import React, {useState} from 'react'

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
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="School" 
                value={school} onChange={(e) =>
                 setSchool(e.target.value)} />
            <input type="text" placeholder="Degree"
                value={degree} onChange={(e) =>
                    setDegree(e.target.value)} />
            <input type="text" placeholder="Field of Study"
                value={fieldOfStudy} onChange={(e) =>
                    setFieldOfStudy(e.target.value)} />
            <input type="date" placeholder="Start Date"
                value={startDate} onChange={(e) =>
                    setStartDate(e.target.value)} />
            <input type="date" placeholder="End Date"
                value={endDate} onChange={(e) =>
                    setEndDate(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
        <div>
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
        </div>
    </div>
  )
}
