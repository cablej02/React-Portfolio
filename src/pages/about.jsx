export default function About() {
    const skills = [
        "HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js", 
        "SQL", "Python", "C#", "Tableau", "Power BI", "Unity"
    ];

    return (
        <div className="container">
            <img src="/src/assets/myAvatar.png" alt="avatar" style={{ width: '100px', height: '100px' }} />
            <p>I am a full-stack developer, game developer, and business intelligence professional. My skills include: </p>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div className="skill-card" key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
            <br />
            <p style={{maxWidth:"970px"}}>Outside of work, I enjoy playing the drums and violin.  I began learning violin when I was 4 years old and continue to play recreationally.  I also am a huge dog lover.  I currently have one grumpy old man and will likely add more pups to the family soon.</p>
        </div>
    )
}