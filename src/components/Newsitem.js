import React from 'react'

export default function Newsitem(props) {
  return (
    <div className='my-3'>
      <div className="card" style={{width:"18rem"}}>
  <img src={props.imgurl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}  content.</p>
    <a href={props.visit} className="btn btn-sm btn-primary">Read More</a>
  </div>
</div>
    </div>
  );
}
