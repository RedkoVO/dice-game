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
  withState('rangeValue', 'setRangeValue', [50]),
  withState('checked', 'setCheckbox', false),
  withHandlers({
    handlerRange: ({ setRangeValue }) => val => {
      setRangeValue(val)
    },
    handleCheckbox: ({ setCheckbox, checked }) => () => {
      setCheckbox(!checked)
    }
  }),
  withProps(() => ({ historyGame: mockHistory })),
  pure
)(Main)
