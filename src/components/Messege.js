import React, {useEffect} from 'react';

const MessegeBox = ({fn,arg,messege}) => {
    useEffect(() => {
        setTimeout(fn,1000);
    }, [arg]);

    return ( 
        <div className="messegeBox">
            <p>{messege}</p>
        </div>
    );
}
 
export default MessegeBox;