/* 2. Sukurti aplikaciją su vienu mygtuku “pridėti”. 
Paspaudus mygtuką, atsirastų juodas kvadratas su mygtuku “+” ir skaičiumi 0 viduje. 
Paspaudus kelis kartus mygtuką pridėti atsirastų keli tokie juodi kvadratai, paspaudus 3 - atsirastų 3 ir t.t. 
Spaudant mygtuką “+” kiekviename iš juodų kvadratų jų viduje
 esantis skaičius didėtų vienetu (kiekviename kvadrate atskirai).*/

import { useState } from 'react';

function SubState() {
    const [count, setCount] = useState(0);
    const add = _ => setCount(s => s + 1);
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", padding: "30px 0 0 0"}}>
            <button className='button-small' onClick={add}>+</button>
            <p>{count}</p>
        </div>
    )
}

export default function BlackSquare() {

    const [rect, setRect] = useState([]);
    const add = _ => setRect(r => [...r, <SubState />]);

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center", margin: "30px"}}>
            <button className='button-trees' onClick={_=>add()}>Pridėti</button>
            <div style={{display: "flex", flexWrap: "wrap", margin: "10px"}}>
                {
                    rect.map((masyvoPirmasNarys, i) => <div className="square-black" key={i}>{masyvoPirmasNarys}</div>) // .map callbackfunction
                }
            </div>
        </div>
    );
}