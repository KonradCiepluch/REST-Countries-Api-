import React, {useEffect} from 'react';
import { Wrapper, Countries } from './MainSection.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getAllData } from '../DataProvider/actions';
import Country from './Country';


const MainSection = ({darkmode}) => {

    const dispatch = useDispatch();

    const countries = useSelector(state => {
        if(state.filtered.length) {
            return state.filtered
        } else if(state.searched.length) {
            return state.searched
        } else return state.countries
    });

    const data = countries.map(item => <Country darkmode={darkmode} key={item.name} country={item} />);

    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);


    return (  
        <Wrapper darkmode={darkmode}> 
            <Countries>
                {data}
            </Countries>
        </Wrapper>
    );
}
 
export default MainSection;