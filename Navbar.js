import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'



function Navbar({ part }) {


    
    const pavan = (e) => {
        part(e.target.value)
    }




    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  p-3" style={{ backgroundColor: "white" }}>
                <div class="container-fluid">
               
                    <img src='https://cdn.pixabay.com/photo/2024/01/10/05/32/ai-generated-8498914_640.jpg' style={{width:'6%'}}></img>

                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">


                        <li class="nav-item" style={{paddingLeft:'50px'}}>
                                <Link to='/' class="nav-link active ms-3"  >BODYPARTS</Link>
                            </li>

                            <li class="nav-item" style={{paddingLeft:'50px'}}>
                                <Link to='/b-list' class="nav-link active ms-3" >BODYPARTS-LISTS</Link>
                            </li>

                            <li class="nav-item" style={{paddingLeft:'50px'}}>
                                <Link to='/e-list' class="nav-link active ms-3" >EQUIPMENT-LISTS</Link>
                            </li>


                            <li class="nav-item" style={{paddingLeft:'50px'}}>
                                <Link to='/exer' class="nav-link active ms-3" >EXERCISES</Link>
                            </li>
                            <li class="nav-item" style={{paddingLeft:'50px'}}>
                            <input class="form-control me-2" type="search" placeholder="Search Part" aria-label="Search" onChange={pavan} />
                            </li>
                           
                            <li class="nav-item" style={{paddingLeft:'50px'}}>
                                <Link to='/login' class="nav-link active ms-3" ><button className='button'>SignUp</button></Link>
                            </li>



                        </ul>


                        {/* <form class="d-flex">
                            
                            <input class="form-control me-2" type="search" placeholder="Search Part" aria-label="Search" onChange={pavan} />
                            
                        </form> */}
                        

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar