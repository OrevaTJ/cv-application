import React from 'react'

export const Details = (props) => {
    const {fullName, setTitle, setPhone, socialLinks, setSummary} = props.info
  return (
    <div>
        <h1>{fullName}</h1>
        <h2>{setTitle}</h2>
        <h3>{setPhone}</h3>
        <ul>
            {socialLinks.map((social) => {
              const index = Math.random()
                return <li key={index}>{social}</li>
            })}
        </ul>
        <p>{setSummary}</p>
    </div>
  )
}
