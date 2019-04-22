import { START_GAME } from '../actions/types'

const initialState = {
  game: {}
}

const game = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case START_GAME:
      return {
        ...state,
        balance: payload.balance,
        beforeBalance: payload.beforeBalance,
        betAmount: payload.betAmount,
        betIndex: payload.betIndex,
        betsAmount: payload.betsAmount,
        houseedge: payload.houseedge,
        isWin: payload.isWin,
        lastClientSeed: payload.lastClientSeed,
        lastNonce: payload.lastNonce,
        lastServerSeed: payload.lastServerSeed,
        number: payload.number,
        rollResult: payload.rollResult,
        serverSeedHashed: payload.serverSeedHashed,
        sessionTime: payload.sessionTime,
        timestamp: payload.timestamp,
        totalGames: payload.totalGames,
        type: payload.type,
        winAmount: payload.winAmount,
        winCoef: payload.winCoef,
        winGames: payload.winGames,
        winProfit: payload.winProfit,
        success: payload.success
      }
    default:
      return state
  }
}

export default game
