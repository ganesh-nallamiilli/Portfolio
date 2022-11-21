import React,{useState} from 'react'

function Team() {
  return (
    <div className='container' id='team'>
       <div className='row justify-content-center align-items-center'  style={{height:"91vh"}}>
            <div>
                <h1 className='m-0 p-0 text-light mb-5 text-center'>Team Details</h1>
            <div className='row text-center'>
            
                
                    <Card />
                
            
        </div>
            </div>
       </div>
    </div>
  )
}

function Card(){
    const [name,setName] = useState(["Ganesh","Haneef","Pavaneswar"])
    return(
       <>
       
            {name.map((item)=>(
                <div className='col-md-4 my-3 m-md-0'>
                    <div className='card'>
                        <div className='card-header'>
                            <p className='m-0 p-0'>{item}</p>
                        </div>
                        <div className='card-footer'>
                            <p className='m-0 p-0'>Link</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Team;