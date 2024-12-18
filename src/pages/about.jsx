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
        </div>
    )
}