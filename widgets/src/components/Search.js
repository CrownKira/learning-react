import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    // adding a second useEffect to handle debouncing.
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            });

            setResults(data.query.search);
        };
        if (debouncedTerm) {
            // solve first render delay, since there is debouncedTerm is defined in the first render
            // solve empty srsearch, since it is wrapped in the if condition
            search();
        }
    }, [debouncedTerm]);

    // useEffect(() => {
    //     const search = async () => {
    //         const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //             params: {
    //                 action: 'query',
    //                 list: 'search',
    //                 origin: '*',
    //                 format: 'json',
    //                 srsearch: term
    //             }
    //         });
    //         setResults(data.query.search);
    //     }

    //     if (term && !results.length) {
    //         // first time searching
    //         // avoid delay in the first search
    //         search();
    //     } else {
    //         const timeOutId = setTimeout(() => {
    //             if (term) {
    //                 // avoid empty srsearch
    //                 search();
    //             }
    //         }, 500);

    //         return () => { clearTimeout(timeOutId) };
    //     }
    //     // search();
    // }, [term]);

    const renderedResult = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    {/* {result.snippet} */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div >
        );
    });

    return (
        <div>
            <div className="ui form ">
                <div className="field">
                    <label htmlFor="">Enter search term</label>
                    <input
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        type="text" className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
    );
};

export default Search;