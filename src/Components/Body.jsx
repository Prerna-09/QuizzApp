import "./style.css"
import {data} from '../assets/data';
import { useState, useEffect } from "react";

const Body = () => {

    let[index, setIndex] = useState(0);
    let[question, setQuestion]=  useState(data[index]);
    let[lock, setLock] = useState(false)

    useEffect(() => {
        // Remove "correct" and "incorrect" classes when the question changes
        const answers = document.querySelectorAll(".answers li");
        answers.forEach(answer => {
            answer.classList.remove("correct", "incorrect");
        });
    }, [index]);


    const checkAns = (e, ans)=>{

        if(lock===false){
            if(question.ans===ans){
                e.target.classList.add("correct")
                setLock(true)
            }
            else{
                e.target.classList.add("incorrect")
                setLock(true)
            }
        }

    }



    const handleClick = () =>{
   if(index=== data.length-1){
    setIndex(0);
    setQuestion(data[0]);
   }else{
        setIndex(index +1)
        setQuestion(data[index+1])
   }
        setLock(false)
       
    }







  return (
    <>
        <div className="body">

        <div className="question">
            <h2>{index+1}. {question.question}</h2>
        </div>    

        <div className="answers">
            <ul>
              <li onClick={(e)=> {checkAns(e, 1)}}>{question.option1}</li>
              <li   onClick={(e)=>{checkAns(e, 2)}}>{question.option2}</li>  
              <li   onClick={(e)=>{checkAns(e, 3)}}>{question.option3}</li>  
              <li   onClick={(e)=>{checkAns(e, 4)}}>{question.option4}</li>  
            </ul>

            </div>


                <div className="last">
                <button  onClick={handleClick} className=" button">Next</button>
                <div className="lastp">
                <p>{index+1} of 5 Questions</p>
               </div>
            </div>
        </div>
    </>
  )
}

export default Body