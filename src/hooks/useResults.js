import {useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hi there!');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'wroclaw'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong. Please, try again later');
        }
    };

    // Call searchApi when component
    // is first rendered. BAD CODE!
    // searchApi('pasta');
    useEffect(() => {
        searchApi('pizza');
    }, []);

    return [searchApi, results, errorMessage];
};