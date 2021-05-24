import './App.css';

var groups=[
  {
    id:1, title:"Group1"
  },
  {
    id:2, title:"Group2"
  },
  {
    id:3, title:"Group3"
  }
];

function Group(props){
  return(
    <>
    <div>
      {props.title}
      <hr></hr>
    </div>
    </>
  )
}

function GroupList(props){
  return(
    <div>
      {props.data.map(i=>(<Group key={i.id}{...i}/>))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
     <GroupList data={groups}/>
    </div>
  );
}

export default App;
