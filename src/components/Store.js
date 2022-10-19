import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from "../state/index"

const Store = () => {
    const dispatch = useDispatch()
    const action=bindActionCreators(actionCreators,dispatch)
    const balance = useSelector(state => state.amount)
    return (
        <div>
            <h2>Deposit/Widraw Money</h2>
            {/* USING usedispatch */}
            {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
            update balance
            <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
            {/* USING bindActionCreators */}
            <button className='btn btn-primary mx-2' onClick={()=>{action.withdrawMoney(100)}}>-</button>
            update balance {balance}
            <button className='btn btn-primary mx-2' onClick={()=>{action.depositMoney(100)}}>+</button>
        </div>
    )
}

export default Store
