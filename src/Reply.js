import React, { useState } from 'react'

const Reply = ({update}) => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const sendUp = () => {
    update({name, comment})
  }

  return (
    <div style={{
      alignItems: 'left',
    border: '2px solid white',
    borderRadius: '5px',
    padding: '10px'}}>
      <form>
        <div style={rightStyle}>
          <label>
            Name: 
          </label>
            <input type='text' size={50} value={ name } 
            onChange={ event => {
              setName(event.target.value) }} style={{width: '350px'
            }}
            required />
        </div>
        <div style={rightStyle}>
          <label>
            Comment:
          </label>

            <textarea type='text' rows={3} cols={50} value={ comment } 
              onChange={ 
                event => setComment(event.target.value) } 
              style={{width: '350px'}}
              required
            />
        </div>
        
        <button type='submit' onClick={
            event => {
              if (name !== '' && comment !== '') {
                event.preventDefault()
                sendUp()
                setName('')
                setComment('')
              }
            }
          }>
             Submit 
        </button>
      </form>

    </div>
  )
}


const rightStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',  
}

export default Reply