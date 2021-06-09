import React from 'react'
import {Link} from 'react-router-dom'

export default function Landing() {
  return (
    <>
      <div id="container">
        <div id="landing img">
          
        </div>
        <div id="landing-hero">
          <h3>Lorem ipsum... ... ... ... .. ... ... ... ... ...</h3>
          <div>
            <Link to={"log-in"} className="redirect">
              <button>Go shopping</button>
            </Link>
            <Link to={"sign-up"} className="redirect">
              <p>Sign up</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
