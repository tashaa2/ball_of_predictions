import React from 'react';
import './App.css';

export class Wrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sydba: ["у Вас все получится","прекрасный день","чудесное настроение","хорошо выглядите","будете здоровы","влюбитесь","хорошая погода"],
            predskazanie: [],
        }
    }

    click = () => {
        this.setState((prevState)=>{
            let sydba2 = prevState.sydba;            

            return (
                {predskazanie: [ ...prevState.predskazanie, sydba2[Math.floor(Math.random()*sydba2.length)]] }                               
            )
            
        })  
        console.log(this.state.predskazanie)      
    }

    render() {

        return (
            
            <div className="block">
                <div className="picture">
                  <div className="div" onClick={this.click}>
                      {this.state.predskazanie?.[this.state.predskazanie.length - 1] || ''} 
                      {/* проверка чтоб не было отрицательного числа */}
                  </div>
                </div>

                <div className="sydba">
                    Ваши прошлые предсказания:                    
                    <textarea value={this.state.predskazanie.join("\n")}/>
                    {/* в текстареа нужно обращаться в реакте при помощи value */}
                </div>
            </div>

        )

    }
}

