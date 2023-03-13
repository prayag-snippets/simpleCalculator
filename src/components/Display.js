import React,{useState, useEffect} from "react";
import "./Calculator.css";

const Display=()=>{

    const [input, setInput] = useState("0");

    const handleClick=(value)=>{
        (input == '0') ? setInput(value) : setInput((recentValue)=> recentValue + '' + value)
    }

    const handleClear=()=>{
        setInput("0");
    }

    const clearPrevInput=()=>{
        input.length <=1 ? setInput('0') : setInput(input.slice(0, -1));
    }

    const calculateValue = (input) =>{
        validateInput(input) ? setInput(eval(input).toFixed(2)) : alert("Can't Use Operators Before Numbers");
    }

    const validateInput = (input)=>{
        if(input[0] =="/" || input[0] =="*" || input[0] =="="){
            alert("Can't Use Operators Before Numbers")
            handleClear();
            return false;
        }else{
            return true;
        }
    }

    useEffect(() => {
        console.log(input)
      validateInput(input);
    }, [input])

    return <>
        <div className="calciScreen">
            <div className="inputScreen">
                {input}
            </div>
            <div className='buttonWrapper'>
            <div className='display-number'>
                <div className='btn danger' onClick={()=>handleClear()}>{"AC"}</div>
                <div className='btn' onClick={()=>clearPrevInput()}>{"<="}</div>
                <div className='btn success' onClick={()=>calculateValue(input)}>{"="}</div>
                <div className='btn operator' onClick={()=>handleClick("/")}>{"/"}</div>
            </div>
            <div className='display-number'>
                <div className='btn' onClick={()=>handleClick(7)}>{"7"}</div>
                <div className='btn' onClick={()=>handleClick(8)}>{"8"}</div>
                <div className='btn' onClick={()=>handleClick(9)}>{"9"}</div>
                <div className='btn operator' onClick={()=>handleClick("*")}>{"*"}</div>
            </div>
            <div className='display-number'>
                <div className='btn' onClick={()=>handleClick(4)}>{"4"}</div>
                <div className='btn' onClick={()=>handleClick(5)}>{"5"}</div>
                <div className='btn' onClick={()=>handleClick(6)}>{"6"}</div>
                <div className='btn operator' onClick={()=>handleClick("-")}>{"-"}</div>
            </div>
            <div className='display-number'>
                <div className='btn' onClick={()=>handleClick(1)}>{"1"}</div>
                <div className='btn' onClick={()=>handleClick(2)}>{"2"}</div>
                <div className='btn' onClick={()=>handleClick(3)}>{"3"}</div>
                <div className='btn operator' onClick={()=>handleClick("+")}>{"+"}</div>
            </div>
            <div className='display-number'>
                <div className='btn operator' onClick={()=>handleClick("( ")}>{"( "}</div>
                <div className='btn' onClick={()=>handleClick(0)}>{"0"}</div>
                <div className='btn operator' onClick={()=>handleClick(".")}>{"."}</div>
                <div className='btn operator' onClick={()=>handleClick(" )")}>{" )"}</div>
                
            </div>
        </div>
        </div>
    </>

}

export default Display;