import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const GameHistory = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Tabs className={classes.tabs} selectedTabClassName={classes.selectedTab}>
        <TabList className={classes.tabList}>
          <Tab className={classes.tab}>My bets</Tab>
          <Tab className={classes.tab}>All bets</Tab>
          <Tab className={classes.tab}>High rollers</Tab>
        </TabList>

        <TabPanel className={classes.tabPanel}>1</TabPanel>
        <TabPanel className={classes.tabPanel}>2</TabPanel>
        <TabPanel className={classes.tabPanel}>3</TabPanel>
      </Tabs>
      History
    </div>
  )
}

GameHistory.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(GameHistory)
