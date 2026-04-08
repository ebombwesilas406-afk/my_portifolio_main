// Import necessary components and modules
import React from 'react';
import { skillsData } from './path/to/database'; // Path to your database module

const Skills = () => {
    // Group skills by their category
    const groupedSkills = skillsData.reduce((acc, skill) => {
        if (!acc[skill.category]) {
            acc[skill.category] = [];
        }
        acc[skill.category].push(skill);
        return acc;
    }, {});

    return (
        <div className='skills-container'>
            {Object.entries(groupedSkills).map(([category, skills]) => (
                <div key={category} className='skills-category'>
                    <h3>{category}</h3>
                    <ul>
                        {skills.map(skill => (
                            <li key={skill.id} className='skill-item'>{skill.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Skills;