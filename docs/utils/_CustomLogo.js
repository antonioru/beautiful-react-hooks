import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'rsg-components/Styled'
import logo from './_doc-logo.png'

const styles = ({ fontFamily, color }) => ({
  logo: {
    display: 'block'
  },
  image: {
    width: '100%'
  }
})

const LogoRenderer = ({ classes }) => (
  <h1 className={classes.logo}>
    <img className={classes.image} src={logo} alt="Beautiful React Hooks" />
  </h1>
)

LogoRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default Styled(styles)(LogoRenderer)
