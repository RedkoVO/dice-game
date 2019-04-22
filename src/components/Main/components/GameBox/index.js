import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-rangeslider'

import withStyles from '@material-ui/core/styles/withStyles'

import gC from '../../../../constants'

import UpdateIcon from '../../../../assets/images/update.png'
import RedCube from './svg/redCube'
import GreenCube from './svg/greenCube'

import './range.css'
import styles from './styles'

const GameBox = ({
  classes,
  game,
  rangeValue,
  handlerRange,
  handleChangeRoll,
  handleRollDirection,
  rollDirectionMore,
  winChance,
  payout
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
        {game.rollResult <= 50 && (
          <div className={classes.redCube}>
            <div className={classes.coef}>{game.rollResult}39.22</div>
            <RedCube />
          </div>
        )}

        {game.rollResult > 50 && (
          <div className={classes.greenCube}>
            <div className={classes.coef}>{game.rollResult}88.17</div>
            <GreenCube />
          </div>
        )}

        <Slider
          step={0.1}
          min={gC.game.minValue}
          max={gC.game.maxValue}
          value={rangeValue}
          tooltip={false}
          onChange={val => handlerRange(val)}
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
            value={`${rangeValue}`}
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
          <div className={classes.infoField}>x{payout}</div>
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
  game: PropTypes.object,
  rangeValue: PropTypes.number,
  handlerRange: PropTypes.func,
  handleChangeRoll: PropTypes.func,
  handleRollDirection: PropTypes.func,
  rollDirectionMore: PropTypes.bool,
  winChance: PropTypes.number,
  payout: PropTypes.number
}

export default withStyles(styles)(GameBox)
