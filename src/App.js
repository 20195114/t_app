import './App.css';
import React from 'react';
//./를 쓰는 이유는 이는 파일이름임을 강조하기위해 쓴다 없어도 상관 없음
import ToDo from "./ToDo";
//import Sample from './Sample';

class App extends React.Component {
  constructor(props) {
    super(props)
    //this.state = {item:{id:0, "title": "Hello React", "done":true}
  this.state = {items:[{id :0 , "title": "Hello React", "done":false},
                       {id :1 , "title": "Hello vue", "done":false},
                       {id :2 , "title": "Hello angular", "done":false}
]}

  }
  render(){

 //배열을 순회하면서 출력할 내용을 생성
 //item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
 //배열을 순회하면서 출력물을 만들 때는 key를 설정해주어야 합니다.
 //key를 설정하지 않으면 출력애는 문제가 없지만 콘솔에 에러가 출력됩니다.
  let display = this.state.items.map((item, idx)=>(
    <ToDo item ={item} key ={item.id}/>
  ));
  return (
      <div className='App'>
      {display}
      </div>
   
  );
  }
}

export default App;
