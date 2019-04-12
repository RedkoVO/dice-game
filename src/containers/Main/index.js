import compose from 'recompose/compose'
import { pure, withHandlers, withState, withProps } from 'recompose'

import gC from '../../constants'

import Main from '../../components/Main'

const mockHistory = [
  {
    id: 1,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 2,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 3,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 4,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 5,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 6,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 7,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 8,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 9,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 10,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 11,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 12,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 13,
    user: 'Hidden',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 14,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  },
  {
    id: 15,
    user: 'Maxim',
    bet: '0.000000001',
    payout: '2.0x',
    profit: '0.000000002'
  }
]

export default compose(
  withState('checked', 'setCheckbox', false),
  withState('rollDirectionMore', 'setRollDirection', false),
  withState('fieldsState', 'setField', {
    range: 50,
    amount: 0.001,
    winChance: 50,
    payout: 1.8
  }),
  withHandlers({
    setPayout: ({ rollDirectionMore, fieldsState, setField }) => () => {
      let fields = Object.assign({}, fieldsState)

      if (rollDirectionMore) {
        const num = fields.range
        const coef = (100 - num) / 100
        const winMult = (1 / coef) * (1 - 0.1)
        fields.payout = winMult

        // console.log('> winMult', winMult)
        setField(fields)
      } else {
        const num = fields.range
        const coef = num / 100
        const winMult = (1 / coef) * (1 - 0.1)
        fields.payout = winMult

        // console.log('< winMult', winMult)
        setField(fields)
      }
    }
  }),
  withHandlers({
    handleCheckbox: ({ setCheckbox, checked }) => () => {
      setCheckbox(!checked)
    },
    handleChangeAmount: ({ fieldsState, setField }) => e => {
      let fields = Object.assign({}, fieldsState)
      fields.amount = e.target.value

      setField(fields)
    },
    handleRollDirection: ({
      fieldsState,
      setField,
      rollDirectionMore,
      setRollDirection
    }) => () => {
      let fields = Object.assign({}, fieldsState)
      const roll = gC.game.maxValue - fields.range
      fields.range = parseFloat(parseFloat(roll).toFixed(1))
      fields.winChance = !rollDirectionMore
        ? parseFloat(parseFloat(gC.game.maxValue - fields.range).toFixed(1))
        : parseFloat(parseFloat(roll).toFixed(1))

      setField(fields)
      setRollDirection(!rollDirectionMore)
    },

    handlerRange: ({ fieldsState, setField, rollDirectionMore, setPayout }) => val => {
      let fields = Object.assign({}, fieldsState)
      fields.range = parseFloat(parseFloat(val).toFixed(1))
      fields.winChance = rollDirectionMore
        ? parseFloat(parseFloat(gC.game.maxValue - fields.range).toFixed(1))
        : parseFloat(parseFloat(val).toFixed(1))

        if (rollDirectionMore) {
          const num = fields.range
          const coef = (100 - num) / 100
          const winMult = (1 / coef) * (1 - 0.1)
          fields.payout = winMult
        } else {
          const num = fields.range
          const coef = num / 100
          const winMult = (1 / coef) * (1 - 0.1)
          fields.payout = parseFloat(parseFloat(winMult).toFixed(2))
        }
      // setPayout()
      setField(fields)
    },
    handleChangeRoll: ({ setField, fieldsState, rollDirectionMore }) => e => {
      const val = e.target.value
      let fields = Object.assign({}, fieldsState)
      fields.range = parseFloat(parseFloat(val).toFixed(1))
      fields.winChance = rollDirectionMore
        ? parseFloat(parseFloat(gC.game.maxValue - fields.range).toFixed(1))
        : parseFloat(parseFloat(val).toFixed(1))

      if (
        parseFloat(val) >= gC.game.minValue &&
        parseFloat(val) < gC.game.maxValue
      ) {
        setField(fields)
      } else {
        return false
      }
    },
    handleButton: ({ setField, fieldsState }) => val => {
      let fields = Object.assign({}, fieldsState)

      switch (val) {
        case 'min':
          fields.range = gC.game.minValue
          break
        case 'minus':
          if (fields.range > gC.game.minValue) {
            fields.range = parseFloat(
              parseFloat(fieldsState.range - 0.1).toFixed(1)
            )
          } else {
            return false
          }
          break
        case 'plus':
          if (fields.range < gC.game.maxValue) {
            fields.range = parseFloat(
              parseFloat(fieldsState.range + 0.1).toFixed(1)
            )
          } else {
            return false
          }
          break
        case 'max':
          fields.range = gC.game.maxValue
          break
        case '1/10':
          fields.range = parseFloat(
            parseFloat(fieldsState.range / 10).toFixed(1)
          )
          break
        case '1/2':
          fields.range = parseFloat(
            parseFloat(fieldsState.range / 2).toFixed(1)
          )
          break
        case 'x2':
          if (fields.range * 2 <= gC.game.maxValue) {
            fields.range = parseFloat(
              parseFloat(fieldsState.range * 2).toFixed(1)
            )
          } else {
            return false
          }
          break
        case 'x10':
          if (fields.range * 10 < gC.game.maxValue) {
            fields.range = parseFloat(
              parseFloat(fieldsState.range[0] * 10).toFixed(1)
            )
          } else {
            return false
          }
          break
        default:
          return false
      }

      setField(fields)
    }
  }),
  withProps(() => ({ historyGame: mockHistory })),
  pure
)(Main)
