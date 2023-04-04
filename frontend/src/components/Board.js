import React,{useState,useEffect} from "react";
import CreateBoard from "../Utils/CreateBoard";
function Board() {
    const [grid,setGrid]=useState([]);

    const style={
        display : 'flex',
        flexDirection : 'row',

    }
    useEffect(()=>{
        function freshBoard(){
            const newBoard=CreateBoard(10,10,20);
            setGrid(newBoard);
        }
        freshBoard();
    },[]);
    const updateFlag=(e) => {
        e.preventDefault();
        console.log("Right Click");
    }
    

    return (
        <div className="parent">
            {grid.map(singlerow=>{
                return (
                    <div style={style}>
                        {singlerow.map(singlecol=>{
                          return  <Cell details={singlecol} updateFlag={updateFlag}/>
                                
                        })}
                    </div>
                )
            })}
        </div>
    ) 

}
export default Board; 



