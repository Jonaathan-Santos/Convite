import { useState } from "react";
import RedeemIcon from '@material-ui/icons/Redeem';
import CancelIcon from '@material-ui/icons/Cancel';


function Listas (){

    const [confirm, setconfirm] = useState(false)

    function fechar (){
        setconfirm(false)
    }

    function abrir (){
        setconfirm(true)
    }



    if(!confirm){

        return(
            <div className="btn-listas" onClick={abrir}>
                 <RedeemIcon className='icon'/>
    
                <span className="nome">Lista de presentes</span>
            </div>
        )
    }

    if (confirm){

        return(
            <div className="listas">

                <CancelIcon className="btn-fechar" onClick={fechar}>
                </CancelIcon>

                <div className="listas-div">

                    <a href='https://listas.casasbahia.com.br/jonathanetalita'>
                        <div className="lista">
                        <span className="nome">Casas Bahia</span>
                        </div>
                    </a>
                    <a href='http://finalfeliz.de/talita--jonathan'>
                        <div className="lista">
                        <span className="nome">Magazine Luiza</span>
                        </div>
                    </a>
                </div>
    

                <div className="pix">
                    <h2>PIX</h2>
                    <span>talitan222@gmail.com</span>
                    <span>Talita de Brito Nascimento</span>

                </div>
            </div>
        )
    }
}

export default Listas;