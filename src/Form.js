import React,{useState} from "react";

export default function Form({setCards, checkCard}) {

    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');


    const handleTitleChange = e => {
        setFormTitle(e.target.value);
    }

    const handleContentChange = e => {
        setFormContent(e.target.value);
    }
    
    const [counter, setCounter] =React.useState(1);

    const handleSubmit = event => {
        let ssss = checkCard();
        console.log(ssss);
        event.preventDefault();
        if(ssss.length >= 5){
            alert("Nikoumouk");
        }else{
            setCounter(counter + 1)
            setCards(
                cacapipi => [{title: formTitle, content: formContent, id : counter}, ...cacapipi]
            );
            setFormTitle("");
            setFormContent("");
        }
    }

    return (
    <form className="my-5 mx-auto" style={{maxWidth: '600px'}} onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" onChange={handleTitleChange} value={formTitle}/>
        </div>
        <div className="mb-3">
            <label htmlFor="content" className="form-label">Content</label>
            <textarea type="text" className="form-control" rows="5" id="content" onChange={handleContentChange} value={formContent}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>

    )

}