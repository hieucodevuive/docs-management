export const templates = [
  {
    id: "blank", 
    lable: "Blank document", 
    imageUrl: "/images/blank-document.svg"
  },
  {
    id: "software-proposal", 
    lable: "Software development proposal", 
    imageUrl: "/images/software-proposal.svg",
    initialConten: `
      <h1>Software Development Proposal</h1>
      
      <h2>1. Introduction</h2>
      <p>This proposal outlines the development of a software solution designed to meet the specific needs of <strong>[Client Name]</strong>. The objective is to build a modern, scalable, and efficient system using best-in-class technologies.</p>
      
      <h2>2. Objectives</h2>
      <ul>
        <li>Deliver a scalable and robust solution</li>
        <li>Automate and streamline operations</li>
        <li>Ensure security and reliability</li>
        <li>Provide an intuitive and user-friendly interface</li>
      </ul>
      
      <h2>3. Scope of Work</h2>
      <p>The software project will include:</p>
      <ul>
        <li>Requirement gathering</li>
        <li>UI/UX design</li>
        <li>Frontend and backend development</li>
        <li>Testing and quality assurance</li>
        <li>Deployment and support</li>
      </ul>
      
      <h2>4. Proposed Solution</h2>
      <p>The proposed stack includes:</p>
      <ul>
        <li><strong>Frontend:</strong> React, Next.js</li>
        <li><strong>Backend:</strong> Node.js, Express</li>
        <li><strong>Database:</strong> PostgreSQL</li>
        <li><strong>Cloud Hosting:</strong> AWS / Vercel</li>
      </ul>
      
      <h2>5. Timeline</h2>
      <table>
        <thead>
          <tr><th>Phase</th><th>Duration</th><th>Dates</th></tr>
        </thead>
        <tbody>
          <tr><td>Planning & Analysis</td><td>1 week</td><td>[Start - End]</td></tr>
          <tr><td>Design</td><td>2 weeks</td><td>[Start - End]</td></tr>
          <tr><td>Development</td><td>4-6 weeks</td><td>[Start - End]</td></tr>
          <tr><td>Testing & QA</td><td>1 week</td><td>[Start - End]</td></tr>
          <tr><td>Deployment</td><td>1 week</td><td>[Start - End]</td></tr>
        </tbody>
      </table>
      
      <h2>6. Cost Estimate</h2>
      <p>The estimated cost breakdown is as follows:</p>
      <ul>
        <li>Design & Development: $XX,XXX</li>
        <li>Testing & QA: $X,XXX</li>
        <li>Deployment & Maintenance: $X,XXX</li>
        <li><strong>Total: $XX,XXX</strong></li>
      </ul>
      
      <h2>7. Contact</h2>
      <p>For questions or more details, contact:</p>
      <p><strong>[Your Name]</strong><br/>[Your Role]<br/>[Email Address]<br/>[Phone Number]</p>
    `
  },
  {
    id: "project-proposal", 
    lable: "Project development proposal", 
    imageUrl: "/images/project-proposal.svg",
    initialConten: `
    <h1>Project Development Proposal</h1>
    
    <h2>1. Executive Summary</h2>
    <p>This proposal presents a detailed plan for the successful execution of the <strong>[Project Name]</strong>. It outlines the objectives, approach, timeline, and resource requirements to ensure project success.</p>
  
    <h2>2. Project Objectives</h2>
    <ul>
      <li>Define and achieve clear project goals</li>
      <li>Deliver within scope, time, and budget</li>
      <li>Engage stakeholders throughout the process</li>
      <li>Ensure long-term sustainability and impact</li>
    </ul>
  
    <h2>3. Proposed Approach</h2>
    <p>The project will be executed in the following phases:</p>
    <ol>
      <li>Initiation & Planning</li>
      <li>Requirements Gathering</li>
      <li>Design & Prototyping</li>
      <li>Development & Implementation</li>
      <li>Testing & Evaluation</li>
      <li>Launch & Support</li>
    </ol>
  
    <h2>4. Deliverables</h2>
    <ul>
      <li>Project documentation</li>
      <li>Design mockups</li>
      <li>Working software/product</li>
      <li>Testing reports</li>
      <li>User guides and training materials</li>
    </ul>
  
    <h2>5. Timeline</h2>
    <table>
      <thead>
        <tr><th>Phase</th><th>Duration</th><th>Expected Dates</th></tr>
      </thead>
      <tbody>
        <tr><td>Planning</td><td>1 week</td><td>[Start - End]</td></tr>
        <tr><td>Design</td><td>2 weeks</td><td>[Start - End]</td></tr>
        <tr><td>Development</td><td>4 weeks</td><td>[Start - End]</td></tr>
        <tr><td>Testing</td><td>1 week</td><td>[Start - End]</td></tr>
        <tr><td>Deployment</td><td>1 week</td><td>[Start - End]</td></tr>
      </tbody>
    </table>
  
    <h2>6. Budget Estimate</h2>
    <ul>
      <li>Planning & Analysis: $X,XXX</li>
      <li>Design & Prototyping: $X,XXX</li>
      <li>Development: $XX,XXX</li>
      <li>Testing & Deployment: $X,XXX</li>
      <li><strong>Total Estimated Cost: $XX,XXX</strong></li>
    </ul>
  
    <h2>7. Team & Responsibilities</h2>
    <ul>
      <li><strong>Project Manager:</strong> [Name]</li>
      <li><strong>Lead Developer:</strong> [Name]</li>
      <li><strong>UI/UX Designer:</strong> [Name]</li>
      <li><strong>QA Engineer:</strong> [Name]</li>
    </ul>
  
    <h2>8. Conclusion</h2>
    <p>We are confident in our ability to deliver a successful outcome for the <strong>[Project Name]</strong>. We look forward to collaborating with you on this exciting opportunity.</p>
  
    <h2>9. Contact</h2>
    <p><strong>[Your Name]</strong><br/>[Your Role]<br/>[Email Address]<br/>[Phone Number]</p>
  `
  },
  {
    id: "business-letter", 
    lable: "Business letter", 
    imageUrl: "/images/business-letter.svg",
    initialConten: `
  <p>[Your Name]</p>
  <p>[Your Position]</p>
  <p>[Company Name]</p>
  <p>[Company Address]</p>
  <br/>
  <p>[Date]</p>
  <br/>
  <p>[Recipient Name]</p>
  <p>[Recipient Position]</p>
  <p>[Recipient Company]</p>
  <p>[Recipient Address]</p>
  <br/>
  <p>Dear [Recipient Name],</p>
  <br/>
  <p>
    I am writing to [state the purpose of the letter—e.g., introduce a proposal, request a meeting, follow up on a discussion, etc.]. 
    We at [Company Name] are committed to [briefly mention your core value or reason for writing].
  </p>

  <p>
    [Include key details relevant to the letter: background information, specific request or offer, benefits to the recipient, etc.]
  </p>

  <p>
    We would appreciate the opportunity to [next steps or call to action]. Please feel free to contact me at [your phone number] or via email at [your email address] if you have any questions or require further information.
  </p>

  <p>
    Thank you for your time and consideration.
  </p>

  <br/>
  <p>Sincerely,</p>
  <p>[Your Name]</p>
  <p>[Your Title]</p>
  <p>[Company Name]</p>
`
  },
  {
    id: "Resume", 
    lable: "Resume", 
    imageUrl: "/images/resume.svg",
    initialConten: `
  <h1>[Your Full Name]</h1>
  <p><strong>Email:</strong> [your.email@example.com] | <strong>Phone:</strong> [Your Phone Number] | <strong>Location:</strong> [City, Country]</p>
  <p><strong>LinkedIn:</strong> [linkedin.com/in/yourprofile] | <strong>Portfolio:</strong> [yourwebsite.com]</p>

  <hr/>

  <h2>Professional Summary</h2>
  <p>
    [A brief 2-3 sentence summary highlighting your experience, skills, and what you're looking for. Example: 
    "Detail-oriented software developer with 3+ years of experience in building scalable web applications. 
    Skilled in JavaScript, React, and Node.js. Seeking to leverage my expertise in a growth-focused tech company."]
  </p>

  <h2>Skills</h2>
  <ul>
    <li>Programming Languages: JavaScript, Python, Java</li>
    <li>Frameworks: React, Node.js, Express</li>
    <li>Databases: MongoDB, PostgreSQL</li>
    <li>Tools: Git, Docker, Figma</li>
    <li>Soft Skills: Communication, Problem-solving, Teamwork</li>
  </ul>

  <h2>Experience</h2>
  <h3>[Job Title] – [Company Name]</h3>
  <p><em>[Start Date] – [End Date]</em></p>
  <ul>
    <li>[Responsibility or achievement 1]</li>
    <li>[Responsibility or achievement 2]</li>
    <li>[Responsibility or achievement 3]</li>
  </ul>

  <h3>[Previous Job Title] – [Previous Company]</h3>
  <p><em>[Start Date] – [End Date]</em></p>
  <ul>
    <li>[Responsibility or achievement 1]</li>
    <li>[Responsibility or achievement 2]</li>
  </ul>

  <h2>Education</h2>
  <p><strong>[Degree]</strong> – [University Name]</p>
  <p><em>[Graduation Year]</em></p>

  <h2>Certifications</h2>
  <ul>
    <li>[Certification Name] – [Issuing Organization], [Year]</li>
    <li>[Certification Name] – [Issuing Organization], [Year]</li>
  </ul>

  <h2>Languages</h2>
  <ul>
    <li>English – Fluent</li>
    <li>[Other Language] – [Proficiency Level]</li>
  </ul>
`

  },
  {
    id: "cover-letter", 
    lable: "Cover letter", 
    imageUrl: "/images/cover-letter.svg",
    initialConten: `
  <p>[Your Name]</p>
  <p>[Your Address]</p>
  <p>[City, State, ZIP Code]</p>
  <p>[Email Address] | [Phone Number]</p>
  <br/>
  <p>[Date]</p>
  <br/>
  <p>[Hiring Manager’s Name]</p>
  <p>[Company Name]</p>
  <p>[Company Address]</p>
  <br/>
  <p>Dear [Hiring Manager’s Name],</p>
  <br/>
  <p>
    I am writing to express my interest in the <strong>[Job Title]</strong> position at <strong>[Company Name]</strong>, as advertised on [Job Board/Company Website]. With my background in [Your Field or Area of Expertise] and a strong passion for [relevant interest or value], I am confident in my ability to contribute significantly to your team.
  </p>

  <p>
    In my previous role at <strong>[Previous Company]</strong>, I [mention a key achievement or responsibility that relates to the new role]. I am skilled in [mention relevant skills] and have consistently demonstrated the ability to [positive trait or result achieved].
  </p>

  <p>
    What draws me to <strong>[Company Name]</strong> is [mention something specific about the company’s mission, values, or projects]. I admire your commitment to [something they do], and I am excited about the opportunity to be a part of that.
  </p>

  <p>
    I have attached my resume for your review. I would welcome the chance to discuss how my background, skills, and certifications align with your team’s needs in more detail.
  </p>

  <p>
    Thank you for your time and consideration. I look forward to the possibility of contributing to <strong>[Company Name]</strong> and would be happy to provide any additional information you may need.
  </p>

  <br/>
  <p>Sincerely,</p>
  <p>[Your Name]</p>
`

  },
  {
    id: "letter", 
    lable: "Letter", 
    imageUrl: "/images/letter.svg",
    initialConten: `
  <p>[Your Name]</p>
  <p>[Your Address]</p>
  <p>[City, State, ZIP Code]</p>
  <p>[Email Address] | [Phone Number]</p>
  <br/>
  <p>[Date]</p>
  <br/>
  <p>[Recipient Name]</p>
  <p>[Recipient Address]</p>
  <br/>
  <p>Dear [Recipient Name],</p>
  <br/>
  <p>
    I hope this letter finds you well. I am writing to you regarding [state the reason or subject of the letter]. 
    I wanted to take a moment to express my thoughts and share [news, information, concerns, or appreciation, etc.].
  </p>

  <p>
    [Add more details or context about the topic, share updates, make a request, express gratitude, etc.]
  </p>

  <p>
    Please feel free to reach out to me at your convenience. I would be happy to [discuss further, offer assistance, reconnect, etc.].
  </p>

  <p>
    Thank you for your time and attention. I look forward to hearing from you soon.
  </p>

  <br/>
  <p>Sincerely,</p>
  <p>[Your Name]</p>
`

  },
  
]
