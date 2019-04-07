import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withStyles from '@material-ui/core/styles/withStyles'

import HistoryTab from './components/HistoryTab'

import styles from './styles'

const GameHistory = ({ classes, historyGame }) => {
  return (
    <div className={classes.root}>
      <Tabs className={classes.tabs} selectedTabClassName={classes.selectedTab}>
        <TabList className={classes.tabList}>
          <Tab className={classes.tab}>My bets</Tab>
          <Tab className={classes.tab}>All bets</Tab>
          <Tab className={classes.tab}>High rollers</Tab>
        </TabList>

        <TabPanel className={classes.tabPanel}>
          <HistoryTab historyGame={historyGame} />
        </TabPanel>
        <TabPanel className={classes.tabPanel}>
          <HistoryTab historyGame={historyGame} />
        </TabPanel>
        <TabPanel className={classes.tabPanel}>
          <HistoryTab historyGame={historyGame} />
        </TabPanel>
      </Tabs>
    </div>
  )
}

GameHistory.propTypes = {
  classes: PropTypes.object,
  historyGame: PropTypes.array
}

export default withStyles(styles)(GameHistory)
