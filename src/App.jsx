import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="Cris" age={19} isGay={true} />
      <Student name="Estevam" age={30} isGay={true} />
      <Student name="Paulo" age={18} isGay={false} />
      <List />
    </>
  );
}

export default App;
