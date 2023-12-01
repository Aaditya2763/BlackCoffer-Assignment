import React from 'react'
import classes from "./error.module.css"
const Error = ({retryHandler}) => {
  return (
    <div className={classes.errorContainer}>
        <h1 >Something went wrong....</h1>
        <button onClick={retryHandler} >Retry</button>
    </div>


  )
}

export default Error