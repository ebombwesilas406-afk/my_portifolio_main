import React from 'react';
import { useEffect, useState } from 'react';

const Skills = () => {
  const [skills, setSkills] = useState({});

  useEffect(() => {
    // Fetch skills from the database
    const fetchSkills = async () => {
      try {
        const response = await fetch('API_ENDPOINT_FOR_SKILLS'); // Replace with your actual API endpoint
        const data = await response.json();
        groupSkillsByCategory(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    const groupSkillsByCategory = (data) => {
      const grouped = {};
      data.forEach((skill) => {
        const category = skill.category;
        if (!grouped[category]) {
          grouped[category] = [];
        }
        grouped[category].push(skill);
      });
      setSkills(grouped);
    };

    fetchSkills();
  }, []);

  return (
    <div>
      {Object.keys(skills).map((category) => (
        <div key={category}>
          <h2>{category}</h2>
          <div>
            {skills[category].map((skill) => (
              <div key={skill.id}>{skill.name}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;