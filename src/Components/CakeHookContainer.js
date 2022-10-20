import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from "../redux/cake/cakeActions"

function CakeHookContainer() {
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Cakes : {numberOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>buy Cake</button>
        </div>
    )
}

export default CakeHookContainer
