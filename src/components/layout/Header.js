import React from 'react'

export default function Header() {
    return (
        <header style={headerStyle}>
            <h1>To-Do devOps!</h1>
        </header>
    )
}

const headerStyle = {
    background: '#0E3386',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}