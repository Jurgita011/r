/*Sukurti aplikaciją su vienu mygtuku “+” ir pradiniu skaičiumi 0. 
Paspaudus mygtuką skaičius didėtų vienetu. Panaudoti localStorage ir padaryti taip, 
kad skaičiavimai kiekvieną kartą perkrovus puslapį prasidėtų ne nuo 0,
 o nuo prieš tai buvusio skaičiaus */
 import{useState} from "react";
 export default function State() {

    const n = localStorage.getItem('numberValue') === null ? 0 : JSON.parse(localStorage.getItem('numberValue')); // null-niekas

    const [number, setNumber] = useState(n);
    const add = () => setNumber(n => n + 1);

    localStorage.setItem('numberValue', JSON.stringify(number));

    return (
        <>
            <p>{number}</p>
            <button className='button-trees' onClick={add}>ADD</button>
        </>
    )
        
}