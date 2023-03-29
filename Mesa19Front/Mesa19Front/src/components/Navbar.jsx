import React, { useContext } from 'react';
import "../App.css";
import LanguageContext from '../context';

const Navbar = () => {
    const { language, handleChangeLA } = useContext(LanguageContext);
    const { text, id } = language;

    const handleChangeLanguage = () => {
        if (id === 'EN') {
          handleChangeLA('portuguese');
        } else if (id === 'PTBR') {
          handleChangeLA('spanish');
        } else {
          handleChangeLA('english');
        }
    };
    
    return (
        <div className="navbar">
            <p>{text.home}</p> 
            <p>{text.current}: {id}</p>
            <button onClick={handleChangeLanguage}>{text.button}
            </button>
        </div>
    )
}

export default Navbar
