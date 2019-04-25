import { START_GAME } from './types'
import axios from 'axios'

import gC from '../../constants'

/* START GAME */
export const startGame = data => async dispatch => {
  try {
    const res = await axios({
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      url: `${gC.API_URL}?req=${JSON.stringify(data)}&sid=test`
    })
    dispatch(createStartGameSuccess(res.data))
    return res.data
  } catch (error) {
    console.log('START_GAME error', error)
  }
}

export const createStartGameSuccess = data => {
  return {
    type: START_GAME,
    payload: {
      balance: data.balance,
      beforeBalance: data.before_balance,
      betAmount: data.bet_amount,
      betIndex: data.bet_index,
      betsAmount: data.bets_amount,
      houseedge: data.houseedge,
      isWin: data.is_win,
      lastClientSeed: data.last_client_seed,
      lastNonce: data.last_nonce,
      lastServerSeed: data.last_server_seed,
      number: data.number,
      rollResult: data.roll_result,
      serverSeedHashed: data.server_seed_hashed,
      sessionTime: data.session_time,
      timestamp: data.timestamp,
      totalGames: data.total_games,
      type: data.type,
      winAmount: data.win_amount,
      winCoef: data.win_coef,
      winGames: data.win_games,
      winProfit: data.win_profit,
      success: data.success
    }
  }
}
