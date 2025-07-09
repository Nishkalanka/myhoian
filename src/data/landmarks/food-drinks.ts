import type { Landmark } from './landmarkTypes';

export const foodDrinksLandmarks: Landmark[] = [
  //hill-station
  {
    id: 'hill-station', // <-- ID теперь строковый
    coordinates: [15.877801450043398, 108.33391777335922], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: '53.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Specializing in local produce and fresh ingredients, offering a delicious menu with a focus on quality.',
      fullDescription: `
<p>Located in the heart of Hoi An’s Ancient Town, The Hill Station Deli & Boutique has been a culinary landmark since 2011. Our journey began with a simple idea: to bring the freshness of local produce and the richness of global culinary traditions to our guests. We started small, with a cozy deli serving artisanal sandwiches, salads, and homemade pastries.</p>

<p>Over the years, we've grown, but our core philosophy remains unchanged: quality ingredients, exceptional flavors, and a welcoming atmosphere. We believe in sourcing the freshest local produce, supporting local farmers and suppliers whenever possible. This commitment to freshness is evident in every dish we serve, from our vibrant salads to our hearty mains.</p>

<h6>Our Culinary Philosophy</h6>
<p>At The Hill Station, we are passionate about food. Our menu is a reflection of our dedication to creating unique and memorable dining experiences. We blend traditional Vietnamese flavors with international culinary techniques, offering a diverse selection that caters to various tastes. Whether you're craving a light bite or a satisfying meal, our kitchen is always bustling with creativity.</p>

<p>Our deli counter is a highlight, featuring an array of freshly baked goods, charcuterie, and cheeses. It’s the perfect spot to grab a quick and delicious lunch, or to stock up on gourmet provisions for a picnic by the river. Our boutique section offers a curated selection of unique gifts, local handicrafts, and specialty food products, making it a great place to find a souvenir or a treat for yourself.</p>

<h6>A Community Hub</h6>
<p>More than just a restaurant, The Hill Station is a place where locals and travelers connect. We’ve become a beloved gathering spot, known for our relaxed ambiance and friendly service. We often host special events, from wine tastings to cooking classes, inviting our guests to experience the rich culture of Hoi An through its food.</p>

<p>We are constantly innovating, exploring new recipes, and experimenting with flavors. Our team of talented chefs and passionate staff are dedicated to ensuring every visit is a delightful one. We invite you to join us at The Hill Station Deli & Boutique, where good food, good company, and good times are always on the menu.</p>
      `,
      internalImageNames: [
        'hill_station_interior.jpg',
        'hill_station_food.jpg',
        'hill_station_exterior.jpg',
      ],
    },
    es: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Especializado en productos locales e ingredientes frescos, ofreciendo un delicioso menú con énfasis en la calidad.',
      fullDescription: `
<p>Ubicado en el corazón del Casco Antiguo de Hoi An, The Hill Station Deli & Boutique ha sido un punto de referencia culinario desde 2011. Nuestro viaje comenzó con una idea simple: llevar la frescura de los productos locales y la riqueza de las tradiciones culinarias globales a nuestros huéspedes. Comenzamos pequeños, con una acogedora charcutería que servía sándwiches artesanales, ensaladas y repostería casera.</p>

<p>A lo largo de los años, hemos crecido, pero nuestra filosofía principal sigue siendo la misma: ingredientes de calidad, sabores excepcionales y un ambiente acogedor. Creemos en la obtención de los productos locales más frescos, apoyando a los agricultores y proveedores locales siempre que sea posible. Este compromiso con la frescura es evidente en cada plato que servimos, desde nuestras vibrantes ensaladas hasta nuestros abundantes platos principales.</p>

<h6>Nuestra Filosofía Culinaria</h6>
<p>En The Hill Station, nos apasiona la comida. Nuestro menú es un reflejo de nuestra dedicación a crear experiencias gastronómicas únicas y memorables. Fusionamos sabores vietnamitas tradicionales con técnicas culinarias internacionales, ofreciendo una selección diversa que satisface una amplia gama de gustos. Ya sea que busques un bocado ligero o una comida sustanciosa, nuestra cocina siempre está llena de creatividad.</p>

<p>Nuestro mostrador de charcutería es un punto destacado, con una variedad de productos horneados frescos, embutidos y quesos. Es el lugar perfecto para un almuerzo rápido y delicioso, o para abastecerse de provisiones gourmet para un picnic junto al río. Nuestra sección de boutique ofrece una cuidada selección de regalos únicos, artesanías locales y productos alimenticios especiales, lo que lo convierte en un excelente lugar para encontrar un recuerdo o un capricho para ti.</p>

<h6>Un Centro Comunitario</h6>
<p>Más que un simple restaurante, The Hill Station es un lugar donde se conectan lugareños y viajeros. Nos hemos convertido en un lugar de reunión muy querido, conocido por nuestro ambiente relajado y nuestro servicio amable. A menudo organizamos eventos especiales, desde catas de vino hasta clases de cocina, invitando a nuestros huéspedes a experimentar la rica cultura de Hoi An a través de su comida.</p>

<p>Estamos en constante innovación, explorando nuevas recetas y experimentando con sabores. Nuestro equipo de talentosos chefs y personal apasionado se dedica a garantizar que cada visita sea una delicia. Te invitamos a unirte a nosotros en The Hill Station Deli & Boutique, donde la buena comida, la buena compañía y los buenos momentos siempre están en el menú.</p>
      `,
      internalImageNames: [
        'hill_station_interior.jpg',
        'hill_station_food.jpg',
        'hill_station_exterior.jpg',
      ],
    },
    fr: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Spécialisé dans les produits locaux et les ingrédients frais, offrant un menu délicieux axé sur la qualité.',
      fullDescription: `
<p>Situé au cœur de l'Ancienne Ville de Hoi An, The Hill Station Deli & Boutique est un point de repère culinaire depuis 2011. Notre aventure a commencé par une idée simple : apporter la fraîcheur des produits locaux et la richesse des traditions culinaires mondiales à nos hôtes. Nous avons commencé petit, avec un charmant deli servant des sandwichs artisanaux, des salades et des pâtisseries faites maison.</p>

<p>Au fil des ans, nous avons grandi, mais notre philosophie fondamentale reste inchangée : des ingrédients de qualité, des saveurs exceptionnelles et une atmosphère accueillante. Nous nous engageons à nous procurer les produits locaux les plus frais, en soutenant les agriculteurs et les fournisseurs locaux dans la mesure du possible. Cet engagement envers la fraîcheur est évident dans chaque plat que nous servons, de nos salades vibrantes à nos plats principaux copieux.</p>

<h6>Notre Philosophie Culinaire</h6>
<p>Chez The Hill Station, nous sommes passionnés par la nourriture. Notre menu est le reflet de notre dévouement à créer des expériences culinaires uniques et mémorables. Nous mêlons les saveurs vietnamiennes traditionnelles aux techniques culinaires internationales, offrant une sélection diversifiée qui répond à tous les goûts. Que vous ayez envie d'une collation légère ou d'un repas copieux, notre cuisine est toujours en ébullition de créativité.</p>

<p>Notre comptoir de charcuterie est un atout majeur, proposant une gamme de produits de boulangerie fraîchement préparés, de charcuteries et de fromages. C'est l'endroit idéal pour prendre un déjeuner rapide et délicieux, ou pour faire le plein de provisions gourmandes pour un pique-nique au bord de la rivière. Notre section boutique offre une sélection minutieuse de cadeaux uniques, d'artisanat local et de produits alimentaires spécialisés, ce qui en fait un excellent endroit pour trouver un souvenir ou une gâterie pour vous-même.</p>

<h6>Un Centre Communautaire</h6>
<p>Plus qu'un simple restaurant, The Hill Station est un lieu de rencontre pour les habitants et les voyageurs. Nous sommes devenus un lieu de rassemblement apprécié, réputé pour son ambiance détendue et son service amical. Nous organisons souvent des événements spéciaux, des dégustations de vin aux cours de cuisine, invitant nos hôtes à découvrir la riche culture de Hoi An à travers sa cuisine.</p>

<p>Nous innovons constamment, explorons de nouvelles recettes et expérimentons des saveurs. Notre équipe de chefs talentueux et de personnel passionné s'engage à faire de chaque visite un moment agréable. Nous vous invitons à nous rejoindre à The Hill Station Deli & Boutique, où bonne cuisine, bonne compagnie et bons moments sont toujours au menu.</p>
      `,
      internalImageNames: [
        'hill_station_interior.jpg',
        'hill_station_food.jpg',
        'hill_station_exterior.jpg',
      ],
    },
    ru: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Специализируется на местной продукции и свежих ингредиентах, предлагая вкусное меню с акцентом на качество.',
      fullDescription: `
<p>Расположенный в самом сердце древнего города Хойан, The Hill Station Deli & Boutique является кулинарной достопримечательностью с 2011 года. Наш путь начался с простой идеи: принести свежесть местных продуктов и богатство мировых кулинарных традиций нашим гостям. Мы начинали с малого, с уютного гастронома, предлагающего сэндвичи ручной работы, салаты и домашнюю выпечку.</p>

<img src="hill_station_interior.jpg" alt="Интерьер The Hill Station"/>

<p>За эти годы мы выросли, но наша основная философия остается неизменной: качественные ингредиенты, исключительные вкусы и гостеприимная атмосфера. Мы верим в использование самых свежих местных продуктов, по возможности поддерживая местных фермеров и поставщиков. Эта приверженность свежести проявляется в каждом блюде, которое мы подаем, от наших ярких салатов до сытных основных блюд.</p>

<h6>Наша кулинарная философия</h6>
<p>В The Hill Station мы увлечены едой. Наше меню — это отражение нашей приверженности созданию уникальных и запоминающихся кулинарных впечатлений. Мы сочетаем традиционные вьетнамские вкусы с международными кулинарными техниками, предлагая разнообразный выбор, который удовлетворит самые разные вкусы. Независимо от того, жаждете ли вы легкой закуски или сытного блюда, наша кухня всегда кипит творчеством.</p>

<p>Наш гастрономический прилавок является изюминкой, предлагая широкий выбор свежеиспеченных изделий, колбас и сыров. Это идеальное место, чтобы быстро и вкусно пообедать или запастись деликатесами для пикника у реки. Наша бутик-секция предлагает тщательно отобранный ассортимент уникальных подарков, местных ремесленных изделий и специализированных продуктов питания, что делает ее отличным местом, чтобы найти сувенир или что-то для себя.</p>

<h6>Общественный центр</h6>
<p>The Hill Station — это не просто ресторан, это место, где встречаются местные жители и путешественники. Мы стали излюбленным местом сбора, известным своей расслабляющей атмосферой и дружелюбным обслуживанием. Мы часто проводим специальные мероприятия, от дегустаций вин до кулинарных мастер-классов, приглашая наших гостей познакомиться с богатой культурой Хойана через его еду.</p>

<p>Мы постоянно внедряем инновации, исследуем новые рецепты и экспериментируем со вкусами. Наша команда талантливых поваров и увлеченных сотрудников стремится к тому, чтобы каждый визит был восхитительным. Мы приглашаем вас присоединиться к нам в The Hill Station Deli & Boutique, где хорошая еда, хорошая компания и хорошее время всегда в меню.</p>
      `,
      internalImageNames: [
        'hill_station_interior.jpg',
        'hill_station_food.jpg',
        'hill_station_exterior.jpg',
      ],
    },
    vn: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Chuyên về sản phẩm địa phương và nguyên liệu tươi ngon, cung cấp thực đơn hấp dẫn với trọng tâm vào chất lượng.',
      fullDescription: `
<p>Nằm ở trung tâm Phố cổ Hội An, The Hill Station Deli & Boutique đã là một điểm đến ẩm thực từ năm 2011. Hành trình của chúng tôi bắt đầu với một ý tưởng đơn giản: mang sự tươi ngon của sản phẩm địa phương và sự phong phú của truyền thống ẩm thực toàn cầu đến với khách hàng. Chúng tôi bắt đầu nhỏ, với một cửa hàng deli ấm cúng phục vụ bánh mì sandwich thủ công, salad và bánh ngọt tự làm.</p>

<p>Trong những năm qua, chúng tôi đã phát triển, nhưng triết lý cốt lõi của chúng tôi vẫn không thay đổi: nguyên liệu chất lượng, hương vị đặc biệt và không khí ấm cúng. Chúng tôi tin vào việc tìm nguồn sản phẩm địa phương tươi ngon nhất, hỗ trợ nông dân và nhà cung cấp địa phương bất cứ khi nào có thể. Cam kết về sự tươi ngon này thể hiện rõ trong mỗi món ăn chúng tôi phục vụ, từ những món salad sống động đến những món chính thịnh soạn.</p>

<h6>Triết lý ẩm thực của chúng tôi</h6>
<p>Tại The Hill Station, chúng tôi đam mê ẩm thực. Thực đơn của chúng tôi là sự phản ánh sự cống hiến của chúng tôi để tạo ra những trải nghiệm ăn uống độc đáo và đáng nhớ. Chúng tôi pha trộn hương vị truyền thống Việt Nam với các kỹ thuật ẩm thực quốc tế, cung cấp một lựa chọn đa dạng phục vụ nhiều khẩu vị khác nhau. Cho dù bạn đang thèm một món ăn nhẹ hay một bữa ăn no, nhà bếp của chúng tôi luôn tràn ngập sự sáng tạo.</p>

<p>Quầy deli của chúng tôi là một điểm nhấn, với một loạt các món nướng mới ra lò, thịt nguội và phô mai. Đây là nơi hoàn hảo để có một bữa trưa nhanh chóng và ngon miệng, hoặc để tích trữ các món đồ ăn ngon cho một buổi dã ngoại bên sông. Phần cửa hàng boutique của chúng tôi cung cấp một lựa chọn tuyển chọn các món quà độc đáo, đồ thủ công mỹ nghệ địa phương và các sản phẩm thực phẩm đặc biệt, làm cho nó trở thành một nơi tuyệt vời để tìm một món quà lưu niệm hoặc một món quà tự thưởng cho bản thân.</p>

<h6>Một Trung tâm Cộng đồng</h6>
<p>Không chỉ là một nhà hàng, The Hill Station còn là nơi kết nối người dân địa phương và du khách. Chúng tôi đã trở thành một địa điểm tụ họp được yêu thích, nổi tiếng với không khí thư giãn và dịch vụ thân thiện. Chúng tôi thường tổ chức các sự kiện đặc biệt, từ nếm rượu vang đến các lớp học nấu ăn, mời khách của chúng tôi trải nghiệm văn hóa phong phú của Hội An thông qua ẩm thực của nó.</p>

<img src="hill_station_exterior.jpg" alt="Ngoại thất The Hill Station"/>

<p>Chúng tôi không ngừng đổi mới, khám phá các công thức nấu ăn mới và thử nghiệm hương vị. Đội ngũ đầu bếp tài năng và nhân viên nhiệt tình của chúng tôi tận tâm đảm bảo mỗi chuyến thăm là một trải nghiệm thú vị. Chúng tôi mời bạn đến The Hill Station Deli & Boutique, nơi luôn có đồ ăn ngon, bạn bè tốt và những khoảnh khắc tuyệt vời trong thực đơn.</p>
      `,
      internalImageNames: [
        'hill_station_interior.jpg',
        'hill_station_food.jpg',
        'hill_station_exterior.jpg',
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
  //Sua
  {
    id: 'sua-vegan-restaurant', // <-- ID теперь строковый
    coordinates: [15.883638636542983, 108.32000846236811], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: '1.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Sua Cafe',
      description:
        'A special place supporting ethnic minority groups and people with disabilities in Quang Nam.',
      fullDescription: `
<p>While passing through multiple burning fields of grass, we came into contact with villagers who suffered great hardship and less fortunate circumstances. Today, there are many ethnic minority groups experiencing great poverty and lacking basic needs such as food and clothing. Disabled people who were born with birth defects due to the effects of Agent Orange passed down genetically through their parents, some who are deaf and with limited speech are employed here. Working here gives them a sense of purpose and belonging. The Thanh Uyen Roastery Sua Cafe gives them the opportunity to provide dedicated customer service.</p>

<p>By supporting our coffee you are greatly helping to provide employment and change lives for the better. We are so thankful for your continued support: Let’s share our smiles and happily celebrate life together!</p>

<h6>Our Mission</h6>
<p>I created Ong Vang Charity project 7 years ago, with the aim of helping minority ethnic groups in the Quang Nam mountains. Now we are over 200 active members as well as 1800 members. And I give back 10% of the profits of the coffee shop for our project. Thanks to all these people and donations we already built 13 schools, and 4 wells. We help every month too:</p>
<ul>
  <li>By giving each month around 2 million VND to each school for food. We also give second-hand clothes every two months.</li>
  <li>We also help the poor people of Hoi An by distributing bread every morning. And a meal distribution in the city’s hospital twice a month.</li>
</ul>

<h6>Our Products</h6>
<p>We are a group of 22 members, of which 80 percent are persons with disabilities. For us, it is very important to give an opportunity and also to try to adapt each task.</p>
<p>That’s why handcraft comes to us, every person in the group can help and thanks to that we have a great selection of products. We are making lanterns and embroidery painting! Come buy one of our products help the whole community and give employment to more people in need.</p>
      `,
      internalImageNames: [
        'sua_cafe_1.jpg',
        'sua_cafe_2.jpg',
        // Добавьте сюда имена файлов изображений, связанных с этим кафе
      ],
    },
    es: {
      title: 'Sua Cafe',
      description:
        'Un lugar especial que apoya a los grupos étnicos minoritarios y a las personas con discapacidad en las montañas de Quang Nam.',
      fullDescription: `
<p>Mientras pasábamos por varios campos de hierba en llamas, entramos en contacto con aldeanos que sufrían grandes dificultades y circunstancias menos afortunadas. Hoy en día, muchos grupos étnicos minoritarios experimentan una gran pobreza y carecen de necesidades básicas como alimentos y ropa. Personas con discapacidad que nacieron con defectos de nacimiento debido a los efectos del Agente Naranja, transmitidos genéticamente por sus padres, algunos sordos y con habla limitada, están empleados aquí. Trabajar aquí les da un sentido de propósito y pertenencia. Thanh Uyen Roastery Sua Cafe les da la oportunidad de brindar un servicio al cliente dedicado.</p>

<p>Al apoyar nuestro café, usted está ayudando enormemente a proporcionar empleo y a cambiar vidas para mejor. ¡Estamos muy agradecidos por su continuo apoyo: Compartamos nuestras sonrisas y celebremos felizmente la vida juntos!</p>

<h6>Nuestra Misión</h6>
<p>Creé el proyecto benéfico Ong Vang hace 7 años, con el objetivo de ayudar a los grupos étnicos minoritarios en las montañas de Quang Nam. Ahora contamos con más de 200 miembros activos, así como 1800 miembros. Y devuelvo el 10% de las ganancias de la cafetería a nuestro proyecto. Gracias a todas estas personas y donaciones ya hemos construido 13 escuelas y 4 pozos. También ayudamos cada mes:</p>
<ul>
  <li>Dando cada mes alrededor de 2 millones de VND a cada escuela para alimentos. También damos ropa de segunda mano cada dos meses.</li>
  <li>También ayudamos a los pobres de Hoi An distribuyendo pan todas las mañanas. Y una distribución de comidas en el hospital de la ciudad dos veces al mes.</li>
</ul>

<h6>Nuestros Productos</h6>
<p>Somos un grupo de 22 miembros, de los cuales el 80 por ciento son personas con discapacidad. Para nosotros, es muy importante dar una oportunidad y también tratar de adaptar cada tarea.</p>
<p>Por eso la artesanía llega a nosotros, cada persona del grupo puede ayudar y gracias a eso tenemos una gran selección de productos. ¡Estamos haciendo linternas y pinturas de bordado! Venga a comprar uno de nuestros productos, ayude a toda la comunidad y dé empleo a más personas necesitadas.</p>
      `,
      internalImageNames: [], // ЗАПОЛНИТЬ ПРИ НЕОБХОДИМОСТИ
    },
    fr: {
      title: 'Sua Cafe',
      description:
        'Un lieu spécial qui soutient les groupes ethniques minoritaires et les personnes handicapées dans les montagnes de Quang Nam.',
      fullDescription: `
<p>En traversant plusieurs champs d'herbe en feu, nous sommes entrés en contact avec des villageois qui souffraient de grandes difficultés et de circonstances moins favorables. Aujourd'hui, de nombreux groupes ethniques minoritaires connaissent une grande pauvreté et manquent de produits de première nécessité tels que la nourriture et les vêtements. Les personnes handicapées nées avec des malformations congénitales dues aux effets de l'Agent Orange, transmis génétiquement par leurs parents, certaines sourdes et ayant des difficultés d'élocution, sont employées ici. Travailler ici leur donne un sentiment d'utilité et d'appartenance. Le Thanh Uyen Roastery Sua Cafe leur donne l'opportunité de fournir un service client dédié.</p>

<p>En soutenant notre café, vous contribuez grandement à créer des emplois et à améliorer des vies. Nous vous sommes très reconnaissants de votre soutien continu : Partageons nos sourires et célébrons joyeusement la vie ensemble !</p>

<h6>Notre Mission</h6>
<p>J'ai créé le projet caritatif Ong Vang il y a 7 ans, dans le but d'aider les groupes ethniques minoritaires des montagnes de Quang Nam. Nous comptons maintenant plus de 200 membres actifs ainsi que 1800 membres. Et je reverse 10 % des bénéfices du café à notre projet. Grâce à toutes ces personnes et à ces dons, nous avons déjà construit 13 écoles et 4 puits. Nous aidons également chaque mois :</p>
<ul>
  <li>En donnant chaque mois environ 2 millions de VND à chaque école pour la nourriture. Nous donnons également des vêtements de seconde main tous les deux mois.</li>
  <li>Nous aidons également les pauvres de Hoi An en distribuant du pain tous les matins. Et une distribution de repas à l'hôpital de la ville deux fois par mois.</li>
</ul>

<h6>Nos Produits</h6>
<p>Nous sommes un groupe de 22 membres, dont 80 % sont des personnes handicapées. Pour nous, il est très important de leur donner une opportunité et d'essayer d'adapter chaque tâche.</p>
<p>C'est pourquoi l'artisanat vient à nous, chaque personne du groupe peut aider et grâce à cela, nous avons une grande sélection de produits. Nous fabriquons des lanternes et des peintures brodées ! Venez acheter l'un de nos produits, aidez toute la communauté et donnez un emploi à plus de personnes dans le besoin.</p>
      `,
      internalImageNames: [], // ЗАПОЛНИТЬ ПРИ НЕОБХОДИМОСТИ
    },
    ru: {
      title: 'Кофейня Sua Cafe',
      description:
        'Особое место, поддерживающее этнические меньшинства и людей с ограниченными возможностями в горах Куангнам.',
      fullDescription: `
<p>Проходя через выжженные травяные поля, мы встретились с жителями деревень, которые переживали большие трудности и жили в менее благоприятных условиях. Сегодня многие этнические меньшинства испытывают крайнюю нищету и лишены базовых потребностей, таких как еда и одежда. Люди с ограниченными возможностями, родившиеся с врожденными дефектами из-за последствий Agent Orange, передаваемых генетически от их родителей, некоторые из которых глухие и с ограниченной речью, трудоустроены здесь. Работа здесь дает им чувство цели и принадлежности. Кофейня Thanh Uyen Roastery Sua Cafe предоставляет им возможность оказывать внимательное обслуживание клиентов.</p>

<p>Поддерживая наш кофе, вы вносите огромный вклад в обеспечение занятости и изменение жизни к лучшему. Мы очень благодарны за вашу постоянную поддержку: Давайте делиться улыбками и счастливо праздновать жизнь вместе!</p>

<h6>Наша Миссия</h6>
<p>Я создал благотворительный проект Ong Vang 7 лет назад с целью помощи этническим меньшинствам в горах Куангнам. Сейчас у нас более 200 активных членов, а также 1800 просто членов. И я отдаю 10% прибыли кофейни на наш проект. Благодаря всем этим людям и пожертвованиям мы уже построили 13 школ и 4 колодца. Мы также помогаем каждый месяц:</p>
<ul>
  <li>Выделяя около 2 миллионов донгов (VND) каждой школе ежемесячно на еду. Мы также раздаем подержанную одежду каждые два месяца.</li>
  <li>Мы также помогаем бедным жителям Хойана, ежедневно раздавая хлеб по утрам. И дважды в месяц организуем раздачу еды в городской больнице.</li>
</ul>

<h6>Наши Продукты</h6>
<p>Мы – группа из 22 человек, из которых 80 процентов – люди с ограниченными возможностями. Для нас очень важно предоставлять возможности и стараться адаптировать каждую задачу.</p>
<p>Именно поэтому мы занимаемся ремеслами – каждый человек в группе может помочь, и благодаря этому у нас есть большой выбор продуктов. Мы изготавливаем фонарики и вышитые картины! Приходите и купите один из наших продуктов, помогите всему сообществу и предоставьте работу большему количеству нуждающихся людей.</p>
      `,
      internalImageNames: [], // ЗАПОЛНИТЬ ПРИ НЕОБХОДИМОСТИ
    },
    vn: {
      title: 'Sua Cafe',
      description:
        'Một nơi đặc biệt hỗ trợ các nhóm dân tộc thiểu số và người khuyết tật ở vùng núi Quảng Nam.',
      fullDescription: `
<p>Khi đi qua nhiều cánh đồng cỏ đang cháy, chúng tôi đã tiếp xúc với những người dân làng gặp nhiều khó khăn và hoàn cảnh kém may mắn. Ngày nay, có nhiều nhóm dân tộc thiểu số đang sống trong cảnh nghèo đói và thiếu thốn những nhu cầu cơ bản như thức ăn và quần áo. Những người khuyết tật sinh ra với dị tật bẩm sinh do ảnh hưởng của chất độc màu da cam được di truyền qua cha mẹ của họ, một số người bị điếc và có khả năng nói hạn chế đang được tuyển dụng tại đây. Làm việc ở đây mang lại cho họ cảm giác có mục đích và thuộc về. Quán cà phê Thanh Uyên Roastery Sua Cafe mang đến cho họ cơ hội cung cấp dịch vụ khách hàng tận tâm.</p>

<p>Bằng cách ủng hộ cà phê của chúng tôi, bạn đang góp phần rất lớn vào việc tạo việc làm và thay đổi cuộc sống tốt đẹp hơn. Chúng tôi rất biết ơn sự hỗ trợ liên tục của bạn: Hãy cùng chia sẻ nụ cười và vui vẻ ăn mừng cuộc sống cùng nhau!</p>

<h6>Sứ mệnh của chúng tôi</h6>
<p>Tôi đã tạo ra dự án từ thiện Ông Vàng 7 năm trước, với mục đích giúp đỡ các nhóm dân tộc thiểu số ở vùng núi Quảng Nam. Hiện tại chúng tôi có hơn 200 thành viên tích cực cũng như 1800 thành viên. Và tôi trích 10% lợi nhuận của quán cà phê cho dự án của chúng tôi. Nhờ tất cả những người này và những đóng góp, chúng tôi đã xây dựng 13 trường học và 4 giếng nước. Chúng tôi cũng giúp đỡ hàng tháng:</p>
<ul>
  <li>Bằng cách trao khoảng 2 triệu VND cho mỗi trường học để mua thức ăn hàng tháng. Chúng tôi cũng tặng quần áo cũ hai tháng một lần.</li>
  <li>Chúng tôi cũng giúp đỡ người nghèo ở Hội An bằng cách phân phát bánh mì mỗi sáng. Và phân phát bữa ăn tại bệnh viện thành phố hai lần một tháng.</li>
</ul>

<h6>Sản phẩm của chúng tôi</h6>
<p>Chúng tôi là một nhóm gồm 22 thành viên, trong đó 80% là người khuyết tật. Đối với chúng tôi, điều rất quan trọng là tạo cơ hội và cũng cố gắng điều chỉnh từng nhiệm vụ.</p>
<p>Đó là lý do tại sao đồ thủ công đến với chúng tôi, mỗi người trong nhóm đều có thể giúp đỡ và nhờ đó, chúng tôi có một lựa chọn sản phẩm tuyệt vời. Chúng tôi đang làm đèn lồng và tranh thêu! Hãy đến mua một trong những sản phẩm của chúng tôi để giúp đỡ cả cộng đồng và tạo việc làm cho nhiều người cần giúp đỡ hơn.</p>
      `,
      internalImageNames: [], // ЗАПОЛНИТЬ ПРИ НЕОБХОДИМОСТИ
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
