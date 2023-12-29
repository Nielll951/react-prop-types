import React from 'react'
import PropTypes from 'prop-types'


function Component() {
  return null
}

Component.propTypes = {
   person: PropTypes.exact({
      name: PropTypes.string,
      age: PropTypes.number,
   }).isRequired,
}


export default Component
