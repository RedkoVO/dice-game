export default () => ({
  root: {},
  wrTable: {
    width: '100%',
    paddingTop: '20px'
  },
  head: {
    '& tr td': {
      paddingBottom: '10px',
      textAlign: 'center',
      color: '#403A54',
      fontSize: '14px',
      fontWeight: 900,
      opacity: 0.65
    }
  },
  bodyTable: {
    '& tr': {
      height: '39px',
      borderRadius: '5px'
    },
    '& tr:nth-child(2n+1)': {
      '& td': {
        background: 'rgba(110, 93, 166, 0.116989)',

        '&:nth-child(4)': {
          color: '#51CC20',
          opacity: 0.8
        }
      }
    },
    '& tr:nth-child(2n)': {
      '& td': {
        '&:nth-child(4)': {
          color: '#DE4A63',
          opacity: 0.8
        }
      }
    },
    '& tr td': {
      textAlign: 'center',
      color: '#403A54',
      fontSize: '12px',
      fontWeight: 900,
      opacity: 0.6,

      '&:nth-child(1)': {
        borderRadius: '5px 0 0 5px'
      },
      '&:nth-child(4)': {
        borderRadius: '0 5px 5px 0'
      }
    }
  }
})
