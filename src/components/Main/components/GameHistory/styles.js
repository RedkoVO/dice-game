export default theme => ({
  root: {
    marginLeft: '18px',
    marginTop: '10px',
    padding: '16px 12px',
    width: '426px',
    height: '702px',
    background: '#fff',
    borderRadius: '5px',
    overflow: 'auto',

    [theme.breakpoints.down('md')]: {
      margin: '0 auto',
      marginTop: '20px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '350px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
    }
  },
  tabList: {
    display: 'flex',
    padding: 0,
    margin: 0,
    listStyle: 'none'
  },
  tab: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '7px',
    width: '127px',
    height: '38px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 900,
    background: '#403A54',
    borderRadius: '5px',
    cursor: 'pointer',
    opacity: 0.5
  },
  selectedTab: {
    opacity: 1
  }
})
