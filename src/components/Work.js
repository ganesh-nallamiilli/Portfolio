import React,{useState} from 'react'
import image from '../images/myhomedel.png'
function Work() {
    const [lp,setLp] = useState([1,1,1])
  return (
    <div className='container text-light ' id='work'>
        <div className='text-center  row align-items-center justify-content-center'  style={{height:"100vh"}}>
            <div>
            <h1 className='text-center text-secondary'>{"</>"}</h1>
        <h1 className='text-center mb-5'>Projects I have done</h1>
        <div className='row'>
            {
            lp.map((item)=>
                (

                    <div className='col-md-4'>
                    <img className='img-fluid images_ my-md-0 my-3' src={image} style={{minWidth:"80%",maxWidth:"80%"}}  />
                </div>
                    )
            )}
        </div>
            </div>
        </div>
    </div>
  )
}

export default Work;