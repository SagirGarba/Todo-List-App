import React from 'react'

function About() {
    return (
        <React.Fragment>
            <h1 style={headingStyle}>About</h1>
            <p>This is the TodoList app v1.0.0 It is part of Fasaha project team project under the supervision of Mr. Abubakar Salis Abdallah By Engr. Sagir Garba Isa .</p>
            <p>Special thanks goes to people that contributed to the well being of this project:</p>
            <ul>
                <li>Hayat Abuja</li>
                <li>Abdulrasheed Ibrahim</li>
                <li>Racheal Onoja</li>
                <li>Auwal MS</li>
                <li>Stan Esaduhwa</li>
            </ul>
            
            
        </React.Fragment>
    )
}

const headingStyle = {
    textAlign: 'center'
}

export default About;