import { useState } from "react"
import { FaStar } from 'react-icons/fa'
import './style.css'

export default function Star({ starLen }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return <>
        {
            [...Array(starLen)].map((_, index) => {
                const ind = index + 1;
                return <FaStar
                    style={{ cursor: "pointer" }}
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={() => setRating(ind)}
                    onMouseEnter={() => setHover(ind)}
                    onMouseLeave={() => setHover(0)}
                    size={40}
                />
            })
        }
    </>
}