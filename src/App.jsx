import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Main from './components/Main/Main';
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <Banner/> */}
      <Header/>
      <Main/>
    </div>
  )
}

export default App
