import React, { Fragment } from 'react'
import Modal from '../Modal'

import history from '../../history'

const StreamDelete = () => {
  const actions = (
    <Fragment>
      <button className="ui negative button">Delete</button>
      <button className="ui button">Cancel</button>
    </Fragment>
  )
  return (
    <div>
      Stream Delete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delelte this stream ?"
        actions={actions}
        onDismiss={() => history.push('/')}
      />
    </div>
  )
}

export default StreamDelete
