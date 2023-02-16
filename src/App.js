import './styles/normalize.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table';
import Card from './components/Card';

const words=[
  {
    id:"1",
    english:"family",
    transcription:"[ ˈfæm. ə l.i ]",
    russian:"семья",
    isSelected:true
  },
  {
    id:"2",
    english:"father",
    transcription:"[ ˈfɑː.ðə r]",
    russian:"отец"
  },
  {
    id:"3",
    english:"accelerator",
    transcription:"[ əkˈseləreɪtə ]",
    russian:"акселератор"
  },
  {
    id:"4",
    english:"bulbs",
    transcription:"[ bʌlbz ]",
    russian:"лампы"
  },
  {
    id:"5",
    english:"star",
    transcription:"[stɑː]",
    russian:"звезда"
  },
  {
    id:"6",
    english:"galaxy",
    transcription:"[ˈgæləksɪ]",
    russian:"галактика"
  },
  {
    id:"7",
    english:"milk",
    transcription:"[mɪlk]",
    russian:"молоко"
  },
  {
    id:"8",
    english:"happy",
    transcription:"[ˈhæpɪ]",
    russian:"счастливый"
  },
]
function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        {words.map((word) => (
          <Table
            english={word.english}
            transcription={word.transcription}
            isSelected={word.isSelected}
          ></Table>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
