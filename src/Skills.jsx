import { Grid, Typography, Box } from '@mui/material';
import skills from './skills.js';
import React from 'react';


const Skills = () => {
    return (
        <Box
        sx={{
            
          width: '100%',
          margin:'0 auto',
          borderTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Typography variant="h1" align="center" gutterBottom>
          Skills
        </Typography>
        {skills.map((skillCategory) => (
          <Box key={skillCategory.category} mb={4} width="100%" textAlign="center">
            <Typography variant="h2" align="center" gutterBottom sx={{
                              borderBottom: 4,
                              borderRadius:1,
                              display:'inline-block',

            }}>
              {skillCategory.category}
            </Typography>
            <Grid container spacing={3} justifyContent="center" sx={{
            }}>
              {skillCategory.items.map((skill) => (
                <Grid item  key={skill.name}>
                  <Box display="flex" flexDirection="column" alignItems="center" className="badge" sx={{
                    padding:3,
                    margin:2,
                  }}>
                    <img
                      src={`/logos/${skill.logo}`}
                      alt={skill.name}
                      style={{ width: '75px', height: '75px', marginBottom: '10px' }}
                    />
                    <Typography variant="body1" sx={{
                        fontSize:"16px"
                    }}
                    align="center">
                      {skill.name}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
    );
  };
  


export default Skills;