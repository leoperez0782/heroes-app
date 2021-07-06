import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { HeroeCard } from '../heroes/HeroeCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });
    const { searchText } = formValues;

    const filteredHeroes = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(formValues);
        history.push(`?q=${searchText}`);
    }
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">

                <div className="col-5">
                    <h4>Search</h4>
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            name="searchText"
                            value={searchText}
                            placeholder="find your hero"
                            className="form-control"
                            autoComplete="off"
                            onChange={handleInputChange}
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn m-1 btn-outline-primary"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '') && <div className="alert alert-info">Search a hero</div>
                    }
                    {
                        (q !== '' && filteredHeroes.length === 0) &&
                        <div className="alert alert-danger">
                            There is no hero with {q}
                        </div>
                    }

                    {

                        filteredHeroes.map(hero => (
                            <HeroeCard
                                key={hero.id}
                                {...hero}
                            />
                        ))

                    }
                </div>
            </div>

        </div>
    )
}
