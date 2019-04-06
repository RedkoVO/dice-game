export default () => ({
  root: {
    marginLeft: '18px',
    padding: '16px 12px',
    width: '426px',
    background: '#fff',
    borderRadius: '5px'
  },
  tabs: {},
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
  },
  tabPanel: {}
})
