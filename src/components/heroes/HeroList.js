import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroList = ({ publisher }) => {
    
    const heroes = useMemo(()=> getHeroesByPublisher(publisher),[publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-5 animate__animated animate__fadeIn">
            {
                heroes.map(hero =>(
                    <HeroeCard key={ hero.id }
                        
                        {...hero }
                        >
                    </HeroeCard>
                ))
            }
        </div>
    )
}
