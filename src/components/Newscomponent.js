import React from 'react';
import { useState,useEffect } from 'react';


export default function Newscomponent() {

    const [userdata,setdata]=useState([]);

const getdata= async ()=>{
    await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=5b756322ee95471290a01ccbd9894eb1`).then(res=> res.json()).then(data => setdata(data.articles))
}

useEffect(()=>{
getdata();
},[]);

  return (
      <div>
  <div className='container my-2'>
       <div className="row">
            {
               userdata.map((curelement,pos)=>{
                   return (
                    <div className="col-md-4" key={pos}>
                        <div className='my-3'>
      <div className="card" style={{width:"18rem"}}>
  <img src={curelement.urlToImage} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{curelement.title}</h5>
    <p className="card-text">{curelement.description}  content.</p>
    <a href={curelement.url} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>
                </div>
                   )
               })
           } 
       </div>
  </div>
      </div>
  );
}
