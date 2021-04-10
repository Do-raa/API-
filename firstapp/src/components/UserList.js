import React , {useEffect}from 'react' ; 
import axios from 'axios' ; 
import Card from './Card';

export default function UserList({users, setUsers}) { 

  
  useEffect(()=>{  
    axios.get('https://jsonplaceholder.typicode.com/users') 
        .then(response=>{ 
        setUsers(response.data)
        }) 
       .catch(error =>{ 
          setUsers(error) ; 
        })
  },[])
 
 const postList = {users} ? (users.map(user=>{ 
                             return ( 
                               <div className='post card' key ={user.id}> 
                               <Card user={user.name} address={user.address.street} email={user.email} 
                               website={user.website}/>
                               </div>
                             )})) : (<div className='center'>No users yet ! </div>)
 


       return (
        <div> 
        {postList}
   
    
        </div>
    )

}
