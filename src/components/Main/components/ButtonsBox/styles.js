export default theme => ({
  root: {
    paddingTop: '26px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 13px',
    height: '58px',
    background: '#403A54',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      marginBottom: '4px'
    }
  },
  amount: {
    display: 'flex',
    alignItems: 'center'
  },
  amountTitle: {
    paddingRight: '10px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 900,

    [theme.breakpoints.down('sm')]: {
      fontSize: '15px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '11px'
    }
  },
  amountField: {
    padding: '6px',
    color: '#fff',
    background: 'rgba(103, 94, 132, 0.732988)',
    border: '1px solid rgba(255, 255, 255, 0.0419497)',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      padding: '4px'
    }
  },
  auto: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFC400',
    fontSize: '16px',
    fontWeight: 900
  },
  colorSwitchBase: {
    color: '#BDBDBD',
    '&$colorChecked': {
      color: '#80CBC4',
      '& + $colorBar': {
        backgroundColor: 'rgba(127, 202, 195, 0.5)'
      }
    }
  },
  colorBar: {},
  colorChecked: {},
  buttons: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  circleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    width: '130px',
    height: '130px',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 900,
    background: '#51CB20',
    border: '14px solid #FFFFFF',
    borderRadius: '100%',
    cursor: 'pointer',

    [theme.breakpoints.down('sm')]: {
      width: '90px',
      height: '90px',
      border: '10px solid #FFFFFF'
    }
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '7px 0',
    width: '114px',
    height: '80px',
    color: '#403A54',
    fontSize: '20px',
    fontWeight: 900,
    background: '#FFC400',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'box-shadow 0.1s ease-out',

    '&:hover': {
      boxShadow: 'inset 0px 0px 14px 0px rgba(0,0,0, 0.2)'
    },
    '&:active': {
      boxShadow: 'inset 0px 0px 14px 0px rgba(0,0,0, 0.4)'
    },

    [theme.breakpoints.down('sm')]: {
      width: '80px',
      height: '60px',
      margin: '5px 0',
      fontSize: '18px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '72px'
    }
  },
  autoButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px 13px',
    margin: '7px 0',
    background: '#403A54',
    borderRadius: '5px'
  },
  wrButtons: {
    display: 'flex',
    alignItems: 'center',
    padding: '5px 0',
    color: '#fff',

    '&:nth-child(1)': {
      borderBottom: '1px solid #fff'
    },

    [theme.breakpoints.down('xs')]: {
      fontSize: '11px'
    }
  },
  autoButtonsTitle: {
    width: '80px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 900,

    [theme.breakpoints.down('sm')]: {
      width: '62px',
      fontSize: '14px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      fontSize: '11px'
    }
  },
  autoButtonGreen: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 7px',
    width: '90px',
    height: '36px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 900,
    background: '#51CC20',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      margin: '0 4px',
      width: '63px',
      height: '25px',
      fontSize: '9px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '58px',
    }
  },
  autoButtonGray: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 7px',
    width: '90px',
    height: '36px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 900,
    background: '#A5A5A5',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      margin: '0 4px',
      width: '63px',
      height: '25px',
      fontSize: '9px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '58px',
    }
  },
  autoButtonBlue: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90px',
    height: '36px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 900,
    background: 'rgba(92, 84, 119, 0.73)',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      margin: '0 4px',
      width: '48px',
      height: '25px',
      fontSize: '9px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '45px',
    }
  },
  autoRightBlock: {
    margin: '5px 0',
    paddingLeft: '10px',
    borderLeft: '1px solid #FFFFFF'
  },
  autoRightTitle: {
    color: '#fff',
    fontSize: '18px',
    fontWeight: 900,
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      fontSize: '14px'
    }
  },
  rols: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    width: '54px',
    height: '51px',
    color: '#fff',
    fontSize: '14px',
    fontWeight: 900,
    background: 'rgba(103, 94, 132, 0.732988)',
    border: '1px solid rgba(255, 255, 255, 0.0419497)',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '38px',
      fontSize: '9px'
    }
  },
  startButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '72px',
    color: '#fff',
    textTransform: 'uppercase',
    background: '#51CC20',
    borderRadius: '5px',

    [theme.breakpoints.down('sm')]: {
      height: '53px',
      fontSize: '14px'
    }
  }
})
