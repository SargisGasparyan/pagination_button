import React from 'react'

const Posts = ({posts,loading})=>{
    if (loading){
        return <h2>Loading ...</h2>
    }
    return (
        <ul>
            {posts.map(post=>(
                <div style={{border:"1px solid gray",width:"300px",margin:"10px"}}>
                <li key={post.id}>
                    {post.title}
                </li>
                </div>
            ))}
        </ul>
    )
}
export default Posts