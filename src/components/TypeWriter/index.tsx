import React from 'react'
import TypewriterComponent from 'typewriter-effect'

const TypeWriter = () => {
  return (
    <div className="text-primary">
      <TypewriterComponent
        options={{
          strings: [
            'Web Developer',
            'Web 3.0 Learner',
            'MERN Stack Developer',
            'Open Source Contributor'
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          cursorClassName: 'text-primary'
        }}
        tw="text-primary"
      />
    </div>
  )
}

export default TypeWriter
