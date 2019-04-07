import compose from 'recompose/compose'
import { pure, withHandlers, withState, withProps } from 'recompose'

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
    range: [50],
    amount: 100.000000001
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
      const roll = 100 - fields.range[0]
      fields.range = [parseFloat(parseFloat(roll).toFixed(1))]

      console.log('range', fields.range)

      setField(fields)
      setRollDirection(!rollDirectionMore)
    },

    handlerRange: ({ fieldsState, setField }) => val => {
      let fields = Object.assign({}, fieldsState)
      fields.range = val

      setField(fields)
    },
    handleChangeRoll: ({ setField, fieldsState }) => e => {
      const val = e.target.value
      let fields = Object.assign({}, fieldsState)
      fields.range = [parseFloat(parseFloat(val).toFixed(1))]

      if (parseFloat(val) > 0.1 && parseFloat(val) < 100) {
        setField(fields)
      } else {
        return false
      }
    }
  }),
  withProps(() => ({ historyGame: mockHistory })),
  pure
)(Main)
