import React from 'react'
import PropTypes from 'prop-types'
import { Range } from 'react-range'
import withStyles from '@material-ui/core/styles/withStyles'

import gC from '../../../../constants'

import UpdateIcon from '../../../../assets/images/update.png'
import RedCube from './svg/redCube'
import GreenCube from './svg/greenCube'

import styles from './styles'

const GameBox = ({
  classes,
  rangeValue,
  handlerRange,
  handleChangeRoll,
  handleRollDirection,
  rollDirectionMore,
  winChance
}) => {
  return (
    <div className={classes.root}>
      <div className={classes.result}>
        <div className={classes.redResult}>0.00001000</div>
        <div className={classes.greenResult}>0.00003483</div>
        <div className={classes.greenResult}>0.00003483</div>
        <div className={classes.greenResult}>0.00003483</div>
        <div className={classes.redResult}>0.00001000</div>
        <div className={classes.greenResult}>0.00003483</div>
        <div className={classes.redResult}>0.00001000</div>
      </div>

      <div className={classes.wrRange}>
        <div className={classes.redCube}>
          <div className={classes.coef}>39.22</div>
          <RedCube />
        </div>

        <div className={classes.greenCube}>
          <div className={classes.coef}>88.17</div>
          <GreenCube />
        </div>

        <Range
          step={0.1}
          min={gC.game.minValue}
          max={gC.game.maxValue}
          values={rangeValue}
          onChange={val => handlerRange(val)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '26px',
                width: '100%',
                background: `linear-gradient(90deg, #C6253A ${rangeValue[0].toFixed(
                  1
                )}%, #51CB20 0%)`,
                borderRadius: '10px'
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '45px',
                width: '45px',
                backgroundColor: '#FFC400',
                borderRadius: '100%'
              }}
            />
          )}
        />
      </div>

      <div className={classes.info}>
        <div className={classes.infoItem}>
          <div className={classes.infoTitle}>Roll under</div>
          <div className={classes.rollDirection}>
            {rollDirectionMore ? '>' : '<'}
          </div>
          <input
            id="roll"
            name="roll"
            type="number"
            min={gC.game.minValue}
            max={gC.game.maxValue}
            step="0.1"
            className={classes.infoField}
            value={`${rangeValue[0]}`}
            onChange={e => handleChangeRoll(e)}
          />
          <div
            className={classes.rollChange}
            onClick={() => handleRollDirection()}
          >
            <img src={UpdateIcon} alt="" />
          </div>
        </div>
        <div>
          <div className={classes.infoTitle}>Payout</div>
          <div className={classes.infoField}>{'x1.78'}</div>
        </div>
        <div>
          <div className={classes.infoTitle}>Win chance</div>
          <div className={classes.infoField}>{winChance}</div>
        </div>
      </div>
    </div>
  )
}

GameBox.propTypes = {
  classes: PropTypes.object,
  rangeValue: PropTypes.array,
  handlerRange: PropTypes.func,
  handleChangeRoll: PropTypes.func,
  handleRollDirection: PropTypes.func,
  rollDirectionMore: PropTypes.bool,
  winChance: PropTypes.number
}

export default withStyles(styles)(GameBox)
