export default theme => ({
  root: {
    display: 'flex',
    maxWidth: '1010px',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      display: 'block'
    }
  },
  playArea: {
    position: 'relative',
    marginTop: '150px',
    width: '495px',

    [theme.breakpoints.down('md')]: {
      margin: '0 auto'
    },
    [theme.breakpoints.down('sm')]: {
      width: '350px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '320px',
    }
  }
})
