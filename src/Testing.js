import {useEffect, useState} from "react";
function Testing(){

/*const [item, setItems] = useState(1);*/

useEffect(() =>{
    localStorage.setItem('item', JSON.stringify(5));
})

    return(<>
        <div>4</div>
        <button>hi</button>
    </>);
}

export default Testing;