import type { Landmark } from './landmarkTypes';

export const artGalleriesLandmarks: Landmark[] = [
  //japanese-covered-bridge
  {
    id: 'Rainbow-Coffee-Restaurant-Hoi-An', // <-- ID теперь строковый
    coordinates: [15.906708185789533, 108.31573872344867], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks', 'art-galleries'], // <-- Категория "museum"
    imageUrl: '1.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      // <-- Весь английский контент теперь внутри объекта 'en'
      title: 'Rainbow Coffee & Restaurant',
      description:
        "Hoi An's famous symbol, built in the 16th century by the Japanese community.",
      fullDescription: `
<p>If you've been to Hoi An and haven't taken a picture on the Japanese Covered Bridge (Chùa Cầu), then you haven't really been to Hoi An. Seriously, this bridge is so delightful it even made it onto the city's emblem! And for good reason, it has a very unusual history...</p>

<img src="26.jpg" alt="Japanese Bridge Detail"/>

<p>This bridge is a real superstar, staring back at you from the 20,000 Vietnamese Dong (VND) banknote! Don't be surprised if you see crowds of tourists seriously holding this banknote next to the bridge, trying to get "that shot." While it may not be the most original shot in the world, it's impossible to resist such a selfie! After all, it's not every day you hold money in your hands that depicts what's behind you, right?</p>

<h6>The Japanese Left, But The Bridge Remained</h6>
<p>Imagine the 17th century: Hoi An is an international trade hub in Southeast Asia, attracting merchants from all corners of the globe. Japanese and Chinese traders were so active here that they decided: "Let's build a bridge to make it easier to visit each other!" And so, in 1593, our hero came into being.</p>

<img src="2.jpg" alt="Japanese Bridge Detail"/>

<p>Few people know this, but the Japanese actively lived in Hoi An until 1663, and then... Boom! The Japanese government suddenly declared: "That's it, stop trading! We're going into lockdown!" (Well, almost). So Japan went into isolation, and its magnificent legacy – this bridge – remained standing, like a greeting from the past.</p>

<h6>Bridge, Temple, and a Little Mystery</h6>

<img src="25.jpg" alt="Japanese Bridge Detail"/>
<small>Statue of the Taoist God of Weather, Tran Bo Bac De</small>

<p>You walk across the bridge, and there's a... temple? Yes, right in the middle of the bridge, a small altar is nestled. It's dedicated to the Taoist Jade Emperor Yu-di. It's funny because Taoism wasn't widely practiced in Japan, so it's likely the temple was added by the Vietnamese later. It's a kind of cultural bridge that connects not only shores but also beliefs!</p>

<img src="24.jpg" alt="Japanese Bridge Detail"/>

<p>And on both sides of the bridge, you're greeted by stone statues of dogs and monkeys. Don't ask why them specifically – it's one of those Hoi An mysteries that makes you scratch your head. Maybe it's because of the years of construction (started in the Year of the Dog, finished in the Year of the Monkey)? Or, as another version suggests, many Japanese emperors were born in these years? In any case, they're here for a reason, and locals still adorn them and make offerings. Who knows, maybe they really are the guardians of the bridge, and whether you'll be lucky today depends on them!</p>

<h6>Fighting the Underwater Catfish</h6>
<p>Here's where it gets wild (in a good way)! The bridge wasn't built just for fun; it had a very important mission – to pin down a gigantic mythical catfish named Onamazu (大鯰)!</p>

<img src="3.jpg" alt="Onamazu"/>
<small>Onamazu (Japanese: 大鯰 — "giant catfish")</small>

<p>The essence of the legend: In Japanese folklore, there's this enormous catfish that causes earthquakes when it wiggles its tail. Its head, they say, is under India, its tail under Japan, but its BACK PASSES RIGHT UNDER VIETNAM! And the bridge builders, apparently, were very clever engineers, because they built the bridge specifically to "pin down" the back of this monster, preventing it from thrashing. Thus, the Japanese Bridge became a kind of anti-seismic press for all of Central Vietnam.</p>
<img src="20.jpg" alt="Onamazu"/>

<p>We don't know how much Onamazu appreciated this "massage" therapy, but the bridge, built on strong wooden supports, truly has stood for hundreds of years! Although, to be honest, not without humanity's help. The bridge has undergone eight (!) major renovations (even in 2022 it was literally disassembled for "surgery"!), which probably also helped a bit to keep it from falling apart. But the catfish myth still sounds cooler, don't you agree?</p>

<h6>The Prince, the Carver, and Three Hieroglyphs</h6>

<p>In 1719, Prince Nguyễn Phúc Chu visited Hoi An. He was an important figure who ruled Southern Vietnam, almost like a king, from 1691 to 1725. And so, they say, he didn't just admire the bridge, but personally carved three Chinese characters above the temple door! Can you imagine? Instead of sending servants, the prince decided to do the carving himself. He must have felt inspired!</p>

<img src="23.jpg" alt="The Prince, the Carver, and Three Hieroglyphs"/>

<p>These symbols translate very poetically: "bridge for welcoming guests from afar." Or, in Vietnamese style, "Lai Viet Kieu." It's as if the bridge itself is saying: "Hello, traveler! Come in, make yourself at home, you belong here!" Such an ancient "welcome sign," carved by the hand of the ruler himself.</p>

<h6>The French Road and Why the Bridge is Pedestrian Only</h6>

<img src="21.jpg" alt="Japanese Bridge Detail"/>

<p>Times change, and even the Japanese Bridge had to endure its "fashion experiments." During colonial rule, the French decided: "Hey, why shouldn't motorcycles drive here?" and leveled the road across the bridge. Sounds like a great idea for traffic jams, right? Fortunately, this "innovation" was later canceled, and the bridge once again became pedestrian-only. And thank goodness, because what kind of "symbol" is it if bikes are speeding across it?</p>

<h6>A Small Bridge with a Giant Heart</h6>
<p>So, when you walk across the Japanese Bridge, know this: you're not just walking on planks, you're treading on living history, full of legends, cultural intricacies, and even mythical catfish. It doesn't just connect two shores – it connects eras, peoples, and perhaps even calms earthquakes. That's our Japanese Covered Bridge – small, but very proud and mysterious.</p>

<img src="22.jpg" alt="Japanese Bridge Detail"/>
      `,
      internalImageNames: [
        '2.jpg',
        '3.jpg',
        '22.jpg',
        '20.jpg',
        '21.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
      ],
    },
    es: {
      title: 'Puente Cubierto Japonés',
      description:
        'Símbolo famoso de Hoi An, construido en el siglo XVI por la comunidad japonesa.',
      fullDescription: `
<p>Si has estado en Hoi An y no te has tomado una foto en el Puente Cubierto Japonés (Chùa Cầu), entonces realmente no has estado en Hoi An. En serio, este puente es tan encantador que incluso llegó al emblema de la ciudad. Y con razón, ¡tiene una historia muy inusual!</p>

<img src="26.jpg" alt="Detalle del Puente Japonés"/>

<p>¡Este puente es una verdadera superestrella, mirándote fijamente desde el billete de 20.000 Dong vietnamitas (VND)! No te sorprendas si ves multitudes de turistas sosteniendo seriamente este billete junto al puente, tratando de conseguir "esa foto". Aunque no sea la foto más original del mundo, ¡es imposible resistirse a un selfie así! Después de todo, no todos los días tienes dinero en tus manos que representa lo que está detrás de ti, ¿verdad?</p>

<h6>Los japoneses se fueron, pero el puente permaneció</h6>
<p>Imagina el siglo XVII: Hoi An es un centro de comercio internacional en el sudeste asiático, atrayendo a mercaderes de todos los rincones del mundo. Los comerciantes japoneses y chinos eran tan activos aquí que decidieron: "¡Construyamos un puente para que sea más fácil visitarnos!" Y así, en 1593, nació nuestro héroe.</p>

<img src="2.jpg" alt="Detalle del Puente Japonés"/>

<p>Poca gente sabe esto, pero los japoneses vivieron activamente en Hoi An hasta 1663, y luego... ¡Boom! El gobierno japonés declaró de repente: "¡Ya está, parad de comerciar! ¡Nos vamos a un cierre!" (Bueno, casi). Así que Japón entró en aislamiento, y su magnífico legado –este puente– permaneció en pie, como un saludo del pasado.</p>

<h6>Puente, Templo y un pequeño misterio</h6>

<img src="25.jpg" alt="Detalle del Puente Japonés"/>
<small>Estatua del Dios Taoísta del Clima, Tran Bo Bac De</small>

<p>Caminas por el puente, ¿y hay un... templo? Sí, justo en el medio del puente, se encuentra un pequeño altar. Está dedicado al Emperador de Jade Taoísta Yu-di. Es curioso porque el taoísmo no era muy practicado en Japón, así que es probable que el templo fuera añadido por los vietnamitas más tarde. ¡Es una especie de puente cultural que conecta no solo orillas sino también creencias!</p>

<img src="24.jpg" alt="Detalle del Puente Japonés"/>

<p>Y a ambos lados del puente, te saludan estatuas de piedra de perros y monos. No preguntes por qué ellos específicamente – es uno de esos misterios de Hoi An que te hacen rascarte la cabeza. ¿Quizás sea por los años de construcción (empezó en el Año del Perro, terminó en el Año del Mono)? O, como sugiere otra versión, ¿muchos emperadores japoneses nacieron en estos años? En cualquier caso, están aquí por una razón, y los lugareños todavía los adornan y hacen ofrendas. Quién sabe, ¡quizás realmente sean los guardianes del puente, y tu suerte hoy dependa de ellos!</p>

<h6>Luchando contra el bagre submarino</h6>
<p>¡Aquí es donde la cosa se pone salvaje (en el buen sentido)! El puente no fue construido solo por diversión; tenía una misión muy importante: ¡sujetar a un gigantesco bagre mítico llamado Onamazu (大鯰)!</p>

<img src="3.jpg" alt="Onamazu"/>
<small>Onamazu (Japonés: 大鯰 — "bagre gigante")</small>

<p>La esencia de la leyenda: En el folclore japonés, existe este enorme bagre que causa terremotos cuando menea su cola. Su cabeza, dicen, está bajo la India, su cola bajo Japón, ¡pero su ESPALDA PASA JUSTO BAJO VIETNAM! Y los constructores del puente, al parecer, eran ingenieros muy inteligentes, porque construyeron el puente específicamente para "sujetar" la espalda de este monstruo, impidiendo que se agitara. Así, el Puente Japonés se convirtió en una especie de prensa antisísmica para todo el centro de Vietnam.</p>
<img src="20.jpg" alt="Onamazu"/>

<p>No sabemos cuánto apreció Onamazu esta terapia de "masaje", pero el puente, construido sobre fuertes soportes de madera, ¡realmente ha resistido durante cientos de años! Aunque, para ser honesto, no sin la ayuda de la humanidad. El puente ha sufrido ocho (¡!) renovaciones importantes (¡incluso en 2022 fue literalmente desensamblado para una "cirugía"!), lo que probablemente también ayudó un poco a que no se desmoronara. Pero el mito del bagre sigue sonando más genial, ¿no crees?</p>

<h6>El Príncipe, el Tallador y Tres Jeroglíficos</h6>

<p>En 1719, el Príncipe Nguyễn Phúc Chu visitó Hoi An. Fue una figura importante que gobernó el sur de Vietnam, casi como un rey, de 1691 a 1725. Y así, dicen, no solo admiró el puente, ¡sino que personalmente talló tres caracteres chinos sobre la puerta del templo! ¿Te imaginas? En lugar de enviar sirvientes, el príncipe decidió hacer el tallado él mismo. ¡Debe haberse sentido inspirado!</p>

<img src="23.jpg" alt="El Príncipe, el Tallador y Tres Jeroglíficos"/>

<p>Estos símbolos se traducen muy poéticamente: "puente para dar la bienvenida a los huéspedes de lejos". O, al estilo vietnamita, "Lai Viet Kieu". ¡Es como si el propio puente dijera: "¡Hola, viajero! Adelante, siéntete como en casa, aquí perteneces!" Una antigua "señal de bienvenida", tallada por la mano del propio gobernante.</p>

<h6>El Camino Francés y Por Qué el Puente es Solo Peatonal</h6>

<img src="21.jpg" alt="Detalle del Puente Japonés"/>

<p>Los tiempos cambian, e incluso el Puente Japonés tuvo que soportar sus "experimentos de moda". Durante el dominio colonial, los franceses decidieron: "Oye, ¿por qué no deberían conducir motos aquí?" y nivelaron la carretera a través del puente. Suena a una gran idea para los atascos, ¿verdad? Afortunadamente, esta "innovación" fue cancelada más tarde, y el puente volvió a ser solo para peatones. Y gracias a Dios, porque ¿qué tipo de "símbolo" es si las motos lo cruzan a toda velocidad?</p>

<h6>Un Pequeño Puente con un Gran Corazón</h6>
<p>Así que, cuando camines por el Puente Japonés, sabrás esto: no solo estás caminando sobre tablones, estás pisando historia viva, llena de leyendas, complejidades culturales e incluso bagres míticos. No solo conecta dos orillas, conecta épocas, pueblos y quizás incluso calma los terremotos. Ese es nuestro Puente Cubierto Japonés: pequeño, pero muy orgulloso y misterioso.</p>

<img src="22.jpg" alt="Detalle del Puente Japonés"/>
      `,
      internalImageNames: [
        '2.jpg',
        '3.jpg',
        '22.jpg',
        '20.jpg',
        '21.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
      ],
    },
    fr: {
      title: 'Pont couvert japonais',
      description:
        'Célèbre symbole de Hoi An, construit au 16ème siècle par la communauté japonaise.',
      fullDescription: `
<p>Si vous êtes allé à Hoi An et que vous n'avez pas pris de photo sur le Pont couvert japonais (Chùa Cầu), alors vous n'êtes pas vraiment allé à Hoi An. Sérieusement, ce pont est si charmant qu'il a même figuré sur l'emblème de la ville ! Et pour une bonne raison, il a une histoire très inhabituelle...</p>

<img src="26.jpg" alt="Détail du pont japonais"/>

<p>Ce pont est une vraie superstar, il vous regarde depuis le billet de 20 000 Dongs vietnamiens (VND) ! Ne soyez pas surpris si vous voyez des foules de touristes tenir sérieusement ce billet à côté du pont, essayant d'obtenir "ce cliché". Bien que ce ne soit pas le cliché le plus original du monde, il est impossible de résister à un tel selfie ! Après tout, ce n'est pas tous les jours que vous tenez de l'argent dans vos mains qui représente ce qui est derrière vous, n'est-ce pas ?</p>

<h6>Les Japonais sont partis, mais le pont est resté</h6>
<p>Imaginez le 17ème siècle : Hoi An est un centre commercial international en Asie du Sud-Est, attirant des marchands des quatre coins du globe. Les commerçants japonais et chinois étaient si actifs ici qu'ils ont décidé : "Construisons un pont pour faciliter nos visites mutuelles !" Et c'est ainsi qu'en 1593, notre héros a vu le jour.</p>

<img src="2.jpg" alt="Détail du pont japonais"/>

<p>Peu de gens le savent, mais les Japonais ont vécu activement à Hoi An jusqu'en 1663, et puis... Boum ! Le gouvernement japonais a soudainement déclaré : "Ça suffit, arrêtez de commercer ! Nous entrons en confinement !" (Enfin, presque). Le Japon s'est donc isolé, et son magnifique héritage – ce pont – est resté debout, comme un salut du passé.</p>

<h6>Pont, Temple et un petit mystère</h6>

<img src="25.jpg" alt="Détail du pont japonais"/>
<small>Statue du dieu taoïste de la Météo, Tran Bo Bac De</small>

<p>Vous traversez le pont, et il y a un... temple ? Oui, juste au milieu du pont, un petit autel est niché. Il est dédié à l'Empereur de Jade taoïste Yu-di. C'est drôle car le taoïsme n'était pas largement pratiqué au Japon, il est donc probable que le temple ait été ajouté par les Vietnamiens plus tard. C'est une sorte de pont culturel qui relie non seulement les rives, mais aussi les croyances !</p>

<img src="24.jpg" alt="Détail du pont japonais"/>

<p>Et des deux côtés du pont, vous êtes accueillis par des statues en pierre de chiens et de singes. Ne demandez pas pourquoi eux spécifiquement – c'est l'un de ces mystères de Hoi An qui vous fait vous gratter la tête. Peut-être est-ce à cause des années de construction (commencé l'année du Chien, terminé l'année du Singe) ? Ou, comme le suggère une autre version, de nombreux empereurs japonais sont nés ces années-là ? Quoi qu'il en soit, ils sont là pour une raison, et les habitants les ornent toujours et font des offrandes. Qui sait, peut-être sont-ils vraiment les gardiens du pont, et votre chance du jour dépend d'eux !</p>

<h6>Combattre le poisson-chat sous-marin</h6>
<p>C'est là que ça devient fou (dans le bon sens) ! Le pont n'a pas été construit juste pour le plaisir ; il avait une mission très importante – d'immobiliser un gigantesque poisson-chat mythique nommé Onamazu (大鯰) !</p>

<img src="3.jpg" alt="Onamazu"/>
<small>Onamazu (Japonais : 大鯰 — "poisson-chat géant")</small>

<p>L'essence de la légende : Dans le folklore japonais, il y a cet énorme poisson-chat qui provoque des tremblements de terre quand il agite sa queue. Sa tête, dit-on, est sous l'Inde, sa queue sous le Japon, mais son DOS PASSE JUSTE SOUS LE VIETNAM ! Et les constructeurs du pont, apparemment, étaient des ingénieurs très astucieux, car ils ont construit le pont spécifiquement pour "immobiliser" le dos de ce monstre, l'empêchant de se débattre. Ainsi, le pont japonais est devenu une sorte de presse antisismique pour tout le Centre du Vietnam.</p>
<img src="20.jpg" alt="Onamazu"/>

<p>Nous ne savons pas à quel point Onamazu a apprécié cette "massage" thérapie, mais le pont, construit sur de solides supports en bois, a vraiment résisté pendant des centaines d'années ! Bien que, pour être honnête, pas sans l'aide de l'humanité. Le pont a subi huit (!) rénovations majeures (même en 2022, il a été littéralement démonté pour une "chirurgie" !), ce qui a probablement aussi un peu aidé à l'empêcher de s'effondrer. Mais le mythe du poisson-chat sonne toujours mieux, n'est-ce pas ?</p>

<h6>Le Prince, le Graveur et Trois Hiéroglyphes</h6>

<p>En 1719, le Prince Nguyễn Phúc Chu a visité Hoi An. Il était une figure importante qui a gouverné le Sud du Vietnam, presque comme un roi, de 1691 à 1725. Et ainsi, dit-on, il n'a pas seulement admiré le pont, mais a personnellement gravé trois caractères chinois au-dessus de la porte du temple ! Pouvez-vous imaginer ? Au lieu d'envoyer des serviteurs, le prince a décidé de faire la gravure lui-même. Il a dû se sentir inspiré !</p>

<img src="23.jpg" alt="Le Prince, le Graveur et Trois Hiéroglyphes"/>

<p>Ces symboles se traduisent très poétiquement : "pont pour accueillir les invités de loin." Ou, dans le style vietnamien, "Lai Viet Kieu." C'est comme si le pont lui-même disait : "Bonjour, voyageur ! Entrez, faites comme chez vous, vous appartenez ici !" Un tel "panneau de bienvenue" ancien, gravé de la main du souverain lui-même.</p>

<h6>La Route Française et Pourquoi le Pont est réservé aux piétons</h6>

<img src="21.jpg" alt="Détail du pont japonais"/>

<p>Les temps changent, et même le Pont japonais a dû endurer ses "expériences de mode". Pendant la domination coloniale, les Français ont décidé : "Hé, pourquoi les motos ne pourraient-elles pas rouler ici ?" et ont nivelé la route à travers le pont. Ça ressemble à une excellente idée pour les embouteillages, n'est-ce pas ? Heureusement, cette "innovation" a été annulée plus tard, et le pont est redevenu réservé aux piétons. Et heureusement, car quel genre de "symbole" est-ce si des vélos y circulent à toute vitesse ?</p>

<h6>Un petit pont avec un grand cœur</h6>
<p>Alors, quand vous traversez le Pont japonais, sachez ceci : vous ne marchez pas seulement sur des planches, vous foulez une histoire vivante, pleine de légendes, de subtilités culturelles et même de poissons-chats mythiques. Il ne relie pas seulement deux rives – il relie des époques, des peuples et peut-être même calme les tremblements de terre. C'est notre Pont couvert japonais – petit, mais très fier et mystérieux.</p>

<img src="22.jpg" alt="Détail du pont japonais"/>
      `,
      internalImageNames: [
        '2.jpg',
        '3.jpg',
        '22.jpg',
        '20.jpg',
        '21.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
      ],
    },
    ru: {
      title: 'Японский крытый мост',
      description:
        'Знаменитый символ Хойана, построенный в XVI веке японской общиной.',
      fullDescription: `
<p>Если вы были в Хойане и не сфотографировались на Японском крытом мосту (Chùa Cầu), то вы по-настоящему не были в Хойане. Серьезно, этот мост настолько восхитителен, что он даже попал на герб города! И не зря, у него очень необычная история...</p>

<img src="26.jpg" alt="Деталь Японского моста"/>

<p>Этот мост – настоящая суперзвезда, смотрящая на вас с банкноты в 20 000 вьетнамских донгов (VND)! Не удивляйтесь, если увидите толпы туристов, серьезно держащих эту банкноту рядом с мостом, пытаясь сделать "тот самый кадр". И хотя это, возможно, не самый оригинальный снимок в мире, устоять перед таким селфи просто невозможно! В конце концов, не каждый день держишь в руках деньги, на которых изображено то, что у тебя за спиной, верно?</p>

<h6>Японцы ушли, но мост остался</h6>
<p>Представьте XVII век: Хойан – международный торговый центр Юго-Восточной Азии, привлекающий купцов со всех уголков земного шара. Японские и китайские торговцы были настолько активны здесь, что решили: "Давайте построим мост, чтобы было легче ходить друг к другу в гости!" И вот, в 1593 году, наш герой появился на свет.</p>

<img src="2.jpg" alt="Деталь Японского моста"/>

<p>Мало кто знает, но японцы активно жили в Хойане до 1663 года, а затем... Бум! Японское правительство внезапно объявило: "Всё, прекращаем торговлю! Мы уходим на карантин!" (Ну, почти). Так Япония ушла в изоляцию, а её великолепное наследие – этот мост – остался стоять, как привет из прошлого.</p>

<h6>Мост, храм и маленькая тайна</h6>

<img src="25.jpg" alt="Деталь Японского моста"/>
<small>Статуя даосского бога погоды, Чан Бо Бак Дэ</small>

<p>Вы идете по мосту, а там... храм? Да, прямо посередине моста приютился небольшой алтарь. Он посвящен даосскому Нефритовому Императору Ю-ди. Забавно, потому что даосизм не был широко распространен в Японии, так что, скорее всего, храм был добавлен вьетнамцами позднее. Это такой культурный мост, который соединяет не только берега, но и верования!</p>

<img src="24.jpg" alt="Деталь Японского моста"/>

<p>А по обеим сторонам моста вас встречают каменные статуи собак и обезьян. Не спрашивайте, почему именно они – это одна из тех тайн Хойана, которая заставляет чесать затылок. Может быть, это из-за годов постройки (начали в Год Собаки, закончили в Год Обезьяны)? Или, как предполагает другая версия, многие японские императоры родились в эти годы? В любом случае, они здесь не просто так, и местные жители до сих пор украшают их и делают подношения. Кто знает, может быть, они действительно хранители моста, и от них зависит, повезет ли вам сегодня!</p>

<h6>Борьба с подводным сомом</h6>
<p>Вот где начинается самое безумное (в хорошем смысле)! Мост был построен не просто для развлечения; у него была очень важная миссия – пригвоздить гигантского мифического сома по имени Онамазу (大鯰)!</p>

<img src="3.jpg" alt="Онамазу"/>
<small>Онамазу (яп.: 大鯰 — "гигантский сом")</small>

<p>Суть легенды: в японском фольклоре есть этот огромный сом, который вызывает землетрясения, когда виляет хвостом. Его голова, говорят, находится под Индией, его хвост – под Японией, но его СПИНА ПРОХОДИТ ПРЯМО ПОД ВЬЕТНАМОМ! И строители моста, по-видимому, были очень умными инженерами, потому что они построили мост специально, чтобы "пригвоздить" спину этого монстра, предотвращая его метания. Таким образом, Японский мост стал своего рода антисейсмическим прессом для всего Центрального Вьетнама.</p>
<img src="20.jpg" alt="Онамазу"/>

<p>Мы не знаем, насколько Онамазу оценил эту "массажную" терапию, но мост, построенный на прочных деревянных опорах, действительно простоял сотни лет! Хотя, для честности, не без помощи человечества. Мост прошел восемь (!) крупных реконструкций (даже в 2022 году его буквально разбирали для "операции"!), что, вероятно, также немного помогло ему не развалиться. Но миф о соме все равно звучит круче, не так ли?</p>

<h6>Принц, резчик и три иероглифа</h6>

<p>В 1719 году принц Нгуен Фук Чу посетил Хойан. Он был важной фигурой, правившей Южным Вьетнамом, почти как король, с 1691 по 1725 год. И вот, говорят, он не просто полюбовался мостом, а лично вырезал три китайских иероглифа над дверью храма! Можете себе представить? Вместо того чтобы отправить слуг, принц решил заняться резьбой сам. Он, должно быть, почувствовал вдохновение!</p>

<img src="23.jpg" alt="Принц, резчик и три иероглифа"/>

<p>Эти символы очень поэтично переводятся: "мост для встречи гостей издалека". Или, во вьетнамском стиле, "Лай Вьет Кьеу". Как будто сам мост говорит: "Привет, путник! Заходи, чувствуй себя как дома, ты здесь свой!" Такой вот древний "приветственный знак", вырезанный рукой самого правителя.</p>

<h6>Французская дорога и почему мост только для пешеходов</h6>

<img src="21.jpg" alt="Деталь Японского моста"/>

<p>Времена меняются, и даже Японскому мосту пришлось пережить свои "модные эксперименты." Во время колониального правления французы решили: "Эй, почему бы здесь не ездить мотоциклам?" и выровняли дорогу через мост. Звучит как отличная идея для пробок, верно? К счастью, это "новшество" было позже отменено, и мост снова стал исключительно пешеходным. И слава богу, потому что какой же это "символ", если по нему гоняют мотоциклы?</p>

<h6>Маленький мост с гигантским сердцем</h6>
<p>Итак, когда вы идете по Японскому мосту, знайте: вы не просто идете по доскам, вы ступаете по живой истории, полной легенд, культурных тонкостей и даже мифических сомов. Он не просто соединяет два берега – он соединяет эпохи, народы и, возможно, даже успокаивает землетрясения. Это наш Японский крытый мост – маленький, но очень гордый и таинственный.</p>

<img src="22.jpg" alt="Деталь Японского моста"/>
      `,
      internalImageNames: [
        '2.jpg',
        '3.jpg',
        '22.jpg',
        '20.jpg',
        '21.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
      ],
    },
    vn: {
      title: 'Chùa Cầu (Cầu Chùa Nhật Bản)',
      description:
        'Biểu tượng nổi tiếng của Hội An, được cộng đồng Nhật Bản xây dựng vào thế kỷ 16.',
      fullDescription: `
<p>Nếu bạn đã đến Hội An mà chưa chụp một bức ảnh tại Chùa Cầu (Cầu Chùa Nhật Bản), thì coi như bạn chưa thực sự đến Hội An. Nghiêm túc mà nói, cây cầu này duyên dáng đến mức nó còn được đưa vào biểu tượng của thành phố! Và có lý do chính đáng, nó có một lịch sử rất khác thường...</p>

<img src="26.jpg" alt="Chi tiết Cầu Nhật Bản"/>

<p>Cây cầu này là một ngôi sao thực sự, nhìn lại bạn từ tờ tiền 20.000 Đồng Việt Nam (VND)! Đừng ngạc nhiên nếu bạn thấy đám đông khách du lịch nghiêm túc cầm tờ tiền này bên cạnh cây cầu, cố gắng có được "bức ảnh đó". Mặc dù có thể không phải là bức ảnh độc đáo nhất trên thế giới, nhưng không thể cưỡng lại một bức ảnh selfie như vậy! Rốt cuộc, không phải ngày nào bạn cũng cầm tiền trên tay mà lại miêu tả thứ ở phía sau bạn, đúng không?</p>

<h6>Người Nhật đã rời đi, nhưng cây cầu vẫn ở lại</h6>
<p>Hãy tưởng tượng thế kỷ 17: Hội An là một trung tâm thương mại quốc tế ở Đông Nam Á, thu hút các thương nhân từ khắp nơi trên thế giới. Các thương nhân Nhật Bản và Trung Quốc hoạt động rất tích cực tại đây đến nỗi họ quyết định: "Hãy xây một cây cầu để dễ dàng ghé thăm nhau hơn!" Và thế là, vào năm 1593, người hùng của chúng ta đã ra đời.</p>

<img src="2.jpg" alt="Chi tiết Cầu Nhật Bản"/>

<p>Ít người biết điều này, nhưng người Nhật đã sống tích cực ở Hội An cho đến năm 1663, và sau đó... Bùm! Chính phủ Nhật Bản đột ngột tuyên bố: "Thôi, ngừng giao thương! Chúng ta sẽ bị cô lập!" (Gần như vậy). Vì vậy, Nhật Bản đã tự cô lập, và di sản tráng lệ của họ – cây cầu này – vẫn đứng vững, như một lời chào từ quá khứ.</p>

<h6>Cầu, Chùa và một chút bí ẩn</h6>

<img src="25.jpg" alt="Chi tiết Cầu Nhật Bản"/>
<small>Tượng Thần Đạo giáo của Thời tiết, Trần Bo Bắc Đế</small>

<p>Bạn đi bộ qua cầu, và có một... ngôi chùa? Vâng, ngay giữa cầu, một bàn thờ nhỏ nép mình. Nó được dành riêng cho Ngọc Hoàng Thượng Đế của Đạo giáo (Yu-di). Thật buồn cười vì Đạo giáo không được thực hành rộng rãi ở Nhật Bản, vì vậy có khả năng ngôi chùa đã được người Việt thêm vào sau này. Đó là một loại cầu văn hóa không chỉ kết nối bờ mà còn kết nối tín ngưỡng!</p>

<img src="24.jpg" alt="Chi tiết Cầu Nhật Bản"/>

<p>Và ở hai bên cầu, bạn được chào đón bởi những bức tượng đá hình chó và khỉ. Đừng hỏi tại sao lại là chúng – đó là một trong những bí ẩn của Hội An khiến bạn phải gãi đầu. Có lẽ là do những năm xây dựng (bắt đầu vào Năm Con Chó, kết thúc vào Năm Con Khỉ)? Hoặc, theo một phiên bản khác, nhiều vị hoàng đế Nhật Bản đã sinh ra trong những năm này? Dù sao đi nữa, chúng ở đây đều có lý do, và người dân địa phương vẫn trang trí và dâng lễ cho chúng. Ai biết được, có lẽ chúng thực sự là những người bảo vệ cây cầu, và liệu bạn có may mắn hôm nay hay không tùy thuộc vào chúng!</p>

<h6>Chống lại Con Cá Trê Khổng Lồ Dưới Nước</h6>
<p>Đây là phần điên rồ (theo nghĩa tốt)! Cây cầu không chỉ được xây dựng để giải trí; nó có một nhiệm vụ rất quan trọng – để giữ chặt một con cá trê khổng lồ trong thần thoại tên là Namazu (大鯰)!</p>

<img src="3.jpg" alt="Namazu"/>
<small>Namazu (tiếng Nhật: 大鯰 — "cá trê khổng lồ")</small>

<p>Bản chất của truyền thuyết: Trong văn hóa dân gian Nhật Bản, có một con cá trê khổng lồ gây ra động đất khi nó vẫy đuôi. Đầu nó, người ta nói, ở dưới Ấn Độ, đuôi nó ở dưới Nhật Bản, nhưng LƯNG NÓ LẠI NẰM NGAY DƯỚI VIỆT NAM! Và những người xây cầu, rõ ràng, là những kỹ sư rất thông minh, bởi vì họ đã xây cây cầu đặc biệt để "giữ chặt" lưng của con quái vật này, ngăn nó khỏi vùng vẫy. Do đó, Chùa Cầu đã trở thành một loại "máy ép" chống động đất cho toàn bộ miền Trung Việt Nam.</p>
<img src="20.jpg" alt="Namazu"/>

<p>Chúng ta không biết Namazu đã đánh giá cao liệu pháp "massage" này đến mức nào, nhưng cây cầu, được xây dựng trên những cột gỗ vững chắc, thực sự đã đứng vững hàng trăm năm! Mặc dù, thành thật mà nói, không phải không có sự giúp đỡ của con người. Cây cầu đã trải qua tám (!) lần trùng tu lớn (thậm chí vào năm 2022 nó đã được tháo dỡ theo nghĩa đen để "phẫu thuật"!), điều này có lẽ cũng giúp ích một chút để nó không bị sập. Nhưng huyền thoại về cá trê vẫn nghe hay hơn, bạn có đồng ý không?</p>

<h6>Chúa Nguyễn Phúc Chu, người chạm khắc và Ba chữ Hán</h6>

<p>Năm 1719, Chúa Nguyễn Phúc Chu đã ghé thăm Hội An. Ông là một nhân vật quan trọng, cai trị miền Nam Việt Nam, gần như một vị vua, từ năm 1691 đến 1725. Và người ta nói rằng, ông không chỉ chiêm ngưỡng cây cầu, mà còn đích thân chạm khắc ba chữ Hán phía trên cửa chùa! Bạn có thể tưởng tượng không? Thay vì cử người hầu, vị chúa đã tự mình chạm khắc. Chắc hẳn ông đã cảm thấy rất hứng thú!</p>

<img src="23.jpg" alt="Chúa Nguyễn Phúc Chu, người chạm khắc và Ba chữ Hán"/>

<p>Những biểu tượng này được dịch rất thơ mộng: "cầu để đón khách từ xa". Hoặc, theo kiểu Việt Nam, "Lai Viễn Kiều". Cứ như thể chính cây cầu đang nói: "Chào mừng, du khách! Hãy vào đi, hãy tự nhiên như ở nhà, bạn thuộc về nơi này!" Một "biển chào" cổ xưa như vậy, được chạm khắc bởi chính tay vị chúa.</p>

<h6>Con đường Pháp và lý do Cầu chỉ dành cho người đi bộ</h6>

<img src="21.jpg" alt="Chi tiết Cầu Nhật Bản"/>

<p>Thời gian thay đổi, và ngay cả Chùa Cầu cũng phải chịu đựng những "thử nghiệm thời trang" của mình. Trong thời kỳ thuộc địa, người Pháp quyết định: "Này, tại sao xe máy không nên đi qua đây?" và san bằng con đường qua cầu. Nghe có vẻ là một ý tưởng tuyệt vời cho tắc nghẽn giao thông, đúng không? May mắn thay, "sáng kiến" này sau đó đã bị hủy bỏ, và cây cầu một lần nữa trở thành cầu dành riêng cho người đi bộ. Và thật may mắn, bởi vì một "biểu tượng" như thế nào nếu xe máy chạy ào ào qua nó?</p>

<h6>Một cây cầu nhỏ với một trái tim khổng lồ</h6>
<p>Vì vậy, khi bạn đi bộ qua Chùa Cầu, hãy biết điều này: bạn không chỉ đi trên những tấm ván, bạn đang bước đi trên lịch sử sống động, đầy huyền thoại, những chi tiết văn hóa phức tạp, và thậm chí cả những con cá trê thần thoại. Nó không chỉ kết nối hai bờ – nó kết nối các thời đại, các dân tộc, và có lẽ còn làm dịu những trận động đất. Đó chính là Chùa Cầu của chúng ta – nhỏ bé, nhưng rất tự hào và bí ẩn.</p>

<img src="22.jpg" alt="Chi tiết Cầu Nhật Bản"/>
      `,
      internalImageNames: [
        '2.jpg',
        '3.jpg',
        '22.jpg',
        '20.jpg',
        '21.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
      ],
    },
    slug: {
      // <-- Добавлен объект slug для локализованных URL
      en: 'japanese-covered-bridge',
      ru: 'yaponskiy-krytyy-most', // <-- Замените на реальный slug para el ruso
      es: 'puente-cubierto-japones',
      fr: 'pont-couvert-japonais',
      vn: 'cau-chua-nhat-ban',
    },
    // ru: { /* Русский контент здесь, если есть */ },
    // es: { /* Испанский контент здесь, si hay */ }, // Обновлено
    // fr: { /* Французский контент здесь, если есть */ },
    // vn: { /* Вьетнамский контент здесь, если есть */ },
  },
];
