import {useCallback,useState} from 'react'
import { useDispatch } from 'react-redux';
import { mailActions } from '../Store/mail-slice';
import { json } from 'react-router-dom';

const useHttp =()=>{
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const senRequest = useCallback(async(config)=>{
        try{
            if(config.method.toUpperCase() === 'GET'){
                const response = await fetch(config.url);
                const data = await response.json();
                if(response.ok){
                    dispatch(mailActions.replaceMailList({
                        mails: data.mails || [],
                        totalMails: data.totalMails || 0,
                    }));
                    console.log(data.mails);
                }else{
                    throw new Error("Getting data failed");
                }
            }else if(config.method.toUpperCase() === 'PUT'){
                if(config.allMails.length!==0){
                    const response = await fetch(config.url,{
                        method:"PUT",
                        body: JSON.stringify(
                    {
                        mails:config.allMails,
                        totalMails:config.totalMails
                    }
                ),
                    headers : {
                     'Content-Type': 'application/json'    
                    }
                    });
                    if(response.ok){
                        console.log("sent data")
                    }else{
                        throw new Error("sending data failed");
                    }

                }

            }
        }catch(error){
            console.log(error);
        }
    })
    return senRequest;
}

export default useHttp;