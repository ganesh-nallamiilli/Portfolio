import React,{useState} from 'react'

function Skills() {
  var count=0
  var changeHandle=()=>{
    count=count+1
    return count;
  }
  const emptyHandle=()=>{
    count=0
  }
  const [skills,setSkills] = useState([
    {skill:"ReactJS",rating:4},
    {skill:"NodeJS",rating:3},
    {skill:"ExpressJS",rating:4},
    {skill:"Mongodb",rating:3},
    {skill:"SQL",rating:3}
  ])
  return (
    <div className='container' id='skills'>
      <div className='row justify-content-center align-items-center'  style={{height:"100vh"}}>
        <div>
        <h1 className='m-0 p-0 text-light text-center'>Skills</h1>
        <div className='row g-2 mt-5'>
          {
            skills.map((items)=>(
              <div className='col-md-6 p-3 ' style={{cursor:"pointer"}}>
                <div className='d-flex justify-content-between p-3' style={{borderRadius:"8px",background:"#2C3333",boxShadow:"0 0 15px 2px #2C3132"}}>
                  <p className='m-0 p-0 text-light'>{items.skill}</p>
                  <div style={{color:"gold"}}>
                  {[1,1,1,1,1].map((i)=>(
                    
                    changeHandle()<=items.rating?<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill mx-1" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star mx-1" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
  </svg>
                     
                    ))}
                    {emptyHandle()}
                  </div>
                </div>
              </div>
            ))
          }
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;