import React, { useState } from 'react'
import './component.css'

const Home = () => {
    const [inputValue, setInputValue] = useState();
    const [message, setMessage] = useState();
    const [reply, setReply] = useState();

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(inputValue);
        setReply('Getting response....');
        setTimeout(() => {
            setReply(inputValue);
        }, 3000)
    }
    return(
        <>
        <div className='home'>
            <div className='header'>
                <button className='bar'>
                <i class="fa-solid fa-bars-staggered" style={{
                    fontSize: 'large'
                }}></i>
                </button>
                <h1>Garo2</h1>
                <button className='dot'>
                <i class="fa-solid fa-ellipsis-vertical" style={{
                    fontSize: 'large'
                }}></i>
                </button>
            </div>
            <div className='sidebar'>
                <h1>Garo2</h1>
            </div>
            <div className='main'>
               <div className='message-response-interface'>
                <div className='prompt'>
                    <p>Hi, how can I help you today</p>
                </div>
               <div className='message'>
                    <p>{message}</p>
                </div>
                <div className='reply'>
                    <p>{reply}</p>
                </div>
               </div>
               <div className='message-input'>
               <form onSubmit={handleSubmit}>
                    <input type='text' onChange={handleChange} name='message' placeholder='Type your message....'/>
                    <button type='submit' className='submit'><i class="fa-solid fa-paper-plane"
                    style={{
                        fontSize: 'large'
                    }}></i></button>
                </form>
               </div>
            </div>
        </div>
        </>
    );
};

export default Home;