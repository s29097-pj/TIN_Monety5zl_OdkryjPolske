// Prezentacja monet z serii
document.addEventListener("DOMContentLoaded", function() {
    const slidesData = [{
        // Dane dla monet
            title: "25 lat wolności",
            description: `"Jest to pierwsza moneta okolicznościowa o nominale 5 zł z serii Odkryj Polskę. 
            Moneta została wyemitowana, aby upamiętnić 25 lat wolności. Upadek komunizmu rozpoczął serię 
            największych przemian w Europie w XX wieku. Wiele wydarzeń, do których doszło w Polsce 
            zakończyło komunizm w Polsce m.in. powstanie Solidarności oraz pierwsze częściowo wolne wybory 
            w historii Polski po II wojnie światowej, do których doszło 4 czerwca 1989 roku."`,
            rewers: `"Na pierwszym planie gest Wiktorii, będący symbolem zwycięstwa i wolności. 
            Natomiast w tle przedstawiony został kontur mapy Polski na stylizowanej powierzchni dekoracyjnej."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2014 rok"`,
            coinImage: "../img/2014_07___25lat_5zl_R.jpg",
            awersImage: "../img/2014_07___25lat_5zl_A.jpg"
        },

        {
            title: "Zamek Królewski w Warszawie",
            description: `"Moneta została wyemitowana, aby upamiętnić Zamek Królewski w Warszawie. 
            Zamek Królewski w Warszawie jest jedną z najważniejszych rezydencji monarszych w Europie. 
            Nie tylko ze względu na urodę swej architektury: powściągliwie surowej i eleganckiej 
            od strony placu Zamkowego i barokowo obfitej od strony Wisły czy klasę artystyczną 
            swych paradnych wnętrz wypełnionych wybitnymi dziełami sztuki, ale przede wszystkim 
            ze względu na swą dramatyczną historię, która wyznaczyła mu rolę symbolu suwerenności państwa polskiego"`,
            rewers: `"Przedstawia Zamek Królewski w Warszawie"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2014 rok"`,
            coinImage: "../img/2014_15___zamek_krolewski_w_Warszawie_5zl_R.jpg",
            awersImage: "../img/2014_15___zamek_krolewski_w_Warszawie_5zl_A.jpg"
        },

        {
            title: "Kanał Bydgoski",
            description: `"Kanał Bydgoski został wybudowany w latach 1773-1774. Jego budowa trwała zaledwie półtora roku. 
            Jest zabytkiem hydrotechnicznym, połączył dorzecza Wisły i Odry, poprzez ich dopływy - Noteć i Brdę. 
            Na przełomie XVIII/XIX wieku zbudowano śluzy murowane, które przetrwały do dziś. 
            Jest on najstarszym czynnym kanałem na terenie Polski, który od drugiej połowie XIX wieku zyskał 
            na znaczeniu wraz z pojawieniem się statków parowych na rzekach."`,
            rewers: `"Kanał Bydgoski"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: ..."`,
            coinImage: "../img/2015_05___kanal_bydgoski_5zl_R.jpg",
            awersImage: "../img/2015_05___kanal_bydgoski_5zl_A.jpg"
        },

        {
            title: "Ratusz w Poznaniu",
            description: `„Poznański ratusz jest najwspanialszą budowlą renesansową w Wielkopolsce i jedną z piękniejszych w Polsce. 
            Najstarsza wzmianka o budynku pochodzi z 1310 r. Wzniesiono go zapewne niewiele wcześniej, na przełomie XIII i XIV w. 
            W połowie XVI wieku wielki pożar strawił część starego gmachu. Miasto zaprosiło wówczas do współpracy włoskiego architekta 
            Jana Baptystę Quadro z Lugano, który przebudował skromny gotycki budynek na okazałą, reprezentacyjną siedzibę władz miejskich, 
            którą podziwiamy do dziś. Wnętrza ratusza są dziś siedzibą Muzeum Historii Miasta Poznania (oddziału Muzeum Narodowego)”.`,
            rewers: `"Wizerunek poznańskiego ratusza z ulicy Woźnej. Z prawej strony zostały przedstawione 
            symboliczne dla Poznania dwa koziołki stykające się głowami. Wizerunek budowli odwzorowany na monecie wychodzi poza centralną 
            część rewersu,  tworząc przedłużenie perspektywy."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2015 rok"`,
            coinImage: "../img/2015_12___ratusz_poznan_5zl_R.jpg",
            awersImage: "../img/2015_12___ratusz_poznan_5zl_A.jpg"
        },

        {
            title: "Księży Młyn w Łodzi",
            description: `„Księży Młyn to dawna część Łodzi położona nad rzeką Jasień. Od XV wieku stał tu młyn łódzkiego proboszcza. 
            Na początku XIX wieku na miejscu młyna zbudowano przędzalnię napędzaną kołem wodnym. W 1872 r. zniszczoną przędzalnię wraz 
            z gruntami młyńskimi zakupił najsławniejszy i zarazem największy polski fabrykant Karol Wilhelm Scheibler”.`,
            rewers: `"Panorama przędzalni Księżego Młyna w Łodzi, wraz z odbiciem w tafli wody. Wizerunek budowli odwzorowany na monecie 
            wychodzi poza centralną część rewersu, tworząc przedłużenie perspektywy."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2016 rok"`,
            coinImage: "../img/2016_09___ksiezy_mlyn_5zl_R.jpg",
            awersImage: "../img/2016_09___ksiezy_mlyn_5zl_A.jpg"
        },

        {
            title: "Zamek Książąt Pomorskich w Szczecinie",
            description: `„Zamek Książąt Pomorskich w Szczecinie to historyczna siedziba rodu Gryfitów, władającego przez niemal 500 lat 
            Pomorzem Zachodnim. Budowla jest najlepiej widoczna znad Odry; wielokrotnie przebudowywana odzwierciedla złożoną i burzliwą historię regionu”.`,
            rewers: `"W centralnej części rewersu widnieje Zamek Książąt Pomorskich w Szczecinie. W tle widnieje wizerunek żaglowca. "`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2016 rok"`,
            coinImage: "../img/2016_14___zamek_ksiazat_pomorskich_w_szczecinie_5zl_R.jpg",
            awersImage: "../img/2016_14___zamek_ksiazat_pomorskich_w_szczecinie_5zl_A.jpg"
        },

        {
            title: "Kaplica Trójcy Świętej na Zamku Lubelskim",
            description: `„Zabytkowa kaplica pod wezwaniem Trójcy Świętej na Zamku w Lublinie jest bezcennym przykładem spotkania dwóch tradycji kulturowych
             - łacińskiego Zachodu i bizantyńskiego Wschodu. Gotycka ceglana kaplica została wzniesiona z inicjatywy Kazimierza Wielkiego w II połowie XIV wieku 
             jako część zabudowy zamku królewskiego, który powstał w tym samym czasie. Wysmukła gotycka bryła dzieli się na dwie kondygnacje 
             - niższą (przyziemie) i wyższą składającą się z nawy z centralnym filarem, na który spływają żebra sklepienia, oraz z węższego, zamkniętego 
             od wschodu wielobocznie, prezbiterium. W 1418 roku, z inicjatywy Wielkiego Księcia Litewskiego i króla Polski Władysława Jagiełły, 
             wnętrze kaplicy zostało pokryte, dobrze zachowanymi do dziś, freskami bizantyńsko-ruskimi. Król znany był ze swego przywiązania do tradycji 
             i kultury wschodniego chrześcijaństwa, ponieważ jego matka, ruska księżniczka, wyrosła w tradycji prawosławia”.`,
            rewers: `"Wnętrze Kaplicy Trójcy Świętej na Zamku Lubelskim. Natomiast na tle zabytkowych okien kaplicy widnieje fresk z konnym portretem 
            króla Władysława Jagiełły."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2017 rok"`,
            coinImage: "../img/2017_05___kaplica_5zl_R.jpg",
            awersImage: "../img/2017_05___kaplica_5zl_A.jpg"
        },

        {
            title: "Centralny Okręg Przemysłowy",
            description: `"Centralny Okrąg Przemysłowy (COP) jest ośrodkiem przemysły ciężkiego budowanego w latach 1936-1939. 
            COP obejmował południowo-centralne dzielnice Polski o powierzchni 60 000 km². Powstał według koncepcji wicepremiera 
            i ministra skarbu Eugeniusza Kwiatkowskiego. Głównym celem było zwiększenie ekonomicznego potencjału Polski  w globalnej skali." `,
            rewers: `"Wizerunek budynku - siedziba dyrekcji naczelnej Zakładów Południowych (pierwotna nazwa Huty Stalowa Wola zaprojektowany w stylu art déco;
            szedowy dach hali produkcyjnej Zakładów Tele- i Radiotechnicznych w Poniatowej; kominy fabryczne oraz motyw graficzny zaczerpnięty 
            z klatki schodowej bloku na osiedlu mieszkaniowym pracowników PZL w Mielcu, również inwestycji copowskiej."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2017 rok"`,
            coinImage: "../img/2017_21___COP_R.jpg",
            awersImage: "../img/2017_21___COP_A.jpg"
        },

        {
            title: "Zabytki Fromborka",
            description: `"Bazylika archikatedralna Wniebowzięcia NMP i św. Andrzeja Apostoła we Fromborku została wzniesiona w latach 1329-1388 
            w klasycznym stylu gotyckim. Została wybudowana na miejscu drewnianej budowli, pełniącej funkcję katedry. Murowana bazylika przetrwała 
            do dnia dzisiejszego w stanie prawie nienaruszonym. Katedra również znana jest jako miejsce pochówku Mikołaja Kopernika (1543). 
            Zachowało się bardzo bogate historyczne wyposażenie katedry. "`,
            rewers: `"Wizerunek bazyliki archikatedralnej Wniebowzięcia NMP i św. Andrzeja Apostoła we Fromborku."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2019 rok"`,
            coinImage: "../img/2019_12___frombork_R.jpg",
            awersImage: "../img/2019_12___frombork_A.jpg"
        },

        {
            title: "Kopiec Wyzwolenia",
            description: `"Kopiec został usypany w latach 1932-1937 dla uczczenia 250. rocznicy przemarszu husarii polskiej króla Jana III Sobieskiego 
            pod Wiedeń oraz 15. rocznicy przyłączenia wschodniej części Górnego Śląska do Polski (obchodzona w 1937 roku). Stał się symbolem walki 
            o polskość i pamiątką walk powstańców śląskich. Wznosi się na wysokość 356 m n.p.m., a 20 m od poziomu gruntu, co stanowi najwyższy punkt 
            w granicach miasta i położony jest w zachodniej części centrum Piekar Śląskich."`,
            rewers: `"Kopiec Wyzwolenia w Piekarach Śląskich oraz fragmentu koła szybowego z kopalni „Julian”."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2019 rok"`,
            coinImage: "../img/2019_25___kopiec_R.jpg",
            awersImage: "../img/2019_25___kopiec_A.jpg"
        },

        {
            title: "Kościół Mariacki",
            description: `"Wokół Rynku Głównego, w sercu starego królewskiego miasta Krakowa, od 800 lat żyje i rozwija się parafia Mariacka. 
            Jej symbolem i miejscem wyznawania wiary parafian, mieszkańców miasta i przyjezdnych gości jest kościół Mariacki 
            - świątynia poświęcona Matce Bożej. Pierwsze wzmianki o istnieniu parafii pochodzą z lat dwudziestych XIII wieku. 
            Źródła wskazują, że jej początki są związane ze sprowadzeniem do Krakowa przez biskupa Iwona Odrowąża zakonu dominikanów 
            i przeniesieniem oddanej im wówczas parafii z kościoła św. Trójcy do świątyni Mariackiej. Tuż po wybudowaniu prezbiterium 
            zaczęto odprawiać w niej nabożeństwa, jednak szybko rosnąca liczba wiernych skłoniła ówczesne władze kościelne i włodarzy miejskich 
            do rozbudowy świątyni."`,
            rewers: `"Fasada Kościoła Mariackiego od strony południowo-wschodniej. "`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2020 rok"`,
            coinImage: "../img/2020_07___op_mariacki_R.jpg",
            awersImage: "../img/2020_07___op_mariacki_A.jpg"
        },

        {
            title: "Pałac Branickich w Białymstoku",
            description: `"Zabytkowy pałac w Białymstoku, jedna z najlepiej zachowanych rezydencji magnackich epoki saskiej na ziemiach 
            dawnej Rzeczypospolitej w stylu późnobarokowym określany mianem „Wersalu Podlasia”, „Wersalem Północy”, a także „Polskim Wersalem”. 
            Początki pałacu sięgają XVI wieku."`,
            rewers: `"Pałac Branickich w Białymstoku"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2020 rok"`,
            coinImage: "../img/2020_20___bialystok_R.jpg",
            awersImage: "../img/2020_20___bialystok_A.jpg"
        },
        
        {
            title: "Brama Żuraw w Gdańsku",
            description: `"Zabytkowy dźwig portowy i jedna z bram wodnych Gdańska, która mieści się nad Motławą, na końcu ulicy Szerokiej. 
            Jest to jedna z filii Narodowego Muzeum Morskiego w Gdańsku oraz największy i najstarszy z zachowanych dźwigów portowych średniowiecznej Europy."`,
            rewers: `"Brama Żuraw w Gdańsku"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2021 rok"`,
            coinImage: "../img/2021_09___brama_zuraw_R.jpg",
            awersImage: "../img/2021_09___brama_zuraw_A.jpg"
        },

        {
            title: "Zamek Książ w Wałbrzychu",
            description: `"Zabytkowy zamek w kompleksie zamkowym, zlokalizowany w wałbrzyskiej dzielnicy Książ na Pogórzu Wałbrzyskim, 
            będący częścią Książańskiego Parku Krajobrazowego. Przez obiekt przebiega Szlak Zamków Piastowskich i jest trzecim co do wielkości 
            zamkiem w Polsce (po Zamku w Malborku i Zamku Królewskim na Wawelu)."`,
            rewers: `"Zamek Książ w Wałbrzychu"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2021 rok"`,
            coinImage: "../img/2021_24___ksiaz_R.jpg",
            awersImage: "../img/2021_24___ksiaz_A.jpg"
        },
        
        {
            title: "Zamek w Mosznej",
            description: `"Zabytkowa rezydencja położona we wsi Moszna, w województwie opolskim, pomiędzy miastami Prudnik i Krapkowice. 
            W latach 1866-1945 pałac był rezydencją śląskiego rodu Tiele-Wincklerów, potentatów przemysłowych. W latach 1996-2013 Centrum Terapii Nerwic. 
            Pałac jest częściowo udostępniony do zwiedzania. W galerii odbywają się koncerty muzyki kameralnej oraz wystawy dzieł sztuki. 
            W obiekcie odbywa się doroczne Muzyczne Święto Kwitnących Azalii w maju i czerwcu jest tu popularyzowana muzyka polskich i europejskich kompozytorów, 
            w czasie święta galeria prezentuje wystawy plastyczne, odbywają się tu również plenery malarskie."`,
            rewers: `"Zamek w Mosznej"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2022 rok"`,
            coinImage: "../img/2022_10___moszna_R_big.jpg",
            awersImage: "../img/2022_10___moszna_A_big.jpg"
        },

        {
            title: "Klasztor pobenedyktyński na Świętym Krzyżu",
            description: `"Zespół klasztorny założony przez benedyktynów, położony na Świętym Krzyżu (Łysej Górze), w Nowej Słupi. 
            Przechowywane w nim są relikwie Krzyża Świętego, od których opactwo i wzgórze wzięło swoją nazwę. Od 1936 klasztor zamieszkuje 
            Zgromadzenie Misjonarzy Oblatów Maryi Niepokalanej. Klasztor benedyktynów na Świętym Krzyżu jest zabytkiem o szczególnym znaczeniu 
            dla kultury i dziedzictwa polskiego, 
            przede wszystkim dzięki swoim wartościom historycznym i religijnym."`,
            rewers: `"Klasztor pobenedyktyński na Świętym Krzyżu"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2022 rok"`,
            coinImage: "../img/2022_21___swiety_krzyz_R_big.jpg",
            awersImage: "../img/2022_21___swiety_krzyz_A_big.jpg"
        },

        {
            title: "Kanał Żeglugowy przez Mierzeję Wiślaną",
            description: `"Kanał łączący drogą morską Zalew Wiślany z Zatoką Gdańską w obrębie terytorium Polski, mający na celu skrócenie, 
            pogłębienie i uproszczenie morskiego szlaku na Bałtyk. Otwarcie kanału nastąpiło 17 września 2022. 
            Kanał jest częścią inwestycji budowy drogi wodnej łączącej Zalew Wiślany z Zatoką Gdańską wraz z torem wodnym prowadzącym do Elbląga, 
            o długości 22,88 km."`,
            rewers: `"Kapitanat Portu Nowy Świat oraz wejście do kanału od strony Zalewu Wiślanego."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2023 rok"`,
            coinImage: "../img/2023_08___mierzeja_R_big.jpg",
            awersImage: "../img/2023_08___mierzeja_A_big.jpg"
        },

        {
            title: "Gościkowo-Paradyż - pocysterski zespół klasztorny",
            description: `"Zespół klasztorny opactwa cysterskiego w Gościkowie-Paradyżu - pocysterski barokowy zespół klasztorny z kościołem 
            Wniebowzięcia Najświętszej Marii Panny i św. Marcina położony w Gościkowie w Wielkopolsce, administracyjnie w województwie lubuskim 
            w gminie Świebodzin przy drodze łączącej Zieloną Górę z Gorzowem Wielkopolskim. Część miejscowości, w której znajduje się opactwo 
            zachowała starą nazwę Paradyż pochodzącą od sformułowania Paradisus Sanctae Mariae czyli Raj Matki Bożej, która była nazwą nadaną 
            miejscowości po przybyciu do niej cystersów. Jest to największe i najlepiej zachowane założenie klasztorne w województwie lubuskim, 
            obecnie siedziba Wyższego Seminarium Duchownego Diecezji Zielonogórsko-Gorzowskiej będącego jednocześnie filią Wydziału Teologicznego 
            Uniwersytetu Szczecińskiego oraz Muzeum Paradyskiego. 15 sierpnia 2020 ustanowione sanktuarium Matki Bożej Wychowawczyni Powołań Kapłańskich."`,
            rewers: `"Zespół klasztorny opactwa cysterskiego w Gościkowie-Paradyżu - pocysterski barokowy zespół klasztorny z kościołem 
            Wniebowzięcia Najświętszej Marii Panny i św. Marcina."`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 500 000 szt., data emisji: 2023 rok"`,
            coinImage: "../img/2023_20___goscinkowo_R_big.jpg",
            awersImage: "../img/2023_20___goscinkowo_A_big.jpg"
        },

        {
            title: "Opactwo Benedyktynów w Tyńcu",
            description: `"Opactwo benedyktyńskie w Tyńcu, założone w 1044 r., jest najstarszym istniejącym klasztorem
            w Polsce. Tym samym jest wyjątkowym świadkiem rozwoju monastycyzmu w Europie oraz długiej i burzliwej historii Polski: od zarania państwowości, 
            przez złoty wiek, rozbiory, aż do jej odrodzenia w XX w.
            Pierwotna funkcja miejsca mimo kasaty i zniszczeń w XIX w. się nie zmieniła. Położenie na skalistym wapiennym wzgórzu w zakolu Wisły i otaczający
            krajobraz, w który zabudowa klasztorna jest wkomponowana, sprawiają, że tynieckie opactwo ma swoisty genius loci – to miejsce spotkania piękna natury,
            tysiącletniej historii, zabytków i wciąż żywej kultury duchowej oraz gościnności."`,
            rewers: `"Opactwo Benedyktynów w Tyńcu"`,
            awers: `"Orzeł polski, znak mennicy, data poniżej 2022. Nazwa kraju RZECZPOSPOLITA POLSKA, nominał u dołu 5 ZŁOTYCH."`,
            specyfikacja: `"emitent: Narodowy Bank Polski, nominał: 5 zł, metal: stop - pierścień MN25, rdzeń: CuAl6Ni2, stempel: zwykły, 
            masa: 6,54 g, naklad: do 1 000 000 szt., data emisji: 2024 rok"`,
            coinImage: "../img/2024_09___tyniec_R.jpg",
            awersImage: "../img/2024_09___tyniec_A.jpg"
        },

        // Można dodawać kolejne monety po dniu emisji

    ];
    const slidesContainer = document.getElementById("coin-slides-container");
    const dotsContainer = document.getElementById("dots-container");
    slidesData.forEach((data, index) => {
        const slide = document.createElement("div");
        slide.classList.add("mySlides", "fade");
        slide.id = `coin-slide-${index + 1}`;
        const slideContent = `
            <div class="numbertext">Moneta ${index + 1} z ${slidesData.length}</div>
            <div class="coin-container">
                <h1>${data.title}</h1>
                <div class="coin-img" id="coin-${index + 1}">
                    <div class="coin-r face" style="background-image: ${data.coinImage ? `url(${data.coinImage})` : 'none'};"></div>
                    <div class="coin-a face" style="background-image: ${data.awersImage ? `url(${data.awersImage})` : 'none'};"></div>
                </div>
                <div class="tabs">
                    <div class="tabby-tab">
                        <input type="radio" id="tab-1-${index + 1}" name="tabby-tabs-${index + 1}" checked>
                        <label for="tab-1-${index + 1}">Opis</label>
                        <div class="tabby-content">
                            <p>${data.description}</p>
                        </div>
                    </div>

                    <div class="tabby-tab">
                        <input type="radio" id="tab-2-${index + 1}" name="tabby-tabs-${index + 1}">
                        <label for="tab-2-${index + 1}">Rewers</label>
                        <div class="tabby-content">
                            <p>${data.rewers}</p>
                        </div>
                    </div>

                    <div class="tabby-tab">
                        <input type="radio" id="tab-3-${index + 1}" name="tabby-tabs-${index + 1}">
                        <label for="tab-3-${index + 1}">Awers</label>
                        <div class="tabby-content">
                            <p>${data.awers}</p>
                        </div>
                    </div>

                    <div class="tabby-tab">
                        <input type="radio" id="tab-4-${index + 1}" name="tabby-tabs-${index + 1}">
                        <label for="tab-4-${index + 1}">Specyfikacja</label>
                        <div class="tabby-content">
                            <style>
                                td, th {
                                    border: 1px solid black;
                                }
                            </style>
                            <p>${data.specyfikacja}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        slide.innerHTML = slideContent;
        slidesContainer.appendChild(slide);
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.onclick = () => currentSlide(index + 1);
        dotsContainer.appendChild(dot);
    });
    // Wywołanie funkcji, aby wczytać tylko pierwszy slajd na początku
    showSlides(slideIndex);
});

// Obracanie monety po kliknięciu
document.addEventListener('DOMContentLoaded', function () {
    [].forEach.call(document.querySelectorAll(".coin-img"), function (coin, i, coins) {
      coin.addEventListener("click", function (e) {
        e.currentTarget.classList.toggle("flipped");
      });
    });
  
    var coinContainerElement = document.getElementById('coinContainer');
  });

