import React from 'react';
function Food({name, picture}){
    return (
        <div>
            <h1> I like {name}</h1>
            <img src={picture} />
        </div>      
    );
}

const foodILike = [
    {
        name : "samgupsal",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F7%2F77%2FSamgyeopsal-gui.jpg%2F1200px-Samgyeopsal-gui.jpg&f=1&nofb=1"
    },
    {
        name : "babeku",
        image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fnews.warwickshire.gov.uk%2Fwp-content%2Fuploads%2F2012%2F05%2FBBQ.jpg&f=1&nofb=1"
    },
    {
        name : "pokcap",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F6%2F64%2FPork_chops_served.jpg%2F1200px-Pork_chops_served.jpg&f=1&nofb=1"
    },
    {
        name : "boccam",
        image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.fmkorea.com%2Ffiles%2Fattach%2Fnew%2F20170508%2F486616%2F38307501%2F647835939%2F5a36febeaa11240030120a3f628aa65d.jpg&f=1&nofb=1"

    },
    {
        name : "jokbal",
        image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile208.uf.daum.net%2Fimage%2F11678E4B4D8ABF2A28F9C2&f=1&nofb=1"
    }
];

function App() {
    return ( 
        <div> 
            {
                foodILike.map((dish)=> <Food name={dish.name} picture={dish.image}/>)
            }
        </div>
    );
}

export default App;