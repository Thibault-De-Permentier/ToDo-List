import React from 'react';
import  ReactDOM from 'react-dom/client';
import { Checkbox } from "antd";


class ListTask extends React.Component{
    render(){
        let listTasks = [];
        
        for (let i = 0; i < this.props.tasks.length; i++) {
           listTasks.push(<div className="task"> 
           <Checkbox checked={this.props.tasks[i]['isChecked']}></Checkbox>
           <p>{this.props.tasks[i]['title']}</p>
           <div className="movingArrow">
               <button onClick={null}></button>
               <button onClick={null}></button>
           </div>
       </div>)
        }
        return(
            <div id='list'>
                {listTasks}
            </div>
        )
    }
}


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem('tasks'))
        };
    }
    addTask(){
        tasks.push({"title":document.getElementById('newTask').nodeValue, "isChecked":false});
    }

    render(){
        return(
            <div>
                <header>

                </header>
                    <ListTask tasks={this.state.tasks}/>
                <footer>
                    <input id='newTask' type={'text'}/>
                    <button onClick={this.addTask}>+</button>
                </footer>
            </div>    
        )
    }
}

//==================================================================================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

var tasks = [{"title":"1.Idée","isChecked":true},{"title":"2.Marché","isChecked":true},{"title":"3.Wireframe","isChecked":true},{"title":"4.Design","isChecked":true},{"title":"5.Landingpage","isChecked":true},{"title":"6.Développement","isChecked":false},{"title":"7.Publish","isChecked":false},{"title":"8.Pub","isChecked":false},{"title":"9.Feedback","isChecked":false}]
localStorage.setItem('tasks',JSON.stringify(tasks))