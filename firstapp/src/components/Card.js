import React from 'react'
import './Card.css'

export default function Card({user , address, email , website}) {
    return (
        
     <div className="wrapper">    
<label for="slider"></label>


	<div className="top-icons">
		<i className="fas fa-long-arrow-alt-left"></i>
		<i className="fas fa-ellipsis-v"></i>
		<i className="far fa-heart"></i>
	</div>
	
	<div className="profile">
		<div className="check"><i className="fas fa-check"></i></div>
		<h3 className="name">{user}</h3> 
        <p>{address}</p>
		<p className="title">{email}</p>
		<p className="description">{website}</p>
		<button type="button" className="btn">Visit my website ! </button>
	</div>
	 </div>  

       
    )
}
