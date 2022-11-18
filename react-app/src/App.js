import './App.css';
import AppButton from './components/button.tsx'

function App() {
  return (
    <div className="App">
     <AppButton text='Button' type="Primary" size="Large" theme="default" />
     <AppButton text='Button' type="Secondary" size="Large" theme="default" />
     <AppButton text='Button' type="Primary" size="Medium" theme="default" />
     <AppButton text='Button' type="Secondary" size="Medium" theme="default" />
     <AppButton text='Button' type="Primary" size="Small" theme="default" />
     <AppButton text='Button' type="Secondary" size="Small" theme="default" />
    </div>
  );
}

export default App;
