import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../redux/asyncActions/asyncActions"

function FetchComponent() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.asyncReducer.users)
    const loading = useSelector((state) => state.asyncReducer.loading)
    return (
        <div>
            <button onClick={() => dispatch(fetchUsers())}>Fetch users</button>
            {loading ? (
                <h2>Loading...</h2>
            ) : users ? (
                users.map((user) => (
                    <h2 key={user.username}>{user.username}</h2>
                ))
            ) : null}
        </div>
    )
}
export default FetchComponent
