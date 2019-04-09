export default theme => ({
  wrRange: {
    position: 'relative',
    marginTop: '25px'
  },
  redCube: {
    position: 'absolute',
    top: '-74px',
    left: '85px',

    [theme.breakpoints.down('sm')]: {
      left: '45px'
    },
    [theme.breakpoints.down('xs')]: {
      left: '34px'
    }
  },
  greenCube: {
    position: 'absolute',
    top: '-74px',
    right: '85px',

    [theme.breakpoints.down('sm')]: {
      right: '45px'
    },
    [theme.breakpoints.down('xs')]: {
      right: '34px'
    }
  },
  coef: {
    position: 'absolute',
    top: '12px',
    width: '50px',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 900,
    fontSize: '12px'
  },
  result: {
    '& div:nth-child(1)': {
      opacity: 0.2
    },
    '& div:nth-child(2)': {
      opacity: 0.3
    },
    '& div:nth-child(3)': {
      opacity: 0.3
    },
    '& div:nth-child(4)': {
      opacity: 0.6
    },
    '& div:nth-child(5)': {
      opacity: 0.6
    },
    '& div:nth-child(6)': {
      opacity: 0.8
    },
    '& div:nth-child(7)': {
      opacity: 0.8
    }
  },
  redResult: {
    fontSize: '20px',
    fontWeight: 900,
    lineHeight: 'normal',
    textAlign: 'center',
    color: '#C7253A'
  },
  greenResult: {
    fontSize: '20px',
    fontWeight: 900,
    lineHeight: 'normal',
    textAlign: 'center',
    color: '#38BB03'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '347px',
    margin: '0 auto',
    marginTop: '34px',

    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  infoTitle: {
    paddingBottom: '5px',
    color: '#858585',
    fontSize: '11px',
    fontWeight: 900,
    textAlign: 'center'
  },
  infoField: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '94px',
    height: '38px',
    color: '#fff',
    fontSize: '20px',
    fontWeight: 900,
    background: '#5C5477',
    borderRadius: '5px',
    textAlign: 'center',
    border: 'none',

    [theme.breakpoints.down('sm')]: {
      color: '#858585',
      background: '#F0F0F0'
    }
  },
  infoItem: {
    position: 'relative'
  },
  rollDirection: {
    position: 'absolute',
    color: '#fff',
    top: '26px',
    left: '5px',
    fontSize: '19px'
  },
  rollChange: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    color: '#fff',
    top: '26px',
    right: '10px',
    fontSize: '19px',
    cursor: 'pointer',

    '& img': {
      width: '100%'
    }
  }
})
