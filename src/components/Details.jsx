import React from 'react'

export const Details = (props) => {
    const {fullName, setTitle, socialLinks, setSummary} = props.info
  return (
    <div>
        <h1>{fullName}</h1>
        <h2>{setTitle}</h2>
        <ul>
            {socialLinks.map((social, index) => {
                return <li key={index}>{social}</li>
            })}
        </ul>
        <p>{setSummary}</p>
    </div>
  )
}
