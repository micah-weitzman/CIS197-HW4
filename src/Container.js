import React, { useState } from 'react'
import Comment from './Comment'
import Reply from './Reply'

const Container = () => {
  const [children, setChilren] = useState([])

  const appendChild = (child) => {
    setChilren([...children, child])
  }

  return (
    <div>
      <div style={newPostStyle}>
        <h3>New Post</h3>
        <Reply children={children} update={appendChild} />
      </div>
      <div style={containerStyle}>
        {children.length === 0 ? null : children.map( ({name, comment}) =>
          <Comment name={name} comment={comment} depth={3}/>
        )}
      </div>
    </div>
  )
}
const containerStyle = {
  padding: '30px'
}
const newPostStyle = {
  border: '2px solid white',
  borderRadius: '5px',
  padding: '30px',
  marginTop: '40px',
}

export default Container