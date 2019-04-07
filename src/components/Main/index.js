import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import GameBox from './components/GameBox'
import ButtonsBox from './components/ButtonsBox'
import GameHistory from './components/GameHistory'

import styles from './styles'

const Main = ({
  classes,
  fieldsState,
  checked,
  handlerRange,
  handleCheckbox,
  historyGame,
  handleChangeRoll,
  handleChangeAmount,
  handleRollDirection,
  rollDirectionMore
}) => (
  <div className={classes.root}>
    <div className={classes.playArea}>
      <GameBox
        rangeValue={fieldsState.range}
        handlerRange={handlerRange}
        handleChangeRoll={handleChangeRoll}
        handleRollDirection={handleRollDirection}
        rollDirectionMore={rollDirectionMore}
      />
      <ButtonsBox
        checked={checked}
        fieldsState={fieldsState}
        handleCheckbox={handleCheckbox}
        handleChangeAmount={handleChangeAmount}
      />
    </div>
    <GameHistory historyGame={historyGame} />
  </div>
)

Main.propTypes = {
  classes: PropTypes.object,
  fieldsState: PropTypes.object,
  handlerRange: PropTypes.func,
  checked: PropTypes.bool,
  rollDirectionMore: PropTypes.bool,
  handleCheckbox: PropTypes.func,
  historyGame: PropTypes.array,
  handleChangeRoll: PropTypes.func,
  handleChangeAmount: PropTypes.func,
  handleRollDirection: PropTypes.func
}

export default withStyles(styles)(Main)
