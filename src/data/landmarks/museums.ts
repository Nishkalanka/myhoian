// src/data/landmarks/en/museums.js

import type { Landmark } from './landmarkTypes';

export const museumLandmarks: Landmark[] = [
  //japanese-covered-bridge
  {
    id: 'japanese-covered-bridge', // <-- ID теперь строковый
    coordinates: [15.877122578067937, 108.32601152345488], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['museum'], // <-- Категория "museum"
    imageUrl: '1.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      // <-- Весь английский контент теперь внутри объекта 'en'
      title: 'Japanese Covered Bridge',
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
      description: 'Cимвол Хойана, построенный в XVI веке японской общиной.',
      fullDescription: `
<p>Японский крытый мост (Chùa Cầu) является квинтэссенцией символа Хойана, его изображение не только занимает центральное место на гербе города, но и присутствует на банкноте в 20 000 вьетнамских донгов. Эта повсеместная репрезентация подчеркивает его значение как культурного и исторического памятника, делая его обязательным объектом для изучения каждым посетителем города. Его непреходящая слава — свидетельство уникальной архитектуры и глубокого исторического нарратива.</p>

<img src="26.jpg" alt="Деталь Японского моста"/>

<p>Мост, построенный в 1593 году, стал результатом ключевого архитектурного сотрудничества между японскими и китайскими купеческими общинами. В XVII веке Хойан служил процветающим международным торговым центром в Юго-Восточной Азии, привлекая множество торговцев. Мост был возведен для соединения японского и китайского кварталов, что способствовало развитию торговли и взаимодействию между общинами.</p>

<img src="2.jpg" alt="Деталь Японского моста"/>

<h6>Японцы ушли, но мост остался</h6>
<p>После издания в 1630-х годах указов о Сакоку (национальная изоляция), японское правительство вступило в период самоизоляции, что привело к постепенному уходу японских купцов из Хойана к 1663 году. Несмотря на это, их архитектурное наследие — Японский крытый мост — осталось как свидетельство их присутствия и влияния.</p>

<h6>Мост, храм и маленькая тайна</h6>

<img src="25.jpg" alt="Деталь Японского моста"/>
<small>Статуя даосского бога погоды, Чан Бо Бак Дэ</small>

<p>Отличительной чертой моста является небольшой храм, расположенный в его центральной части. Этот храм, посвященный даосскому Нефритовому Императору (Ю-ди), был добавлен вьетнамской общиной позже. Это дополнение примечательно, поскольку даосизм не был широко распространен в Японии во время строительства моста. Такая архитектурная модификация подчеркивает эволюцию моста от простого коммерческого сооружения к месту, где произошло культурное и религиозное слияние.</p>

<img src="24.jpg" alt="Деталь Японского моста"/>

<p>По обеим сторонам моста расположены статуи собак и обезьян. Точное символическое значение этих изображений остается предметом исторических споров. Одна из теорий предполагает, что они представляют годы китайского зодиака, в которые началось (Год Собаки) и завершилось (Год Обезьяны) строительство. Другая гипотеза связывает их с годами рождения выдающихся японских императоров. Независимо от точного происхождения, эти статуи служат мощными культурными символами, которым местные жители приносят подношения как хранителям моста.</p>

<h6>Борьба с подводным сомом</h6>
<img src="20.jpg" alt="Онамазу"/>
<p>Помимо своей практической функции, мост имеет глубокое мифологическое значение, уходящее корнями в японский фольклор. Считается, что он был построен, чтобы "пригвоздить" мифического гигантского сома по имени Онамазу (大鯰), который, согласно поверьям, вызывал землетрясения, виляя своим телом. По легенде, хребет Намазу проходил прямо под Центральным Вьетнамом. Таким образом, мост был спроектирован как своего рода "сейсмический пресс", стабилизирующий регион и защищающий его от разрушительных толчков. Хотя долговечность моста более точно объясняется его прочной деревянной конструкцией и серией из восьми крупных реставраций (включая масштабную реконструкцию в 2022 году), легенда добавляет культурную глубину в его историю.</p>

<img src="3.jpg" alt="Онамазу"/>
<small>Онамазу (яп.: 大鯰 — "гигантский сом")</small>

<h6>Принц, резчик и три иероглифа</h6>

<p>Мост претерпел значительные трансформации на протяжении всей своей истории. В 1719 году правитель Южного Вьетнама, князь Нгуен Фук Чу, лично вырезал три китайских иероглифа над дверью храма: Lai Viễn Kiều (來遠橋), что переводится как «мост для встречи гостей издалека». Эта надпись, сделанная рукой правящего лица, превратила мост из простого сооружения в официальный символ гостеприимства.</p>

<img src="23.jpg" alt="Принц, резчик и три иероглифа"/>

<p>Во время французского колониального правления мост был переоборудован для движения транспорта. Эта модификация, которая нарушила его структурную и символическую целостность, позже была отменена. Сегодня мост остается исключительно пешеходным, что является намеренным сохранением его первоначальной функции и исторического характера.</p>


<img src="21.jpg" alt="Деталь Японского моста"/>


<h6>Маленький мост с гигантским сердцем</h6>
<p>Японский крытый мост — это больше, чем просто пешеходная переправа; это хранилище истории, место слияния культур и свидетельство векового инженерного искусства. Он соединяет не только два берега реки Тху Бон, но и различные исторические эпохи, народы и мифологические нарративы. Его скромные размеры скрывают его монументальную важность как центрального столпа культурной идентичности Хойана.</p>

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
  // Cantonese Assembly Hall
  {
    id: 'cantonese-assembly-hall',
    coordinates: [15.877134908051383, 108.32652751922738],
    category: ['museum'],
    imageUrl: '4.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Cantonese Assembly Hall',
      description:
        'The Cantonese Assembly Hall remains an active place of worship for both the Chinese diaspora in Hoi An and the Vietnamese people.',
      fullDescription: `
<p>
    If you've ever wondered what Hoi An looked like in its heyday as a trading port, then the Cantonese Assembly Hall (Hoi Quan Quang Trieu) is your ticket to the past! This majestic complex is one of the most striking testaments to the incredible influence of the Chinese community on the city's life.
</p>
<p>
    Built in 1885 by influential merchants from the Chinese province of Guangdong (Canton), this hall was much more than just a meeting place. It served as the spiritual and social heart of the Cantonese diaspora, a place of worship for the legendary Guan Kung (god of loyalty and bravery) and Thien Hau (Mother Goddess of the Sea, protector of all who navigate the waves). Imagine merchants gathering here, praying for safe passage and fair trade, settling disputes, and celebrating their traditions!
</p>

<h6>Guan Kung</h6>

<p>
    When you hear the name Guan Kung (Guan Yu), imagine a true hero whose fame has endured for centuries! This legendary general lived in China during the Three Kingdoms period (3rd century AD) and was known for his incredible loyalty, righteousness, honor, and fearlessness. He was such an outstanding figure that after his death, he was deified, becoming one of the most revered gods not only in China but also in many Chinese diasporas around the world.
</p>
<p>
    For merchants and businessmen, Guan Kung is not just a god of war. He is revered as the patron of fair trade and a protector against dishonesty. If you've ever seen statues of Guan Kung, you'll notice his powerful figure with a long beard and a red face, often in armor, sometimes with a halberd. He is a symbol of strength that reminds us of the need to be honest and unwavering in our dealings. In the Cantonese Assembly Hall, he was honored, seeking his blessing for successful and just trade.
</p>

<h6>Thien Hau: Mother Goddess of the Sea</h6>
<p>
    Now, let's turn to another incredible goddess – Thien Hau (Thien Hau), or as she's also called, the Mother Goddess of the Sea. Imagine the endless ocean expanses, over which countless ships have sailed for centuries... For sailors, fishermen, and merchants whose lives depended on the mercy of the sea, Thien Hau was the most important protector.
</p>
<p>
    Thien Hau is believed to have been a mortal girl named Lin Mo from Fujian (China) who possessed mystical abilities and could save sailors during storms. After her death, she ascended and became a goddess, protecting all who embark on a sea journey.
</p>
<p>
    For Chinese traders who crossed dangerous seas to reach Hoi An, worshiping Thien Hau was an absolute necessity. She was their hope and assurance of a safe return home. In the Cantonese Assembly Hall, her altar serves as a reminder of how vital maritime routes were and how strongly those who risked their lives and goods on the boundless oceans believed in her power. She is a symbol of safety, good fortune, and the patroness of all water journeys.
</p>

<h6>Architectural Masterpiece and Details That Will Surprise You</h6>
<img src="29.jpg" alt="Cantonese Assembly Hall"/>
<p>
    The Cantonese Assembly Hall is a true architectural extravaganza, pure Cantonese style! Built of wood, stone, and red brick, the complex immediately captures your attention with its details:
</p>
<ul>
    <li>Entrance Gate: You'll be greeted by impressive, richly decorated gates, often with three entrances and intricate carvings – they seem to invite you into another world.</li>
    <li>Mystical Courtyards: Inside, you'll find several light-filled inner courtyards leading to the Main Hall. In one of them, be sure to notice the large decorative fountain or pond with dragons – symbols of wealth and good fortune!</li>
    <li>Art in Every Detail: The hall is famous for its incredibly detailed and skillfully executed wood and stone carvings. Here, you can endlessly examine images of dragons, phoenixes, mythical creatures, animals, as well as scenes from Chinese mythology and classical novels. Bright colors, especially red and gold, create a truly luxurious atmosphere.</li>
    <li>Sculptures and Statues: In addition to the carvings, you'll see vibrant statues, including the main statue of Guan Kung. And also look for sculptures of the 12 animals of the Chinese zodiac – they are very popular with visitors!</li>
</ul>

<h6>Cultural Significance and Living History</h6>
<p>
    The Cantonese Assembly Hall continues to be an active place of worship for the Chinese diaspora in Hoi An today. Important annual festivals are held here, especially the colorful Guan Kung Festival, attracting many devotees and tourists.
</p>
<p>
    This hall is not just a beautiful attraction. It is a direct reflection of the economic power and cultural influence of the Cantonese community during Hoi An's heyday. It is an important part of the UNESCO heritage, demonstrating the deep cultural interaction and legacy created by different communities.
</p>
<p>
    Opening Hours: Usually from 07:00 to 17:00 daily.
</p>
<p>
    Admission: Visiting the Cantonese Assembly Hall is usually included in the general admission ticket to Hoi An Ancient Town. This is convenient as it also grants access to other attractions.
</p>
<p>
    Be sure to visit the Cantonese Assembly Hall to delve deep into the history and culture of Hoi An's Chinese diaspora. It is truly an impressive and beautifully preserved place!
</p>
    `,
      internalImageNames: ['29.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Кантонский сборный зал',
      description:
        'Кантонский сборный зал остается активным местом поклонения как для китайской диаспоры в Хойане, так и для вьетнамского народа.',
      fullDescription: `
<p>
    Если вы когда-либо задавались вопросом, как выглядел Хойан в расцвет своей торговой эпохи, то Кантонский сборный зал (Hoi Quan Quang Trieu) — это ваш билет в прошлое! Этот величественный комплекс — одно из самых ярких свидетельств невероятного влияния китайской общины на жизнь города.
</p>
<p>
    Построенный в 1885 году влиятельными купцами из китайской провинции Гуандун (Кантон), этот зал был гораздо больше, чем просто местом встреч. Он служил духовным и социальным сердцем кантонской диаспоры, местом поклонения легендарным Гуань Гуну (богу верности и храбрости) и Тхиен Хау (Матери-Богине моря, покровительнице всех, кто плавает по волнам). Представьте себе купцов, которые собирались здесь, молились о безопасном пути и честной торговле, разрешали споры и праздновали свои традиции!
</p>

<h6>Гуань Гун</h6>

<p>
    Когда вы слышите имя Гуань Гун (Гуань Юй), представьте себе настоящего героя, чья слава живет веками! Этот легендарный полководец жил в Китае в период Троецарствия (III век нашей эры) и был известен своей невероятной преданностью, справедливостью, честью и бесстрашием. Он был настолько выдающейся фигурой, что после смерти был обожествлен, став одним из самых почитаемых богов не только в Китае, но и во многих китайских диаспорах по всему миру.
</p>
<p>
    Для купцов и бизнесменов Гуань Гун — это не просто бог войны. Его почитают как покровителя честной торговли и защитника от нечестности. Если вы когда-либо видели статуи Гуань Гуна, вы заметите его мощную фигуру с длинной бородой и красным лицом, часто в доспехах, иногда с алебардой. Он — символ силы, который напоминает о необходимости быть честным и непоколебимым в своих делах. В Кантонском сборном зале ему воздавали почести, ища его благословения для успешной и справедливой торговли.
</p>

<h6>Тхиен Хау: Мать-Богиня моря</h6>
<p>
    А теперь давайте обратимся к другой невероятной богине — Тхиен Хау (Thiên Hậu), или, как ее еще называют, Матери-Богине моря. Представьте себе бескрайние просторы океана, по которым веками плавали бесчисленные корабли... Для моряков, рыбаков и торговцев, чья жизнь зависела от милости моря, Тхиен Хау была самым важным покровителем.
</p>
<p>
    Считается, что Тхиен Хау была смертной девушкой по имени Линь Мо из Фуцзяня (Китай), которая обладала мистическими способностями и могла спасать моряков во время штормов. После своей смерти она вознеслась и стала богиней, защищая всех, кто отправляется в морское путешествие.
</p>
<p>
    Для китайских торговцев, которые пересекали опасные моря, чтобы добраться до Хойана, поклонение Тхиен Хау было абсолютной необходимостью. Она была их надеждой и гарантией безопасного возвращения домой. В Кантонском сборном зале ее алтарь служит напоминанием о том, насколько жизненно важными были морские пути и насколько сильно те, кто рисковал своей жизнью и товарами в бескрайних океанах, верили в ее силу. Она — символ безопасности, удачи и покровительница всех водных путешествий.
</p>

<h6>Архитектурный шедевр и детали, которые вас удивят</h6>
<img src="29.jpg" alt="Кантонский сборный зал"/>
<p>
    Кантонский сборный зал — это настоящая архитектурная феерия, чистый кантонский стиль! Построенный из дерева, камня и красного кирпича, комплекс сразу привлекает внимание своими деталями:
</p>
<ul>
    <li>Входные ворота: Вас встретят впечатляющие, богато украшенные ворота, часто с тремя входами и сложной резьбой — они словно приглашают вас в другой мир.</li>
    <li>Мистические дворики: Внутри вы найдете несколько светлых внутренних двориков, ведущих к Главному залу. В одном из них обязательно обратите внимание на большой декоративный фонтан или пруд с драконами — символами богатства и удачи!</li>
    <li>Искусство в каждой детали: Зал славится невероятно детализированной и искусно выполненной резьбой по дереву и камню. Здесь можно бесконечно рассматривать изображения драконов, фениксов, мифических существ, животных, а также сцены из китайской мифологии и классических романов. Яркие цвета, особенно красный и золотой, создают поистине роскошную атмосферу.</li>
    <li>Скульптуры и статуи: Помимо резьбы, вы увидите яркие статуи, включая главную статую Гуань Гуна. А еще ищите скульптуры 12 животных китайского зодиака — они очень популярны среди посетителей!</li>
</ul>

<h6>Культурное значение и живая история</h6>
<p>
    Кантонский сборный зал продолжает оставаться активным местом поклонения для китайской диаспоры в Хойане и сегодня. Здесь проводятся важные ежегодные фестивали, особенно красочный фестиваль Гуань Гуна, привлекающий множество верующих и туристов.
</p>
<p>
    Этот зал — не просто красивая достопримечательность. Это прямое отражение экономической мощи и культурного влияния кантонской общины в период расцвета Хойана. Это важная часть наследия ЮНЕСКО, демонстрирующая глубокое культурное взаимодействие и наследие, созданное различными общинами.
</p>
<p>
    Часы работы: Обычно с 07:00 до 17:00 ежедневно.
</p>
<p>
    Вход: Посещение Кантонского сборного зала обычно включено в общий входной билет в древний город Хойан. Это удобно, так как он также дает доступ к другим достопримечательностям.
</p>
<p>
    Обязательно посетите Кантонский сборный зал, чтобы глубоко погрузиться в историю и культуру китайской диаспоры Хойана. Это поистине впечатляющее и прекрасно сохранившееся место!
</p>
    `,
      internalImageNames: ['29.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Sala de la Asamblea Cantonesa',
      description:
        'La Sala de la Asamblea Cantonesa sigue siendo un lugar de culto activo tanto para la diáspora china en Hoi An como para el pueblo vietnamita.',
      fullDescription: `
<p>
    Si alguna vez te has preguntado cómo era Hoi An en su apogeo como puerto comercial, ¡entonces la Sala de la Asamblea Cantonesa (Hoi Quan Quang Trieu) es tu boleto al pasado! Este majestuoso complejo es uno de los testimonios más impactantes de la increíble influencia de la comunidad china en la vida de la ciudad.
</p>
<p>
    Construida en 1885 por influyentes comerciantes de la provincia china de Guangdong (Cantón), esta sala era mucho más que un simple lugar de reunión. Sirvió como el corazón espiritual y social de la diáspora cantonesa, un lugar de culto para el legendario Guan Kung (dios de la lealtad y la valentía) y Thien Hau (Madre Diosa del Mar, protectora de todos los que navegan las olas). ¡Imagina a los comerciantes reuniéndose aquí, orando por un paso seguro y un comercio justo, resolviendo disputas y celebrando sus tradiciones!
</p>

<h6>Guan Kung</h6>

<p>
    Cuando escuches el nombre de Guan Kung (Guan Yu), ¡imagina a un verdadero héroe cuya fama ha perdurado durante siglos! Este legendario general vivió en China durante el período de los Tres Reinos (siglo III d.C.) y fue conocido por su increíble lealtad, rectitud, honor y valentía. Fue una figura tan destacada que, después de su muerte, fue deificado, convirtiéndose en uno de los dioses más venerados no solo en China, sino también en muchas diásporas chinas de todo el mundo.
</p>
<p>
    Para los comerciantes y hombres de negocios, Guan Kung no es solo un dios de la guerra. Es venerado como el patrón del comercio justo y un protector contra la deshonestidad. Si alguna vez has visto estatuas de Guan Kung, notarás su poderosa figura con una larga barba y un rostro rojo, a menudo con armadura, a veces con una alabarda. Es un símbolo de fuerza que nos recuerda la necesidad de ser honestos e inquebrantables en nuestros tratos. En la Sala de la Asamblea Cantonesa, se le honraba, buscando su bendición para un comercio exitoso y justo.
</p>

<h6>Thien Hau: Madre Diosa del Mar</h6>
<p>
    Ahora, pasemos a otra diosa increíble: Thien Hau (Thien Hau), o como también se la llama, la Madre Diosa del Mar. Imagina las infinitas extensiones oceánicas, por las que innumerables barcos han navegado durante siglos... Para los marineros, pescadores y comerciantes cuyas vidas dependían de la misericordia del mar, Thien Hau era la protectora más importante.
</p>
<p>
    Se cree que Thien Hau fue una niña mortal llamada Lin Mo de Fujian (China) que poseía habilidades místicas y podía salvar a los marineros durante las tormentas. Después de su muerte, ascendió y se convirtió en una diosa, protegiendo a todos los que se embarcan en un viaje por mar.
</p>
<p>
    Para los comerciantes chinos que cruzaban mares peligrosos para llegar a Hoi An, adorar a Thien Hau era una necesidad absoluta. Ella era su esperanza y la seguridad de un regreso seguro a casa. En la Sala de la Asamblea Cantonesa, su altar sirve como un recordatorio de lo vitales que eran las rutas marítimas y de cuán firmemente creían en su poder quienes arriesgaban sus vidas y bienes en los océanos ilimitados. Ella es un símbolo de seguridad, buena fortuna y la patrona de todos los viajes por agua.
</p>

<h6>Obra Maestra Arquitectónica y Detalles Que Te Sorprenderán</h6>
<img src="29.jpg" alt="Sala de la Asamblea Cantonesa"/>
<p>
    ¡La Sala de la Asamblea Cantonesa es una verdadera extravagancia arquitectónica, puro estilo cantonés! Construido con madera, piedra y ladrillo rojo, el complejo capta inmediatamente tu atención con sus detalles:
</p>
<ul>
    <li>Puerta de Entrada: Serás recibido por impresionantes puertas, ricamente decoradas, a menudo con tres entradas y tallas intrincadas, que parecen invitarte a otro mundo.</li>
    <li>Patios Místicos: En el interior, encontrarás varios patios interiores llenos de luz que conducen al Salón Principal. En uno de ellos, asegúrate de notar la gran fuente decorativa o estanque con dragones, ¡símbolos de riqueza y buena fortuna!</li>
    <li>Arte en Cada Detalle: La sala es famosa por sus tallas de madera y piedra increíblemente detalladas y hábilmente ejecutadas. Aquí, puedes examinar sin cesar imágenes de dragones, fénix, criaturas míticas, animales, así como escenas de la mitología china y novelas clásicas. Los colores brillantes, especialmente el rojo y el dorado, crean una atmósfera verdaderamente lujosa.</li>
    <li>Esculturas y Estatuas: Además de las tallas, verás estatuas vibrantes, incluida la estatua principal de Guan Kung. Y también busca esculturas de los 12 animales del zodiaco chino, ¡son muy populares entre los visitantes!</li>
</ul>

<h6>Significado Cultural e Historia Viva</h6>
<p>
    La Sala de la Asamblea Cantonesa sigue siendo hoy un lugar de culto activo para la diáspora china en Hoi An. Aquí se celebran importantes festivales anuales, especialmente el colorido Festival de Guan Kung, que atrae a muchos devotos y turistas.
</p>
<p>
    Esta sala no es solo una hermosa atracción. Es un reflejo directo del poder económico y la influencia cultural de la comunidad cantonesa durante el apogeo de Hoi An. Es una parte importante del patrimonio de la UNESCO, que demuestra la profunda interacción cultural y el legado creado por diferentes comunidades.
</p>
<p>
    Horario de Apertura: Normalmente de 07:00 a 17:00 diariamente.
</p>
<p>
    Entrada: La visita a la Sala de la Asamblea Cantonesa suele estar incluida en el billete de entrada general al Casco Antiguo de Hoi An. Esto es conveniente, ya que también permite el acceso a otras atracciones.
</p>
<p>
    Asegúrate de visitar la Sala de la Asamblea Cantonesa para profundizar en la historia y la cultura de la diáspora china de Hoi An. ¡Es realmente un lugar impresionante y maravillosamente conservado!
</p>
    `,
      internalImageNames: ['29.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Salle de l'Assemblée Cantonaise",
      description:
        "La salle de l'Assemblée Cantonaise demeure un lieu de culte actif pour la diaspora chinoise à Hoi An et le peuple vietnamien.",
      fullDescription: `
<p>
    Si vous vous êtes déjà demandé à quoi ressemblait Hoi An à son apogée en tant que port de commerce, alors la Salle de l'Assemblée Cantonaise (Hoi Quan Quang Trieu) est votre billet pour le passé ! Ce complexe majestueux est l'un des témoignages les plus frappants de l'incroyable influence de la communauté chinoise sur la vie de la ville.
</p>
<p>
    Construite en 1885 par des marchands influents de la province chinoise du Guangdong (Canton), cette salle était bien plus qu'un simple lieu de rencontre. Elle servait de cœur spirituel et social de la diaspora cantonaise, un lieu de culte pour le légendaire Guan Kung (dieu de la loyauté et du courage) et Thien Hau (Déesse Mère de la Mer, protectrice de tous ceux qui naviguent sur les vagues). Imaginez les marchands se rassemblant ici, priant pour un passage sûr et un commerce équitable, réglant les différends et célébrant leurs traditions !
</p>

<h6>Guan Kung</h6>

<p>
    Lorsque vous entendez le nom de Guan Kung (Guan Yu), imaginez un véritable héros dont la renommée a perduré pendant des siècles ! Ce général légendaire a vécu en Chine pendant la période des Trois Royaumes (IIIe siècle après J.-C.) et était connu pour son incroyable loyauté, sa droiture, son honneur et son intrépidité. Il était une figure tellement remarquable qu'après sa mort, il fut déifié, devenant l'un des dieux les plus vénérés non seulement en Chine, mais aussi dans de nombreuses diasporas chinoises du monde entier.
</p>
<p>
    Pour les marchands et les hommes d'affaires, Guan Kung n'est pas seulement un dieu de la guerre. Il est vénéré comme le protecteur du commerce équitable et un protecteur contre la malhonnêteté. Si vous avez déjà vu des statues de Guan Kung, vous remarquerez sa silhouette puissante avec une longue barbe et un visage rouge, souvent en armure, parfois avec une hallebarde. C'est un symbole de force qui nous rappelle la nécessité d'être honnête et inébranlable dans nos transactions. Dans la Salle de l'Assemblée Cantonaise, il était honoré, recherchant sa bénédiction pour un commerce réussi et juste.
</p>

<h6>Thien Hau : Déesse Mère de la Mer</h6>
<p>
    Passons maintenant à une autre déesse incroyable – Thien Hau (Thien Hau), ou comme on l'appelle aussi, la Déesse Mère de la Mer. Imaginez les étendues océaniques infinies, sur lesquelles d'innombrables navires ont navigué pendant des siècles... Pour les marins, les pêcheurs et les marchands dont la vie dépendait de la miséricorde de la mer, Thien Hau était la protectrice la plus importante.
</p>
<p>
    On pense que Thien Hau était une jeune fille mortelle nommée Lin Mo de Fujian (Chine) qui possédait des capacités mystiques et pouvait sauver les marins pendant les tempêtes. Après sa mort, elle est montée au ciel et est devenue une déesse, protégeant tous ceux qui s'engagent dans un voyage en mer.
</p>
<p>
    Pour les commerçants chinois qui traversaient des mers dangereuses pour atteindre Hoi An, le culte de Thien Hau était une nécessité absolue. Elle était leur espoir et leur assurance d'un retour en toute sécurité à la maison. Dans la Salle de l'Assemblée Cantonaise, son autel sert de rappel de l'importance vitale des routes maritimes et de la force avec laquelle ceux qui risquaient leur vie et leurs biens sur les océans illimités croyaient en son pouvoir. C'est un symbole de sécurité, de bonne fortune et la protectrice de tous les voyages nautiques.
</p>

<h6>Chef-d'œuvre architectural et détails qui vous surprendront</h6>
<img src="29.jpg" alt="Salle de l'Assemblée Cantonaise"/>
<p>
    La Salle de l'Assemblée Cantonaise est une véritable extravagance architecturale, pur style cantonais ! Construite en bois, en pierre et en brique rouge, le complexe attire immédiatement votre attention par ses détails :
</p>
<ul>
    <li>Porte d'entrée : Vous serez accueilli par des portes impressionnantes, richement décorées, souvent avec trois entrées et des sculptures complexes – elles semblent vous inviter dans un autre monde.</li>
    <li>Cour mystiques : À l'intérieur, vous trouverez plusieurs cours intérieures lumineuses menant à la Salle principale. Dans l'une d'elles, n'oubliez pas de remarquer la grande fontaine décorative ou l'étang avec des dragons – symboles de richesse et de bonne fortune !</li>
    <li>L'art dans chaque détail : La salle est célèbre pour ses sculptures sur bois et sur pierre incroyablement détaillées et habilement exécutées. Ici, vous pouvez examiner sans fin des images de dragons, de phénix, de créatures mythiques, d'animaux, ainsi que des scènes de la mythologie chinoise et des romans classiques. Les couleurs vives, en particulier le rouge et l'or, créent une atmosphère vraiment luxueuse.</li>
    <li>Sculptures et statues : En plus des sculptures, vous verrez des statues vibrantes, y compris la statue principale de Guan Kung. Et cherchez également les sculptures des 12 animaux du zodiaque chinois – elles sont très populaires auprès des visiteurs !</li>
</ul>

<h6>Signification culturelle et histoire vivante</h6>
<p>
    La Salle de l'Assemblée Cantonaise continue d'être un lieu de culte actif pour la diaspora chinoise à Hoi An aujourd'hui. D'importants festivals annuels y sont organisés, en particulier le coloré Festival de Guan Kung, attirant de nombreux fidèles et touristes.
</p>
<p>
    Cette salle n'est pas seulement une belle attraction. C'est un reflet direct du pouvoir économique et de l'influence culturelle de la communauté cantonaise à l'apogée de Hoi An. C'est une partie importante du patrimoine de l'UNESCO, démontrant la profonde interaction culturelle et l'héritage créé par différentes communautés.
</p>
<p>
    Heures d'ouverture : Généralement de 07h00 à 17h00 tous les jours.
</p>
<p>
    Entrée : La visite de la Salle de l'Assemblée Cantonaise est généralement incluse dans le billet d'entrée général pour la vieille ville de Hoi An. C'est pratique car cela donne également accès à d'autres attractions.
</p>
<p>
    Assurez-vous de visiter la Salle de l'Assemblée Cantonaise pour vous plonger profondément dans l'histoire et la culture de la diaspora chinoise de Hoi An. C'est vraiment un endroit impressionnant et magnifiquement préservé !
</p>
    `,
      internalImageNames: ['29.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Hội Quán Quảng Triệu',
      description:
        'Hội Quán Quảng Triệu vẫn là nơi thờ cúng tích cực của cộng đồng người Hoa ở Hội An và người dân Việt Nam.',
      fullDescription: `
<p>
    Nếu bạn đã từng tự hỏi Hội An trông như thế nào vào thời kỳ hoàng kim của một cảng thương mại, thì Hội Quán Quảng Triệu là tấm vé đưa bạn về quá khứ! Tổ hợp kiến trúc tráng lệ này là một trong những minh chứng nổi bật nhất về ảnh hưởng đáng kinh ngạc của cộng đồng người Hoa đến đời sống của thành phố.
</p>
<p>
    Được xây dựng vào năm 1885 bởi các thương gia có ảnh hưởng đến từ tỉnh Quảng Đông (Canton) của Trung Quốc, hội quán này không chỉ là một nơi gặp gỡ. Nó đóng vai trò là trái tim tinh thần và xã hội của cộng đồng người Quảng Đông, một nơi thờ cúng cho Quan Công (vị thần của lòng trung thành và dũng cảm) và Thiên Hậu (Mẫu Thần Biển cả, người bảo vệ tất cả những ai vượt sóng). Hãy tưởng tượng các thương gia tụ tập ở đây, cầu nguyện cho những chuyến đi an toàn và thương mại công bằng, giải quyết tranh chấp và tôn vinh truyền thống của họ!
</p>

<h6>Quan Công</h6>

<p>
    Khi bạn nghe tên Quan Công (Quan Vũ), hãy hình dung một người anh hùng thực sự với danh tiếng đã tồn tại qua nhiều thế kỷ! Vị tướng huyền thoại này sống ở Trung Quốc trong thời Tam Quốc (thế kỷ thứ 3 sau Công nguyên) và nổi tiếng với lòng trung thành, chính trực, danh dự và sự dũng cảm đáng kinh ngạc. Ông là một nhân vật xuất chúng đến nỗi sau khi qua đời, ông được phong thần, trở thành một trong những vị thần được tôn kính nhất không chỉ ở Trung Quốc mà còn ở nhiều cộng đồng người Hoa trên khắp thế giới.
</p>
<p>
    Đối với các thương gia và doanh nhân, Quan Công không chỉ là một vị thần chiến tranh. Ông được tôn kính là người bảo trợ thương mại công bằng và người bảo vệ chống lại sự không trung thực. Nếu bạn đã từng thấy các bức tượng Quan Công, bạn sẽ nhận thấy hình dáng uy nghi của ông với bộ râu dài và khuôn mặt đỏ, thường mặc áo giáp, đôi khi cầm một thanh đao. Ông là biểu tượng của sức mạnh nhắc nhở chúng ta về sự cần thiết phải trung thực và kiên định trong các giao dịch của mình. Tại Hội Quán Quảng Triệu, ông được tôn vinh, tìm kiếm sự ban phước của ông cho một giao thương thành công và công bằng.
</p>

<h6>Thiên Hậu: Mẫu Thần Biển Cả</h6>
<p>
    Bây giờ, hãy chuyển sang một nữ thần đáng kinh ngạc khác – Thiên Hậu (Thiên Hậu), hay còn gọi là Mẫu Thần Biển Cả. Hãy tưởng tượng những vùng biển bao la, nơi vô số con tàu đã đi qua hàng thế kỷ... Đối với thủy thủ, ngư dân và thương gia mà cuộc sống của họ phụ thuộc vào lòng nhân từ của biển cả, Thiên Hậu là người bảo vệ quan trọng nhất.
</p>
<p>
    Thiên Hậu được cho là một cô gái phàm trần tên là Lâm Mặc đến từ Phúc Kiến (Trung Quốc) sở hữu khả năng thần bí và có thể cứu các thủy thủ trong bão tố. Sau khi qua đời, bà thăng thiên và trở thành một nữ thần, bảo vệ tất cả những ai bắt đầu một cuộc hành trình trên biển.
</p>
<p>
    Đối với các thương nhân người Hoa đã vượt qua những vùng biển nguy hiểm để đến Hội An, việc thờ cúng Thiên Hậu là một điều hoàn toàn cần thiết. Bà là hy vọng và sự đảm bảo cho một chuyến trở về nhà an toàn. Tại Hội Quán Quảng Triệu, bàn thờ của bà là một lời nhắc nhở về tầm quan trọng của các tuyến đường biển và mức độ mạnh mẽ của niềm tin vào sức mạnh của bà đối với những người đã mạo hiểm tính mạng và hàng hóa của mình trên đại dương bao la. Bà là biểu tượng của sự an toàn, may mắn và là người bảo trợ cho tất cả các chuyến đi trên biển.
</p>

<h6>Kiệt tác kiến trúc và những chi tiết sẽ làm bạn ngạc nhiên</h6>
<img src="29.jpg" alt="Hội Quán Quảng Triệu"/>
<p>
    Hội Quán Quảng Triệu là một kiệt tác kiến trúc thực sự, mang đậm phong cách Quảng Đông! Được xây dựng bằng gỗ, đá và gạch đỏ, khu phức hợp này ngay lập tức thu hút sự chú ý của bạn với các chi tiết:
</p>
<ul>
    <li>Cổng vào: Bạn sẽ được chào đón bởi những cánh cổng ấn tượng, được trang trí phong phú, thường có ba lối vào và những đường chạm khắc tinh xảo – chúng dường như mời bạn vào một thế giới khác.</li>
    <li>Sân trong huyền bí: Bên trong, bạn sẽ tìm thấy một số sân trong tràn ngập ánh sáng dẫn đến Chính điện. Trong một trong số đó, hãy nhớ chú ý đến đài phun nước hoặc ao trang trí lớn với rồng – biểu tượng của sự giàu có và may mắn!</li>
    <li>Nghệ thuật trong từng chi tiết: Hội quán nổi tiếng với những chạm khắc gỗ và đá vô cùng chi tiết và được thực hiện một cách khéo léo. Tại đây, bạn có thể chiêm ngưỡng không ngừng những hình ảnh rồng, phượng, sinh vật thần thoại, động vật, cũng như các cảnh trong thần thoại Trung Quốc và tiểu thuyết cổ điển. Màu sắc tươi sáng, đặc biệt là đỏ và vàng, tạo nên một bầu không khí thực sự sang trọng.</li>
    <li>Điêu khắc và tượng: Ngoài các chạm khắc, bạn sẽ thấy những bức tượng sống động, bao gồm bức tượng chính của Quan Công. Và cũng hãy tìm các bức tượng của 12 con giáp Trung Quốc – chúng rất phổ biến với du khách!</li>
</ul>

<h6>Ý nghĩa văn hóa và lịch sử sống động</h6>
<p>
    Hội Quán Quảng Triệu ngày nay vẫn tiếp tục là một nơi thờ cúng tích cực của cộng đồng người Hoa ở Hội An. Các lễ hội quan trọng hàng năm được tổ chức tại đây, đặc biệt là Lễ hội Quan Công đầy màu sắc, thu hút nhiều tín đồ và du khách.
</p>
<p>
    Hội quán này không chỉ là một điểm tham quan đẹp. Đó là sự phản ánh trực tiếp sức mạnh kinh tế và ảnh hưởng văn hóa của cộng đồng người Quảng Đông trong thời kỳ hoàng kim của Hội An. Đó là một phần quan trọng của di sản UNESCO, thể hiện sự tương tác văn hóa sâu sắc và di sản được tạo ra bởi các cộng đồng khác nhau.
</p>
<p>
    Giờ mở cửa: Thường từ 07:00 đến 17:00 hàng ngày.
</p>
<p>
    Vé vào cửa: Việc tham quan Hội Quán Quảng Triệu thường được bao gồm trong vé vào cửa chung của Phố cổ Hội An. Điều này tiện lợi vì nó cũng cấp quyền truy cập vào các điểm tham quan khác.
</p>
<p>
    Hãy chắc chắn ghé thăm Hội Quán Quảng Triệu để tìm hiểu sâu hơn về lịch sử và văn hóa của cộng đồng người Hoa ở Hội An. Đó thực sự là một nơi ấn tượng và được bảo tồn tuyệt vời!
</p>
    `,
      internalImageNames: ['29.jpg'],
    },

    slug: {
      en: 'cantonese-assembly-hall',
      ru: 'kantonskiy-sbornyy-zal',
      es: 'sala-asamblea-cantonesa',
      fr: 'salle-assemblee-cantonaise',
      vn: 'hoi-quan-quang-trieu',
    },
  },
  // Phung Hung House
  {
    id: 'phung-hung-house',
    coordinates: [15.877187252525204, 108.32579993502969],
    category: ['museum'], // Строго "museum" как указано!
    imageUrl: '5.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Phung Hung House',
      description: "One of Hoi An's largest ancient mansions!",
      fullDescription: `
<p>
    Imagine standing by the famous Japanese Bridge in Hoi An, feeling the breeze from the river and the scent of history... And right behind the bridge, like a guardian of centuries, stands the Phung Hung House (The Old House of Phung Hung). This isn't just an old house; it's a living open-air museum where every beam and every tile remembers its stories.
</p>
<p>
    This mansion, one of the largest and most impressive in Hoi An, was built in 1780. Its owners were not just ordinary residents, but successful merchants who made a fortune selling exotic goods: glassware, precious spices, and fragrant incense. Imagine how many caravans and ships this house has seen!
</p>

<h6>Architectural Mix or How Was Hoi An Built?</h6>
<p>
    The architecture of Phung Hung House is a song in itself, darling! It's a true embodiment of what makes Hoi An so unique: an incredible blend of cultures. Here, every corner tells you about trade routes and cultural exchanges:
</p>
<ul>
    <li>Chinese, Japanese, and Vietnamese elements are skillfully intertwined, creating a unique appearance. You'll see the influence of Chinese temples, Japanese precision, and Vietnamese functionality, all under one roof. It's like an architectural mixed salad, but very, very tasty!</li>
    <li>The two-story building is supported by as many as 80 sturdy wooden columns. Just imagine the scale and skill of the ancient builders! These columns don't just hold the roof – they seem to carry history itself.</li>
    <li>Like many ancient houses in Hoi An, Phung Hung House has an ancestral shrine. This is the heart of the house, a place where generations of the family paid tribute to their ancestors and preserved their traditions. This is what makes these houses alive, not just tourist attractions.</li>
</ul>

<h6>What Else to See and Feel?</h6>

<p>
    In addition to its unique architecture and rich history, Phung Hung House has a few surprises in store for you:
</p>
<ul>
    <li>Legacy Lives On: The house still belongs to the descendants of the very merchants who built it. This is incredible, darling! You can chat with the guardians of history, who will proudly tell you about their home and family traditions. It's not a museum exhibit; it's living history!</li>
    <li>Breathtaking View: Be sure to go up to the balcony on the second floor. From there, you'll get an absolutely amazing view of the Japanese Bridge and the bustling street. It's the perfect place to take those postcard-perfect photos and simply soak in the atmosphere of Hoi An.</li>
    <li>Sometimes, Surprises: Since it's a residential house, it might not always be open or have varying hours, depending on family circumstances. This adds even more charm and authenticity – it's like you're visiting someone's home, not a well-oiled tourist attraction.</li>
</ul>
<p>
    Phung Hung House is not just a dot on the map of Hoi An. It's a gateway to its trading past, a living testament to cultural richness, and a place where you can feel the true spirit of the city. Be sure to check it out!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Дом Фунг Хынг',
      description: 'Один из крупнейших старинных особняков Хойана!',
      fullDescription: `
<p>
    Представьте, вы стоите у знаменитого Японского моста в Хойане, ощущая легкий ветерок с реки и запах истории... А прямо за мостом, словно страж веков, возвышается Дом Фунг Хынг (The Old House of Phung Hung). Это не просто старый дом; это живой музей под открытым небом, где каждая балка и каждая черепица помнит свои истории.
</p>
<p>
    Этот особняк, один из самых больших и впечатляющих в Хойане, был построен в 1780 году. Его владельцами были не просто обычные жители, а успешные купцы, сколотившие целое состояние на торговле экзотическими товарами: стеклянной посудой, драгоценными специями и ароматными благовониями. Представьте, сколько караванов и кораблей повидал этот дом!
</p>

<h6>Архитектурный микс, или как строился Хойан?</h6>
<p>
    Архитектура Дома Фунг Хынг — это песня сама по себе, дорогуша! Это истинное воплощение того, что делает Хойан таким уникальным: невероятное смешение культур. Здесь каждый уголок рассказывает вам о торговых путях и культурном обмене:
</p>
<ul>
    <li>Китайские, японские и вьетнамские элементы искусно переплетаются, создавая неповторимый облик. Вы увидите влияние китайских храмов, японской точности и вьетнамской функциональности — и всё это под одной крышей. Это как архитектурный микс-салат, но очень-очень вкусный!</li>
    <li>Двухэтажное здание поддерживается целыми 80 крепкими деревянными колоннами. Только представьте масштаб и мастерство древних строителей! Эти колонны не просто держат крышу — они словно несут на себе саму историю.</li>
    <li>Как и многие старинные дома в Хойане, Дом Фунг Хынг имеет алтарь предков. Это сердце дома, место, где поколения семьи отдавали дань уважения своим прародителям и сохраняли свои традиции. Именно это делает эти дома живыми, а не просто туристическими объектами.</li>
</ul>

<h6>Что ещё посмотреть и почувствовать?</h6>

<p>
    Помимо уникальной архитектуры и богатой истории, Дом Фунг Хынг приготовил для вас несколько сюрпризов:
</p>
<ul>
    <li>Наследие живет: Дом до сих пор принадлежит потомкам тех самых купцов, которые его построили. Это невероятно, дорогуша! Вы можете пообщаться с хранителями истории, которые с гордостью расскажут вам о своем доме и семейных традициях. Это не музейный экспонат — это живая история!</li>
    <li>Захватывающий вид: Обязательно поднимитесь на балкон второго этажа. Оттуда открывается совершенно потрясающий вид на Японский мост и оживленную улицу. Это идеальное место, чтобы сделать те самые фотографии, которые будут выглядеть как открытки, и просто впитать атмосферу Хойана.</li>
    <li>Иногда сюрпризы: Поскольку это жилой дом, он не всегда может быть открыт или иметь изменяющиеся часы работы, в зависимости от семейных обстоятельств. Это добавляет ещё больше шарма и аутентичности — будто вы пришли в гости к кому-то домой, а не на отлаженный туристический объект.</li>
</ul>
<p>
    Дом Фунг Хынг — это не просто точка на карте Хойана. Это ворота в его торговое прошлое, живое свидетельство культурного богатства и место, где можно почувствовать настоящий дух города. Обязательно загляните сюда!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Casa de Phung Hung',
      description: '¡Una de las mansiones antiguas más grandes de Hoi An!',
      fullDescription: `
<p>
    Imagina que estás de pie junto al famoso Puente Japonés en Hoi An, sintiendo la brisa del río y el aroma de la historia... Y justo detrás del puente, como un guardián de los siglos, se alza la Casa de Phung Hung (The Old House of Phung Hung). Esta no es solo una casa antigua; es un museo viviente al aire libre donde cada viga y cada teja recuerdan sus historias.
</p>
<p>
    Esta mansión, una de las más grandes e impresionantes de Hoi An, fue construida en 1780. Sus propietarios no eran residentes comunes, sino exitosos comerciantes que hicieron fortuna vendiendo productos exóticos: cristalería, especias preciosas e incienso fragante. ¡Imagina cuántas caravanas y barcos ha visto esta casa!
</p>

<h6>Mezcla arquitectónica o ¿Cómo se construyó Hoi An?</h6>
<p>
    ¡La arquitectura de la Casa de Phung Hung es una canción en sí misma, querida! Es una verdadera encarnación de lo que hace a Hoi An tan único: una increíble mezcla de culturas. Aquí, cada rincón te habla de rutas comerciales e intercambios culturales:
</p>
<ul>
    <li>Elementos chinos, japoneses y vietnamitas se entrelazan hábilmente, creando una apariencia única. Verás la influencia de los templos chinos, la precisión japonesa y la funcionalidad vietnamita, todo bajo un mismo techo. ¡Es como una ensalada mixta arquitectónica, pero muy, muy sabrosa!</li>
    <li>El edificio de dos pisos está sostenido por hasta 80 robustas columnas de madera. ¡Solo imagina la escala y la habilidad de los constructores antiguos! Estas columnas no solo sostienen el techo, sino que parecen llevar la historia misma.</li>
    <li>Como muchas casas antiguas en Hoi An, la Casa de Phung Hung tiene un santuario ancestral. Este es el corazón de la casa, un lugar donde generaciones de la familia rindieron homenaje a sus antepasados y conservaron sus tradiciones. Esto es lo que hace que estas casas estén vivas, no solo sean atracciones turísticas.</li>
</ul>

<h6>¿Qué más ver y sentir?</h6>

<p>
    Además de su arquitectura única y su rica historia, la Casa de Phung Hung tiene algunas sorpresas guardadas para ti:
</p>
<ul>
    <li>El legado continúa: La casa todavía pertenece a los descendientes de los mismos comerciantes que la construyeron. ¡Esto es increíble, querida! Puedes charlar con los guardianes de la historia, quienes te contarán con orgullo sobre su hogar y las tradiciones familiares. No es una exhibición de museo; ¡es historia viva!</li>
    <li>Vista impresionante: Asegúrate de subir al balcón del segundo piso. Desde allí, obtendrás una vista absolutamente increíble del Puente Japonés y la animada calle. Es el lugar perfecto para tomar esas fotos dignas de postal y simplemente sumergirte en la atmósfera de Hoi An.</li>
    <li>A veces, sorpresas: Dado que es una casa residencial, es posible que no siempre esté abierta o que tenga horarios variables, según las circunstancias familiares. Esto añade aún más encanto y autenticidad, es como si estuvieras visitando la casa de alguien, no una atracción turística bien engrasada.</li>
</ul>
<p>
    La Casa de Phung Hung no es solo un punto en el mapa de Hoi An. Es una puerta de entrada a su pasado comercial, un testimonio vivo de la riqueza cultural y un lugar donde puedes sentir el verdadero espíritu de la ciudad. ¡Asegúrate de visitarla!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Maison Phung Hung',
      description: "L'une des plus grandes demeures anciennes de Hoi An !",
      fullDescription: `
<p>
    Imaginez-vous debout près du célèbre Pont Japonais à Hoi An, sentant la brise du fleuve et le parfum de l'histoire... Et juste derrière le pont, comme un gardien des siècles, se dresse la Maison Phung Hung (L'Ancienne Maison de Phung Hung). Ce n'est pas juste une vieille maison ; c'est un musée vivant à ciel ouvert où chaque poutre et chaque tuile se souviennent de ses histoires.
</p>
<p>
    Cette demeure, l'une des plus grandes et des plus impressionnantes de Hoi An, a été construite en 1780. Ses propriétaires n'étaient pas de simples habitants, mais des marchands prospères qui ont fait fortune en vendant des produits exotiques : verrerie, épices précieuses et encens parfumé. Imaginez combien de caravanes et de navires cette maison a vus !
</p>

<h6>Mélange architectural ou Comment Hoi An a-t-elle été construite ?</h6>
<p>
    L'architecture de la Maison Phung Hung est une chanson à elle seule, ma chère ! C'est une véritable incarnation de ce qui rend Hoi An si unique : un incroyable mélange de cultures. Ici, chaque coin vous raconte des histoires de routes commerciales et d'échanges culturels :
</p>
<ul>
    <li>Des éléments chinois, japonais et vietnamiens sont habilement entrelacés, créant une apparence unique. Vous verrez l'influence des temples chinois, la précision japonaise et la fonctionnalité vietnamienne, le tout sous un même toit. C'est comme une salade mixte architecturale, mais très, très savoureuse !</li>
    <li>Le bâtiment de deux étages est soutenu par pas moins de 80 robustes colonnes en bois. Imaginez l'échelle et le savoir-faire des anciens constructeurs ! Ces colonnes ne tiennent pas seulement le toit – elles semblent porter l'histoire elle-même.</li>
    <li>Comme de nombreuses maisons anciennes de Hoi An, la Maison Phung Hung possède un sanctuaire ancestral. C'est le cœur de la maison, un lieu où des générations de la famille ont rendu hommage à leurs ancêtres et ont préservé leurs traditions. C'est ce qui rend ces maisons vivantes, et non de simples attractions touristiques.</li>
</ul>

<h6>Que voir et ressentir d'autre ?</h6>

<p>
    En plus de son architecture unique et de sa riche histoire, la Maison Phung Hung vous réserve quelques surprises :
</p>
<ul>
    <li>Le Legs perdure : La maison appartient toujours aux descendants des mêmes marchands qui l'ont construite. C'est incroyable, ma chère ! Vous pouvez discuter avec les gardiens de l'histoire, qui vous raconteront avec fierté leur foyer et leurs traditions familiales. Ce n'est pas une exposition de musée ; c'est de l'histoire vivante !</li>
    <li>Vue imprenable : N'oubliez pas de monter sur le balcon du deuxième étage. De là, vous aurez une vue absolument incroyable sur le Pont Japonais et la rue animée. C'est l'endroit idéal pour prendre ces photos dignes d'une carte postale et simplement vous imprégner de l'atmosphère de Hoi An.</li>
    <li>Parfois, des surprises : Comme c'est une maison résidentielle, elle pourrait ne pas toujours être ouverte ou avoir des horaires variables, selon les circonstances familiales. Cela ajoute encore plus de charme et d'authenticité – c'est comme si vous rendiez visite à quelqu'un chez lui, et non à une attraction touristique bien huilée.</li>
</ul>
<p>
    La Maison Phung Hung n'est pas seulement un point sur la carte de Hoi An. C'est une porte d'entrée vers son passé commercial, un témoignage vivant de la richesse culturelle, et un endroit où vous pouvez ressentir le véritable esprit de la ville. Assurez-vous d'y jeter un coup d'œil !
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Nhà Cổ Phùng Hưng',
      description: 'Một trong những ngôi nhà cổ lớn nhất Hội An!',
      fullDescription: `
<p>
    Hãy tưởng tượng bạn đang đứng bên Cầu Nhật Bản nổi tiếng ở Hội An, cảm nhận làn gió từ dòng sông và hương vị của lịch sử... Và ngay phía sau cây cầu, như một người bảo vệ hàng thế kỷ, là Nhà Cổ Phùng Hưng (The Old House of Phung Hung). Đây không chỉ là một ngôi nhà cổ; đây là một bảo tàng sống ngoài trời nơi mỗi xà nhà và mỗi viên ngói đều ghi nhớ những câu chuyện của nó.
</p>
<p>
    Dinh thự này, một trong những ngôi nhà lớn nhất và ấn tượng nhất ở Hội An, được xây dựng vào năm 1780. Chủ nhân của nó không chỉ là những cư dân bình thường, mà là những thương nhân thành đạt đã kiếm được tài sản nhờ buôn bán các mặt hàng ngoại lai: đồ thủy tinh, gia vị quý hiếm và hương trầm thơm. Hãy tưởng tượng ngôi nhà này đã chứng kiến bao nhiêu đoàn caravan và tàu thuyền!
</p>

<h6>Sự pha trộn kiến trúc hay Hội An đã được xây dựng như thế nào?</h6>
<p>
    Kiến trúc của Nhà Cổ Phùng Hưng là một bài ca riêng, bạn ạ! Nó là một hiện thân thực sự của những gì làm cho Hội An trở nên độc đáo: sự pha trộn đáng kinh ngạc của các nền văn hóa. Ở đây, mỗi góc đều kể cho bạn nghe về các tuyến đường thương mại và giao lưu văn hóa:
</p>
<ul>
    <li>Các yếu tố Trung Quốc, Nhật Bản và Việt Nam được đan xen khéo léo, tạo nên một vẻ ngoài độc đáo. Bạn sẽ thấy ảnh hưởng của các ngôi chùa Trung Quốc, sự chính xác của Nhật Bản và tính năng của Việt Nam, tất cả dưới một mái nhà. Nó giống như một món salad kiến trúc hỗn hợp, nhưng rất, rất ngon!</li>
    <li>Tòa nhà hai tầng được chống đỡ bởi tới 80 cột gỗ chắc chắn. Chỉ cần tưởng tượng quy mô và kỹ năng của những người thợ xây cổ đại! Những cột này không chỉ giữ mái nhà – chúng dường như mang cả lịch sử.</li>
    <li>Giống như nhiều ngôi nhà cổ ở Hội An, Nhà Cổ Phùng Hưng có một bàn thờ tổ tiên. Đây là trái tim của ngôi nhà, nơi các thế hệ trong gia đình đã tỏ lòng kính trọng với tổ tiên và bảo tồn truyền thống của họ. Đây chính là điều làm cho những ngôi nhà này trở nên sống động, không chỉ là những điểm thu hút khách du lịch.</li>
</ul>

<h6>Còn gì để xem và cảm nhận?</h6>

<p>
    Ngoài kiến trúc độc đáo và lịch sử phong phú, Nhà Cổ Phùng Hưng còn có một vài điều bất ngờ dành cho bạn:
</p>
<ul>
    <li>Di sản vẫn sống: Ngôi nhà vẫn thuộc về con cháu của những thương nhân đã xây dựng nó. Điều này thật đáng kinh ngạc, bạn ạ! Bạn có thể trò chuyện với những người gìn giữ lịch sử, những người sẽ tự hào kể cho bạn nghe về ngôi nhà và truyền thống gia đình của họ. Đây không phải là một triển lãm bảo tàng; đây là lịch sử sống!</li>
    <li>View ngoạn mục: Hãy chắc chắn lên ban công tầng hai. Từ đó, bạn sẽ có một cái nhìn hoàn toàn tuyệt vời về Cầu Nhật Bản và con phố nhộn nhịp. Đó là nơi hoàn hảo để chụp những bức ảnh đẹp như bưu thiếp và đơn giản là đắm mình vào bầu không khí của Hội An.</li>
    <li>Đôi khi, bất ngờ: Vì đây là một ngôi nhà dân sinh, nên nó có thể không phải lúc nào cũng mở cửa hoặc có giờ giấc khác nhau, tùy thuộc vào hoàn cảnh gia đình. Điều này càng làm tăng thêm vẻ duyên dáng và chân thực – giống như bạn đang ghé thăm nhà ai đó, chứ không phải một điểm du lịch được tổ chức bài bản.</li>
</ul>
<p>
    Nhà Cổ Phùng Hưng không chỉ là một chấm nhỏ trên bản đồ Hội An. Đó là cánh cổng dẫn đến quá khứ thương mại của nó, một minh chứng sống động về sự phong phú văn hóa và một nơi bạn có thể cảm nhận tinh thần thực sự của thành phố. Hãy chắc chắn ghé thăm!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    slug: {
      en: 'phung-hung-house',
      ru: 'dom-fung-hung',
      es: 'casa-phung-hung',
      fr: 'maison-phung-hung',
      vn: 'nha-co-phung-hung',
    },
  },
  // Sa Huynh Cultural Museum
  {
    id: 'sa-huynh-cultural-museum',
    coordinates: [15.877044021697701, 108.32639923348592],
    category: ['museum'], // Строго "museum"
    imageUrl: '6.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Sa Huynh Cultural Museum',
      description:
        'The museum tells the story of the first people who settled in the area 2000 years ago.',
      fullDescription: `
<p>
    Imagine: you're walking through the ancient streets of Hoi An, breathing in the scent of spices and feeling the breath of centuries. What if I told you that the history of this city began thousands of years before all these beautiful houses and Japanese bridges appeared? Long before traders from all over the world came here, life was already bustling!
</p>
<p>
    Want to delve into the heart of prehistoric Vietnam? Then your path leads to the Sa Huynh Cultural Museum. This is not just another exhibition – it's a time machine that will take you back 3,000 years, straight to the Iron Age!
</p>

<h6>What is this Sa Huynh anyway?</h6>
<p>
    Sa Huynh culture (approximately 1000 BC – 200 AD) is not just a collection of boring archaeological finds. It was an entire civilization that, according to scholars, is the ancestor of the Champa people – the founders of the powerful Champa kingdom!
</p>
<p>
    The Sa Huynh people were true masters of their craft:
</p>
<ul>
    <li>Burial Mysteries: They cremated their adults and buried the ashes in huge ceramic urns, covered with lids. And yes, along with the ashes, they placed treasures – from tools to exquisite ornaments. Imagine how many stories these jars hold!</li>
    <li>Ancient "Blacksmiths": These guys mastered metallurgy, creating elegant iron and bronze tools: axes, swords, spearheads, knives, and sickles. These weren't just any old tools!</li>
    <li>Global Traders: Forget the "Silk Road" – Sa Huynh had its own "Sa Huynh-Kalanay Trade Route"! They traded with literally the whole world – from China and India to the Philippines and even the Mediterranean! Chinese coins and other curiosities found here prove that Hoi An was an international trading hub thousands of years before it became mainstream.</li>
</ul>

<h6>What awaits you inside the museum:</h6>
<img src="27.jpg" alt="Sa Huynh Cultural Museum"/>
<p>
    The Sa Huynh Cultural Museum is not a dusty archive, but a real treasure chest! It houses about 1000 unique artifacts found right here in Hoi An and on the nearby Cham Islands. Each exhibit is a piece of ancient life that will tell you its story.
</p>

<ul>
    <li>Urns, Urns, and More Urns: Of course, you'll see a collection of those very burial jars – from small to large, in various shapes and sizes. Try to imagine who might have been buried in each of them!</li>
    <li>The Brilliance of Ancient Jewelry: Get ready to admire! Incredible jewelry made of stone, bronze, gold, and glass is on display here. But the highlight of the program, of course, is the famous double-headed earrings (lingling-o). These are unique ear ornaments, often depicting two-headed creatures. Just think what these symbols meant to ancient people!</li>
    <li>Tools and Utensils: You'll see what the Sa Huynh people used every day: from axes to sickles, from pots to exquisite ceramics.</li>
    <li>Immersion in History: The museum provides detailed archaeological explanations, photographs from excavation sites, and even documentary videos that will help you visualize the life and rituals of this enigmatic civilization.</li>
</ul>

<h6>Important details for your adventure:</h6>
<ul>
    <li>Address: 149 Trần Phú, Phường Minh An, Hội An, Quảng Nam, Vietnam. It's located right in the heart of the Ancient Town.</li>
    <li>Opening Hours: Usually from 08:00 to 20:00 daily. BUT! Keep in mind: on the 10th of each month, the museum is closed for maintenance. Plan your visit in advance!</li>
    <li>Admission: Visiting the museum usually requires a single admission ticket to Hoi An Ancient Town. This is convenient as it also grants access to other attractions.</li>
    <li>The Building Itself: The museum is housed in a beautiful, traditional building with characteristic yellow walls, red tiled roofs, and wooden elements, creating a perfect atmosphere for immersing yourself in antiquity.</li>
</ul>
<p>
    Don't miss the chance to touch the very origins of Hoi An and understand what laid the foundation for its greatness! The Sa Huynh Cultural Museum is not just history; it's a prologue to your adventure in Hoi An!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей культуры Са Хюинь',
      description:
        'Музей рассказывает историю первых людей, заселивших эту территорию 2000 лет назад.',
      fullDescription: `
<p>
    Представьте: вы идете по древним улицам Хойана, вдыхая аромат специй и чувствуя дыхание веков. А что, если я скажу вам, что история этого города началась за тысячи лет до того, как появились все эти красивые дома и Японские мосты? Задолго до того, как сюда пришли торговцы со всего мира, здесь уже кипела жизнь!
</p>
<p>
    Хотите окунуться в самое сердце доисторического Вьетнама? Тогда ваш путь лежит в Музей культуры Са Хюинь. Это не просто очередная выставка — это машина времени, которая перенесет вас на 3000 лет назад, прямиком в Железный век!
</p>

<h6>Что это вообще за Са Хюинь?</h6>
<p>
    Культура Са Хюинь (примерно 1000 г. до н.э. – 200 г. н.э.) — это не просто набор скучных археологических находок. Это целая цивилизация, которая, по мнению ученых, является прародителем народа Чампа — основателей могущественного королевства Чампа!
</p>
<p>
    Народ Са Хюинь был настоящими мастерами своего дела:
</p>
<ul>
    <li>Тайны захоронений: Они кремировали своих взрослых и хоронили прах в огромных керамических урнах, накрытых крышками. И да, вместе с прахом клали сокровища — от инструментов до изысканных украшений. Представьте, сколько историй хранят эти кувшины!</li>
    <li>Древние "кузнецы": Эти ребята освоили металлургию, создавая изящные железные и бронзовые орудия: топоры, мечи, наконечники копий, ножи и серпы. Это были не просто абы какие инструменты!</li>
    <li>Глобальные торговцы: Забудьте о "Шелковом пути" — у Са Хюинь был свой "Торговый путь Са Хюинь-Каланай"! Они торговали буквально со всем миром — от Китая и Индии до Филиппин и даже Средиземноморья! Найденные здесь китайские монеты и прочие диковинки доказывают, что Хойан был международным торговым центром за тысячи лет до того, как это стало мейнстримом.</li>
</ul>

<h6>Что вас ждет внутри музея:</h6>
<img src="27.jpg" alt="Музей культуры Са Хюинь"/>
<p>
    Музей культуры Са Хюинь — это не пыльный архив, а настоящий сундук с сокровищами! Здесь хранится около 1000 уникальных артефактов, найденных прямо здесь, в Хойане, и на близлежащих Чамских островах. Каждый экспонат — это частичка древней жизни, которая расскажет вам свою историю.
</p>

<ul>
    <li>Урны, урны и ещё раз урны: Конечно, вы увидите коллекцию тех самых погребальных урн — от маленьких до больших, разных форм и размеров. Попробуйте представить, кто мог быть похоронен в каждой из них!</li>
    <li>Блеск древних украшений: Готовьтесь восхищаться! Здесь представлены невероятные украшения из камня, бронзы, золота и стекла. Но гвоздь программы, конечно, — знаменитые двуглавые серьги (lingling-o). Это уникальные ушные украшения, часто изображающие двуглавых существ. Только подумайте, что эти символы значили для древних людей!</li>
    <li>Инструменты и утварь: Вы увидите, чем пользовались люди Са Хюинь каждый день: от топоров до серпов, от горшков до изысканной керамики.</li>
    <li>Погружение в историю: Музей предоставляет подробные археологические объяснения, фотографии с мест раскопок и даже документальные видео, которые помогут вам представить жизнь и ритуалы этой загадочной цивилизации.</li>
</ul>

<h6>Важные детали для вашего приключения:</h6>
<ul>
    <li>Адрес: 149 Trần Phú, Phường Minh An, Hội An, Quảng Nam, Вьетнам. Он расположен прямо в сердце Старого города.</li>
    <li>Часы работы: Обычно с 08:00 до 20:00 ежедневно. НО! Имейте в виду: 10-го числа каждого месяца музей закрыт на техническое обслуживание. Планируйте свой визит заранее!</li>
    <li>Вход: Посещение музея обычно требует единого входного билета в Древний город Хойан. Это удобно, так как он также дает доступ к другим достопримечательностям.</li>
    <li>Само здание: Музей расположен в красивом традиционном здании с характерными желтыми стенами, красными черепичными крышами и деревянными элементами, создавая идеальную атмосферу для погружения в древность.</li>
</ul>
<p>
    Не упустите шанс прикоснуться к самым истокам Хойана и понять, что заложило основу его величия! Музей культуры Са Хюинь — это не просто история; это пролог к вашему приключению в Хойане!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo Cultural Sa Huynh',
      description:
        'El museo cuenta la historia de las primeras personas que se asentaron en la zona hace 2000 años.',
      fullDescription: `
<p>
    Imagina: estás caminando por las antiguas calles de Hoi An, respirando el aroma de las especias y sintiendo el aliento de los siglos. ¿Qué pasaría si te dijera que la historia de esta ciudad comenzó miles de años antes de que aparecieran todas estas hermosas casas y puentes japoneses? Mucho antes de que los comerciantes de todo el mundo llegaran aquí, ¡la vida ya bullía!
</p>
<p>
    ¿Quieres adentrarte en el corazón del Vietnam prehistórico? Entonces tu camino te lleva al Museo Cultural Sa Huynh. Esta no es solo otra exposición, ¡es una máquina del tiempo que te transportará 3.000 años atrás, directamente a la Edad del Hierro!
</p>

<h6>¿Qué es Sa Huynh, de todos modos?</h6>
<p>
    La cultura Sa Huynh (aproximadamente 1000 a.C. – 200 d.C.) no es solo una colección de aburridos hallazgos arqueológicos. Fue toda una civilización que, según los estudiosos, es el ancestro del pueblo Champa, ¡los fundadores del poderoso reino de Champa!
</p>
<p>
    La gente de Sa Huynh era verdadera maestra de su oficio:
</p>
<ul>
    <li>Misterios funerarios: Cremaban a sus adultos y enterraban las cenizas en enormes urnas de cerámica, cubiertas con tapas. Y sí, junto con las cenizas, colocaban tesoros, desde herramientas hasta exquisitos ornamentos. ¡Imagina cuántas historias guardan estos jarrones!</li>
    <li>Antiguos "herreros": Estos tipos dominaron la metalurgia, creando elegantes herramientas de hierro y bronce: hachas, espadas, puntas de lanza, cuchillos y hoces. ¡Estas no eran herramientas cualquiera!</li>
    <li>Comerciantes globales: Olvídate de la "Ruta de la Seda" – ¡Sa Huynh tenía su propia "Ruta Comercial Sa Huynh-Kalanay"! Comerciaban literalmente con todo el mundo, desde China e India hasta Filipinas e incluso el Mediterráneo. Las monedas chinas y otras curiosidades encontradas aquí demuestran que Hoi An fue un centro comercial internacional miles de años antes de que se volviera algo común.</li>
</ul>

<h6>Lo que te espera dentro del museo:</h6>
<img src="27.jpg" alt="Museo Cultural Sa Huynh"/>
<p>
    El Museo Cultural Sa Huynh no es un archivo polvoriento, ¡sino un verdadero cofre del tesoro! Alberga alrededor de 1000 artefactos únicos encontrados aquí mismo en Hoi An y en las cercanas islas Cham. Cada exhibición es una pieza de vida antigua que te contará su historia.
</p>

<ul>
    <li>Urnas, urnas y más urnas: Por supuesto, verás una colección de esas mismas urnas funerarias, desde pequeñas hasta grandes, en varias formas y tamaños. ¡Intenta imaginar quién podría haber sido enterrado en cada una de ellas!</li>
    <li>El brillo de la joyería antigua: ¡Prepárate para admirar! Aquí se exhiben increíbles joyas hechas de piedra, bronce, oro y vidrio. Pero lo más destacado del programa, por supuesto, son los famosos aretes de doble cabeza (lingling-o). Estos son adornos de oreja únicos, que a menudo representan criaturas de dos cabezas. ¡Piensa lo que estos símbolos significaron para la gente antigua!</li>
    <li>Herramientas y utensilios: Verás lo que la gente de Sa Huynh usaba todos los días: desde hachas hasta hoces, desde ollas hasta exquisita cerámica.</li>
    <li>Inmersión en la historia: El museo ofrece explicaciones arqueológicas detalladas, fotografías de los sitios de excavación e incluso videos documentales que te ayudarán a visualizar la vida y los rituales de esta enigmática civilización.</li>
</ul>

<h6>Detalles importantes para tu aventura:</h6>
<ul>
    <li>Dirección: 149 Trần Phú, Phường Minh An, Hội An, Quảng Nam, Vietnam. Se encuentra justo en el corazón del Casco Antiguo.</li>
    <li>Horario de Apertura: Normalmente de 08:00 a 20:00 diariamente. ¡PERO! Ten en cuenta: el día 10 de cada mes, el museo está cerrado por mantenimiento. ¡Planifica tu visita con anticipación!</li>
    <li>Entrada: La visita al museo generalmente requiere un solo boleto de entrada a la Ciudad Antigua de Hoi An. Esto es conveniente, ya que también otorga acceso a otras atracciones.</li>
    <li>El Edificio en Sí: El museo está ubicado en un hermoso edificio tradicional con características paredes amarillas, techos de tejas rojas y elementos de madera, creando una atmósfera perfecta para sumergirse en la antigüedad.</li>
</ul>
<p>
    ¡No pierdas la oportunidad de tocar los orígenes mismos de Hoi An y comprender qué sentó las bases de su grandeza! ¡El Museo Cultural Sa Huynh no es solo historia; es un prólogo a tu aventura en Hoi An!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Musée Culturel Sa Huynh',
      description:
        "Le musée raconte l'histoire des premiers habitants de la région il y a 2000 ans.",
      fullDescription: `
<p>
    Imaginez : vous marchez dans les rues anciennes de Hoi An, respirant le parfum des épices et sentant le souffle des siècles. Et si je vous disais que l'histoire de cette ville a commencé des milliers d'années avant que toutes ces belles maisons et ponts japonais n'apparaissent ? Bien avant l'arrivée des commerçants du monde entier, la vie y battait déjà son plein !
</p>
<p>
    Envie de plonger au cœur du Vietnam préhistorique ? Alors votre chemin vous mène au Musée Culturel Sa Huynh. Ce n'est pas juste une autre exposition – c'est une machine à remonter le temps qui vous transportera 3 000 ans en arrière, directement à l'âge du fer !
</p>

<h6>Qu'est-ce que Sa Huynh au juste ?</h6>
<p>
    La culture Sa Huynh (environ 1000 av. J.-C. – 200 ap. J.-C.) n'est pas seulement une collection de découvertes archéologiques ennuyeuses. C'était toute une civilisation qui, selon les chercheurs, est l'ancêtre du peuple Cham – les fondateurs du puissant royaume de Champa !
</p>
<p>
    Le peuple Sa Huynh était de véritables maîtres de leur artisanat :
</p>
<ul>
    <li>Mystères funéraires : Ils incinérait leurs adultes et enterraient les cendres dans d'énormes urnes en céramique, couvertes de couvercles. Et oui, avec les cendres, ils plaçaient des trésors – des outils aux ornements exquis. Imaginez combien d'histoires ces jarres recèlent !</li>
    <li>Anciens "forgerons" : Ces gars-là maîtrisaient la métallurgie, créant des outils élégants en fer et en bronze : haches, épées, pointes de lance, couteaux et faucilles. Ce n'étaient pas n'importe quels vieux outils !</li>
    <li>Commerçants mondiaux : Oubliez la "Route de la Soie" – Sa Huynh avait sa propre "Route Commerciale Sa Huynh-Kalanay" ! Ils commerçaient littéralement avec le monde entier – de la Chine et de l'Inde aux Philippines et même à la Méditerranée ! Des pièces de monnaie chinoises et d'autres curiosités trouvées ici prouvent que Hoi An était un centre commercial international des milliers d'années avant que cela ne devienne courant.</li>
</ul>

<h6>Ce qui vous attend à l'intérieur du musée :</h6>
<img src="27.jpg" alt="Musée Culturel Sa Huynh"/>
<p>
    Le Musée Culturel Sa Huynh n'est pas une archive poussiéreuse, mais un véritable coffre au trésor ! Il abrite environ 1000 artefacts uniques trouvés ici même à Hoi An et sur les îles Cham voisines. Chaque exposition est un morceau de vie ancienne qui vous racontera son histoire.
</p>

<ul>
    <li>Urnes, urnes, et encore des urnes : Bien sûr, vous verrez une collection de ces mêmes jarres funéraires – des petites aux grandes, de différentes formes et tailles. Essayez d'imaginer qui aurait pu être enterré dans chacune d'elles !</li>
    <li>L'éclat des bijoux anciens : Préparez-vous à admirer ! D'incroyables bijoux en pierre, bronze, or et verre sont exposés ici. Mais le clou du spectacle, bien sûr, ce sont les célèbres boucles d'oreilles à double tête (lingling-o). Ce sont des ornements d'oreille uniques, représentant souvent des créatures à deux têtes. Pensez simplement à ce que ces symboles signifiaient pour les peuples anciens !</li>
    <li>Outils et ustensiles : Vous verrez ce que le peuple Sa Huynh utilisait quotidiennement : des haches aux faucilles, des pots à la céramique exquise.</li>
    <li>Immersion dans l'histoire : Le musée fournit des explications archéologiques détaillées, des photographies des sites de fouilles et même des vidéos documentaires qui vous aideront à visualiser la vie et les rituels de cette civilisation énigmatique.</li>
</ul>

<h6>Détails importants pour votre aventure :</h6>
<ul>
    <li>Adresse : 149 Trần Phú, Phường Minh An, Hội An, Quảng Nam, Vietnam. Il est situé en plein cœur de la vieille ville.</li>
    <li>Heures d'ouverture : Généralement de 08h00 à 20h00 tous les jours. MAIS ! Gardez à l'esprit : le 10 de chaque mois, le musée est fermé pour entretien. Planifiez votre visite à l'avance !</li>
    <li>Entrée : La visite du musée nécessite généralement un seul billet d'entrée pour la vieille ville de Hoi An. C'est pratique car cela donne également accès à d'autres attractions.</li>
    <li>Le bâtiment lui-même : Le musée est installé dans un magnifique bâtiment traditionnel avec des murs jaunes caractéristiques, des toits de tuiles rouges et des éléments en bois, créant une atmosphère parfaite pour vous plonger dans l'Antiquité.</li>
</ul>
<p>
    Ne manquez pas l'occasion de toucher aux origines mêmes de Hoi An et de comprendre ce qui a jeté les bases de sa grandeur ! Le Musée Culturel Sa Huynh n'est pas seulement de l'histoire ; c'est un prologue à votre aventure à Hoi An !
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo tàng Văn hóa Sa Huỳnh',
      description:
        'Bảo tàng kể câu chuyện về những người đầu tiên định cư ở khu vực này cách đây 2000 năm.',
      fullDescription: `
<p>
    Hãy tưởng tượng: bạn đang đi dạo trên những con phố cổ của Hội An, hít thở hương vị của các loại gia vị và cảm nhận hơi thở của nhiều thế kỷ. Điều gì sẽ xảy ra nếu tôi nói với bạn rằng lịch sử của thành phố này bắt đầu từ hàng ngàn năm trước khi tất cả những ngôi nhà đẹp và cầu Nhật Bản này xuất hiện? Rất lâu trước khi các thương nhân từ khắp nơi trên thế giới đến đây, cuộc sống đã sôi động rồi!
</p>
<p>
    Bạn muốn đi sâu vào trung tâm của Việt Nam tiền sử? Vậy thì con đường của bạn dẫn đến Bảo tàng Văn hóa Sa Huỳnh. Đây không chỉ là một cuộc triển lãm khác – đó là một cỗ máy thời gian sẽ đưa bạn trở lại 3.000 năm, thẳng đến thời đại đồ sắt!
</p>

<h6>Sa Huỳnh là gì vậy?</h6>
<p>
    Văn hóa Sa Huỳnh (khoảng 1000 TCN – 200 CN) không chỉ là một bộ sưu tập các phát hiện khảo cổ học nhàm chán. Đó là cả một nền văn minh mà, theo các học giả, là tổ tiên của người Chăm – những người sáng lập vương quốc Champa hùng mạnh!
</p>
<p>
    Người Sa Huỳnh là những bậc thầy thực sự trong nghề của họ:
</p>
<ul>
    <li>Bí ẩn mai táng: Họ hỏa táng người trưởng thành và chôn tro cốt trong những chiếc bình gốm lớn, có nắp đậy. Và vâng, cùng với tro cốt, họ đặt những kho báu – từ công cụ đến đồ trang sức tinh xảo. Hãy tưởng tượng những chiếc bình này chứa đựng bao nhiêu câu chuyện!</li>
    <li>"Thợ rèn" cổ đại: Những người này đã thành thạo luyện kim, tạo ra các công cụ bằng sắt và đồng thanh trang nhã: rìu, kiếm, đầu giáo, dao và liềm. Đây không phải là những công cụ tầm thường!</li>
    <li>Thương nhân toàn cầu: Quên "Con đường tơ lụa" đi – Sa Huỳnh có "Tuyến đường thương mại Sa Huỳnh-Kalanay" của riêng mình! Họ đã giao dịch với đúng nghĩa đen là cả thế giới – từ Trung Quốc và Ấn Độ đến Philippines và thậm chí cả Địa Trung Hải! Các đồng tiền Trung Quốc và những món đồ tò mò khác được tìm thấy ở đây chứng minh rằng Hội An là một trung tâm thương mại quốc tế hàng ngàn năm trước khi nó trở thành xu hướng chủ đạo.</li>
</ul>

<h6>Những gì đang chờ đợi bạn bên trong bảo tàng:</h6>
<img src="27.jpg" alt="Bảo tàng Văn hóa Sa Huỳnh"/>
<p>
    Bảo tàng Văn hóa Sa Huỳnh không phải là một kho lưu trữ bụi bặm, mà là một kho báu thực sự! Nơi đây lưu giữ khoảng 1000 hiện vật độc đáo được tìm thấy ngay tại Hội An và trên quần đảo Chăm gần đó. Mỗi hiện vật là một mảnh đời cổ đại sẽ kể cho bạn nghe câu chuyện của nó.
</p>

<ul>
    <li>Bình, bình và nhiều bình hơn nữa: Tất nhiên, bạn sẽ thấy một bộ sưu tập các bình mai táng đó – từ nhỏ đến lớn, với nhiều hình dạng và kích cỡ khác nhau. Hãy thử tưởng tượng ai có thể đã được chôn cất trong mỗi chiếc bình đó!</li>
    <li>Sự rực rỡ của đồ trang sức cổ đại: Hãy sẵn sàng để chiêm ngưỡng! Những món trang sức đáng kinh ngạc được làm từ đá, đồng, vàng và thủy tinh được trưng bày ở đây. Nhưng điểm nhấn của chương trình, tất nhiên, là đôi khuyên tai hai đầu nổi tiếng (lingling-o). Đây là những vật trang sức tai độc đáo, thường mô tả những sinh vật hai đầu. Chỉ cần nghĩ xem những biểu tượng này có ý nghĩa gì đối với người cổ đại!</li>
    <li>Công cụ và đồ dùng: Bạn sẽ thấy những gì người Sa Huỳnh sử dụng hàng ngày: từ rìu đến liềm, từ nồi đến đồ gốm tinh xảo.</li>
    <li>Đắm mình vào lịch sử: Bảo tàng cung cấp các giải thích khảo cổ chi tiết, hình ảnh từ các địa điểm khai quật và thậm chí cả video tài liệu sẽ giúp bạn hình dung cuộc sống và nghi lễ của nền văn minh bí ẩn này.</li>
</ul>

<h6>Chi tiết quan trọng cho cuộc phiêu lưu của bạn:</h6>
<ul>
    <li>Địa chỉ: 149 Trần Phú, Phường Minh An, Hội An, Quảng Nam, Việt Nam. Nằm ngay trung tâm Phố cổ.</li>
    <li>Giờ mở cửa: Thường từ 08:00 đến 20:00 hàng ngày. NHƯNG! Xin lưu ý: vào ngày 10 hàng tháng, bảo tàng đóng cửa để bảo trì. Hãy lên kế hoạch chuyến thăm của bạn trước!</li>
    <li>Vé vào cửa: Việc tham quan bảo tàng thường yêu cầu một vé vào cửa chung vào Phố cổ Hội An. Điều này tiện lợi vì nó cũng cấp quyền truy cập vào các điểm tham quan khác.</li>
    <li>Bản thân tòa nhà: Bảo tàng được đặt trong một tòa nhà truyền thống tuyệt đẹp với những bức tường vàng đặc trưng, mái ngói đỏ và các yếu tố gỗ, tạo ra một bầu không khí hoàn hảo để đắm mình vào thời cổ đại.</li>
</ul>
<p>
    Đừng bỏ lỡ cơ hội để chạm vào những nguồn gốc của Hội An và hiểu được điều gì đã đặt nền móng cho sự vĩ đại của nó! Bảo tàng Văn hóa Sa Huỳnh không chỉ là lịch sử; đó là lời mở đầu cho cuộc phiêu lưu của bạn ở Hội An!
</p>
    `,
      internalImageNames: ['27.jpg'],
    },

    slug: {
      en: 'sa-huynh-cultural-museum',
      ru: 'muzey-kultury-sa-huynh',
      es: 'museo-cultural-sa-huynh',
      fr: 'musee-culturel-sa-huynh',
      vn: 'bao-tang-van-hoa-sa-huynh',
    },
  },
  // Duc An House
  {
    id: 'duc-an-house',
    coordinates: [15.877072142790434, 108.32731599830328],
    category: ['museum'], // Строго "museum"
    imageUrl: '7.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Duc An House',
      description:
        "This house holds significant pages of Vietnam's political history.",
      fullDescription: `
<p>
    If you're looking for a place where Hoi An's history comes alive, your path leads to Duc An House. This mansion is not just one of the ancient buildings; it's a living testament to the city's rich past, its commercial spirit, and even its heroic struggle for independence.
</p>
<p>
    Built in the mid-19th century (meaning it's over 200 years old!), Duc An House is still owned and managed by the sixth generation of the Bui family. Imagine, the same family preserving their roots and traditions within these walls for so many years! Originally, this house was a well-known trading center specializing in traditional Vietnamese medicine, selling medicinal herbs and spices. The Bui family were true experts in this field, passing down their knowledge from generation to generation.
</p>

<h6>From Herb Shop to Revolutionary Center: Secrets of Duc An House</h6>
<p>
    But the history of Duc An House goes much deeper than just trade and medicine. This house holds significant pages of Vietnam's political history. During the struggle for independence, it served as an underground branch of the revolutionary movement! Mr. Bui Kien Thanh, an ancestor of the current owners and a renowned intellectual, used this house as a refuge and a place for secret meetings of patriots. Many important documents and plans related to the revolution were discussed and stored right here. This is a place where history was literally made!
</p>
<p>
    Duc An House is a classic example of Hoi An's unique architectural style, demonstrating a fusion of cultures:
</p>
<img src="30.jpg" alt="Duc An House"/>
<ul>
    <li>The house is built in the traditional "tube house" style: a narrow facade, but a long, deep interior space.</li>
    <li>Durable and long-lasting ironwood was used, thanks to which the house has been preserved for centuries.</li>
    <li>The space is divided into zones: a shop at the entrance (where herbs were once sold, and now perhaps souvenirs), living quarters, ancestral worship areas, and an inner courtyard that provides natural light and ventilation, as well as serving to collect rainwater.</li>
    <li>Pay attention to the exquisite wood carvings that adorn the columns, beams, and furniture, reflecting both Vietnamese and Chinese influences.</li>
    <li>Inside, old wooden cabinets, tables, chairs, as well as books, documents, and other artifacts related to the family's history have been preserved.</li>
</ul>

<h6>Living History and National Heritage</h6>
<p>
    Duc An House is a true "living museum," allowing you to experience the atmosphere of past centuries and understand how Hoi An's merchants lived and worked. Its role in the revolutionary movement gives it special significance as a place where Vietnam's history was forged. Visiting this house is a unique opportunity not only to see ancient architecture but also to touch the rich history of a family that is inextricably linked with the history of all Hoi An.
</p>
    `,
      internalImageNames: ['30.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Дом Дык Ан',
      description:
        'Этот дом хранит значимые страницы политической истории Вьетнама.',
      fullDescription: `
<p>
    Если вы ищете место, где оживает история Хойана, ваш путь ведет к Дому Дык Ан. Этот особняк — не просто одно из древних строений; это живое свидетельство богатого прошлого города, его коммерческого духа и даже героической борьбы за независимость.
</p>
<p>
    Построенный в середине XIX века (то есть ему более 200 лет!), Дом Дык Ан до сих пор принадлежит и управляется шестым поколением семьи Буй. Представьте, одна и та же семья на протяжении стольких лет сохраняет свои корни и традиции в этих стенах! Изначально этот дом был известным торговым центром, специализирующимся на традиционной вьетнамской медицине, продавая лекарственные травы и специи. Семья Буй были настоящими экспертами в этой области, передавая свои знания из поколения в поколение.
</p>

<h6>От лавки с травами до революционного центра: Секреты Дома Дык Ан</h6>
<p>
    Но история Дома Дык Ан уходит гораздо глубже, чем просто торговля и медицина. Этот дом хранит значимые страницы политической истории Вьетнама. Во время борьбы за независимость он служил подпольным отделением революционного движения! Господин Буй Киен Тхань, предок нынешних владельцев и известный интеллектуал, использовал этот дом как убежище и место для тайных встреч патриотов. Многие важные документы и планы, касающиеся революции, обсуждались и хранились прямо здесь. Это место, где буквально творилась история!
</p>
<p>
    Дом Дык Ан является классическим примером уникального архитектурного стиля Хойана, демонстрируя слияние культур:
</p>
<img src="30.jpg" alt="Дом Дык Ан"/>
<ul>
    <li>Дом построен в традиционном стиле "трубчатого дома": узкий фасад, но длинное, глубокое внутреннее пространство.</li>
    <li>Использовалось прочное и долговечное железное дерево, благодаря чему дом сохранился на протяжении веков.</li>
    <li>Пространство разделено на зоны: магазин у входа (где когда-то продавали травы, а теперь, возможно, сувениры), жилые помещения, зоны поклонения предкам и внутренний двор, который обеспечивает естественное освещение и вентиляцию, а также служит для сбора дождевой воды.</li>
    <li>Обратите внимание на изысканную резьбу по дереву, украшающую колонны, балки и мебель, отражающую как вьетнамские, так и китайские влияния.</li>
    <li>Внутри сохранились старинные деревянные шкафы, столы, стулья, а также книги, документы и другие артефакты, связанные с историей семьи.</li>
</ul>

<h6>Живая история и национальное наследие</h6>
<p>
    Дом Дык Ан — это настоящий "живой музей", позволяющий ощутить атмосферу прошлых веков и понять, как жили и работали купцы Хойана. Его роль в революционном движении придает ему особое значение как месту, где ковалась история Вьетнама. Посещение этого дома — уникальная возможность не только увидеть древнюю архитектуру, но и прикоснуться к богатой истории семьи, которая неразрывно связана с историей всего Хойана.
</p>
    `,
      internalImageNames: ['30.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Casa Duc An',
      description:
        'Esta casa contiene páginas significativas de la historia política de Vietnam.',
      fullDescription: `
<p>
    Si buscas un lugar donde la historia de Hoi An cobra vida, tu camino te lleva a la Casa Duc An. Esta mansión no es solo uno de los edificios antiguos; es un testimonio viviente del rico pasado de la ciudad, su espíritu comercial e incluso su heroica lucha por la independencia.
</p>
<p>
    Construida a mediados del siglo XIX (¡lo que significa que tiene más de 200 años!), la Casa Duc An todavía es propiedad y está gestionada por la sexta generación de la familia Bui. ¡Imagina, la misma familia preservando sus raíces y tradiciones dentro de estas paredes durante tantos años! Originalmente, esta casa era un conocido centro comercial especializado en medicina tradicional vietnamita, vendiendo hierbas medicinales y especias. La familia Bui eran verdaderos expertos en este campo, transmitiendo sus conocimientos de generación en generación.
</p>

<h6>De herbolario a centro revolucionario: Secretos de la Casa Duc An</h6>
<p>
    Pero la historia de la Casa Duc An va mucho más allá del comercio y la medicina. Esta casa contiene páginas significativas de la historia política de Vietnam. ¡Durante la lucha por la independencia, sirvió como una rama clandestina del movimiento revolucionario! El Sr. Bui Kien Thanh, un antepasado de los actuales propietarios y un intelectual de renombre, utilizó esta casa como refugio y lugar para reuniones secretas de patriotas. Muchos documentos y planes importantes relacionados con la revolución se discutieron y almacenaron aquí mismo. ¡Este es un lugar donde la historia se hizo literalmente!
</p>
<p>
    La Casa Duc An es un ejemplo clásico del estilo arquitectónico único de Hoi An, demostrando una fusión de culturas:
</p>
<img src="30.jpg" alt="Casa Duc An"/>
<ul>
    <li>La casa está construida en el estilo tradicional de "casa tubo": una fachada estrecha, pero un espacio interior largo y profundo.</li>
    <li>Se utilizó madera de hierro duradera y de larga duración, gracias a lo cual la casa se ha conservado durante siglos.</li>
    <li>El espacio se divide en zonas: una tienda en la entrada (donde antes se vendían hierbas, y ahora quizás recuerdos), salas de estar, áreas de culto ancestral y un patio interior que proporciona luz natural y ventilación, además de servir para recoger agua de lluvia.</li>
    <li>Presta atención a las exquisitas tallas de madera que adornan las columnas, vigas y muebles, que reflejan influencias tanto vietnamitas como chinas.</li>
    <li>En el interior, se han conservado antiguos armarios de madera, mesas, sillas, así como libros, documentos y otros artefactos relacionados con la historia de la familia.</li>
</ul>

<h6>Historia Viva y Patrimonio Nacional</h6>
<p>
    La Casa Duc An es un verdadero "museo viviente", que te permite experimentar la atmósfera de siglos pasados y comprender cómo vivían y trabajaban los comerciantes de Hoi An. Su papel en el movimiento revolucionario le otorga un significado especial como un lugar donde se forjó la historia de Vietnam. Visitar esta casa es una oportunidad única no solo para ver arquitectura antigua, sino también para tocar la rica historia de una familia que está inextricablemente ligada a la historia de todo Hoi An.
</p>
    `,
      internalImageNames: ['30.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Maison Duc An',
      description:
        "Cette maison renferme des pages importantes de l'histoire politique du Vietnam.",
      fullDescription: `
<p>
    Si vous cherchez un endroit où l'histoire de Hoi An prend vie, votre chemin mène à la Maison Duc An. Cette demeure n'est pas seulement l'un des bâtiments anciens ; c'est un témoignage vivant du riche passé de la ville, de son esprit commercial, et même de sa lutte héroïque pour l'indépendance.
</p>
<p>
    Construite au milieu du XIXe siècle (ce qui signifie qu'elle a plus de 200 ans !), la Maison Duc An est toujours possédée et gérée par la sixième génération de la famille Bui. Imaginez, la même famille préservant ses racines et ses traditions entre ces murs pendant tant d'années ! À l'origine, cette maison était un centre commercial bien connu, spécialisé dans la médecine traditionnelle vietnamienne, vendant des herbes médicinales et des épices. La famille Bui était de véritables experts dans ce domaine, transmettant leurs connaissances de génération en génération.
</p>

<h6>Du magasin d'herbes médicinales au centre révolutionnaire : les secrets de la Maison Duc An</h6>
<p>
    Mais l'histoire de la Maison Duc An va bien plus loin que le simple commerce et la médecine. Cette maison renferme des pages importantes de l'histoire politique du Vietnam. Pendant la lutte pour l'indépendance, elle a servi de branche clandestine du mouvement révolutionnaire ! M. Bui Kien Thanh, un ancêtre des propriétaires actuels et un intellectuel renommé, a utilisé cette maison comme refuge et lieu de réunions secrètes de patriotes. De nombreux documents et plans importants liés à la révolution y ont été discutés et stockés. C'est un lieu où l'histoire s'est littéralement faite !
</p>
<p>
    La Maison Duc An est un exemple classique du style architectural unique de Hoi An, démontrant une fusion de cultures :
</p>
<img src="30.jpg" alt="Maison Duc An"/>
<ul>
    <li>La maison est construite dans le style traditionnel de la "maison tube" : une façade étroite, mais un espace intérieur long et profond.</li>
    <li>Du bois de fer durable et résistant a été utilisé, grâce auquel la maison a été préservée pendant des siècles.</li>
    <li>L'espace est divisé en zones : une boutique à l'entrée (où des herbes étaient autrefois vendues, et maintenant peut-être des souvenirs), des quartiers d'habitation, des zones de culte ancestral et une cour intérieure qui fournit une lumière naturelle et une ventilation, ainsi que servant à recueillir l'eau de pluie.</li>
    <li>Faites attention aux exquises sculptures sur bois qui ornent les colonnes, les poutres et les meubles, reflétant les influences vietnamiennes et chinoises.</li>
    <li>À l'intérieur, de vieux placards en bois, des tables, des chaises, ainsi que des livres, des documents et d'autres artefacts liés à l'histoire de la famille ont été conservés.</li>
</ul>

<h6>Histoire vivante et patrimoine national</h6>
<p>
    La Maison Duc An est un véritable "musée vivant", vous permettant de découvrir l'atmosphère des siècles passés et de comprendre comment les marchands de Hoi An vivaient et travaillaient. Son rôle dans le mouvement révolutionnaire lui confère une signification particulière en tant que lieu où l'histoire du Vietnam a été forgée. Visiter cette maison est une occasion unique non seulement de voir l'architecture ancienne, mais aussi de toucher à la riche histoire d'une famille inextricablement liée à l'histoire de tout Hoi An.
</p>
    `,
      internalImageNames: ['30.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Nhà Đức An',
      description:
        'Ngôi nhà này lưu giữ những trang sử quan trọng của lịch sử chính trị Việt Nam.',
      fullDescription: `
<p>
    Nếu bạn đang tìm kiếm một nơi mà lịch sử Hội An sống dậy, con đường của bạn dẫn đến Nhà Đức An. Ngôi nhà này không chỉ là một trong những công trình cổ kính; đó là một minh chứng sống động cho quá khứ phong phú của thành phố, tinh thần thương mại của nó, và thậm chí là cuộc đấu tranh anh dũng vì độc lập.
</p>
<p>
    Được xây dựng vào giữa thế kỷ 19 (nghĩa là đã hơn 200 tuổi!), Nhà Đức An vẫn thuộc sở hữu và được quản lý bởi thế hệ thứ sáu của gia đình Bùi. Hãy tưởng tượng, cùng một gia đình gìn giữ cội rễ và truyền thống của họ trong những bức tường này suốt bao năm qua! Ban đầu, ngôi nhà này là một trung tâm thương mại nổi tiếng chuyên về y học cổ truyền Việt Nam, bán các loại thảo mộc và gia vị thuốc. Gia đình Bùi là những chuyên gia thực sự trong lĩnh vực này, truyền lại kiến thức của họ từ thế hệ này sang thế hệ khác.
</p>

<h6>Từ tiệm thuốc bắc đến trung tâm cách mạng: Bí mật của Nhà Đức An</h6>
<p>
    Nhưng lịch sử của Nhà Đức An còn sâu sắc hơn nhiều so với thương mại và y học. Ngôi nhà này lưu giữ những trang sử quan trọng của lịch sử chính trị Việt Nam. Trong cuộc đấu tranh giành độc lập, nó từng là một chi nhánh ngầm của phong trào cách mạng! Ông Bùi Kiên Thanh, một tổ tiên của những người chủ hiện tại và là một trí thức nổi tiếng, đã sử dụng ngôi nhà này làm nơi trú ẩn và nơi họp bí mật của những người yêu nước. Nhiều tài liệu và kế hoạch quan trọng liên quan đến cách mạng đã được thảo luận và lưu trữ ngay tại đây. Đây là một nơi mà lịch sử đã thực sự được tạo ra!
</p>
<p>
    Nhà Đức An là một ví dụ điển hình về phong cách kiến trúc độc đáo của Hội An, thể hiện sự pha trộn văn hóa:
</p>
<img src="30.jpg" alt="Nhà Đức An"/>
<ul>
    <li>Ngôi nhà được xây dựng theo kiểu "nhà ống" truyền thống: mặt tiền hẹp, nhưng không gian nội thất dài và sâu.</li>
    <li>Gỗ lim bền và lâu năm đã được sử dụng, nhờ đó ngôi nhà đã được bảo tồn qua nhiều thế kỷ.</li>
    <li>Không gian được chia thành các khu vực: một cửa hàng ở lối vào (nơi từng bán thảo mộc, và bây giờ có lẽ là đồ lưu niệm), khu sinh hoạt, khu thờ cúng tổ tiên, và một sân trong cung cấp ánh sáng tự nhiên và thông gió, cũng như dùng để thu thập nước mưa.</li>
    <li>Hãy chú ý đến những chạm khắc gỗ tinh xảo trang trí các cột, xà và đồ nội thất, phản ánh cả ảnh hưởng của Việt Nam và Trung Quốc.</li>
    <li>Bên trong, các tủ gỗ cổ, bàn, ghế, cũng như sách, tài liệu và các hiện vật khác liên quan đến lịch sử gia đình đã được bảo tồn.</li>
</ul>

<h6>Lịch sử sống động và Di sản Quốc gia</h6>
<p>
    Nhà Đức An là một "bảo tàng sống" thực sự, cho phép bạn trải nghiệm bầu không khí của các thế kỷ đã qua và hiểu cách các thương nhân Hội An đã sống và làm việc. Vai trò của nó trong phong trào cách mạng mang lại cho nó ý nghĩa đặc biệt như một nơi mà lịch sử Việt Nam đã được định hình. Tham quan ngôi nhà này là một cơ hội duy nhất không chỉ để xem kiến trúc cổ kính mà còn để chạm vào lịch sử phong phú của một gia đình gắn bó mật thiết với lịch sử của toàn Hội An.
</p>
    `,
      internalImageNames: ['30.jpg'],
    },

    slug: {
      en: 'duc-an-house',
      ru: 'dom-duk-an',
      es: 'casa-duc-an',
      fr: 'maison-duc-an',
      vn: 'nha-co-duc-an',
    },
  },
  // Kazimierz Kwiatkowski bust
  {
    id: 'kazimierz-kwiatkowski-monument',
    coordinates: [15.877200258792449, 108.32779555779305],
    category: ['museum'], // Строго "museum"
    imageUrl: '8.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Kazimierz Kwiatkowski Monument',
      description:
        'Knight of cultural heritage. A Polish Superhero who saved Hoi An from concrete and boredom!',
      fullDescription: `
<p>
    Have you ever wondered why old Hoi An is still so authentic, and its ancient houses haven't turned into faceless new buildings? The answer is simple: it's all thanks to one person – Kazimierz Kwiatkowski (1944-1997), a Polish architect and restorer, affectionately known in Vietnam as Kazik the Architect. He dedicated his life to saving Vietnam's cultural heritage, and his motto was: "I don't restore stones – I restore people's memories."
</p>
<p>
    Kazik came to Vietnam as a volunteer in 1980 and worked here for 17 years. 16 of those he dedicated to My Son sanctuary, and from 1981, he became closely involved with ancient Hoi An. At that time, after 40 years of war, the monuments were severely damaged, and Vietnam desperately needed help. Kazik led the first Polish-Vietnamese mission in Asia to restore monuments. He was the only expert who undertook this colossal task.
</p>

<h6>"They Call Me Crazy..." — Kazik's Rebellious Spirit</h6>
<img src="31.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski was not one to compromise. When it came to preserving authenticity, he became a force of nature!
</p>
<ul>
    <li>War with cement: Vietnamese officials, wanting to "quickly restore" old houses, brought in cement. Kazik insisted on authentic methods: a mixture of lime, sugarcane, and clay, as it was built in the 18th century. They say he once even locked a batch of cement in a shed and set a few bags on fire to show his determination! "Do you want the whole city to crumble like this in 10 years?" he would shout at meetings, shaking a rotten beam.</li>
    <li>Battle with developers: In the 90s, when the tourist boom began, businessmen were eager to build hotels in the old quarter. Kazik personally blocked construction sites, and, according to his student, even lay down in front of bulldozers! He was willing to do anything to protect Hoi An.</li>
    <li>"Revolt" against UNESCO: In 1993, UNESCO experts proposed prohibiting residents from living in historical houses, turning the city into a "museum exhibit." Kazik invited them to dinner in a 300-year-old house, fed them soup, and declared: "Either you let people live, or Hoi An will become a dead museum, like your Venice!" UNESCO surrendered.</li>
</ul>

<h6>Incredible Stories and "Kazik's Curse"</h6>
<p>
    Many legends circulate around Kazik, and even if some of them are embellished, they only emphasize his uniqueness:
</p>
<ul>
    <li>War with neon signs: When the first shop hung a neon sign on an ancient facade, Kazik would secretly tear down the signs at night, and once personally painted over a neon sign with black paint in front of witnesses! His famous phrase, still quoted by guides today: "If I see another 'I ♥ Hoi An' shop in the old quarter – I'll shoot it with a slingshot!"</li>
    <li>Cursed bridge: When a concrete foundation was secretly poured under the Japanese Bridge, Kazik personally smashed it with a sledgehammer at 5 AM for everyone to hear. He found an old master who remembered how the bridge was built 60 years ago and made the workers carry stones by hand. The bridge still stands!</li>
    <li>"Chicken rebellion": In 1996, UNESCO wanted to ban residents from keeping chickens in the old quarter. Kazik, in response, personally distributed chicks to 50 families and taught them how to build "historically accurate" chicken coops. "If you remove the chickens – the spirit of Hoi An will disappear," he said, and UNESCO again yielded.</li>
    <li>Last gift: Before his death, he "discovered" an ancient stele (actually a fake) under an 18th-century fish market that was being demolished. The market was immediately listed as a protected site. The deception was uncovered 10 years later, but it was too late – the building had already been restored.</li>
</ul>

<h6>A Legacy That Lives On</h6>
<img src="32.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski tragically died of a heart attack in Hue in 1997, while working on the restoration of the royal palace. He was buried in Poland, but a monument to him has been erected in Hoi An in a park named after him – a rare honor for a foreigner in Vietnam.
</p>
<p>
    Thanks to his tireless efforts, Hoi An and My Son were recognized as UNESCO World Heritage sites. He taught the Vietnamese to restore while preserving authenticity, and his students continue his work to this day. Even if some stories about him have become legends, they only emphasize how much he inspired people to protect heritage. Kazik is not just a historian; he is the spirit of Hoi An, living in every preserved house, in every carved beam, and in every story about the "crazy Pole" who saved the city.
</p>
    `,
      internalImageNames: ['32.jpg', '31.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Памятник Казимежу Квятковскому',
      description:
        'Рыцарь культурного наследия. Польский Супергерой, спасший Хойан от бетона и скуки!',
      fullDescription: `
<p>
    Вы когда-нибудь задумывались, почему старый Хойан до сих пор такой аутентичный, а его древние дома не превратились в безликие новострои? Ответ прост: всё благодаря одному человеку – Казимежу Квятковскому (1944-1997), польскому архитектору и реставратору, которого во Вьетнаме ласково называли Казик-Архитектор. Он посвятил свою жизнь спасению культурного наследия Вьетнама, и его девизом было: «Я не реставрирую камни — я восстанавливаю память людей».
</p>
<p>
    Казик приехал во Вьетнам добровольцем в 1980 году и проработал здесь 17 лет. 16 из них он посвятил святилищу Мишон, а с 1981 года вплотную занялся древним Хойаном. В то время, после 40 лет войны, памятники были сильно разрушены, и Вьетнам отчаянно нуждался в помощи. Казик возглавил первую польско-вьетнамскую миссию в Азии по реставрации памятников. Он был единственным экспертом, который взялся за эту колоссальную задачу.
</p>

<h6>«Меня называют сумасшедшим…» — Бунтарский дух Казика</h6>
<img src="31.jpg" alt="Казимеж Квятковский"/>
<p>
    Казимеж Квятковский не был человеком компромиссов. Когда дело доходило до сохранения аутентичности, он становился стихией!
</p>
<ul>
    <li>Война с цементом: Вьетнамские чиновники, желая «быстро отреставрировать» старые дома, завозили цемент. Казик настаивал на аутентичных методах: смесь извести, сахарного тростника и глины, как строили в XVIII веке. Рассказывают, что однажды он даже запер партию цемента в сарае и поджёг несколько мешков, чтобы показать свою решимость! «Вы хотите, чтобы весь город рассыпался так через 10 лет?!» — кричал он на совещаниях, тряся гнилой балкой.</li>
    <li>Битва с застройщиками: В 90-е годы, когда начался туристический бум, бизнесмены рвались строить отели в старом квартале. Казик лично блокировал стройки, а, по словам его ученика, даже ложился под бульдозеры! Он был готов на всё, чтобы защитить Хойан.</li>
    <li>«Бунт» против ЮНЕСКО: В 1993 году эксперты ЮНЕСКО предложили запретить жителям жить в исторических домах, превратив город в «музейный экспонат». Казик пригласил их на ужин в 300-летний дом, накормил супом и заявил: «Либо вы дадите людям жить, либо Хойан станет мертвым музеем, как ваша Венеция!» ЮНЕСКО сдалась.</li>
</ul>

<h6>Невероятные истории и «Проклятие Казика»</h6>
<p>
    Вокруг Казика ходит множество легенд, и даже если некоторые из них приукрашены, они лишь подчеркивают его уникальность:
</p>
<ul>
    <li>Война с неоновыми вывесками: Когда первый магазин повесил неоновую вывеску на древний фасад, Казик ночами тайком срывал вывески, а однажды лично закрасил неоновую вывеску черной краской при свидетелях! Его знаменитая фраза, которую цитируют гиды до сих пор: «Если я увижу еще один магазин «I ♥ Hoi An» в старом квартале — я застрелю его из рогатки!»</li>
    <li>Проклятый мост: Когда под Японский мост тайно залили бетонный фундамент, Казик в 5 утра лично разбил его кувалдой на глазах у всех. Он нашел старого мастера, который помнил, как строили мост 60 лет назад, и заставил рабочих носить камни вручную. Мост стоит до сих пор!</li>
    <li>«Куриный бунт»: В 1996 году ЮНЕСКО хотела запретить жителям держать кур в старом квартале. Казик в ответ лично раздал цыплят 50 семьям и научил их строить «исторически правильные» курятники. «Если уберете кур — дух Хойана исчезнет», — сказал он, и ЮНЕСКО снова уступила.</li>
    <li>Последний подарок: Перед смертью он «обнаружил» древнюю стелу (на самом деле подделку) под сносившимся рыбным рынком XVIII века. Рынок тут же был включен в список охраняемых объектов. Обман раскрыли через 10 лет, но было уже поздно — здание уже было отреставрировано.</li>
</ul>

<h6>Наследие, которое живет</h6>
<img src="32.jpg" alt="Казимеж Квятковский"/>
<p>
    Казимеж Квятковский трагически скончался от сердечного приступа в Хюэ в 1997 году, работая над реставрацией императорского дворца. Он был похоронен в Польше, но в Хойане ему установлен памятник в парке, названном в его честь — редкая честь для иностранца во Вьетнаме.
</p>
<p>
    Благодаря его неустанным усилиям, Хойан и Мишон были признаны объектами Всемирного наследия ЮНЕСКО. Он научил вьетнамцев реставрировать, сохраняя аутентичность, и его ученики продолжают его дело до сих пор. Даже если некоторые истории о нём стали легендами, они лишь подчеркивают, насколько он вдохновил людей на защиту наследия. Казик — это не просто историк; это дух Хойана, живущий в каждом сохраненном доме, в каждой резной балке и в каждой истории о «сумасшедшем поляке», который спас город.
</p>
    `,
      internalImageNames: ['32.jpg', '31.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Monumento a Kazimierz Kwiatkowski',
      description:
        'Caballero del patrimonio cultural. ¡Un superhéroe polaco que salvó a Hoi An del hormigón y el aburrimiento!',
      fullDescription: `
<p>
    ¿Alguna vez te has preguntado por qué el antiguo Hoi An sigue siendo tan auténtico y sus casas antiguas no se han convertido en edificios nuevos sin rostro? La respuesta es simple: todo gracias a una persona, Kazimierz Kwiatkowski (1944-1997), un arquitecto y restaurador polaco, conocido cariñosamente en Vietnam como Kazik el Arquitecto. Dedicó su vida a salvar el patrimonio cultural de Vietnam, y su lema era: "No restauro piedras, restauro recuerdos de la gente".
</p>
<p>
    Kazik llegó a Vietnam como voluntario en 1980 y trabajó aquí durante 17 años. 16 de ellos los dedicó al santuario de My Son, y desde 1981, se involucró estrechamente con el antiguo Hoi An. En ese momento, después de 40 años de guerra, los monumentos estaban gravemente dañados, y Vietnam necesitaba desesperadamente ayuda. Kazik dirigió la primera misión polaco-vietnamita en Asia para restaurar monumentos. Fue el único experto que emprendió esta tarea colosal.
</p>

<h6>"Me llaman loco..." — El espíritu rebelde de Kazik</h6>
<img src="31.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski no era de los que se comprometían. ¡Cuando se trataba de preservar la autenticidad, se convertía en una fuerza de la naturaleza!
</p>
<ul>
    <li>Guerra con el cemento: Los funcionarios vietnamitas, queriendo "restaurar rápidamente" las casas antiguas, trajeron cemento. Kazik insistió en métodos auténticos: una mezcla de cal, caña de azúcar y arcilla, tal como se construyó en el siglo XVIII. ¡Dicen que una vez incluso encerró un lote de cemento en un cobertizo y quemó algunas bolsas para mostrar su determinación! "¿Quieres que toda la ciudad se desmorone así en 10 años?", gritaba en las reuniones, agitando una viga podrida.</li>
    <li>Batalla con los promotores: En los años 90, cuando comenzó el auge turístico, los empresarios estaban ansiosos por construir hoteles en el barrio antiguo. Kazik bloqueó personalmente los sitios de construcción y, según su alumno, ¡incluso se tumbó delante de las excavadoras! Estaba dispuesto a hacer cualquier cosa para proteger Hoi An.</li>
    <li>"Revuelta" contra la UNESCO: En 1993, los expertos de la UNESCO propusieron prohibir a los residentes vivir en casas históricas, convirtiendo la ciudad en una "exposición de museo". Kazik los invitó a cenar a una casa de 300 años, les dio sopa y declaró: "¡O dejan que la gente viva, o Hoi An se convertirá en un museo muerto, como su Venecia!" La UNESCO se rindió.</li>
</ul>

<h6>Historias increíbles y "La maldición de Kazik"</h6>
<p>
    Muchas leyendas circulan alrededor de Kazik, y aunque algunas de ellas estén adornadas, solo enfatizan su singularidad:
</p>
<ul>
    <li>Guerra con los letreros de neón: Cuando la primera tienda colgó un letrero de neón en una fachada antigua, Kazik secretamente arrancaba los letreros por la noche, ¡y una vez personalmente pintó un letrero de neón con pintura negra frente a testigos! Su famosa frase, todavía citada por los guías hoy: "¡Si veo otra tienda 'I ♥ Hoi An' en el barrio antiguo, la derribaré con una honda!"</li>
    <li>Puente maldito: Cuando se vertió una base de hormigón en secreto debajo del Puente Japonés, Kazik personalmente lo destrozó con un mazo a las 5 AM para que todos lo oyeran. Encontró a un viejo maestro que recordaba cómo se construyó el puente hace 60 años e hizo que los trabajadores llevaran las piedras a mano. ¡El puente sigue en pie!</li>
    <li>"Rebelión del pollo": En 1996, la UNESCO quiso prohibir a los residentes tener gallinas en el barrio antiguo. Kazik, en respuesta, distribuyó personalmente pollitos a 50 familias y les enseñó cómo construir gallineros "históricamente correctos". "Si quitan los pollos, el espíritu de Hoi An desaparecerá", dijo, y la UNESCO volvió a ceder.</li>
    <li>Último regalo: Antes de su muerte, "descubrió" una estela antigua (en realidad, una falsificación) debajo de un mercado de pescado del siglo XVIII que estaba siendo demolido. El mercado fue inmediatamente catalogado como sitio protegido. El engaño fue descubierto 10 años después, pero ya era demasiado tarde: el edificio ya había sido restaurado.</li>
</ul>

<h6>Un legado que perdura</h6>
<img src="32.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski murió trágicamente de un ataque al corazón en Hue en 1997, mientras trabajaba en la restauración del palacio real. Fue enterrado en Polonia, pero se le ha erigido un monumento en Hoi An en un parque que lleva su nombre, un honor poco común para un extranjero en Vietnam.
</p>
<p>
    Gracias a sus incansables esfuerzos, Hoi An y My Son fueron reconocidos como sitios del Patrimonio Mundial de la UNESCO. Enseñó a los vietnamitas a restaurar preservando la autenticidad, y sus alumnos continúan su trabajo hasta el día de hoy. Incluso si algunas historias sobre él se han convertido en leyendas, solo enfatizan cuánto inspiró a la gente a proteger el patrimonio. Kazik no es solo un historiador; es el espíritu de Hoi An, que vive en cada casa conservada, en cada viga tallada y en cada historia sobre el "polaco loco" que salvó la ciudad.
</p>
    `,
      internalImageNames: ['32.jpg', '31.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Monument Kazimierz Kwiatkowski',
      description:
        "Chevalier du patrimoine culturel. Un super-héros polonais qui a sauvé Hoi An du béton et de l'ennui !",
      fullDescription: `
<p>
    Vous êtes-vous déjà demandé pourquoi le vieux Hoi An est toujours aussi authentique, et ses maisons anciennes ne se sont pas transformées en nouveaux bâtiments sans visage ? La réponse est simple : c'est grâce à une seule personne – Kazimierz Kwiatkowski (1944-1997), un architecte et restaurateur polonais, affectueusement connu au Vietnam sous le nom de Kazik l'Architecte. Il a dédié sa vie à sauver le patrimoine culturel du Vietnam, et sa devise était : « Je ne restaure pas des pierres – je restaure la mémoire des gens. »
</p>
<p>
    Kazik est venu au Vietnam en tant que volontaire en 1980 et y a travaillé pendant 17 ans. 16 de ces années, il les a consacrées au sanctuaire de My Son, et à partir de 1981, il s'est étroitement impliqué dans l'ancien Hoi An. À cette époque, après 40 ans de guerre, les monuments étaient gravement endommagés, et le Vietnam avait désespérément besoin d'aide. Kazik a dirigé la première mission polono-vietnamienne en Asie pour restaurer les monuments. Il était le seul expert à entreprendre cette tâche colossale.
</p>

<h6>« Ils m'appellent fou... » — L'esprit rebelle de Kazik</h6>
<img src="31.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski n'était pas du genre à faire des compromis. Quand il s'agissait de préserver l'authenticité, il devenait une force de la nature !
</p>
<ul>
    <li>Guerre avec le ciment : Les fonctionnaires vietnamiens, désireux de « restaurer rapidement » les vieilles maisons, ont fait venir du ciment. Kazik a insisté sur les méthodes authentiques : un mélange de chaux, de canne à sucre et d'argile, tel qu'il a été construit au XVIIIe siècle. On raconte qu'il a même un jour enfermé un lot de ciment dans un hangar et mis le feu à quelques sacs pour montrer sa détermination ! « Voulez-vous que toute la ville s'effondre comme ça dans 10 ans ? » criait-il lors des réunions, en secouant une poutre pourrie.</li>
    <li>Bataille avec les promoteurs : Dans les années 90, lorsque le boom touristique a commencé, les hommes d'affaires étaient impatients de construire des hôtels dans le vieux quartier. Kazik a personnellement bloqué les chantiers, et, selon son élève, s'est même allongé devant les bulldozers ! Il était prêt à tout pour protéger Hoi An.</li>
    <li>« Révolte » contre l'UNESCO : En 1993, les experts de l'UNESCO ont proposé d'interdire aux habitants de vivre dans des maisons historiques, transformant la ville en une « exposition de musée ». Kazik les a invités à dîner dans une maison vieille de 300 ans, leur a servi de la soupe et a déclaré : « Soit vous laissez les gens vivre, soit Hoi An deviendra un musée mort, comme votre Venise ! » L'UNESCO s'est rendue.</li>
</ul>

<h6>Histoires incroyables et « la malédiction de Kazik »</h6>
<p>
    De nombreuses légendes circulent autour de Kazik, et même si certaines d'entre elles sont embellies, elles ne font que souligner son caractère unique :
</p>
<ul>
    <li>Guerre des enseignes au néon : Lorsque le premier magasin a accroché une enseigne au néon sur une façade ancienne, Kazik arrachait secrètement les enseignes la nuit, et a même personnellement peint une enseigne au néon en noir devant des témoins ! Sa phrase célèbre, encore citée par les guides aujourd'hui : « Si je vois un autre magasin 'I ♥ Hoi An' dans le vieux quartier, je lui tirerai dessus avec une fronde ! »</li>
    <li>Pont maudit : Lorsqu'une fondation en béton a été secrètement coulée sous le Pont Japonais, Kazik l'a personnellement brisée avec une masse à 5 heures du matin pour que tout le monde entende. Il a trouvé un vieux maître qui se souvenait comment le pont avait été construit il y a 60 ans et a fait porter les pierres à la main aux ouvriers. Le pont tient toujours !</li>
    <li>« Rébellion des poulets » : En 1996, l'UNESCO a voulu interdire aux habitants d'élever des poulets dans le vieux quartier. Kazik, en réponse, a personnellement distribué des poussins à 50 familles et leur a appris à construire des poulaillers « historiquement exacts ». « Si vous enlevez les poulets, l'esprit de Hoi An disparaîtra », a-t-il dit, et l'UNESCO a de nouveau cédé.</li>
    <li>Dernier cadeau : Avant sa mort, il a « découvert » une ancienne stèle (en fait une contrefaçon) sous un marché aux poissons du XVIIIe siècle qui était en cours de démolition. Le marché a été immédiatement classé comme site protégé. La tromperie a été découverte 10 ans plus tard, mais il était trop tard – le bâtiment avait déjà été restauré.</li>
</ul>

<h6>Un héritage qui perdure</h6>
<img src="32.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski est décédé tragiquement d'une crise cardiaque à Hue en 1997, alors qu'il travaillait à la restauration du palais royal. Il a été enterré en Pologne, mais un monument lui a été érigé à Hoi An dans un parc qui porte son nom – un honneur rare pour un étranger au Vietnam.
</p>
<p>
    Grâce à ses efforts inlassables, Hoi An et My Son ont été reconnus comme sites du patrimoine mondial de l'UNESCO. Il a enseigné aux Vietnamiens à restaurer tout en préservant l'authenticité, et ses étudiants continuent son travail à ce jour. Même si certaines histoires à son sujet sont devenues des légendes, elles ne font que souligner à quel point il a inspiré les gens à protéger le patrimoine. Kazik n'est pas seulement un historien ; il est l'esprit de Hoi An, vivant dans chaque maison préservée, dans chaque poutre sculptée, et dans chaque histoire sur le « Polonais fou » qui a sauvé la ville.
</p>
    `,
      internalImageNames: ['32.jpg', '31.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Tượng đài Kazimierz Kwiatkowski',
      description:
        'Hiệp sĩ di sản văn hóa. Một siêu anh hùng Ba Lan đã cứu Hội An khỏi bê tông và sự nhàm chán!',
      fullDescription: `
<p>
    Bạn có bao giờ tự hỏi tại sao Hội An cổ kính vẫn giữ được nét chân thực, và những ngôi nhà cổ của nó không biến thành những tòa nhà mới vô hồn? Câu trả lời rất đơn giản: tất cả là nhờ một người – Kazimierz Kwiatkowski (1944-1997), một kiến trúc sư và nhà phục chế người Ba Lan, được người Việt Nam trìu mến gọi là kiến trúc sư Kazik. Ông đã cống hiến cả cuộc đời mình để cứu lấy di sản văn hóa Việt Nam, và phương châm của ông là: "Tôi không phục chế đá – tôi phục chế ký ức của con người."
</p>
<p>
    Kazik đến Việt Nam với tư cách tình nguyện viên vào năm 1980 và làm việc ở đây trong 17 năm. 16 năm trong số đó ông dành cho thánh địa Mỹ Sơn, và từ năm 1981, ông bắt đầu gắn bó chặt chẽ với Hội An cổ kính. Vào thời điểm đó, sau 40 năm chiến tranh, các di tích bị hư hại nặng nề, và Việt Nam đang rất cần sự giúp đỡ. Kazik đã dẫn đầu phái đoàn Ba Lan-Việt Nam đầu tiên ở châu Á để phục chế di tích. Ông là chuyên gia duy nhất đã đảm nhận nhiệm vụ khổng lồ này.
</p>

<h6>"Họ gọi tôi là kẻ điên..." — Tinh thần nổi loạn của Kazik</h6>
<img src="31.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski không phải là người dễ thỏa hiệp. Khi nói đến việc bảo tồn tính chân thực, ông trở thành một thế lực của tự nhiên!
</p>
<ul>
    <li>Cuộc chiến với xi măng: Các quan chức Việt Nam, muốn "phục chế nhanh chóng" những ngôi nhà cổ, đã mang xi măng đến. Kazik nhấn mạnh vào các phương pháp chân thực: hỗn hợp vôi, mía và đất sét, như cách nó được xây dựng vào thế kỷ 18. Người ta nói rằng ông thậm chí đã từng khóa một lô xi măng trong nhà kho và đốt một vài bao để thể hiện quyết tâm của mình! "Ông có muốn cả thành phố này sụp đổ như thế này trong 10 năm nữa không?" ông sẽ hét lên trong các cuộc họp, lắc một cây xà mục nát.</li>
    <li>Trận chiến với các nhà phát triển: Vào những năm 90, khi sự bùng nổ du lịch bắt đầu, các doanh nhân rất háo hức xây dựng khách sạn trong khu phố cổ. Kazik đã đích thân chặn các công trường xây dựng, và, theo lời học trò của ông, thậm chí còn nằm trước xe ủi! Ông sẵn sàng làm bất cứ điều gì để bảo vệ Hội An.</li>
    <li>"Cuộc nổi loạn" chống lại UNESCO: Năm 1993, các chuyên gia UNESCO đề xuất cấm người dân sống trong các ngôi nhà lịch sử, biến thành phố thành một "hiện vật bảo tàng". Kazik đã mời họ ăn tối trong một ngôi nhà 300 tuổi, cho họ ăn súp, và tuyên bố: "Hoặc là các ông để người dân sống, hoặc Hội An sẽ trở thành một bảo tàng chết, giống như Venice của các ông!" UNESCO đã nhượng bộ.</li>
</ul>

<h6>Những câu chuyện đáng kinh ngạc và "Lời nguyền của Kazik"</h6>
<p>
    Nhiều truyền thuyết lưu truyền về Kazik, và ngay cả khi một số trong số đó được tô điểm, chúng chỉ nhấn mạnh sự độc đáo của ông:
</p>
<ul>
    <li>Cuộc chiến với biển hiệu neon: Khi cửa hàng đầu tiên treo biển hiệu neon trên mặt tiền cổ kính, Kazik sẽ bí mật xé bỏ các biển hiệu vào ban đêm, và một lần đích thân sơn đen biển hiệu neon trước sự chứng kiến của mọi người! Câu nói nổi tiếng của ông, vẫn được các hướng dẫn viên trích dẫn ngày nay: "Nếu tôi thấy một cửa hàng 'I ♥ Hoi An' khác trong khu phố cổ – tôi sẽ bắn nó bằng ná!"</li>
    <li>Cây cầu bị nguyền rủa: Khi một nền bê tông được đổ bí mật dưới Cầu Nhật Bản, Kazik đã đích thân đập vỡ nó bằng búa tạ vào lúc 5 giờ sáng để mọi người cùng nghe. Ông tìm thấy một người thợ già nhớ cách cây cầu được xây dựng 60 năm trước và yêu cầu công nhân mang đá bằng tay. Cây cầu vẫn đứng vững!</li>
    <li>"Nổi loạn gà": Năm 1996, UNESCO muốn cấm người dân nuôi gà trong khu phố cổ. Đáp lại, Kazik đã đích thân phân phát gà con cho 50 gia đình và dạy họ cách xây chuồng gà "chuẩn lịch sử". "Nếu bạn bỏ gà đi – linh hồn của Hội An sẽ biến mất," ông nói, và UNESCO lại nhượng bộ.</li>
    <li>Món quà cuối cùng: Trước khi qua đời, ông đã "phát hiện" một bia đá cổ (thực ra là đồ giả) dưới một chợ cá thế kỷ 18 đang bị phá hủy. Chợ ngay lập tức được liệt kê là một di tích được bảo vệ. Sự lừa dối được phát hiện 10 năm sau, nhưng đã quá muộn – tòa nhà đã được phục chế.</li>
</ul>

<h6>Di sản vẫn sống mãi</h6>
<img src="32.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski qua đời bi thảm vì một cơn đau tim ở Huế vào năm 1997, khi đang làm việc phục chế cung điện hoàng gia. Ông được chôn cất ở Ba Lan, nhưng một tượng đài đã được dựng lên cho ông ở Hội An trong một công viên mang tên ông – một vinh dự hiếm có đối với một người nước ngoài ở Việt Nam.
</p>
<p>
    Nhờ những nỗ lực không mệt mỏi của ông, Hội An và Mỹ Sơn đã được công nhận là Di sản Thế giới của UNESCO. Ông đã dạy người Việt Nam cách phục chế trong khi vẫn giữ được tính chân thực, và học trò của ông vẫn tiếp tục công việc của ông cho đến ngày nay. Ngay cả khi một số câu chuyện về ông đã trở thành truyền thuyết, chúng chỉ nhấn mạnh mức độ ông đã truyền cảm hứng cho mọi người để bảo vệ di sản. Kazik không chỉ là một nhà sử học; ông là linh hồn của Hội An, sống trong mỗi ngôi nhà được bảo tồn, trong mỗi cây xà được chạm khắc, và trong mỗi câu chuyện về "người Ba Lan điên" đã cứu thành phố.
</p>
    `,
      internalImageNames: ['32.jpg', '31.jpg'],
    },

    slug: {
      en: 'kazimierz-kwiatkowski-monument',
      ru: 'pamyatnik-kazimiru-kvatkovskomu',
      es: 'monumento-kazimierz-kwiatkowski',
      fr: 'monument-kazimierz-kwiatkowski',
      vn: 'tuong-dai-kazimierz-kwiatkowski',
    },
  },
  // Tan Ky Old House
  {
    id: 'tan-ky-old-house',
    coordinates: [15.876488698855377, 108.3277670451886],
    category: ['museum'], // Строго "museum"
    imageUrl: '9.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Tan Ky Old House',
      description:
        'Tan Ky Old House is one of the brightest examples of traditional Hoi An architecture.',
      fullDescription: `
<p>
    Imagine strolling through the ancient streets of Hoi An, where every house tells its own story. But among them, there is one special one – the <strong>Tan Ky Old House</strong>. It's not just an ancient mansion; it's a living history book, full of surprises, where people once lived, traded, and even hid from pirates!
</p>
<img src="33.jpg" alt="Tan Ky Old House"/>
<p>
    Built more than 200 years ago (in the late 18th - early 19th century) by a successful family of local merchants, Tan Ky Old House is one of the brightest examples of traditional Hoi An architecture. It is still owned and managed by the descendants of that very family, now in its seventh generation! This means you won't see a museum exhibit, but a real, living house where ancestral traditions are carefully preserved.
</p>

<h6>Architectural Secrets and Protection from the Elements</h6>
<p>
    Tan Ky Old House is not only beautiful but also features ingenious engineering solutions designed for life in Hoi An, which often suffers from floods:
</p>
<ul>
    <li><strong>"Tube house" design:</strong> Like many trading houses in Hoi An, Tan Ky has a narrow facade but extends far inwards, creating a long, multifunctional space. Here you'll find a trading area, inner courtyards, living quarters, and an area for ancestral worship.</li>
    <li><strong>Flood protection:</strong> Hoi An is located by a river, and floods are common here. But the Tan Ky merchants were prepared for this! The house has special mechanisms for quickly lifting all furniture and valuables to the second floor. Imagine how, during heavy rain, furniture would "fly" upwards, escaping the water!</li>
    <li><strong>Centuries-old floors:</strong> The floors in the house are made of amazing hard "jackfruit" wood, which is said to not rot for up to 300 years! This is another testament to the wisdom and durability of the materials used in those times.</li>
    <li><strong>Art on wood:</strong> Be sure to pay attention to the original carved panels that adorn the interior. They are made in a traditional style and often depict scenes from Chinese mythology, symbols of good luck and prosperity. Each carved element is a work of art and part of ancient beliefs.</li>
</ul>

<h6>Mysteries of the Past and Amazing Finds</h6>
<img src="34.jpg" alt="Tan Ky Old House"/>
<p>
    Tan Ky Old House is full of secrets that give it a special charm:
</p>
<ul>
    <li><strong>Secret room:</strong> It is said that behind the wardrobe in the bedroom there is a door to a tiny secret room. This is where merchants hid their wealth and gold from pirates who might attack the city! Can you find it?</li>
    <li><strong>Cultural mix:</strong> The architecture and decor of the house harmoniously intertwine Vietnamese, Chinese, and Japanese influences, reflecting Hoi An's history as a major international trading port.</li>
    <li><strong>Ancient artifacts:</strong> Inside, you will see not only unique furniture and wooden structures, but also many ancient household items, documents, and works of art that tell about the life and activities of the Tan Ky merchant family.</li>
</ul>
<p>
    Visiting Tan Ky Old House is an opportunity not just to see an ancient building, but to literally touch the living history of mercantile Hoi An. This is a place where every tree and every stone holds its own legends.
</p>

    `,
      internalImageNames: ['33.jpg', '34.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Старый дом Тан Ки',
      description:
        'Старый дом Тан Ки — один из самых ярких образцов традиционной архитектуры Хойана.',
      fullDescription: `
<p>
    Представьте, что вы прогуливаетесь по древним улицам Хойана, где каждый дом рассказывает свою историю. Но среди них есть один особенный — <strong>Старый дом Тан Ки</strong>. Это не просто старинный особняк; это живая книга истории, полная сюрпризов, где когда-то жили люди, торговали и даже прятались от пиратов!
</p>
<img src="33.jpg" alt="Старый дом Тан Ки"/>
<p>
    Построенный более 200 лет назад (в конце XVIII - начале XIX века) успешной семьей местных купцов, Старый дом Тан Ки является одним из самых ярких образцов традиционной архитектуры Хойана. Он до сих пор принадлежит и управляется потомками той самой семьи, уже седьмым поколением! Это значит, что вы увидите не музейный экспонат, а настоящий, живой дом, где бережно сохраняются традиции предков.
</p>

<h6>Архитектурные секреты и защита от стихии</h6>
<p>
    Старый дом Тан Ки не только красив, но и обладает гениальными инженерными решениями, разработанными для жизни в Хойане, который часто страдает от наводнений:
</p>
<ul>
    <li><strong>Конструкция «трубчатого дома»:</strong> Как и многие торговые дома Хойана, Тан Ки имеет узкий фасад, но уходит далеко вглубь, создавая длинное, многофункциональное пространство. Здесь вы найдете торговую зону, внутренние дворики, жилые помещения и зону для поклонения предкам.</li>
    <li><strong>Защита от наводнений:</strong> Хойан расположен у реки, и наводнения здесь — частое явление. Но купцы Тан Ки были готовы к этому! В доме есть специальные механизмы для быстрого поднятия всей мебели и ценностей на второй этаж. Представьте, как во время сильного дождя мебель «взлетает» наверх, спасаясь от воды!</li>
    <li><strong>Вековые полы:</strong> Полы в доме сделаны из удивительного твердого «джекфрутового» дерева, которое, как говорят, не гниет до 300 лет! Это еще одно свидетельство мудрости и долговечности материалов, использовавшихся в те времена.</li>
    <li><strong>Искусство на дереве:</strong> Обязательно обратите внимание на оригинальные резные панели, украшающие интерьер. Они выполнены в традиционном стиле и часто изображают сцены из китайской мифологии, символы удачи и процветания. Каждый резной элемент — это произведение искусства и часть древних верований.</li>
</ul>

<h6>Тайны прошлого и удивительные находки</h6>
<img src="34.jpg" alt="Старый дом Тан Ки"/>
<p>
    Старый дом Тан Ки полон секретов, которые придают ему особый шарм:
</p>
<ul>
    <li><strong>Секретная комната:</strong> Говорят, что за шкафом в спальне есть дверь в крошечную секретную комнату. Именно здесь купцы прятали свои богатства и золото от пиратов, которые могли напасть на город! Сможете ли вы её найти?</li>
    <li><strong>Смешение культур:</strong> В архитектуре и декоре дома гармонично переплетаются вьетнамские, китайские и японские влияния, что отражает историю Хойана как крупного международного торгового порта.</li>
    <li><strong>Древние артефакты:</strong> Внутри вы увидите не только уникальную мебель и деревянные конструкции, но и множество старинных предметов быта, документов и произведений искусства, которые рассказывают о жизни и деятельности купеческой семьи Тан Ки.</li>
</ul>
<p>
    Посещение Старого дома Тан Ки — это возможность не просто увидеть древнее здание, но и буквально прикоснуться к живой истории купеческого Хойана. Это место, где каждое дерево и каждый камень хранят свои легенды.
</p>

    `,
      internalImageNames: ['33.jpg', '34.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Casa Antigua Tan Ky',
      description:
        'La Casa Antigua Tan Ky es uno de los ejemplos más brillantes de la arquitectura tradicional de Hoi An.',
      fullDescription: `
<p>
    Imagina pasear por las antiguas calles de Hoi An, donde cada casa cuenta su propia historia. Pero entre ellas, hay una muy especial: la <strong>Casa Antigua Tan Ky</strong>. No es solo una antigua mansión; es un libro de historia viviente, lleno de sorpresas, donde la gente vivió, comerciaba e ¡incluso se escondía de los piratas!
</p>
<img src="33.jpg" alt="Casa Antigua Tan Ky"/>
<p>
    Construida hace más de 200 años (a finales del siglo XVIII - principios del XIX) por una exitosa familia de comerciantes locales, la Casa Antigua Tan Ky es uno de los ejemplos más brillantes de la arquitectura tradicional de Hoi An. ¡Todavía es propiedad y está gestionada por los descendientes de esa misma familia, ahora en su séptima generación! Esto significa que no verás una exhibición de museo, sino una casa real y viva donde las tradiciones ancestrales se conservan cuidadosamente.
</p>

<h6>Secretos Arquitectónicos y Protección contra los Elementos</h6>
<p>
    La Casa Antigua Tan Ky no solo es hermosa, sino que también presenta ingeniosas soluciones de ingeniería diseñadas para la vida en Hoi An, que a menudo sufre de inundaciones:
</p>
<ul>
    <li><strong>Diseño de "casa tubo":</strong> Al igual que muchas casas comerciales en Hoi An, Tan Ky tiene una fachada estrecha pero se extiende mucho hacia el interior, creando un espacio largo y multifuncional. Aquí encontrarás un área comercial, patios interiores, viviendas y un área para el culto ancestral.</li>
    <li><strong>Protección contra inundaciones:</strong> Hoi An está ubicada junto a un río, y las inundaciones son comunes aquí. ¡Pero los comerciantes de Tan Ky estaban preparados para esto! La casa tiene mecanismos especiales para elevar rápidamente todos los muebles y objetos de valor al segundo piso. ¡Imagina cómo, durante una lluvia intensa, los muebles "volarían" hacia arriba, escapando del agua!</li>
    <li><strong>Pisos centenarios:</strong> Los pisos de la casa están hechos de una asombrosa madera dura de "árbol de jaca", de la que se dice que no se pudre hasta por 300 años. Este es otro testimonio de la sabiduría y la durabilidad de los materiales utilizados en aquellos tiempos.</li>
    <li><strong>Arte en madera:</strong> Asegúrate de prestar atención a los paneles tallados originales que adornan el interior. Están hechos en un estilo tradicional y a menudo representan escenas de la mitología china, símbolos de buena suerte y prosperidad. Cada elemento tallado es una obra de arte y parte de antiguas creencias.</li>
</ul>

<h6>Misterios del Pasado y Hallazgos Asombrosos</h6>
<img src="34.jpg" alt="Casa Antigua Tan Ky"/>
<p>
    La Casa Antigua Tan Ky está llena de secretos que le dan un encanto especial:
</p>
<ul>
    <li><strong>Habitación secreta:</strong> Se dice que detrás del armario del dormitorio hay una puerta a una pequeña habitación secreta. ¡Aquí es donde los comerciantes escondían sus riquezas y oro de los piratas que podrían atacar la ciudad! ¿Puedes encontrarla?</li>
    <li><strong>Mezcla cultural:</strong> La arquitectura y la decoración de la casa entrelazan armoniosamente influencias vietnamitas, chinas y japonesas, lo que refleja la historia de Hoi An como un importante puerto comercial internacional.</li>
    <li><strong>Artefactos antiguos:</strong> En el interior, verás no solo muebles y estructuras de madera únicos, sino también muchos objetos antiguos del hogar, documentos y obras de arte que cuentan la vida y las actividades de la familia de comerciantes Tan Ky.</li>
</ul>
<p>
    Visitar la Casa Antigua Tan Ky es una oportunidad no solo para ver un edificio antiguo, sino para tocar literalmente la historia viva del Hoi An mercantil. Este es un lugar donde cada árbol y cada piedra guardan sus propias leyendas.
</p>

    `,
      internalImageNames: ['33.jpg', '34.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Ancienne Maison Tan Ky',
      description:
        "L'Ancienne Maison Tan Ky est l'un des exemples les plus marquants de l'architecture traditionnelle de Hoi An.",
      fullDescription: `
<p>
    Imaginez-vous flânant dans les rues anciennes de Hoi An, où chaque maison raconte sa propre histoire. Mais parmi elles, il y en a une spéciale – l'<strong>Ancienne Maison Tan Ky</strong>. Ce n'est pas seulement une ancienne demeure ; c'est un livre d'histoire vivant, plein de surprises, où les gens vivaient, commerçaient et se cachaient même des pirates !
</p>
<img src="33.jpg" alt="Ancienne Maison Tan Ky"/>
<p>
    Construite il y a plus de 200 ans (fin XVIIIe - début XIXe siècle) par une famille de marchands locaux prospères, l'Ancienne Maison Tan Ky est l'un des exemples les plus frappants de l'architecture traditionnelle de Hoi An. Elle est toujours la propriété et gérée par les descendants de cette même famille, qui en est maintenant à sa septième génération ! Cela signifie que vous ne verrez pas une exposition de musée, mais une vraie maison vivante où les traditions ancestrales sont soigneusement préservées.
</p>

<h6>Secrets architecturaux et protection contre les éléments</h6>
<p>
    L'Ancienne Maison Tan Ky est non seulement belle mais présente également des solutions d'ingénierie ingénieuses conçues pour la vie à Hoi An, qui souffre souvent d'inondations :
</p>
<ul>
    <li><strong>Conception de « maison tube » :</strong> Comme de nombreuses maisons de commerce à Hoi An, Tan Ky a une façade étroite mais s'étend loin vers l'intérieur, créant un espace long et multifonctionnel. Vous y trouverez une zone commerciale, des cours intérieures, des quartiers d'habitation et une zone de culte ancestral.</li>
    <li><strong>Protection contre les inondations :</strong> Hoi An est située au bord d'une rivière, et les inondations y sont courantes. Mais les marchands de Tan Ky étaient préparés à cela ! La maison dispose de mécanismes spéciaux pour soulever rapidement tous les meubles et objets de valeur au deuxième étage. Imaginez comment, lors d'une forte pluie, les meubles « voleraient » vers le haut, échappant à l'eau !</li>
    <li><strong>Planchers centenaires :</strong> Les planchers de la maison sont faits d'un étonnant bois dur de « jacquier », dont on dit qu'il ne pourrit pas pendant 300 ans ! C'est un autre témoignage de la sagesse et de la durabilité des matériaux utilisés à cette époque.</li>
    <li><strong>Art sur bois :</strong> Assurez-vous de prêter attention aux panneaux sculptés originaux qui ornent l'intérieur. Ils sont fabriqués dans un style traditionnel et représentent souvent des scènes de la mythologie chinoise, des symboles de chance et de prospérité. Chaque élément sculpté est une œuvre d'art et fait partie d'anciennes croyances.</li>
</ul>

<h6>Mystères du passé et découvertes étonnantes</h6>
<img src="34.jpg" alt="Ancienne Maison Tan Ky"/>
<p>
    L'Ancienne Maison Tan Ky est pleine de secrets qui lui confèrent un charme particulier :
</p>
<ul>
    <li><strong>Pièce secrète :</strong> On dit que derrière l'armoire de la chambre se trouve une porte menant à une minuscule pièce secrète. C'est là que les marchands cachaient leurs richesses et leur or des pirates qui pouvaient attaquer la ville ! Pourrez-vous la trouver ?</li>
    <li><strong>Mélange culturel :</strong> L'architecture et le décor de la maison entrelacent harmonieusement les influences vietnamiennes, chinoises et japonaises, reflétant l'histoire de Hoi An en tant que grand port commercial international.</li>
    <li><strong>Artefacts anciens :</strong> À l'intérieur, vous verrez non seulement des meubles et des structures en bois uniques, mais aussi de nombreux objets ménagers anciens, des documents et des œuvres d'art qui racontent la vie et les activités de la famille de marchands Tan Ky.</li>
</ul>
<p>
    Visiter l'Ancienne Maison Tan Ky est une occasion non seulement de voir un bâtiment ancien, mais de toucher littéralement l'histoire vivante du Hoi An marchand. C'est un lieu où chaque arbre et chaque pierre gardent leurs propres légendes.
</p>

    `,
      internalImageNames: ['33.jpg', '34.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Nhà Cổ Tấn Ký',
      description:
        'Nhà Cổ Tấn Ký là một trong những ví dụ điển hình nhất về kiến trúc truyền thống của Hội An.',
      fullDescription: `
<p>
    Hãy tưởng tượng bạn đang dạo bước trên những con phố cổ kính của Hội An, nơi mỗi ngôi nhà đều kể một câu chuyện riêng. Nhưng trong số đó, có một ngôi nhà đặc biệt – <strong>Nhà Cổ Tấn Ký</strong>. Đây không chỉ là một dinh thự cổ kính; đó là một cuốn sách lịch sử sống động, đầy bất ngờ, nơi con người từng sinh sống, buôn bán, và thậm chí trốn tránh cướp biển!
</p>
<img src="33.jpg" alt="Nhà Cổ Tấn Ký"/>
<p>
    Được xây dựng hơn 200 năm trước (cuối thế kỷ 18 - đầu thế kỷ 19) bởi một gia đình thương nhân địa phương thành đạt, Nhà Cổ Tấn Ký là một trong những ví dụ điển hình nhất về kiến trúc truyền thống của Hội An. Ngôi nhà vẫn thuộc sở hữu và được quản lý bởi con cháu của chính gia đình đó, hiện đã là thế hệ thứ bảy! Điều này có nghĩa là bạn sẽ không thấy một hiện vật bảo tàng, mà là một ngôi nhà thực sự, sống động nơi các truyền thống tổ tiên được bảo tồn cẩn thận.
</p>

<h6>Bí mật kiến trúc và Bảo vệ khỏi thiên tai</h6>
<p>
    Nhà Cổ Tấn Ký không chỉ đẹp mà còn có những giải pháp kỹ thuật khéo léo được thiết kế cho cuộc sống ở Hội An, nơi thường xuyên chịu ảnh hưởng của lũ lụt:
</p>
<ul>
    <li><strong>Thiết kế "nhà ống":</strong> Giống như nhiều nhà buôn ở Hội An, nhà Tấn Ký có mặt tiền hẹp nhưng kéo dài sâu vào bên trong, tạo ra một không gian dài, đa chức năng. Ở đây bạn sẽ tìm thấy khu vực buôn bán, sân trong, khu vực sinh hoạt và khu vực thờ cúng tổ tiên.</li>
    <li><strong>Bảo vệ chống lũ:</strong> Hội An nằm ven sông, và lũ lụt ở đây là hiện tượng phổ biến. Nhưng những người buôn bán ở Tấn Ký đã chuẩn bị sẵn sàng cho điều này! Ngôi nhà có các cơ chế đặc biệt để nhanh chóng nâng tất cả đồ đạc và vật có giá trị lên tầng hai. Hãy tưởng tượng khi trời mưa lớn, đồ đạc sẽ "bay" lên trên, thoát khỏi dòng nước!</li>
    <li><strong>Sàn nhà trăm tuổi:</strong> Sàn nhà được làm bằng gỗ mít cứng đáng kinh ngạc, được cho là không mục nát trong vòng 300 năm! Đây là một minh chứng nữa cho sự khôn ngoan và độ bền của các vật liệu được sử dụng vào thời đó.</li>
    <li><strong>Nghệ thuật trên gỗ:</strong> Hãy chắc chắn chú ý đến các tấm ván chạm khắc nguyên bản trang trí nội thất. Chúng được làm theo phong cách truyền thống và thường mô tả các cảnh trong thần thoại Trung Quốc, biểu tượng của sự may mắn và thịnh vượng. Mỗi yếu tố chạm khắc là một tác phẩm nghệ thuật và là một phần của tín ngưỡng cổ xưa.</li>
</ul>

<h6>Bí ẩn quá khứ và những phát hiện đáng kinh ngạc</h6>
<img src="34.jpg" alt="Nhà Cổ Tấn Ký"/>
<p>
    Nhà Cổ Tấn Ký chứa đầy những bí mật mang lại cho nó một vẻ quyến rũ đặc biệt:
</p>
<ul>
    <li><strong>Căn phòng bí mật:</strong> Người ta nói rằng đằng sau tủ quần áo trong phòng ngủ có một cánh cửa dẫn đến một căn phòng bí mật nhỏ xíu. Đây là nơi các thương nhân cất giấu tài sản và vàng của họ khỏi những tên cướp biển có thể tấn công thành phố! Bạn có thể tìm thấy nó không?</li>
    <li><strong>Sự pha trộn văn hóa:</strong> Kiến trúc và cách trang trí của ngôi nhà hòa quyện hài hòa các ảnh hưởng của Việt Nam, Trung Quốc và Nhật Bản, phản ánh lịch sử của Hội An là một cảng thương mại quốc tế lớn.</li>
    <li><strong>Cổ vật:</strong> Bên trong, bạn sẽ không chỉ thấy đồ nội thất và cấu trúc gỗ độc đáo, mà còn nhiều đồ dùng sinh hoạt cổ, tài liệu và tác phẩm nghệ thuật kể về cuộc đời và hoạt động của gia đình thương nhân Tấn Ký.</li>
</ul>
<p>
    Tham quan Nhà Cổ Tấn Ký là cơ hội không chỉ để ngắm nhìn một công trình cổ kính, mà còn để chạm tay vào lịch sử sống động của Hội An thương cảng. Đây là một nơi mà mỗi cây và mỗi viên đá đều chứa đựng những truyền thuyết riêng.
</p>

    `,
      internalImageNames: ['33.jpg', '34.jpg'],
    },

    slug: {
      en: 'tan-ky-old-house',
      ru: 'staryy-dom-tan-ki',
      es: 'casa-antigua-tan-ky',
      fr: 'ancienne-maison-tan-ky',
      vn: 'nha-co-tan-ky',
    },
  },
  // Quan Thang Ancient House
  {
    id: 'quan-thang-ancient-house',
    coordinates: [15.877115400142667, 108.32921889710688],
    category: ['museum'], // Строго "museum"
    imageUrl: '10.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Quan Thang Ancient House',
      description:
        'Quan Thang House showcases a harmonious blend of Vietnamese, Chinese, and Japanese influences.',
      fullDescription: `
<p>
    If you truly want to immerse yourself in the history of Hoi An, then your path leads to the <strong>Quan Thang Ancient House</strong>. This mansion is one of the true gems of the Ancient Town, carefully preserving the spirit of its mercantile past.
</p>
<p>
    Built in the late 17th or 18th century by a wealthy Chinese merchant named Quan Thang, the house was named after him. The owner specialized in trading local products and medicines, and his house was both a luxurious residence and a bustling trading center. Surprisingly, Quan Thang House is still owned and maintained by the descendants of that very family, making it a "living" artifact that has withstood centuries and harsh climatic conditions, while preserving its original architectural design and furnishings.
</p>

<h6>Architectural Masterpiece and Its Secrets</h6>
<p>
    Quan Thang House is an outstanding example of Hoi An architecture, harmoniously blending Vietnamese, Chinese, and Japanese influences:
</p>
<img src="35.jpg" alt="Quan Thang Ancient House"/>
<ul>
    <li>It has the typical "tube house" shape of Hoi An: a narrow facade that extends far inwards, all the way to the river at the back.</li>
    <li>Inside, the house is divided into several zones: a commercial space at the entrance with counters, living quarters for the family, and, of course, a sacred place for ancestral worship.</li>
    <li>Pay attention to the <strong>inner courtyards (Sky Yards)</strong> – these are open spaces in the center of the house. They not only provide natural light and ventilation but also serve to collect rainwater. You can often see fish tanks, small plants, and trees here, creating an an oasis of tranquility.</li>
    <li>The house is famous for its exquisite wood carvings, crafted by artisans from the famous Kim Bong carpentry village. Here you'll see peacocks, flowers, mythical creatures, and patterns related to feng shui. It's one of the most beautiful examples of wood carving in Hoi An.</li>
    <li>Built from precious ironwood, the house is incredibly sturdy. Its roof is covered with "yin-yang" tiles, which help keep it cool in summer and warm in winter – it's like an ancient "air conditioner"!</li>
    <li>Above the main door are unique "door eyes" with a yin-yang symbol and bodhi leaves, adorned with red fabrics. They are believed to protect the house from evil spirits and bad luck.</li>
</ul>

<h6>Immersion in the Mercantile Past</h6>

<p>
    Visiting Quan Thang Ancient House is not just a walk through an old building. It's an opportunity to glimpse into the daily life and trading practices of Hoi An's prosperous merchant class from centuries past. The family shrines and the overall atmosphere of the house demonstrate the importance of preserving traditional beliefs and cultural customs. It is an important part of Hoi An's architectural heritage, showcasing the high craftsmanship of local and Chinese artisans.
</p>

<img src="36.jpg" alt="Quan Thang Ancient House"/>

    `,
      internalImageNames: ['35.jpg', '36.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Древний дом Куан Тханг',
      description:
        'Дом Куан Тханг демонстрирует гармоничное сочетание вьетнамского, китайского и японского влияний.',
      fullDescription: `
<p>
    Если вы действительно хотите погрузиться в историю Хойана, то ваш путь лежит к <strong>Древнему дому Куан Тханг</strong>. Этот особняк — одна из подлинных жемчужин Старого города, бережно хранящая дух своего купеческого прошлого.
</p>
<p>
    Построенный в конце XVII или XVIII века богатым китайским купцом по имени Куан Тханг, дом был назван в его честь. Владелец специализировался на торговле местными продуктами и лекарствами, а его дом был одновременно роскошной резиденцией и оживленным торговым центром. Удивительно, но Дом Куан Тханг до сих пор принадлежит и поддерживается потомками той самой семьи, что делает его «живым» артефактом, выдержавшим столетия и суровые климатические условия, при этом сохранив свой первоначальный архитектурный дизайн и обстановку.
</p>

<h6>Архитектурный шедевр и его секреты</h6>
<p>
    Дом Куан Тханг является выдающимся примером архитектуры Хойана, гармонично сочетающей вьетнамское, китайское и японское влияния:
</p>
<img src="35.jpg" alt="Древний дом Куан Тханг"/>
<ul>
    <li>Он имеет типичную для Хойана форму «трубчатого дома»: узкий фасад, который уходит далеко вглубь, вплоть до реки на заднем дворе.</li>
    <li>Внутри дом разделен на несколько зон: торговое пространство у входа со прилавками, жилые помещения для семьи и, конечно же, священное место для поклонения предкам.</li>
    <li>Обратите внимание на <strong>внутренние дворики (Небесные Дворы)</strong> — это открытые пространства в центре дома. Они не только обеспечивают естественное освещение и вентиляцию, но и служат для сбора дождевой воды. Здесь часто можно увидеть аквариумы с рыбами, небольшие растения и деревья, создавая оазис спокойствия.</li>
    <li>Дом славится своей изысканной резьбой по дереву, выполненной мастерами из знаменитой деревни плотников Ким Бонг. Здесь вы увидите павлинов, цветы, мифических существ и узоры, связанные с фэн-шуй. Это один из самых красивых образцов резьбы по дереву в Хойане.</li>
    <li>Построенный из драгоценного железного дерева, дом невероятно прочен. Его крыша покрыта плиткой «инь-ян», которая помогает сохранять прохладу летом и тепло зимой — это как древний «кондиционер»!</li>
    <li>Над главной дверью расположены уникальные «глаза двери» с символом инь-ян и листьями бодхи, украшенные красными тканями. Считается, что они защищают дом от злых духов и несчастий.</li>
</ul>

<h6>Погружение в купеческое прошлое</h6>

<p>
    Посещение Древнего дома Куан Тханг — это не просто прогулка по старому зданию. Это возможность заглянуть в повседневную жизнь и торговые практики процветающего купеческого класса Хойана из прошлых веков. Семейные святыни и общая атмосфера дома демонстрируют важность сохранения традиционных верований и культурных обычаев. Это важная часть архитектурного наследия Хойана, демонстрирующая высокое мастерство местных и китайских ремесленников.
</p>

<img src="36.jpg" alt="Древний дом Куан Тханг"/>

    `,
      internalImageNames: ['35.jpg', '36.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Casa Antigua Quan Thang',
      description:
        'La Casa Quan Thang exhibe una armoniosa mezcla de influencias vietnamitas, chinas y japonesas.',
      fullDescription: `
<p>
    Si realmente quieres sumergirte en la historia de Hoi An, entonces tu camino te lleva a la <strong>Casa Antigua Quan Thang</strong>. Esta mansión es una de las verdaderas joyas del Casco Antiguo, preservando cuidadosamente el espíritu de su pasado mercantil.
</p>
<p>
    Construida a finales del siglo XVII o XVIII por un rico comerciante chino llamado Quan Thang, la casa fue nombrada en su honor. El propietario se especializaba en el comercio de productos locales y medicinas, y su casa era tanto una lujosa residencia como un bullicioso centro comercial. Sorprendentemente, la Casa Quan Thang sigue siendo propiedad y está mantenida por los descendientes de esa misma familia, lo que la convierte en un artefacto "viviente" que ha resistido siglos y condiciones climáticas adversas, conservando su diseño arquitectónico y mobiliario originales.
</p>

<h6>Obra Maestra Arquitectónica y Sus Secretos</h6>
<p>
    La Casa Quan Thang es un ejemplo sobresaliente de la arquitectura de Hoi An, fusionando armoniosamente influencias vietnamitas, chinas y japonesas:
</p>
<img src="35.jpg" alt="Casa Antigua Quan Thang"/>
<ul>
    <li>Tiene la forma típica de "casa tubo" de Hoi An: una fachada estrecha que se extiende mucho hacia el interior, hasta el río en la parte trasera.</li>
    <li>En el interior, la casa se divide en varias zonas: un espacio comercial en la entrada con mostradores, viviendas para la familia y, por supuesto, un lugar sagrado para el culto ancestral.</li>
    <li>Presta atención a los <strong>patios interiores (Patios del Cielo)</strong> – estos son espacios abiertos en el centro de la casa. No solo proporcionan luz natural y ventilación, sino que también sirven para recolectar agua de lluvia. A menudo se pueden ver peceras, pequeñas plantas y árboles aquí, creando un oasis de tranquilidad.</li>
    <li>La casa es famosa por sus exquisitas tallas de madera, elaboradas por artesanos del famoso pueblo de carpinteros de Kim Bong. Aquí verás pavos reales, flores, criaturas míticas y patrones relacionados con el feng shui. Es uno de los ejemplos más hermosos de tallado de madera en Hoi An.</li>
    <li>Construida con preciosa madera de hierro, la casa es increíblemente robusta. Su techo está cubierto con tejas "yin-yang", que ayudan a mantenerla fresca en verano y cálida en invierno – ¡es como un "aire acondicionado" antiguo!</li>
    <li>Sobre la puerta principal hay unos "ojos de puerta" únicos con un símbolo yin-yang y hojas de bodhi, adornados con telas rojas. Se cree que protegen la casa de los malos espíritus y la mala suerte.</li>
</ul>

<h6>Inmersión en el Pasado Mercantil</h6>

<p>
    Visitar la Casa Antigua Quan Thang no es solo un paseo por un edificio antiguo. Es una oportunidad para echar un vistazo a la vida diaria y las prácticas comerciales de la próspera clase mercantil de Hoi An de siglos pasados. Los santuarios familiares y la atmósfera general de la casa demuestran la importancia de preservar las creencias tradicionales y las costumbres culturales. Es una parte importante del patrimonio arquitectónico de Hoi An, mostrando la alta artesanía de los artesanos locales y chinos.
</p>

<img src="36.jpg" alt="Casa Antigua Quan Thang"/>

    `,
      internalImageNames: ['35.jpg', '36.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Ancienne Maison Quan Thang',
      description:
        "La Maison Quan Thang présente un mélange harmonieux d'influences vietnamiennes, chinoises et japonaises.",
      fullDescription: `
<p>
    Si vous voulez vraiment vous immerger dans l'histoire de Hoi An, alors votre chemin mène à l'<strong>Ancienne Maison Quan Thang</strong>. Cette demeure est l'un des véritables joyaux de la Vieille Ville, préservant soigneusement l'esprit de son passé marchand.
</p>
<p>
    Construite à la fin du XVIIe ou au XVIIIe siècle par un riche marchand chinois nommé Quan Thang, la maison a été nommée d'après lui. Le propriétaire était spécialisé dans le commerce de produits locaux et de médicaments, et sa maison était à la fois une résidence luxueuse et un centre commercial animé. Étonnamment, la Maison Quan Thang est toujours la propriété et entretenue par les descendants de cette même famille, ce qui en fait un artefact « vivant » qui a résisté aux siècles et aux conditions climatiques difficiles, tout en conservant son design architectural et son ameublement d'origine.
</p>

<h6>Chef-d'œuvre architectural et ses secrets</h6>
<p>
    La Maison Quan Thang est un exemple exceptionnel de l'architecture de Hoi An, mélangeant harmonieusement les influences vietnamiennes, chinoises et japonaises :
</p>
<img src="35.jpg" alt="Ancienne Maison Quan Thang"/>
<ul>
    <li>Elle a la forme typique de « maison tube » de Hoi An : une façade étroite qui s'étend loin vers l'intérieur, jusqu'à la rivière à l'arrière.</li>
    <li>À l'intérieur, la maison est divisée en plusieurs zones : un espace commercial à l'entrée avec des comptoirs, des quartiers d'habitation pour la famille et, bien sûr, un lieu sacré pour le culte ancestral.</li>
    <li>Faites attention aux <strong>cours intérieures (Jardins du Ciel)</strong> – ce sont des espaces ouverts au centre de la maison. Ils fournissent non seulement une lumière naturelle et une ventilation, mais servent également à recueillir l'eau de pluie. Vous pouvez souvent y voir des aquariums, de petites plantes et des arbres, créant une oasis de tranquillité.</li>
    <li>La maison est célèbre pour ses exquises sculptures sur bois, fabriquées par des artisans du célèbre village de menuiserie de Kim Bong. Vous y verrez des paons, des fleurs, des créatures mythiques et des motifs liés au feng shui. C'est l'un des plus beaux exemples de sculpture sur bois à Hoi An.</li>
    <li>Construite à partir de bois de fer précieux, la maison est incroyablement robuste. Son toit est recouvert de tuiles « yin-yang », qui aident à la garder fraîche en été et chaude en hiver – c'est comme un « climatiseur » ancien !</li>
    <li>Au-dessus de la porte principale se trouvent des « yeux de porte » uniques avec un symbole yin-yang et des feuilles de bodhi, ornées de tissus rouges. On pense qu'ils protègent la maison des mauvais esprits et de la malchance.</li>
</ul>

<h6>Immersion dans le passé marchand</h6>

<p>
    Visiter l'Ancienne Maison Quan Thang n'est pas seulement une promenade dans un vieux bâtiment. C'est l'occasion de jeter un coup d'œil sur la vie quotidienne et les pratiques commerciales de la prospère classe marchande de Hoi An des siècles passés. Les sanctuaires familiaux et l'atmosphère générale de la maison démontrent l'importance de préserver les croyances traditionnelles et les coutumes culturelles. C'est une partie importante du patrimoine architectural de Hoi An, montrant le grand savoir-faire des artisans locaux et chinois.
</p>

<img src="36.jpg" alt="Ancienne Maison Quan Thang"/>

    `,
      internalImageNames: ['35.jpg', '36.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Nhà Cổ Quân Thắng',
      description:
        'Nhà Quân Thắng thể hiện sự pha trộn hài hòa giữa các ảnh hưởng của Việt Nam, Trung Quốc và Nhật Bản.',
      fullDescription: `
<p>
    Nếu bạn thực sự muốn đắm mình vào lịch sử Hội An, thì con đường của bạn dẫn đến <strong>Nhà Cổ Quân Thắng</strong>. Dinh thự này là một trong những viên ngọc quý thực sự của Phố cổ, gìn giữ cẩn thận tinh thần của quá khứ thương mại của nó.
</p>
<p>
    Được xây dựng vào cuối thế kỷ 17 hoặc 18 bởi một thương nhân giàu có người Trung Quốc tên là Quân Thắng, ngôi nhà được đặt theo tên ông. Chủ sở hữu chuyên kinh doanh các sản phẩm địa phương và thuốc men, và ngôi nhà của ông vừa là một nơi ở sang trọng vừa là một trung tâm giao thương sầm uất. Đáng ngạc nhiên, Nhà Quân Thắng vẫn thuộc sở hữu và được duy trì bởi con cháu của chính gia đình đó, biến nó thành một hiện vật "sống" đã tồn tại qua nhiều thế kỷ và điều kiện khí hậu khắc nghiệt, đồng thời giữ được thiết kế kiến trúc và đồ đạc ban đầu của nó.
</p>

<h6>Kiệt tác kiến trúc và những bí mật của nó</h6>
<p>
    Nhà Quân Thắng là một ví dụ nổi bật về kiến trúc Hội An, hòa quyện hài hòa các ảnh hưởng của Việt Nam, Trung Quốc và Nhật Bản:
</p>
<img src="35.jpg" alt="Nhà Cổ Quân Thắng"/>
<ul>
    <li>Nó có hình dạng "nhà ống" điển hình của Hội An: mặt tiền hẹp nhưng kéo dài sâu vào bên trong, tận đến bờ sông phía sau.</li>
    <li>Bên trong, ngôi nhà được chia thành nhiều khu vực: một không gian thương mại ở lối vào với quầy hàng, khu sinh hoạt cho gia đình, và tất nhiên, một nơi linh thiêng để thờ cúng tổ tiên.</li>
    <li>Hãy chú ý đến <strong>sân trong (Thiên Tỉnh)</strong> – đây là những không gian mở ở trung tâm ngôi nhà. Chúng không chỉ cung cấp ánh sáng tự nhiên và thông gió mà còn dùng để thu thập nước mưa. Bạn thường có thể thấy hồ cá, cây nhỏ và cây cối ở đây, tạo ra một ốc đảo yên bình.</li>
    <li>Ngôi nhà nổi tiếng với những chạm khắc gỗ tinh xảo, được chế tác bởi các nghệ nhân từ làng mộc Kim Bồng nổi tiếng. Ở đây bạn sẽ thấy chim công, hoa, các sinh vật thần thoại và các họa tiết liên quan đến phong thủy. Đây là một trong những ví dụ đẹp nhất về chạm khắc gỗ ở Hội An.</li>
    <li>Được xây dựng từ gỗ lim quý hiếm, ngôi nhà vô cùng chắc chắn. Mái nhà được lợp bằng ngói "âm dương", giúp giữ cho nhà mát vào mùa hè và ấm vào mùa đông – giống như một "máy lạnh" cổ xưa!</li>
    <li>Phía trên cửa chính là những "mắt cửa" độc đáo với biểu tượng âm dương và lá bồ đề, được trang trí bằng vải đỏ. Chúng được cho là để bảo vệ ngôi nhà khỏi tà ma và xui xẻo.</li>
</ul>

<h6>Đắm mình vào quá khứ thương mại</h6>

<p>
    Tham quan Nhà Cổ Quân Thắng không chỉ là một cuộc dạo chơi qua một tòa nhà cổ. Đó là cơ hội để nhìn thoáng qua cuộc sống hàng ngày và các hoạt động thương mại của tầng lớp thương nhân thịnh vượng của Hội An từ nhiều thế kỷ trước. Các bàn thờ gia đình và bầu không khí chung của ngôi nhà thể hiện tầm quan trọng của việc bảo tồn tín ngưỡng truyền thống và phong tục văn hóa. Đây là một phần quan trọng của di sản kiến trúc Hội An, thể hiện tay nghề cao của các nghệ nhân địa phương và Trung Quốc.
</p>

<img src="36.jpg" alt="Nhà Cổ Quân Thắng"/>

    `,
      internalImageNames: ['35.jpg', '36.jpg'],
    },

    slug: {
      en: 'quan-thang-ancient-house',
      ru: 'drevniy-dom-kvan-tang',
      es: 'casa-antigua-quan-thang',
      fr: 'ancienne-maison-quan-thang',
      vn: 'nha-co-quan-thang',
    },
  },
  // Museum of Trade Ceramics
  {
    id: 'museum-of-trade-ceramics',
    coordinates: [15.877278909070201, 108.32954973149477],
    category: ['museum'], // Строго "museum"
    imageUrl: '11.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Museum of Trade Ceramics',
      description:
        "A key testament to Hoi An's prosperity as a bustling trading port from the 15th to 18th centuries.",
      fullDescription: `
<p>
    If you truly want to understand how Hoi An transformed into a thriving trading port, then the <strong>Museum of Trade Ceramics</strong> is the place that will tell you this fascinating story. Housed in a beautifully restored two-story 19th-century wooden house (or even 1858, according to some sources!), this museum itself is a work of art, reflecting traditional Vietnamese architectural style.
</p>
<p>
    Opened in 1995 with the support of Japanese experts, the museum was created to preserve and showcase the incredible value of ceramics, which were the foundation of Hoi An's commercial life. It seems to trace the threads connecting the city with distant lands and shows how Hoi An became a true hub on the international maritime Silk Road.
</p>

<h6>A Collection That Tells Centuries of Stories</h6>
<p>
    The museum offers a deep dive into Hoi An's history as a bustling trading port and its key role in international ceramics trade. It houses an extensive collection – over 430 ancient artifacts, predominantly dating from the 9th to 19th centuries, although some fragments may be even older, dating back to the 7th-10th centuries!
</p>
<img src="37.jpg" alt="Museum of Trade Ceramics"/>
<p>
    Imagine that these items sailed here from all corners of the world:
</p>
<ul>
    <li><strong>China:</strong> Exquisite pieces from the Tang, Ming, Qing dynasties.</li>
    <li><strong>Japan, Thailand, Vietnam:</strong> Ceramics reflecting local craftsmanship.</li>
    <li><strong>India and even the Middle East/Central Asia:</strong> Proof of Hoi An's incredibly wide trade connections.</li>
</ul>
<p>
    In the collection, you'll see a variety of ceramics: from everyday bowls and plates to elegant wine cups, teapots, vases, and even decorative tiles. Many exhibits were found during archaeological excavations right here in Hoi An, and some were retrieved from sunken ships near Cham Island, including from the largest underwater excavation in Vietnam, dating back to the 15th century! This is undeniable proof that ceramics were a major trade commodity.
</p>

<h6>Immersion in the Trading Atmosphere</h6>
<p>
    The museum is designed to allow you to fully immerse yourself in the atmosphere of ancient trade:
</p>
<img src="38.jpg" alt="Museum of Trade Ceramics"/>
<ul>
    <li>Exhibits are arranged on two levels around a central open courtyard, creating the feeling of walking through an old trading house.</li>
    <li>In the museum's open courtyard, there is a full-sized replica of a traditional ceramic kiln. Here you can imagine how all these beautiful items were created.</li>
    <li>On the walls, you'll find old maps showing Hoi An's maritime trade routes and its connections with other countries. Of particular interest is a copy of a 17th-century Japanese painting, "Journey for Trade in Jiaozhi," painted by the merchant Chaya Shinroku.</li>
    <li>In the center of the hall, you might sometimes see a model of a "ghe bau" – a special type of sailboat from Hoi An, made by a local woodcarver, which will show what the vessels carrying these valuable goods looked like.</li>
</ul>

<h6>Legacy and Significance</h6>
<p>
    The Museum of Trade Ceramics is a key testament to Hoi An's prosperity as a bustling trading port from the 15th to 18th centuries. It clearly demonstrates its role in international trade and cultural exchange between Asia, the Middle East, and even Europe. The museum building itself, a beautifully restored ancient house, has immense architectural value and allows visitors to "feel" the atmosphere of a traditional Vietnamese home. It is a valuable resource for historians and archaeologists, allowing for a deeper study of Hoi An's past.
</p>
<p>
    The Museum of Trade Ceramics in Hoi An is not just a collection of artifacts, but a journey through time, revealing the city's glorious commercial past and its role as an important hub on the international maritime Silk Road.
</p>

    `,
      internalImageNames: ['38.jpg', '37.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей торговой керамики',
      description:
        'Ключевое свидетельство процветания Хойана как оживленного торгового порта с XV по XVIII века.',
      fullDescription: `
<p>
    Если вы действительно хотите понять, как Хойан превратился в процветающий торговый порт, то <strong>Музей торговой керамики</strong> — это то место, которое расскажет вам эту увлекательную историю. Расположенный в прекрасно отреставрированном двухэтажном деревянном доме XIX века (или даже 1858 года, по некоторым данным!), этот музей сам по себе является произведением искусства, отражающим традиционный вьетнамский архитектурный стиль.
</p>
<p>
    Открытый в 1995 году при поддержке японских экспертов, музей был создан для сохранения и демонстрации невероятной ценности керамики, которая была основой коммерческой жизни Хойана. Он словно прослеживает нити, связывающие город с далекими землями, и показывает, как Хойан стал настоящим узлом на международном морском Шелковом пути.
</p>

<h6>Коллекция, которая рассказывает вековые истории</h6>
<p>
    Музей предлагает глубокое погружение в историю Хойана как оживленного торгового порта и его ключевую роль в международной торговле керамикой. В нем хранится обширная коллекция — более 430 древних артефактов, преимущественно датируемых IX-XIX веками, хотя некоторые фрагменты могут быть даже старше, относящиеся к VII-X векам!
</p>
<img src="37.jpg" alt="Музей торговой керамики"/>
<p>
    Представьте, что эти предметы приплыли сюда со всех уголков мира:
</p>
<ul>
    <li><strong>Китай:</strong> Изысканные изделия династий Тан, Мин, Цин.</li>
    <li><strong>Япония, Таиланд, Вьетнам:</strong> Керамика, отражающая местное мастерство.</li>
    <li><strong>Индия и даже Ближний Восток/Центральная Азия:</strong> Доказательство невероятно широких торговых связей Хойана.</li>
</ul>
<p>
    В коллекции вы увидите разнообразную керамику: от повседневных мисок и тарелок до элегантных винных кубков, чайников, ваз и даже декоративной плитки. Многие экспонаты были найдены во время археологических раскопок прямо здесь, в Хойане, а некоторые были извлечены из затонувших кораблей близ острова Чам, в том числе из крупнейших подводных раскопок во Вьетнаме, датируемых XV веком! Это неоспоримое доказательство того, что керамика была основным торговым товаром.
</p>

<h6>Погружение в торговую атмосферу</h6>
<p>
    Музей спроектирован так, чтобы вы могли полностью погрузиться в атмосферу древней торговли:
</p>
<img src="38.jpg" alt="Музей торговой керамики"/>
<ul>
    <li>Экспонаты расположены на двух уровнях вокруг центрального открытого внутреннего двора, создавая ощущение прогулки по старому торговому дому.</li>
    <li>В открытом внутреннем дворе музея находится полноразмерная копия традиционной керамической печи. Здесь вы можете представить, как создавались все эти прекрасные предметы.</li>
    <li>На стенах вы найдете старинные карты, показывающие морские торговые пути Хойана и его связи с другими странами. Особый интерес представляет копия японской картины XVII века «Путешествие для торговли в Цзяочжи», написанная купцом Чая Синроку.</li>
    <li>В центре зала вы иногда можете увидеть модель «гхе бау» — особого типа парусника из Хойана, сделанную местным резчиком по дереву, которая покажет, как выглядели суда, перевозившие эти ценные товары.</li>
</ul>

<h6>Наследие и значение</h6>
<p>
    Музей торговой керамики является ключевым свидетельством процветания Хойана как оживленного торгового порта с XV по XVIII века. Он наглядно демонстрирует его роль в международной торговле и культурном обмене между Азией, Ближним Востоком и даже Европой. Само здание музея, прекрасно отреставрированный древний дом, имеет огромную архитектурную ценность и позволяет посетителям «почувствовать» атмосферу традиционного вьетнамского дома. Это ценный ресурс для историков и археологов, позволяющий глубже изучать прошлое Хойана.
</p>
<p>
    Музей торговой керамики в Хойане — это не просто собрание артефактов, а путешествие во времени, раскрывающее славное коммерческое прошлое города и его роль как важного узла на международном морском Шелковом пути.
</p>

    `,
      internalImageNames: ['38.jpg', '37.jpg'],
    },

    slug: {
      en: 'museum-of-trade-ceramics',
      ru: 'muzey-torgovoy-keramiki',
      es: 'museo-comercio-ceramica',
      fr: 'musee-ceramique-commerciale',
      vn: 'bao-tang-gom-su-thuong-mai',
    },
  },
  // Museum of Local Products
  {
    id: 'museum-of-local-products',
    coordinates: [15.877226900667111, 108.32979996486384],
    category: ['museum'], // Строго "museum"
    imageUrl: '12.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Museum of Local Products',
      description:
        "Created to showcase, introduce, promote, and develop Hoi An's spices and local products.",
      fullDescription: `
<p>
    If you've ever dreamed of discovering the secrets hidden within the local spices and products that have made Hoi An a gem of trade for centuries, then you absolutely must visit the <strong>Museum of Local Products in Hoi An</strong>. This new but very important museum, recently opened, is located in one of the ancient houses at 57 Trần Phú and aims to immerse you in a world of aromas and stories.
</p>
<p>
    Created by the Hoi An Center for Cultural Heritage Management and Preservation, the museum has one main goal: to showcase, introduce, and, of course, promote the unique spices and local products of Hoi An and the entire Quang Nam province. This isn't just an exhibition; it's a new, attractive tourist destination that will allow you to learn about and experience the richness of the region, as well as gain insight into the history of bustling trade that thrived in Hoi An's port from ancient times to the present day.
</p>

<h6>Themes, Artifacts, and Culinary Secrets</h6>
<p>
    The Museum of Local Products is very thoughtfully organized into four fascinating themes that will reveal the essence of Hoi An to you:
</p>
<img src="39.jpg" alt="Museum of Local Products"/>
<ul>
    <li><strong>Overview of Local Products:</strong> You'll get a general understanding of what makes this region rich.</li>
    <li><strong>Hoi An – A Spice Transit Point:</strong> This part of the exhibition highlights Hoi An's historical role as a key hub through which flows of spices and other valuable goods passed.</li>
    <li><strong>Typical and Endemic Products:</strong> Here you'll discover the true treasures of the Quang Nam region, such as mysterious bird's nest, unique Lao leaves, aromatic pepper, betel nut, fragrant cinnamon, various types of tea, and valuable agarwood (oud).</li>
    <li><strong>Continuity and Development:</strong> This section will likely show how local products live and develop in the modern world, preserving their traditions.</li>
</ul>
<p>
    In the museum, you'll see an impressive collection: 130 images, ancient documents, books, and maps, as well as 178 artifacts of high historical and cultural value. In addition, various models, layouts, and samples are presented to help you better understand how these products were collected, processed, and used.
</p>

<h6>Significance for the City and Its Guests</h6>
<p>
    The opening of this museum is an important event that emphasizes several aspects at once:
</p>
<ul>
    <li><strong>Hoi An's Historical Role:</strong> It once again reminds us that Hoi An was a key trading center, connecting regions and countries through spices and local goods.</li>
    <li><strong>Richness of Local Heritage:</strong> The museum vividly demonstrates the diversity of unique products and spices from Quang Nam province, revealing their value.</li>
    <li><strong>Tourism Development:</strong> This is a new, attractive point on the tourist map, offering visitors a unique opportunity to gain a deeper understanding of the region's trade history and culture through its flavors and aromas.</li>
</ul>
<p>
    The Museum of Local Products in Hoi An is a valuable addition to the city's cultural landscape, offering a unique journey into the gastronomic and trade heritage of the region. Be sure to stop by and breathe in the aroma of history!
</p>
    `,
      internalImageNames: ['39.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей местных продуктов',
      description:
        'Создан для демонстрации, представления, продвижения и развития специй и местных продуктов Хойана.',
      fullDescription: `
<p>
    Если вы когда-либо мечтали открыть для себя секреты, скрытые в местных специях и продуктах, которые на протяжении веков делали Хойан жемчужиной торговли, то вам непременно стоит посетить <strong>Музей местных продуктов в Хойане</strong>. Этот новый, но очень важный музей, недавно открытый, расположен в одном из старинных домов по адресу 57 Trần Phú и призван погрузить вас в мир ароматов и историй.
</p>
<p>
    Созданный Центром управления и сохранения культурного наследия Хойана, музей преследует одну главную цель: продемонстрировать, представить и, конечно же, продвигать уникальные специи и местные продукты Хойана и всей провинции Куангнам. Это не просто выставка; это новое, привлекательное туристическое направление, которое позволит вам узнать и ощутить богатство региона, а также получить представление об истории оживленной торговли, которая процветала в порту Хойана с древних времен до наших дней.
</p>

<h6>Темы, артефакты и кулинарные секреты</h6>
<p>
    Музей местных продуктов очень продуманно организован по четырем увлекательным темам, которые раскроют для вас суть Хойана:
</p>
<img src="39.jpg" alt="Музей местных продуктов"/>
<ul>
    <li><strong>Обзор местных продуктов:</strong> Вы получите общее представление о том, что делает этот регион богатым.</li>
    <li><strong>Хойан – пункт транзита специй:</strong> Эта часть выставки подчеркивает историческую роль Хойана как ключевого узла, через который проходили потоки специй и других ценных товаров.</li>
    <li><strong>Типичные и эндемичные продукты:</strong> Здесь вы откроете для себя настоящие сокровища региона Куангнам, такие как загадочное птичье гнездо, уникальные листья лао, ароматный перец, бетель, душистая корица, различные виды чая и ценное агаровое дерево (уд).</li>
    <li><strong>Непрерывность и развитие:</strong> Этот раздел, вероятно, покажет, как местные продукты живут и развиваются в современном мире, сохраняя свои традиции.</li>
</ul>
<p>
    В музее вы увидите впечатляющую коллекцию: 130 изображений, древних документов, книг и карт, а также 178 артефактов, имеющих высокую историческую и культурную ценность. Кроме того, представлены различные модели, макеты и образцы, которые помогут вам лучше понять, как эти продукты собирались, обрабатывались и использовались.
</p>

<h6>Значение для города и его гостей</h6>
<p>
    Открытие этого музея — важное событие, которое подчеркивает сразу несколько аспектов:
</p>
<ul>
    <li><strong>Историческая роль Хойана:</strong> Оно еще раз напоминает нам, что Хойан был ключевым торговым центром, связывающим регионы и страны через специи и местные товары.</li>
    <li><strong>Богатство местного наследия:</strong> Музей ярко демонстрирует разнообразие уникальных продуктов и специй провинции Куангнам, раскрывая их ценность.</li>
    <li><strong>Развитие туризма:</strong> Это новая, привлекательная точка на туристической карте, предлагающая посетителям уникальную возможность глубже понять торговую историю и культуру региона через его вкусы и ароматы.</li>
</ul>
<p>
    Музей местных продуктов в Хойане — это ценное дополнение к культурному ландшафту города, предлагающее уникальное путешествие в гастрономическое и торговое наследие региона. Обязательно загляните и вдохните аромат истории!
</p>
    `,
      internalImageNames: ['39.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo de Productos Locales',
      description:
        'Creado para exhibir, introducir, promover y desarrollar las especias y productos locales de Hoi An.',
      fullDescription: `
<p>
    Si alguna vez soñaste con descubrir los secretos ocultos en las especias y productos locales que han hecho de Hoi An una joya del comercio durante siglos, entonces debes visitar el <strong>Museo de Productos Locales en Hoi An</strong>. Este museo nuevo pero muy importante, recientemente inaugurado, está ubicado en una de las casas antiguas en 57 Trần Phú y tiene como objetivo sumergirte en un mundo de aromas e historias.
</p>
<p>
    Creado por el Centro de Gestión y Preservación del Patrimonio Cultural de Hoi An, el museo tiene un objetivo principal: exhibir, introducir y, por supuesto, promover las especias y productos locales únicos de Hoi An y de toda la provincia de Quang Nam. Esto no es solo una exposición; es un nuevo y atractivo destino turístico que te permitirá aprender y experimentar la riqueza de la región, así como comprender la historia del bullicioso comercio que prosperó en el puerto de Hoi An desde la antigüedad hasta el día de hoy.
</p>

<h6>Temas, Artefactos y Secretos Culinarios</h6>
<p>
    El Museo de Productos Locales está muy cuidadosamente organizado en cuatro temas fascinantes que te revelarán la esencia de Hoi An:
</p>
<img src="39.jpg" alt="Museo de Productos Locales"/>
<ul>
    <li><strong>Panorama de Productos Locales:</strong> Obtendrás una comprensión general de lo que enriquece esta región.</li>
    <li><strong>Hoi An – Un Punto de Tránsito de Especias:</strong> Esta parte de la exposición destaca el papel histórico de Hoi An como un centro clave a través del cual fluían especias y otros bienes valiosos.</li>
    <li><strong>Productos Típicos y Endémicos:</strong> Aquí descubrirás los verdaderos tesoros de la región de Quang Nam, como el misterioso nido de pájaro, las hojas únicas de Lao, el aromático pimiento, la nuez de areca, la fragante canela, varios tipos de té y el valioso agarwood (oud).</li>
    <li><strong>Continuidad y Desarrollo:</strong> Esta sección probablemente mostrará cómo los productos locales viven y se desarrollan en el mundo moderno, conservando sus tradiciones.</li>
</ul>
<p>
    En el museo, verás una impresionante colección: 130 imágenes, documentos antiguos, libros y mapas, así como 178 artefactos de alto valor histórico y cultural. Además, se presentan varios modelos, maquetas y muestras para ayudarte a comprender mejor cómo se recolectaron, procesaron y utilizaron estos productos.
</p>

<h6>Significado para la Ciudad y Sus Invitados</h6>
<p>
    La apertura de este museo es un evento importante que enfatiza varios aspectos a la vez:
</p>
<ul>
    <li><strong>El Papel Histórico de Hoi An:</strong> Una vez más nos recuerda que Hoi An fue un centro comercial clave, conectando regiones y países a través de especias y productos locales.</li>
    <li><strong>Riqueza del Patrimonio Local:</strong> El museo demuestra vívidamente la diversidad de productos y especias únicos de la provincia de Quang Nam, revelando su valor.</li>
    <li><strong>Desarrollo Turístico:</strong> Este es un nuevo y atractivo punto en el mapa turístico, que ofrece a los visitantes una oportunidad única de obtener una comprensión más profunda de la historia comercial y la cultura de la región a través de sus sabores y aromas.</li>
</ul>
<p>
    El Museo de Productos Locales en Hoi An es una valiosa adición al paisaje cultural de la ciudad, ofreciendo un viaje único al patrimonio gastronómico y comercial de la región. ¡Asegúrate de pasar y respirar el aroma de la historia!
</p>
    `,
      internalImageNames: ['39.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Musée des Produits Locaux',
      description:
        'Créé pour présenter, introduire, promouvoir et développer les épices et les produits locaux de Hoi An.',
      fullDescription: `
<p>
    Si vous avez toujours rêvé de découvrir les secrets cachés dans les épices et les produits locaux qui ont fait de Hoi An un joyau du commerce pendant des siècles, alors vous devez absolument visiter le <strong>Musée des Produits Locaux à Hoi An</strong>. Ce nouveau musée, mais très important, récemment ouvert, est situé dans l'une des anciennes maisons au 57 Trần Phú et vise à vous plonger dans un monde d'arômes et d'histoires.
</p>
<p>
    Créé par le Centre de Gestion et de Préservation du Patrimoine Culturel de Hoi An, le musée a un objectif principal : présenter, introduire et, bien sûr, promouvoir les épices et les produits locaux uniques de Hoi An et de toute la province de Quang Nam. Ce n'est pas seulement une exposition ; c'est une nouvelle destination touristique attrayante qui vous permettra de découvrir et d'expérimenter la richesse de la région, ainsi que d'avoir un aperçu de l'histoire du commerce animé qui a prospéré dans le port de Hoi An depuis l'Antiquité jusqu'à nos jours.
</p>

<h6>Thèmes, Artefacts et Secrets Culinaires</h6>
<p>
    Le Musée des Produits Locaux est très soigneusement organisé en quatre thèmes fascinants qui vous révéleront l'essence de Hoi An :
</p>
<img src="39.jpg" alt="Musée des Produits Locaux"/>
<ul>
    <li><strong>Aperçu des produits locaux :</strong> Vous aurez une compréhension générale de ce qui rend cette région riche.</li>
    <li><strong>Hoi An – Un point de transit des épices :</strong> Cette partie de l'exposition met en lumière le rôle historique de Hoi An en tant que plaque tournante clé par laquelle transitaient les flux d'épices et d'autres marchandises précieuses.</li>
    <li><strong>Produits typiques et endémiques :</strong> Ici, vous découvrirez les véritables trésors de la région de Quang Nam, tels que le mystérieux nid d'oiseau, les feuilles de Lao uniques, le poivre aromatique, la noix de bétel, la cannelle parfumée, divers types de thé et le précieux bois d'agar (oud).</li>
    <li><strong>Continuité et développement :</strong> Cette section montrera probablement comment les produits locaux vivent et se développent dans le monde moderne, en préservant leurs traditions.</li>
</ul>
<p>
    Dans le musée, vous verrez une impressionnante collection : 130 images, documents anciens, livres et cartes, ainsi que 178 artefacts de grande valeur historique et culturelle. De plus, divers modèles, maquettes et échantillons sont présentés pour vous aider à mieux comprendre comment ces produits ont été collectés, traités et utilisés.
</p>

<h6>Importance pour la ville et ses visiteurs</h6>
<p>
    L'ouverture de ce musée est un événement important qui met l'accent sur plusieurs aspects à la fois :
</p>
<ul>
    <li><strong>Le rôle historique de Hoi An :</strong> Il nous rappelle une fois de plus que Hoi An était un centre commercial clé, reliant les régions et les pays grâce aux épices et aux produits locaux.</li>
    <li><strong>Richesse du patrimoine local :</strong> Le musée démontre clairement la diversité des produits et épices uniques de la province de Quang Nam, révélant leur valeur.</li>
    <li><strong>Développement touristique :</strong> C'est un nouveau point attractif sur la carte touristique, offrant aux visiteurs une occasion unique de mieux comprendre l'histoire du commerce et la culture de la région à travers ses saveurs et ses arômes.</li>
</ul>
<p>
    Le Musée des Produits Locaux à Hoi An est un ajout précieux au paysage culturel de la ville, offrant un voyage unique dans le patrimoine gastronomique et commercial de la région. N'oubliez pas de vous arrêter et de respirer l'arôme de l'histoire !
</p>
    `,
      internalImageNames: ['39.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo Tàng Sản Phẩm Địa Phương',
      description:
        'Được thành lập để giới thiệu, quảng bá và phát triển các loại gia vị và sản phẩm địa phương của Hội An.',
      fullDescription: `
<p>
    Nếu bạn từng mơ ước khám phá những bí mật ẩn chứa trong các loại gia vị và sản phẩm địa phương đã biến Hội An thành một viên ngọc quý của thương mại qua nhiều thế kỷ, thì bạn nhất định phải ghé thăm <strong>Bảo Tàng Sản Phẩm Địa Phương ở Hội An</strong>. Bảo tàng mới nhưng rất quan trọng này, vừa mới khai trương, nằm trong một trong những ngôi nhà cổ tại số 57 Trần Phú và nhằm mục đích đưa bạn đắm chìm vào thế giới của hương thơm và những câu chuyện.
</p>
<p>
    Được thành lập bởi Trung tâm Quản lý và Bảo tồn Di sản Văn hóa Hội An, bảo tàng có một mục tiêu chính: giới thiệu, quảng bá và tất nhiên, phát triển các loại gia vị và sản phẩm địa phương độc đáo của Hội An và toàn tỉnh Quảng Nam. Đây không chỉ là một cuộc triển lãm; đó là một điểm đến du lịch mới, hấp dẫn sẽ cho phép bạn tìm hiểu và trải nghiệm sự phong phú của khu vực, cũng như hiểu rõ hơn về lịch sử thương mại sầm uất đã phát triển mạnh mẽ tại cảng Hội An từ thời cổ đại đến ngày nay.
</p>

<h6>Chủ đề, hiện vật và bí mật ẩm thực</h6>
<p>
    Bảo Tàng Sản Phẩm Địa Phương được tổ chức rất chu đáo thành bốn chủ đề hấp dẫn sẽ tiết lộ bản chất của Hội An cho bạn:
</p>
<img src="39.jpg" alt="Bảo Tàng Sản Phẩm Địa Phương"/>
<ul>
    <li><strong>Tổng quan về sản phẩm địa phương:</strong> Bạn sẽ có cái nhìn tổng thể về những gì làm cho vùng này trở nên giàu có.</li>
    <li><strong>Hội An – Điểm trung chuyển gia vị:</strong> Phần triển lãm này nhấn mạnh vai trò lịch sử của Hội An là một trung tâm trung chuyển quan trọng nơi các dòng gia vị và các hàng hóa có giá trị khác đã đi qua.</li>
    <li><strong>Sản phẩm đặc trưng và đặc hữu:</strong> Tại đây, bạn sẽ khám phá những kho báu thực sự của vùng Quảng Nam, như tổ yến bí ẩn, lá Lào độc đáo, tiêu thơm, cau, quế thơm, các loại trà khác nhau và trầm hương quý giá (oud).</li>
    <li><strong>Sự liên tục và phát triển:</strong> Phần này có thể sẽ cho thấy các sản phẩm địa phương sống và phát triển như thế nào trong thế giới hiện đại, giữ gìn truyền thống của chúng.</li>
</ul>
<p>
    Trong bảo tàng, bạn sẽ thấy một bộ sưu tập ấn tượng: 130 hình ảnh, tài liệu cổ, sách và bản đồ, cũng như 178 hiện vật có giá trị lịch sử và văn hóa cao. Ngoài ra, nhiều mô hình, bố cục và mẫu vật được trưng bày để giúp bạn hiểu rõ hơn về cách các sản phẩm này được thu thập, chế biến và sử dụng.
</p>

<h6>Ý nghĩa đối với thành phố và du khách</h6>
<p>
    Việc khai trương bảo tàng này là một sự kiện quan trọng, nhấn mạnh nhiều khía cạnh cùng một lúc:
</p>
<ul>
    <li><strong>Vai trò lịch sử của Hội An:</strong> Nó một lần nữa nhắc nhở chúng ta rằng Hội An từng là một trung tâm thương mại quan trọng, kết nối các vùng và quốc gia thông qua gia vị và hàng hóa địa phương.</li>
    <li><strong>Sự phong phú của di sản địa phương:</strong> Bảo tàng minh họa sống động sự đa dạng của các sản phẩm và gia vị độc đáo từ tỉnh Quảng Nam, tiết lộ giá trị của chúng.</li>
    <li><strong>Phát triển du lịch:</strong> Đây là một điểm đến mới, hấp dẫn trên bản đồ du lịch, mang đến cho du khách cơ hội duy nhất để hiểu sâu hơn về lịch sử thương mại và văn hóa của vùng thông qua hương vị và mùi hương của nó.</li>
</ul>
<p>
    Bảo Tàng Sản Phẩm Địa Phương ở Hội An là một sự bổ sung có giá trị vào cảnh quan văn hóa của thành phố, mang đến một hành trình độc đáo vào di sản ẩm thực và thương mại của vùng. Hãy chắc chắn ghé qua và hít thở hương thơm của lịch sử!
</p>
    `,
      internalImageNames: ['39.jpg'],
    },

    slug: {
      en: 'museum-of-local-products',
      ru: 'muzey-mestnykh-produktov',
      es: 'museo-productos-locales',
      fr: 'musee-produits-locaux',
      vn: 'bao-tang-san-pham-dia-phuong',
    },
  },
  // Chinese Assembly Hall of Hoi An
  {
    id: 'trung-hoa-assembly-hall',
    coordinates: [15.877372981079134, 108.33001799930773],
    category: ['museum'], // Строго "museum"
    imageUrl: '13.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Trung Hoa Assembly Hall',
      description:
        'This is a unique hall, distinct from other Chinese assembly halls in Hoi An.',
      fullDescription: `
<p>
    Among the many ancient buildings in Hoi An, there is one that stands out with its unique appearance and special history – it's the <strong>Trung Hoa Assembly Hall (Chinese Assembly Hall of Hoi An)</strong>, also known as the Ngũ Bang Assembly Hall. Located at 64 Trần Phú, it is not just beautiful, but also holds deep meaning.
</p>
<p>
    Built in 1741, this hall was special. Unlike others that belonged to specific regional Chinese communities (Fujian, Cantonese, Hainan), the Ngũ Bang Assembly Hall was created as a common center for Chinese immigrants from <strong>five main groups</strong>: Cantonese, Teochew, Hainanese, Fujian, and Jiaying (Hakka). Its name "Ngũ Bang" literally means "Five Groups" or "Five Provinces," perfectly reflecting its purpose – to unite the Chinese diaspora in Hoi An, regardless of their origin. Meetings, religious ceremonies, and community events were held here, and according to some sources, children from Chinese families were even taught here, maintaining their language and culture far from their homeland.
</p>

<h6>Unique Blue Color and Harmonious Architecture</h6>
<p>
    The Chinese Assembly Hall of Hoi An impresses with its unique architecture and, of course, its color palette. It is the only assembly hall in Hoi An painted in a vibrant blue color, which immediately sets it apart from other predominantly red buildings. The blue walls give it a special uniqueness and photogenic quality!
</p>
<p>
    Its layout is carefully balanced and includes all traditional elements:
</p>
<ul>
    <li>You'll be greeted by grand entrance gates that seem to invite you inside.</li>
    <li>Inside, you'll find a spacious front courtyard leading to the front hall, followed by another inner courtyard and a pavilion.</li>
    <li>The main hall takes center stage, where the main worship ceremonies took place.</li>
    <li>On the sides are the east and west halls, which were used for various community needs.</li>
</ul>
<p>
    The entire hall is adorned with intricate carvings, decorative altars, and vibrant paintings. You'll see beautifully sculpted dragons and phoenixes – symbols of strength and prosperity in Chinese culture. The design uses a combination of wood and stone, showcasing the elegance of traditional Chinese craftsmanship.
</p>

<h6>Symbol of Unity and Cultural Preservation</h6>
<p>
    The Trung Hoa Assembly Hall is more than just a beautiful building. It is a powerful symbol of unity and mutual support among the various Chinese communities that contributed greatly to Hoi An's prosperity as a trading port. Various Chinese deities revered by all communities, such as Thien Hau (Mother Goddess of the Sea), Confucius, and other common gods bringing good luck and prosperity, could be worshiped in the hall. Its role in preserving the Chinese language and culture for the diaspora's children makes it particularly valuable.
</p>
<p>
    The Chinese Assembly Hall of Hoi An is not only an architectural masterpiece with a unique blue color, but also an important historical monument reflecting the cohesion and rich cultural heritage of the Chinese diaspora in Hoi An Ancient Town. Be sure to stop by and feel this special atmosphere!
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Ensure these images are relevant if they are for a different place. If not, update or remove.
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Сборный зал Чжун Хуа',
      description:
        'Это уникальный зал, отличающийся от других китайских сборных залов в Хойане.',
      fullDescription: `
<p>
    Среди множества древних строений Хойана есть одно, которое выделяется своим уникальным обликом и особой историей – это <strong>Сборный зал Чжун Хуа (Китайский Сборный зал Хойана)</strong>, известный также как Сборный зал Нгу Банг. Расположенный по адресу 64 Trần Phú, он не просто красив, но и обладает глубоким смыслом.
</p>
<p>
    Построенный в 1741 году, этот зал был особенным. В отличие от других, принадлежавших конкретным региональным китайским общинам (Фуцзянь, Кантон, Хайнань), Сборный зал Нгу Банг был создан как общий центр для китайских иммигрантов из <strong>пяти основных групп</strong>: кантонцев, чаошаньцев, хайнаньцев, фуцзяньцев и цзяинцев (хакка). Его название «Нгу Банг» буквально означает «Пять групп» или «Пять провинций», что прекрасно отражает его цель – объединить китайскую диаспору в Хойане, независимо от их происхождения. Здесь проводились собрания, религиозные церемонии и общественные мероприятия, а по некоторым данным, здесь даже обучали детей из китайских семей, поддерживая их язык и культуру вдали от родины.
</p>

<h6>Уникальный синий цвет и гармоничная архитектура</h6>
<p>
    Китайский Сборный зал Хойана впечатляет своей уникальной архитектурой и, конечно же, цветовой палитрой. Это единственный сборный зал в Хойане, выкрашенный в яркий синий цвет, что сразу выделяет его среди других преимущественно красных зданий. Синие стены придают ему особую уникальность и фотогеничность!
</p>
<p>
    Его планировка тщательно сбалансирована и включает все традиционные элементы:
</p>
<ul>
    <li>Вас встретят величественные входные ворота, которые словно приглашают внутрь.</li>
    <li>Внутри вы найдете просторный передний двор, ведущий к переднему залу, за которым следуют еще один внутренний двор и павильон.</li>
    <li>Главный зал занимает центральное место, где проводились основные церемонии поклонения.</li>
    <li>По бокам расположены восточный и западный залы, которые использовались для различных общественных нужд.</li>
</ul>
<p>
    Весь зал украшен замысловатой резьбой, декоративными алтарями и яркими росписями. Вы увидите прекрасно вылепленных драконов и фениксов – символы силы и процветания в китайской культуре. В дизайне используется сочетание дерева и камня, демонстрируя элегантность традиционного китайского мастерства.
</p>

<h6>Символ единства и сохранения культуры</h6>
<p>
    Сборный зал Чжун Хуа — это больше, чем просто красивое здание. Это мощный символ единства и взаимопомощи различных китайских общин, которые внесли большой вклад в процветание Хойана как торгового порта. В зале могли поклоняться различным китайским божествам, почитаемым всеми общинами, таким как Тхиен Хау (Мать-Богиня Моря), Конфуций и другие общие боги, приносящие удачу и процветание. Его роль в сохранении китайского языка и культуры для детей диаспоры делает его особенно ценным.
</p>
<p>
    Китайский Сборный зал Хойана — это не только архитектурный шедевр с уникальным синим цветом, но и важный исторический памятник, отражающий сплоченность и богатое культурное наследие китайской диаспоры в Древнем городе Хойан. Обязательно загляните и почувствуйте эту особенную атмосферу!
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Sala de Asamblea Trung Hoa',
      description:
        'Esta es una sala única, distinta de otras salas de asamblea chinas en Hoi An.',
      fullDescription: `
<p>
    Entre los muchos edificios antiguos de Hoi An, hay uno que destaca por su apariencia única y su historia especial: es la <strong>Sala de Asamblea Trung Hoa (Sala de Asamblea China de Hoi An)</strong>, también conocida como la Sala de Asamblea Ngũ Bang. Ubicada en 64 Trần Phú, no solo es hermosa, sino que también tiene un profundo significado.
</p>
<p>
    Construida en 1741, esta sala era especial. A diferencia de otras que pertenecían a comunidades chinas regionales específicas (Fujian, Cantón, Hainan), la Sala de Asamblea Ngũ Bang fue creada como un centro común para inmigrantes chinos de <strong>cinco grupos principales</strong>: Cantoneses, Teochew, Hainaneses, Fujian y Jiaying (Hakka). Su nombre "Ngũ Bang" significa literalmente "Cinco Grupos" o "Cinco Provincias", reflejando perfectamente su propósito: unir a la diáspora china en Hoi An, independientemente de su origen. Aquí se celebraban reuniones, ceremonias religiosas y eventos comunitarios, y según algunas fuentes, incluso se enseñaba a los niños de familias chinas, manteniendo su idioma y cultura lejos de su tierra natal.
</p>

<h6>Color Azul Único y Arquitectura Armoniosa</h6>
<p>
    La Sala de Asamblea China de Hoi An impresiona por su arquitectura única y, por supuesto, su paleta de colores. Es la única sala de asamblea en Hoi An pintada en un vibrante color azul, lo que la distingue inmediatamente de otros edificios predominantemente rojos. ¡Las paredes azules le dan una singularidad y calidad fotogénica especiales!
</p>
<p>
    Su diseño está cuidadosamente equilibrado e incluye todos los elementos tradicionales:
</p>
<ul>
    <li>Serás recibido por grandes puertas de entrada que parecen invitarte al interior.</li>
    <li>Dentro, encontrarás un espacioso patio delantero que conduce al vestíbulo principal, seguido de otro patio interior y un pabellón.</li>
    <li>La sala principal ocupa un lugar central, donde se llevaban a cabo las principales ceremonias de culto.</li>
    <li>A los lados se encuentran las salas este y oeste, que se utilizaban para diversas necesidades comunitarias.</li>
</ul>
<p>
    Toda la sala está adornada con intrincadas tallas, altares decorativos y vibrantes pinturas. Verás dragones y fénix bellamente esculpidos, símbolos de fuerza y prosperidad en la cultura china. El diseño utiliza una combinación de madera y piedra, mostrando la elegancia de la artesanía tradicional china.
</p>

<h6>Símbolo de Unidad y Preservación Cultural</h6>
<p>
    La Sala de Asamblea Trung Hoa es más que un hermoso edificio. Es un poderoso símbolo de unidad y apoyo mutuo entre las diversas comunidades chinas que contribuyeron en gran medida a la prosperidad de Hoi An como puerto comercial. En la sala se podían adorar varias deidades chinas veneradas por todas las comunidades, como Thien Hau (Diosa Madre del Mar), Confucio y otros dioses comunes que traen buena suerte y prosperidad. Su papel en la preservación del idioma y la cultura chinos para los niños de la diáspora la hace particularmente valiosa.
</p>
<p>
    La Sala de Asamblea China de Hoi An no es solo una obra maestra arquitectónica con un color azul único, sino también un importante monumento histórico que refleja la cohesión y el rico patrimonio cultural de la diáspora china en el Casco Antiguo de Hoi An. ¡Asegúrate de pasar y sentir esta atmósfera especial!
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Salle de l'Assemblée Trung Hoa",
      description:
        "C'est une salle unique, distincte des autres salles d'assemblée chinoises à Hoi An.",
      fullDescription: `
<p>
    Parmi les nombreux bâtiments anciens de Hoi An, il en est un qui se distingue par son apparence unique et son histoire particulière – c'est la <strong>Salle de l'Assemblée Trung Hoa (Salle de l'Assemblée chinoise de Hoi An)</strong>, également connue sous le nom de Salle de l'Assemblée Ngũ Bang. Située au 64 Trần Phú, elle n'est pas seulement belle, mais revêt également une signification profonde.
</p>
<p>
    Construite en 1741, cette salle était spéciale. Contrairement à d'autres qui appartenaient à des communautés chinoises régionales spécifiques (Fujian, Canton, Hainan), la Salle de l'Assemblée Ngũ Bang a été créée comme un centre commun pour les immigrants chinois des <strong>cinq groupes principaux</strong> : Cantonais, Teochew, Hainanais, Fujian et Jiaying (Hakka). Son nom « Ngũ Bang » signifie littéralement « Cinq Groupes » ou « Cinq Provinces », reflétant parfaitement son objectif – unir la diaspora chinoise à Hoi An, quelle que soit son origine. Des réunions, des cérémonies religieuses et des événements communautaires y étaient organisés, et selon certaines sources, les enfants des familles chinoises y étaient même enseignés, maintenant leur langue et leur culture loin de leur patrie.
</p>

<h6>Couleur bleue unique et architecture harmonieuse</h6>
<p>
    La Salle de l'Assemblée chinoise de Hoi An impressionne par son architecture unique et, bien sûr, sa palette de couleurs. C'est la seule salle d'assemblée de Hoi An peinte d'un bleu éclatant, ce qui la distingue immédiatement des autres bâtiments majoritairement rouges. Les murs bleus lui confèrent une singularité et une qualité photogénique particulières !
</p>
<p>
    Son agencement est soigneusement équilibré et comprend tous les éléments traditionnels :
</p>
<ul>
    <li>Vous serez accueillis par de grandes portes d'entrée qui semblent vous inviter à l'intérieur.</li>
    <li>À l'intérieur, vous trouverez une spacieuse cour avant menant au hall d'entrée, suivie d'une autre cour intérieure et d'un pavillon.</li>
    <li>Le hall principal occupe une place centrale, où se déroulaient les principales cérémonies de culte.</li>
    <li>Sur les côtés se trouvent les halls est et ouest, qui étaient utilisés pour divers besoins communautaires.</li>
</ul>
<p>
    L'ensemble du hall est orné de sculptures complexes, d'autels décoratifs et de peintures vibrantes. Vous verrez de magnifiques dragons et phénix sculptés – symboles de force et de prospérité dans la culture chinoise. Le design utilise une combinaison de bois et de pierre, mettant en valeur l'élégance de l'artisanat chinois traditionnel.
</p>

<h6>Symbole d'unité et de préservation culturelle</h6>
<p>
    La Salle de l'Assemblée Trung Hoa est plus qu'un simple bâtiment magnifique. C'est un puissant symbole d'unité et de soutien mutuel entre les diverses communautés chinoises qui ont grandement contribué à la prospérité de Hoi An en tant que port de commerce. Diverses divinités chinoises vénérées par toutes les communautés, telles que Thien Hau (Déesse Mère de la Mer), Confucius et d'autres dieux communs apportant chance et prospérité, pouvaient être vénérées dans le hall. Son rôle dans la préservation de la langue et de la culture chinoises pour les enfants de la diaspora la rend particulièrement précieuse.
</p>
<p>
    La Salle de l'Assemblée chinoise de Hoi An n'est pas seulement un chef-d'œuvre architectural d'une couleur bleue unique, mais aussi un monument historique important reflétant la cohésion et le riche patrimoine culturel de la diaspora chinoise dans la vieille ville de Hoi An. N'oubliez pas de vous arrêter et de ressentir cette atmosphère spéciale !
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Hội Quán Trung Hoa',
      description:
        'Đây là một hội quán độc đáo, khác biệt so với các hội quán Trung Quốc khác ở Hội An.',
      fullDescription: `
<p>
    Trong số rất nhiều công trình kiến trúc cổ kính ở Hội An, có một nơi nổi bật với vẻ ngoài độc đáo và lịch sử đặc biệt – đó là <strong>Hội Quán Trung Hoa (Chinese Assembly Hall of Hoi An)</strong>, còn được gọi là Ngũ Bang Hội Quán. Nằm ở số 64 Trần Phú, nơi đây không chỉ đẹp mà còn mang ý nghĩa sâu sắc.
</p>
<p>
    Được xây dựng vào năm 1741, hội quán này rất đặc biệt. Không giống như các hội quán khác thuộc về các cộng đồng người Hoa cụ thể (Phúc Kiến, Quảng Đông, Hải Nam), Ngũ Bang Hội Quán được thành lập như một trung tâm chung cho những người Hoa nhập cư từ <strong>năm nhóm chính</strong>: Quảng Đông, Triều Châu, Hải Nam, Phúc Kiến và Gia Ứng (Khách Gia). Tên gọi "Ngũ Bang" theo nghĩa đen có nghĩa là "Năm Bang" hoặc "Năm Tỉnh", phản ánh hoàn hảo mục đích của nó – đoàn kết cộng đồng người Hoa tại Hội An, bất kể nguồn gốc của họ. Các cuộc họp, nghi lễ tôn giáo và sự kiện cộng đồng được tổ chức tại đây, và theo một số nguồn, trẻ em từ các gia đình người Hoa thậm chí còn được dạy học ở đây, duy trì ngôn ngữ và văn hóa của họ cách xa quê hương.
</p>

<h6>Màu xanh độc đáo và kiến trúc hài hòa</h6>
<p>
    Hội Quán Trung Hoa ở Hội An gây ấn tượng với kiến trúc độc đáo và, tất nhiên, bảng màu của nó. Đây là hội quán duy nhất ở Hội An được sơn màu xanh lam rực rỡ, điều này ngay lập tức làm nó nổi bật so với các công trình chủ yếu màu đỏ khác. Những bức tường màu xanh lam mang lại cho nó một nét độc đáo và tính thẩm mỹ đặc biệt!
</p>
<p>
    Bố cục của nó được cân bằng cẩn thận và bao gồm tất cả các yếu tố truyền thống:
</p>
<ul>
    <li>Bạn sẽ được chào đón bởi những cổng vào lớn dường như mời bạn vào bên trong.</li>
    <li>Bên trong, bạn sẽ tìm thấy một sân trước rộng rãi dẫn đến sảnh chính, tiếp theo là một sân trong khác và một gian thờ.</li>
    <li>Sảnh chính chiếm vị trí trung tâm, nơi diễn ra các nghi lễ thờ cúng chính.</li>
    <li>Ở hai bên là các sảnh đông và tây, được sử dụng cho các nhu cầu cộng đồng khác nhau.</li>
</ul>
<p>
    Toàn bộ hội quán được trang trí bằng những chạm khắc tinh xảo, bàn thờ trang trí và những bức tranh rực rỡ. Bạn sẽ thấy những con rồng và phượng hoàng được điêu khắc đẹp mắt – biểu tượng của sức mạnh và sự thịnh vượng trong văn hóa Trung Quốc. Thiết kế sử dụng sự kết hợp giữa gỗ và đá, thể hiện sự sang trọng của nghề thủ công truyền thống Trung Quốc.
</p>

<h6>Biểu tượng của sự đoàn kết và bảo tồn văn hóa</h6>
<p>
    Hội Quán Trung Hoa không chỉ là một công trình kiến trúc đẹp. Đó là một biểu tượng mạnh mẽ của sự đoàn kết và hỗ trợ lẫn nhau giữa các cộng đồng người Hoa khác nhau đã đóng góp rất lớn vào sự thịnh vượng của Hội An với tư cách là một thương cảng. Các vị thần Trung Quốc khác nhau được tất cả các cộng đồng tôn thờ, chẳng hạn như Thiên Hậu (Mẫu Thiên Hậu), Khổng Tử và các vị thần chung khác mang lại may mắn và thịnh vượng, có thể được thờ cúng trong hội quán. Vai trò của nó trong việc bảo tồn tiếng Trung và văn hóa cho con cháu của cộng đồng người Hoa khiến nó trở nên đặc biệt có giá trị.
</p>
<p>
    Hội Quán Trung Hoa ở Hội An không chỉ là một kiệt tác kiến trúc với màu xanh độc đáo, mà còn là một di tích lịch sử quan trọng phản ánh sự gắn kết và di sản văn hóa phong phú của cộng đồng người Hoa ở Phố cổ Hội An. Hãy chắc chắn ghé thăm và cảm nhận bầu không khí đặc biệt này!
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    slug: {
      en: 'trung-hoa-assembly-hall',
      ru: 'sbornyy-zal-trung-hoa',
      es: 'sala-asamblea-trung-hoa',
      fr: 'salle-assemblee-trung-hoa',
      vn: 'hoi-quan-trung-hoa',
    },
  },
  // Fujian Assembly Hall
  {
    id: 'fujian-assembly-hall',
    coordinates: [15.877479589047237, 108.33062773730362],
    category: ['museum'], // Строго "museum"
    imageUrl: '14.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Fujian Assembly Hall',
      description:
        'Originally a small shrine built by the Vietnamese around 1690.',
      fullDescription: `
<p>
    If you want to see the most vibrant and richly decorated Chinese assembly hall in Hoi An, then your path leads to the <strong>Fujian Assembly Hall (Hội Quán Phước Kiến)</strong>. This is not just a temple; it's a true work of art and a living testament to the prosperity of the Chinese community that played a huge role in Hoi An's establishment as a trading port.
</p>
<p>
    Originally a small shrine built by the Vietnamese around 1690, it was acquired and rebuilt by the influential Chinese community from Fujian province in the late 17th century, making it their main center. Since then, it has been dedicated to <strong>Thien Hau</strong>, the Mother Goddess of the Sea, who is known to protect sailors and merchants. This explains why this hall was so important to Fujian merchants arriving in Hoi An across turbulent seas. The hall has been expanded and restored numerous times, which only emphasizes the power and wealth of this community.
</p>

<h6>Architectural Grandeur and Symbols of Prosperity</h6>
<p>
    The Fujian Assembly Hall impresses with its beauty and traditional Chinese architecture with a strong influence of the Fujian style. The complex has a classic temple structure that will lead you through a series of impressive spaces:
</p>
<ul>
    <li>You'll be greeted by grand Main Gates with three entrances, adorned with intricate carvings and statues.</li>
    <li>Beyond the gates is a spacious Front Courtyard with a fountain and decorative elements – an ideal place to begin your exploration of the hall.</li>
    <li>Next, you'll enter the Main Hall, where the main altar to the Goddess Thien Hau is located. Her statue, often surrounded by other deities, dominates the space.</li>
    <li>The complex also includes a Rear Hall, dedicated to other deities and ancestors, and Side Rooms, which were used for various community needs.</li>
</ul>
<p>
    The entire building is constructed of wood and stone, with a traditional tiled roof. The interior is literally immersed in bright colors, lacquered pieces, exquisite wood and stone carvings, as well as ceramic statues and mosaics. You'll see incredibly detailed carvings depicting dragons, phoenixes, unicorns, lions, flowers, fruits, and scenes from Chinese mythology and history. The predominant colors – red and gold – are no coincidence; they symbolize good luck and prosperity.
</p>

<h6>Unique Details and Cultural Significance</h6>
<p>
    Among other things, the Fujian Assembly Hall has several unique details:
</p>
<ul>
    <li>You'll find many statues depicting deities, mythical creatures, and historical figures. Particularly noteworthy are the statues of the six ancestors of the Tran family, who made significant contributions to the hall's construction.</li>
    <li>A unique feature is the rooms designated for mothers giving birth, reflecting the belief in Thien Hau as a protector of women and children.</li>
</ul>
<p>
    This hall remains an important place of worship not only for the Fujian Chinese community but also for many local Vietnamese people to this day. Traditional holidays and festivals are held here, showcasing the rich culture and traditions of Fujian.
</p>
<p>
    The Fujian Assembly Hall is not only an architectural masterpiece but also a living testament to the history of the Chinese community in Hoi An, its immense contribution to the city's development, and the careful preservation of cultural traditions. Its visit is a must for those who want to truly understand the multifaceted heritage of Hoi An Ancient Town.
</p>
    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Ensure these images are relevant if they are for a different place. If not, update or remove.
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Сборный зал Фуцзянь',
      description:
        'Изначально небольшое святилище, построенное вьетнамцами около 1690 года.',
      fullDescription: `
<p>
    Если вы хотите увидеть самый яркий и богато украшенный китайский сборный зал в Хойане, то ваш путь лежит к <strong>Сборному залу Фуцзянь (Hội Quán Phước Kiến)</strong>. Это не просто храм; это настоящее произведение искусства и живое свидетельство процветания китайской общины, которая сыграла огромную роль в становлении Хойана как торгового порта.
</p>
<p>
    Изначально небольшое святилище, построенное вьетнамцами около 1690 года, оно было приобретено и перестроено влиятельной китайской общиной из провинции Фуцзянь в конце XVII века, став их главным центром. С тех пор оно посвящено <strong>Тхиен Хау</strong>, Богине-Матери Моря, которая, как известно, защищает моряков и торговцев. Это объясняет, почему этот зал был так важен для фуцзяньских купцов, прибывавших в Хойан через бурные моря. Зал неоднократно расширялся и реставрировался, что лишь подчеркивает мощь и богатство этой общины.
</p>

<h6>Архитектурное великолепие и символы процветания</h6>
<p>
    Сборный зал Фуцзянь впечатляет своей красотой и традиционной китайской архитектурой с сильным влиянием фуцзяньского стиля. Комплекс имеет классическую храмовую структуру, которая проведет вас через ряд впечатляющих пространств:
</p>
<ul>
    <li>Вас встретят величественные Главные Ворота с тремя входами, украшенные замысловатой резьбой и статуями.</li>
    <li>За воротами находится просторный Передний Двор с фонтаном и декоративными элементами – идеальное место для начала знакомства с залом.</li>
    <li>Далее вы войдете в Главный Зал, где расположен главный алтарь Богини Тхиен Хау. Ее статуя, часто окруженная другими божествами, доминирует в пространстве.</li>
    <li>Комплекс также включает Задний Зал, посвященный другим божествам и предкам, и Боковые Комнаты, которые использовались для различных общественных нужд.</li>
</ul>
<p>
    Все здание построено из дерева и камня, с традиционной черепичной крышей. Интерьер буквально утопает в ярких цветах, лакированных изделиях, изысканной резьбе по дереву и камню, а также керамических статуэтках и мозаиках. Вы увидите невероятно детализированные резные изображения драконов, фениксов, единорогов, львов, цветов, фруктов и сцен из китайской мифологии и истории. Преобладающие цвета – красный и золотой – не случайны; они символизируют удачу и процветание.
</p>

<h6>Уникальные детали и культурное значение</h6>
<p>
    Помимо прочего, Сборный зал Фуцзянь имеет несколько уникальных деталей:
</p>
<ul>
    <li>Вы найдете множество статуй, изображающих божеств, мифических существ и исторических личностей. Особого внимания заслуживают статуи шести предков семьи Чан, которые внесли значительный вклад в строительство зала.</li>
    <li>Уникальной особенностью являются комнаты, предназначенные для рожениц, что отражает веру в Тхиен Хау как защитницу женщин и детей.</li>
</ul>
<p>
    Этот зал до сих пор остается важным местом поклонения не только для китайской общины Фуцзянь, но и для многих местных вьетнамцев. Здесь проводятся традиционные праздники и фестивали, демонстрирующие богатую культуру и традиции Фуцзянь.
</p>
<p>
    Сборный зал Фуцзянь – это не только архитектурный шедевр, но и живое свидетельство истории китайской общины в Хойане, ее огромного вклада в развитие города и бережного сохранения культурных традиций. Его посещение обязательно для тех, кто хочет по-настоящему понять многогранное наследие Древнего города Хойан.
</p>
    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Sala de Asamblea Fujian',
      description:
        'Originalmente un pequeño santuario construido por los vietnamitas alrededor de 1690.',
      fullDescription: `
<p>
    Si quieres ver la sala de asamblea china más vibrante y ricamente decorada en Hoi An, entonces tu camino te lleva a la <strong>Sala de Asamblea Fujian (Hội Quán Phước Kiến)</strong>. Esto no es solo un templo; es una verdadera obra de arte y un testimonio vivo de la prosperidad de la comunidad china que desempeñó un papel enorme en el establecimiento de Hoi An como puerto comercial.
</p>
<p>
    Originalmente un pequeño santuario construido por los vietnamitas alrededor de 1690, fue adquirido y reconstruido por la influyente comunidad china de la provincia de Fujian a finales del siglo XVII, convirtiéndolo en su centro principal. Desde entonces, ha estado dedicado a <strong>Thien Hau</strong>, la Diosa Madre del Mar, conocida por proteger a marineros y comerciantes. Esto explica por qué esta sala era tan importante para los comerciantes de Fujian que llegaban a Hoi An a través de mares turbulentos. La sala ha sido ampliada y restaurada numerosas veces, lo que solo enfatiza el poder y la riqueza de esta comunidad.
</p>

<h6>Grandeza Arquitectónica y Símbolos de Prosperidad</h6>
<p>
    La Sala de Asamblea Fujian impresiona por su belleza y arquitectura tradicional china con una fuerte influencia del estilo Fujian. El complejo tiene una estructura de templo clásica que te llevará a través de una serie de espacios impresionantes:
</p>
<ul>
    <li>Serás recibido por las grandes Puertas Principales con tres entradas, adornadas con intrincadas tallas y estatuas.</li>
    <li>Más allá de las puertas hay un espacioso Patio Delantero con una fuente y elementos decorativos – un lugar ideal para comenzar tu exploración de la sala.</li>
    <li>Luego, entrarás a la Sala Principal, donde se encuentra el altar principal a la Diosa Thien Hau. Su estatua, a menudo rodeada de otras deidades, domina el espacio.</li>
    <li>El complejo también incluye una Sala Trasera, dedicada a otras deidades y ancestros, y Salas Laterales, que se utilizaban para diversas necesidades comunitarias.</li>
</ul>
<p>
    Todo el edificio está construido de madera y piedra, con un tejado de tejas tradicional. El interior está literalmente inmerso en colores brillantes, piezas lacadas, exquisitas tallas de madera y piedra, así como estatuas y mosaicos de cerámica. Verás tallas increíblemente detalladas que representan dragones, fénix, unicornios, leones, flores, frutas y escenas de la mitología e historia chinas. Los colores predominantes – rojo y dorado – no son una coincidencia; simbolizan la buena suerte y la prosperidad.
</p>

<h6>Detalles Únicos y Significado Cultural</h6>
<p>
    Entre otras cosas, la Sala de Asamblea Fujian tiene varios detalles únicos:
</p>
<ul>
    <li>Encontrarás muchas estatuas que representan deidades, criaturas míticas y figuras históricas. Destacan particularmente las estatuas de los seis ancestros de la familia Tran, quienes hicieron contribuciones significativas a la construcción de la sala.</li>
    <li>Una característica única son las habitaciones designadas para las madres que dan a luz, lo que refleja la creencia en Thien Hau como protectora de mujeres y niños.</li>
</ul>
<p>
    Esta sala sigue siendo un importante lugar de culto no solo para la comunidad china de Fujian, sino también para muchos vietnamitas locales hasta el día de hoy. Aquí se celebran fiestas y festivales tradicionales, mostrando la rica cultura y tradiciones de Fujian.
</p>
<p>
    La Sala de Asamblea Fujian no es solo una obra maestra arquitectónica, sino también un testimonio vivo de la historia de la comunidad china en Hoi An, su inmensa contribución al desarrollo de la ciudad y la cuidadosa preservación de las tradiciones culturales. Su visita es obligatoria para aquellos que quieran comprender verdaderamente el patrimonio multifacético del Casco Antiguo de Hoi An.
</p>
    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Salle de l'Assemblée de Fujian",
      description:
        "À l'origine un petit sanctuaire construit par les Vietnamiens vers 1690.",
      fullDescription: `
<p>
    Si vous voulez voir la salle d'assemblée chinoise la plus vibrante et richement décorée de Hoi An, alors votre chemin mène à la <strong>Salle de l'Assemblée de Fujian (Hội Quán Phước Kiến)</strong>. Ce n'est pas seulement un temple ; c'est une véritable œuvre d'art et un témoignage vivant de la prospérité de la communauté chinoise qui a joué un rôle énorme dans l'établissement de Hoi An comme port de commerce.
</p>
<p>
    À l'origine un petit sanctuaire construit par les Vietnamiens vers 1690, il a été acquis et reconstruit par l'influente communauté chinoise de la province de Fujian à la fin du XVIIe siècle, en faisant leur centre principal. Depuis lors, il est dédié à <strong>Thien Hau</strong>, la Déesse Mère de la Mer, qui est connue pour protéger les marins et les marchands. Cela explique pourquoi cette salle était si importante pour les marchands de Fujian arrivant à Hoi An à travers des mers tumultueuses. La salle a été agrandie et restaurée de nombreuses fois, ce qui ne fait que souligner le pouvoir et la richesse de cette communauté.
</p>

<h6>Grandeur architecturale et symboles de prospérité</h6>
<p>
    La Salle de l'Assemblée de Fujian impressionne par sa beauté et son architecture chinoise traditionnelle avec une forte influence du style Fujian. Le complexe a une structure de temple classique qui vous guidera à travers une série d'espaces impressionnants :
</p>
<ul>
    <li>Vous serez accueillis par de grandes Portes Principales à trois entrées, ornées de sculptures complexes et de statues.</li>
    <li>Au-delà des portes se trouve une spacieuse Cour Avant avec une fontaine et des éléments décoratifs – un endroit idéal pour commencer votre exploration de la salle.</li>
    <li>Ensuite, vous entrerez dans le Hall Principal, où se trouve l'autel principal de la Déesse Thien Hau. Sa statue, souvent entourée d'autres divinités, domine l'espace.</li>
    <li>Le complexe comprend également un Hall Arrière, dédié à d'autres divinités et ancêtres, et des Chambres Latérales, qui étaient utilisées pour divers besoins communautaires.</li>
</ul>
<p>
    Tout le bâtiment est construit en bois et en pierre, avec un toit de tuiles traditionnel. L'intérieur est littéralement immergé dans des couleurs vives, des pièces laquées, des sculptures exquises sur bois et pierre, ainsi que des statues et mosaïques en céramique. Vous verrez des sculptures incroyablement détaillées représentant des dragons, des phénix, des licornes, des lions, des fleurs, des fruits et des scènes de la mythologie et de l'histoire chinoises. Les couleurs prédominantes – rouge et or – ne sont pas un hasard ; elles symbolisent la chance et la prospérité.
</p>

<h6>Détails uniques et signification culturelle</h6>
<p>
    Entre autres choses, la Salle de l'Assemblée de Fujian présente plusieurs détails uniques :
</p>
<ul>
    <li>Vous trouverez de nombreuses statues représentant des divinités, des créatures mythiques et des figures historiques. Les statues des six ancêtres de la famille Tran, qui ont apporté une contribution significative à la construction de la salle, sont particulièrement remarquables.</li>
    <li>Une caractéristique unique est les pièces désignées pour les mères qui accouchent, reflétant la croyance en Thien Hau comme protectrice des femmes et des enfants.</li>
</ul>
<p>
    Cette salle reste un lieu de culte important non seulement pour la communauté chinoise de Fujian, mais aussi pour de nombreux Vietnamiens locaux à ce jour. Des fêtes et festivals traditionnels y sont organisés, mettant en valeur la richesse de la culture et des traditions de Fujian.
</p>
<p>
    La Salle de l'Assemblée de Fujian n'est pas seulement un chef-d'œuvre architectural, mais aussi un témoignage vivant de l'histoire de la communauté chinoise à Hoi An, de son immense contribution au développement de la ville et de la préservation minutieuse des traditions culturelles. Sa visite est un incontournable pour ceux qui veulent vraiment comprendre le patrimoine multiforme de la Vieille Ville de Hoi An.
</p>
    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Hội Quán Phúc Kiến',
      description:
        'Ban đầu là một ngôi miếu nhỏ được người Việt xây dựng khoảng năm 1690.',
      fullDescription: `
<p>
    Nếu bạn muốn chiêm ngưỡng hội quán Trung Quốc rực rỡ và trang trí phong phú nhất ở Hội An, thì con đường của bạn dẫn đến <strong>Hội Quán Phúc Kiến (Hội Quán Phúc Kiến)</strong>. Đây không chỉ là một ngôi đền; đó là một tác phẩm nghệ thuật thực sự và là minh chứng sống động cho sự thịnh vượng của cộng đồng người Hoa đã đóng góp to lớn vào việc hình thành Hội An thành một thương cảng.
</p>
<p>
    Ban đầu là một ngôi miếu nhỏ được người Việt xây dựng khoảng năm 1690, nó đã được cộng đồng người Hoa có ảnh hưởng từ tỉnh Phúc Kiến mua lại và xây dựng lại vào cuối thế kỷ 17, biến nó thành trung tâm chính của họ. Kể từ đó, nó đã được dành riêng cho <strong>Thiên Hậu</strong>, Thiên Hậu Thánh Mẫu, người được biết đến là bảo vệ các thủy thủ và thương nhân. Điều này giải thích tại sao hội quán này lại rất quan trọng đối với các thương nhân Phúc Kiến đến Hội An vượt qua những vùng biển đầy sóng gió. Hội quán đã được mở rộng và phục hồi nhiều lần, điều này chỉ nhấn mạnh sức mạnh và sự giàu có của cộng đồng này.
</p>

<h6>Kiến trúc tráng lệ và biểu tượng của sự thịnh vượng</h6>
<p>
    Hội Quán Phúc Kiến gây ấn tượng với vẻ đẹp và kiến trúc truyền thống Trung Quốc với ảnh hưởng mạnh mẽ của phong cách Phúc Kiến. Khu phức hợp có cấu trúc đền thờ cổ điển sẽ dẫn bạn qua một loạt các không gian ấn tượng:
</p>
<ul>
    <li>Bạn sẽ được chào đón bởi Cổng Chính lớn với ba lối vào, được trang trí bằng những chạm khắc và tượng tinh xảo.</li>
    <li>Bên ngoài cổng là một Sân Trước rộng rãi với đài phun nước và các yếu tố trang trí – một nơi lý tưởng để bắt đầu khám phá hội quán.</li>
    <li>Tiếp theo, bạn sẽ vào Chính Điện, nơi đặt bàn thờ chính thờ Thiên Hậu Thánh Mẫu. Tượng của bà, thường được bao quanh bởi các vị thần khác, chiếm ưu thế trong không gian.</li>
    <li>Khu phức hợp cũng bao gồm Hậu Điện, dành riêng cho các vị thần và tổ tiên khác, và các Phòng Phụ, được sử dụng cho các nhu cầu cộng đồng khác nhau.</li>
</ul>
<p>
    Toàn bộ tòa nhà được xây dựng bằng gỗ và đá, với mái ngói truyền thống. Nội thất được trang trí rực rỡ với các tác phẩm sơn mài, chạm khắc gỗ và đá tinh xảo, cũng như các bức tượng gốm và tranh ghép. Bạn sẽ thấy những chạm khắc vô cùng chi tiết miêu tả rồng, phượng hoàng, kỳ lân, sư tử, hoa, trái cây và các cảnh trong thần thoại và lịch sử Trung Quốc. Các màu sắc chủ đạo – đỏ và vàng – không phải ngẫu nhiên; chúng tượng trưng cho may mắn và thịnh vượng.
</p>

<h6>Chi tiết độc đáo và ý nghĩa văn hóa</h6>
<p>
    Trong số những điều khác, Hội Quán Phúc Kiến có một số chi tiết độc đáo:
</p>
<ul>
    <li>Bạn sẽ tìm thấy nhiều bức tượng mô tả các vị thần, sinh vật thần thoại và nhân vật lịch sử. Đặc biệt đáng chú ý là các bức tượng sáu tổ của gia đình Trần, những người đã có đóng góp đáng kể vào việc xây dựng hội quán.</li>
    <li>Một đặc điểm độc đáo là các phòng dành cho các bà mẹ sinh con, phản ánh niềm tin vào Thiên Hậu là người bảo vệ phụ nữ và trẻ em.</li>
</ul>
<p>
    Hội quán này vẫn là một nơi thờ cúng quan trọng không chỉ đối với cộng đồng người Hoa Phúc Kiến mà còn đối với nhiều người dân địa phương Việt Nam cho đến ngày nay. Các ngày lễ và lễ hội truyền thống được tổ chức tại đây, thể hiện văn hóa và truyền thống phong phú của người Phúc Kiến.
</p>
<p>
    Hội Quán Phúc Kiến không chỉ là một kiệt tác kiến trúc mà còn là một minh chứng sống động cho lịch sử của cộng đồng người Hoa ở Hội An, những đóng góp to lớn của họ vào sự phát triển của thành phố và việc bảo tồn cẩn thận các truyền thống văn hóa. Việc ghé thăm nơi đây là điều bắt buộc đối với những ai muốn thực sự hiểu di sản đa diện của Phố cổ Hội An.
</p>
    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    slug: {
      en: 'fujian-assembly-hall',
      ru: 'sbornyy-zal-futszyan',
      es: 'sala-asamblea-fujian',
      fr: 'salle-assemblee-fujian',
      vn: 'hoi-quan-phuoc-kien',
    },
  },
  // Quan Cong Temple / Ong Pagoda
  {
    id: 'quan-cong-temple',
    coordinates: [15.87753059676167, 108.33137596808865],
    category: ['museum'], // Строго "museum"
    imageUrl: '15.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Quan Cong Temple / Ong Pagoda',
      description:
        'The temple is dedicated to the legendary General Quan Cong (Guan Yu).',
      fullDescription: `
<p>
    If you're looking for a place where the spirit of ancient trade and deep beliefs intertwine, your path leads to the <strong>Quan Cong Temple</strong>, also known as Ong Pagoda. This is not just a temple; it's one of Hoi An's oldest and most significant shrines, built in distant 1653 by Chinese communities, primarily from Fujian and Hainan.
</p>
<p>
    The temple is dedicated to the legendary General <strong>Quan Cong (Guan Yu)</strong>, who lived in China during the Three Kingdoms period (2nd-3rd century AD). Quan Cong is revered as the epitome of loyalty, righteousness, honesty, courage, and strength. He became a symbol of protection against evil and misfortune, and it was to him that Hoi An businessmen and merchants came to pray for good fortune in trade, prosperity, and the safe return of their ships. His image is so important that he is also worshipped by the Chinese community in modern Ho Chi Minh City. Quan Cong Temple has been repeatedly reconstructed over the centuries, preserving its original structure and splendor. In 1991, it was recognized as a National Cultural and Historical Heritage of Vietnam.
</p>

<h6>Architectural Grandeur and Hidden Details</h6>
<p>
    Quan Cong Temple is a vivid example of Chinese temple architecture, full of distinctive features and rich decoration:
</p>
<img src="41.jpg" alt="Quan Cong Temple / Ong Pagoda"/>
<small>The green dragons carved on the entrance door of Ong Pagoda are the embodiment of Quan Cong.</small>
<ul>
    <li>Entry to the temple is through impressive <strong>Triple Gates</strong> adorned with colorful patterns. On either side of the gates stand figures of guardians or majestic guardian lions.</li>
    <li>Passing through the gates, you'll enter a beautiful courtyard with a pond, decorated with water lilies and an elegant bridge. There may also be old trees here, giving the place a special atmosphere of tranquility.</li>
    <li>The central place is occupied by the Main Worship Hall, where a large and impressive statue of General Quan Cong is located. You'll recognize him by his red face, long beard, and distinctive attire. On either side of him are usually statues of his loyal followers: General Zhou Cang (with a green face) and adopted son Guan Ping.</li>
    <li>The altars are richly decorated with lacquered and gilded wooden artifacts, ceramics, and ritual offerings. Giant incense coils hang from the ceiling, creating a mysterious haze.</li>
    <li>The temple is famous for its intricate wood carvings depicting dragons, phoenixes, mythical creatures, as well as scenes from Chinese mythology and classical novels. You'll see many frescoes and bas-reliefs.</li>
</ul>
<p>
    There are also very interesting side rooms:
</p>
<img src="40.jpg" alt="Quan Cong Temple / Ong Pagoda"/>
<ul>
    <li>In the left room, there is an altar dedicated to the patron of trade and prosperity.</li>
    <li>And on the right is a sanctuary dedicated to Quan Cong's famous horse, known as the "Red Hare," which was famous for its incredible speed. Its statue here is an important element.</li>
</ul>

<h6>A Living Museum of Spiritual Beliefs</h6>
<p>
    Quan Cong Temple is an active place of worship for local residents, especially for the Chinese diaspora and Vietnamese. It is often visited by businessmen to ask for blessings for honest and successful trade. The temple also serves as a center for various traditional Chinese and Vietnamese festivals, including Lunar New Year, which are accompanied by rituals, music, and dances (for example, the famous lion dance).
</p>
<img src="42.jpg" alt="Quan Cong Temple / Ong Pagoda"/>
<small>Historical antiquities remain untouched at Ong Pagoda in Hoi An after more than 300 years</small>
<p>
    If you are going to visit only one assembly hall in Hoi An, it might be worth choosing the Cantonese Assembly Hall – it truly impresses with its scale and decorations. However, Quan Cong Temple is a unique living museum that provides a deep understanding of Hoi An's rich history, trade connections, and cultural exchange, as well as the spiritual beliefs that shaped the lives of its inhabitants for centuries. Visiting this temple is an integral part of getting to know the Ancient Town of Hoi An.
</p>
    `,
      internalImageNames: ['40.jpg', '42.jpg', '41.jpg'], // Ensure these images are relevant if they are for a different place. If not, update or remove.
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Храм Куан Конга / Пагода Онга',
      description: 'Храм посвящен легендарному генералу Куан Конгу (Гуань Юй).',
      fullDescription: `
<p>
    Если вы ищете место, где переплетаются дух древней торговли и глубокие верования, ваш путь лежит к <strong>Храму Куан Конга</strong>, также известному как Пагода Онга. Это не просто храм; это одно из старейших и наиболее значимых святилищ Хойана, построенное в далеком 1653 году китайскими общинами, преимущественно из Фуцзянь и Хайнань.
</p>
<p>
    Храм посвящен легендарному генералу <strong>Куан Конгу (Гуань Юй)</strong>, жившему в Китае в период Троецарствия (II-III века н.э.). Куан Конг почитается как воплощение верности, праведности, честности, мужества и силы. Он стал символом защиты от зла и несчастий, и именно к нему приходили хойанские бизнесмены и торговцы, чтобы молиться о удаче в торговле, процветании и безопасном возвращении своих кораблей. Его образ настолько важен, что ему поклоняются также китайская община в современном Хошимине. Храм Куан Конга неоднократно реконструировался на протяжении веков, сохраняя свою первоначальную структуру и великолепие. В 1991 году он был признан Национальным культурно-историческим наследием Вьетнама.
</p>

<h6>Архитектурное великолепие и скрытые детали</h6>
<p>
    Храм Куан Конга является ярким примером китайской храмовой архитектуры, полной отличительных черт и богатого убранства:
</p>
<img src="41.jpg" alt="Храм Куан Конга / Пагода Онга"/>
<small>Зеленые драконы, вырезанные на входной двери пагоды Онг, являются воплощением Куан Конга.</small>
<ul>
    <li>Вход в храм осуществляется через впечатляющие <strong>Тройные Ворота</strong>, украшенные красочными узорами. По обе стороны ворот стоят фигуры стражей или величественные львы-хранители.</li>
    <li>Пройдя через ворота, вы попадете в красивый внутренний двор с прудом, украшенным водяными лилиями и изящным мостом. Здесь также могут быть старые деревья, придающие месту особую атмосферу умиротворения.</li>
    <li>Центральное место занимает Главный Молитвенный Зал, где находится большая и впечатляющая статуя генерала Куан Конга. Вы узнаете его по красному лицу, длинной бороде и характерному одеянию. По обе стороны от него обычно стоят статуи его верных последователей: генерала Чжоу Цана (с зеленым лицом) и приемного сына Гуань Пина.</li>
    <li>Алтари богато украшены лакированными и позолоченными деревянными изделиями, керамикой и ритуальными подношениями. Гигантские спирали благовоний свисают с потолка, создавая таинственную дымку.</li>
    <li>Храм славится своей замысловатой резьбой по дереву, изображающей драконов, фениксов, мифических существ, а также сцены из китайской мифологии и классических романов. Вы увидите множество фресок и барельефов.</li>
</ul>
<p>
    Также есть очень интересные боковые комнаты:
</p>
<img src="40.jpg" alt="Храм Куан Конга / Пагода Онга"/>
<ul>
    <li>В левой комнате находится алтарь, посвященный покровителю торговли и процветания.</li>
    <li>А справа — святилище, посвященное знаменитому коню Куан Конга, известному как «Красный Заяц», который славился своей невероятной скоростью. Его статуя здесь является важным элементом.</li>
</ul>

<h6>Живой музей духовных верований</h6>
<p>
    Храм Куан Конга является действующим местом поклонения для местных жителей, особенно для китайской диаспоры и вьетнамцев. Его часто посещают бизнесмены, чтобы просить благословения для честной и успешной торговли. Храм также служит центром для различных традиционных китайских и вьетнамских фестивалей, включая Лунный Новый год, которые сопровождаются ритуалами, музыкой и танцами (например, знаменитым танцем льва).
</p>
<img src="42.jpg" alt="Храм Куан Конга / Пагода Онга"/>
<small>Исторические древности остаются нетронутыми в пагоде Онг в Хойане спустя более 300 лет</small>
<p>
    Если вы собираетесь посетить только один сборный зал в Хойане, возможно, стоит выбрать Кантонский Сборный зал – он действительно впечатляет своим масштабом и украшениями. Однако Храм Куан Конга — это уникальный живой музей, который дает глубокое понимание богатой истории Хойана, торговых связей и культурного обмена, а также духовных верований, которые формировали жизнь его жителей на протяжении веков. Посещение этого храма является неотъемлемой частью знакомства с Древним городом Хойан.
</p>
    `,
      internalImageNames: ['40.jpg', '42.jpg', '41.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Templo de Quan Cong / Pagoda Ong',
      description:
        'El templo está dedicado al legendario General Quan Cong (Guan Yu).',
      fullDescription: `
<p>
    Si buscas un lugar donde el espíritu del comercio antiguo y las creencias profundas se entrelazan, tu camino te lleva al <strong>Templo de Quan Cong</strong>, también conocido como Pagoda Ong. Este no es solo un templo; es uno de los santuarios más antiguos y significativos de Hoi An, construido en el lejano 1653 por comunidades chinas, principalmente de Fujian y Hainan.
</p>
<p>
    El templo está dedicado al legendario General <strong>Quan Cong (Guan Yu)</strong>, quien vivió en China durante el período de los Tres Reinos (siglos II-III d.C.). Quan Cong es venerado como el epítome de la lealtad, la rectitud, la honestidad, el coraje y la fuerza. Se convirtió en un símbolo de protección contra el mal y la desgracia, y a él acudían los empresarios y comerciantes de Hoi An para orar por buena fortuna en el comercio, prosperidad y el regreso seguro de sus barcos. Su imagen es tan importante que también es adorado por la comunidad china en la moderna Ciudad Ho Chi Minh. El Templo de Quan Cong ha sido reconstruido repetidamente a lo largo de los siglos, conservando su estructura original y esplendor. En 1991, fue reconocido como Patrimonio Cultural e Histórico Nacional de Vietnam.
</p>

<h6>Grandeza Arquitectónica y Detalles Ocultos</h6>
<p>
    El Templo de Quan Cong es un vívido ejemplo de la arquitectura de templos chinos, llena de características distintivas y rica decoración:
</p>
<img src="41.jpg" alt="Templo de Quan Cong / Pagoda Ong"/>
<small>Los dragones verdes tallados en la puerta de entrada de la Pagoda Ong son la encarnación de Quan Cong.</small>
<ul>
    <li>La entrada al templo es a través de impresionantes <strong>Puertas Triples</strong> adornadas con coloridos patrones. A cada lado de las puertas se encuentran figuras de guardianes o majestuosos leones guardianes.</li>
    <li>Pasando por las puertas, entrarás a un hermoso patio con un estanque, decorado con nenúfares y un elegante puente. También puede haber árboles viejos aquí, lo que le da al lugar una atmósfera especial de tranquilidad.</li>
    <li>El lugar central lo ocupa el Salón Principal de Adoración, donde se encuentra una estatua grande e impresionante del General Quan Cong. Lo reconocerás por su cara roja, barba larga y atuendo distintivo. A cada lado de él suelen estar estatuas de sus leales seguidores: el General Zhou Cang (con una cara verde) y su hijo adoptivo Guan Ping.</li>
    <li>Los altares están ricamente decorados con artefactos de madera lacados y dorados, cerámica y ofrendas rituales. Grandes espirales de incienso cuelgan del techo, creando una neblina misteriosa.</li>
    <li>El templo es famoso por sus intrincadas tallas de madera que representan dragones, fénix, criaturas míticas, así como escenas de la mitología china y novelas clásicas. Verás muchos frescos y bajorrelieves.</li>
</ul>
<p>
    También hay salas laterales muy interesantes:
</p>
<img src="40.jpg" alt="Templo de Quan Cong / Pagoda Ong"/>
<ul>
    <li>En la sala izquierda, hay un altar dedicado al patrón del comercio y la prosperidad.</li>
    <li>Y a la derecha hay un santuario dedicado al famoso caballo de Quan Cong, conocido como el "Liebre Roja", que era famoso por su increíble velocidad. Su estatua aquí es un elemento importante.</li>
</ul>

<h6>Un Museo Viviente de Creencias Espirituales</h6>
<p>
    El Templo de Quan Cong es un lugar de culto activo para los residentes locales, especialmente para la diáspora china y vietnamita. A menudo es visitado por empresarios para pedir bendiciones para un comercio honesto y exitoso. El templo también sirve como centro para varios festivales tradicionales chinos y vietnamitas, incluido el Año Nuevo Lunar, que se acompañan de rituales, música y bailes (por ejemplo, la famosa danza del león).
</p>
<img src="42.jpg" alt="Templo de Quan Cong / Pagoda Ong"/>
<small>Las antigüedades históricas permanecen intactas en la Pagoda Ong en Hoi An después de más de 300 años</small>
<p>
    Si vas a visitar solo una sala de asamblea en Hoi An, podría valer la pena elegir la Sala de Asamblea Cantonesa, realmente impresiona por su escala y decoraciones. Sin embargo, el Templo de Quan Cong es un museo viviente único que proporciona una comprensión profunda de la rica historia de Hoi An, las conexiones comerciales y el intercambio cultural, así como las creencias espirituales que dieron forma a la vida de sus habitantes durante siglos. Visitar este templo es una parte integral para conocer el Casco Antiguo de Hoi An.
</p>
    `,
      internalImageNames: ['40.jpg', '42.jpg', '41.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Temple de Quan Cong / Pagode Ong',
      description:
        'Le temple est dédié au légendaire Général Quan Cong (Guan Yu).',
      fullDescription: `
<p>
    Si vous cherchez un lieu où l'esprit du commerce ancien et les croyances profondes s'entremêlent, votre chemin mène au <strong>Temple de Quan Cong</strong>, également connu sous le nom de Pagode Ong. Ce n'est pas seulement un temple ; c'est l'un des sanctuaires les plus anciens et les plus importants de Hoi An, construit en 1653 par des communautés chinoises, principalement du Fujian et de Hainan.
</p>
<p>
    Le temple est dédié au légendaire Général <strong>Quan Cong (Guan Yu)</strong>, qui a vécu en Chine pendant la période des Trois Royaumes (IIe-IIIe siècle après J.-C.). Quan Cong est vénéré comme l'incarnation de la loyauté, de la droiture, de l'honnêteté, du courage et de la force. Il est devenu un symbole de protection contre le mal et le malheur, et c'est à lui que les hommes d'affaires et les marchands de Hoi An venaient prier pour la bonne fortune dans le commerce, la prospérité et le retour en toute sécurité de leurs navires. Son image est si importante qu'il est également vénéré par la communauté chinoise dans la ville moderne de Hô Chi Minh. Le Temple de Quan Cong a été reconstruit à plusieurs reprises au cours des siècles, conservant sa structure et sa splendeur d'origine. En 1991, il a été reconnu comme patrimoine culturel et historique national du Vietnam.
</p>

<h6>Grandeur architecturale et détails cachés</h6>
<p>
    Le Temple de Quan Cong est un exemple frappant de l'architecture de temple chinois, pleine de caractéristiques distinctives et d'une riche décoration :
</p>
<img src="41.jpg" alt="Temple de Quan Cong / Pagode Ong"/>
<small>Les dragons verts sculptés sur la porte d'entrée de la Pagode Ong sont l'incarnation de Quan Cong.</small>
<ul>
    <li>L'entrée du temple se fait par d'impressionnantes <strong>Portes Triples</strong> ornées de motifs colorés. De chaque côté des portes se dressent des figures de gardiens ou de majestueux lions gardiens.</li>
    <li>En passant les portes, vous entrerez dans une belle cour avec un étang, décoré de nénuphars et d'un élégant pont. Il peut également y avoir de vieux arbres ici, donnant au lieu une atmosphère particulière de tranquillité.</li>
    <li>La place centrale est occupée par le Hall Principal de Culte, où se trouve une grande et impressionnante statue du Général Quan Cong. Vous le reconnaîtrez à son visage rouge, sa longue barbe et sa tenue distinctive. De chaque côté de lui se trouvent généralement des statues de ses fidèles partisans : le Général Zhou Cang (au visage vert) et son fils adoptif Guan Ping.</li>
    <li>Les autels sont richement décorés d'artefacts en bois laqués et dorés, de céramiques et d'offrandes rituelles. Des bobines d'encens géantes pendent du plafond, créant une brume mystérieuse.</li>
    <li>Le temple est célèbre pour ses sculptures complexes sur bois représentant des dragons, des phénix, des créatures mythiques, ainsi que des scènes de la mythologie chinoise et des romans classiques. Vous verrez de nombreuses fresques et bas-reliefs.</li>
</ul>
<p>
    Il y a aussi des pièces latérales très intéressantes :
</p>
<img src="40.jpg" alt="Temple de Quan Cong / Pagode Ong"/>
<ul>
    <li>Dans la pièce de gauche, il y a un autel dédié au patron du commerce et de la prospérité.</li>
    <li>Et à droite se trouve un sanctuaire dédié au célèbre cheval de Quan Cong, connu sous le nom de "Lièvre Rouge", qui était célèbre pour son incroyable vitesse. Sa statue ici est un élément important.</li>
</ul>

<h6>Un musée vivant des croyances spirituelles</h6>
<p>
    Le Temple de Quan Cong est un lieu de culte actif pour les résidents locaux, en particulier pour la diaspora chinoise et vietnamienne. Il est souvent visité par les hommes d'affaires pour demander des bénédictions pour un commerce honnête et fructueux. Le temple sert également de centre pour divers festivals traditionnels chinois et vietnamiens, y compris le Nouvel An lunaire, qui sont accompagnés de rituels, de musique et de danses (par exemple, la célèbre danse du lion).
</p>
<img src="42.jpg" alt="Temple de Quan Cong / Pagode Ong"/>
<small>Les antiquités historiques restent intactes à la Pagode Ong à Hoi An après plus de 300 ans</small>
<p>
    Si vous ne deviez visiter qu'une seule salle d'assemblée à Hoi An, il pourrait être intéressant de choisir la Salle de l'Assemblée cantonaise – elle impressionne vraiment par son ampleur et ses décorations. Cependant, le Temple de Quan Cong est un musée vivant unique qui offre une compréhension profonde de la riche histoire de Hoi An, des liens commerciaux et des échanges culturels, ainsi que des croyances spirituelles qui ont façonné la vie de ses habitants pendant des siècles. La visite de ce temple est une partie intégrante de la découverte de la Vieille Ville de Hoi An.
</p>
    `,
      internalImageNames: ['40.jpg', '42.jpg', '41.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Chùa Ông / Miếu Quan Công',
      description: 'Ngôi đền thờ vị tướng huyền thoại Quan Công (Guan Yu).',
      fullDescription: `
<p>
    Nếu bạn đang tìm kiếm một nơi mà tinh thần thương mại cổ xưa và tín ngưỡng sâu sắc hòa quyện vào nhau, con đường của bạn sẽ dẫn đến <strong>Chùa Ông</strong>, còn được gọi là Miếu Quan Công. Đây không chỉ là một ngôi đền; đó là một trong những miếu thờ cổ kính và quan trọng nhất của Hội An, được xây dựng vào năm 1653 bởi các cộng đồng người Hoa, chủ yếu từ Phúc Kiến và Hải Nam.
</p>
<p>
    Ngôi đền thờ vị tướng huyền thoại <strong>Quan Công (Quan Vũ)</strong>, người sống ở Trung Quốc trong thời Tam Quốc (thế kỷ 2-3 sau Công nguyên). Quan Công được tôn kính là hình mẫu của lòng trung thành, chính nghĩa, trung thực, dũng cảm và sức mạnh. Ông trở thành biểu tượng của sự bảo vệ chống lại cái ác và điều không may, và các doanh nhân, thương nhân Hội An đã đến đây để cầu nguyện cho may mắn trong kinh doanh, thịnh vượng và sự trở về an toàn của tàu thuyền. Hình ảnh của ông rất quan trọng đến nỗi ông cũng được cộng đồng người Hoa ở Thành phố Hồ Chí Minh hiện đại thờ cúng. Chùa Ông đã được trùng tu nhiều lần qua các thế kỷ, bảo tồn cấu trúc và vẻ lộng lẫy ban đầu của nó. Năm 1991, nó được công nhận là Di sản Văn hóa và Lịch sử Quốc gia Việt Nam.
</p>

<h6>Kiến trúc tráng lệ và những chi tiết ẩn</h6>
<p>
    Chùa Ông là một ví dụ sống động về kiến trúc đền thờ Trung Quốc, đầy những nét đặc trưng và trang trí phong phú:
</p>
<img src="41.jpg" alt="Chùa Ông / Miếu Quan Công"/>
<small>Những con rồng xanh được chạm khắc trên cửa vào Chùa Ông là hiện thân của Quan Công.</small>
<ul>
    <li>Lối vào chùa qua <strong>Tam Quan</strong> ấn tượng được trang trí bằng các họa tiết đầy màu sắc. Hai bên cổng là tượng các vị thần hộ pháp hoặc những con sư tử đá uy nghi.</li>
    <li>Đi qua cổng, bạn sẽ vào một sân trong xinh đẹp với một hồ nước, được trang trí bằng hoa súng và một cây cầu duyên dáng. Cũng có thể có những cây cổ thụ ở đây, tạo cho nơi đây một bầu không khí yên bình đặc biệt.</li>
    <li>Vị trí trung tâm là Chính Điện, nơi đặt bức tượng lớn và ấn tượng của Tướng Quan Công. Bạn sẽ nhận ra ông qua khuôn mặt đỏ, bộ râu dài và trang phục đặc trưng. Hai bên ông thường là tượng các tùy tùng trung thành của ông: Tướng Chu Thương (với khuôn mặt xanh) và con nuôi Quan Bình.</li>
    <li>Các bàn thờ được trang trí phong phú với các tác phẩm gỗ sơn mài và mạ vàng, gốm sứ và các vật phẩm cúng dường nghi lễ. Những vòng hương lớn treo trên trần nhà, tạo ra một làn khói huyền ảo.</li>
    <li>Ngôi đền nổi tiếng với những chạm khắc gỗ tinh xảo mô tả rồng, phượng, kỳ lân, sư tử, cũng như các cảnh trong thần thoại Trung Quốc và các tiểu thuyết cổ điển. Bạn sẽ thấy nhiều bức bích họa và phù điêu.</li>
</ul>
<p>
    Ngoài ra còn có những phòng phụ rất thú vị:
</p>
<img src="40.jpg" alt="Chùa Ông / Miếu Quan Công"/>
<ul>
    <li>Trong phòng bên trái, có một bàn thờ dành cho vị thần bảo trợ thương mại và thịnh vượng.</li>
    <li>Và bên phải là một điện thờ dành cho con ngựa nổi tiếng của Quan Công, được gọi là "Xích Thố", nổi tiếng với tốc độ đáng kinh ngạc. Bức tượng của nó ở đây là một yếu tố quan trọng.</li>
</ul>

<h6>Bảo tàng sống của tín ngưỡng tâm linh</h6>
<p>
    Chùa Ông là một nơi thờ cúng tích cực của người dân địa phương, đặc biệt là đối với cộng đồng người Hoa và người Việt. Nó thường được các doanh nhân ghé thăm để cầu xin phước lành cho một hoạt động kinh doanh trung thực và thành công. Ngôi đền cũng phục vụ như một trung tâm cho các lễ hội truyền thống khác nhau của Trung Quốc và Việt Nam, bao gồm Tết Nguyên Đán, đi kèm với các nghi lễ, âm nhạc và vũ điệu (ví dụ, múa lân nổi tiếng).
</p>
<img src="42.jpg" alt="Chùa Ông / Miếu Quan Công"/>
<small>Những cổ vật lịch sử vẫn còn nguyên vẹn tại Chùa Ông ở Hội An sau hơn 300 năm</small>
<p>
    Nếu bạn chỉ định thăm một hội quán ở Hội An, có lẽ nên chọn Hội Quán Quảng Đông – nó thực sự gây ấn tượng với quy mô và các đồ trang trí của nó. Tuy nhiên, Chùa Ông là một bảo tàng sống độc đáo mang lại sự hiểu biết sâu sắc về lịch sử phong phú của Hội An, các mối liên kết thương mại và trao đổi văn hóa, cũng như các tín ngưỡng tâm linh đã định hình cuộc sống của cư dân nơi đây trong nhiều thế kỷ. Ghé thăm ngôi đền này là một phần không thể thiếu để tìm hiểu về Phố cổ Hội An.
</p>
    `,
      internalImageNames: ['40.jpg', '42.jpg', '41.jpg'], // Check if these images are relevant. If not, replace or remove.
    },

    slug: {
      en: 'quan-cong-temple',
      ru: 'khram-quan-tsong',
      es: 'templo-quan-cong',
      fr: 'temple-quan-cong',
      vn: 'chua-ong',
    },
  },
  // Museum of Traditional Medicine
  {
    id: 'museum-of-traditional-medicine',
    coordinates: [15.876645447545563, 108.32985812007384],
    category: ['museum'],
    imageUrl: '16.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Museum of Traditional Medicine',
      description:
        'The main goal of the museum is to show how traditional medicine developed in Hoi An.',
      fullDescription: `
<p>
    If you've ever dreamed of learning how illnesses were treated centuries ago, or simply want to touch the wisdom of ancient healers, then you absolutely must visit the <strong>Museum of Traditional Medicine in Hoi An</strong>. This relatively new but very informative museum opened on March 15, 2019, becoming a true gift for the 44th anniversary of the Hoi An revolution and the 20th anniversary of the city's inclusion on the UNESCO World Heritage list.
</p>
<p>
    The museum is located in a restored old house. The building itself, with its two floors, is already part of Hoi An's history. The main goal of the museum is to show how traditional medicine developed in Hoi An, combining Vietnamese and Chinese cultural practices.
</p>

<h6>From a Chinese Pharmacy to Vietnamese Secrets: What's Inside?</h6>
<p>
    The Museum of Traditional Medicine is a true treasure trove, housing over 200 artifacts, each telling its own story:
</p>
<ul>
    <li><strong>The first floor</strong> will transport you directly into a classic Chinese pharmacy of centuries past. Here you can see what a doctor looked like at work, examine a huge wooden cabinet with 108 (!) different types of medicines, as well as bamboo trays on which medicinal plants and seeds were once dried. It's like stepping into a scene from an old movie!</li>
    <li><strong>The second floor</strong> is entirely dedicated to traditional Vietnamese medicine. Here you'll learn about its unique features and secrets.</li>
</ul>
<p>
    Among the most interesting exhibits and opportunities at the museum:
</p>
<ul>
    <li>You can see how a doctor checks pulses and writes prescriptions – it's very interesting and informative!</li>
    <li>Old medicine pouches and photos of medicinal plants with their names in Vietnamese and English are presented. You'll be able to understand which herbs were used for treatment.</li>
    <li>Be sure to pay attention to the information about Tue Tinh (1330-1400) – he is considered the true ancestor of Vietnamese medicine.</li>
</ul>

<h6>Why Visit?</h6>
<p>
    Visiting the Museum of Traditional Medicine is not only an opportunity to learn a lot about ancient healing methods but also a chance to immerse yourself in Hoi An's cultural heritage, which has always been closely linked to trade and the exchange of knowledge, including medical knowledge. It offers a fresh perspective on the city's history, which is revealed here through the prism of health and well-being.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей традиционной медицины',
      description:
        'Главная цель музея — показать, как развивалась традиционная медицина в Хойане.',
      fullDescription: `
<p>
    Если вы когда-либо мечтали узнать, как лечили болезни столетия назад, или просто хотите прикоснуться к мудрости древних целителей, то вам непременно стоит посетить <strong>Музей традиционной медицины в Хойане</strong>. Этот относительно новый, но очень информативный музей открылся 15 марта 2019 года, став настоящим подарком к 44-й годовщине революции Хойана и 20-летию включения города в список Всемирного наследия ЮНЕСКО.
</p>
<p>
    Музей расположен в отреставрированном старом доме. Само здание, с его двумя этажами, уже является частью истории Хойана. Главная цель музея — показать, как развивалась традиционная медицина в Хойане, объединяя вьетнамские и китайские культурные практики.
</p>

<h6>От китайской аптеки до вьетнамских секретов: что внутри?</h6>
<p>
    Музей традиционной медицины — это настоящая сокровищница, хранящая более 200 артефактов, каждый из которых рассказывает свою историю:
</p>
<ul>
    <li><strong>Первый этаж</strong> перенесет вас прямиком в классическую китайскую аптеку минувших веков. Здесь можно увидеть, как выглядел доктор за работой, рассмотреть огромный деревянный шкаф со 108 (!) видами различных лекарств, а также бамбуковые лотки, на которых когда-то сушили лекарственные растения и семена. Это словно сцена из старого кино!</li>
    <li><strong>Второй этаж</strong> полностью посвящен традиционной вьетнамской медицине. Здесь вы узнаете о ее уникальных особенностях и секретах.</li>
</ul>
<p>
    Среди самых интересных экспонатов и возможностей музея:
</p>
<ul>
    <li>Вы сможете увидеть, как врач проверяет пульс и выписывает рецепты – это очень интересно и познавательно!</li>
    <li>Представлены старинные мешочки для лекарств и фотографии лекарственных растений с их названиями на вьетнамском и английском языках. Вы сможете понять, какие травы использовались для лечения.</li>
    <li>Обязательно обратите внимание на информацию о Туэ Тине (1330–1400) – он считается истинным предком вьетнамской медицины.</li>
</ul>

<h6>Почему стоит посетить?</h6>
<p>
    Посещение Музея традиционной медицины – это не только возможность узнать много нового о древних методах исцеления, но и шанс погрузиться в культурное наследие Хойана, которое всегда было тесно связано с торговлей и обменом знаниями, в том числе медицинскими. Это свежий взгляд на историю города, которая здесь раскрывается сквозь призму здоровья и благополучия.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo de Medicina Tradicional',
      description:
        'El objetivo principal del museo es mostrar cómo se desarrolló la medicina tradicional en Hoi An.',
      fullDescription: `
<p>
    Si alguna vez soñaste con aprender cómo se trataban las enfermedades hace siglos, o simplemente quieres tocar la sabiduría de los antiguos curanderos, entonces debes visitar el <strong>Museo de Medicina Tradicional en Hoi An</strong>. Este museo relativamente nuevo pero muy informativo se inauguró el 15 de marzo de 2019, convirtiéndose en un verdadero regalo para el 44 aniversario de la revolución de Hoi An y el 20 aniversario de la inclusión de la ciudad en la lista del Patrimonio Mundial de la UNESCO.
</p>
<p>
    El museo está ubicado en una casa antigua restaurada. El edificio en sí, con sus dos pisos, ya es parte de la historia de Hoi An. El objetivo principal del museo es mostrar cómo se desarrolló la medicina tradicional en Hoi An, combinando prácticas culturales vietnamitas y chinas.
</p>

<h6>De una Farmacia China a los Secretos Vietnamitas: ¿Qué hay dentro?</h6>
<p>
    El Museo de Medicina Tradicional es un verdadero tesoro, albergando más de 200 artefactos, cada uno contando su propia historia:
</p>
<ul>
    <li><strong>El primer piso</strong> te transportará directamente a una farmacia china clásica de siglos pasados. Aquí puedes ver cómo era un médico en el trabajo, examinar un enorme gabinete de madera con 108 (!) tipos diferentes de medicinas, así como bandejas de bambú en las que alguna vez se secaron plantas medicinales y semillas. ¡Es como entrar en una escena de una película antigua!</li>
    <li><strong>El segundo piso</strong> está completamente dedicado a la medicina tradicional vietnamita. Aquí aprenderás sobre sus características y secretos únicos.</li>
</ul>
<p>
    Entre las exhibiciones y oportunidades más interesantes del museo:
</p>
<ul>
    <li>Puedes ver cómo un médico toma el pulso y escribe recetas – ¡es muy interesante e informativo!</li>
    <li>Se presentan antiguas bolsas de medicamentos y fotos de plantas medicinales con sus nombres en vietnamita e inglés. Podrás entender qué hierbas se usaban para el tratamiento.</li>
    <li>Asegúrate de prestar atención a la información sobre Tue Tinh (1330-1400) – es considerado el verdadero antepasado de la medicina vietnamita.</li>
</ul>

<h6>¿Por qué Visitar?</h6>
<p>
    Visitar el Museo de Medicina Tradicional no solo es una oportunidad para aprender mucho sobre los métodos de curación antiguos, sino también una oportunidad para sumergirse en el patrimonio cultural de Hoi An, que siempre ha estado estrechamente vinculado al comercio y al intercambio de conocimientos, incluidos los conocimientos médicos. Ofrece una perspectiva fresca sobre la historia de la ciudad, que se revela aquí a través del prisma de la salud y el bienestar.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Musée de la Médecine Traditionnelle',
      description:
        "L'objectif principal du musée est de montrer comment la médecine traditionnelle.",
      fullDescription: `
<p>
    Si vous avez toujours rêvé d'apprendre comment les maladies étaient traitées il y a des siècles, ou si vous voulez simplement toucher la sagesse des anciens guérisseurs, alors vous devez absolument visiter le <strong>Musée de la Médecine Traditionnelle à Hoi An</strong>. Ce musée relativement nouveau mais très instructif a ouvert ses portes le 15 mars 2019, devenant un véritable cadeau pour le 44e anniversaire de la révolution de Hoi An et le 20e anniversaire de l'inscription de la ville sur la liste du patrimoine mondial de l'UNESCO.
</p>
<p>
    Le musée est situé dans une vieille maison restaurée. Le bâtiment lui-même, avec ses deux étages, fait déjà partie de l'histoire de Hoi An. L'objectif principal du musée est de montrer comment la médecine traditionnelle s'est développée à Hoi An, combinant les pratiques culturelles vietnamiennes et chinoises.
</p>

<h6>D'une pharmacie chinoise aux secrets vietnamiens : Qu'y a-t-il à l'intérieur ?</h6>
<p>
    Le Musée de la Médecine Traditionnelle est un véritable trésor, abritant plus de 200 artefacts, chacun racontant sa propre histoire :
</p>
<ul>
    <li><strong>Le premier étage</strong> vous transportera directement dans une pharmacie chinoise classique des siècles passés. Ici, vous pouvez voir à quoi ressemblait un médecin au travail, examiner une immense armoire en bois avec 108 (!) types de médicaments différents, ainsi que des plateaux en bambou sur lesquels des plantes médicinales et des graines étaient autrefois séchées. C'est comme entrer dans une scène d'un vieux film !</li>
    <li><strong>Le deuxième étage</strong> est entièrement dédié à la médecine traditionnelle vietnamienne. Ici, vous apprendrez ses caractéristiques et ses secrets uniques.</li>
</ul>
<p>
    Parmi les expositions et opportunités les plus intéressantes du musée :
</p>
<ul>
    <li>Vous pouvez voir comment un médecin prend le pouls et rédige des ordonnances – c'est très intéressant et instructif !</li>
    <li>De vieilles pochettes de médicaments et des photos de plantes médicinales avec leurs noms en vietnamien et en anglais sont présentées. Vous pourrez comprendre quelles herbes étaient utilisées pour le traitement.</li>
    <li>Assurez-vous de prêter attention aux informations sur Tue Tinh (1330-1400) – il est considéré comme le véritable ancêtre de la médecine vietnamienne.</li>
</ul>

<h6>Pourquoi visiter ?</h6>
<p>
    Visiter le Musée de la Médecine Traditionnelle n'est pas seulement une occasion d'en apprendre beaucoup sur les anciennes méthodes de guérison, mais aussi une chance de vous immerger dans le patrimoine culturel de Hoi An, qui a toujours été étroitement lié au commerce et à l'échange de connaissances, y compris médicales. Il offre une nouvelle perspective sur l'histoire de la ville, qui est révélée ici à travers le prisme de la santé et du bien-être.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo Tàng Y Học Cổ Truyền',
      description:
        'Mục tiêu chính của bảo tàng là thể hiện sự phát triển của y học cổ truyền tại Hội An.',
      fullDescription: `
<p>
    Nếu bạn từng mơ ước được tìm hiểu cách chữa bệnh từ nhiều thế kỷ trước, hoặc đơn giản là muốn chạm vào trí tuệ của các thầy thuốc cổ xưa, thì bạn nhất định phải ghé thăm <strong>Bảo Tàng Y Học Cổ Truyền ở Hội An</strong>. Bảo tàng tương đối mới nhưng rất bổ ích này đã khai trương vào ngày 15 tháng 3 năm 2019, trở thành một món quà ý nghĩa nhân kỷ niệm 44 năm cách mạng Hội An và 20 năm thành phố được đưa vào danh sách Di sản Thế giới của UNESCO.
</p>
<p>
    Bảo tàng nằm trong một ngôi nhà cổ đã được phục hồi. Bản thân tòa nhà, với hai tầng, đã là một phần lịch sử của Hội An. Mục tiêu chính của bảo tàng là thể hiện sự phát triển của y học cổ truyền tại Hội An, kết hợp các thực hành văn hóa Việt Nam và Trung Quốc.
</p>

<h6>Từ nhà thuốc Trung Hoa đến bí mật Việt Nam: Có gì bên trong?</h6>
<p>
    Bảo Tàng Y Học Cổ Truyền là một kho tàng thực sự, lưu giữ hơn 200 hiện vật, mỗi thứ đều kể một câu chuyện riêng:
</p>
<ul>
    <li><strong>Tầng một</strong> sẽ đưa bạn trực tiếp vào một nhà thuốc Trung Hoa cổ điển của những thế kỷ trước. Tại đây, bạn có thể thấy một bác sĩ trông như thế nào khi làm việc, kiểm tra một tủ gỗ khổng lồ với 108 (!) loại thuốc khác nhau, cũng như các khay tre từng được dùng để phơi các loại cây thuốc và hạt giống. Cứ như bước vào một cảnh trong phim cũ vậy!</li>
    <li><strong>Tầng hai</strong> hoàn toàn dành riêng cho y học cổ truyền Việt Nam. Tại đây, bạn sẽ tìm hiểu về những đặc điểm và bí mật độc đáo của nó.</li>
</ul>
<p>
    Trong số những triển lãm và cơ hội thú vị nhất tại bảo tàng:
</p>
<ul>
    <li>Bạn có thể thấy cách một bác sĩ bắt mạch và viết đơn thuốc – rất thú vị và bổ ích!</li>
    <li>Các túi thuốc cũ và hình ảnh các loại cây thuốc với tên tiếng Việt và tiếng Anh được trưng bày. Bạn sẽ có thể hiểu được những loại thảo mộc nào đã được sử dụng để điều trị.</li>
    <li>Đừng quên chú ý đến thông tin về Tuệ Tĩnh (1330-1400) – ông được coi là tổ tiên thực sự của y học Việt Nam.</li>
</ul>

<h6>Tại sao nên ghé thăm?</h6>
<p>
    Ghé thăm Bảo Tàng Y Học Cổ Truyền không chỉ là cơ hội để tìm hiểu nhiều điều về các phương pháp chữa bệnh cổ xưa mà còn là cơ hội để đắm mình vào di sản văn hóa của Hội An, nơi luôn gắn liền mật thiết với thương mại và trao đổi kiến thức, bao gồm cả kiến thức y học. Nó mang đến một cái nhìn mới mẻ về lịch sử thành phố, được tiết lộ ở đây qua lăng kính sức khỏe và hạnh phúc.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    slug: {
      en: 'museum-of-traditional-medicine',
      ru: 'muzey-traditsionnoy-meditsiny',
      es: 'museo-medicina-tradicional',
      fr: 'musee-medecine-traditionnelle',
      vn: 'bao-tang-y-hoc-co-truyen',
    },
  },
  // Museum of Folk Culture
  {
    id: 'museum-of-folk-culture',
    coordinates: [15.876582072649137, 108.32984229159041],
    category: ['museum'],
    imageUrl: '17.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Museum of Folk Culture',
      description:
        'Demonstration and introduction to Vietnamese folk culture and medicine.',
      fullDescription: `
<p>
    If you truly want to feel the pulse of ancient Hoi An, to understand how its inhabitants lived while ships brought exotic goods, then you absolutely must visit the <strong>Museum of Folk Culture</strong>. This is one of the six treasure museums of the Old Town, and it is entirely dedicated to the daily life and traditions of Hoi An during its heyday as a trading port.
</p>
<p>
    The museum is located in one of the largest residential buildings in the Old Town, a beautiful two-story mansion with an inner courtyard, which is a work of art in itself. Its architecture is a delightful mix of Chinese influences and unique Vietnamese elements, and it was most likely built in the mid-19th century. So you'll not only study the exhibits but also touch the history of the building itself!
</p>

<h6>500 Artifacts and Four Themes That Tell All!</h6>
<p>
    Inside the museum, you'll embark on a fascinating journey through four main themes, presented on the upper floor, where about 500 artifacts are collected:
</p>
<ul>
    <li><strong>Folk Art:</strong> Here you'll see unique paintings, sculptures, and ceramics that tell of the creative spirit of Hoi An's inhabitants.</li>
    <li><strong>Folk Performing Arts:</strong> You'll learn about local traditions, such as the famous Unicorn Dance and the lively Bai Chai Dance. Imagine the exciting performances that were given on the streets of Hoi An!</li>
    <li><strong>Traditional Villages:</strong> The museum will show how the surrounding villages lived. You'll see ancient agricultural and fishing tools that tell about the specialized techniques of different settlements.</li>
    <li><strong>Traditional Way of Life:</strong> This section will immerse you in the daily life of Hoi An, demonstrating items related to traditional crafts and productions: pottery, silk weaving, and tailoring. After all, Hoi An was not only a trading center but also a place where unique goods were produced!</li>
</ul>
<p>
    Special attention should be paid to the <strong>extensive use of wood</strong> in the construction of the museum building itself. Staircases, balustrades, partitions – everything is made with incredible skill, and this in itself is an exhibit.
</p>

<h6>Why Is This Important and Interesting?</h6>
<p>
    The Museum of Folk Culture provides an incredible insight into how Hoi An functioned, not only as a port city for merchants but also as a center of a vibrant, evolving culture of local residents. It is a place where history comes alive through everyday objects and tells of the rich heritage of the region. Here you can truly feel part of ancient Hoi An.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей народной культуры',
      description:
        'Демонстрация и знакомство с вьетнамской народной культурой и медициной.',
      fullDescription: `
<p>
    Если вы действительно хотите почувствовать пульс древнего Хойана, понять, как жили его жители, пока корабли привозили экзотические товары, то вам непременно стоит посетить <strong>Музей народной культуры</strong>. Это один из шести сокровищ-музеев Старого города, и он целиком посвящен повседневной жизни и традициям Хойана в период его расцвета как торгового порта.
</p>
<p>
    Музей расположен в одном из крупнейших жилых зданий Старого города, красивом двухэтажном особняке с внутренним двором, который сам по себе является произведением искусства. Его архитектура — восхитительное смешение китайских влияний и уникальных вьетнамских элементов, и, скорее всего, он был построен в середине XIX века. Так что вы не только изучите экспонаты, но и прикоснетесь к истории самого здания!
</p>

<h6>500 артефактов и четыре темы, которые расскажут всё!</h6>
<p>
    Внутри музея вы отправитесь в увлекательное путешествие по четырем основным темам, представленным на верхнем этаже, где собрано около 500 артефактов:
</p>
<ul>
    <li><strong>Народное искусство:</strong> Здесь вы увидите уникальные картины, скульптуры и керамику, которые расскажут о творческом духе жителей Хойана.</li>
    <li><strong>Народные исполнительские искусства:</strong> Вы узнаете о местных традициях, таких как знаменитый Танец Единорога и оживленный Танец Бать Чай. Представьте, какие захватывающие представления давались на улицах Хойана!</li>
    <li><strong>Традиционные деревни:</strong> Музей покажет, как жили окрестные деревни. Вы увидите древние сельскохозяйственные и рыболовные орудия, которые расскажут о специализированных техниках различных поселений.</li>
    <li><strong>Традиционный образ жизни:</strong> Этот раздел погрузит вас в повседневную жизнь Хойана, демонстрируя предметы, связанные с традиционными ремеслами и производствами: гончарным делом, ткачеством шелка и пошивом одежды. Ведь Хойан был не только торговым центром, но и местом, где производились уникальные товары!</li>
</ul>
<p>
    Особое внимание стоит уделить <strong>широкому использованию дерева</strong> в конструкции самого здания музея. Лестницы, балюстрады, перегородки – всё выполнено с невероятным мастерством, и это само по себе является экспонатом.
</p>

<h6>Почему это важно и интересно?</h6>
<p>
    Музей народной культуры дает невероятное представление о том, как функционировал Хойан не только как портовый город для купцов, но и как центр яркой, развивающейся культуры местных жителей. Это место, где история оживает через повседневные предметы и рассказывает о богатом наследии региона. Здесь вы сможете по-настоящему почувствовать себя частью древнего Хойана.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo de la Cultura Popular',
      description:
        'Demostración e introducción a la cultura popular y la medicina vietnamita.',
      fullDescription: `
<p>
    Si realmente quieres sentir el pulso del antiguo Hoi An, comprender cómo vivían sus habitantes mientras los barcos traían bienes exóticos, entonces debes visitar el <strong>Museo de la Cultura Popular</strong>. Este es uno de los seis museos tesoro del Casco Antiguo, y está completamente dedicado a la vida diaria y las tradiciones de Hoi An durante su apogeo como puerto comercial.
</p>
<p>
    El museo está ubicado en uno de los edificios residenciales más grandes del Casco Antiguo, una hermosa mansión de dos pisos con un patio interior, que es una obra de arte en sí misma. Su arquitectura es una deliciosa mezcla de influencias chinas y elementos vietnamitas únicos, y muy probablemente fue construido a mediados del siglo XIX. ¡Así que no solo estudiarás las exhibiciones, sino que también tocarás la historia del edificio mismo!
</p>

<h6>500 Artefactos y Cuatro Temas que lo Cuentan Todo!</h6>
<p>
    Dentro del museo, emprenderás un fascinante viaje a través de cuatro temas principales, presentados en el piso superior, donde se recogen alrededor de 500 artefactos:
</p>
<ul>
    <li><strong>Arte Popular:</strong> Aquí verás pinturas, esculturas y cerámicas únicas que hablan del espíritu creativo de los habitantes de Hoi An.</li>
    <li><strong>Artes Escénicas Populares:</strong> Aprenderás sobre las tradiciones locales, como la famosa Danza del Unicornio y la animada Danza Bai Chai. ¡Imagina las emocionantes actuaciones que se daban en las calles de Hoi An!</li>
    <li><strong>Aldeas Tradicionales:</strong> El museo mostrará cómo vivían las aldeas circundantes. Verás herramientas agrícolas y de pesca antiguas que hablan sobre las técnicas especializadas de diferentes asentamientos.</li>
    <li><strong>Forma de Vida Tradicional:</strong> Esta sección te sumergirá en la vida diaria de Hoi An, demostrando artículos relacionados con artesanías y producciones tradicionales: alfarería, tejido de seda y sastrería. Después de todo, ¡Hoi An no era solo un centro comercial, sino también un lugar donde se producían bienes únicos!</li>
</ul>
<p>
    Se debe prestar especial atención al <strong>uso extensivo de la madera</strong> en la construcción del propio edificio del museo. Escaleras, balaustradas, tabiques: todo está hecho con una habilidad increíble, y esto en sí mismo es una exhibición.
</p>

<h6>¿Por qué es esto importante e interesante?</h6>
<p>
    El Museo de la Cultura Popular ofrece una visión increíble de cómo funcionaba Hoi An, no solo como ciudad portuaria para comerciantes, sino también como centro de una cultura vibrante y en evolución de los residentes locales. Es un lugar donde la historia cobra vida a través de objetos cotidianos y habla del rico patrimonio de la región. Aquí puedes sentirte verdaderamente parte del antiguo Hoi An.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: 'Musée de la Culture Populaire',
      description:
        'Démonstration et introduction à la culture populaire et à la médecine vietnamienne.',
      fullDescription: `
<p>
    Si vous voulez vraiment sentir le pouls de l'ancien Hoi An, comprendre comment ses habitants vivaient pendant que les navires apportaient des marchandises exotiques, alors vous devez absolument visiter le <strong>Musée de la Culture Populaire</strong>. C'est l'un des six musées trésors de la vieille ville, et il est entièrement dédié à la vie quotidienne et aux traditions de Hoi An à son apogée en tant que port de commerce.
</p>
<p>
    Le musée est situé dans l'un des plus grands bâtiments résidentiels de la vieille ville, un magnifique manoir de deux étages avec une cour intérieure, qui est une œuvre d'art en soi. Son architecture est un délicieux mélange d'influences chinoises et d'éléments vietnamiens uniques, et il a très probablement été construit au milieu du XIXe siècle. Vous n'étudierez donc pas seulement les expositions, mais vous toucherez également à l'histoire du bâtiment lui-même !
</p>

<h6>500 artefacts et quatre thèmes qui racontent tout !</h6>
<p>
    À l'intérieur du musée, vous embarquerez pour un voyage fascinant à travers quatre thèmes principaux, présentés à l'étage supérieur, où sont rassemblés environ 500 artefacts :
</p>
<ul>
    <li><strong>Art populaire :</strong> Vous y verrez des peintures, sculptures et céramiques uniques qui témoignent de l'esprit créatif des habitants de Hoi An.</li>
    <li><strong>Arts du spectacle populaires :</strong> Vous en apprendrez davantage sur les traditions locales, telles que la célèbre Danse de la Licorne et la vive Danse Bai Chai. Imaginez les spectacles passionnants qui étaient donnés dans les rues de Hoi An !</li>
    <li><strong>Villages traditionnels :</strong> Le musée montrera comment vivaient les villages environnants. Vous y verrez d'anciens outils agricoles et de pêche qui racontent les techniques spécialisées de différentes colonies.</li>
    <li><strong>Mode de vie traditionnel :</strong> Cette section vous plongera dans la vie quotidienne de Hoi An, en présentant des objets liés aux métiers et productions traditionnels : poterie, tissage de la soie et couture. Après tout, Hoi An n'était pas seulement un centre commercial, mais aussi un lieu où des marchandises uniques étaient produites !</li>
</ul>
<p>
    Une attention particulière doit être portée à l'<strong>utilisation extensive du bois</strong> dans la construction du bâtiment du musée lui-même. Escaliers, balustrades, cloisons – tout est fait avec une habileté incroyable, et cela en soi est une exposition.
</p>

<h6>Pourquoi est-ce important et intéressant ?</h6>
<p>
    Le Musée de la Culture Populaire offre un aperçu incroyable du fonctionnement de Hoi An, non seulement en tant que ville portuaire pour les marchands, mais aussi en tant que centre d'une culture vibrante et en évolution de ses habitants. C'est un lieu où l'histoire prend vie à travers des objets du quotidien et raconte le riche patrimoine de la région. Ici, vous pouvez vraiment vous sentir partie prenante de l'ancien Hoi An.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo Tàng Văn Hóa Dân Gian',
      description:
        'Trình bày và giới thiệu văn hóa dân gian và y học Việt Nam.',
      fullDescription: `
<p>
    Nếu bạn thực sự muốn cảm nhận nhịp đập của Hội An cổ kính, để hiểu cuộc sống của cư dân nơi đây khi những con tàu mang đến hàng hóa exotic, thì bạn nhất định phải ghé thăm <strong>Bảo Tàng Văn Hóa Dân Gian</strong>. Đây là một trong sáu bảo tàng kho báu của Phố Cổ, và nó hoàn toàn dành riêng cho đời sống hàng ngày và truyền thống của Hội An trong thời kỳ hoàng kim là một thương cảng.
</p>
<p>
    Bảo tàng nằm trong một trong những tòa nhà dân cư lớn nhất của Phố Cổ, một biệt thự hai tầng tuyệt đẹp với một sân trong, bản thân nó đã là một tác phẩm nghệ thuật. Kiến trúc của nó là sự pha trộn thú vị giữa ảnh hưởng Trung Hoa và các yếu tố Việt Nam độc đáo, và rất có thể nó được xây dựng vào giữa thế kỷ 19. Vì vậy, bạn sẽ không chỉ nghiên cứu các hiện vật mà còn chạm vào lịch sử của chính tòa nhà!
</p>

<h6>500 Hiện vật và Bốn Chủ đề Kể Lại Tất Cả!</h6>
<p>
    Bên trong bảo tàng, bạn sẽ bắt đầu một hành trình thú vị qua bốn chủ đề chính, được trình bày ở tầng trên, nơi có khoảng 500 hiện vật được thu thập:
</p>
<ul>
    <li><strong>Nghệ thuật dân gian:</strong> Tại đây, bạn sẽ thấy những bức tranh, tác phẩm điêu khắc và gốm sứ độc đáo kể về tinh thần sáng tạo của cư dân Hội An.</li>
    <li><strong>Nghệ thuật biểu diễn dân gian:</strong> Bạn sẽ tìm hiểu về các truyền thống địa phương, chẳng hạn như Múa Lân nổi tiếng và Điệu Múa Bài Chòi sôi động. Hãy tưởng tượng những màn trình diễn thú vị đã được biểu diễn trên đường phố Hội An!</li>
    <li><strong>Làng nghề truyền thống:</strong> Bảo tàng sẽ cho thấy cuộc sống của các làng nghề xung quanh. Bạn sẽ thấy các công cụ nông nghiệp và ngư nghiệp cổ xưa kể về các kỹ thuật chuyên biệt của các khu định cư khác nhau.</li>
    <li><strong>Cách sống truyền thống:</strong> Phần này sẽ đưa bạn đắm mình vào đời sống hàng ngày của Hội An, trưng bày các vật phẩm liên quan đến các nghề thủ công và sản xuất truyền thống: gốm sứ, dệt lụa và may đo. Rốt cuộc, Hội An không chỉ là một trung tâm thương mại mà còn là nơi sản xuất ra những mặt hàng độc đáo!</li>
</ul>
<p>
    Cần đặc biệt chú ý đến <strong>việc sử dụng gỗ rộng rãi</strong> trong việc xây dựng chính tòa nhà bảo tàng. Cầu thang, lan can, vách ngăn – mọi thứ đều được làm bằng kỹ năng đáng kinh ngạc, và điều này tự nó đã là một hiện vật.
</p>

<h6>Tại sao điều này quan trọng và thú vị?</h6>
<p>
    Bảo Tàng Văn Hóa Dân Gian cung cấp một cái nhìn sâu sắc đáng kinh ngạc về cách Hội An hoạt động, không chỉ với tư cách là một thành phố cảng cho các thương nhân mà còn là trung tâm của một nền văn hóa sôi động, đang phát triển của người dân địa phương. Đó là một nơi mà lịch sử sống động qua các vật dụng hàng ngày và kể về di sản phong phú của khu vực. Tại đây, bạn có thể thực sự cảm thấy mình là một phần của Hội An cổ kính.
</p>

    `,
      internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // Consider removing or updating internalImageNames if they are generic or not specifically related to this museum.
    },

    slug: {
      en: 'museum-of-folk-culture',
      ru: 'muzey-narodnoy-kultury',
      es: 'museo-cultura-popular',
      fr: 'musee-culture-populaire',
      vn: 'bao-tang-van-hoa-dan-gian',
    },
  },
  // Teochew Assembly Hall
  {
    id: 'teochew-assembly-hall',
    coordinates: [15.877797676562944, 108.33307758196435],
    category: ['museum'],
    imageUrl: '18.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Teochew Assembly Hall',
      description:
        'This hall was originally a center for the social and religious life of all Teochew Chinese.',
      fullDescription: `
<p>
    Among the many magnificent assembly halls of Hoi An, there is one that immediately catches the eye with its special style and rich history – it's the <strong>Teochew Assembly Hall</strong>. It is also called Trieu Chau Assembly Hall or, simply, Ong Bon Pagoda. And it's no coincidence, as it was built by the Chinese community from the Chaozhou (Teochew) region in distant 1845!
</p>
<img src="43.jpg" alt="Teochew Assembly Hall"/>
<p>
    This hall was originally a center for the social and religious life of all Teochew Chinese who lived and traded in Hoi An. It served as a place for meetings, festivals, and mutual assistance. And although the hall has been repeatedly renovated and rebuilt, especially in 1887, 1970, and 1991, it has retained its unique appearance and status as one of the few ancient relics of Vietnam, recognized even by the French School of the Far East!
</p>
<h6>Architectural Magic and the Art of Details</h6>
<img src="44.jpg" alt="Teochew Assembly Hall"/>
<p>
    The Teochew Assembly Hall is a true architectural masterpiece, where Chinese style harmoniously intertwines with local Vietnamese elements. Its layout is very symbolic and follows the Chinese character "国" (guó), meaning "country" or "nation," with three main parts: a front courtyard, an inner courtyard, and a main hall.
</p>
<img src="45.jpg" alt="Teochew Assembly Hall"/>
<ul>
    <li>Entry to the hall is through impressive <strong>Triple Gates</strong> with three roofs. Above the middle entrance hangs a plaque with four characters: "Teochew Chinese Congregation Assembly Hall." And the metal gates are adorned with images of carp, which, as you recall, symbolize good luck!</li>
    <li>On either side of the middle entrance, you'll be greeted by two stone figures of guardian lions, ready to protect this sacred place from evil spirits.</li>
    <li>The facade is made of skillfully carved stone slabs, decorated with popular motifs: carp transforming into dragons (any merchant's dream!), four sacred beasts, and graceful butterflies. Every detail here has deep meaning.</li>
    <li>The main worship hall is built of wood and stone. Its rafters and beams are richly decorated with carved patterns, birds, and mythical characters. You'll see carved dragons and fish on the wooden columns, which create a very solemn and impressive appearance.</li>
    <li>The hall is famous for its art of embossing and inlay, often using porcelain, which gives the structure a special beauty. And incense coils with paper prayers hang from the ceilings, filling the air with a mysterious aroma.</li>
    <li>Inside the complex, there are two beautiful courtyards that create a cozy oasis, providing tranquility away from the noisy street.</li>
    <li>On the sides of the main hall are the East and West houses, which could be used for community events and perhaps even for Chinese language lessons for children.</li>
</ul>
<h6>The General Who Calms the Waves and Secrets Beneath the Earth</h6>
<img src="46.jpg" alt="Teochew Assembly Hall"/>
<p>
    The main deity worshipped in the central sanctuary is <strong>Ong Bon</strong>, or Ma Yuan – a Chinese warlord who lived before our era and was deified after death. His official title is "General who calms the waves." He was prayed to for safe passage and successful trade at sea, which was vital for Teochew merchants whose lives depended on sea voyages.
</p>
<p>
    In addition to religious purposes, the Teochew Assembly Hall has always been a crucial center for preserving and spreading the culture and spiritual values of the Teochew community in Hoi An. Festivals and cultural events are still regularly held here, attracting both the local Chinese community and tourists.
</p>
<img src="47.jpg" alt="Teochew Assembly Hall"/>
<p>
    And finally, a little secret: in 1989, archaeologists discovered many ceramic items and ancient coins from the 15th-20th centuries, made in China, Japan, and Vietnam, beneath the Teochew Assembly Hall! These finds once again prove that Hoi An was an incredibly bustling trading port.
</p>
<p>
    The Teochew Assembly Hall is one of the most important and unique architectural and cultural sites in Hoi An. Be sure to stop by to delve into history and understand how different cultures shaped this ancient city.
</p>
    `,
      internalImageNames: ['43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Сборный зал Теотёу',
      description:
        'Этот зал изначально был центром общественной и религиозной жизни всех китайцев Теотёу.',
      fullDescription: `
<p>
    Среди множества великолепных сборных залов Хойана есть один, который сразу бросается в глаза своим особым стилем и богатой историей – это <strong>Сборный зал Теотёу</strong>. Его также называют Сборным залом Триеу Чау или, проще говоря, Пагодой Онг Бон. И это не случайно, ведь он был построен китайской общиной из региона Чаочжоу (Теотёу) в далеком 1845 году!
</p>
<img src="43.jpg" alt="Сборный зал Теотёу"/>
<p>
    Этот зал изначально был центром общественной и религиозной жизни всех китайцев Теотёу, живших и торговавших в Хойане. Он служил местом для собраний, праздников и взаимопомощи. И хотя зал неоднократно реставрировался и перестраивался, особенно в 1887, 1970 и 1991 годах, он сохранил свой неповторимый облик и статус одной из немногих древних реликвий Вьетнама, признанных даже Французской школой Дальнего Востока!
</p>

<h6>Архитектурная магия и искусство деталей</h6>
<img src="44.jpg" alt="Сборный зал Теотёу"/>
<p>
    Сборный зал Теотёу – это настоящий архитектурный шедевр, где китайский стиль гармонично переплетается с местными вьетнамскими элементами. Его планировка очень символична и следует китайскому иероглифу «国» (guó), что означает «страна» или «нация», с тремя основными частями: передним двором, внутренним двором и главным залом.
</p>
<img src="45.jpg" alt="Сборный зал Теотёу"/>
<ul>
    <li>Вход в зал осуществляется через впечатляющие <strong>Тройные Ворота</strong> с тремя крышами. Над средним входом висит табличка с четырьмя иероглифами: «Сборный зал китайской общины Теотёу». А металлические ворота украшены изображениями карпов, которые, как вы помните, символизируют удачу!</li>
    <li>По обе стороны от среднего входа вас встретят две каменные фигуры львов-хранителей, готовых защищать это священное место от злых духов.</li>
    <li>Фасад выполнен из искусно вырезанных каменных плит, украшенных популярными мотивами: карпы, превращающиеся в драконов (мечта любого торговца!), четыре священных зверя и изящные бабочки. Каждая деталь здесь имеет глубокий смысл.</li>
    <li>Главный молитвенный зал построен из дерева и камня. Его стропила и балки богато украшены резными узорами, птицами и мифическими персонажами. Вы увидите резных драконов и рыб на деревянных колоннах, которые создают очень торжественный и впечатляющий вид.</li>
    <li>Зал славится своим искусством чеканки и инкрустации, часто с использованием фарфора, что придает строению особую красоту. А с потолков свисают спирали благовоний с бумажными молитвами, наполняя воздух таинственным ароматом.</li>
    <li>Внутри комплекса расположены два красивых внутренних двора, которые создают уютный оазис, обеспечивая спокойствие вдали от шумной улицы.</li>
    <li>По бокам главного зала находятся Восточный и Западный дома, которые могли использоваться для общественных мероприятий и, возможно, даже для уроков китайского языка для детей.</li>
</ul>

<h6>Генерал, усмиряющий волны, и секреты под землей</h6>
<img src="46.jpg" alt="Сборный зал Теотёу"/>
<p>
    Главным божеством, которому поклоняются в центральном святилище, является <strong>Онг Бон</strong>, или Ма Юань – китайский военачальник, живший до нашей эры и обожествленный после смерти. Его официальный титул – «Генерал, усмиряющий волны». Ему молились о безопасном путешествии и успешной торговле на море, что было жизненно важно для торговцев Теотёу, чья жизнь зависела от морских походов.
</p>
<p>
    Помимо религиозных целей, Сборный зал Теотёу всегда был важнейшим центром сохранения и распространения культуры и духовных ценностей общины Теотёу в Хойане. Здесь до сих пор регулярно проводятся фестивали и культурные мероприятия, привлекающие как местную китайскую общину, так и туристов.
</p>
<img src="47.jpg" alt="Сборный зал Теотёу"/>
<p>
    И напоследок маленький секрет: в 1989 году археологи обнаружили под Сборным залом Теотёу множество керамических изделий и древних монет XV–XX веков, изготовленных в Китае, Японии и Вьетнаме! Эти находки еще раз доказывают, что Хойан был невероятно оживленным торговым портом.
</p>
<p>
    Сборный зал Теотёу – одно из самых важных и уникальных архитектурных и культурных мест в Хойане. Обязательно загляните сюда, чтобы погрузиться в историю и понять, как различные культуры формировали этот древний город.
</p>
    `,
      internalImageNames: ['43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Sala de Asamblea Teochew',
      description:
        'Esta sala fue originalmente un centro para la vida social y religiosa de todos los chinos Teochew.',
      fullDescription: `
<p>
    Entre las muchas magníficas salas de asamblea de Hoi An, hay una que inmediatamente llama la atención por su estilo especial y su rica historia: es la <strong>Sala de Asamblea Teochew</strong>. También se le llama Sala de Asamblea Trieu Chau o, simplemente, Pagoda Ong Bon. Y no es una coincidencia, ya que fue construida por la comunidad china de la región de Chaozhou (Teochew) en el lejano 1845.
</p>
<img src="43.jpg" alt="Sala de Asamblea Teochew"/>
<p>
    Esta sala fue originalmente un centro para la vida social y religiosa de todos los chinos Teochew que vivían y comerciaban en Hoi An. Sirvió como lugar para reuniones, festivales y ayuda mutua. Y aunque la sala ha sido repetidamente renovada y reconstruida, especialmente en 1887, 1970 y 1991, ha conservado su apariencia única y su estatus como una de las pocas reliquias antiguas de Vietnam, reconocida incluso por la Escuela Francesa del Lejano Oriente.
</p>

<h6>Magia Arquitectónica y el Arte de los Detalles</h6>
<img src="44.jpg" alt="Sala de Asamblea Teochew"/>
<p>
    La Sala de Asamblea Teochew es una verdadera obra maestra arquitectónica, donde el estilo chino se entrelaza armoniosamente con elementos vietnamitas locales. Su diseño es muy simbólico y sigue el carácter chino "国" (guó), que significa "país" o "nación", con tres partes principales: un patio delantero, un patio interior y una sala principal.
</p>
<img src="45.jpg" alt="Sala de Asamblea Teochew"/>
<ul>
    <li>La entrada a la sala es a través de impresionantes <strong>Puertas Triples</strong> con tres tejados. Sobre la entrada central cuelga una placa con cuatro caracteres: "Sala de Asamblea de la Congregación China Teochew". ¡Y las puertas de metal están adornadas con imágenes de carpas, que, como recordarán, simbolizan la buena suerte!</li>
    <li>A cada lado de la entrada central, serás recibido por dos figuras de piedra de leones guardianes, listos para proteger este lugar sagrado de los malos espíritus.</li>
    <li>La fachada está hecha de losas de piedra hábilmente talladas, decoradas con motivos populares: carpas transformándose en dragones (¡el sueño de cualquier comerciante!), cuatro bestias sagradas y gráciles mariposas. Cada detalle aquí tiene un significado profundo.</li>
    <li>La sala principal de culto está construida de madera y piedra. Sus vigas y dinteles están ricamente decorados con patrones tallados, pájaros y personajes míticos. Verás dragones y peces tallados en las columnas de madera, lo que crea una apariencia muy solemne e impresionante.</li>
    <li>La sala es famosa por su arte de repujado e incrustaciones, a menudo utilizando porcelana, lo que le da a la estructura una belleza especial. Y espirales de incienso con oraciones de papel cuelgan de los techos, llenando el aire con un aroma misterioso.</li>
    <li>Dentro del complejo, hay dos hermosos patios que crean un oasis acogedor, proporcionando tranquilidad lejos de la ruidosa calle.</li>
    <li>A los lados de la sala principal se encuentran las casas Este y Oeste, que podrían usarse para eventos comunitarios y quizás incluso para lecciones de chino para niños.</li>
</ul>

<h6>El General que Calma las Olas y Secretos Bajo la Tierra</h6>
<img src="46.jpg" alt="Sala de Asamblea Teochew"/>
<p>
    La deidad principal adorada en el santuario central es <strong>Ong Bon</strong>, o Ma Yuan, un caudillo chino que vivió antes de nuestra era y fue deificado después de su muerte. Su título oficial es "General que calma las olas". Se le oraba por un paso seguro y un comercio exitoso en el mar, lo cual era vital para los comerciantes Teochew cuyas vidas dependían de los viajes por mar.
</p>
<p>
    Además de sus propósitos religiosos, la Sala de Asamblea Teochew siempre ha sido un centro crucial para preservar y difundir la cultura y los valores espirituales de la comunidad Teochew en Hoi An. Los festivales y eventos culturales todavía se celebran regularmente aquí, atrayendo tanto a la comunidad china local como a los turistas.
</p>
<img src="47.jpg" alt="Sala de Asamblea Teochew"/>
<p>
    Y finalmente, un pequeño secreto: en 1989, los arqueólogos descubrieron muchos objetos de cerámica y monedas antiguas de los siglos XV al XX, fabricados en China, Japón y Vietnam, ¡debajo de la Sala de Asamblea Teochew! Estos hallazgos demuestran una vez más que Hoi An fue un puerto comercial increíblemente bullicioso.
</p>
<p>
    La Sala de Asamblea Teochew es uno de los sitios arquitectónicos y culturales más importantes y únicos de Hoi An. Asegúrate de pasar para adentrarte en la historia y comprender cómo las diferentes culturas dieron forma a esta antigua ciudad.
</p>
    `,
      internalImageNames: ['43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Salle de l'Assemblée de Teochew",
      description:
        "Cette salle était à l'origine un centre de la vie sociale et religieuse de tous les Chinois Teochew.",
      fullDescription: `
<p>
    Parmi les nombreuses magnifiques salles d'assemblée de Hoi An, il en est une qui attire immédiatement le regard par son style particulier et sa riche histoire – c'est la <strong>Salle de l'Assemblée de Teochew</strong>. Elle est également appelée Salle de l'Assemblée de Trieu Chau ou, simplement, Pagode Ong Bon. Et ce n'est pas un hasard, car elle a été construite par la communauté chinoise de la région de Chaozhou (Teochew) en 1845 !
</p>
<img src="43.jpg" alt="Salle de l'Assemblée de Teochew"/>
<p>
    Cette salle était à l'origine un centre de la vie sociale et religieuse de tous les Chinois Teochew qui vivaient et commerçaient à Hoi An. Elle servait de lieu de réunion, de festivals et d'entraide. Et bien que la salle ait été à plusieurs reprises rénovée et reconstruite, notamment en 1887, 1970 et 1991, elle a conservé son apparence unique et son statut de l'une des rares reliques anciennes du Vietnam, reconnue même par l'École française d'Extrême-Orient !
</p>

<h6>Magie architecturale et l'art des détails</h6>
<img src="44.jpg" alt="Salle de l'Assemblée de Teochew"/>
<p>
    La Salle de l'Assemblée de Teochew est un véritable chef-d'œuvre architectural, où le style chinois s'entremêle harmonieusement avec des éléments vietnamiens locaux. Sa disposition est très symbolique et suit le caractère chinois « 国 » (guó), signifiant « pays » ou « nation », avec trois parties principales : une cour avant, une cour intérieure et un hall principal.
</p>
<img src="45.jpg" alt="Salle de l'Assemblée de Teochew"/>
<ul>
    <li>L'entrée de la salle se fait par d'impressionnantes <strong>Portes Triples</strong> à trois toits. Au-dessus de l'entrée centrale est suspendue une plaque avec quatre caractères : « Salle de l'Assemblée de la Congrégation chinoise de Teochew ». Et les portes métalliques sont ornées d'images de carpes, qui, comme vous vous en souvenez, symbolisent la bonne fortune !</li>
    <li>De chaque côté de l'entrée centrale, vous serez accueillis par deux figures de pierre de lions gardiens, prêts à protéger ce lieu sacré des mauvais esprits.</li>
    <li>La façade est faite de dalles de pierre habilement sculptées, décorées de motifs populaires : des carpes se transformant en dragons (le rêve de tout marchand !), quatre bêtes sacrées et de gracieuses papillons. Chaque détail ici a une signification profonde.</li>
    <li>Le hall principal de culte est construit en bois et en pierre. Ses chevrons et ses poutres sont richement décorés de motifs sculptés, d'oiseaux et de personnages mythiques. Vous verrez des dragons et des poissons sculptés sur les colonnes en bois, ce qui crée une apparence très solennelle et impressionnante.</li>
    <li>La salle est célèbre pour son art du gaufrage et de l'incrustation, utilisant souvent de la porcelaine, ce qui donne à la structure une beauté particulière. Et des spirales d'encens avec des prières en papier pendent des plafonds, emplissant l'air d'un arôme mystérieux.</li>
    <li>À l'intérieur du complexe, il y a deux belles cours qui créent une oasis confortable, offrant la tranquillité loin de la rue bruyante.</li>
    <li>Sur les côtés du hall principal se trouvent les maisons Est et Ouest, qui pouvaient être utilisées pour des événements communautaires et peut-être même pour des cours de chinois pour les enfants.</li>
</ul>

<h6>Le général qui calme les vagues et les secrets sous la terre</h6>
<img src="46.jpg" alt="Salle de l'Assemblée de Teochew"/>
<p>
    La divinité principale adorée dans le sanctuaire central est <strong>Ong Bon</strong>, ou Ma Yuan – un chef de guerre chinois qui a vécu avant notre ère et a été déifié après sa mort. Son titre officiel est « Général qui calme les vagues ». On le priait pour un passage sûr et un commerce réussi en mer, ce qui était vital pour les marchands de Teochew dont la vie dépendait des voyages en mer.
</p>
<p>
    En plus de ses objectifs religieux, la Salle de l'Assemblée de Teochew a toujours été un centre crucial pour la préservation et la diffusion de la culture et des valeurs spirituelles de la communauté Teochew à Hoi An. Des festivals et des événements culturels y sont toujours régulièrement organisés, attirant à la fois la communauté chinoise locale et les touristes.
</p>
<img src="47.jpg" alt="Salle de l'Assemblée de Teochew"/>
<p>
    Et enfin, un petit secret : en 1989, des archéologues ont découvert de nombreux objets en céramique et des pièces de monnaie anciennes des XVe-XXe siècles, fabriqués en Chine, au Japon et au Vietnam, sous la Salle de l'Assemblée de Teochew ! Ces découvertes prouvent une fois de plus que Hoi An était un port commercial incroyablement animé.
</p>
<p>
    La Salle de l'Assemblée de Teochew est l'un des sites architecturaux et culturels les plus importants et les plus uniques de Hoi An. N'oubliez pas de vous arrêter pour vous plonger dans l'histoire et comprendre comment différentes cultures ont façonné cette ville ancienne.
</p>
    `,
      internalImageNames: ['43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Hội Quán Triều Châu',
      description:
        'Hội quán này ban đầu là trung tâm sinh hoạt xã hội và tôn giáo của tất cả người Hoa Triều Châu.',
      fullDescription: `
<p>
    Trong số nhiều hội quán lộng lẫy ở Hội An, có một hội quán ngay lập tức thu hút ánh nhìn bởi phong cách đặc biệt và lịch sử phong phú của nó – đó là <strong>Hội Quán Triều Châu</strong>. Nó còn được gọi là Hội Quán Triều Châu hoặc đơn giản là Chùa Ông Bổn. Và điều này không phải ngẫu nhiên, vì nó được cộng đồng người Hoa từ vùng Triều Châu (Teochew) xây dựng vào năm 1845 xa xôi!
</p>
<img src="43.jpg" alt="Hội Quán Triều Châu"/>
<p>
    Hội quán này ban đầu là trung tâm sinh hoạt xã hội và tôn giáo của tất cả người Hoa Triều Châu sống và buôn bán tại Hội An. Nó phục vụ như một nơi để họp mặt, tổ chức lễ hội và tương trợ lẫn nhau. Và mặc dù hội quán đã nhiều lần được trùng tu và xây dựng lại, đặc biệt vào các năm 1887, 1970 và 1991, nó vẫn giữ được vẻ ngoài độc đáo và địa vị là một trong số ít di tích cổ kính của Việt Nam, được cả Trường Viễn Đông Bác Cổ của Pháp công nhận!
</p>

<h6>Kiến trúc huyền diệu và nghệ thuật chi tiết</h6>
<img src="44.jpg" alt="Hội Quán Triều Châu"/>
<p>
    Hội Quán Triều Châu là một kiệt tác kiến trúc thực sự, nơi phong cách Trung Hoa hài hòa đan xen với các yếu tố Việt Nam địa phương. Bố cục của nó rất tượng trưng và theo chữ "国" (guó) trong tiếng Trung, có nghĩa là "quốc gia" hoặc "dân tộc", với ba phần chính: một sân trước, một sân trong và một sảnh chính.
</p>
<img src="45.jpg" alt="Hội Quán Triều Châu"/>
<ul>
    <li>Lối vào hội quán thông qua <strong>Tam Quan</strong> ấn tượng với ba mái. Phía trên lối vào chính giữa treo một tấm biển với bốn chữ: "Triều Châu Hoa Kiều Hội Quán". Và cổng kim loại được trang trí bằng hình ảnh cá chép, mà như bạn nhớ, tượng trưng cho sự may mắn!</li>
    <li>Ở hai bên lối vào chính giữa, bạn sẽ được chào đón bởi hai tượng đá sư tử canh gác, sẵn sàng bảo vệ nơi linh thiêng này khỏi tà khí.</li>
    <li>Mặt tiền được làm bằng các tấm đá được chạm khắc khéo léo, trang trí bằng các họa tiết phổ biến: cá chép hóa rồng (ước mơ của mọi thương nhân!), bốn loài linh thú và những con bướm duyên dáng. Mỗi chi tiết ở đây đều mang ý nghĩa sâu sắc.</li>
    <li>Sảnh thờ chính được xây dựng bằng gỗ và đá. Các xà và kèo của nó được trang trí phong phú với các hoa văn chạm khắc, chim và các nhân vật thần thoại. Bạn sẽ thấy những con rồng và cá được chạm khắc trên các cột gỗ, tạo nên một vẻ ngoài rất trang trọng và ấn tượng.</li>
    <li>Hội quán nổi tiếng với nghệ thuật chạm khắc nổi và khảm, thường sử dụng gốm sứ, mang lại vẻ đẹp đặc biệt cho công trình. Và những vòng nhang lớn với những lời cầu nguyện trên giấy treo từ trần nhà, lấp đầy không khí bằng một hương thơm bí ẩn.</li>
    <li>Bên trong khu phức hợp, có hai sân trong xinh đẹp tạo nên một ốc đảo ấm cúng, mang lại sự yên bình tránh xa con phố ồn ào.</li>
    <li>Ở hai bên sảnh chính là nhà Đông và nhà Tây, có thể được sử dụng cho các sự kiện cộng đồng và thậm chí có thể là các lớp học tiếng Trung cho trẻ em.</li>
</ul>

<h6>Vị tướng dẹp yên sóng gió và những bí mật dưới lòng đất</h6>
<img src="46.jpg" alt="Hội Quán Triều Châu"/>
<p>
    Vị thần chính được thờ cúng tại gian thờ trung tâm là <strong>Ông Bổn</strong>, hay Mã Viện – một tướng lĩnh Trung Quốc sống trước Công nguyên và được thần thánh hóa sau khi qua đời. Chức danh chính thức của ông là "Phục Ba Tướng Quân". Người ta cầu nguyện ông phù hộ cho những chuyến đi biển an toàn và giao thương thành công trên biển, điều này rất quan trọng đối với các thương nhân Triều Châu mà cuộc sống của họ phụ thuộc vào những chuyến đi biển.
</p>
<p>
    Ngoài mục đích tôn giáo, Hội Quán Triều Châu luôn là một trung tâm quan trọng để bảo tồn và truyền bá văn hóa và giá trị tinh thần của cộng đồng người Triều Châu tại Hội An. Các lễ hội và sự kiện văn hóa vẫn được tổ chức thường xuyên tại đây, thu hút cả cộng đồng người Hoa địa phương và khách du lịch.
</p>
<img src="47.jpg" alt="Hội Quán Triều Châu"/>
<p>
    Và cuối cùng, một bí mật nhỏ: vào năm 1989, các nhà khảo cổ đã phát hiện nhiều đồ gốm sứ và tiền xu cổ từ thế kỷ 15-20, được sản xuất tại Trung Quốc, Nhật Bản và Việt Nam, bên dưới Hội Quán Triều Châu! Những phát hiện này một lần nữa chứng minh rằng Hội An là một thương cảng vô cùng sầm uất.
</p>
<p>
    Hội Quán Triều Châu là một trong những di tích kiến trúc và văn hóa quan trọng và độc đáo nhất ở Hội An. Hãy chắc chắn ghé qua để tìm hiểu sâu hơn về lịch sử và hiểu cách các nền văn hóa khác nhau đã định hình thành phố cổ này.
</p>
    `,
      internalImageNames: ['43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg'],
    },

    slug: {
      en: 'teochew-assembly-hall',
      ru: 'sbornyy-zal-tyochou',
      es: 'sala-asamblea-teochew',
      fr: 'salle-assemblee-teochew',
      vn: 'hoi-quan-trieu-chau',
    },
  },
  // Precious Heritage Art Gallery Museum
  {
    id: 'precious-heritage-art-gallery-museum',
    coordinates: [15.877098800954702, 108.33427527794125],
    category: ['art-galleries', 'museum'],
    imageUrl: '48.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Precious Heritage Art Gallery Museum',
      description: 'Every Portrait is an Open Soul of Vietnam!',
      fullDescription: `
<p>
    For a moment, forget about ancient temples and trading houses. In Hoi An, there's a truly special place where history is written not in stone, but in human faces and stories. We're talking about the <strong>Precious Heritage Art Gallery Museum</strong>, a project by French photographer <strong>Réhahn</strong>, a man called "the photographer who captures the souls of his models."
</p>
<img src="49.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    Réhahn is not just a man with a camera. He is a true explorer of humanity who traveled to over 35 countries before settling in his beloved Hoi An. For him, photography is a way to get closer to people, hear their stories, and understand their culture. "Good contact (and photography) starts with respect," says Réhahn, and his works reflect this in every frame.
</p>

<h6>"Hidden Smile" and a Project That Changed Lives</h6>
<p>
    In 2011, Réhahn met a woman who changed everything – a 72-year-old boat captain named <strong>Bui Thi Xong</strong>. When he asked to take her portrait, she shyly laughed and covered her mouth. This is how the legendary photograph <strong>"Hidden Smile"</strong> came to be – a photo that conquered the world, became the most expensive Asian photograph (sold for $150,000!), and was even presented by the President of Vietnam to Emmanuel Macron.
</p>
<img src="52.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    For Réhahn, this photograph is "the embodiment of true Vietnam," a mix of modesty, humor, wisdom, and happiness. And it was this encounter that inspired him to create the <strong>Giving Back Project</strong>, a project to return a portion of the profits to the subjects of his photographs.
</p>
<p>
    But "Hidden Smile" was just the beginning. Another iconic work is the portrait of a girl named An Phuoc with blue eyes from the Cham people, which graced the covers of international magazines. Réhahn never rushes; he waits for trust to develop naturally. "The success of a portrait depends not on technique, but on a sincere and meaningful connection with the subject," he believes.
</p>

<h6>Precious Heritage Museum: The Heart of Vietnamese Diversity</h6>
<p>
    Réhahn's most ambitious project is <strong>Precious Heritage</strong>. It began with studying the 54 ethnic groups of Vietnam and evolved into a decade-long exploration of their cultural heritage, crafts, and stories. By 2020, Réhahn completed his mission, having met representatives of all groups.
</p>
<img src="51.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    And the result of this incredible work is the <strong>Precious Heritage Museum in Hoi An</strong>, opened in 2017. It is the only museum in the world that houses artifacts from all ethnic groups of Vietnam! Imagine: 100 stunning photographs, 62 authentic national costumes, five halls, and 500 square meters of space dedicated to cultural diversity.
</p>
<p>
    "Before Vietnam, I couldn't imagine a country where so many languages, traditions, and identities coexist," says Réhahn. His mission is to preserve this fragile and unique heritage.
</p>
<p>
    Visiting the Precious Heritage Art Gallery Museum is not just a tour; it's an emotional journey that will allow you to glimpse into the most hidden corners of Vietnam through the faces of its people. Prepare to leave inspired and with a smile on your face!
</p>
<img src="50.jpg" alt="Precious Heritage Art Gallery Museum"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей-галерея искусства «Ценное наследие»',
      description: 'Каждый портрет — открытая душа Вьетнама!',
      fullDescription: `
<p>
    На мгновение забудьте о древних храмах и торговых домах. В Хойане есть поистине особенное место, где история пишется не камнем, а человеческими лицами и рассказами. Речь идет о <strong>Музее-галерее искусства «Ценное наследие»</strong> — проекте французского фотографа <strong>Реана (Réhahn)</strong>, человека, которого называют «фотографом, улавливающим души своих моделей».
</p>
<img src="49.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    Реан — не просто человек с камерой. Он настоящий исследователь человечества, который путешествовал по более чем 35 странам, прежде чем поселиться в своем любимом Хойане. Для него фотография — это способ сблизиться с людьми, услышать их истории и понять их культуру. «Хороший контакт (и фотография) начинаются с уважения», — говорит Реан, и его работы отражают это в каждом кадре.
</p>

<h6>«Скрытая улыбка» и проект, изменивший жизни</h6>
<p>
    В 2011 году Реан встретил женщину, которая изменила все, — 72-летнюю капитаншу лодки по имени <strong>Буй Тхи Сонг</strong>. Когда он попросил ее разрешения сделать портрет, она застенчиво засмеялась и прикрыла рот. Так появилась легендарная фотография <strong>«Скрытая улыбка»</strong> — снимок, который покорил мир, стал самой дорогой азиатской фотографией (продан за 150 000 долларов!) и даже был подарен президентом Вьетнама Эммануэлю Макрону.
</p>
<img src="52.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    Для Реана эта фотография — «воплощение истинного Вьетнама», смесь скромности, юмора, мудрости и счастья. И именно эта встреча вдохновила его на создание <strong>проекта «Возвращая должное» (Giving Back Project)</strong> — проекта по возвращению части прибыли героям его фотографий.
</p>
<p>
    Но «Скрытая улыбка» была лишь началом. Еще одна знаковая работа — портрет девочки по имени Ан Фуок с голубыми глазами из народа Чам, который украшал обложки международных журналов. Реан никогда не торопится; он ждет, пока доверие разовьется естественным образом. «Успех портрета зависит не от техники, а от искренней и значимой связи с моделью», — считает он.
</p>

<h6>Музей «Ценное наследие»: сердце вьетнамского разнообразия</h6>
<p>
    Самый амбициозный проект Реана — <strong>«Ценное наследие» (Precious Heritage)</strong>. Он начался с изучения 54 этнических групп Вьетнама и превратился в десятилетнее исследование их культурного наследия, ремесел и историй. К 2020 году Реан завершил свою миссию, встретившись с представителями всех групп.
</p>
<img src="51.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    И результатом этой невероятной работы стал <strong>Музей «Ценное наследие» в Хойане</strong>, открытый в 2017 году. Это единственный в мире музей, в котором хранятся артефакты всех этнических групп Вьетнама! Представьте себе: 100 потрясающих фотографий, 62 подлинных национальных костюма, пять залов и 500 квадратных метров площади, посвященной культурному разнообразию.
</p>
<p>
    «До Вьетнама я не мог представить себе страну, где сосуществуют столько языков, традиций и идентичностей», — говорит Реан. Его миссия — сохранить это хрупкое и уникальное наследие.
</p>
<p>
    Посещение Музея-галереи искусства «Ценное наследие» — это не просто экскурсия; это эмоциональное путешествие, которое позволит вам заглянуть в самые потаенные уголки Вьетнама через лица его людей. Приготовьтесь уйти вдохновленными и с улыбкой на лице!
</p>
<img src="50.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo Galería de Arte Patrimonio Precioso',
      description: '¡Cada retrato es un alma abierta de Vietnam!',
      fullDescription: `
<p>
    Por un momento, olvídese de los templos antiguos y las casas comerciales. En Hoi An, hay un lugar verdaderamente especial donde la historia no está escrita en piedra, sino en rostros e historias humanas. Estamos hablando del <strong>Museo Galería de Arte Patrimonio Precioso</strong>, un proyecto del fotógrafo francés <strong>Réhahn</strong>, un hombre llamado "el fotógrafo que captura las almas de sus modelos".
</p>
<img src="49.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Réhahn no es solo un hombre con una cámara. Es un verdadero explorador de la humanidad que viajó por más de 35 países antes de establecerse en su amado Hoi An. Para él, la fotografía es una forma de acercarse a las personas, escuchar sus historias y comprender su cultura. "Un buen contacto (y fotografía) comienza con el respeto", dice Réhahn, y sus obras lo reflejan en cada encuadre.
</p>

<h6>"Sonrisa Oculta" y un Proyecto que Cambió Vidas</h6>
<p>
    En 2011, Réhahn conoció a una mujer que lo cambió todo: una capitana de barco de 72 años llamada <strong>Bui Thi Xong</strong>. Cuando le pidió tomar su retrato, ella se rió tímidamente y se cubrió la boca. Así nació la legendaria fotografía <strong>"Sonrisa Oculta"</strong>, una foto que conquistó el mundo, se convirtió en la fotografía asiática más cara (¡vendida por $150,000!), e incluso fue presentada por el Presidente de Vietnam a Emmanuel Macron.
</p>
<img src="52.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Para Réhahn, esta fotografía es "la encarnación del verdadero Vietnam", una mezcla de modestia, humor, sabiduría y felicidad. Y fue este encuentro lo que lo inspiró a crear el <strong>Proyecto de Devolución (Giving Back Project)</strong>, un proyecto para devolver una parte de las ganancias a los sujetos de sus fotografías.
</p>
<p>
    Pero "Sonrisa Oculta" fue solo el comienzo. Otra obra icónica es el retrato de una niña llamada An Phuoc con ojos azules del pueblo Cham, que apareció en las portadas de revistas internacionales. Réhahn nunca se apresura; espera que la confianza se desarrolle naturalmente. "El éxito de un retrato no depende de la técnica, sino de una conexión sincera y significativa con el sujeto", cree.
</p>

<h6>Museo Patrimonio Precioso: El Corazón de la Diversidad Vietnamita</h6>
<p>
    El proyecto más ambicioso de Réhahn es <strong>Patrimonio Precioso (Precious Heritage)</strong>. Comenzó con el estudio de los 54 grupos étnicos de Vietnam y evolucionó hacia una exploración de una década de su patrimonio cultural, artesanías e historias. Para 2020, Réhahn completó su misión, habiendo conocido a representantes de todos los grupos.
</p>
<img src="51.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Y el resultado de este increíble trabajo es el <strong>Museo Patrimonio Precioso en Hoi An</strong>, inaugurado en 2017. ¡Es el único museo en el mundo que alberga artefactos de todos los grupos étnicos de Vietnam! Imagínese: 100 fotografías impresionantes, 62 trajes nacionales auténticos, cinco salas y 500 metros cuadrados de espacio dedicados a la diversidad cultural.
</p>
<p>
    "Antes de Vietnam, no podía imaginar un país donde coexistieran tantos idiomas, tradiciones e identidades", dice Réhahn. Su misión es preservar este patrimonio frágil y único.
</p>
<p>
    Visitar el Museo Galería de Arte Patrimonio Precioso no es solo un recorrido; es un viaje emocional que le permitirá vislumbrar los rincones más ocultos de Vietnam a través de los rostros de su gente. ¡Prepárese para irse inspirado y con una sonrisa en su rostro!
</p>
<img src="50.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Musée-Galerie d'Art du Patrimoine Précieux",
      description: 'Chaque portrait est une âme ouverte du Vietnam !',
      fullDescription: `
<p>
    Oubliez un instant les temples anciens et les maisons de commerce. À Hoi An, il existe un lieu vraiment spécial où l'histoire n'est pas écrite dans la pierre, mais dans les visages et les histoires humaines. Nous parlons du <strong>Musée-Galerie d'Art du Patrimoine Précieux</strong>, un projet du photographe français <strong>Réhahn</strong>, un homme surnommé "le photographe qui capture l'âme de ses modèles".
</p>
<img src="49.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Réhahn n'est pas seulement un homme avec un appareil photo. C'est un véritable explorateur de l'humanité qui a voyagé dans plus de 35 pays avant de s'installer dans son cher Hoi An. Pour lui, la photographie est un moyen de se rapprocher des gens, d'écouter leurs histoires et de comprendre leur culture. "Un bon contact (et la photographie) commence par le respect", dit Réhahn, et ses œuvres le reflètent dans chaque image.
</p>

<h6>"Sourire Caché" et un projet qui a changé des vies</h6>
<p>
    En 2011, Réhahn a rencontré une femme qui a tout changé – une capitaine de bateau de 72 ans nommée <strong>Bui Thi Xong</strong>. Quand il lui a demandé de prendre son portrait, elle a ri timidement et a couvert sa bouche. C'est ainsi qu'est née la légendaire photographie <strong>"Sourire Caché"</strong> – une photo qui a conquis le monde, est devenue la photographie asiatique la plus chère (vendue pour 150 000 $ !), et a même été présentée par le Président du Vietnam à Emmanuel Macron.
</p>
<img src="52.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Pour Réhahn, cette photographie est "l'incarnation du vrai Vietnam", un mélange de modestie, d'humour, de sagesse et de bonheur. Et c'est cette rencontre qui l'a inspiré à créer le <strong>Projet de Redonner (Giving Back Project)</strong>, un projet visant à reverser une partie des bénéfices aux sujets de ses photographies.
</p>
<p>
    Mais "Sourire Caché" n'était que le début. Une autre œuvre emblématique est le portrait d'une fille nommée An Phuoc aux yeux bleus du peuple Cham, qui a fait la couverture de magazines internationaux. Réhahn ne se presse jamais ; il attend que la confiance se développe naturellement. "Le succès d'un portrait ne dépend pas de la technique, mais d'une connexion sincère et significative avec le sujet", estime-t-il.
</p>

<h6>Musée du Patrimoine Précieux : Le cœur de la diversité vietnamienne</h6>
<p>
    Le projet le plus ambitieux de Réhahn est le <strong>Patrimoine Précieux</strong>. Il a commencé par l'étude des 54 groupes ethniques du Vietnam et a évolué vers une exploration d'une décennie de leur patrimoine culturel, de leurs métiers et de leurs histoires. En 2020, Réhahn a achevé sa mission, après avoir rencontré des représentants de tous les groupes.
</p>
<img src="51.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Et le résultat de ce travail incroyable est le <strong>Musée du Patrimoine Précieux à Hoi An</strong>, ouvert en 2017. C'est le seul musée au monde qui abrite des artefacts de toutes les ethnies du Vietnam ! Imaginez : 100 photographies époustouflantes, 62 costumes nationaux authentiques, cinq salles et 500 mètres carrés d'espace dédiés à la diversité culturelle.
</p>
<p>
    "Avant le Vietnam, je ne pouvais pas imaginer un pays où coexistent autant de langues, de traditions et d'identités", dit Réhahn. Sa mission est de préserver ce patrimoine fragile et unique.
</p>
<p>
    Visiter le Musée-Galerie d'Art du Patrimoine Précieux n'est pas seulement une visite ; c'est un voyage émotionnel qui vous permettra de jeter un coup d'œil dans les coins les plus cachés du Vietnam à travers les visages de ses habitants. Préparez-vous à repartir inspiré et avec le sourire aux lèvres !
</p>
<img src="50.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá',
      description: 'Mỗi bức chân dung là một tâm hồn mở của Việt Nam!',
      fullDescription: `
<p>
    Trong chốc lát, hãy quên đi những ngôi chùa cổ kính và những ngôi nhà buôn bán. Ở Hội An, có một nơi thực sự đặc biệt nơi lịch sử không được viết bằng đá, mà bằng những khuôn mặt và câu chuyện của con người. Chúng ta đang nói về <strong>Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá</strong>, một dự án của nhiếp ảnh gia người Pháp <strong>Réhahn</strong>, người được mệnh danh là "nhiếp ảnh gia nắm bắt tâm hồn của những người mẫu".
</p>
<img src="49.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Réhahn không chỉ là một người đàn ông cầm máy ảnh. Anh ấy là một nhà thám hiểm nhân loại thực thụ, người đã đi hơn 35 quốc gia trước khi định cư tại Hội An yêu dấu của mình. Đối với anh, nhiếp ảnh là một cách để đến gần hơn với con người, lắng nghe câu chuyện của họ và hiểu văn hóa của họ. "Sự tiếp xúc tốt (và nhiếp ảnh) bắt đầu bằng sự tôn trọng," Réhahn nói, và các tác phẩm của anh ấy phản ánh điều này trong mỗi khung hình.
</p>

<h6>"Nụ Cười Ẩn Giấu" và Dự Án Thay Đổi Cuộc Đời</h6>
<p>
    Năm 2011, Réhahn gặp một người phụ nữ đã thay đổi mọi thứ – một thuyền trưởng 72 tuổi tên là <strong>Bùi Thị Xong</strong>. Khi anh ấy yêu cầu chụp chân dung của bà, bà cười bẽn lẽn và che miệng. Đây là cách bức ảnh huyền thoại <strong>"Nụ Cười Ẩn Giấu"</strong> ra đời – một bức ảnh đã chinh phục thế giới, trở thành bức ảnh châu Á đắt nhất (bán với giá 150.000 đô la!), và thậm chí còn được Chủ tịch Việt Nam tặng cho Emmanuel Macron.
</p>
<img src="52.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Đối với Réhahn, bức ảnh này là "hiện thân của Việt Nam chân thực", một sự pha trộn giữa sự khiêm tốn, hài hước, trí tuệ và hạnh phúc. Và chính cuộc gặp gỡ này đã truyền cảm hứng cho anh tạo ra <strong>Dự Án Trao Lại (Giving Back Project)</strong>, một dự án nhằm trả lại một phần lợi nhuận cho những người được chụp ảnh.
</p>
<p>
    Nhưng "Nụ Cười Ẩn Giấu" chỉ là khởi đầu. Một tác phẩm biểu tượng khác là chân dung cô bé An Phước với đôi mắt xanh của người Chăm, đã xuất hiện trên trang bìa của nhiều tạp chí quốc tế. Réhahn không bao giờ vội vàng; anh ấy chờ đợi sự tin tưởng phát triển tự nhiên. "Thành công của một bức chân dung không phụ thuộc vào kỹ thuật, mà vào một kết nối chân thành và có ý nghĩa với đối tượng," anh tin.
</p>

<h6>Bảo Tàng Di Sản Quý Giá: Trái Tim của Sự Đa Dạng Việt Nam</h6>
<p>
    Dự án tham vọng nhất của Réhahn là <strong>Di Sản Quý Giá (Precious Heritage)</strong>. Nó bắt đầu bằng việc nghiên cứu 54 dân tộc thiểu số của Việt Nam và phát triển thành một cuộc khám phá kéo dài một thập kỷ về di sản văn hóa, nghề thủ công và câu chuyện của họ. Đến năm 2020, Réhahn đã hoàn thành sứ mệnh của mình, sau khi gặp gỡ đại diện của tất cả các nhóm.
</p>
<img src="51.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Và kết quả của công việc đáng kinh ngạc này là <strong>Bảo Tàng Di Sản Quý Giá ở Hội An</strong>, khai trương vào năm 2017. Đây là bảo tàng duy nhất trên thế giới lưu giữ các hiện vật từ tất cả các dân tộc thiểu số của Việt Nam! Hãy tưởng tượng: 100 bức ảnh tuyệt đẹp, 62 bộ trang phục dân tộc đích thực, năm sảnh và 500 mét vuông không gian dành riêng cho sự đa dạng văn hóa.
</p>
<p>
    "Trước Việt Nam, tôi không thể tưởng tượng một đất nước mà có quá nhiều ngôn ngữ, truyền thống và bản sắc cùng tồn tại," Réhahn nói. Nhiệm vụ của anh ấy là bảo tồn di sản mong manh và độc đáo này.
</p>
<p>
    Ghé thăm Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá không chỉ là một chuyến tham quan; đó là một hành trình cảm xúc sẽ cho phép bạn nhìn thoáng qua những góc khuất nhất của Việt Nam qua khuôn mặt của những người dân nơi đây. Hãy chuẩn bị để ra về với cảm hứng và nụ cười trên môi!
</p>
<img src="50.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    slug: {
      en: 'precious-heritage-art-gallery-museum',
      ru: 'muzey-galereya-iskusstva-tsennogo-naslediya',
      es: 'museo-galeria-arte-patrimonio-precioso',
      fr: 'musee-galerie-art-patrimoine-precieux',
      vn: 'bao-tang-phong-trung-bay-nghe-thuat-di-san-quy-gia',
    },
  },
  // Ba Mu Temple
  {
    id: 'ba-my-temple-gate',
    coordinates: [15.878134915388056, 108.32715736781965],
    category: ['museum'],
    imageUrl: '48.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Ba Mu Temple Gate',
      description: 'Every Portrait is an Open Soul of Vietnam!',
      fullDescription: `
<p>
    For a moment, forget about ancient temples and trading houses. In Hoi An, there's a truly special place where history is written not in stone, but in human faces and stories. We're talking about the <strong>Precious Heritage Art Gallery Museum</strong>, a project by French photographer <strong>Réhahn</strong>, a man called "the photographer who captures the souls of his models."
</p>
<img src="49.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    Réhahn is not just a man with a camera. He is a true explorer of humanity who traveled to over 35 countries before settling in his beloved Hoi An. For him, photography is a way to get closer to people, hear their stories, and understand their culture. "Good contact (and photography) starts with respect," says Réhahn, and his works reflect this in every frame.
</p>

<h6>"Hidden Smile" and a Project That Changed Lives</h6>
<p>
    In 2011, Réhahn met a woman who changed everything – a 72-year-old boat captain named <strong>Bui Thi Xong</strong>. When he asked to take her portrait, she shyly laughed and covered her mouth. This is how the legendary photograph <strong>"Hidden Smile"</strong> came to be – a photo that conquered the world, became the most expensive Asian photograph (sold for $150,000!), and was even presented by the President of Vietnam to Emmanuel Macron.
</p>
<img src="52.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    For Réhahn, this photograph is "the embodiment of true Vietnam," a mix of modesty, humor, wisdom, and happiness. And it was this encounter that inspired him to create the <strong>Giving Back Project</strong>, a project to return a portion of the profits to the subjects of his photographs.
</p>
<p>
    But "Hidden Smile" was just the beginning. Another iconic work is the portrait of a girl named An Phuoc with blue eyes from the Cham people, which graced the covers of international magazines. Réhahn never rushes; he waits for trust to develop naturally. "The success of a portrait depends not on technique, but on a sincere and meaningful connection with the subject," he believes.
</p>

<h6>Precious Heritage Museum: The Heart of Vietnamese Diversity</h6>
<p>
    Réhahn's most ambitious project is <strong>Precious Heritage</strong>. It began with studying the 54 ethnic groups of Vietnam and evolved into a decade-long exploration of their cultural heritage, crafts, and stories. By 2020, Réhahn completed his mission, having met representatives of all groups.
</p>
<img src="51.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    And the result of this incredible work is the <strong>Precious Heritage Museum in Hoi An</strong>, opened in 2017. It is the only museum in the world that houses artifacts from all ethnic groups of Vietnam! Imagine: 100 stunning photographs, 62 authentic national costumes, five halls, and 500 square meters of space dedicated to cultural diversity.
</p>
<p>
    "Before Vietnam, I couldn't imagine a country where so many languages, traditions, and identities coexist," says Réhahn. His mission is to preserve this fragile and unique heritage.
</p>
<p>
    Visiting the Precious Heritage Art Gallery Museum is not just a tour; it's an emotional journey that will allow you to glimpse into the most hidden corners of Vietnam through the faces of its people. Prepare to leave inspired and with a smile on your face!
</p>
<img src="50.jpg" alt="Precious Heritage Art Gallery Museum"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей-галерея искусства «Ценное наследие»',
      description: 'Каждый портрет — открытая душа Вьетнама!',
      fullDescription: `
<p>
    На мгновение забудьте о древних храмах и торговых домах. В Хойане есть поистине особенное место, где история пишется не камнем, а человеческими лицами и рассказами. Речь идет о <strong>Музее-галерее искусства «Ценное наследие»</strong> — проекте французского фотографа <strong>Реана (Réhahn)</strong>, человека, которого называют «фотографом, улавливающим души своих моделей».
</p>
<img src="49.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    Реан — не просто человек с камерой. Он настоящий исследователь человечества, который путешествовал по более чем 35 странам, прежде чем поселиться в своем любимом Хойане. Для него фотография — это способ сблизиться с людьми, услышать их истории и понять их культуру. «Хороший контакт (и фотография) начинаются с уважения», — говорит Реан, и его работы отражают это в каждом кадре.
</p>

<h6>«Скрытая улыбка» и проект, изменивший жизни</h6>
<p>
    В 2011 году Реан встретил женщину, которая изменила все, — 72-летнюю капитаншу лодки по имени <strong>Буй Тхи Сонг</strong>. Когда он попросил ее разрешения сделать портрет, она застенчиво засмеялась и прикрыла рот. Так появилась легендарная фотография <strong>«Скрытая улыбка»</strong> — снимок, который покорил мир, стал самой дорогой азиатской фотографией (продан за 150 000 долларов!) и даже был подарен президентом Вьетнама Эммануэлю Макрону.
</p>
<img src="52.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    Для Реана эта фотография — «воплощение истинного Вьетнама», смесь скромности, юмора, мудрости и счастья. И именно эта встреча вдохновила его на создание <strong>проекта «Возвращая должное» (Giving Back Project)</strong> — проекта по возвращению части прибыли героям его фотографий.
</p>
<p>
    Но «Скрытая улыбка» была лишь началом. Еще одна знаковая работа — портрет девочки по имени Ан Фуок с голубыми глазами из народа Чам, который украшал обложки международных журналов. Реан никогда не торопится; он ждет, пока доверие разовьется естественным образом. «Успех портрета зависит не от техники, а от искренней и значимой связи с моделью», — считает он.
</p>

<h6>Музей «Ценное наследие»: сердце вьетнамского разнообразия</h6>
<p>
    Самый амбициозный проект Реана — <strong>«Ценное наследие» (Precious Heritage)</strong>. Он начался с изучения 54 этнических групп Вьетнама и превратился в десятилетнее исследование их культурного наследия, ремесел и историй. К 2020 году Реан завершил свою миссию, встретившись с представителями всех групп.
</p>
<img src="51.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    И результатом этой невероятной работы стал <strong>Музей «Ценное наследие» в Хойане</strong>, открытый в 2017 году. Это единственный в мире музей, в котором хранятся артефакты всех этнических групп Вьетнама! Представьте себе: 100 потрясающих фотографий, 62 подлинных национальных костюма, пять залов и 500 квадратных метров площади, посвященной культурному разнообразию.
</p>
<p>
    «До Вьетнама я не мог представить себе страну, где сосуществуют столько языков, традиций и идентичностей», — говорит Реан. Его миссия — сохранить это хрупкое и уникальное наследие.
</p>
<p>
    Посещение Музея-галереи искусства «Ценное наследие» — это не просто экскурсия; это эмоциональное путешествие, которое позволит вам заглянуть в самые потаенные уголки Вьетнама через лица его людей. Приготовьтесь уйти вдохновленными и с улыбкой на лице!
</p>
<img src="50.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo Galería de Arte Patrimonio Precioso',
      description: '¡Cada retrato es un alma abierta de Vietnam!',
      fullDescription: `
<p>
    Por un momento, olvídese de los templos antiguos y las casas comerciales. En Hoi An, hay un lugar verdaderamente especial donde la historia no está escrita en piedra, sino en rostros e historias humanas. Estamos hablando del <strong>Museo Galería de Arte Patrimonio Precioso</strong>, un proyecto del fotógrafo francés <strong>Réhahn</strong>, un hombre llamado "el fotógrafo que captura las almas de sus modelos".
</p>
<img src="49.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Réhahn no es solo un hombre con una cámara. Es un verdadero explorador de la humanidad que viajó por más de 35 países antes de establecerse en su amado Hoi An. Para él, la fotografía es una forma de acercarse a las personas, escuchar sus historias y comprender su cultura. "Un buen contacto (y fotografía) comienza con el respeto", dice Réhahn, y sus obras lo reflejan en cada encuadre.
</p>

<h6>"Sonrisa Oculta" y un Proyecto que Cambió Vidas</h6>
<p>
    En 2011, Réhahn conoció a una mujer que lo cambió todo: una capitana de barco de 72 años llamada <strong>Bui Thi Xong</strong>. Cuando le pidió tomar su retrato, ella se rió tímidamente y se cubrió la boca. Así nació la legendaria fotografía <strong>"Sonrisa Oculta"</strong>, una foto que conquistó el mundo, se convirtió en la fotografía asiática más cara (¡vendida por $150,000!), e incluso fue presentada por el Presidente de Vietnam a Emmanuel Macron.
</p>
<img src="52.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Para Réhahn, esta fotografía es "la encarnación del verdadero Vietnam", una mezcla de modestia, humor, sabiduría y felicidad. Y fue este encuentro lo que lo inspiró a crear el <strong>Proyecto de Devolución (Giving Back Project)</strong>, un proyecto para devolver una parte de las ganancias a los sujetos de sus fotografías.
</p>
<p>
    Pero "Sonrisa Oculta" fue solo el comienzo. Otra obra icónica es el retrato de una niña llamada An Phuoc con ojos azules del pueblo Cham, que apareció en las portadas de revistas internacionales. Réhahn nunca se apresura; espera que la confianza se desarrolle naturalmente. "El éxito de un retrato no depende de la técnica, sino de una conexión sincera y significativa con el sujeto", cree.
</p>

<h6>Museo Patrimonio Precioso: El Corazón de la Diversidad Vietnamita</h6>
<p>
    El proyecto más ambicioso de Réhahn es <strong>Patrimonio Precioso (Precious Heritage)</strong>. Comenzó con el estudio de los 54 grupos étnicos de Vietnam y evolucionó hacia una exploración de una década de su patrimonio cultural, artesanías e historias. Para 2020, Réhahn completó su misión, habiendo conocido a representantes de todos los grupos.
</p>
<img src="51.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Y el resultado de este increíble trabajo es el <strong>Museo Patrimonio Precioso en Hoi An</strong>, inaugurado en 2017. ¡Es el único museo en el mundo que alberga artefactos de todos los grupos étnicos de Vietnam! Imagínese: 100 fotografías impresionantes, 62 trajes nacionales auténticos, cinco salas y 500 metros cuadrados de espacio dedicados a la diversidad cultural.
</p>
<p>
    "Antes de Vietnam, no podía imaginar un país donde coexistieran tantos idiomas, tradiciones e identidades", dice Réhahn. Su misión es preservar este patrimonio frágil y único.
</p>
<p>
    Visitar el Museo Galería de Arte Patrimonio Precioso no es solo un recorrido; es un viaje emocional que le permitirá vislumbrar los rincones más ocultos de Vietnam a través de los rostros de su gente. ¡Prepárese para irse inspirado y con una sonrisa en su rostro!
</p>
<img src="50.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Musée-Galerie d'Art du Patrimoine Précieux",
      description: 'Chaque portrait est une âme ouverte du Vietnam !',
      fullDescription: `
<p>
    Oubliez un instant les temples anciens et les maisons de commerce. À Hoi An, il existe un lieu vraiment spécial où l'histoire n'est pas écrite dans la pierre, mais dans les visages et les histoires humaines. Nous parlons du <strong>Musée-Galerie d'Art du Patrimoine Précieux</strong>, un projet du photographe français <strong>Réhahn</strong>, un homme surnommé "le photographe qui capture l'âme de ses modèles".
</p>
<img src="49.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Réhahn n'est pas seulement un homme avec un appareil photo. C'est un véritable explorateur de l'humanité qui a voyagé dans plus de 35 pays avant de s'installer dans son cher Hoi An. Pour lui, la photographie est un moyen de se rapprocher des gens, d'écouter leurs histoires et de comprendre leur culture. "Un bon contact (et la photographie) commence par le respect", dit Réhahn, et ses œuvres le reflètent dans chaque image.
</p>

<h6>"Sourire Caché" et un projet qui a changé des vies</h6>
<p>
    En 2011, Réhahn a rencontré une femme qui a tout changé – une capitaine de bateau de 72 ans nommée <strong>Bui Thi Xong</strong>. Quand il lui a demandé de prendre son portrait, elle a ri timidement et a couvert sa bouche. C'est ainsi qu'est née la légendaire photographie <strong>"Sourire Caché"</strong> – une photo qui a conquis le monde, est devenue la photographie asiatique la plus chère (vendue pour 150 000 $ !), et a même été présentée par le Président du Vietnam à Emmanuel Macron.
</p>
<img src="52.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Pour Réhahn, cette photographie est "l'incarnation du vrai Vietnam", un mélange de modestie, d'humour, de sagesse et de bonheur. Et c'est cette rencontre qui l'a inspiré à créer le <strong>Projet de Redonner (Giving Back Project)</strong>, un projet visant à reverser une partie des bénéfices aux sujets de ses photographies.
</p>
<p>
    Mais "Sourire Caché" n'était que le début. Une autre œuvre emblématique est le portrait d'une fille nommée An Phuoc aux yeux bleus du peuple Cham, qui a fait la couverture de magazines internationaux. Réhahn ne se presse jamais ; il attend que la confiance se développe naturellement. "Le succès d'un portrait ne dépend pas de la technique, mais d'une connexion sincère et significative avec le sujet", estime-t-il.
</p>

<h6>Musée du Patrimoine Précieux : Le cœur de la diversité vietnamienne</h6>
<p>
    Le projet le plus ambitieux de Réhahn est le <strong>Patrimoine Précieux</strong>. Il a commencé par l'étude des 54 groupes ethniques du Vietnam et a évolué vers une exploration d'une décennie de leur patrimoine culturel, de leurs métiers et de leurs histoires. En 2020, Réhahn a achevé sa mission, après avoir rencontré des représentants de tous les groupes.
</p>
<img src="51.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Et le résultat de ce travail incroyable est le <strong>Musée du Patrimoine Précieux à Hoi An</strong>, ouvert en 2017. C'est le seul musée au monde qui abrite des artefacts de toutes les ethnies du Vietnam ! Imaginez : 100 photographies époustouflantes, 62 costumes nationaux authentiques, cinq salles et 500 mètres carrés d'espace dédiés à la diversité culturelle.
</p>
<p>
    "Avant le Vietnam, je ne pouvais pas imaginer un pays où coexistent autant de langues, de traditions et d'identités", dit Réhahn. Sa mission est de préserver ce patrimoine fragile et unique.
</p>
<p>
    Visiter le Musée-Galerie d'Art du Patrimoine Précieux n'est pas seulement une visite ; c'est un voyage émotionnel qui vous permettra de jeter un coup d'œil dans les coins les plus cachés du Vietnam à travers les visages de ses habitants. Préparez-vous à repartir inspiré et avec le sourire aux lèvres !
</p>
<img src="50.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá',
      description: 'Mỗi bức chân dung là một tâm hồn mở của Việt Nam!',
      fullDescription: `
<p>
    Trong chốc lát, hãy quên đi những ngôi chùa cổ kính và những ngôi nhà buôn bán. Ở Hội An, có một nơi thực sự đặc biệt nơi lịch sử không được viết bằng đá, mà bằng những khuôn mặt và câu chuyện của con người. Chúng ta đang nói về <strong>Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá</strong>, một dự án của nhiếp ảnh gia người Pháp <strong>Réhahn</strong>, người được mệnh danh là "nhiếp ảnh gia nắm bắt tâm hồn của những người mẫu".
</p>
<img src="49.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Réhahn không chỉ là một người đàn ông cầm máy ảnh. Anh ấy là một nhà thám hiểm nhân loại thực thụ, người đã đi hơn 35 quốc gia trước khi định cư tại Hội An yêu dấu của mình. Đối với anh, nhiếp ảnh là một cách để đến gần hơn với con người, lắng nghe câu chuyện của họ và hiểu văn hóa của họ. "Sự tiếp xúc tốt (và nhiếp ảnh) bắt đầu bằng sự tôn trọng," Réhahn nói, và các tác phẩm của anh ấy phản ánh điều này trong mỗi khung hình.
</p>

<h6>"Nụ Cười Ẩn Giấu" và Dự Án Thay Đổi Cuộc Đời</h6>
<p>
    Năm 2011, Réhahn gặp một người phụ nữ đã thay đổi mọi thứ – một thuyền trưởng 72 tuổi tên là <strong>Bùi Thị Xong</strong>. Khi anh ấy yêu cầu chụp chân dung của bà, bà cười bẽn lẽn và che miệng. Đây là cách bức ảnh huyền thoại <strong>"Nụ Cười Ẩn Giấu"</strong> ra đời – một bức ảnh đã chinh phục thế giới, trở thành bức ảnh châu Á đắt nhất (bán với giá 150.000 đô la!), và thậm chí còn được Chủ tịch Việt Nam tặng cho Emmanuel Macron.
</p>
<img src="52.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Đối với Réhahn, bức ảnh này là "hiện thân của Việt Nam chân thực", một sự pha trộn giữa sự khiêm tốn, hài hước, trí tuệ và hạnh phúc. Và chính cuộc gặp gỡ này đã truyền cảm hứng cho anh tạo ra <strong>Dự Án Trao Lại (Giving Back Project)</strong>, một dự án nhằm trả lại một phần lợi nhuận cho những người được chụp ảnh.
</p>
<p>
    Nhưng "Nụ Cười Ẩn Giấu" chỉ là khởi đầu. Một tác phẩm biểu tượng khác là chân dung cô bé An Phước với đôi mắt xanh của người Chăm, đã xuất hiện trên trang bìa của nhiều tạp chí quốc tế. Réhahn không bao giờ vội vàng; anh ấy chờ đợi sự tin tưởng phát triển tự nhiên. "Thành công của một bức chân dung không phụ thuộc vào kỹ thuật, mà vào một kết nối chân thành và có ý nghĩa với đối tượng," anh tin.
</p>

<h6>Bảo Tàng Di Sản Quý Giá: Trái Tim của Sự Đa Dạng Việt Nam</h6>
<p>
    Dự án tham vọng nhất của Réhahn là <strong>Di Sản Quý Giá (Precious Heritage)</strong>. Nó bắt đầu bằng việc nghiên cứu 54 dân tộc thiểu số của Việt Nam và phát triển thành một cuộc khám phá kéo dài một thập kỷ về di sản văn hóa, nghề thủ công và câu chuyện của họ. Đến năm 2020, Réhahn đã hoàn thành sứ mệnh của mình, sau khi gặp gỡ đại diện của tất cả các nhóm.
</p>
<img src="51.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Và kết quả của công việc đáng kinh ngạc này là <strong>Bảo Tàng Di Sản Quý Giá ở Hội An</strong>, khai trương vào năm 2017. Đây là bảo tàng duy nhất trên thế giới lưu giữ các hiện vật từ tất cả các dân tộc thiểu số của Việt Nam! Hãy tưởng tượng: 100 bức ảnh tuyệt đẹp, 62 bộ trang phục dân tộc đích thực, năm sảnh và 500 mét vuông không gian dành riêng cho sự đa dạng văn hóa.
</p>
<p>
    "Trước Việt Nam, tôi không thể tưởng tượng một đất nước mà có quá nhiều ngôn ngữ, truyền thống và bản sắc cùng tồn tại," Réhahn nói. Nhiệm vụ của anh ấy là bảo tồn di sản mong manh và độc đáo này.
</p>
<p>
    Ghé thăm Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá không chỉ là một chuyến tham quan; đó là một hành trình cảm xúc sẽ cho phép bạn nhìn thoáng qua những góc khuất nhất của Việt Nam qua khuôn mặt của những người dân nơi đây. Hãy chuẩn bị để ra về với cảm hứng và nụ cười trên môi!
</p>
<img src="50.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    slug: {
      en: 'ba-my-temple-gate',
      ru: 'ba-my-temple-gate',
      es: 'ba-my-temple-gate',
      fr: 'ba-my-temple-gate',
      vn: 'ba-my-temple-gate',
    },
  },
  // Hoi An Museum
  {
    id: 'hoi-an-museum',
    coordinates: [15.880312100426158, 108.32950950063537],
    category: ['museum'],
    imageUrl: '48.jpg',

    // =========================================================================
    // ENGLISH CONTENT (en)
    // =========================================================================
    en: {
      title: 'Ba Mu Temple Gate',
      description: 'Every Portrait is an Open Soul of Vietnam!',
      fullDescription: `
<p>
    For a moment, forget about ancient temples and trading houses. In Hoi An, there's a truly special place where history is written not in stone, but in human faces and stories. We're talking about the <strong>Precious Heritage Art Gallery Museum</strong>, a project by French photographer <strong>Réhahn</strong>, a man called "the photographer who captures the souls of his models."
</p>
<img src="49.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    Réhahn is not just a man with a camera. He is a true explorer of humanity who traveled to over 35 countries before settling in his beloved Hoi An. For him, photography is a way to get closer to people, hear their stories, and understand their culture. "Good contact (and photography) starts with respect," says Réhahn, and his works reflect this in every frame.
</p>

<h6>"Hidden Smile" and a Project That Changed Lives</h6>
<p>
    In 2011, Réhahn met a woman who changed everything – a 72-year-old boat captain named <strong>Bui Thi Xong</strong>. When he asked to take her portrait, she shyly laughed and covered her mouth. This is how the legendary photograph <strong>"Hidden Smile"</strong> came to be – a photo that conquered the world, became the most expensive Asian photograph (sold for $150,000!), and was even presented by the President of Vietnam to Emmanuel Macron.
</p>
<img src="52.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    For Réhahn, this photograph is "the embodiment of true Vietnam," a mix of modesty, humor, wisdom, and happiness. And it was this encounter that inspired him to create the <strong>Giving Back Project</strong>, a project to return a portion of the profits to the subjects of his photographs.
</p>
<p>
    But "Hidden Smile" was just the beginning. Another iconic work is the portrait of a girl named An Phuoc with blue eyes from the Cham people, which graced the covers of international magazines. Réhahn never rushes; he waits for trust to develop naturally. "The success of a portrait depends not on technique, but on a sincere and meaningful connection with the subject," he believes.
</p>

<h6>Precious Heritage Museum: The Heart of Vietnamese Diversity</h6>
<p>
    Réhahn's most ambitious project is <strong>Precious Heritage</strong>. It began with studying the 54 ethnic groups of Vietnam and evolved into a decade-long exploration of their cultural heritage, crafts, and stories. By 2020, Réhahn completed his mission, having met representatives of all groups.
</p>
<img src="51.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    And the result of this incredible work is the <strong>Precious Heritage Museum in Hoi An</strong>, opened in 2017. It is the only museum in the world that houses artifacts from all ethnic groups of Vietnam! Imagine: 100 stunning photographs, 62 authentic national costumes, five halls, and 500 square meters of space dedicated to cultural diversity.
</p>
<p>
    "Before Vietnam, I couldn't imagine a country where so many languages, traditions, and identities coexist," says Réhahn. His mission is to preserve this fragile and unique heritage.
</p>
<p>
    Visiting the Precious Heritage Art Gallery Museum is not just a tour; it's an emotional journey that will allow you to glimpse into the most hidden corners of Vietnam through the faces of its people. Prepare to leave inspired and with a smile on your face!
</p>
<img src="50.jpg" alt="Precious Heritage Art Gallery Museum"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // RUSSIAN CONTENT (ru)
    // =========================================================================
    ru: {
      title: 'Музей-галерея искусства «Ценное наследие»',
      description: 'Каждый портрет — открытая душа Вьетнама!',
      fullDescription: `
<p>
    На мгновение забудьте о древних храмах и торговых домах. В Хойане есть поистине особенное место, где история пишется не камнем, а человеческими лицами и рассказами. Речь идет о <strong>Музее-галерее искусства «Ценное наследие»</strong> — проекте французского фотографа <strong>Реана (Réhahn)</strong>, человека, которого называют «фотографом, улавливающим души своих моделей».
</p>
<img src="49.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    Реан — не просто человек с камерой. Он настоящий исследователь человечества, который путешествовал по более чем 35 странам, прежде чем поселиться в своем любимом Хойане. Для него фотография — это способ сблизиться с людьми, услышать их истории и понять их культуру. «Хороший контакт (и фотография) начинаются с уважения», — говорит Реан, и его работы отражают это в каждом кадре.
</p>

<h6>«Скрытая улыбка» и проект, изменивший жизни</h6>
<p>
    В 2011 году Реан встретил женщину, которая изменила все, — 72-летнюю капитаншу лодки по имени <strong>Буй Тхи Сонг</strong>. Когда он попросил ее разрешения сделать портрет, она застенчиво засмеялась и прикрыла рот. Так появилась легендарная фотография <strong>«Скрытая улыбка»</strong> — снимок, который покорил мир, стал самой дорогой азиатской фотографией (продан за 150 000 долларов!) и даже был подарен президентом Вьетнама Эммануэлю Макрону.
</p>
<img src="52.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    Для Реана эта фотография — «воплощение истинного Вьетнама», смесь скромности, юмора, мудрости и счастья. И именно эта встреча вдохновила его на создание <strong>проекта «Возвращая должное» (Giving Back Project)</strong> — проекта по возвращению части прибыли героям его фотографий.
</p>
<p>
    Но «Скрытая улыбка» была лишь началом. Еще одна знаковая работа — портрет девочки по имени Ан Фуок с голубыми глазами из народа Чам, который украшал обложки международных журналов. Реан никогда не торопится; он ждет, пока доверие разовьется естественным образом. «Успех портрета зависит не от техники, а от искренней и значимой связи с моделью», — считает он.
</p>

<h6>Музей «Ценное наследие»: сердце вьетнамского разнообразия</h6>
<p>
    Самый амбициозный проект Реана — <strong>«Ценное наследие» (Precious Heritage)</strong>. Он начался с изучения 54 этнических групп Вьетнама и превратился в десятилетнее исследование их культурного наследия, ремесел и историй. К 2020 году Реан завершил свою миссию, встретившись с представителями всех групп.
</p>
<img src="51.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>
<p>
    И результатом этой невероятной работы стал <strong>Музей «Ценное наследие» в Хойане</strong>, открытый в 2017 году. Это единственный в мире музей, в котором хранятся артефакты всех этнических групп Вьетнама! Представьте себе: 100 потрясающих фотографий, 62 подлинных национальных костюма, пять залов и 500 квадратных метров площади, посвященной культурному разнообразию.
</p>
<p>
    «До Вьетнама я не мог представить себе страну, где сосуществуют столько языков, традиций и идентичностей», — говорит Реан. Его миссия — сохранить это хрупкое и уникальное наследие.
</p>
<p>
    Посещение Музея-галереи искусства «Ценное наследие» — это не просто экскурсия; это эмоциональное путешествие, которое позволит вам заглянуть в самые потаенные уголки Вьетнама через лица его людей. Приготовьтесь уйти вдохновленными и с улыбкой на лице!
</p>
<img src="50.jpg" alt="Музей-галерея искусства «Ценное наследие»"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // SPANISH CONTENT (es)
    // =========================================================================
    es: {
      title: 'Museo Galería de Arte Patrimonio Precioso',
      description: '¡Cada retrato es un alma abierta de Vietnam!',
      fullDescription: `
<p>
    Por un momento, olvídese de los templos antiguos y las casas comerciales. En Hoi An, hay un lugar verdaderamente especial donde la historia no está escrita en piedra, sino en rostros e historias humanas. Estamos hablando del <strong>Museo Galería de Arte Patrimonio Precioso</strong>, un proyecto del fotógrafo francés <strong>Réhahn</strong>, un hombre llamado "el fotógrafo que captura las almas de sus modelos".
</p>
<img src="49.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Réhahn no es solo un hombre con una cámara. Es un verdadero explorador de la humanidad que viajó por más de 35 países antes de establecerse en su amado Hoi An. Para él, la fotografía es una forma de acercarse a las personas, escuchar sus historias y comprender su cultura. "Un buen contacto (y fotografía) comienza con el respeto", dice Réhahn, y sus obras lo reflejan en cada encuadre.
</p>

<h6>"Sonrisa Oculta" y un Proyecto que Cambió Vidas</h6>
<p>
    En 2011, Réhahn conoció a una mujer que lo cambió todo: una capitana de barco de 72 años llamada <strong>Bui Thi Xong</strong>. Cuando le pidió tomar su retrato, ella se rió tímidamente y se cubrió la boca. Así nació la legendaria fotografía <strong>"Sonrisa Oculta"</strong>, una foto que conquistó el mundo, se convirtió en la fotografía asiática más cara (¡vendida por $150,000!), e incluso fue presentada por el Presidente de Vietnam a Emmanuel Macron.
</p>
<img src="52.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Para Réhahn, esta fotografía es "la encarnación del verdadero Vietnam", una mezcla de modestia, humor, sabiduría y felicidad. Y fue este encuentro lo que lo inspiró a crear el <strong>Proyecto de Devolución (Giving Back Project)</strong>, un proyecto para devolver una parte de las ganancias a los sujetos de sus fotografías.
</p>
<p>
    Pero "Sonrisa Oculta" fue solo el comienzo. Otra obra icónica es el retrato de una niña llamada An Phuoc con ojos azules del pueblo Cham, que apareció en las portadas de revistas internacionales. Réhahn nunca se apresura; espera que la confianza se desarrolle naturalmente. "El éxito de un retrato no depende de la técnica, sino de una conexión sincera y significativa con el sujeto", cree.
</p>

<h6>Museo Patrimonio Precioso: El Corazón de la Diversidad Vietnamita</h6>
<p>
    El proyecto más ambicioso de Réhahn es <strong>Patrimonio Precioso (Precious Heritage)</strong>. Comenzó con el estudio de los 54 grupos étnicos de Vietnam y evolucionó hacia una exploración de una década de su patrimonio cultural, artesanías e historias. Para 2020, Réhahn completó su misión, habiendo conocido a representantes de todos los grupos.
</p>
<img src="51.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>
<p>
    Y el resultado de este increíble trabajo es el <strong>Museo Patrimonio Precioso en Hoi An</strong>, inaugurado en 2017. ¡Es el único museo en el mundo que alberga artefactos de todos los grupos étnicos de Vietnam! Imagínese: 100 fotografías impresionantes, 62 trajes nacionales auténticos, cinco salas y 500 metros cuadrados de espacio dedicados a la diversidad cultural.
</p>
<p>
    "Antes de Vietnam, no podía imaginar un país donde coexistieran tantos idiomas, tradiciones e identidades", dice Réhahn. Su misión es preservar este patrimonio frágil y único.
</p>
<p>
    Visitar el Museo Galería de Arte Patrimonio Precioso no es solo un recorrido; es un viaje emocional que le permitirá vislumbrar los rincones más ocultos de Vietnam a través de los rostros de su gente. ¡Prepárese para irse inspirado y con una sonrisa en su rostro!
</p>
<img src="50.jpg" alt="Museo Galería de Arte Patrimonio Precioso"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // FRENCH CONTENT (fr)
    // =========================================================================
    fr: {
      title: "Musée-Galerie d'Art du Patrimoine Précieux",
      description: 'Chaque portrait est une âme ouverte du Vietnam !',
      fullDescription: `
<p>
    Oubliez un instant les temples anciens et les maisons de commerce. À Hoi An, il existe un lieu vraiment spécial où l'histoire n'est pas écrite dans la pierre, mais dans les visages et les histoires humaines. Nous parlons du <strong>Musée-Galerie d'Art du Patrimoine Précieux</strong>, un projet du photographe français <strong>Réhahn</strong>, un homme surnommé "le photographe qui capture l'âme de ses modèles".
</p>
<img src="49.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Réhahn n'est pas seulement un homme avec un appareil photo. C'est un véritable explorateur de l'humanité qui a voyagé dans plus de 35 pays avant de s'installer dans son cher Hoi An. Pour lui, la photographie est un moyen de se rapprocher des gens, d'écouter leurs histoires et de comprendre leur culture. "Un bon contact (et la photographie) commence par le respect", dit Réhahn, et ses œuvres le reflètent dans chaque image.
</p>

<h6>"Sourire Caché" et un projet qui a changé des vies</h6>
<p>
    En 2011, Réhahn a rencontré une femme qui a tout changé – une capitaine de bateau de 72 ans nommée <strong>Bui Thi Xong</strong>. Quand il lui a demandé de prendre son portrait, elle a ri timidement et a couvert sa bouche. C'est ainsi qu'est née la légendaire photographie <strong>"Sourire Caché"</strong> – une photo qui a conquis le monde, est devenue la photographie asiatique la plus chère (vendue pour 150 000 $ !), et a même été présentée par le Président du Vietnam à Emmanuel Macron.
</p>
<img src="52.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Pour Réhahn, cette photographie est "l'incarnation du vrai Vietnam", un mélange de modestie, d'humour, de sagesse et de bonheur. Et c'est cette rencontre qui l'a inspiré à créer le <strong>Projet de Redonner (Giving Back Project)</strong>, un projet visant à reverser une partie des bénéfices aux sujets de ses photographies.
</p>
<p>
    Mais "Sourire Caché" n'était que le début. Une autre œuvre emblématique est le portrait d'une fille nommée An Phuoc aux yeux bleus du peuple Cham, qui a fait la couverture de magazines internationaux. Réhahn ne se presse jamais ; il attend que la confiance se développe naturellement. "Le succès d'un portrait ne dépend pas de la technique, mais d'une connexion sincère et significative avec le sujet", estime-t-il.
</p>

<h6>Musée du Patrimoine Précieux : Le cœur de la diversité vietnamienne</h6>
<p>
    Le projet le plus ambitieux de Réhahn est le <strong>Patrimoine Précieux</strong>. Il a commencé par l'étude des 54 groupes ethniques du Vietnam et a évolué vers une exploration d'une décennie de leur patrimoine culturel, de leurs métiers et de leurs histoires. En 2020, Réhahn a achevé sa mission, après avoir rencontré des représentants de tous les groupes.
</p>
<img src="51.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>
<p>
    Et le résultat de ce travail incroyable est le <strong>Musée du Patrimoine Précieux à Hoi An</strong>, ouvert en 2017. C'est le seul musée au monde qui abrite des artefacts de toutes les ethnies du Vietnam ! Imaginez : 100 photographies époustouflantes, 62 costumes nationaux authentiques, cinq salles et 500 mètres carrés d'espace dédiés à la diversité culturelle.
</p>
<p>
    "Avant le Vietnam, je ne pouvais pas imaginer un pays où coexistent autant de langues, de traditions et d'identités", dit Réhahn. Sa mission est de préserver ce patrimoine fragile et unique.
</p>
<p>
    Visiter le Musée-Galerie d'Art du Patrimoine Précieux n'est pas seulement une visite ; c'est un voyage émotionnel qui vous permettra de jeter un coup d'œil dans les coins les plus cachés du Vietnam à travers les visages de ses habitants. Préparez-vous à repartir inspiré et avec le sourire aux lèvres !
</p>
<img src="50.jpg" alt="Musée-Galerie d'Art du Patrimoine Précieux"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    // =========================================================================
    // VIETNAMESE CONTENT (vn)
    // =========================================================================
    vn: {
      title: 'Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá',
      description: 'Mỗi bức chân dung là một tâm hồn mở của Việt Nam!',
      fullDescription: `
<p>
    Trong chốc lát, hãy quên đi những ngôi chùa cổ kính và những ngôi nhà buôn bán. Ở Hội An, có một nơi thực sự đặc biệt nơi lịch sử không được viết bằng đá, mà bằng những khuôn mặt và câu chuyện của con người. Chúng ta đang nói về <strong>Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá</strong>, một dự án của nhiếp ảnh gia người Pháp <strong>Réhahn</strong>, người được mệnh danh là "nhiếp ảnh gia nắm bắt tâm hồn của những người mẫu".
</p>
<img src="49.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Réhahn không chỉ là một người đàn ông cầm máy ảnh. Anh ấy là một nhà thám hiểm nhân loại thực thụ, người đã đi hơn 35 quốc gia trước khi định cư tại Hội An yêu dấu của mình. Đối với anh, nhiếp ảnh là một cách để đến gần hơn với con người, lắng nghe câu chuyện của họ và hiểu văn hóa của họ. "Sự tiếp xúc tốt (và nhiếp ảnh) bắt đầu bằng sự tôn trọng," Réhahn nói, và các tác phẩm của anh ấy phản ánh điều này trong mỗi khung hình.
</p>

<h6>"Nụ Cười Ẩn Giấu" và Dự Án Thay Đổi Cuộc Đời</h6>
<p>
    Năm 2011, Réhahn gặp một người phụ nữ đã thay đổi mọi thứ – một thuyền trưởng 72 tuổi tên là <strong>Bùi Thị Xong</strong>. Khi anh ấy yêu cầu chụp chân dung của bà, bà cười bẽn lẽn và che miệng. Đây là cách bức ảnh huyền thoại <strong>"Nụ Cười Ẩn Giấu"</strong> ra đời – một bức ảnh đã chinh phục thế giới, trở thành bức ảnh châu Á đắt nhất (bán với giá 150.000 đô la!), và thậm chí còn được Chủ tịch Việt Nam tặng cho Emmanuel Macron.
</p>
<img src="52.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Đối với Réhahn, bức ảnh này là "hiện thân của Việt Nam chân thực", một sự pha trộn giữa sự khiêm tốn, hài hước, trí tuệ và hạnh phúc. Và chính cuộc gặp gỡ này đã truyền cảm hứng cho anh tạo ra <strong>Dự Án Trao Lại (Giving Back Project)</strong>, một dự án nhằm trả lại một phần lợi nhuận cho những người được chụp ảnh.
</p>
<p>
    Nhưng "Nụ Cười Ẩn Giấu" chỉ là khởi đầu. Một tác phẩm biểu tượng khác là chân dung cô bé An Phước với đôi mắt xanh của người Chăm, đã xuất hiện trên trang bìa của nhiều tạp chí quốc tế. Réhahn không bao giờ vội vàng; anh ấy chờ đợi sự tin tưởng phát triển tự nhiên. "Thành công của một bức chân dung không phụ thuộc vào kỹ thuật, mà vào một kết nối chân thành và có ý nghĩa với đối tượng," anh tin.
</p>

<h6>Bảo Tàng Di Sản Quý Giá: Trái Tim của Sự Đa Dạng Việt Nam</h6>
<p>
    Dự án tham vọng nhất của Réhahn là <strong>Di Sản Quý Giá (Precious Heritage)</strong>. Nó bắt đầu bằng việc nghiên cứu 54 dân tộc thiểu số của Việt Nam và phát triển thành một cuộc khám phá kéo dài một thập kỷ về di sản văn hóa, nghề thủ công và câu chuyện của họ. Đến năm 2020, Réhahn đã hoàn thành sứ mệnh của mình, sau khi gặp gỡ đại diện của tất cả các nhóm.
</p>
<img src="51.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>
<p>
    Và kết quả của công việc đáng kinh ngạc này là <strong>Bảo Tàng Di Sản Quý Giá ở Hội An</strong>, khai trương vào năm 2017. Đây là bảo tàng duy nhất trên thế giới lưu giữ các hiện vật từ tất cả các dân tộc thiểu số của Việt Nam! Hãy tưởng tượng: 100 bức ảnh tuyệt đẹp, 62 bộ trang phục dân tộc đích thực, năm sảnh và 500 mét vuông không gian dành riêng cho sự đa dạng văn hóa.
</p>
<p>
    "Trước Việt Nam, tôi không thể tưởng tượng một đất nước mà có quá nhiều ngôn ngữ, truyền thống và bản sắc cùng tồn tại," Réhahn nói. Nhiệm vụ của anh ấy là bảo tồn di sản mong manh và độc đáo này.
</p>
<p>
    Ghé thăm Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá không chỉ là một chuyến tham quan; đó là một hành trình cảm xúc sẽ cho phép bạn nhìn thoáng qua những góc khuất nhất của Việt Nam qua khuôn mặt của những người dân nơi đây. Hãy chuẩn bị để ra về với cảm hứng và nụ cười trên môi!
</p>
<img src="50.jpg" alt="Bảo Tàng Phòng Trưng Bày Nghệ Thuật Di Sản Quý Giá"/>

    `,
      internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg', '52.jpg'],
    },

    slug: {
      en: 'ba-my-temple-gate',
      ru: 'ba-my-temple-gate',
      es: 'ba-my-temple-gate',
      fr: 'ba-my-temple-gate',
      vn: 'ba-my-temple-gate',
    },
  },
];
