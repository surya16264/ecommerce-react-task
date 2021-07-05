import React, { Component } from 'react'
import Navbar from './components/Navbar'
import AppRouter from './Router'
import Footer from './components/Footer'

import './styles/index.scss'

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <AppRouter />
        <Footer />
      </>
    )
  }
}


export default App