import LocalizedStrings from 'react-localization';
import Dinner from './communityPictures/Dinner.jpg';
import Gourp02 from './communityPictures/Group02.jpg';
import Gourp01 from './communityPictures/Group01.jpg';
import Girls from './communityPictures/Girls.jpg';
import Hands from './communityPictures/Hands.jpg';
import Weintaste from './communityPictures/Weintaste.jpg';

const strings = new LocalizedStrings({
    en: {
        header: {
            events: 'Events',
            community: 'Comunity',
            media: 'Gallery',
            knowledgebase: 'Knowledgebase',
            profile: 'Profile',
            edit: 'Edit',
            logout: 'Logout',
            login: 'Login',
        },
        eventlist: {
            oldevents: 'Older Events',
            noevents: 'No event found',
            selectevents: 'Select which type of events are you looking for:',
            parties: 'Parties',
            workshops: 'Workshops',
            news: 'News',
        },
        one: 'ONE',
        community: `If you want to be part of an awsome community, és közben jólesne pár hűsítő koktél, 
            akkor a Parkett Klubban a helyed! 
            Ha pedig szeretnél egy vidám, összetartó csapat tagja lenni, 
            akkor csatlakozz a rendező gárdához!`,
        attention: `A Parkett Klub rendezvényeire a beléptetés jogát fenntartjuk.
            A kedvezmények igénybevétele az azt igazoló kártyával lehetséges.
            A belépéssel hozzájárulsz, hogy videófelvétel és fényképek készüljenek Rólad,
            és azok megjelenjenek a Schönherz Zoltán Kolllégiummal, a SPOT fotókörrel,
             a Budavári Schönherz Stúdióval, illetve a Parkett Klubbal kapcsolatos felületeken.
             Utólagos kérésre a Rólad készült fényképeket eltávolítjuk.`,
        path: '4-es villamos › Budafoki út 33, 86, 212-es busz › Október huszonharmadika utca',
        wayIn: 'A lépcsőn fel a porta mellett elhaladva bal oldalt (nem a forgó villákon keresztül)',
        tips: {
            main: `ENG, melyeknek hasznát veheted, ha táncórára vagy táncos buliba készülsz. 
        Többek között leírtunk olyan tippeket, melyekkel elkerülheted, 
        hogy cikis helyzetbe kerülj, vagy hogy kényelmetlenül érezd magad és tönkremenjen az estéd egy táncos eseményen.`,
            tabs: [
                {
                    head: 'Mit vegyek fel?',
                    body: [
                        'Olyan ruhát válassz, amiben teljesen jól érzed magad! Ha nem tudod előre, akkor tégy el egy bevált másikat B tervnek.',
                        'Ne legyen túl szűk az öltözék a mozgáshoz, de túl bő se, mert beleakadhat valamibe!',
                        'Túl meleg se, mert akkor gyorsabban kimelegszel. Táncórákra érdemes rétegesen öltözni, így a bemelegítés után könnyen meg lehet szabadulni egy fölösleges rétegtől.',
                        `Figyelj rá, hogy olyan ruhát válassz, ami feltehetőleg nem zavarja majd a táncpartnereidet. Pl. nem minden lány szereti 
                    a fiúkon az atlétát vagy az ujjatlan felsőt, mert ha úgy adódik a magasságkülönbségből, akkor a lány pont a fiú hóna alját szagolja tánc közben.`,
                    ],
                },
                {
                    head: 'Milyen cipőben menjek?',
                    body: [
                        `Amikor csak lehet - esős időben és télen csizma helyett különösen - hozz váltócipőt, 
                    ezzel az utcai cipődet kíméled az izzadástól, büdösödéstől és az elhasználódástól (nem erre találták ki), 
                    emellett a terem padlóját sem koszolod össze azok kárára, akik bőrtalpú tánccipőben táncolnak, mely könnyen összeszedi a koszt.`,
                        'Olyan cipőt válassz, ami órákon át is kényelmes, és stabilan tartja a lábadat!',
                        'Egy-két váltás zokni, hölgyeknek harisnya is jól jöhet. Sokkal kényelmesebb friss zokniban hazamenni a táncóra vagy buli után.',
                        'A hosszított orrú cípőket kerüld, mert a partnered könnyen ráléphet. Ami a táncot, a cipőt és akár az estédet is tönkreteheti.',
                        `A gumitalpú, csúszásgátlós cipőkben nehéz/nem lehet forogni, mert tapadnak a padlóhoz. 
                    A bokaizületnek nem tesz jót, ha ilyen cipőben táncolsz. Kemény műanyag vagy bőr talpú cipőt javaslunk helyette.`,
                        'Az edzőcipők inkább kerülendők, egyrészt esztétikai okokból, másrészt egy részüknek a talpa szintén csúszásgátlós, így szintén sérülésveszélyesek.',
                        `A magassarkú utcai és divatcipőket kevésbé ajánljuk, mert ezek nagy részének nem hajlik a talpa eléggé,
                    ami gátolja a mozgást, illetve soknak nem jó helyen van a sarok-alátámasztása, ezért sokkal nehezebb 
                    bennük megtalálni az egyensúlyt, mint egy rendes tánccipőben. Kezdőként inkább válassz lapos talpú cipőt, 
                    az is teljesen megfelel a tánchoz. Éppen elég az elején a lépésekre figyelni, nem kell, hogy elvonja a figyelmedet az "egyensúlyozás" is.`,
                        `Magassarkú tánccipő esetén a sarokvédő használata javasolt, hogy a cipő sarka ne csússzon, ne kopjon olyan gyorsan,
                    és a parkettát se sértsd meg vele. Néhol emiatt kötelező a használatuk.`,
                        `Ha új cipőt szeretnél felvenni, akkor érdemes fokozatosan hozzászoktatni azt a lábadhoz. 
                    Hozz el egy bevált régit is mellé, hogy ha kell, le tudd cseréni. Nehogy az új cipő rontsa el az estédet!`,
                    ],
                },
                {
                    head: 'Figyelj a higéniára!',
                    body: [
                        `Dicséretes, ha figyelsz a leheletedre. Érdemes a buli előtt egy mentolos rágót elrágni, vagy cukorkát elszopogatni. 
                    Tánc közben viszont már ne rágózz! Az csak az egyik dolog, hogy zavarhatja a partneredet, de mozgás közben bármikor félrenyelheted, és baj lehet belőle.`,
                        `Hozz kistörölközőt, használj dezodort! Ha könnyen megizzadsz, akkor erre fordíts különös figyelmet, 
                    a legjobb táncot is el tudja rontani, ha a partnered érzi, hogy a mennyire kimelegedtél. 
                    Ha hajlamos vagy az izzadásra, akkor nyugodtan hozz egy-két váltás pólót vagy inget és dezodort! 
                    Az is segít, ha indulás előtt lezuhanyzol. Egy gyors szappanos kéz- és arcmosás pedig mindenképpen ajánlott a táncóra vagy buli előtt és közben.`,
                    ],
                },
                {
                    head: 'Evés-ivés, dohányzás',
                    body: [
                        `Figyelj rá, hogy ne érkezz üres hassal, mert hamar meg fogsz éhezni a mozgástól. Túlságosan teli gyomorral sem kellemes táncolni, 
                    ezért úgy időzítsd az utolsó étkezést, hogy maradjon elég idő ejtőzni a táncóráig.`,
                        `A markánsan aromás ételeket vagy italokat (hal, fokhagyma, hagyma, sör) ne akkor fogyaszd, 
                    amikor táncolni készülsz! Ha dohányzol, akkor jusson eszedbe, hogy ez táncpartnereidet zavarhatja.`,
                        'Alkoholt csak mértékkel fogyassz, hogy mind vezetni, mind követni felelősséggel tudj!',
                        'Jusson eszedbe megfelelő mennyiségű vizet inni, hogy pótold, amit tánc közben elveszítesz!',
                    ],
                },
            ],
        },
        etikett: {
            main: `ENG FIGYELEM! EZEK A SZÖVEGEK MÉG NINCSENEK VÉGLEGESÍTVE! Minden társaságnak, helynek megvannak a maga normái, "szabályai", 
        így a társastáncos közösségekben is vannak bizonyos illemszabályok, amelyeket érdemes betartani. 
        Ezeket szedtük csokorba az alábbiakban.`,
            tabs: [
                {
                    head: 'Kérés az urakhoz',
                    body: `A táncos közösségek akkor maradnak egészségesek, akkor fognak bővülni, színesedni, 
                ha az odajárók mindegyike tud fejlődni, és jól tudja érzi magát az eseményeken. 
                A parkett szélén "petrezselymet áruló" hölgyeket is ide kell érteni. 
                (Valljuk be, nekünk is hamar elmenne a kedvünk, ha egy fárasztó hét végén táncolni indultunk, 
                    és három-négy bulit végigácsorgunk, miközben látjuk, hogy mások végigtáncolják az estét.) 
                    Ennek elkerülése végett szeretnénk megkérni Bennteket, Urakat, hogy fordítsatok figyelmet arra, 
                    hogy egy este nem több, mint két-három számot olyan lánnyal táncoljatok, akivel még nem táncoltatok egyáltalán, 
                    vagy régen táncoltatok. Ezzel örömet okoztok nekik, jobbá teszitek a lányok estéjét, így legközelebb is eljönnek, 
                    és jobban fejlődnek, és bele tudnak kerülni a bulik vérkeringésébe a későbbiek folyamán. Előre is köszönjük a lányok nevében! ;)`,
                },
                {
                    head: 'Felkérés',
                    body: `Általában a férfiak kérik táncra a nőket, de egyes táncoknál, mint a west coast swing és ceroc, ez fordítva is elfogadott. 
                Felkéréskor odamész a kiválasztott partnerhez, és felfelé fordított tenyérrel és 
                egy rövid "Szabad (egy táncra)?" vagy "Táncolunk?" kérdéssel jelzed szándékodat.          
                A felkérést nem szokás visszautasítani. Általában két válasz közül választhatsz: Igen. vagy Igen, de csak egyre. Persze itt is akad kivétel`,
                },
                {
                    head: 'Vezetés',
                    body: `A táncban a férfi vezeti a hölgyet, a nő reagál a vezetésre. Erre ne vállalkozzon a hölgy, mert az roppant kellemetlen. 
                Normális esetben a párod jól vezet, ekkor neked "csak" követned kell, és kihasználni azokat a lehetőségeket, 
                amiket ő nyit meg neked, hogy a tánctudásod megcsillanthasd. Sok úr viszont nem megfelelő minőségben vezet, 
                amiből a türelmetlenebb és erőteljesebb hölgyek azt a következtetést vonták le, hogy akkor ezt majd ők intézik. 
                Ne tegyétek, Lányok! Ha hosszabb távon akartok együtt táncolni, akkor hagyjátok a férfira a vezetést, 
                mert egy: meg kell tanulnia valamikor, kettő: a férfiak nem szeretnek olyan nővel táncolni, aki nem hagyja magát vezetni.`,
                },
                {
                    head: 'Tánctudás és figurák',
                    body: `Nem tud mindenki tökéletesen táncolni. Ha kiderül, hogy partnerünk néha téveszt, 
                nem szabad erre felhívni a figyelmét gúnyos vagy bántó megjegyzésekkel. Tegyünk úgy, mintha észre sem vettük volna, 
                vagy mosolyogjunk rajta együtt. :) A lányoknak is időbe telik megtanulni a követést, az alkalmazkodást. 
                Ráadásul minden egyes partnert meg kell szokni a tánc elején, mert minden úr máshogy vezet. 
                Ezért érdemes minden tánc kezdetén alkalmazkodni mindkét félnek, egyszerűbb figurákkal egymásra hangolódni. 
                Ha úgy érzed, hogy nem oldódott fel eléggé a partnered, akkor dicsérd meg, biztosan segíteni fog. ;)`,
                },
                {
                    head: 'Tánc után',
                    body: `Ha vége a számnak, akkor köszönjük meg egymásnak a táncot, majd az úr visszakíséri a hölgyet a társaságba, 
                ahol „találta” vagy a parkett szélére. :) Előfordulhat, hogy nem sikerült úgy egy tánc, ahogy azt szerettétek volna, 
                de mindannyian szórakozni jöttetek ezért őrizzétek meg jó kedveteket, és semmiféleképp se bíráljátok a partnert! 
                Ha jót akarsz magadnak, akkor szükség esetén csak udvariasan kritizáld, és ne cikizd. De mindenképpen tanácsos a mértékletesség, 
                mert ha meg "túldicséred" az igen könnyen a fejébe szállhat.`,
                },
            ],
        },
        smallThings: [
            {
                photo: Dinner,
                title: 'Dinners',
                descripiton: 'Bevonó vacsorákat is rendezünk, hogy az érdeklődők megismerkedhessenek a rendezőgárdával',
            },
            {
                photo: Gourp02,
                title: 'Teampictures',
                descripiton: 'Minden félév végén egy közös csoportképpel örökítjük meg az adott félév rendezőinek csapatát',
            },
            {
                photo: Gourp01,
                title: 'Members',
                descripiton: 'A kör tagjai különböző egyéniségek. Akik kiegészítve egymást egy összekovácsolódott csapatot alkotnak.',
            },
            {
                photo: Girls,
                title: 'Camps',
                descripiton: 'Táborok során mindig más és más helyeket látogatunk meg.',
            },
            {
                photo: Hands,
                title: 'Teamwork',
                descripiton: 'A bulik nem jöhetnének létre a Parkett Klub összetartó és egymást segítő csapata nélkül.',
            },
            {
                photo: Weintaste,
                title: 'Winetasting',
                descripiton: 'Minden táborban elmegyünk borkóstólni, hogy a tánctudásunk mellett az ízlésünk is fejlődhessen.',
            },
        ],
    },
    hu: {
        header: {
            events: 'Események',
            community: 'Közösség',
            media: 'Galéria',
            knowledgebase: 'Tudnivalók',
            profile: 'Profilom',
            edit: 'Szerkesztés',
            logout: 'Kijelentkezés',
            login: 'Bejelentkezés',
        },
        eventlist: {
            oldevents: 'Régebbi Események',
            noevents: 'Nincs ilyen esemény',
            selectevents: 'Válaszd ki milyen eseményeket keresel:',
            parties: 'Bulik',
            workshops: 'Workshopok',
            news: 'Hírek',
        },
        one: 'ONE',
        community: `Ha társaságra vágysz vagy táncolni tanulnál, és közben jólesne pár hűsítő koktél, 
            akkor a Parkett Klubban a helyed! 
            Ha pedig szeretnél egy vidám, összetartó csapat tagja lenni, 
            akkor csatlakozz a rendező gárdához!`,
        attention: `A Parkett Klub rendezvényeire a beléptetés jogát fenntartjuk.
            A kedvezmények igénybevétele az azt igazoló kártyával lehetséges.
            A belépéssel hozzájárulsz, hogy videófelvétel és fényképek készüljenek Rólad,
            és azok megjelenjenek a Schönherz Zoltán Kolllégiummal, a SPOT fotókörrel,
             a Budavári Schönherz Stúdióval, illetve a Parkett Klubbal kapcsolatos felületeken.
             Utólagos kérésre a Rólad készült fényképeket eltávolítjuk.`,
        path: '4-es villamos › Budafoki út 33, 86, 212-es busz › Október huszonharmadika utca',
        wayIn: 'A lépcsőn fel a porta mellett elhaladva bal oldalt (nem a forgó villákon keresztül)',
        tips: {
            main: `Összegyűjtöttünk pár jótanácsot, melyeknek hasznát veheted, ha táncórára vagy táncos buliba készülsz. 
        Többek között leírtunk olyan tippeket, melyekkel elkerülheted, 
        hogy cikis helyzetbe kerülj, vagy hogy kényelmetlenül érezd magad és tönkremenjen az estéd egy táncos eseményen.`,
            tabs: [
                {
                    head: 'Mit vegyek fel?',
                    body: [
                        'Olyan ruhát válassz, amiben teljesen jól érzed magad! Ha nem tudod előre, akkor tégy el egy bevált másikat B tervnek.',
                        'Ne legyen túl szűk az öltözék a mozgáshoz, de túl bő se, mert beleakadhat valamibe!',
                        'Túl meleg se, mert akkor gyorsabban kimelegszel. Táncórákra érdemes rétegesen öltözni, így a bemelegítés után könnyen meg lehet szabadulni egy fölösleges rétegtől.',
                        `Figyelj rá, hogy olyan ruhát válassz, ami feltehetőleg nem zavarja majd a táncpartnereidet. Pl. nem minden lány szereti 
                    a fiúkon az atlétát vagy az ujjatlan felsőt, mert ha úgy adódik a magasságkülönbségből, akkor a lány pont a fiú hóna alját szagolja tánc közben.`,
                    ],
                },
                {
                    head: 'Milyen cipőben menjek?',
                    body: [
                        `Amikor csak lehet - esős időben és télen csizma helyett különösen - hozz váltócipőt, 
                    ezzel az utcai cipődet kíméled az izzadástól, büdösödéstől és az elhasználódástól (nem erre találták ki), 
                    emellett a terem padlóját sem koszolod össze azok kárára, akik bőrtalpú tánccipőben táncolnak, mely könnyen összeszedi a koszt.`,
                        'Olyan cipőt válassz, ami órákon át is kényelmes, és stabilan tartja a lábadat!',
                        'Egy-két váltás zokni, hölgyeknek harisnya is jól jöhet. Sokkal kényelmesebb friss zokniban hazamenni a táncóra vagy buli után.',
                        'A hosszított orrú cípőket kerüld, mert a partnered könnyen ráléphet. Ami a táncot, a cipőt és akár az estédet is tönkreteheti.',
                        `A gumitalpú, csúszásgátlós cipőkben nehéz/nem lehet forogni, mert tapadnak a padlóhoz. 
                    A bokaizületnek nem tesz jót, ha ilyen cipőben táncolsz. Kemény műanyag vagy bőr talpú cipőt javaslunk helyette.`,
                        'Az edzőcipők inkább kerülendők, egyrészt esztétikai okokból, másrészt egy részüknek a talpa szintén csúszásgátlós, így szintén sérülésveszélyesek.',
                        `A magassarkú utcai és divatcipőket kevésbé ajánljuk, mert ezek nagy részének nem hajlik a talpa eléggé,
                    ami gátolja a mozgást, illetve soknak nem jó helyen van a sarok-alátámasztása, ezért sokkal nehezebb 
                    bennük megtalálni az egyensúlyt, mint egy rendes tánccipőben. Kezdőként inkább válassz lapos talpú cipőt, 
                    az is teljesen megfelel a tánchoz. Éppen elég az elején a lépésekre figyelni, nem kell, hogy elvonja a figyelmedet az "egyensúlyozás" is.`,
                        `Magassarkú tánccipő esetén a sarokvédő használata javasolt, hogy a cipő sarka ne csússzon, ne kopjon olyan gyorsan,
                    és a parkettát se sértsd meg vele. Néhol emiatt kötelező a használatuk.`,
                        `Ha új cipőt szeretnél felvenni, akkor érdemes fokozatosan hozzászoktatni azt a lábadhoz. 
                    Hozz el egy bevált régit is mellé, hogy ha kell, le tudd cseréni. Nehogy az új cipő rontsa el az estédet!`,
                    ],
                },
                {
                    head: 'Figyelj a higéniára!',
                    body: [
                        `Dicséretes, ha figyelsz a leheletedre. Érdemes a buli előtt egy mentolos rágót elrágni, vagy cukorkát elszopogatni. 
                    Tánc közben viszont már ne rágózz! Az csak az egyik dolog, hogy zavarhatja a partneredet, de mozgás közben bármikor félrenyelheted, és baj lehet belőle.`,
                        `Hozz kistörölközőt, használj dezodort! Ha könnyen megizzadsz, akkor erre fordíts különös figyelmet, 
                    a legjobb táncot is el tudja rontani, ha a partnered érzi, hogy a mennyire kimelegedtél. 
                    Ha hajlamos vagy az izzadásra, akkor nyugodtan hozz egy-két váltás pólót vagy inget és dezodort! 
                    Az is segít, ha indulás előtt lezuhanyzol. Egy gyors szappanos kéz- és arcmosás pedig mindenképpen ajánlott a táncóra vagy buli előtt és közben.`,
                    ],
                },
                {
                    head: 'Evés-ivés, dohányzás',
                    body: [
                        `Figyelj rá, hogy ne érkezz üres hassal, mert hamar meg fogsz éhezni a mozgástól. Túlságosan teli gyomorral sem kellemes táncolni, 
                    ezért úgy időzítsd az utolsó étkezést, hogy maradjon elég idő ejtőzni a táncóráig.`,
                        `A markánsan aromás ételeket vagy italokat (hal, fokhagyma, hagyma, sör) ne akkor fogyaszd, 
                    amikor táncolni készülsz! Ha dohányzol, akkor jusson eszedbe, hogy ez táncpartnereidet zavarhatja.`,
                        'Alkoholt csak mértékkel fogyassz, hogy mind vezetni, mind követni felelősséggel tudj!',
                        'Jusson eszedbe megfelelő mennyiségű vizet inni, hogy pótold, amit tánc közben elveszítesz!',
                    ],
                },
            ],
        },
        etikett: {
            main: `FIGYELEM! EZEK A SZÖVEGEK MÉG NINCSENEK VÉGLEGESÍTVE! Minden társaságnak, helynek megvannak a maga normái, "szabályai", 
        így a társastáncos közösségekben is vannak bizonyos illemszabályok, amelyeket érdemes betartani. 
        Ezeket szedtük csokorba az alábbiakban.`,
            tabs: [
                {
                    head: 'Kérés az urakhoz',
                    body: `A táncos közösségek akkor maradnak egészségesek, akkor fognak bővülni, színesedni, 
                ha az odajárók mindegyike tud fejlődni, és jól tudja érzi magát az eseményeken. 
                A parkett szélén "petrezselymet áruló" hölgyeket is ide kell érteni. 
                (Valljuk be, nekünk is hamar elmenne a kedvünk, ha egy fárasztó hét végén táncolni indultunk, 
                    és három-négy bulit végigácsorgunk, miközben látjuk, hogy mások végigtáncolják az estét.) 
                    Ennek elkerülése végett szeretnénk megkérni Bennteket, Urakat, hogy fordítsatok figyelmet arra, 
                    hogy egy este nem több, mint két-három számot olyan lánnyal táncoljatok, akivel még nem táncoltatok egyáltalán, 
                    vagy régen táncoltatok. Ezzel örömet okoztok nekik, jobbá teszitek a lányok estéjét, így legközelebb is eljönnek, 
                    és jobban fejlődnek, és bele tudnak kerülni a bulik vérkeringésébe a későbbiek folyamán. Előre is köszönjük a lányok nevében! ;)`,
                },
                {
                    head: 'Felkérés',
                    body: `Általában a férfiak kérik táncra a nőket, de egyes táncoknál, mint a west coast swing és ceroc, ez fordítva is elfogadott. 
                Felkéréskor odamész a kiválasztott partnerhez, és felfelé fordított tenyérrel és 
                egy rövid "Szabad (egy táncra)?" vagy "Táncolunk?" kérdéssel jelzed szándékodat.          
                A felkérést nem szokás visszautasítani. Általában két válasz közül választhatsz: Igen. vagy Igen, de csak egyre. Persze itt is akad kivétel`,
                },
                {
                    head: 'Vezetés',
                    body: `A táncban a férfi vezeti a hölgyet, a nő reagál a vezetésre. Erre ne vállalkozzon a hölgy, mert az roppant kellemetlen. 
                Normális esetben a párod jól vezet, ekkor neked "csak" követned kell, és kihasználni azokat a lehetőségeket, 
                amiket ő nyit meg neked, hogy a tánctudásod megcsillanthasd. Sok úr viszont nem megfelelő minőségben vezet, 
                amiből a türelmetlenebb és erőteljesebb hölgyek azt a következtetést vonták le, hogy akkor ezt majd ők intézik. 
                Ne tegyétek, Lányok! Ha hosszabb távon akartok együtt táncolni, akkor hagyjátok a férfira a vezetést, 
                mert egy: meg kell tanulnia valamikor, kettő: a férfiak nem szeretnek olyan nővel táncolni, aki nem hagyja magát vezetni.`,
                },
                {
                    head: 'Tánctudás és figurák',
                    body: `Nem tud mindenki tökéletesen táncolni. Ha kiderül, hogy partnerünk néha téveszt, 
                nem szabad erre felhívni a figyelmét gúnyos vagy bántó megjegyzésekkel. Tegyünk úgy, mintha észre sem vettük volna, 
                vagy mosolyogjunk rajta együtt. :) A lányoknak is időbe telik megtanulni a követést, az alkalmazkodást. 
                Ráadásul minden egyes partnert meg kell szokni a tánc elején, mert minden úr máshogy vezet. 
                Ezért érdemes minden tánc kezdetén alkalmazkodni mindkét félnek, egyszerűbb figurákkal egymásra hangolódni. 
                Ha úgy érzed, hogy nem oldódott fel eléggé a partnered, akkor dicsérd meg, biztosan segíteni fog. ;)`,
                },
                {
                    head: 'Tánc után',
                    body: `Ha vége a számnak, akkor köszönjük meg egymásnak a táncot, majd az úr visszakíséri a hölgyet a társaságba, 
                ahol „találta” vagy a parkett szélére. :) Előfordulhat, hogy nem sikerült úgy egy tánc, ahogy azt szerettétek volna, 
                de mindannyian szórakozni jöttetek ezért őrizzétek meg jó kedveteket, és semmiféleképp se bíráljátok a partnert! 
                Ha jót akarsz magadnak, akkor szükség esetén csak udvariasan kritizáld, és ne cikizd. De mindenképpen tanácsos a mértékletesség, 
                mert ha meg "túldicséred" az igen könnyen a fejébe szállhat.`,
                },
            ],
        },
        smallThings: [
            {
                photo: Dinner,
                title: 'Vacsorák',
                descripiton: 'Bevonó vacsorákat is rendezünk, hogy az érdeklődők megismerkedhessenek a rendezőgárdával',
            },
            {
                photo: Gourp02,
                title: 'Csoportképek',
                descripiton: 'Minden félév végén egy közös csoportképpel örökítjük meg az adott félév rendezőinek csapatát',
            },
            {
                photo: Gourp01,
                title: 'Körtagok',
                descripiton: 'A kör tagjai különböző egyéniségek. Akik kiegészítve egymást egy összekovácsolódott csapatot alkotnak.',
            },
            {
                photo: Girls,
                title: 'Táborok',
                descripiton: 'Táborok során mindig más és más helyeket látogatunk meg.',
            },
            {
                photo: Hands,
                title: 'Csapatmunka',
                descripiton: 'A bulik nem jöhetnének létre a Parkett Klub összetartó és egymást segítő csapata nélkül.',
            },
            {
                photo: Weintaste,
                title: 'Borkóstoló',
                descripiton: 'Minden táborban elmegyünk borkóstólni, hogy a tánctudásunk mellett az ízlésünk is fejlődhessen.',
            },
        ],
    },
});

export default strings;
