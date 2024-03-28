import React, {useState} from "react";

const WordForm = ({setSubmit, setWords}) => {
    const INITIAL_STATE = {
        COLOR : '',
        NOUN : '',
        NOUN2 : '',
        ADJECTIVE :''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const {name, value} =e.target;
        setFormData(formData => ({
            ...formData, [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWords(formData);
        setSubmit(true);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    id = "NOUN"
                    type = "test"
                    name = "NOUN"
                    placeholder = "NOUN"
                    value = {formData.NOUN}
                    onChange={handleChange}    
                />
                <input 
                    id = "NOUN2"
                    type = "text"
                    name = "NOUN2"
                    placeholder = "NOUN"
                    value = {formData.NOUN2}
                    onChange={handleChange}    
                />
                <input 
                    id = "ADJECTIVE"
                    type = "text"
                    name = "ADJECTIVE"
                    placeholder = "ADJECTIVE"
                    value = {formData.ADJECTIVE}
                    onChange={handleChange}    
                />
                <input 
                    id = "COLOR"
                    type = "text"
                    name = "COLOR"
                    placeholder = "COLOR"
                    value = {formData.COLOR}
                    onChange={handleChange}    
                />


                <button>Get Story!</button>
            </form>
        </>
    )

}

export default WordForm;