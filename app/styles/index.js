var styles = {
  container: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/assets/images/bg.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95vh',
    width: '100%',
    
    h1: {
      fontWeight: '100',
      color: '#fff',
      fontSize: '4rem'
    }
  },
  header: {
    backgroundColor: '#F27935',
    height: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    
    logo: {
      color: '#fff',
      margin: '1rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  }
}

module.exports = styles;