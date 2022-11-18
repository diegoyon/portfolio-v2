import Header from './components/Header/Header';
import './App.css';
import './shared_css/scrollbar/scrollbar.css'
import './shared_css/buttons/buttons.css'
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
