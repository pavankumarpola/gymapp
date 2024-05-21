import React, { useEffect, useState } from 'react';
import axios from 'axios'

function App2({ h, n }) {

    const [a, b] = useState();


    const Data = async () => {
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${h}`,
            params: { limit: `${n}` },
            headers: {
                'X-RapidAPI-Key': '80da848427mshb04914766980085p1ec4a1jsn6c7167d0da5c',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };


        try {
            const response = await axios.request(options);
            console.log(response.data);
            b(response.data)

        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        Data()
    }, [h, n])









    return (
        <div>

            
            <div className='container-fluid'>
                
                <div className='row ms-5'>
                <h2 className='text-center  fw-bold pb-5 pt-3' style={{ color: "white" }}>BODYPARTS</h2>
                    {
                        a && a.map(data =>
                            <div className='col-lg-4  '>

                            <div class="card mt-4" style={{ width: "25rem",  height:'25rem'}} id='main-body'>
                                <div class="card-body pt-4 pb-4 d-flex justify-content-between align-items-center" >
                        
                                    
                                    <div className="col-6" >
                                        <img src={data.gifUrl} alt={data.name} style={{ width: "100%", height: "100%" }} />
                                    </div>
                        
                                    <div className="col-6">
                                        <h3 class="card-title">BODYPART: {data.bodyPart.toUpperCase()}</h3>
                                        <h6 className='card-text'>TARGET : {data.target.toUpperCase()}</h6>
                                        <h5 className='mt-3 card-text'>INSTRUCTIONS Name : {data.name}</h5>
                                        <h5 className='mt-3 mb-3 card-text'>INSTRUCTIONS</h5>
                                        <p>1. {data.instructions[0]}</p>
                                       
                                    </div>
                                    </div>
                            </div>
                        
                        </div>


                        )
                    }

                </div>
            </div>





        </div>
    )
}

export default App2