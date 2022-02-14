import React, { useState } from 'react'
import Reply from './Reply'
import Voter from './Voter'

const divStyle = {
  borderRadius: '5px',
  padding: '30px',
}

const Comment = ({ name, comment, depth }) => {
  const [children, setChilren] = useState([])
  const [reply, setReply] = useState(false)

  const appendChild = child => {
    setChilren(old => [...old, child])
  }

  if (depth === 0) {
    return null
  }

  return (
    <div style={divStyle}>
      <div
        style={{
          border: '2px solid white',
          padding: '10px',
          textAlign: 'left',
        }}
      >
        <Voter />
        <div>
          <b>By: </b>
          { name }
        </div>
        <div>
          <b>Comment: </b>
          { comment }
        </div>
        <div>
          { children.length === 0
            ? null
            : children.map(({ name: c_name, comment: c_comment }) => <Comment name={c_name} comment={c_comment} depth={depth - 1} />)}
        </div>
        { depth > 1
          ? <button type="button" style={{ fontSize: '10px' }} onClick={() => setReply(!reply)}> Reply </button>
          : null }
      </div>
      { reply ? <Reply update={appendChild} /> : <></> }
    </div>
  )
}

export default Comment
