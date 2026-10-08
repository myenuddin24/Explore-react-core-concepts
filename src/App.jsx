import './App.css'
import Singer from './Singer';
import Todo from './Todo';
import './ButtonStyle.css'
import Counter from './Counter';
import Users from './Users';

function App() {
  
  const singers = [
    {name: "Nogor Baul James", age: 60},
    {name: "Pritom Hasan", age: 35},
    {name: "Xefer Rohman", age: 32},
    {name: "Arjit Sing", age: 42},
  ];

  const handleClick = () => {
    alert('This is from Alert-1');
  }

  const handleClickWithParameters = (num1, num2) => {
    alert(num1 + num2);
  }


  return (
    <>
      {/* these are from inner page */}
      <Person></Person>
      <Student></Student>
      <Cow></Cow>
      <Cat></Cat>
      <Device name="Laptop" price="30k"></Device>
      <Device name="Mobile" price="15k"></Device>
      <Laptop company={"dell"} gen="8th"></Laptop>
      <Laptop company="hp" gen="7th"></Laptop>
      <Laptop company="macbook"></Laptop>


      {/* these are from outer page */}
      <Todo></Todo>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      {/* onClick event handler */}
      <button onClick={handleClick} className='btn'>Alert-1</button>
      <button onClick={() => alert('Alert-2 clicked!')} className='btn'>Alert-2</button>
      <button onClick={() => handleClickWithParameters(5, 3)} className='btn'>Alert-3</button>

      {/* useState || state management */}
      <Counter></Counter>

      {/* useEffect */}
      <Users></Users>
    </>
  )
}

function Person() {
  const person = {name: 'Myen Uddin', age: 20};
  return (
    <>
      <h3>I am {person.name} , age of {person.age}.</h3>
    </>
  )
}

// ---------------------- adding style -------------------->
function Student() {
  return (
    <div className='box'> 
      <h4>This is from student.</h4>
    </div>
  )
}
// "box" is a class styled in App.css file

function Cow() {
  const cowStyle = {
    border: '2px solid orange',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px'
  }
  return (
    <div style={cowStyle}>
      <h4>A cow has two legs.</h4>
    </div>
  )
}

function Cat() {
  return (
    <div style={{
      border: '2px solid tomato',
      borderRadius: '20px',
      margin: '20px',
      padding: '20px'
    }}>
      <h4>Meyaoo meyaoo</h4>
    </div>
  )
}

// --------------------- props ---------------------->
function Device(props) {
  return (
    <div>
      <h3>Device Name: {props.name} | Price: {props.price}</h3>
    </div>
  )
}

function Laptop({company="", gen="1st"}) {
  return (
    <div>
      <h3>Company: {company} | Gen: {gen}</h3>
    </div>
  )
}
// Props destructuring and setting a default value

export default App
