5. **Create About.js:**
`powershell
Set-Content About.js -Value @"
import React from 'react';

const About = () => {
return (
 <div>
   <h1>About Us</h1>
   <p>This page tells you more about us.</p>
 </div>
);
};

export default About;
