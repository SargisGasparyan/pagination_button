import React from 'react'

const Pagination = ({postPerPage,totalPosts,paginate})=>{
    const pageNumbers=[]

    for (let i =1;i<=Math.ceil(totalPosts/postPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <div style={{display:"flex"}}>
            {pageNumbers.map(number=>(
                <li onClick={()=>paginate(number)}>{number}</li>
            ))}
        </div>
    )
}

export default Pagination