import React from 'react'
import './infoBlocks.css'
import PropTypes from 'prop-types'

function InformationBlock({ img, title, text, link, text2 }) {
  return (
    <div className="info_Blocks">
      <img src={img} height="75px" />
      <h2>{title}</h2>
      <p>
        {text}
        <a href={link}> {text2}</a>
      </p>
    </div>
  )
}

InformationBlock.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  text2: PropTypes.string.isRequired,
}

export default InformationBlock
