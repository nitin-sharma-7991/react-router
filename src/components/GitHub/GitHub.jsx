import React, { useEffect,useState } from 'react'

function GitHub() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('https:api.github.com/users/nitin-sharma-7991')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data)

        })
    }, [])
  return (
    <>
    <div className='text-3xl bg-orange-400 text-center'>
        GitHub Followers : {data.followers }</div>
        <img src={data.avatar_url} alt="Git picture" width={300} />
    </>
  )
}

export default GitHub