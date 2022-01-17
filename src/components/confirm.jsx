import { useState } from "react";
import emailjs from 'emailjs-com';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { useEffect } from "react";


function Confirm (){

    const param = new URLSearchParams(window.location.search)
    const nomes = param.get('nomes')
    const convidados = nomes.split('-')
    const [confirm, setConfirm] = useState(false);
    const [cheked, setCheked] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem('confirmacao') === null){

            localStorage.setItem('confirmacao', 'false' )
        }
    }, [])

    useEffect(()=>{
        if (localStorage.getItem('confirmacao') === 'false'){

            setCheked(false)
        }
        if (localStorage.getItem('confirmacao') === 'true'){

            setCheked(true)
        }
    },[confirm])


    function btnClik () {
        
        setConfirm(true)
    }

    function fechar (){
        setConfirm(false)
    }
    
    function sendEmail(e) {
        e.preventDefault();
        e.target.message.value = `${convidados}`
        e.target.user_name.value = 'isano'
        e.target.user_email.value = 'joo.santos8psy@gmail.com'
        emailjs.sendForm(
            'service_ebfklwe',
            'template_85ugcy5',
            e.target,
            'user_gDfiWBcvA1ijknOJ1DVYL')
            .then((result) => {
                console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        localStorage.setItem('confirmacao', 'true')
        setCheked(true)
        
    }
    
    if (!confirm){ 
        return(
            <div className="btn-presenca" onClick={btnClik}>
                <CheckCircleIcon className='icon'/>
                <span className="nome">Confirmar presença</span>
            </div>

        )
}

if (confirm) {



    if(cheked){

        return(

            <div className="confirm">
                <button className="btn-fechar" onClick={fechar}>
                    <CancelIcon className='icon'/>
                </button>

                <div className="convidados">
                    <span className="msg">Presença confirmada</span>
                    <span className="nomes">Obrigado!</span>
                    <span className="msg2">Contamos com a presença de você(s) em nosso mais especial dia</span>

                </div>

            </div>
        )



    }
    else{

        return(
            <div className="confirm">
                <button className="btn-fechar" onClick={fechar}>
                    <CancelIcon className='icon'/>
                </button>
    
                    
                <div className="convidados">
                    <span className="msg">Este convite é valido para:</span>
                    {convidados.map(convidado =>(<span className="nomes">{convidado}</span>))}
                </div>
                
                <form className="contact-form" onSubmit={sendEmail}>
                    
    
                    <input type="hidden" name="contact_number" />
                    <input type="hidden" name="user_name" />
                    <input type="hidden" name="user_email" />
                    <input type="hidden" name="message" />
                    <button className="btn-submit" type="submit" >Confirmar</button>
                </form>
                    
            </div>
    
        )
    }


        
    }
   




}

export default Confirm;