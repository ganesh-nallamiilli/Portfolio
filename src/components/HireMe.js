import React from 'react'

function HireMe() {
  return (
    <div className='container' id='hire_me'>
        <div className='row align-items-center justify-content-center' style={{height:"100vh"}}>
            <div>
                <h1 className='m-0 p-0 mb-5 text-center text-light'>Contact ME</h1>
               <div className='row align-items-center'>
                    <div className='col-5'>
                        <div className='row text-center'>
                            <SocialMediaLinks />
                        </div>
                    </div>
                    <div className='col-7'>
                        <Form />
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

function SocialMediaLinks(){
    return(
        <>
            <div className='col-6'>
                <i class="bi bi-envelope-heart-fill"  id='envelop_'></i>
            </div>
            <div className='col-6'>
                <i class="bi bi-linkedin"  id='linkedin_'></i>
            </div>
            <div className='col-6'>
                <i class="bi bi-instagram"  id='instagram_'></i>
            </div>
            <div className='col-6'>
                <i class="bi bi-github"  id='github_'></i>
            </div>
        
        </>
    )
}

function Form(){
    return(
        <div className='mx-5'>
            <form class="row g-3 text-light">
  <div class="col-md-6">
    <label  class="form-label">First Name</label>
    <input type="text" class="form-control" placeholder='Harry'/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Last Name</label>
    <input type="text" class="form-control" placeholder='Potter' />
  </div>
  <div class="col-12">
    <label class="form-label">Email</label>
    <input type="email" class="form-control" placeholder="john123@gmail.com"/>
  </div>
  
  <div class="form-floating text-secondary">
  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}}></textarea>
  <label for="floatingTextarea2">Comments</label>
</div>
  
  <div class="col-12 text-center">
    <button type="submit" class="btn btn-outline-light ">Submit</button>
  </div>
</form>
        </div>
    )
}

export default HireMe;