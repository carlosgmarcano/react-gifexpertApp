import {useState, useEffect} from 'react';
import { getDifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    useEffect(() => {
        getDifs(category).then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
        })
    },[category]);

    return state;
}