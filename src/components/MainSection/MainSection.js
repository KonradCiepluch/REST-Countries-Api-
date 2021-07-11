import React, {useEffect, useState} from 'react';
import { Wrapper, Countries, Preload, Button } from './MainSection.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../DataProvider/actions';
import Country from './Country';

const MainSection = ({darkmode}) => {

    const [height, setHeight] = useState(0);

    const dispatch = useDispatch();

    const isLoading = useSelector(state => state.isLoading);

    const countries = useSelector(state => {
        if(state.filtered.length) {
            return state.filtered
        } else if(state.searchedFiltered.length) {
            return state.searchedFiltered
        } else if(state.noMatches) {
            return undefined
        } else if(state.searched.length) {
            return state.searched
        } else if(!state.noMatches) return state.countries
    });

    const data = countries ? countries.map(item => <Country darkmode={darkmode} key={item.name} country={item} />) : [];

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);

    useEffect(() => {
        setHeight(document.querySelector('main').offsetHeight);   
    }, [countries]);
    
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    
    return (  
        <Wrapper darkmode={darkmode}> 
            <Countries>
                {data}
            </Countries>
            {isLoading && !data.length ? <Preload darkmode={darkmode} ><i className="fas fa-sync-alt"></i></Preload> : null}
            {height > window.innerHeight ? <Button onClick={scrollToTop}><i className="fas fa-chevron-circle-up"></i></Button> : null}
            {!countries && !isLoading ? <h2>No matching countries</h2> : null}
        </Wrapper>
    );
}
 
export default MainSection;