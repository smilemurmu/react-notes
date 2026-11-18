import React from 'react'
import { data } from '../App'

function ChildE() {
  return (
    <data.Consumer>
        {
            (name)=>{
                return(
                    <div>My name is {name}</div>
                )
            }
        }
    </data.Consumer>
  )
}

export default ChildE