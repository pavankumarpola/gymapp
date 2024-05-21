import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Equipment() {
    const [a, b]=useState();

    const Data = async () => {

        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/equipmentList',
            params: { limit: '10' },
            headers: {
                'X-RapidAPI-Key': '80da848427mshb04914766980085p1ec4a1jsn6c7167d0da5c',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            b(response.data);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect (()=>{
        Data()
    },[])




    return (
        <div>

            <div className='container-fluid'>
                <h3 className='ms-5 ps-5 mt-4' style={{color:'white'}}>EQUIPMENT LIST</h3>
                <div className='row mt-5 p-5 ms-5 w-25 m-auto' style={{border:"2px solid white "}}>

                    {
                       a&& a.map(data=>
                            <div>
                            
                                <div className='col-lg-12  fw-bolder'>

                                    <ul>
                                        <li  style={{fontSize:'20px', fontWeight:'900', color:'white'}}>{data.toUpperCase()}</li>
                                    </ul>

                                </div>
                    
                        
                            </div>
                        
                        )

                    }
                </div>
            </div>

        </div>
    )
}

export default Equipment