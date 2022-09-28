import React from 'react';
import Newsitem from './Newsitem';
import { useState,useEffect } from 'react';


export default function International() {

    const [userdata,setdata]=useState([]);

const getdata= async ()=>{
    await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=5b756322ee95471290a01ccbd9894eb1').then(res=> res.json()).then(data => setdata(data.articles)).catch(error => console.log(error))
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
                    <Newsitem title={curelement.title} description={curelement.description} imgurl={curelement.urlToImage} visit={curelement.url} />
                </div>
                   )
               })
           } 
       </div>
  </div>
      </div>
  );
}
