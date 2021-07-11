import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterData, searchCountries, showAll, filterSearched } from '../DataProvider/actions';
import { SearchWrapper, Options, Container, Button, Form } from './SearchBar.styles';

const SearchBar = ({darkmode, value, setValue}) => {
    
    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const searched = useSelector(state => state.searched);

    const chooseRegion = (e) => {
        const region = e.target.name;
        if(value && searched.length) dispatch(filterSearched(region));
        if(value && !searched.length) {
            dispatch(filterData(region));
            setValue(''); 
        }
        if(!value) dispatch(filterData(region)); 
    }

    const handleClick = (e) => {
        e.stopPropagation();
        setActive(!active);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(value) {
            dispatch(searchCountries(value));
        } else {
            dispatch(showAll());
        }
    }

    return ( 
        <SearchWrapper onClick={() => setActive(false)} darkmode={darkmode}>
            <Form onSubmit={handleSubmit} darkmode={darkmode}>
                <button type='submit'><i className="fas fa-search"></i></button>
                <input value={value} onChange={(e) => setValue(e.target.value) } type="text" placeholder='Search for a country...'/>
            </Form>
            <Options darkmode={darkmode}>
                <Button onClick={handleClick} darkmode={darkmode}>Filter by region <i className={`fas fa-chevron-${active ? 'up' : 'down'}`}></i></Button>
                {active ? <Container darkmode={darkmode}>
                    <button onClick={chooseRegion} name='Africa'>Africa</button>
                    <button onClick={chooseRegion} name='Americas'>America</button>
                    <button onClick={chooseRegion} name='Asia'>Asia</button>
                    <button onClick={chooseRegion} name='Europe'>Europe</button>
                    <button onClick={chooseRegion} name='Oceania'>Oceania</button>
                </Container> : null}
            </Options>
        </SearchWrapper>
     );
}
 
export default SearchBar;