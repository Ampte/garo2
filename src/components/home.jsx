import React, { useState } from 'react'
import '/src/App.css'
import data from './data'

const Home = () => {
    const hint = document.querySelector(".hint");
    const chatBox = document.querySelector(".chat-box");
    const sidebar = document.querySelector(".sidebar");
    const [inputValue, setInputValue] = useState("");
    const [message, setMessage] = useState("");
    const [response, setResponse] = useState("");

    const open = () => {
        sidebar.style.display = 'block';
    };

    const close = () => {
        sidebar.style.display = 'none';
    }

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        hint.style.display = 'none';
        chatBox.style.display = 'block';
        setMessage(inputValue);
        setResponse("Loading...")
        setTimeout(() => {
            setResponse(data[inputValue.toLowerCase().trim()]);
        }, 2000);
    };
    return(
        <>
        <div className='home'>
            <div className='header'>
                <h1>Garo2</h1>
                <button className='bar' onClick={open}>
                <i class="fa-solid fa-bars-staggered" style={{
                    fontSize:'large'
                }}></i>
                </button>
            </div>
            <div className='sidebar'>
                <div className='sidebar-content'>
                    <h1>Garo2</h1>
                    <button className='xmark' onClick={close}>
                    <i class="fa-solid fa-xmark" style={{
                        fontSize: '30px'
                    }}></i>
                    </button>
                </div>
            </div>
            <div className='left-bar'>
               
            </div>
            <div className='right-bar'>
                
            </div>
            <div className='main'>
            <div className='info1'>
                    <h1>Garo2</h1>
                </div>
                <div className='chat-box'>
                    <div className='display-message'>
                        <p>{message}</p>
                    </div>
                    <div className='display-response'>
                        <p>{response}</p>
                    </div>
                </div>
                <div className='info' style={{textAlign: 'center'}}>
                    <p>&copy; Garo2 2025.</p>
                </div>
                <div className='hint'>
                        <div className='translate'>
                            <p>Translate Garo words to English</p>
                        </div>
                        <div className='dokbadale'>
                            <p> Search Dokbadale Seani</p>
                        </div>
                        <div className='aganmeapa'>
                            <p>Search Agan Meapa</p>
                        </div>
                    </div>
                <div className='input-form'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' onChange={handleChange} name='message' className='message-value' placeholder='Type to search...' required/>
                        <button type='submit' className='send-btn'><i class="fa-solid fa-arrow-up" style={{
                            fontSize: 'large'
                        }}></i></button>
                    </form>
                </div>
            </div>
            <div className='footer'>
                <p>&copy; Garo2 2025.</p>
            </div>
        </div>
        </>
    );
};
export default Home;