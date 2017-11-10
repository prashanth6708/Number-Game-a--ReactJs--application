import React, { Component } from 'react';
import QuizOptions from "./QuizOptions";

class Quiz extends Component{

    constructor(props){
        super(props);
        let riddle=this.playgame();
        let correct=false;
        let gameOver=false;
        this.state={riddle,correct,gameOver};
        this.renderOptions=this.renderOptions.bind(this);
        this.checkResults=this.checkResults.bind(this);
    }

    randomNumber(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    generateRandomOptions(sum){
        let resultArray=[];
        let randomNumberArray=[];

        while(randomNumberArray.length<=3){
            let randomNumber=this.randomNumber(1,19);
            if(randomNumberArray.indexOf(randomNumber)> -1)continue;
            randomNumberArray.push(randomNumber);
        }
        for(let i=0;i<3;i++){
            let addSubtract=this.randomNumber(0,1);
            let result =sum;
            if(addSubtract===1){
                //add the numbers to result
                result+=randomNumberArray[i];
                resultArray.push(result);
            }
            else{
                //subtract the numbers from result
                result-=randomNumberArray[i];
                resultArray.push(result);
            }

        }
        return resultArray;
    }
    playgame(){
        let field1=this.randomNumber(1,50);
        let field2=this.randomNumber(1,50);
        let result=field1+field2;
        let resultArray=this.generateRandomOptions(result);
        resultArray.push(result);
        resultArray.sort(function (a,b){
            return 0.5 -Math.random()
        });
        console.log(resultArray);
        let riddle = {
            resultsArray:resultArray,
            field1:field1,
            field2:field2,
            answer:result
            };
            return riddle;
        }
    checkResults(option){
        console.log('option clicked is '+option);
        if(this.state.riddle.answer===option){

            console.log('correct answer');
            this.setState({correct:true,gameOver:true})
        }else{
            console.log('wrong answer');
            this.setState({correct:false,gameOver:true})
        }
    }
    renderOptions(){
        return(
            <div className="options">
                {this.state.riddle.resultsArray.map((option,i)=>
                    <QuizOptions option={option} key={i} checkResults={(option) => this.checkResults(option)}/>
                )}
            </div>
        );
    }
    render(){
        return(
            <div className="quiz">
                <div className="quiz=content">
                <p className="question">what is the sum of  <span className="text-info"> {this.state.riddle.field1}</span> &<span className="text-info">{this.state.riddle.field2}</span> ?
                </p>
                    {this.renderOptions()}
                </div>
                    <div className="play-again">
                        <a className="button">
                            <b>Result:{this.state.correct ? "Congratualtions!":"sorry ,Try Again!"}</b><br/>
                        </a>
                    </div>
                </div>
        )

    }
}
export default Quiz;