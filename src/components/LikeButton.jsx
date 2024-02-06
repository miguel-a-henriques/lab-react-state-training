import { useState } from 'react'

function LikeButton (props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>LikeButton</h1>
            <button onClick={()=>setCount(count +1)}>{count}Likes</button>
        </div>
    )
}

export default LikeButton