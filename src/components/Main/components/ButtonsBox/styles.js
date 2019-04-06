export default () => ({
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
    borderRadius: '5px'
  },
  amount: {
    display: 'flex',
    alignItems: 'center'
  },
  amountTitle: {
    paddingRight: '10px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 900
  },
  amountField: {
    padding: '6px',
    color: '#fff',
    background: 'rgba(103, 94, 132, 0.732988)',
    border: '1px solid rgba(255, 255, 255, 0.0419497)',
    borderRadius: '5px'
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
    cursor: 'pointer'
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
    cursor: 'pointer'
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
    }
  },
  autoButtonsTitle: {
    width: '80px',
    color: '#fff',
    fontSize: '18px',
    fontWeight: 900
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
    borderRadius: '5px'
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
    borderRadius: '5px'
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
    borderRadius: '5px'
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
    textAlign: 'center'
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
    borderRadius: '5px'
  },
  startButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '72px',
    color: '#fff',
    textTransform: 'uppercase',
    background: '#51CC20',
    borderRadius: '5px'
  }
})
