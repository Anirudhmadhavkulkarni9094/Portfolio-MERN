import React from 'react'
import '../Resources/StyleSheet/Login.css'
function Login() {
  return (
    <div className='form'>
        <form>
            <div className='form_comp'>
                <label>
                    Project Name
                </label>
                <input type='text'>
                </input>
            </div >
            <div className='form_comp'>
                <label>
                    Project Description
                </label>
                <input type='text'>
                </input>
            </div>
            <div className='form_comp'>
                <label>
                    Link
                </label>
                <input type='text'>
                </input>
            </div>
        </form>
    </div>
  )
}

export default Login