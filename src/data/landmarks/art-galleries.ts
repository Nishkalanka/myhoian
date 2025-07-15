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
  //Not-From-Here
  {
    id: 'Not-From-Here', // <-- ID теперь строковый
    coordinates: [15.886900514248364, 108.36724746339776], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['art-galleries'], // <-- Категория "museum"
    imageUrl: '59.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Not From Here Art Gallery',
      description:
        'A contemporary art gallery in Hoi An showcasing diverse and often internationally-influenced works, offering a unique cultural experience beyond traditional Vietnamese art.',
      fullDescription: `
<p><strong>Not From Here Art Gallery</strong> is a prominent contemporary art space located in the historic town of Hoi An, Vietnam. As its name suggests, the gallery often features artworks that transcend typical Vietnamese styles or themes, or showcases pieces by artists who are not native to Hoi An or Vietnam, offering a refreshing perspective on the local art scene.</p>

<h6>Focus & Style:</h6>
<ul>
  <li><strong>Contemporary Art:</strong> The gallery primarily focuses on modern and contemporary art, which may include conceptual works, abstract pieces, mixed media, and experimental forms of expression.</li>
  <li><strong>Diverse Influences:</strong> "Not From Here" implies an international or broadly influenced collection, potentially featuring artists from various backgrounds or those whose work is inspired by global cultures and ideas. This sets it apart from galleries focusing solely on traditional Vietnamese art.</li>
  <li><strong>Platform for New Ideas:</strong> Such galleries often serve as vital platforms for emerging talents and established artists looking to present their unique visions to a wider audience in Hoi An.</li>
</ul>

<h6>Atmosphere:</h6>
<ul>
  <li><strong>Calm and Reflective:</strong> Like most art galleries, "Not From Here" provides a serene environment designed for visitors to immerse themselves in the artworks without distraction.</li>
  <li><strong>Modern Design:</strong> The interior is likely designed with a contemporary aesthetic, featuring clean lines and ample lighting to highlight the diverse exhibits effectively.</li>
</ul>

<h6>For Visitors:</h6>
<ul>
  <li><strong>Art Acquisition:</strong> Opportunities to purchase original artworks, making it an ideal spot for collectors or those looking for unique souvenirs.</li>
  <li><strong>Enriched Cultural Experience:</strong> A visit offers a deeper dive into Hoi An's evolving art scene, providing a contrast to the ancient town's historical charm. It's a chance to see how modern artistic expressions coexist within a rich heritage.</li>
  <li><strong>Community Hub:</strong> The gallery may also act as a meeting point for artists, art enthusiasts, and cultural exchange.</li>
</ul>

<h6>Location:</h6>
<p>Located in the UNESCO World Heritage town of Hoi An, the gallery benefits from a constant flow of tourists and art lovers. Its exact address is best confirmed via online maps or their official website to ensure the most accurate location within this vibrant historical setting.</p>

<h6>Online Presence:</h6>
<p>The use of a dedicated domain (<code>https://notfromhere.art/</code>) highlights a professional approach and a strong online presence, allowing visitors to preview exhibitions, learn about artists, and plan their visit in advance.</p>
`,
      internalImageNames: [],
    },
    es: {
      title: 'Galería de Arte Not From Here',
      description:
        'Una galería de arte contemporáneo en Hoi An que exhibe obras diversas y a menudo con influencias internacionales, ofreciendo una experiencia cultural única más allá del arte tradicional vietnamita.',
      fullDescription: `
<p><strong>Not From Here Art Gallery</strong> es un destacado espacio de arte contemporáneo ubicado en la histórica ciudad de Hoi An, Vietnam. Como su nombre lo indica, la galería a menudo presenta obras de arte que trascienden los estilos o temas vietnamitas típicos, o exhibe piezas de artistas que no son nativos de Hoi An o Vietnam, ofreciendo una perspectiva refrescante sobre la escena artística local.</p>

<h6>Enfoque y Estilo:</h6>
<ul>
  <li><strong>Arte Contemporáneo:</strong> La galería se enfoca principalmente en el arte moderno y contemporáneo, que puede incluir obras conceptuales, piezas abstractas, técnicas mixtas y formas de expresión experimental.</li>
  <li><strong>Influencias Diversas:</strong> "Not From Here" implica una colección internacional o de amplia influencia, que potencialmente presenta artistas de diversos orígenes o aquellos cuyo trabajo está inspirado en culturas e ideas globales. Esto la distingue de las galerías que se centran únicamente en el arte tradicional vietnamita.</li>
  <li><strong>Plataforma para Nuevas Ideas:</strong> Estas galerías a menudo sirven como plataformas vitales para talentos emergentes y artistas establecidos que buscan presentar sus visiones únicas a una audiencia más amplia en Hoi An.</li>
</ul>

<h6>Ambiente:</h6>
<ul>
  <li><strong>Tranquilo y Reflexivo:</strong> Como la mayoría de las galerías de arte, "Not From Here" ofrece un ambiente sereno diseñado para que los visitantes se sumerjan en las obras de arte sin distracciones.</li>
  <li><strong>Diseño Moderno:</strong> El interior probablemente está diseñado con una estética contemporánea, con líneas limpias y amplia iluminación para resaltar eficazmente las diversas exposiciones.</li>
</ul>

<h6>Para Visitantes:</h6>
<ul>
  <li><strong>Adquisición de Arte:</strong> Oportunidades para adquirir obras de arte originales, lo que la convierte en un lugar ideal para coleccionistas o aquellos que buscan recuerdos únicos.</li>
  <li><strong>Experiencia Cultural Enriquecida:</strong> Una visita ofrece una inmersión más profunda en la escena artística en evolución de Hoi An, proporcionando un contraste con el encanto histórico de la ciudad antigua. Es una oportunidad para ver cómo las expresiones artísticas modernas coexisten dentro de un rico patrimonio.</li>
  <li><strong>Centro Comunitario:</strong> La galería también puede actuar como punto de encuentro para artistas, entusiastas del arte e intercambio cultural.</li>
</ul>

<h6>Ubicación:</h6>
<p>Ubicada en la ciudad de Hoi An, Patrimonio de la Humanidad por la UNESCO, la galería se beneficia de un flujo constante de turistas y amantes del arte. Es mejor confirmar su dirección exacta a través de mapas en línea o su sitio web oficial para garantizar la ubicación más precisa dentro de este vibrante entorno histórico.</p>

<h6>Presencia en Línea:</h6>
<p>El uso de un dominio dedicado (<code>https://notfromhere.art/</code>) resalta un enfoque profesional y una fuerte presencia en línea, lo que permite a los visitantes previsualizar exposiciones, aprender sobre artistas y planificar su visita con anticipación.</p>
`,
      internalImageNames: [],
    },
    fr: {
      title: "Galerie d'Art Not From Here",
      description:
        "Une galerie d'art contemporain à Hoi An présentant des œuvres diverses et souvent d'inspiration internationale, offrant une expérience culturelle unique au-delà de l'art traditionnel vietnamien.",
      fullDescription: `
<p>La <strong>Galerie d'Art Not From Here</strong> est un espace d'art contemporain de premier plan situé dans la ville historique de Hoi An, Vietnam. Comme son nom l'indique, la galerie présente souvent des œuvres d'art qui transcendent les styles ou thèmes vietnamiens typiques, ou expose des pièces d'artistes qui ne sont pas originaires de Hoi An ou du Vietnam, offrant une perspective rafraîchissante sur la scène artistique locale.</p>

<h6>Orientation et Style :</h6>
<ul>
  <li><strong>Art Contemporain :</strong> La galerie se concentre principalement sur l'art moderne et contemporain, qui peut inclure des œuvres conceptuelles, des pièces abstraites, des techniques mixtes et des formes d'expression expérimentales.</li>
  <li><strong>Influences Diverses :</strong> "Not From Here" implique une collection internationale ou largement influencée, présentant potentiellement des artistes d'horizons divers ou dont le travail est inspiré par des cultures et des idées mondiales. Cela la distingue des galeries se concentrant uniquement sur l'art traditionnel vietnamien.</li>
  <li><strong>Plateforme pour de Nouvelles Idées :</strong> Ces galeries servent souvent de plateformes vitales pour les talents émergents et les artistes établis cherchant à présenter leurs visions uniques à un public plus large à Hoi An.</li>
</ul>

<h6>Atmosphère :</h6>
<ul>
  <li><strong>Calme et Réfléchie :</strong> Comme la plupart des galeries d'art, "Not From Here" offre un environnement serein conçu pour que les visiteurs puissent s'immerger dans les œuvres d'art sans distraction.</li>
  <li><strong>Design Moderne :</strong> L'intérieur est probablement conçu avec une esthétique contemporaine, avec des lignes épurées et un éclairage abondant pour mettre en valeur efficacement les diverses expositions.</li>
</ul>

<h6>Pour les Visiteurs :</h6>
<ul>
  <li><strong>Acquisition d'Art :</strong> Opportunités d'acquérir des œuvres d'art originales, ce qui en fait un endroit idéal pour les collectionneurs ou ceux qui recherchent des souvenirs uniques.</li>
  <li><strong>Expérience Culturelle Enrichie :</strong> Une visite offre une plongée plus profonde dans la scène artistique en évolution de Hoi An, offrant un contraste avec le charme historique de la vieille ville. C'est l'occasion de voir comment les expressions artistiques modernes coexistent au sein d'un riche patrimoine.</li>
  <li><strong>Centre Communautaire :</strong> La galerie peut également servir de point de rencontre pour les artistes, les amateurs d'art et les échanges culturels.</li>
</ul>

<h6>Localisation :</h6>
<p>Située dans la ville de Hoi An, site du patrimoine mondial de l'UNESCO, la galerie bénéficie d'un flux constant de touristes et d'amateurs d'art. Son adresse exacte est préférable de la confirmer via des cartes en ligne ou leur site web officiel pour garantir l'emplacement le plus précis dans ce cadre historique dynamique.</p>

<h6>Présence en Ligne :</h6>
<p>L'utilisation d'un nom de domaine dédié (<code>https://notfromhere.art/</code>) met en évidence une approche professionnelle et une forte présence en ligne, permettant aux visiteurs de prévisualiser les expositions, de se renseigner sur les artistes et de planifier leur visite à l'avance.</p>
`,
      internalImageNames: [],
    },
    ru: {
      title: 'Художественная галерея «Не Отсюда»',
      description:
        'Современная художественная галерея в Хойане, демонстрирующая разнообразные, часто международные работы, предлагающая уникальный культурный опыт, выходящий за рамки традиционного вьетнамского искусства.',
      fullDescription: `
<p><strong>Художественная галерея «Не Отсюда» (Not From Here Art Gallery)</strong> — это выдающееся пространство современного искусства, расположенное в историческом городе Хойан, Вьетнам. Как следует из названия, галерея часто представляет произведения искусства, которые выходят за рамки типичных вьетнамских стилей или тем, или демонстрирует работы художников, не являющихся уроженцами Хойана или Вьетнама, предлагая свежий взгляд на местную художественную сцену.</p>

<h6>Направленность и стиль:</h6>
<ul>
  <li><strong>Современное искусство:</strong> Галерея в основном фокусируется на современном искусстве, которое может включать концептуальные работы, абстрактные произведения, смешанные медиа и экспериментальные формы выражения.</li>
  <li><strong>Разнообразные влияния:</strong> Название «Не Отсюда» подразумевает международную или широко влиятельную коллекцию, потенциально представляющую художников из разных стран или тех, чьи работы вдохновлены мировыми культурами и идеями. Это отличает ее от галерей, ориентированных исключительно на традиционное вьетнамское искусство.</li>
  <li><strong>Платформа для новых идей:</strong> Такие галереи часто служат важными платформами для начинающих талантов и уже состоявшихся художников, стремящихся представить свое уникальное видение широкой публике в Хойане.</li>
</ul>

<h6>Атмосфера:</h6>
<ul>
  <li><strong>Спокойная и вдумчивая:</strong> Как и большинство художественных галерей, «Не Отсюда» обеспечивает безмятежную обстановку, предназначенную для того, чтобы посетители могли погрузиться в произведения искусства без отвлечения.</li>
  <li><strong>Современный дизайн:</strong> Интерьер, вероятно, выполнен в современном стиле, с чистыми линиями и обильным освещением, чтобы эффективно подчеркнуть разнообразные экспонаты.</li>
</ul>

<h6>Для посетителей:</h6>
<ul>
  <li><strong>Приобретение искусства:</strong> Возможность приобрести оригинальные произведения искусства, что делает ее идеальным местом для коллекционеров или тех, кто ищет уникальные сувениры.</li>
  <li><strong>Обогащенный культурный опыт:</strong> Посещение предлагает более глубокое погружение в развивающуюся художественную сцену Хойана, предоставляя контраст с историческим очарованием древнего города. Это шанс увидеть, как современные художественные выражения сосуществуют в рамках богатого наследия.</li>
  <li><strong>Центр сообщества:</strong> Галерея также может выступать в качестве места встречи художников, любителей искусства и культурного обмена.</li>
</ul>

<h6>Расположение:</h6>
<p>Расположенная в городе Хойан, внесенном в список Всемирного наследия ЮНЕСКО, галерея пользуется постоянным потоком туристов и любителей искусства. Ее точный адрес лучше всего уточнить на онлайн-картах или на их официальном сайте, чтобы убедиться в наиболее точном местоположении в этой оживленной исторической обстановке.</p>

<h6>Присутствие в сети:</h6>
<p>Использование выделенного домена (<code>https://notfromhere.art/</code>) подчеркивает профессиональный подход и сильное онлайн-присутствие, позволяя посетителям предварительно просматривать выставки, узнавать о художниках и планировать свой визит заранее.</p>
`,
      internalImageNames: [],
    },
    vn: {
      title: 'Phòng Trưng Bày Nghệ Thuật Not From Here',
      description:
        'Một phòng trưng bày nghệ thuật đương đại ở Hội An giới thiệu các tác phẩm đa dạng và thường có ảnh hưởng quốc tế, mang đến trải nghiệm văn hóa độc đáo vượt ra ngoài nghệ thuật truyền thống Việt Nam.',
      fullDescription: `
<p><strong>Phòng Trưng Bày Nghệ Thuật Not From Here</strong> là một không gian nghệ thuật đương đại nổi bật nằm trong phố cổ lịch sử Hội An, Việt Nam. Như tên gọi, phòng trưng bày thường giới thiệu các tác phẩm nghệ thuật vượt ra ngoài phong cách hoặc chủ đề Việt Nam điển hình, hoặc trưng bày các tác phẩm của các nghệ sĩ không phải là người gốc Hội An hoặc Việt Nam, mang đến một góc nhìn mới mẻ về nền nghệ thuật địa phương.</p>

<h6>Trọng tâm & Phong cách:</h6>
<ul>
  <li><strong>Nghệ thuật Đương đại:</strong> Phòng trưng bày chủ yếu tập trung vào nghệ thuật hiện đại và đương đại, có thể bao gồm các tác phẩm ý niệm, trừu tượng, đa phương tiện và các hình thức biểu đạt thử nghiệm.</li>
  <li><strong>Ảnh hưởng Đa dạng:</strong> "Not From Here" ngụ ý một bộ sưu tập có ảnh hưởng quốc tế hoặc rộng rãi, có khả năng giới thiệu các nghệ sĩ từ nhiều nguồn gốc khác nhau hoặc những người có tác phẩm được truyền cảm hứng từ các nền văn hóa và ý tưởng toàn cầu. Điều này làm cho nó khác biệt so với các phòng trưng bày chỉ tập trung vào nghệ thuật truyền thống Việt Nam.</li>
  <li><strong>Nền tảng cho Ý tưởng Mới:</strong> Các phòng trưng bày như vậy thường đóng vai trò là nền tảng quan trọng cho các tài năng mới nổi và các nghệ sĩ đã thành danh muốn trình bày những tầm nhìn độc đáo của họ đến một đối tượng rộng hơn ở Hội An.</li>
</ul>

<h6>Bầu không khí:</h6>
<ul>
  <li><strong>Yên tĩnh và Sâu lắng:</strong> Giống như hầu hết các phòng trưng bày nghệ thuật, "Not From Here" cung cấp một môi trường thanh bình được thiết kế để du khách đắm mình vào các tác phẩm nghệ thuật mà không bị phân tâm.</li>
  <li><strong>Thiết kế Hiện đại:</strong> Nội thất có khả năng được thiết kế theo phong cách đương đại, với các đường nét gọn gàng và ánh sáng dồi dào để làm nổi bật hiệu quả các cuộc triển lãm đa dạng.</li>
</ul>

<h6>Dành cho Du khách:</h6>
<ul>
  <li><strong>Mua sắm Nghệ thuật:</strong> Cơ hội mua các tác phẩm nghệ thuật gốc, biến nơi đây thành một địa điểm lý tưởng cho các nhà sưu tập hoặc những người tìm kiếm những món quà lưu niệm độc đáo.</li>
  <li><strong>Trải nghiệm Văn hóa Phong phú:</strong> Một chuyến thăm mang đến cái nhìn sâu sắc hơn về nền nghệ thuật đang phát triển của Hội An, tạo ra sự tương phản với vẻ quyến rũ lịch sử của phố cổ. Đây là cơ hội để xem các biểu hiện nghệ thuật hiện đại cùng tồn tại trong một di sản phong phú.</li>
  <li><strong>Trung tâm Cộng đồng:</strong> Phòng trưng bày cũng có thể đóng vai trò là điểm gặp gỡ của các nghệ sĩ, những người yêu nghệ thuật và trao đổi văn hóa.</li>
</ul>

<h6>Vị trí:</h6>
<p>Nằm trong thành phố Hội An được UNESCO công nhận là Di sản Thế giới, phòng trưng bày được hưởng lợi từ lượng khách du lịch và những người yêu nghệ thuật không ngừng. Địa chỉ chính xác của nó tốt nhất nên được xác nhận qua bản đồ trực tuyến hoặc trang web chính thức của họ để đảm bảo vị trí chính xác nhất trong bối cảnh lịch sử sôi động này.</p>

<h6>Hiện diện Trực tuyến:</h6>
<p>Việc sử dụng tên miền chuyên dụng (<code>https://notfromhere.art/</code>) làm nổi bật cách tiếp cận chuyên nghiệp và sự hiện diện trực tuyến mạnh mẽ, cho phép du khách xem trước các cuộc triển lãm, tìm hiểu về các nghệ sĩ và lên kế hoạch tham quan trước.</p>
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
