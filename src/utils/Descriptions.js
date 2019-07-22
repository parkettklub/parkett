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
        media: {
            pictures: 'Pictures',
            videos: 'Videos',
        },
        one: 'ONE',
        community: {
            desc: `If you want to be part of an awesome community, and you also enjoy some cooling drinks, 
            then your place is in the Parkett Klub! If you want to be part of het happy and cohesive team, 
            then join our organizing group!`,
            joinus: 'Apply for Parkett Klub organizer!',
            oldmembers: 'Old members',
            members: 'Members',
        },
        attention: {
            title: 'Warning!',
            desc: `We reserve the right to enter the Parkett Klub events. Those eligible for discounts can prove their eligibility 
            by presenting their identity card (example a Student ID). By entering you consent to be taken picture, and video of. 
            And for these to be shown on the Schonherz Dormitory, SPOT, Budavari Schonherz Studio and the Parkett Klub related surfaces. 
            You may request the removal of your photographs.`,
        },
        knowledge: {
            buttons: {
                dances: 'Dances',
                general: 'General',
                approach: 'Approach',
                tipps: 'Tipps',
                etikett: 'Etikett',
            },
            general: {
                title: 'General things about the parties',
                desc: `Every two weeks the great hall of the dorm is filled with dance lover youngsters and from the speakers salsa, 
                rock & roll, boogie-woogie or modern socialdance music can be heard. But sometimes a band is playing live for the dancers. 
                The supply is great, so you could always find the right dance style and party for you.`,
            },
            thank: {
                title: 'Thank you: ',
                back: 'For the backend: ',
                design: 'For the design abd the frontend: ',
                spot: 'For the pictures: ',
                ac: 'For the sound: ',
                bss: 'For the videos: ',
            },
            feedbackForm: {
                title: 'Feedback',
                description: 'Please, if you notice some error on the website, or you have some suggestion for improving the user experience please fill out this form.',
                button: 'Feedback form link',
            },
        },
        path: {
            title: 'Approach: ',
            desc: '4-es tram › Budafoki street 33, 86, 212-es bus › Október huszonharmadika street',
        },
        wayIn: {
            title: 'Access: ',
            desc: 'Going past the stairs on the left(not through the turnstile)',
        },
        newsfeed: {
            title: 'Subscribe to our newsletter!',
            desc: `If you want to be notified about the parties and workshops please subscribe to our newsletter. 
            We send 1 letter per week on average. You can unsubscribe from the newsletter anytime, with the link in one of the letters.`,
            button: 'Subscirbe',
        },
        services: {
            title: 'Party services',
            cloakroom: 'Free cloakroom',
            drinking: 'Counter with discounted prices',
        },
        tips: {
            title: 'Tipps and tricks',
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
        eventdesc: {
            music: 'Provides music: ',
            thematics: 'Thematics: ',
            pictures: 'Pictures',
            video: 'Video',
            wokshopparty: [
                'A workshop résztvevői ingyenesen részt vehetnek a ',
                ' nevű rendezvényen amely ',
                ' estéjén lesz megrendezve ',
            ],
            form: {
                title: 'You must APPLY in the from to participate: ',
                link: 'Link for the form',
                paragraph: `Siess, a helyek limitáltak! 
                Amennyiben párban jöttök a kérdőívet mindketten töltsétek ki. 
                A workshop csak elegendő számú jelentkező esetén indul.`,
                teaching: [
                    '',
                    ' will be teaching the steps for you',
                ],
            },
        },
        etikett: {
            title: 'Dance etiquette',
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
        media: {
            pictures: 'Képek',
            videos: 'Videók',
        },
        one: 'ONE',
        community: {
            desc: `If you want to be part of an awsome community, és közben jólesne pár hűsítő koktél, 
            akkor a Parkett Klubban a helyed! 
            Ha pedig szeretnél egy vidám, összetartó csapat tagja lenni, 
            akkor csatlakozz a rendező gárdához!`,
            joinus: 'Jelentkezz Parkett Klub rendezőnek!',
            oldmembers: 'Öregtagok',
            members: 'Tagok',
        },
        attention: {
            title: 'Figyelem!',
            desc: `A Parkett Klub rendezvényeire a beléptetés jogát fenntartjuk.
            A kedvezmények igénybevétele az azt igazoló kártyával lehetséges.
            A belépéssel hozzájárulsz, hogy videófelvétel és fényképek készüljenek Rólad,
            és azok megjelenjenek a Schönherz Zoltán Kolllégiummal, a SPOT fotókörrel,
             a Budavári Schönherz Stúdióval, illetve a Parkett Klubbal kapcsolatos felületeken.
             Utólagos kérésre a Rólad készült fényképeket eltávolítjuk.`,
        },
        knowledge: {
            buttons: {
                dances: 'Táncok',
                general: 'Álltalános',
                approach: 'Megközelítés',
                tipps: 'Tippek',
                etikett: 'Etikett',
            },
            general: {
                title: 'Álltalánosan a bulikról',
                desc: `Kéthetente megtelik a kollégium nagyterme a város tánckedvelő fiataljaival, 
            és a hangfalakból salsa, rock & roll, boogie-woogie vagy modern társastáncok zenéi szólnak, 
            esetleg éppen egy zenekar húzza élőben a talpalávalót. Nagy a kínálat, így nálunk biztosan 
            megtalálod a Hozzád illő táncstílust és bulit.`,
            },
            thank: {
                title: 'Köszönet: ',
                back: 'A backend-ért: ',
                design: 'A design-ért és frontend-ért: ',
                spot: 'A fotókért: ',
                ac: 'A hangosításért: ',
                bss: 'A videókért: ',
            },
            feedbackForm: {
                title: 'Visszajelzés',
                description: `Kérlek, ha a Parkett Klubos honlappal kapcsolatban bármilyen hibát tapasztaltál, vagy megjegyzésed, 
                javaslatod van, esetleg új funkció bevezetésére van ötleted, kérlek ezt a formot kitöltve tudasd velünk!`,
                button: 'Visszajelző form',
            },
        },
        path: {
            title: 'Megközelítés: ',
            desc: '4-es villamos › Budafoki út; 33, 86, 212-es busz › Október huszonharmadika utca',
        },
        wayIn: {
            title: 'Bejutás: ',
            desc: 'A lépcsőn fel, majd a porta mellett elhaladva bal oldalt (nem a forgó villákon keresztül).',
        },
        newsfeed: {
            title: 'Iratkozz fel Hírlevelünkre!',
            desc: `Ha szeretnél értesülni a bulikról és a tanfolyamokról, iratkozz fel! 
            Álltalában hetente maximum egy e-mailt fogsz kapni bulikról, workshopokról és egyéb hírekről. 
            A hírlevélről bármikor leiratkozhatsz az e-mailben kapott linken keresztül.`,
            button: 'Feliratkozom',
        },
        services: {
            title: 'Bulin lévő szolgáltatások',
            cloakroom: 'Ingyenes ruhatár',
            drinking: 'Italpult kedvezményes árakkal',
        },
        tips: {
            title: 'Tippek és tanácsok',
            main: `Összegyűjtöttünk pár jótanácsot, melyeknek hasznát veheted, ha táncórára vagy táncos buliba készülsz. 
        Többek között leírtunk olyan tippeket, melyekkel elkerülheted, 
        hogy cikis helyzetbe kerülj, vagy hogy kényelmetlenül érezd magad és tönkremenjen az estéd egy táncos eseményen.`,
            tabs: [
                {
                    head: 'Mit vegyek fel?',
                    body: [
                        'Olyan ruhát válassz, amiben teljesen jól érzed magad! Ha nem tudod előre, hogy kényelmes lesz-e, akkor tégy el egy bevált másikat B tervnek.',
                        'Ne legyen túl szűk az öltözék a mozgáshoz, de túl bő se, mert beleakadhat valamibe!',
                        'Nem jó, ha túl meleg a ruhád, mert akkor gyorsabban kimelegszel. Táncórákra érdemes rétegesen öltözni, így a bemelegítés után könnyen meg lehet szabadulni egy fölösleges rétegtől.',
                        `Figyelj rá, hogy olyan ruhát válassz, ami feltehetőleg nem zavarja majd a táncpartnereidet. Pl. nem minden lány szereti a fiúkon az atlétát 
                        vagy az ujjatlan felsőt, mert ha úgy adódik a magasságkülönbségből, akkor a lány pont a fiú hóna alját szagolja tánc közben.`,
                    ],
                },
                {
                    head: 'Milyen cipőben menjek?',
                    body: [
                        `Amikor csak lehet - esős időben és télen csizma helyett különösen - hozz váltócipőt! Ezzel az utcai cipődet is kíméled az izzadástól, 
                        büdösödéstől és az elhasználódástól (nem erre találták ki), emellett a terem padlóját sem koszolod össze azok kárára, akik bőrtalpú tánccipőben táncolnak, 
                        mely könnyen összeszedi a koszt.`,
                        'Olyan cipőt válassz, ami órákon át is kényelmes, és stabilan tartja a lábadat!',
                        'Egy-két váltás zokni, hölgyeknek harisnya is jól jöhet. Sokkal kényelmesebb friss zokniban hazamenni a táncóra vagy buli után.',
                        'A hosszított orrú cipőket kerüld, mert a partnered könnyen ráléphet. Egy ilyen incidens pedig a táncot, a cipőt és akár az estédet is tönkreteheti.',
                        `A gumitalpú, csúszásgátlós cipőkben nehéz/nem lehet forogni, mert tapadnak a padlóhoz. A bokaízületnek nem tesz jót, 
                        ha ilyen cipőben táncolsz. Kemény műanyag vagy bőr talpú cipőt javaslunk helyette.`,
                        'Az edzőcipőket érdemes kerülni. Egyrészt esztétikai okokból, másrészt egy részüknek a talpa szintén csúszásgátlós, így szintén sérülésveszélyesek.',
                        `A magassarkú utcai- és divatcipőket kevésbé ajánljuk, mert ezek nagy részének nem hajlik a talpa eléggé, ami gátolja a mozgást, 
                        illetve soknak nem jó helyen van a sarok-alátámasztása, ezért sokkal nehezebb bennük megtalálni az egyensúlyt, mint egy rendes tánccipőben. 
                        Kezdőként inkább válassz lapos talpú cipőt, az is teljesen megfelel a tánchoz. Éppen elég az elején a lépésekre figyelni, nem kell, hogy elvonja a 
                        figyelmedet az "egyensúlyozás" is.`,
                        `Magassarkú tánccipő esetén a sarokvédő használata javasolt, hogy a cipő sarka ne csússzon, ne kopjon olyan gyorsan, és a parkettát se sértsd meg vele. 
                        Néhol emiatt kötelező is a használatuk.`,
                        `Ha új cipőt szeretnél felvenni, akkor érdemes fokozatosan hozzászoktatni azt a lábadhoz. Hozz el egy bevált régit is mellé, hogy ha kell, 
                        le tudd cseréni. Nehogy az új cipő rontsa el az estédet!`,
                    ],
                },
                {
                    head: 'Figyelj a higéniára!',
                    body: [
                        `Dicséretes, ha figyelsz a leheletedre. Érdemes a buli előtt egy mentolos rágót elrágni, vagy cukorkát elszopogatni. 
                        Tánc közben viszont már ne rágózz! Az csak az egyik dolog, hogy zavarhatja a partneredet, de mozgás közben bármikor félrenyelheted, és baj lehet belőle.`,
                        `Hozz kistörölközőt, használj dezodort! Ha könnyen megizzadsz, akkor erre fordíts különös figyelmet! 
                        A legjobb táncot is el tudja rontani, ha a partnered érzi, hogy mennyire kimelegedtél. Ha hajlamos vagy az izzadásra, 
                        akkor nyugodtan hozz egy-két váltás pólót vagy inget is! Az is segít, ha indulás előtt lezuhanyozol. 
                        Egy gyors szappanos kéz- és arcmosás pedig mindenképpen ajánlott a táncóra vagy buli előtt és közben.`,
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
                        `Jusson eszedbe megfelelő mennyiségű vizet inni, hogy pótold, amit tánc közben elveszítesz! 
                        Viszont ne igyál kimelegedve túlságosan hideg vizet, mert megfázhatsz, de hirtelen túl sokat se, 
                        mert ettől is rosszul lehetsz, mintha tele hassal táncolnál!`,
                    ],
                },
            ],
        },
        eventdesc: {
            music: 'Zenét szongáltatja: ',
            thematics: 'Tematika: ',
            pictures: 'Képek',
            video: 'Videó',
            wokshopparty: [
                'A workshop résztvevői ingyenesen részt vehetnek a ',
                ' nevű rendezvényen amely ',
                ' estéjén lesz megrendezve ',
            ],
            form: {
                title: 'JELENTKEZNI az alábbi linken lehet: ',
                link: 'Link a formhoz',
                paragraph: `Siess, a helyek limitáltak! 
                Amennyiben párban jöttök a kérdőívet mindketten töltsétek ki. 
                A workshop csak elegendő számú jelentkező esetén indul.`,
                teaching: [
                    'A tánccal ',
                    ' fognak megismertetni',
                ],
            },
        },
        etikett: {
            title: 'Tánc etikett',
            main: `Minden társaságnak, helynek megvannak a maga normái, "szabályai", így a társastáncos közösségekben is vannak bizonyos illemszabályok, 
            amelyeket érdemes betartani. Ezeket szedtük csokorba az alábbiakban.`,
            tabs: [
                {
                    head: 'Kérés az urakhoz',
                    body: `A táncos közösségek akkor maradnak egészségesek, akkor tudnak bővülni, színesedni, ha annak minden tagja tud fejlődni és 
                    jól érzi magát az eseményeken. Ide értendők a parkett szélén partnerre váró hölgyek is. Ők is szórakozni, fejlődni jönnek, ahogy 
                    mindenki más is. Ahhoz, hogy ez sikerülhessen, kérünk Benneteket, Urakat, hogy az este során két-három számot olyan lánnyal is 
                    táncoljatok, akivel még egyáltalán nem táncoltatok, vagy már nagyon régen. Ezzel örömet okoztok a lányoknak, jól fogják érezni magukat 
                    az este folyamán és legközelebb is el fognak jönni, jobban tudnak fejlődni, be tudnak kerülni a bulik vérkeringésébe. 
                    Előre is köszönjük a lányok nevében!`,
                },
                {
                    head: 'Felkérés',
                    body: `A társastáncban általában a férfiak kérik fel a nőket. (Néhány táncban ez fordítva is elfogadott, illetve alkalmanként egy-egy 
                        táncra hirdethetnek hölgyválaszt, ilyenkor a nők kérhetik fel a férfiakat.)
                        Felkéréskor lépj oda a kiválasztott partnerhez és felfelé fordított tenyérrel és egy rövid „Szabad (egy táncra)?” vagy „Táncolunk?” kérdéssel jelezd szándékodat! 
                        A felkérést illik elfogadni egy „Igen” vagy „Igen, de csak egyre” válasszal. 
                        Ez alól kivételt képez ha az illető udvariatlan, nem ad kellően magára, vagy esetleg túl fáradt vagy, 
                        vagy nem érzed jól magad. Ez esetben viszont az adott számra már nem illik mással elmenni táncolni.
                        Ha még nem ismeritek a partnereteket, akkor mutatkozzatok be egymásnak!
                        A felkérést követően az úr vezeti a parkettre a hölgyet: elegendő hely esetén maga mellett, tömeg esetén a kezét fogva maga mögött.
                        (Bulikban nem szokás, bálokban előfordulhat a lekérés. Ez esetben az úr megáll a táncoló pár mellett és egy rövid „Szabad?” kérdéssel jelzi szándékát.
                        Ezt szintén nem illik elutasítani, de a lekért hölgyet visszakérni sem illik.)`,
                },
                {
                    head: 'Vezetés',
                    body: `A táncban a férfi vezeti a hölgyet és a nő reagál a vezetésre. Ha a hölgy próbál vezetni, az nagyon kellemetlen szituációhoz vezethet. 
                    Kérjük a Hölgyeket, hogy egy ügyetlenebb partner esetén se vegyétek át az irányítást, mert ha nem hagyod vezetni, 
                    akkor sosem fogja tudni rendesen megtanulni, ráadásul lehet, hogy többet nem kér fel, mert a férfiak nem szeretnek olyan nővel táncolni, 
                    aki nem hagyja magát vezetni.`,
                },
                {
                    head: 'Tánctudás és figurák',
                    body: `Nem tud mindenki tökéletesen táncolni. Ha a partnerünknek észre is vesszük valamilyen hiányosságát, akkor sem illik erre felhívni a figyelmét, 
                    pláne nem bántó bejegyzéseket tenni rá. Tegyünk úgy, mintha észre sem vettük volna, vagy mosolyogjunk rajta együtt!
                    A férfiaknak is időbe telik megtanulni vezetni, a nőknek pedig követni, alkalmazkodni. Ráadásul minden egyes partnert meg kell szokni a tánc elején, 
                    ezért érdemes a táncot egyszerűbb figurákkal kezdeni és ezekkel egymásra hangolódni. Ha úgy érzed, hogy nem oldódott fel eléggé a partnered, akkor dicsérd meg, 
                    ez biztosan segíteni fog! Viszont ha látod, hogy egy adott figurát a partnered nem tud lekövetni, vagy kényelmetlenül érzi magát benne 
                    (túl bonyolult vagy túl intim neki), akkor azt ne próbálgasd vele túl sokszor, mert nem lesz számára jó élmény a tánc! 
                    (Az emeléseket teljesen hanyagold, azok fellépésekre valók, nem bulikba!)`,
                },
                {
                    head: 'Tánc után',
                    body: `Ha vége a számnak, akkor köszönjük meg egymásnak a táncot, majd az úrnak illik visszakísérnie a hölgyet a parkett szélére, vagy abba a társaságba, ahonnan felkérte.
                    Ha egy tánc nem is úgy sikerült, ahogy azt terveztétek, akkoris őrizzétek meg a jókedveteket és ne bíráljátok a partnereteket, mert mindketten szórakozni jöttetek! 
                    A bántó megjegyzéseket mindenképp kerüljétek, esetleg kritikát fogalmazhattok meg, de csak óvatosan, ne vigyétek túlzásba, és ne bántóan! 
                    A dicsérettel szintén mértékkel, nehogy a másik fejébe szálljon!
                    Ha mindketten élveztétek a táncot, akkor felkérheted újra, de ne túl sokszor, mert lehet, hogy a másik pihenni szeretne kicsit, illetve ha nincsenek komolyabb szándékaid, 
                    akkor nem is illik a másikkal 2-3 számnál többet táncolni egyhuzamban.`,
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
                descripiton: 'A kör tagjai különböző egyéniségek, akik kiegészítve egymást egy összekovácsolódott csapatot alkotnak.',
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
                descripiton: 'Minden táborban elmegyünk borkóstolóra, hogy a tánctudásunk mellett az ízlésünk is fejlődhessen.',
            },
        ],
    },
});

export default strings;
