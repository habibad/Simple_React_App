import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  let isClick = true;
    
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }

    const onHandleClick = ()=>{
      let containsText = text;
      if(isClick === true){
        console.log("on click listener is worked");
        let newText = text.toUpperCase();
        setText(newText);
        isClick=false;
      }else{
        console.log("on click listener is not worked");
        let newText = text.toLowerCase();
        setText(newText);
        isClick=true;
      }
    }

    const [text, setText] = useState("Enter the from text here: ");

  return (
    <>
    < div style={{color: props.mode === 'light'? 'black':'white'}} >
        <div className='container'>
            <h1>{props.heading}</h1>
        <textarea style={{color: props.mode === 'light'? 'black':'white',backgroundColor: props.mode === 'light'? 'white':'#03346E'}} value ={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
        <button className='btn btn-primary mx-3 my-3' onClick={onHandleClick}>click button for the capitilize text</button>
        </div>
        <div className='container' >
            <h1>The text summary</h1>
            <p>{text.split(" ").length} words and {text.length} character</p>
            <p>takes {0.008 * text.split(" ").length} minutes for words count</p>
            <h2>Preview Text</h2>
            <p>{text.length>0?text:'Write something in the Textbox Then see the Text Preview'}</p>
        </div>
      </div>
    </>
  )
}
