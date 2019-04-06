import React from 'react'
import PropTypes from 'prop-types'

export const PageLayout = ({ content: Content, ...rest }) => {
  return (
    <div className="container">
      <content>
        <Content {...rest} />
      </content>
    </div>
  )
}

PageLayout.propTypes = {
  content: PropTypes.func.isRequired
}

export default PageLayout
