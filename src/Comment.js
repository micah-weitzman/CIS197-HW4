import React, { useState } from 'react'
import Reply from './Reply'
import Voter from './Voter'

const Comment = ({name, comment, depth }) => {
  const [children, setChilren] = useState([])
  const [reply, setReply] = useState(false)

  const appendChild = (child) => {
    setChilren(children => [...children, child])
  }

  if (depth === 0) {
    return null
  }

  return (
    <div style={divStyle}>
      <div style={{border: '2px solid white', padding: '10px', textAlign: 'left'}}>
        <Voter />
        <div>
          By: {name}
        </div>
        <div>
          Comment: { comment }
        </div>
        <div>
          { children.length === 0 ? null : children.map( ({name, comment}) =>
            <Comment name={name} comment={comment} depth={depth-1} />
          )}
        </div>
        { depth > 1 ? 
          <button style={{fontSize: '10px'}} onClick={() => setReply(!reply) }>Reply</button>
          : null }
      </div>
      { reply ? <Reply children={children} update={appendChild} /> : <></> }
    </div>
  )
}

const divStyle = { 
  // border: '2px solid white',
  borderRadius: '5px',
  padding: '30px' 
}

export default Comment