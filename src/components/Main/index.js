import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import GameBox from './components/GameBox'
import ButtonsBox from './components/ButtonsBox'
import GameHistory from './components/GameHistory'

import styles from './styles'

const Main = ({
  classes,
  rangeValue,
  checked,
  handlerRange,
  handleCheckbox
}) => (
  <div className={classes.root}>
    <div className={classes.playArea}>
      <GameBox rangeValue={rangeValue} handlerRange={handlerRange} />
      <ButtonsBox checked={checked} handleCheckbox={handleCheckbox} />
    </div>
    <GameHistory />
  </div>
)

Main.propTypes = {
  classes: PropTypes.object,
  rangeValue: PropTypes.array,
  handlerRange: PropTypes.func,
  checked: PropTypes.bool,
  handleCheckbox: PropTypes.func
}

export default withStyles(styles)(Main)
