import compose from 'recompose/compose'
import { pure, withHandlers, withState } from 'recompose'

import Main from '../../components/Main'

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
  pure
)(Main)
