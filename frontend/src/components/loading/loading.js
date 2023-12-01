import React, { Fragment } from 'react'
import classes from "./loading.module.css"
const Loading = () => {
  return (
    <Fragment>
        <div className={classes.container}>
            <div className={classes.iconContainer}>
            <div className={classes.loadingIcon}></div>
            <h1 className={classes.loading}>Loading...</h1>
            </div>
        </div>
    </Fragment>
  )
}

export default Loading