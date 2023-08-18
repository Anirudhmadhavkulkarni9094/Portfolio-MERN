import React from 'react'

function AddProject() {
  return (
    <div className='form'>
        <form>
            <div className='form_comp'>
                <label>
                    Email / userName
                </label>
                <input type='text'>
                </input>
            </div >
            <div className='form_comp'>
                <label>
                    Password
                </label>
                <input type='password'>
                </input>
            </div>
        </form>
    </div>
  )
}

export default AddProject