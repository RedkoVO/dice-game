import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const HistoryTab = ({ classes, historyGame }) => {
  return (
    <div className={classes.root}>
      <table className={classes.wrTable} cellSpacing="0" cellPadding="0">
        <thead className={classes.head}>
          <tr>
            <td>User</td>
            <td>Bet</td>
            <td>Payout</td>
            <td>Profit</td>
          </tr>
        </thead>
        <tbody className={classes.bodyTable}>
          {historyGame.map(item => (
            <tr key={item.id}>
              <td>{item.user}</td>
              <td>{item.bet}</td>
              <td>{item.payout}</td>
              <td>{item.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

HistoryTab.propTypes = {
  classes: PropTypes.object,
  historyGame: PropTypes.array
}

export default withStyles(styles)(HistoryTab)
