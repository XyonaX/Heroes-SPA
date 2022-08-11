import { Link } from "react-router-dom";

const charactesByHero = ({ alter_ego, characters}) =>{

    if(alter_ego === characters){
        return( <></>);
    }
    else{ return (
        <p>{characters}</p>
    )}

}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${id}.webp`;

    // const charactesByActor = (<p>{characters}</p>)
  
    return (
    
        <div className="col">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        {/* <picture> */}
                            <img src={heroImageUrl} className="card-img" alt={superhero} />
                        {/* </picture> */}
                    </div>

                    <div className="col-8">
                        <div card-body>
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            
                            {/* {
                                (alter_ego !== characters) && (charactesByActor)
                            } */}

                            <charactesByHero characters={characters} alter_ego={alter_ego}/>

                            <p className="text-muted">
                                <small>
                                    {first_appearance}
                                </small>
                            </p>

                            <Link to={`/hero/${ id }`}>
                                More Info...
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
