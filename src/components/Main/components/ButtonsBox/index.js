import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import cn from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const ButtonsBox = ({
  classes,
  checked,
  isProcessing,
  handleCheckbox,
  handleChangeAmount,
  fieldsState,
  handleButton,
  handleRollButton
}) => (
  <div className={classes.root}>
    <div className={classes.header}>
      <div className={classes.amount}>
        <div className={classes.amountTitle}>Bet amount:</div>
        <input
          id="roll"
          name="roll"
          type="number"
          min="0.1"
          step="0.1"
          className={classes.amountField}
          value={fieldsState.amount}
          onChange={e => handleChangeAmount(e)}
        />
      </div>
      <div className={classes.auto}>
        <div>Auto</div>
        <Switch
          checked={checked}
          onChange={() => handleCheckbox()}
          value="checked"
          classes={{
            switchBase: classes.colorSwitchBase,
            checked: classes.colorChecked,
            bar: classes.colorBar
          }}
        />
      </div>
    </div>
    {checked ? (
      <React.Fragment>
        <div className={classes.autoButtons}>
          <div className={classes.autoLeftBlock}>
            <div className={classes.wrButtons}>
              <div className={classes.autoButtonsTitle}>On Win:</div>
              <div className={classes.autoButtonGreen}>Reset bet</div>
              or
              <div className={classes.autoButtonGray}>Increase by:</div>
              <div className={classes.autoButtonBlue}>+100%</div>
            </div>

            <div className={classes.wrButtons}>
              <div className={classes.autoButtonsTitle}>On Lose:</div>
              <div className={classes.autoButtonGray}>Reset bet</div>
              or
              <div className={classes.autoButtonGreen}>Increase by:</div>
              <div className={classes.autoButtonBlue}>+100%</div>
            </div>
          </div>

          <div className={classes.autoRightBlock}>
            <div className={classes.autoRightTitle}>Rolls</div>
            <div className={classes.rols}>99999</div>
          </div>
        </div>

        <div className={cn(classes.startButton, { procssing: isProcessing })}>
          {isProcessing ? 'Processing' : 'Start auto'}
        </div>
      </React.Fragment>
    ) : (
      <div className={classes.buttons}>
        <div
          className={cn(classes.circleButton, { procssing: isProcessing })}
          onClick={() => handleRollButton()}
        >
          {isProcessing ? 'Processing' : 'ROLL'}
        </div>
        <div className={classes.button} onClick={() => handleButton('min')}>
          Min
        </div>
        <div className={classes.button} onClick={() => handleButton('minus')}>
          -
        </div>
        <div className={classes.button} onClick={() => handleButton('plus')}>
          +
        </div>
        <div className={classes.button} onClick={() => handleButton('max')}>
          Max
        </div>
        <div className={classes.button} onClick={() => handleButton('1/10')}>
          1/10
        </div>
        <div className={classes.button} onClick={() => handleButton('1/2')}>
          1/2
        </div>
        <div className={classes.button} onClick={() => handleButton('x2')}>
          X2
        </div>
        <div className={classes.button} onClick={() => handleButton('x10')}>
          X10
        </div>
      </div>
    )}
  </div>
)

ButtonsBox.propTypes = {
  classes: PropTypes.object,
  checked: PropTypes.bool,
  isProcessing: PropTypes.bool,
  handleCheckbox: PropTypes.func,
  handleChangeAmount: PropTypes.func,
  handleButton: PropTypes.func,
  handleRollButton: PropTypes.func,
  fieldsState: PropTypes.object
}

export default withStyles(styles)(ButtonsBox)
