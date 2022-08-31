import * as React from 'react';
import './style.css';


function Newx (props) {
  return (
    <ul>
    {props.list.map(function (item) {
      return (
        <div>
          <li key={item.objectID}> 
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_components}</span>
            <span>{item.points}</span>
          </li>
        </div>
      );
    })}
  </ul>
  );
}

const Search = () => {
  const chgHandler = (event) => {
    console.log(event.target.value);
  }
  return (
    <div>
            <label htmlFor="search">Search : </label>
      <input id="search" type="text" onChange={chgHandler} />
    </div>
  )
}
export default function App() {
  const stories = [
    {
      title: 'Python',
      url: 'https://python.org',
      author: 'Johnie Walker',
      num_components: 5,
      points: 9,
      objectID: 0,
    },
    {
      title: 'React',
      url: 'https://reactjs.org',
      author: 'Jordan Walke',
      num_components: 3,
      points: 4,
      objectID: 1,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org',
      author: 'Andrew clarke',
      num_components: 2,
      points: 5,
      objectID: 2,
    },
  ];
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <Newx list={stories}/>
    </div>
  );
}
