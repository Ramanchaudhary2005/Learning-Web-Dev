import { useState } from 'react';

const App = () => {
    const [Name, setName] = useState('');
    const [City, setCity] = useState('');
    const [DisplayName, setDisplayName] = useState('');
    const [DisplayCity, setDisplayCity] = useState('');

    const handleSearchname = (e) => {
        setName(e.target.value);
    };

    const handleSearchcity = (e) => {
        setCity(e.target.value);
    };

    const show = () => {
        setDisplayName(Name);
        setDisplayCity(City);
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Enter Name" 
                onKeyUp={handleSearchname} 
            />
            <input 
                type="text" 
                placeholder="Enter City" 
                onKeyUp={handleSearchcity} 
            />
            <button onClick={show}>Display Name & City</button>
            <h2>{DisplayName}</h2>
            <h2>{DisplayCity}</h2>
        </div>
    );
};

export default App;
