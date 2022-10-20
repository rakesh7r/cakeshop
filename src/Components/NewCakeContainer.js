import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux/cake/cakeActions"

function NewCakeContainer() {
    const [number, setNumber] = useState(1)
    const dispatch = useDispatch()
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)

    return (
        <div>
            <h2>number of Cakes - {numberOfCakes}</h2>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
            />
            <button onClick={() => dispatch(buyCake(number))}>
                Buy {number} Cakes
            </button>
        </div>
    )
}

export default NewCakeContainer
