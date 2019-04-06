export default () => ({
  wrRange: {
    position: 'relative',
    marginTop: '25px'
  },
  redCube: {
    position: 'absolute',
    top: '-74px',
    left: '85px'
  },
  greenCube: {
    position: 'absolute',
    top: '-74px',
    right: '85px'
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
  rangeLine: {
    height: '6px',
    width: '100%',
    backgroundColor: '#ccc'
  },
  rangeThumb: {
    height: '42px',
    width: '42px',
    backgroundColor: '#999'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '347px',
    margin: '0 auto',
    marginTop: '34px'
  },
  infoTitle: {
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
    borderRadius: '5px'
  }
})
