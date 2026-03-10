import React from 'react'

const projects = () => {
  return (
    <main className='font-serif'>
    {/* <div  className=''>
      <h1>Project</h1>
      <p>In this semesters, i been working on some projects and here are my best ones so far.</p>
    </div> */}
    <div className='bg-[#A8E3F0]'></div>

    <div className='absolute left-10 top-20 w-150'>
      <h1><b>Funding System Simulation</b></h1>
      <p>
        - Selected Microsoft Azure as the proposed cloud infrastructure and defined the technical roadmap, system scope, and implementation phases.<br></br>
        - Built structured project plans and workflow tracking models in Excel to manage deliverables and timelines.<br></br>
        - Partnered with QA to evaluate process efficiency, risk points, and outcome alignment, ensuring the proposed solution supported measurable business objectives. <br></br>
      </p>
    </div>

    <div className='absolute right-20 bottom-20 w-150'>
      <h1><b>Database System Design - Restaurant Stimulation</b></h1>
      <p>
      - Designed and developed a relational database system to solve a real-world business problem.<br></br>
      - Created an Entity-Relationship (ER) diagram and defined tables with appropriate primary and foreign keys. <br></br>
      - Applied normalization techniques to ensure data integrity and reduce redundancy. <br></br>
      - Implemented the database using SQL and wrote complex queries for data retrieval and analysis. <br></br>
      </p>
    </div>


    </main>
  )
}

export default projects