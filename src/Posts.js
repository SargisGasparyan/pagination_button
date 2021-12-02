import React from 'react'

const Posts = ({posts,loading})=>{
    if (loading){
        return <h2>Loading ...</h2>
    }
    return (
        <div>
        <ul>
            {posts.map(post=>(
                <div style={{border:"1px solid gray",margin:"10px"}}>
                <li key={post.id}>
                    {post.title}
                </li>
                </div>
            ))}
        </ul>
        </div>
    )
}
export default Posts