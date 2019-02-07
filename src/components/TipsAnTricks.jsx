import React from 'react';
import OpenCloseComponent from './OpenCloseComponent';

function TipsAndTricks() {
    const content = [];
    content.push(<div key="1">Összegyűjtöttünk pár jótanácsot, melyeknek hasznát veheted, ha táncórára vagy táncos buliba készülsz. Többek között leírtunk olyan tippeket, melyekkel elkerülheted, hogy cikis helyzetbe kerülj, vagy hogy kényelmetlenül érezd magad és tönkremenjen az estéd egy táncos eseményen.</div>);
    content.push(<div key="2"><strong>Mit vegyek fel? </strong></div>);
    content.push(<li key="3">Olyan ruhát válassz, amiben teljesen jól érzed magad! Ha nem tudod előre, akkor tégy el egy bevált másikat B tervnek.</li>);
    content.push(<li key="4">Ne legyen túl szűk az öltözék a mozgáshoz, de túl bő se, mert beleakadhat valamibe!</li>);
    content.push(<li key="5">Túl meleg se, mert akkor gyorsabban kimelegszel. Táncórákra érdemes rétegesen öltözni, így a bemelegítés után könnyen meg lehet szabadulni egy fölösleges rétegtől.</li>);
    content.push(<li key="6">Figyelj rá, hogy olyan ruhát válassz, ami feltehetőleg nem zavarja majd a táncpartnereidet. Pl. nem minden lány szereti a fiúkon az atlétát vagy az ujjatlan felsőt, mert ha úgy adódik a magasságkülönbségből, akkor a lány pont a fiú hóna alját szagolja tánc közben.</li>);
    content.push(<div key="7"><strong>Milyen cipőben menjek? </strong></div>);
    content.push(<li key="8">Amikor csak lehet - esős időben és télen csizma helyett különösen - hozz váltócipőt, ezzel az utcai cipődet kíméled az izzadástól, büdösödéstől és az elhasználódástól (ne erre találták ki), emellett a terem padlóját sem koszolod össze azok kárára, akik bőrtalpú tánccipőben táncolnak, mely könnyen összeszedi a koszt.</li>);
    content.push(<li key="9">Olyan cipőt válassz, ami órákon át is kényelmes, és stabilan tartja a lábadat!</li>);
    content.push(<li key="10">Egy-két váltás zokni, hölgyeknek harisnya is jól jöhet. Sokkal kényelmesebb friss zokniban hazamenni a táncóra vagy buli után.</li>);
    content.push(<li key="11">A hosszított orrú cípőket kerüld, mert a partnered könnyen ráléphet. Ami a táncot, a cipőt és akár az estédet is tönkreteheti.</li>);
    content.push(<li key="12">A gumitalpú, csúszásgátlós cipőkben nehéz/nem lehet forogni, mert tapadnak a padlóhoz. A bokaizületnek nem tesz jót, ha ilyen cipőben táncolsz. Kemény műanyag vagy bőr talpú cipőt javaslunk helyette.</li>);
    content.push(<li key="13">Az edzőcipők inkább kerülendők, egyrészt esztétikai okokból, másrészt egy részüknek a talpa szintén csúszásgátlós, így szintén sérülésveszélyesek.</li>);
    content.push(<li key="14">A magassarkú utcai és divatcipőket kevésbé ajánljuk, mert ezek nagy részének nem hajlik a talpa eléggé, ami gátolja a mozgást, illetve soknak nem jó helyen van a sarok-alátámasztása, ezért sokkal nehezebb bennük megtalálni az egyensúlyt, mint egy rendes tánccipőben. Kezdőként inkább válassz lapos talpú cipőt, az is teljesen megfelel a tánchoz. Éppen elég az elején a lépésekre figyelni, nem kell, hogy elvonja a figyelmedet az "egyensúlyozás" is.</li>);
    content.push(<li key="15">Magassarkú tánccipő esetén a sarokvédő használata javasolt, hogy a cipő sarka ne csússzon, ne kopjon olyan gyorsan, és a parkettát se sértsd meg vele. Néhol emiatt kötelező a használatuk.</li>);
    content.push(<li key="16">Ha új cipőt szeretnél felvenni, akkor érdemes fokozatosan hozzászoktatni azt a lábadhoz. Hozz el egy bevált régit is mellé, hogy ha kell, le tudd cseréni. Nehogy az új cipő rontsa el az estédet!</li>);

    content.push(<div key="17"><strong>Figyelj a higéniára! </strong></div>);
    content.push(<li key="18">Dicséretes, ha figyelsz a leheletedre. Érdemes a buli előtt egy mentolos rágót elrágni, vagy cukorkát elszopogatni. Tánc közben viszont már ne rágózz! Az csak az egyik dolog, hogy zavarhatja a partneredet, de mozgás közben bármikor félrenyelheted, és baj lehet belőle.</li>);
    content.push(<li key="19">Hozz kistörölközőt, használj dezodort! Ha könnyen megizzadsz, akkor erre fordíts különös figyelmet, a legjobb táncot is el tudja rontani, ha a partnered érzi, hogy a mennyire kimelegedtél. Ha hajlamos vagy az izzadásra, akkor nyugodtan hozz egy-két váltás pólót vagy inget és dezodort! Az is segít, ha indulás előtt lezuhanyzol. Egy gyors szappanos kéz- és arcmosás pedig mindenképpen ajánlott a táncóra vagy buli előtt és közben.</li>);

    content.push(<div key="20"><strong>Evés-ivés, dohányzás </strong></div>);
    content.push(<li key="21">Figyelj rá, hogy ne érkezz üres hassal, mert hamar meg fogsz éhezni a mozgástól. Túlságosan teli gyomorral sem kellemes táncolni, ezért úgy időzítsd az utolsó étkezést, hogy maradjon elég idő ejtőzni a táncóráig.</li>);
    content.push(<li key="22">A markánsan aromás ételeket vagy italokat (hal, fokhagyma, hagyma, sör) ne akkor fogyaszd, amikor táncolni készülsz! Ha dohányzol, akkor jusson eszedbe, hogy ez táncpartnereidet zavarhatja.</li>);
    content.push(<li key="23">Alkoholt csak mértékkel fogyassz, hogy mind vezetni, mind követni felelősséggel tudj!</li>);
    content.push(<li key="24">Jusson eszedbe megfelelő mennyiségű vizet inni, hogy pótold, amit tánc közben elveszítesz!</li>);
    return (
        <OpenCloseComponent title="Általános buli leírás">
            {content}
        </OpenCloseComponent>
    );
}

export default TipsAndTricks;
