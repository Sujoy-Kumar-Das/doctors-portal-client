import { useEffect } from 'react';

const UseTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} - Doctor's portal`
    },[title])
};

export default UseTitle;