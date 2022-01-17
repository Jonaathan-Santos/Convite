import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';



function Noivos (){
    return(
        <div className="noivos">
            <div className="brasao">
                <span className="t">
                    T
                </span>
                <span className="simbol">
                    |
                </span>
                <span className="j">
                    J
                </span>
            </div>
            <div className="nomes">
            <div className="nome1">
                <span className="talita">Talita</span>
            </div>
            <FavoriteIcon className="icon"/>
            <div className="nome2">
                <span className="jonathan">Jonathan</span>
            </div>
            </div>
        </div>
    )
}

export default Noivos;
