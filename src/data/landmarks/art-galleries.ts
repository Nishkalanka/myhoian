import type { Landmark } from './landmarkTypes';

export const artGalleriesLandmarks: Landmark[] = [
  //Rainbow-Coffee-Restaurant-Hoi-An
  {
    id: 'Rainbow-Coffee-Restaurant-Hoi-An', // <-- ID теперь строковый
    coordinates: [15.906708185789533, 108.31573872344867], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks', 'art-galleries'], // <-- Категория "museum"
    imageUrl: '57.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Rainbow Coffee & Restaurant',
      description:
        'A charming and popular spot in Hoi An, offering a wide range of Vietnamese and Western dishes, refreshing drinks, and a cozy atmosphere.',
      fullDescription: `
<p><strong>Rainbow Coffee & Restaurant</strong> is a well-loved establishment in Hoi An, frequently praised by both locals and tourists for its diverse menu, warm hospitality, and relaxed ambiance. It's a versatile spot perfect for a quick coffee, a leisurely lunch, or a satisfying dinner.</p>

<h6>Atmosphere & Vibe:</h6>
<ul>
  <li><strong>Cozy and Welcoming:</strong> The restaurant often features a charming interior, possibly with traditional Vietnamese elements, wooden furniture, and warm lighting, creating a comfortable and inviting space.</li>
  <li><strong>Relaxed Ambiance:</strong> Ideal for unwinding, whether you're starting your day with coffee or enjoying an evening meal. It often offers a peaceful escape from the bustling streets of Hoi An.</li>
  <li><strong>Friendly Staff:</strong> Consistently highlighted in reviews, the staff are known for being attentive, friendly, and providing excellent service, often with a good grasp of English.</li>
</ul>

<h6>Food & Drinks:</h6>
<ul>
  <li><strong>Extensive Menu:</strong> Rainbow offers a broad selection that typically spans both authentic Vietnamese cuisine (like Pho, Cao Lau, White Rose dumplings) and popular Western dishes (burgers, pasta, sandwiches). This makes it a great choice for groups with varied preferences.</li>
  <li><strong>Quality Coffee:</strong> As the name suggests, coffee is a specialty, including traditional Vietnamese coffee (iced or hot) and various espresso-based drinks.</li>
  <li><strong>Refreshing Beverages:</strong> Besides coffee, the menu usually includes fresh fruit juices, smoothies, local beers, and soft drinks.</li>
  <li><strong>Good Value:</strong> Many visitors find the prices to be very reasonable for the quality and portion sizes offered.</li>
</ul>

<h6>Highlights for Visitors:</h6>
<ul>
  <li><strong>Local & International Choices:</strong> The ability to choose between local delicacies and familiar Western comfort food is a big draw.</li>
  <li><strong>Great for All Meals:</strong> Suitable for breakfast, lunch, or dinner, offering a consistent and pleasant dining experience throughout the day.</li>
  <li><strong>Relaxing Stop:</strong> A perfect place to take a break from exploring the Ancient Town, recharge, and enjoy a good meal or drink.</li>
</ul>

<h6>Location:</h6>
<p>Rainbow Coffee & Restaurant is typically located within or very close to the Hoi An Ancient Town area, making it easily accessible for tourists exploring the historical sites. Its exact address is often found on one of the charming side streets or main arteries of the old town.</p>
<p><strong>Please verify the exact address locally or on recent online maps as specific locations in popular tourist areas can sometimes change.</strong></p>

<h6>Visitor Tips:</h6>
<ul>
  <li><strong>Try a Vietnamese Dish:</strong> Even if you prefer Western food, give a local specialty a try; they are often prepared authentically and deliciously.</li>
  <li><strong>Enjoy the Coffee:</strong> Don't miss out on their coffee, especially the traditional Vietnamese iced coffee.</li>
  <li><strong>Relax and Observe:</strong> Find a comfortable spot and enjoy the local atmosphere.</li>
</ul>
      `,
      internalImageNames: [], // Добавьте имена файлов изображений, если они будут
    },
    es: {
      title: 'Rainbow Coffee & Restaurant',
      description:
        'Un lugar encantador y popular en Hoi An, que ofrece una amplia variedad de platos vietnamitas y occidentales, bebidas refrescantes y un ambiente acogedor.',
      fullDescription: `
<p><strong>Rainbow Coffee & Restaurant</strong> es un establecimiento muy querido en Hoi An, frecuentemente elogiado por lugareños y turistas por su menú diverso, cálida hospitalidad y ambiente relajado. Es un lugar versátil perfecto para un café rápido, un almuerzo tranquilo o una cena satisfactoria.</p>

<h6>Ambiente y Vibe:</h6>
<ul>
  <li><strong>Acogedor y Confortable:</strong> El restaurante a menudo presenta un interior encantador, posiblemente con elementos tradicionales vietnamitas, muebles de madera e iluminación cálida, creando un espacio cómodo y acogedor.</li>
  <li><strong>Ambiente Relajado:</strong> Ideal para relajarse, ya sea que estés comenzando tu día con café o disfrutando de una comida por la noche. A menudo ofrece un escape tranquilo del bullicio de las calles de Hoi An.</li>
  <li><strong>Personal Amable:</strong> Destacado constantemente en las reseñas, el personal es conocido por ser atento, amable y brindar un excelente servicio, a menudo con un buen dominio del inglés.</li>
</ul>

<h6>Comida y Bebidas:</h6>
<ul>
  <li><strong>Menú Extenso:</strong> Rainbow ofrece una amplia selección que normalmente abarca tanto la auténtica cocina vietnamita (como Pho, Cao Lau, White Rose dumplings) como platos occidentales populares (hamburguesas, pasta, sándwiches). Esto lo convierte en una excelente opción para grupos con preferencias variadas.</li>
  <li><strong>Café de Calidad:</strong> Como sugiere el nombre, el café es una especialidad, incluyendo el café vietnamita tradicional (helado o caliente) y varias bebidas a base de espresso.</li>
  <li><strong>Bebidas Refrescantes:</strong> Además del café, el menú suele incluir zumos de frutas frescas, batidos, cervezas locales y refrescos.</li>
  <li><strong>Buena Relación Calidad-Precio:</strong> Muchos visitantes encuentran que los precios son muy razonables para la calidad y el tamaño de las porciones ofrecidas.</li>
</ul>

<h6>Aspectos Destacados para los Visitantes:</h6>
<ul>
  <li><strong>Opciones Locales e Internacionales:</strong> La capacidad de elegir entre delicias locales y comida reconfortante occidental familiar es un gran atractivo.</li>
  <li><strong>Ideal para Todas las Comidas:</strong> Adecuado para el desayuno, el almuerzo o la cena, ofreciendo una experiencia gastronómica consistente y agradable durante todo el día.</li>
  <li><strong>Parada Relajante:</strong> Un lugar perfecto para tomar un descanso de la exploración de la Ciudad Antigua, recargar energías y disfrutar de una buena comida o bebida.</li>
</ul>

<h6>Ubicación:</h6>
<p>Rainbow Coffee & Restaurant suele estar ubicado dentro o muy cerca del área de la Ciudad Antigua de Hoi An, lo que lo hace fácilmente accesible para los turistas que exploran los sitios históricos. Su dirección exacta a menudo se encuentra en una de las encantadoras calles laterales o arterias principales del casco antiguo.</p>
<p><strong>Por favor, verifique la dirección exacta a nivel local o en mapas en línea recientes, ya que las ubicaciones específicas en áreas turísticas populares a veces pueden cambiar.</strong></p>

<h6>Consejos para Visitantes:</h6>
<ul>
  <li><strong>Pruebe un Plato Vietnamita:</strong> Incluso si prefiere la comida occidental, pruebe una especialidad local; a menudo se preparan de forma auténtica y deliciosa.</li>
  <li><strong>Disfrute del Café:</strong> No se pierda su café, especialmente el café helado vietnamita tradicional.</li>
  <li><strong>Relájese y Observe:</strong> Encuentre un lugar cómodo y disfrute del ambiente local.</li>
</ul>
      `,
      internalImageNames: [],
    },
    fr: {
      title: 'Rainbow Coffee & Restaurant',
      description:
        'Un endroit charmant et populaire à Hoi An, offrant un large éventail de plats vietnamiens et occidentaux, des boissons rafraîchissantes et une atmosphère chaleureuse.',
      fullDescription: `
<p>Le <strong>Rainbow Coffee & Restaurant</strong> est un établissement très apprécié à Hoi An, fréquemment loué par les habitants et les touristes pour son menu varié, son hospitalité chaleureuse et son ambiance détendue. C'est un endroit polyvalent parfait pour un café rapide, un déjeuner tranquille ou un dîner copieux.</p>

<h6>Ambiance & Vibe :</h6>
<ul>
  <li><strong>Confortable et Accueillant :</strong> Le restaurant présente souvent un intérieur charmant, éventuellement avec des éléments traditionnels vietnamiens, des meubles en bois et un éclairage chaleureux, créant un espace confortable et invitant.</li>
  <li><strong>Ambiance Détendu :</strong> Idéal pour se détendre, que vous commenciez votre journée avec un café ou que vous profitiez d'un repas le soir. Il offre souvent une évasion paisible de l'agitation des rues de Hoi An.</li>
  <li><strong>Personnel Amical :</strong> Constamment souligné dans les critiques, le personnel est réputé pour être attentif, amical et offrir un excellent service, souvent avec une bonne maîtrise de l'anglais.</li>
</ul>

<h6>Cuisine & Boissons :</h6>
<ul>
  <li><strong>Menu Étendu :</strong> Rainbow propose une large sélection qui couvre généralement à la fois la cuisine vietnamienne authentique (comme le Pho, le Cao Lau, les raviolis White Rose) et les plats occidentaux populaires (hamburgers, pâtes, sandwichs). Cela en fait un excellent choix pour les groupes ayant des préférences variées.</li>
  <li><strong>Café de Qualité :</strong> Comme son nom l'indique, le café est une spécialité, y compris le café vietnamien traditionnel (glacé ou chaud) et diverses boissons à base d'espresso.</li>
  <li><strong>Boissons Rafraîchissantes :</strong> Outre le café, le menu comprend généralement des jus de fruits frais, des smoothies, des bières locales et des boissons gazeuses.</li>
  <li><strong>Bon Rapport Qualité-Prix :</strong> De nombreux visiteurs trouvent que les prix sont très raisonnables pour la qualité et la taille des portions offertes.</li>
</ul>

<h6>Points Forts pour les Visiteurs :</h6>
<ul>
  <li><strong>Choix Locaux et Internationaux :</strong> La possibilité de choisir entre les délices locaux et la cuisine réconfortante occidentale familière est un grand attrait.</li>
  <li><strong>Idéal pour Tous les Repas :</strong> Convient pour le petit-déjeuner, le déjeuner ou le dîner, offrant une expérience culinaire constante et agréable tout au long de la journée.</li>
  <li><strong>Arrêt Relaxant :</strong> Un endroit parfait pour faire une pause dans l'exploration de la Vieille Ville, se ressourcer et profiter d'un bon repas ou d'une boisson.</li>
</ul>

<h6>Localisation :</h6>
<p>Le Rainbow Coffee & Restaurant est généralement situé dans ou très près de la zone de la Vieille Ville de Hoi An, ce qui le rend facilement accessible aux touristes explorant les sites historiques. Son adresse exacte se trouve souvent dans l'une des charmantes rues secondaires ou des artères principales de la vieille ville.</p>
<p><strong>Veuillez vérifier l'adresse exacte localement ou sur des cartes en ligne récentes, car les emplacements spécifiques dans les zones touristiques populaires peuvent parfois changer.</strong></p>

<h6>Conseils pour les Visiteurs :</h6>
<ul>
  <li><strong>Essayez un Plat Vietnamien :</strong> Même si vous préférez la cuisine occidentale, essayez une spécialité locale ; elles sont souvent préparées de manière authentique et délicieuse.</li>
  <li><strong>Profitez du Café :</strong> Ne manquez pas leur café, en particulier le café glacé vietnamien traditionnel.</li>
  <li><strong>Détendez-vous et Observez :</strong> Trouvez un endroit confortable et profitez de l'atmosphère locale.</li>
</ul>
      `,
      internalImageNames: [],
    },
    ru: {
      title: 'Rainbow Coffee & Restaurant',
      description:
        'Очаровательное и популярное место в Хойане, предлагающее широкий выбор вьетнамских и западных блюд, освежающие напитки и уютную атмосферу.',
      fullDescription: `
<p><strong>Rainbow Coffee & Restaurant</strong> — это любимое заведение в Хойане, которое часто хвалят как местные жители, так и туристы за разнообразное меню, теплое гостеприимство и расслабленную атмосферу. Это универсальное место, идеально подходящее для быстрого кофе, неторопливого обеда или сытного ужина.</p>

<h6>Атмосфера и обстановка:</h6>
<ul>
  <li><strong>Уютный и гостеприимный:</strong> Ресторан часто имеет очаровательный интерьер, возможно, с традиционными вьетнамскими элементами, деревянной мебелью и теплым освещением, создавая комфортное и располагающее пространство.</li>
  <li><strong>Расслабляющая атмосфера:</strong> Идеально подходит для отдыха, будь то начало дня с кофе или вечерняя трапеза. Часто предлагает спокойное убежище от шумных улиц Хойана.</li>
  <li><strong>Дружелюбный персонал:</strong> Постоянно отмечаемый в отзывах персонал известен своей внимательностью, дружелюбием и отличным обслуживанием, часто с хорошим знанием английского языка.</li>
</ul>

<h6>Еда и напитки:</h6>
<ul>
  <li><strong>Обширное меню:</strong> Rainbow предлагает широкий выбор, который обычно включает как аутентичную вьетнамскую кухню (например, Фо, Као Лау, пельмени Белая Роза), так и популярные западные блюда (бургеры, паста, сэндвичи). Это делает его отличным выбором для групп с различными предпочтениями.</li>
  <li><strong>Качественный кофе:</strong> Как следует из названия, кофе является фирменным напитком, включая традиционный вьетнамский кофе (со льдом или горячий) и различные напитки на основе эспрессо.</li>
  <li><strong>Освежающие напитки:</strong> Помимо кофе, в меню обычно есть свежевыжатые фруктовые соки, смузи, местное пиво и безалкогольные напитки.</li>
  <li><strong>Хорошая цена:</strong> Многие посетители считают цены очень разумными для предлагаемого качества и размера порций.</li>
</ul>

<h6>Особенности для посетителей:</h6>
<ul>
  <li><strong>Местные и международные блюда:</strong> Возможность выбора между местными деликатесами и привычной западной едой является большим преимуществом.</li>
  <li><strong>Отлично подходит для всех приемов пищи:</strong> Подходит для завтрака, обеда или ужина, предлагая неизменно приятные впечатления от еды в течение всего дня.</li>
  <li><strong>Расслабляющая остановка:</strong> Идеальное место, чтобы отдохнуть от изучения Старого города, подзарядиться и насладиться вкусной едой или напитком.</li>
</ul>

<h6>Расположение:</h6>
<p>Rainbow Coffee & Restaurant обычно расположен в районе Старого города Хойана или очень близко к нему, что делает его легко доступным для туристов, исследующих исторические места. Его точный адрес часто находится на одной из очаровательных боковых улочек или главных артерий старого города.</p>
<p><strong>Пожалуйста, уточните точный адрес на месте или на свежих онлайн-картах, так как конкретные места в популярных туристических районах иногда могут меняться.</strong></p>

<h6>Советы для посетителей:</h6>
<ul>
  <li><strong>Попробуйте вьетнамское блюдо:</strong> Даже если вы предпочитаете западную еду, попробуйте местное фирменное блюдо; они часто готовятся аутентично и вкусно.</li>
  <li><strong>Насладитесь кофе:</strong> Не пропустите их кофе, особенно традиционный вьетнамский кофе со льдом.</li>
  <li><strong>Расслабьтесь и наблюдайте:</strong> Найдите удобное место и насладитесь местной атмосферой.</li>
</ul>
      `,
      internalImageNames: [],
    },
    vn: {
      title: 'Rainbow Coffee & Restaurant',
      description:
        'Một địa điểm quyến rũ và nổi tiếng ở Hội An, cung cấp nhiều món ăn Việt Nam và phương Tây, đồ uống giải khát và không gian ấm cúng.',
      fullDescription: `
<p><strong>Rainbow Coffee & Restaurant</strong> là một cơ sở được yêu thích ở Hội An, thường xuyên được cả người dân địa phương và khách du lịch khen ngợi vì thực đơn đa dạng, sự hiếu khách nồng hậu và không gian thư giãn. Đây là một địa điểm đa năng hoàn hảo cho một ly cà phê nhanh, một bữa trưa nhàn nhã hoặc một bữa tối thịnh soạn.</p>

<h6>Bầu không khí & Cảm nhận:</h6>
<ul>
  <li><strong>Ấm cúng và Đón tiếp:</strong> Nhà hàng thường có nội thất quyến rũ, có thể với các yếu tố truyền thống Việt Nam, đồ nội thất bằng gỗ và ánh sáng ấm áp, tạo nên một không gian thoải mái và mời gọi.</li>
  <li><strong>Không gian Thư giãn:</strong> Lý tưởng để thư giãn, cho dù bạn đang bắt đầu ngày mới với cà phê hay thưởng thức bữa ăn tối. Nơi đây thường mang đến một lối thoát yên bình khỏi những con phố nhộn nhịp của Hội An.</li>
  <li><strong>Nhân viên Thân thiện:</strong> Liên tục được nhấn mạnh trong các đánh giá, nhân viên được biết đến là chu đáo, thân thiện và cung cấp dịch vụ tuyệt vời, thường thành thạo tiếng Anh.</li>
</ul>

<h6>Đồ ăn & Thức uống:</h6>
<ul>
  <li><strong>Thực đơn Phong phú:</strong> Rainbow cung cấp nhiều lựa chọn đa dạng, thường bao gồm cả ẩm thực Việt Nam truyền thống (như Phở, Cao Lầu, bánh bao Bông Hồng Trắng) và các món ăn phương Tây phổ biến (burger, mì ống, sandwich). Điều này làm cho nơi đây trở thành một lựa chọn tuyệt vời cho các nhóm có sở thích khác nhau.</li>
  <li><strong>Cà phê Chất lượng:</strong> Đúng như tên gọi, cà phê là một đặc sản, bao gồm cà phê truyền thống Việt Nam (đá hoặc nóng) và nhiều loại đồ uống pha chế từ espresso khác nhau.</li>
  <li><strong>Thức uống Giải khát:</strong> Ngoài cà phê, thực đơn thường bao gồm nước ép trái cây tươi, sinh tố, bia địa phương và nước ngọt.</li>
  <li><strong>Giá cả Hợp lý:</strong> Nhiều du khách nhận thấy giá cả rất hợp lý so với chất lượng và kích thước khẩu phần được cung cấp.</li>
</ul>

<h6>Điểm nổi bật cho Du khách:</h6>
<ul>
  <li><strong>Lựa chọn Địa phương & Quốc tế:</strong> Khả năng lựa chọn giữa các món ngon địa phương và các món ăn phương Tây quen thuộc là một điểm thu hút lớn.</li>
  <li><strong>Tuyệt vời cho mọi bữa ăn:</strong> Phù hợp cho bữa sáng, bữa trưa hoặc bữa tối, mang đến trải nghiệm ăn uống nhất quán và dễ chịu suốt cả ngày.</li>
  <li><strong>Điểm dừng chân Thư giãn:</strong> Một nơi hoàn hảo để nghỉ ngơi sau khi khám phá Phố cổ, nạp lại năng lượng và thưởng thức một bữa ăn ngon hoặc đồ uống.</li>
</ul>

<h6>Vị trí:</h6>
<p>Rainbow Coffee & Restaurant thường nằm trong hoặc rất gần khu vực Phố cổ Hội An, giúp du khách dễ dàng tiếp cận để khám phá các di tích lịch sử. Địa chỉ chính xác của nó thường nằm trên một trong những con phố nhỏ quyến rũ hoặc các tuyến đường chính của phố cổ.</p>
<p><strong>Vui lòng xác minh địa chỉ chính xác tại địa phương hoặc trên bản đồ trực tuyến gần đây vì các địa điểm cụ thể ở các khu du lịch nổi tiếng đôi khi có thể thay đổi.</strong></p>

<h6>Mẹo dành cho Du khách:</h6>
<ul>
  <li><strong>Thử một món ăn Việt Nam:</strong> Ngay cả khi bạn thích đồ ăn phương Tây, hãy thử một đặc sản địa phương; chúng thường được chế biến một cách chân thực và ngon miệng.</li>
  <li><strong>Thưởng thức cà phê:</strong> Đừng bỏ lỡ cà phê của họ, đặc biệt là cà phê đá truyền thống của Việt Nam.</li>
  <li><strong>Thư giãn và Quan sát:</strong> Tìm một chỗ ngồi thoải mái và tận hưởng không khí địa phương.</li>
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
];
