import React from 'react';
import  ReactDOM from 'react-dom/client';
import { Checkbox } from "antd";
import { changeConfirmLocale } from 'antd/es/modal/locale';


class ListTask extends React.Component{
    moveUpTask(i){
        if(i == 0)
            return;
        this.props.tasks[i] = [this.props.tasks[i-1], this.props.tasks[i-1] = this.props.tasks[i]][0];
        this.forceUpdate();        
    }
    moveDownTask(i){
        if(i == this.props.tasks.length-1)
            return;
        this.props.tasks[i] = [this.props.tasks[i+1], this.props.tasks[i+1] = this.props.tasks[i]][0];
        this.forceUpdate();        
    }
    onChangeBox(i){
        this.props.tasks[i]['isChecked'] = !this.props.tasks[i]['isChecked'];
        //this.forceUpdate();
    }

    render(){
        let listTasks = [];
        for (let i = 0; i < this.props.tasks.length; i++) {
           listTasks.push(<div className="task"> 
           <Checkbox checked={this.props.tasks[i]['isChecked']} onClick={this.onChangeBox(i)}></Checkbox>
           <p>{this.props.tasks[i]['title']}</p>
           <div className="movingArrow">
               <button onClick={() => this.moveUpTask(i)}>UP</button>
               <button onClick={() => this.moveDownTask(i)}>DOWN</button>
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
        this.addTask = this.addTask.bind(this);
    }
    addTask(){
        let temp = this.state.tasks;
        let tempTitle = this.state.tasks.length + 1 + '.' + document.getElementById('newTask').value;
        temp.push({"title":tempTitle, "isChecked":false});
        this.setState({tasks:temp});
        document.getElementById('newTask').value = "";
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }

    render(){
        return(
            <div>
                <header>
                    <div>{this.state.tasks.filter(task => task.isChecked == true ).length}</div>
                    <div>/</div>
                    <div>{this.state.tasks.length}</div>
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