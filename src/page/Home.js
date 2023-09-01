import React, {useState} from 'react';

const Home = () => {
    const [fre, setFre] = useState({
        image: 'https://ss.sport-express.ru/userfiles/materials/168/1681008/large.jpg'
    })

    return (
        <div style={{
            textAlign: 'center'
        }}>
            <p style={{
                fontSize: '19px',
                marginBottom: '15px'
            }}>
                Состав японии котоорая взяла 3 место на лиге нации
            </p>
            <img src={fre.image} alt={fre.image}/>
        </div>
    );
};

export default Home;