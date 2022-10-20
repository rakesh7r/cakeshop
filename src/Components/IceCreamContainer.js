import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "../redux/IceCream/iceCreamActions"

function IceCreamContainer() {
    const numberOfIcecreams = useSelector(
        (state) => state.iceCream.numberOfIcecreams
    )
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of IceCream - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy Iceream</button>
        </div>
    )
}

export default IceCreamContainer
