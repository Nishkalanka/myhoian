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
    imageUrl: '58.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Sua Vegan Restaurant',
      description:
        'A special and heartwarming vegan restaurant in Hoi An, renowned for its delicious plant-based cuisine and its unique mission of employing deaf and mute staff.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> in Hoi An is more than just a place to eat; it's a truly special establishment known for its delicious vegan food and its incredibly inspiring social mission. What sets Sua apart is its commitment to employing and empowering <strong>deaf and mute individuals</strong>, offering them meaningful opportunities and fostering a unique, heartwarming dining experience.</p>

<h6>A Special Place with a Heartfelt Mission:</h6>
<ul>
  <li><strong>Empowering Employment:</strong> Sua Vegan Restaurant provides invaluable employment opportunities for deaf and mute people, giving them a platform to showcase their skills and contribute to the community. This initiative highlights inclusivity and creates a supportive environment.</li>
  <li><strong>Unique Communication:</strong> Don't be surprised by a slightly different but charming way of ordering. The staff are adept at communicating through a combination of written notes, gestures, and a warm, welcoming attitude. It's an opportunity for guests to engage in a unique and respectful interaction.</li>
  <li><strong>Inspiring Atmosphere:</strong> The presence of the dedicated and hardworking staff contributes to an incredibly positive and humble atmosphere. Many visitors find their experience here deeply moving and memorable.</li>
</ul>

<h6>Vegan Delights:</h6>
<ul>
  <li><strong>Pure Plant-Based Cuisine:</strong> As the name suggests, Sua is entirely vegan, offering a diverse menu of plant-based dishes that are both healthy and incredibly flavorful.</li>
  <li><strong>Vietnamese & Fusion:</strong> The menu typically features a blend of traditional Vietnamese vegan dishes (like fresh spring rolls, various noodle soups, rice dishes) alongside some creative fusion options.</li>
  <li><strong>Fresh Ingredients:</strong> Emphasis is placed on fresh, local vegetables, herbs, and plant-based proteins, ensuring vibrant and wholesome meals.</li>
  <li><strong>Dietary Friendly:</strong> A great choice for vegans, vegetarians, and anyone looking for healthy, light, and flavorful meals.</li>
</ul>

<h6>Atmosphere & Ambiance:</h6>
<ul>
  <li><strong>Calm and Serene:</strong> Despite being popular, the atmosphere often remains calm and peaceful, allowing guests to relax and savor their meals.</li>
  <li><strong>Authentic Charm:</strong> The decor is usually simple yet charming, reflecting traditional Vietnamese aesthetics with a modern, clean twist.</li>
</ul>

<h6>Location:</h6>
<p>Sua Vegan Restaurant is typically located within or near the central Ancient Town area of Hoi An, making it convenient for tourists exploring the historical sites. Its exact address might be found on a quieter street, offering a peaceful escape from the main crowds.</p>
<p><strong>Always verify the exact address locally or on recent online maps, as businesses can sometimes change locations.</strong></p>

<h6>Visitor Tips:</h6>
<ul>
  <li><strong>Be Patient and Respectful:</strong> Embrace the unique communication style. A smile and a clear written note often go a long way.</li>
  <li><strong>Support the Mission:</strong> By dining here, you are directly supporting a wonderful social enterprise.</li>
  <li><strong>Try the Local Specialties:</strong> Explore their vegan versions of classic Vietnamese dishes.</li>
  <li><strong>Consider Lunch:</strong> It's a great spot for a healthy and satisfying lunch during your exploration of Hoi An.</li>
</ul>
      `,
      internalImageNames: [], // Добавьте имена файлов изображений, если они будут
    },
    es: {
      title: 'Sua Vegan Restaurant',
      description:
        'Un restaurante vegano especial y conmovedor en Hoi An, famoso por su deliciosa cocina a base de plantas y su misión única de emplear personal sordo y mudo.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> en Hoi An es más que un simple lugar para comer; es un establecimiento verdaderamente especial conocido por su deliciosa comida vegana y su increíble misión social inspiradora. Lo que distingue a Sua es su compromiso de emplear y empoderar a <strong>personas sordas y mudas</strong>, ofreciéndoles oportunidades significativas y fomentando una experiencia gastronómica única y conmovedora.</p>

<h6>Un Lugar Especial con una Misión Sincera:</h6>
<ul>
  <li><strong>Empleo Empoderador:</strong> Sua Vegan Restaurant brinda oportunidades de empleo invaluables para personas sordas y mudas, dándoles una plataforma para mostrar sus habilidades y contribuir a la comunidad. Esta iniciativa destaca la inclusión y crea un ambiente de apoyo.</li>
  <li><strong>Comunicación Única:</strong> No se sorprenda por una forma de pedir un poco diferente pero encantadora. El personal es experto en comunicarse a través de una combinación de notas escritas, gestos y una actitud cálida y acogedora. Es una oportunidad para que los huéspedes se involucren en una interacción única y respetuosa.</li>
  <li><strong>Ambiente Inspirador:</strong> La presencia del personal dedicado y trabajador contribuye a una atmósfera increíblemente positiva y humilde. Muchos visitantes encuentran su experiencia aquí profundamente conmovedora y memorable.</li>
</ul>

<h6>Delicias Veganas:</h6>
<ul>
  <li><strong>Cocina Pura a Base de Plantas:</strong> Como su nombre lo indica, Sua es completamente vegano, ofreciendo un menú diverso de platos a base de plantas que son saludables y increíblemente sabrosos.</li>
  <li><strong>Vietnamita y Fusión:</strong> El menú generalmente presenta una mezcla de platos veganos vietnamitas tradicionales (como rollitos de primavera frescos, varias sopas de fideos, platos de arroz) junto con algunas opciones de fusión creativas.</li>
  <li><strong>Ingredientes Frescos:</strong> Se hace hincapié en verduras, hierbas y proteínas vegetales frescas y locales, lo que garantiza comidas vibrantes y saludables.</li>
  <li><strong>Apto para Dietas:</strong> Una excelente opción para veganos, vegetarianos y cualquiera que busque comidas saludables, ligeras y sabrosas.</li>
</ul>

<h6>Atmósfera y Ambiente:</h6>
<ul>
  <li><strong>Tranquilo y Sereno:</strong> A pesar de ser popular, el ambiente a menudo se mantiene tranquilo y pacífico, lo que permite a los huéspedes relajarse y saborear sus comidas.</li>
  <li><strong>Encanto Auténtico:</strong> La decoración suele ser sencilla pero encantadora, lo que refleja la estética tradicional vietnamita con un toque moderno y limpio.</li>
</ul>

<h6>Ubicación:</h6>
<p>Sua Vegan Restaurant suele estar ubicado dentro o cerca del área central del Casco Antiguo de Hoi An, lo que lo hace conveniente para los turistas que exploran los sitios históricos. Su dirección exacta podría encontrarse en una calle más tranquila, ofreciendo un escape pacífico de las principales multitudes.</p>
<p><strong>Siempre verifique la dirección exacta a nivel local o en mapas en línea recientes, ya que los negocios a veces pueden cambiar de ubicación.</strong></p>

<h6>Consejos para Visitantes:</h6>
<ul>
  <li><strong>Sea Paciente y Respetuoso:</strong> Adopte el estilo de comunicación único. Una sonrisa y una nota escrita clara suelen ser muy útiles.</li>
  <li><strong>Apoye la Misión:</strong> Al cenar aquí, está apoyando directamente una maravillosa empresa social.</li>
  <li><strong>Pruebe las Especialidades Locales:</strong> Explore sus versiones veganas de platos vietnamitas clásicos.</li>
  <li><strong>Considere Almorzar:</strong> Es un gran lugar para un almuerzo saludable y satisfactorio durante su exploración de Hoi An.</li>
</ul>
      `,
      internalImageNames: [],
    },
    fr: {
      title: 'Sua Vegan Restaurant',
      description:
        "Un restaurant végétalien spécial et chaleureux à Hoi An, réputé pour sa délicieuse cuisine à base de plantes et sa mission unique d'employer du personnel sourd et muet.",
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> à Hoi An est bien plus qu'un simple endroit pour manger ; c'est un établissement véritablement spécial, connu pour sa délicieuse cuisine végétalienne et sa mission sociale incroyablement inspirante. Ce qui distingue Sua est son engagement à employer et à autonomiser les <strong>personnes sourdes et muettes</strong>, en leur offrant des opportunités significatives et en favorisant une expérience culinaire unique et émouvante.</p>

<h6>Un Lieu Spécial avec une Mission Sincère :</h6>
<ul>
  <li><strong>Emploi Autonomisant :</strong> Le Sua Vegan Restaurant offre des opportunités d'emploi inestimables aux personnes sourdes et muettes, leur donnant une plateforme pour montrer leurs compétences et contribuer à la communauté. Cette initiative met en lumière l'inclusion et crée un environnement de soutien.</li>
  <li><strong>Communication Unique :</strong> Ne soyez pas surpris par une façon de commander légèrement différente mais charmante. Le personnel est habile à communiquer par une combinaison de notes écrites, de gestes et d'une attitude chaleureuse et accueillante. C'est une opportunité pour les clients de s'engager dans une interaction unique et respectueuse.</li>
  <li><strong>Atmosphère Inspirante :</strong> La présence du personnel dévoué et travailleur contribue à une atmosphère incroyablement positive et humble. De nombreux visiteurs trouvent leur expérience ici profondément émouvante et mémorable.</li>
</ul>

<h6>Délices Végétaliens :</h6>
<ul>
  <li><strong>Cuisine Purement Végétale :</strong> Comme son nom l'indique, Sua est entièrement végétalien, offrant un menu diversifié de plats à base de plantes qui sont à la fois sains et incroyablement savoureux.</li>
  <li><strong>Vietnamien & Fusion :</strong> Le menu propose généralement un mélange de plats végétaliens vietnamiens traditionnels (comme les rouleaux de printemps frais, diverses soupes de nouilles, plats de riz) ainsi que des options de fusion créatives.</li>
  <li><strong>Ingrédients Frais :</strong> L'accent est mis sur les légumes, les herbes et les protéines végétales frais et locaux, garantissant des repas vibrants et sains.</li>
  <li><strong>Adapté aux Régimes :</strong> Un excellent choix pour les végétaliens, les végétariens et toute personne à la recherche de repas sains, légers et savoureux.</li>
</ul>

<h6>Atmosphère & Ambiance :</h6>
<ul>
  <li><strong>Calme et Serein :</strong> Bien qu'étant populaire, l'atmosphère reste souvent calme et paisible, permettant aux clients de se détendre et de savourer leurs repas.</li>
  <li><strong>Charme Authentique :</strong> Le décor est généralement simple mais charmant, reflétant l'esthétique traditionnelle vietnamienne avec une touche moderne et épurée.</li>
</ul>

<h6>Localisation :</h6>
<p>Le Sua Vegan Restaurant est généralement situé dans ou à proximité de la zone centrale de la Vieille Ville de Hoi An, ce qui le rend pratique pour les touristes explorant les sites historiques. Son adresse exacte pourrait se trouver dans une rue plus calme, offrant une évasion paisible des principales foules.</p>
<p><strong>Veuillez toujours vérifier l'adresse exacte localement ou sur des cartes en ligne récentes, car les entreprises peuvent parfois changer d'emplacement.</strong></p>

<h6>Conseils pour les Visiteurs :</h6>
<ul>
  <li><strong>Soyez Patient et Respectueux :</strong> Adoptez le style de communication unique. Un sourire et une note écrite claire sont souvent très utiles.</li>
  <li><strong>Soutenez la Mission :</strong> En dînant ici, vous soutenez directement une merveilleuse entreprise sociale.</li>
  <li><strong>Goûtez les Spécialités Locales :</strong> Explorez leurs versions végétaliennes des plats vietnamiens classiques.</li>
  <li><strong>Considérez le Déjeuner :</strong> C'est un excellent endroit pour un déjeuner sain et satisfaisant lors de votre exploration de Hoi An.</li>
</ul>
      `,
      internalImageNames: [],
    },
    ru: {
      title: 'Sua Vegan Restaurant',
      description:
        'Особый и душевный веганский ресторан в Хойане, известный своей вкусной растительной кухней и уникальной миссией по трудоустройству глухонемых сотрудников.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> в Хойане — это не просто место, где можно поесть; это поистине особенное заведение, известное своей вкусной веганской едой и невероятно вдохновляющей социальной миссией. Что отличает Sua, так это его приверженность трудоустройству и расширению прав и возможностей <strong>глухонемых людей</strong>, предлагая им значимые возможности и создавая уникальный, трогательный опыт обеда.</p>

<h6>Особенное место с искренней миссией:</h6>
<ul>
  <li><strong>Расширение прав и возможностей через трудоустройство:</strong> Sua Vegan Restaurant предоставляет бесценные возможности трудоустройства для глухонемых людей, давая им платформу для демонстрации своих навыков и внесения вклада в сообщество. Эта инициатива подчеркивает инклюзивность и создает благоприятную среду.</li>
  <li><strong>Уникальное общение:</strong> Не удивляйтесь немного иному, но очаровательному способу заказа. Персонал искусен в общении с помощью письменных заметок, жестов и теплого, гостеприимного отношения. Это возможность для гостей вступить в уникальное и уважительное взаимодействие.</li>
  <li><strong>Вдохновляющая атмосфера:</strong> Присутствие преданного своему делу и трудолюбивого персонала способствует невероятно позитивной и скромной атмосфере. Многие посетители находят свой опыт здесь глубоко трогательным и запоминающимся.</li>
</ul>

<h6>Веганские изыски:</h6>
<ul>
  <li><strong>Чистая растительная кухня:</strong> Как следует из названия, Sua полностью веганский, предлагая разнообразное меню из растительных блюд, которые являются одновременно полезными и невероятно ароматными.</li>
  <li><strong>Вьетнамская и фьюжн:</strong> Меню обычно включает в себя сочетание традиционных вьетнамских веганских блюд (например, свежие спринг-роллы, различные супы с лапшой, рисовые блюда) наряду с некоторыми креативными фьюжн-вариантами.</li>
  <li><strong>Свежие ингредиенты:</strong> Особое внимание уделяется свежим местным овощам, травам и растительным белкам, что обеспечивает яркие и полезные блюда.</li>
  <li><strong>Подходит для диетического питания:</strong> Отличный выбор для веганов, вегетарианцев и всех, кто ищет здоровые, легкие и ароматные блюда.</li>
</ul>

<h6>Атмосфера и обстановка:</h6>
<ul>
  <li><strong>Спокойный и безмятежный:</strong> Несмотря на популярность, атмосфера часто остается спокойной и мирной, позволяя гостям расслабиться и насладиться едой.</li>
  <li><strong>Подлинный шарм:</strong> Декор обычно простой, но очаровательный, отражающий традиционную вьетнамскую эстетику с современным, чистым оттенком.</li>
</ul>

<h6>Расположение:</h6>
<p>Sua Vegan Restaurant обычно расположен в центральной части Старого города Хойана или очень близко к нему, что делает его удобным для туристов, исследующих исторические места. Его точный адрес может быть найден на более тихой улице, предлагая спокойное убежище от основной толпы.</p>
<p><strong>Всегда уточняйте точный адрес на месте или на свежих онлайн-картах, так как предприятия иногда могут менять свое местоположение.</strong></p>

<h6>Советы для посетителей:</h6>
<ul>
  <li><strong>Будьте терпеливы и уважительны:</strong> Примите уникальный стиль общения. Улыбка и четкая письменная заметка часто очень помогают.</li>
  <li><strong>Поддержите миссию:</strong> Обедая здесь, вы напрямую поддерживаете замечательное социальное предприятие.</li>
  <li><strong>Попробуйте местные деликатесы:</strong> Изучите их веганские версии классических вьетнамских блюд.</li>
  <li><strong>Рассмотрите обед:</strong> Это отличное место для здорового и сытного обеда во время вашего знакомства с Хойаном.</li>
</ul>
      `,
      internalImageNames: [],
    },
    vn: {
      title: 'Sua Vegan Restaurant',
      description:
        'Một nhà hàng thuần chay đặc biệt và ấm áp ở Hội An, nổi tiếng với ẩm thực thực vật ngon miệng và sứ mệnh độc đáo là tuyển dụng nhân viên khiếm thính và khiếm ngôn.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> ở Hội An không chỉ là một nơi để ăn uống; đây là một cơ sở thực sự đặc biệt, nổi tiếng với các món ăn chay thơm ngon và sứ mệnh xã hội đầy cảm hứng. Điều làm nên sự khác biệt của Sua là cam kết tuyển dụng và trao quyền cho <strong>những người khiếm thính và khiếm ngôn</strong>, mang đến cho họ những cơ hội có ý nghĩa và tạo ra trải nghiệm ăn uống độc đáo, ấm lòng.</p>

<h6>Một Địa điểm Đặc biệt với Sứ mệnh Từ tâm:</h6>
<ul>
  <li><strong>Trao quyền Thông qua Việc làm:</strong> Sua Vegan Restaurant cung cấp các cơ hội việc làm vô giá cho người khiếm thính và khiếm ngôn, tạo cho họ một nền tảng để thể hiện kỹ năng và đóng góp cho cộng đồng. Sáng kiến này đề cao sự hòa nhập và tạo ra một môi trường hỗ trợ.</li>
  <li><strong>Giao tiếp Độc đáo:</strong> Đừng ngạc nhiên bởi một cách gọi món hơi khác nhưng duyên dáng. Nhân viên thông thạo giao tiếp thông qua sự kết hợp của ghi chú viết tay, cử chỉ và thái độ nồng nhiệt, hiếu khách. Đây là cơ hội để khách hàng tham gia vào một tương tác độc đáo và tôn trọng.</li>
  <li><strong>Không gian Truyền cảm hứng:</strong> Sự hiện diện của đội ngũ nhân viên tận tâm và chăm chỉ góp phần tạo nên một không khí vô cùng tích cực và khiêm tốn. Nhiều du khách nhận thấy trải nghiệm của họ ở đây vô cùng cảm động và đáng nhớ.</li>
</ul>

<h6>Đồ ăn chay ngon miệng:</h6>
<ul>
  <li><strong>Ẩm thực Thuần thực vật:</strong> Đúng như tên gọi, Sua hoàn toàn thuần chay, cung cấp thực đơn đa dạng các món ăn từ thực vật, vừa tốt cho sức khỏe vừa vô cùng đậm đà hương vị.</li>
  <li><strong>Món Việt & Fusion:</strong> Thực đơn thường có sự pha trộn giữa các món ăn chay truyền thống Việt Nam (như nem tươi, các loại bún, cơm) cùng với một số lựa chọn fusion sáng tạo.</li>
  <li><strong>Nguyên liệu Tươi sống:</strong> Sự nhấn mạnh được đặt vào các loại rau, thảo mộc và protein thực vật tươi, địa phương, đảm bảo các bữa ăn sống động và bổ dưỡng.</li>
  <li><strong>Phù hợp với Chế độ ăn kiêng:</strong> Một lựa chọn tuyệt vời cho người ăn chay, người ăn chay trường và bất kỳ ai đang tìm kiếm những bữa ăn lành mạnh, nhẹ nhàng và đầy hương vị.</li>
</ul>

<h6>Bầu không khí & Không gian:</h6>
<ul>
  <li><strong>Bình yên và Thanh tịnh:</strong> Mặc dù nổi tiếng, không gian thường vẫn bình tĩnh và yên bình, cho phép khách thư giãn và thưởng thức bữa ăn của họ.</li>
  <li><strong>Nét duyên dáng Authenticity:</strong> Trang trí thường đơn giản nhưng quyến rũ, phản ánh nét thẩm mỹ truyền thống Việt Nam với một chút hiện đại, sạch sẽ.</li>
</ul>

<h6>Vị trí:</h6>
<p>Sua Vegan Restaurant thường nằm trong hoặc rất gần khu vực Phố cổ Hội An, giúp khách du lịch dễ dàng tiếp cận để khám phá các di tích lịch sử. Địa chỉ chính xác của nó có thể nằm trên một con phố yên tĩnh hơn, mang đến một lối thoát bình yên khỏi đám đông chính.</p>
<p><strong>Luôn xác minh địa chỉ chính xác tại địa phương hoặc trên các bản đồ trực tuyến gần đây, vì các doanh nghiệp đôi khi có thể thay đổi vị trí.</strong></p>

<h6>Mẹo dành cho Du khách:</h6>
<ul>
  <li><strong>Hãy Kiên nhẫn và Tôn trọng:</strong> Chấp nhận phong cách giao tiếp độc đáo. Một nụ cười và một ghi chú viết rõ ràng thường rất hữu ích.</li>
  <li><strong>Ủng hộ Sứ mệnh:</strong> Bằng cách dùng bữa tại đây, bạn đang trực tiếp ủng hộ một doanh nghiệp xã hội tuyệt vời.</li>
  <li><strong>Thử các Món Đặc sản Địa phương:</strong> Khám phá các phiên bản chay của các món ăn Việt Nam cổ điển của họ.</li>
  <li><strong>Cân nhắc dùng Bữa trưa:</strong> Đây là một địa điểm tuyệt vời cho một bữa trưa lành mạnh và no bụng trong chuyến khám phá Hội An của bạn.</li>
</ul>
      `,
      internalImageNames: [],
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
  //fefe-Roastery
  {
    id: 'fefe-roastery', // <-- ID теперь строковый
    coordinates: [15.877930767963667, 108.32668616386269], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: '58.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Fefe Roastery ',
      description:
        'A special and heartwarming vegan restaurant in Hoi An, renowned for its delicious plant-based cuisine and its unique mission of employing deaf and mute staff.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> in Hoi An is more than just a place to eat; it's a truly special establishment known for its delicious vegan food and its incredibly inspiring social mission. What sets Sua apart is its commitment to employing and empowering <strong>deaf and mute individuals</strong>, offering them meaningful opportunities and fostering a unique, heartwarming dining experience.</p>

<h6>A Special Place with a Heartfelt Mission:</h6>
<ul>
  <li><strong>Empowering Employment:</strong> Sua Vegan Restaurant provides invaluable employment opportunities for deaf and mute people, giving them a platform to showcase their skills and contribute to the community. This initiative highlights inclusivity and creates a supportive environment.</li>
  <li><strong>Unique Communication:</strong> Don't be surprised by a slightly different but charming way of ordering. The staff are adept at communicating through a combination of written notes, gestures, and a warm, welcoming attitude. It's an opportunity for guests to engage in a unique and respectful interaction.</li>
  <li><strong>Inspiring Atmosphere:</strong> The presence of the dedicated and hardworking staff contributes to an incredibly positive and humble atmosphere. Many visitors find their experience here deeply moving and memorable.</li>
</ul>

<h6>Vegan Delights:</h6>
<ul>
  <li><strong>Pure Plant-Based Cuisine:</strong> As the name suggests, Sua is entirely vegan, offering a diverse menu of plant-based dishes that are both healthy and incredibly flavorful.</li>
  <li><strong>Vietnamese & Fusion:</strong> The menu typically features a blend of traditional Vietnamese vegan dishes (like fresh spring rolls, various noodle soups, rice dishes) alongside some creative fusion options.</li>
  <li><strong>Fresh Ingredients:</strong> Emphasis is placed on fresh, local vegetables, herbs, and plant-based proteins, ensuring vibrant and wholesome meals.</li>
  <li><strong>Dietary Friendly:</strong> A great choice for vegans, vegetarians, and anyone looking for healthy, light, and flavorful meals.</li>
</ul>

<h6>Atmosphere & Ambiance:</h6>
<ul>
  <li><strong>Calm and Serene:</strong> Despite being popular, the atmosphere often remains calm and peaceful, allowing guests to relax and savor their meals.</li>
  <li><strong>Authentic Charm:</strong> The decor is usually simple yet charming, reflecting traditional Vietnamese aesthetics with a modern, clean twist.</li>
</ul>

<h6>Location:</h6>
<p>Sua Vegan Restaurant is typically located within or near the central Ancient Town area of Hoi An, making it convenient for tourists exploring the historical sites. Its exact address might be found on a quieter street, offering a peaceful escape from the main crowds.</p>
<p><strong>Always verify the exact address locally or on recent online maps, as businesses can sometimes change locations.</strong></p>

<h6>Visitor Tips:</h6>
<ul>
  <li><strong>Be Patient and Respectful:</strong> Embrace the unique communication style. A smile and a clear written note often go a long way.</li>
  <li><strong>Support the Mission:</strong> By dining here, you are directly supporting a wonderful social enterprise.</li>
  <li><strong>Try the Local Specialties:</strong> Explore their vegan versions of classic Vietnamese dishes.</li>
  <li><strong>Consider Lunch:</strong> It's a great spot for a healthy and satisfying lunch during your exploration of Hoi An.</li>
</ul>
      `,
      internalImageNames: [], // Добавьте имена файлов изображений, если они будут
    },
    es: {
      title: 'Sua Vegan Restaurant',
      description:
        'Un restaurante vegano especial y conmovedor en Hoi An, famoso por su deliciosa cocina a base de plantas y su misión única de emplear personal sordo y mudo.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> en Hoi An es más que un simple lugar para comer; es un establecimiento verdaderamente especial conocido por su deliciosa comida vegana y su increíble misión social inspiradora. Lo que distingue a Sua es su compromiso de emplear y empoderar a <strong>personas sordas y mudas</strong>, ofreciéndoles oportunidades significativas y fomentando una experiencia gastronómica única y conmovedora.</p>

<h6>Un Lugar Especial con una Misión Sincera:</h6>
<ul>
  <li><strong>Empleo Empoderador:</strong> Sua Vegan Restaurant brinda oportunidades de empleo invaluables para personas sordas y mudas, dándoles una plataforma para mostrar sus habilidades y contribuir a la comunidad. Esta iniciativa destaca la inclusión y crea un ambiente de apoyo.</li>
  <li><strong>Comunicación Única:</strong> No se sorprenda por una forma de pedir un poco diferente pero encantadora. El personal es experto en comunicarse a través de una combinación de notas escritas, gestos y una actitud cálida y acogedora. Es una oportunidad para que los huéspedes se involucren en una interacción única y respetuosa.</li>
  <li><strong>Ambiente Inspirador:</strong> La presencia del personal dedicado y trabajador contribuye a una atmósfera increíblemente positiva y humilde. Muchos visitantes encuentran su experiencia aquí profundamente conmovedora y memorable.</li>
</ul>

<h6>Delicias Veganas:</h6>
<ul>
  <li><strong>Cocina Pura a Base de Plantas:</strong> Como su nombre lo indica, Sua es completamente vegano, ofreciendo un menú diverso de platos a base de plantas que son saludables y increíblemente sabrosos.</li>
  <li><strong>Vietnamita y Fusión:</strong> El menú generalmente presenta una mezcla de platos veganos vietnamitas tradicionales (como rollitos de primavera frescos, varias sopas de fideos, platos de arroz) junto con algunas opciones de fusión creativas.</li>
  <li><strong>Ingredientes Frescos:</strong> Se hace hincapié en verduras, hierbas y proteínas vegetales frescas y locales, lo que garantiza comidas vibrantes y saludables.</li>
  <li><strong>Apto para Dietas:</strong> Una excelente opción para veganos, vegetarianos y cualquiera que busque comidas saludables, ligeras y sabrosas.</li>
</ul>

<h6>Atmósfera y Ambiente:</h6>
<ul>
  <li><strong>Tranquilo y Sereno:</strong> A pesar de ser popular, el ambiente a menudo se mantiene tranquilo y pacífico, lo que permite a los huéspedes relajarse y saborear sus comidas.</li>
  <li><strong>Encanto Auténtico:</strong> La decoración suele ser sencilla pero encantadora, lo que refleja la estética tradicional vietnamita con un toque moderno y limpio.</li>
</ul>

<h6>Ubicación:</h6>
<p>Sua Vegan Restaurant suele estar ubicado dentro o cerca del área central del Casco Antiguo de Hoi An, lo que lo hace conveniente para los turistas que exploran los sitios históricos. Su dirección exacta podría encontrarse en una calle más tranquila, ofreciendo un escape pacífico de las principales multitudes.</p>
<p><strong>Siempre verifique la dirección exacta a nivel local o en mapas en línea recientes, ya que los negocios a veces pueden cambiar de ubicación.</strong></p>

<h6>Consejos para Visitantes:</h6>
<ul>
  <li><strong>Sea Paciente y Respetuoso:</strong> Adopte el estilo de comunicación único. Una sonrisa y una nota escrita clara suelen ser muy útiles.</li>
  <li><strong>Apoye la Misión:</strong> Al cenar aquí, está apoyando directamente una maravillosa empresa social.</li>
  <li><strong>Pruebe las Especialidades Locales:</strong> Explore sus versiones veganas de platos vietnamitas clásicos.</li>
  <li><strong>Considere Almorzar:</strong> Es un gran lugar para un almuerzo saludable y satisfactorio durante su exploración de Hoi An.</li>
</ul>
      `,
      internalImageNames: [],
    },
    fr: {
      title: 'Sua Vegan Restaurant',
      description:
        "Un restaurant végétalien spécial et chaleureux à Hoi An, réputé pour sa délicieuse cuisine à base de plantes et sa mission unique d'employer du personnel sourd et muet.",
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> à Hoi An est bien plus qu'un simple endroit pour manger ; c'est un établissement véritablement spécial, connu pour sa délicieuse cuisine végétalienne et sa mission sociale incroyablement inspirante. Ce qui distingue Sua est son engagement à employer et à autonomiser les <strong>personnes sourdes et muettes</strong>, en leur offrant des opportunités significatives et en favorisant une expérience culinaire unique et émouvante.</p>

<h6>Un Lieu Spécial avec une Mission Sincère :</h6>
<ul>
  <li><strong>Emploi Autonomisant :</strong> Le Sua Vegan Restaurant offre des opportunités d'emploi inestimables aux personnes sourdes et muettes, leur donnant une plateforme pour montrer leurs compétences et contribuer à la communauté. Cette initiative met en lumière l'inclusion et crée un environnement de soutien.</li>
  <li><strong>Communication Unique :</strong> Ne soyez pas surpris par une façon de commander légèrement différente mais charmante. Le personnel est habile à communiquer par une combinaison de notes écrites, de gestes et d'une attitude chaleureuse et accueillante. C'est une opportunité pour les clients de s'engager dans une interaction unique et respectueuse.</li>
  <li><strong>Atmosphère Inspirante :</strong> La présence du personnel dévoué et travailleur contribue à une atmosphère incroyablement positive et humble. De nombreux visiteurs trouvent leur expérience ici profondément émouvante et mémorable.</li>
</ul>

<h6>Délices Végétaliens :</h6>
<ul>
  <li><strong>Cuisine Purement Végétale :</strong> Comme son nom l'indique, Sua est entièrement végétalien, offrant un menu diversifié de plats à base de plantes qui sont à la fois sains et incroyablement savoureux.</li>
  <li><strong>Vietnamien & Fusion :</strong> Le menu propose généralement un mélange de plats végétaliens vietnamiens traditionnels (comme les rouleaux de printemps frais, diverses soupes de nouilles, plats de riz) ainsi que des options de fusion créatives.</li>
  <li><strong>Ingrédients Frais :</strong> L'accent est mis sur les légumes, les herbes et les protéines végétales frais et locaux, garantissant des repas vibrants et sains.</li>
  <li><strong>Adapté aux Régimes :</strong> Un excellent choix pour les végétaliens, les végétariens et toute personne à la recherche de repas sains, légers et savoureux.</li>
</ul>

<h6>Atmosphère & Ambiance :</h6>
<ul>
  <li><strong>Calme et Serein :</strong> Bien qu'étant populaire, l'atmosphère reste souvent calme et paisible, permettant aux clients de se détendre et de savourer leurs repas.</li>
  <li><strong>Charme Authentique :</strong> Le décor est généralement simple mais charmant, reflétant l'esthétique traditionnelle vietnamienne avec une touche moderne et épurée.</li>
</ul>

<h6>Localisation :</h6>
<p>Le Sua Vegan Restaurant est généralement situé dans ou à proximité de la zone centrale de la Vieille Ville de Hoi An, ce qui le rend pratique pour les touristes explorant les sites historiques. Son adresse exacte pourrait se trouver dans une rue plus calme, offrant une évasion paisible des principales foules.</p>
<p><strong>Veuillez toujours vérifier l'adresse exacte localement ou sur des cartes en ligne récentes, car les entreprises peuvent parfois changer d'emplacement.</strong></p>

<h6>Conseils pour les Visiteurs :</h6>
<ul>
  <li><strong>Soyez Patient et Respectueux :</strong> Adoptez le style de communication unique. Un sourire et une note écrite claire sont souvent très utiles.</li>
  <li><strong>Soutenez la Mission :</strong> En dînant ici, vous soutenez directement une merveilleuse entreprise sociale.</li>
  <li><strong>Goûtez les Spécialités Locales :</strong> Explorez leurs versions végétaliennes des plats vietnamiens classiques.</li>
  <li><strong>Considérez le Déjeuner :</strong> C'est un excellent endroit pour un déjeuner sain et satisfaisant lors de votre exploration de Hoi An.</li>
</ul>
      `,
      internalImageNames: [],
    },
    ru: {
      title: 'Sua Vegan Restaurant',
      description:
        'Особый и душевный веганский ресторан в Хойане, известный своей вкусной растительной кухней и уникальной миссией по трудоустройству глухонемых сотрудников.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> в Хойане — это не просто место, где можно поесть; это поистине особенное заведение, известное своей вкусной веганской едой и невероятно вдохновляющей социальной миссией. Что отличает Sua, так это его приверженность трудоустройству и расширению прав и возможностей <strong>глухонемых людей</strong>, предлагая им значимые возможности и создавая уникальный, трогательный опыт обеда.</p>

<h6>Особенное место с искренней миссией:</h6>
<ul>
  <li><strong>Расширение прав и возможностей через трудоустройство:</strong> Sua Vegan Restaurant предоставляет бесценные возможности трудоустройства для глухонемых людей, давая им платформу для демонстрации своих навыков и внесения вклада в сообщество. Эта инициатива подчеркивает инклюзивность и создает благоприятную среду.</li>
  <li><strong>Уникальное общение:</strong> Не удивляйтесь немного иному, но очаровательному способу заказа. Персонал искусен в общении с помощью письменных заметок, жестов и теплого, гостеприимного отношения. Это возможность для гостей вступить в уникальное и уважительное взаимодействие.</li>
  <li><strong>Вдохновляющая атмосфера:</strong> Присутствие преданного своему делу и трудолюбивого персонала способствует невероятно позитивной и скромной атмосфере. Многие посетители находят свой опыт здесь глубоко трогательным и запоминающимся.</li>
</ul>

<h6>Веганские изыски:</h6>
<ul>
  <li><strong>Чистая растительная кухня:</strong> Как следует из названия, Sua полностью веганский, предлагая разнообразное меню из растительных блюд, которые являются одновременно полезными и невероятно ароматными.</li>
  <li><strong>Вьетнамская и фьюжн:</strong> Меню обычно включает в себя сочетание традиционных вьетнамских веганских блюд (например, свежие спринг-роллы, различные супы с лапшой, рисовые блюда) наряду с некоторыми креативными фьюжн-вариантами.</li>
  <li><strong>Свежие ингредиенты:</strong> Особое внимание уделяется свежим местным овощам, травам и растительным белкам, что обеспечивает яркие и полезные блюда.</li>
  <li><strong>Подходит для диетического питания:</strong> Отличный выбор для веганов, вегетарианцев и всех, кто ищет здоровые, легкие и ароматные блюда.</li>
</ul>

<h6>Атмосфера и обстановка:</h6>
<ul>
  <li><strong>Спокойный и безмятежный:</strong> Несмотря на популярность, атмосфера часто остается спокойной и мирной, позволяя гостям расслабиться и насладиться едой.</li>
  <li><strong>Подлинный шарм:</strong> Декор обычно простой, но очаровательный, отражающий традиционную вьетнамскую эстетику с современным, чистым оттенком.</li>
</ul>

<h6>Расположение:</h6>
<p>Sua Vegan Restaurant обычно расположен в центральной части Старого города Хойана или очень близко к нему, что делает его удобным для туристов, исследующих исторические места. Его точный адрес может быть найден на более тихой улице, предлагая спокойное убежище от основной толпы.</p>
<p><strong>Всегда уточняйте точный адрес на месте или на свежих онлайн-картах, так как предприятия иногда могут менять свое местоположение.</strong></p>

<h6>Советы для посетителей:</h6>
<ul>
  <li><strong>Будьте терпеливы и уважительны:</strong> Примите уникальный стиль общения. Улыбка и четкая письменная заметка часто очень помогают.</li>
  <li><strong>Поддержите миссию:</strong> Обедая здесь, вы напрямую поддерживаете замечательное социальное предприятие.</li>
  <li><strong>Попробуйте местные деликатесы:</strong> Изучите их веганские версии классических вьетнамских блюд.</li>
  <li><strong>Рассмотрите обед:</strong> Это отличное место для здорового и сытного обеда во время вашего знакомства с Хойаном.</li>
</ul>
      `,
      internalImageNames: [],
    },
    vn: {
      title: 'Sua Vegan Restaurant',
      description:
        'Một nhà hàng thuần chay đặc biệt và ấm áp ở Hội An, nổi tiếng với ẩm thực thực vật ngon miệng và sứ mệnh độc đáo là tuyển dụng nhân viên khiếm thính và khiếm ngôn.',
      fullDescription: `
<p><strong>Sua Vegan Restaurant</strong> ở Hội An không chỉ là một nơi để ăn uống; đây là một cơ sở thực sự đặc biệt, nổi tiếng với các món ăn chay thơm ngon và sứ mệnh xã hội đầy cảm hứng. Điều làm nên sự khác biệt của Sua là cam kết tuyển dụng và trao quyền cho <strong>những người khiếm thính và khiếm ngôn</strong>, mang đến cho họ những cơ hội có ý nghĩa và tạo ra trải nghiệm ăn uống độc đáo, ấm lòng.</p>

<h6>Một Địa điểm Đặc biệt với Sứ mệnh Từ tâm:</h6>
<ul>
  <li><strong>Trao quyền Thông qua Việc làm:</strong> Sua Vegan Restaurant cung cấp các cơ hội việc làm vô giá cho người khiếm thính và khiếm ngôn, tạo cho họ một nền tảng để thể hiện kỹ năng và đóng góp cho cộng đồng. Sáng kiến này đề cao sự hòa nhập và tạo ra một môi trường hỗ trợ.</li>
  <li><strong>Giao tiếp Độc đáo:</strong> Đừng ngạc nhiên bởi một cách gọi món hơi khác nhưng duyên dáng. Nhân viên thông thạo giao tiếp thông qua sự kết hợp của ghi chú viết tay, cử chỉ và thái độ nồng nhiệt, hiếu khách. Đây là cơ hội để khách hàng tham gia vào một tương tác độc đáo và tôn trọng.</li>
  <li><strong>Không gian Truyền cảm hứng:</strong> Sự hiện diện của đội ngũ nhân viên tận tâm và chăm chỉ góp phần tạo nên một không khí vô cùng tích cực và khiêm tốn. Nhiều du khách nhận thấy trải nghiệm của họ ở đây vô cùng cảm động và đáng nhớ.</li>
</ul>

<h6>Đồ ăn chay ngon miệng:</h6>
<ul>
  <li><strong>Ẩm thực Thuần thực vật:</strong> Đúng như tên gọi, Sua hoàn toàn thuần chay, cung cấp thực đơn đa dạng các món ăn từ thực vật, vừa tốt cho sức khỏe vừa vô cùng đậm đà hương vị.</li>
  <li><strong>Món Việt & Fusion:</strong> Thực đơn thường có sự pha trộn giữa các món ăn chay truyền thống Việt Nam (như nem tươi, các loại bún, cơm) cùng với một số lựa chọn fusion sáng tạo.</li>
  <li><strong>Nguyên liệu Tươi sống:</strong> Sự nhấn mạnh được đặt vào các loại rau, thảo mộc và protein thực vật tươi, địa phương, đảm bảo các bữa ăn sống động và bổ dưỡng.</li>
  <li><strong>Phù hợp với Chế độ ăn kiêng:</strong> Một lựa chọn tuyệt vời cho người ăn chay, người ăn chay trường và bất kỳ ai đang tìm kiếm những bữa ăn lành mạnh, nhẹ nhàng và đầy hương vị.</li>
</ul>

<h6>Bầu không khí & Không gian:</h6>
<ul>
  <li><strong>Bình yên và Thanh tịnh:</strong> Mặc dù nổi tiếng, không gian thường vẫn bình tĩnh và yên bình, cho phép khách thư giãn và thưởng thức bữa ăn của họ.</li>
  <li><strong>Nét duyên dáng Authenticity:</strong> Trang trí thường đơn giản nhưng quyến rũ, phản ánh nét thẩm mỹ truyền thống Việt Nam với một chút hiện đại, sạch sẽ.</li>
</ul>

<h6>Vị trí:</h6>
<p>Sua Vegan Restaurant thường nằm trong hoặc rất gần khu vực Phố cổ Hội An, giúp khách du lịch dễ dàng tiếp cận để khám phá các di tích lịch sử. Địa chỉ chính xác của nó có thể nằm trên một con phố yên tĩnh hơn, mang đến một lối thoát bình yên khỏi đám đông chính.</p>
<p><strong>Luôn xác minh địa chỉ chính xác tại địa phương hoặc trên các bản đồ trực tuyến gần đây, vì các doanh nghiệp đôi khi có thể thay đổi vị trí.</strong></p>

<h6>Mẹo dành cho Du khách:</h6>
<ul>
  <li><strong>Hãy Kiên nhẫn và Tôn trọng:</strong> Chấp nhận phong cách giao tiếp độc đáo. Một nụ cười và một ghi chú viết rõ ràng thường rất hữu ích.</li>
  <li><strong>Ủng hộ Sứ mệnh:</strong> Bằng cách dùng bữa tại đây, bạn đang trực tiếp ủng hộ một doanh nghiệp xã hội tuyệt vời.</li>
  <li><strong>Thử các Món Đặc sản Địa phương:</strong> Khám phá các phiên bản chay của các món ăn Việt Nam cổ điển của họ.</li>
  <li><strong>Cân nhắc dùng Bữa trưa:</strong> Đây là một địa điểm tuyệt vời cho một bữa trưa lành mạnh và no bụng trong chuyến khám phá Hội An của bạn.</li>
</ul>
      `,
      internalImageNames: [],
    },
    slug: {
      // <-- Добавлен объект slug для локализованных URL
      en: 'japanese-covered-bridge',
      ru: 'yaponskiy-krytyy-most', // <-- Замените на реальный slug para el ruso
      es: 'puente-cubierto-japones',
      fr: 'pont-couvert-japonais',
      vn: 'cau-chua-nhat-ban',
    },
  },
];
