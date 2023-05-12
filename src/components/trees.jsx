/*Sukurti aplikaciją, 
atvaizduojančią žalią stačiakampį (laukas) padalinta į tris stulpelius (stačiakampius)
 ir tris mygtukus “ąžuolas”, “beržas” ir “uosis”. 
 Paspaudus vieną iš mygtukų žaliame kvadrate atsiranda mažesnis kvadratas su medžio pavadinimu viduje. 
 Svarbu, kad visi medžiai žaliame kvadrate būtų suskirstyti į tris stulpelius pagal medžio pavadinimą.
 */

 import { useState } from 'react';

export default function Trees() {

    const [rectangleAzuolas, setRectangleAzuolas] = useState([]);
    const addAzuolas = _ => setRectangleAzuolas(r => [...r, rectangleAzuolas]);
    
    const [rectangleBerzas, setRectangleBerzas] = useState([]);
    const addBerzas = _ => setRectangleBerzas(r => [...r, rectangleBerzas]);

    const [rectangleUosis, setRectangleUosis] = useState([]);
    const addUosis = _ => setRectangleUosis(r => [...r, rectangleUosis]);

    return (
        <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 30, margin: "30px 0"}}>
            
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, margin: "30px 0"}}>
                <div className="rectangle-green" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 30, margin: "30px 0"}}>
                {
                    rectangleAzuolas.map((_, i) => <div className="square-black-mini" key={i}>Ąžuolas</div>)
                }
                </div>
                <button className="button-trees" onClick={addAzuolas}>Ąžuolas</button>
            </div>

            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, margin: "30px 0"}}>
                <div className="rectangle-green" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 30, margin: "30px 0"}}>
                {
                    rectangleBerzas.map((_, i) => <div className="square-black-mini" key={i}>Beržas</div>)
                }  
                </div>
                <button className="button-trees" onClick={addBerzas}>Beržas</button>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 30, margin: "30px 0"}}>
            <div className="rectangle-green" style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 30, margin: "30px 0"}}>
                {
                    rectangleUosis.map((_, i) => <div className="square-black-mini" key={i}>Uosis</div>)
                } 
                </div>
                <button className="button-trees" onClick={addUosis}>Uosis</button>        
            </div>
        </div>
    );
}