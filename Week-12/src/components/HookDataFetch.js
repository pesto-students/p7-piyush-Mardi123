import React, {useState, useEffect} from 'react';

function HookDataFetch() {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({})
  const [id,setId] = useState(1)
  const [buttonid, setButtonid] = useState(1)
  
  function fetchdetails(){
     setButtonid(id)
  }

  useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    setPost(data)
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
},[buttonid]
  )

  return (
    <div>
    
    { /*
     <ul>
     {posts.map(post=>(<li key={post.id}>{post.title}</li>))}
     </ul> 
  */}
   <input type='text' value={id} onChange={(e)=>{setId(e.target.value)}} />
   <button onClick={fetchdetails}> Generate </button>
   <div>{post.title}</div>
    </div>
  );
}

export default HookDataFetch;
