import { useState } from 'react'
import './ButtonStyle.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{
            border: '2px solid aqua',
            borderRadius: '20px',
            margin: '40px',
            padding: '20px'
        }}>
            <h2>Counter: {count}</h2>
            <button onClick={handleIncrease} className="btn">Increase</button>
            <button onClick={handleDecrease} className="btn">Decrease</button>
        </div>
    )
}