import react, { useState } from "react"
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Board( { board } ) {
    return (
        <div className="container" >
            {board.map( (row, index) => {
                return < div key={index} className="row" style={{ heigth:'50px', width:'602px'}} >
                    {
                        row.map( (num, ind) => {
                            return (
                              <div
                                  key={ind}
                                  className="col-sm"
                                  style={{maxWidth:'50px', border:'1px solid black'}}
                                  onClick={() => console.log(`You click ${num}`)}
                               >
                                 {num}
                              </div> 
                            )
                        })
                    }
                </div>
            })}
        </div>

    )
 }