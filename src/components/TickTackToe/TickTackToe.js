 import React, {useState} from 'react';
 import "./TickTackToe.css";

 export default function TickTackToe() {
    
    // Player Turn State
    const [palyerTurn,setplayerTurn] = useState("X");
    const [cellValue, setCellValue] = useState(Array(9).fill(""));
    const [winMessage, setWinMessage] = useState("");

    const resetGame = () => {
         setplayerTurn("X");
         setWinMessage("");
         setCellValue(Array(9).fill(""));  

    }

    // Winner Selection

    // winner cellIndices

    // across:[
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8]
    // ]

    // down: [
    //     [0,3,6],
    //     [1,4,7],
    //     [2,5,8]
    // ]

    // horizontal: [
    //     [0,4,8],
    //     [2,4,6]
    // ]

    const winner = (cellValue) => {
        if(
            cellValue[0] === cellValue[1] &&
            cellValue[1] === cellValue[2] &&
            cellValue[0] !== ""
        )
        {
            setWinMessage(`${cellValue[0]} has won`);
        }
        else if(
            cellValue[3] === cellValue[4] &&
            cellValue[4] === cellValue[5] &&
            cellValue[3] !== ""
        )
        {
            setWinMessage(`${cellValue[3]} has won`);
        }
        else if(
            cellValue[6] === cellValue[7] &&
            cellValue[7] === cellValue[8] &&
            cellValue[6] !== ""
        )
        {
            setWinMessage(`${cellValue[6]} has won`);
        }
        else if(
            cellValue[0] === cellValue[3] &&
            cellValue[3] === cellValue[6] &&
            cellValue[0] !== ""
        )
        {
            setWinMessage(`${cellValue[0]} has won`);
        }
        else if(
            cellValue[1] === cellValue[4] &&
            cellValue[4] === cellValue[7] &&
            cellValue[1] !== ""
        )
        {
            setWinMessage(`${cellValue[1]} has won`);
        }
        else if(
            cellValue[2] === cellValue[5] &&
            cellValue[5] === cellValue[8] &&
            cellValue[2] !== ""
        )
        {
            setWinMessage(`${cellValue[2]} has won`);
        }
        else if(
            cellValue[0] === cellValue[4] &&
            cellValue[4] === cellValue[8] &&
            cellValue[0] !== ""
        )
        {
            setWinMessage(`${cellValue[0]} has won`);
        }
        else if(
            cellValue[2] === cellValue[4] &&
            cellValue[4] === cellValue[6] &&
            cellValue[2] !== ""
        )
        {
            setWinMessage(`${cellValue[2]} has won`);
        }
    }


    function handleClick(cellNum){

        if(cellValue[cellNum] !== ""){
            alert("already clicked this cell");
            return;
        }

        let copyCellValue = [...cellValue];



        if(palyerTurn === "X") {
            copyCellValue[cellNum] = "X"; 
            setplayerTurn("O");
        } else {
            copyCellValue[cellNum] = "O"; 
            setplayerTurn("X");
        }
        console.log(copyCellValue)
        setCellValue(copyCellValue);

        winner(copyCellValue);
    }
    // Main Cell
    const Cell = ({cellNum}) => {
        return (
        <td className = "cell" 
        onClick=
        { () => handleClick(cellNum) } >
        { cellValue[cellNum] }
        </td>
        );
    }

    return(
        <div>
            <h1>Tick Tack Toe</h1>
        <div className = "cellContainer">
        
            <table>
                <tbody>
                    <tr>
                    <Cell cellNum={0}/>
                    <Cell cellNum={1}/>
                    <Cell cellNum={2}/>
                    </tr>
                    <tr>
                    <Cell cellNum={3}/>
                    <Cell cellNum={4}/>
                    <Cell cellNum={5}/>
                    </tr>
                    <tr>
                    <Cell cellNum={6}/>
                    <Cell cellNum={7}/>
                    <Cell cellNum={8}/>
                    </tr>
                </tbody>
            </table>
        </div>
        {
            winMessage && (
                <div>
                    <h1>{winMessage}</h1>
                    <div class = "btn"><button onClick = {resetGame}>Reset Game</button> </div>
                </div>
            )
        }
        </div>
    );
 }