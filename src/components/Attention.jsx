import React from 'react'
import './Knowledge-Base.css';
import OpenCloseComponent from './OpenCloseComponent';

const Attention = props =>
    <OpenCloseComponent title="Figyelem!"
        content={<div>A Parkett Klub rendezvényeire a beléptetés jogát fenntartjuk.
            A kedvezmények igénybevétele az azt igazoló kártyával lehetséges.
            A belépéssel hozzájárulsz, hogy videófelvétel és fényképek készüljenek Rólad,
            és azok megjelenjenek a Schönherz Zoltán Kolllégiummal, a SPOT fotókörrel,
             a Budavári Schönherz Stúdióval, illetve a Parkett Klubbal kapcsolatos felületeken.
             Utólagos kérésre a Rólad készült fényképeket eltávolítjuk.</div>}
    />

export default Attention