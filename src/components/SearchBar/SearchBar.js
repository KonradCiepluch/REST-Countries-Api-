import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { filterData, searchCountries, showAll } from '../DataProvider/actions';
import { SearchWrapper, Options, Container, Button, Form } from './SearchBar.styles';

const SearchBar = ({darkmode}) => {
    const [active, setActive] = useState(false);

    const [value, setValue] = useState('');

    const dispatch = useDispatch();

    const chooseRegion = (e) => {
        const region = e.target.name;
        dispatch(filterData(region));
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
        <SearchWrapper darkmode={darkmode}>
            <Form onSubmit={handleSubmit} darkmode={darkmode}>
                <button type='submit'><i className="fas fa-search"></i></button>
                <input value={value} onChange={(e) => setValue(e.target.value) } type="text" placeholder='Search for a country...'/>
            </Form>
            <Options darkmode={darkmode}>
                <Button onClick={() => setActive(!active)} darkmode={darkmode}>Filter by region <i className={`fas fa-chevron-${active ? 'up' : 'down'}`}></i></Button>
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