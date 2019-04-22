import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import GameBox from './components/GameBox'
import ButtonsBox from './components/ButtonsBox'
import GameHistory from './components/GameHistory'

import styles from './styles'

const Main = ({
  classes,
  game,
  fieldsState,
  checked,
  isProcessing,
  handlerRange,
  handleCheckbox,
  historyGame,
  handleChangeRoll,
  handleChangeAmount,
  handleRollDirection,
  handleRollButton,
  rollDirectionMore,
  handleButton
}) => (
  <div className={classes.root}>
    <div className={classes.playArea}>
      <GameBox
        game={game}
        rangeValue={fieldsState.range}
        winChance={fieldsState.winChance}
        payout={fieldsState.payout}
        handlerRange={handlerRange}
        handleChangeRoll={handleChangeRoll}
        handleRollDirection={handleRollDirection}
        rollDirectionMore={rollDirectionMore}
      />
      <ButtonsBox
        checked={checked}
        fieldsState={fieldsState}
        isProcessing={isProcessing}
        handleCheckbox={handleCheckbox}
        handleChangeAmount={handleChangeAmount}
        handleRollButton={handleRollButton}
        handleButton={handleButton}
      />
    </div>
    <GameHistory historyGame={historyGame} />
  </div>
)

Main.propTypes = {
  classes: PropTypes.object,
  game: PropTypes.object,
  fieldsState: PropTypes.object,
  handlerRange: PropTypes.func,
  checked: PropTypes.bool,
  isProcessing: PropTypes.bool,
  rollDirectionMore: PropTypes.bool,
  handleCheckbox: PropTypes.func,
  historyGame: PropTypes.array,
  handleChangeRoll: PropTypes.func,
  handleChangeAmount: PropTypes.func,
  handleRollDirection: PropTypes.func,
  handleRollButton: PropTypes.func,
  handleButton: PropTypes.func
}

export default withStyles(styles)(Main)
