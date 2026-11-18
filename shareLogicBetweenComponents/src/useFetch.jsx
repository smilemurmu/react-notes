import {useState, useEffect} from 'react';

// creat a custom hook
function useFeatch(url) {

    // create state to store the data
    const [data, setData] = useState([]);

    // create state to store the loading state
    const [loading, setLoading] = useState(true);

    // create state to store the error state
    const [error, setError] = useState("");

    // use useEffect to fetch the data
    useEffect(() => {

        // creat a async function 
        const featchData = async () => {

            try {

                //showing the loading state
                setLoading(true);

                //clear the error state
                setError("");

                // waiting for the server response
                const response = await fetch(url);
            }
        }
    }, [url]);
}