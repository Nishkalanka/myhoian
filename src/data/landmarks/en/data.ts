// src/data/landmarks/ru/dataLandmarks.ts

import type { LandmarkContent } from '../landmarkTypes';

export const enLandmarkData: LandmarkContent[] = [
  {
    id: 1, // This ID must match the ID of the same attraction in other language files
    title: 'Japanese Covered Bridge',
    description:
      "Hoi An's famous symbol, built in the 16th century by the Japanese community.",
    fullDescription: `

<p>If you've been to Hoi An and haven't taken a picture on the Japanese Covered Bridge (Chùa Cầu), then you haven't really been to Hoi An. Seriously, this bridge is so delightful it even made it onto the city's emblem! And for good reason, it has a very unusual history...</p>

<img src="IMAGE_PLACEHOLDER_26.jpg" alt="Japanese Bridge Detail"/>

<p>This bridge is a real superstar, staring back at you from the 20,000 Vietnamese Dong (VND) banknote! Don't be surprised if you see crowds of tourists seriously holding this banknote next to the bridge, trying to get "that shot." While it may not be the most original shot in the world, it's impossible to resist such a selfie! After all, it's not every day you hold money in your hands that depicts what's behind you, right?</p>

<h6>The Japanese Left, But The Bridge Remained</h6>
<p>Imagine the 17th century: Hoi An is an international trade hub in Southeast Asia, attracting merchants from all corners of the globe. Japanese and Chinese traders were so active here that they decided: "Let's build a bridge to make it easier to visit each other!" And so, in 1593, our hero came into being.</p>

<img src="IMAGE_PLACEHOLDER_2.jpg" alt="Japanese Bridge Detail"/>

<p>Few people know this, but the Japanese actively lived in Hoi An until 1663, and then... Boom! The Japanese government suddenly declared: "That's it, stop trading! We're going into lockdown!" (Well, almost). So Japan went into isolation, and its magnificent legacy – this bridge – remained standing, like a greeting from the past.</p>

<h6>Bridge, Temple, and a Little Mystery</h6>

<img src="IMAGE_PLACEHOLDER_25.jpg" alt="Japanese Bridge Detail"/>
<small>Statue of the Taoist God of Weather, Tran Bo Bac De</small>

<p>You walk across the bridge, and there's a... temple? Yes, right in the middle of the bridge, a small altar is nestled. It's dedicated to the Taoist Jade Emperor Yu-di. It's funny because Taoism wasn't widely practiced in Japan, so it's likely the temple was added by the Vietnamese later. It's a kind of cultural bridge that connects not only shores but also beliefs!</p>

<img src="IMAGE_PLACEHOLDER_24.jpg" alt="Japanese Bridge Detail"/>

<p>And on both sides of the bridge, you're greeted by stone statues of dogs and monkeys. Don't ask why them specifically – it's one of those Hoi An mysteries that makes you scratch your head. Maybe it's because of the years of construction (started in the Year of the Dog, finished in the Year of the Monkey)? Or, as another version suggests, many Japanese emperors were born in these years? In any case, they're here for a reason, and locals still adorn them and make offerings. Who knows, maybe they really are the guardians of the bridge, and whether you'll be lucky today depends on them!</p>

<h6>Fighting the Underwater Catfish</h6>
<p>Here's where it gets wild (in a good way)! The bridge wasn't built just for fun; it had a very important mission – to pin down a gigantic mythical catfish named Onamazu (大鯰)!</p>

<img src="IMAGE_PLACEHOLDER_3.jpg" alt="Onamazu"/>
<small>Onamazu (Japanese: 大鯰 — "giant catfish")</small>

<p>The essence of the legend: In Japanese folklore, there's this enormous catfish that causes earthquakes when it wiggles its tail. Its head, they say, is under India, its tail under Japan, but its BACK PASSES RIGHT UNDER VIETNAM! And the bridge builders, apparently, were very clever engineers, because they built the bridge specifically to "pin down" the back of this monster, preventing it from thrashing. Thus, the Japanese Bridge became a kind of anti-seismic press for all of Central Vietnam.</p>
<img src="IMAGE_PLACEHOLDER_20.jpg" alt="Onamazu"/>

<p>We don't know how much Onamazu appreciated this "massage" therapy, but the bridge, built on strong wooden supports, truly has stood for hundreds of years! Although, to be honest, not without humanity's help. The bridge has undergone eight (!) major renovations (even in 2022 it was literally disassembled for "surgery"!), which probably also helped a bit to keep it from falling apart. But the catfish myth still sounds cooler, don't you agree?</p>

<h6>The Prince, the Carver, and Three Hieroglyphs</h6>

<p>In 1719, Prince Nguyễn Phúc Chu visited Hoi An. He was an important figure who ruled Southern Vietnam, almost like a king, from 1691 to 1725. And so, they say, he didn't just admire the bridge, but personally carved three Chinese characters above the temple door! Can you imagine? Instead of sending servants, the prince decided to do the carving himself. He must have felt inspired!</p>

<img src="IMAGE_PLACEHOLDER_23.jpg" alt="The Prince, the Carver, and Three Hieroglyphs"/>

<p>These symbols translate very poetically: "bridge for welcoming guests from afar." Or, in Vietnamese style, "Lai Viet Kieu." It's as if the bridge itself is saying: "Hello, traveler! Come in, make yourself at home, you belong here!" Such an ancient "welcome sign," carved by the hand of the ruler himself.</p>

<h6>The French Road and Why the Bridge is Pedestrian Only</h6>

<img src="IMAGE_PLACEHOLDER_21.jpg" alt="Japanese Bridge Detail"/>

<p>Times change, and even the Japanese Bridge had to endure its "fashion experiments." During colonial rule, the French decided: "Hey, why shouldn't motorcycles drive here?" and leveled the road across the bridge. Sounds like a great idea for traffic jams, right? Fortunately, this "innovation" was later canceled, and the bridge once again became pedestrian-only. And thank goodness, because what kind of "symbol" is it if bikes are speeding across it?</p>

<h6>A Small Bridge with a Giant Heart</h6>
<p>So, when you walk across the Japanese Bridge, know this: you're not just walking on planks, you're treading on living history, full of legends, cultural intricacies, and even mythical catfish. It doesn't just connect two shores – it connects eras, peoples, and perhaps even calms earthquakes. That's our Japanese Covered Bridge – small, but very proud and mysterious.</p>

<img src="IMAGE_PLACEHOLDER_22.jpg" alt="Japanese Bridge Detail"/>
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
    ], // All image names used in fullDescription
  },
  //Cantonese Assembly Hall !
  {
    id: 2, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_29.jpg" alt="Cantonese Assembly Hall"/>
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
    internalImageNames: ['29.jpg'], // All image names used in fullDescription
  },
  //Phung Hung House!
  {
    id: 3, // This ID must match the ID of the same attraction in other language files
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
    internalImageNames: ['27.jpg'], // All image names used in fullDescription
  },
  //Sa Huynh Cultural Museum  !
  {
    id: 4, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_27.jpg" alt="Sa Huynh Cultural Museum"/>
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
    internalImageNames: ['27.jpg'], // All image names used in fullDescription
  },
  //Duc An House!
  {
    id: 5, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_30.jpg" alt="Duc An House"/>
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
    internalImageNames: ['30.jpg'], // All image names used in fullDescription
  },
  //Kazimierz Kwiatkowski bust !
  {
    id: 6, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_31.jpg" alt="Kazimierz Kwiatkowski"/>
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
<img src="IMAGE_PLACEHOLDER_32.jpg" alt="Kazimierz Kwiatkowski"/>
<p>
    Kazimierz Kwiatkowski tragically died of a heart attack in Hue in 1997, while working on the restoration of the royal palace. He was buried in Poland, but a monument to him has been erected in Hoi An in a park named after him – a rare honor for a foreigner in Vietnam.
</p>
<p>
    Thanks to his tireless efforts, Hoi An and My Son were recognized as UNESCO World Heritage sites. He taught the Vietnamese to restore while preserving authenticity, and his students continue his work to this day. Even if some stories about him have become legends, they only emphasize how much he inspired people to protect heritage. Kazik is not just a historian; he is the spirit of Hoi An, living in every preserved house, in every carved beam, and in every story about the "crazy Pole" who saved the city.
</p>
    `,
    internalImageNames: ['32.jpg', '31.jpg'], // All image names used in fullDescription
  },
  {
    id: 7, // This ID must match the ID of the same attraction in other language files
    title: 'Tan Ky Old House',
    description:
      'Tan Ky Old House is one of the brightest examples of traditional Hoi An architecture.',
    fullDescription: `
    
<p>
    Imagine strolling through the ancient streets of Hoi An, where every house tells its own story. But among them, there is one special one – the <strong>Tan Ky Old House</strong>. It's not just an ancient mansion; it's a living history book, full of surprises, where people once lived, traded, and even hid from pirates!
</p>
<img src="IMAGE_PLACEHOLDER_33.jpg" alt="Tan Ky Old House"/>
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
<img src="IMAGE_PLACEHOLDER_34.jpg" alt="Tan Ky Old House"/>
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
    internalImageNames: ['33.jpg', '34.jpg'], // All image names used in fullDescription
  },
  //Quan Thang Ancient House !
  {
    id: 8, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_35.jpg" alt="Quan Thang Ancient House"/>
<ul>
    <li>It has the typical "tube house" shape of Hoi An: a narrow facade that extends far inwards, all the way to the river at the back.</li>
    <li>Inside, the house is divided into several zones: a commercial space at the entrance with counters, living quarters for the family, and, of course, a sacred place for ancestral worship.</li>
    <li>Pay attention to the <strong>inner courtyards (Sky Yards)</strong> – these are open spaces in the center of the house. They not only provide natural light and ventilation but also serve to collect rainwater. You can often see fish tanks, small plants, and trees here, creating an oasis of tranquility.</li>
    <li>The house is famous for its exquisite wood carvings, crafted by artisans from the famous Kim Bong carpentry village. Here you'll see peacocks, flowers, mythical creatures, and patterns related to feng shui. It's one of the most beautiful examples of wood carving in Hoi An.</li>
    <li>Built from precious ironwood, the house is incredibly sturdy. Its roof is covered with "yin-yang" tiles, which help keep it cool in summer and warm in winter – it's like an ancient "air conditioner"!</li>
    <li>Above the main door are unique "door eyes" with a yin-yang symbol and bodhi leaves, adorned with red fabrics. They are believed to protect the house from evil spirits and bad luck.</li>
</ul>

<h6>Immersion in the Mercantile Past</h6>

<p>
    Visiting Quan Thang Ancient House is not just a walk through an old building. It's an opportunity to glimpse into the daily life and trading practices of Hoi An's prosperous merchant class from centuries past. The family shrines and the overall atmosphere of the house demonstrate the importance of preserving traditional beliefs and cultural customs. It is an important part of Hoi An's architectural heritage, showcasing the high craftsmanship of local and Chinese artisans.
</p>

<img src="IMAGE_PLACEHOLDER_36.jpg" alt="Quan Thang Ancient House"/>

    `,
    internalImageNames: ['35.jpg', '36.jpg'], // All image names used in fullDescription
  },
  //Museum of Trade Ceramics !
  {
    id: 9, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_37.jpg" alt="Museum of Trade Ceramics"/>
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
<img src="IMAGE_PLACEHOLDER_38.jpg" alt="Museum of Trade Ceramics"/>
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
    internalImageNames: ['38.jpg', '37.jpg'], // All image names used in fullDescription
  },
  //Museum of Local Products !
  {
    id: 10, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_39.jpg" alt="Museum of Local Products"/>
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
    internalImageNames: ['39.jpg'], // All image names used in fullDescription
  },
  //Chinese Assembly Hall of Hoi An !
  {
    id: 11, // This ID must match the ID of the same attraction in other language files
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
    internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // All image names used in fullDescription
  },
  //Fujian Assembly Hall !
  {
    id: 12, // This ID must match the ID of the same attraction in other language files
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
    internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // All image names used in fullDescription
  },
  {
    id: 13, // This ID must match the ID of the same attraction in other language files
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
<img src="IMAGE_PLACEHOLDER_41.jpg" alt="Quan Cong Temple / Ong Pagoda"/>
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
<img src="IMAGE_PLACEHOLDER_40.jpg" alt="Quan Cong Temple / Ong Pagoda"/>
<ul>
    <li>In the left room, there is an altar dedicated to the patron of trade and prosperity.</li>
    <li>And on the right is a sanctuary dedicated to Quan Cong's famous horse, known as the "Red Hare," which was famous for its incredible speed. Its statue here is an important element.</li>
</ul>

<h6>A Living Museum of Spiritual Beliefs</h6>
<p>
    Quan Cong Temple is an active place of worship for local residents, especially for the Chinese diaspora and Vietnamese. It is often visited by businessmen to ask for blessings for honest and successful trade. The temple also serves as a center for various traditional Chinese and Vietnamese festivals, including Lunar New Year, which are accompanied by rituals, music, and dances (for example, the famous lion dance).
</p>
<img src="IMAGE_PLACEHOLDER_42.jpg" alt="Quan Cong Temple / Ong Pagoda"/>
<small>Historical antiquities remain untouched at Ong Pagoda in Hoi An after more than 300 years</small>
<p>
    If you are going to visit only one assembly hall in Hoi An, it might be worth choosing the Cantonese Assembly Hall – it truly impresses with its scale and decorations. However, Quan Cong Temple is a unique living museum that provides a deep understanding of Hoi An's rich history, trade connections, and cultural exchange, as well as the spiritual beliefs that shaped the lives of its inhabitants for centuries. Visiting this temple is an integral part of getting to know the Ancient Town of Hoi An.
</p>
    `,
    internalImageNames: ['40.jpg', '42.jpg', '41.jpg'], // All image names used in fullDescription
  },
  //Museum of Traditional Medicine !
  {
    id: 14, // This ID must match the ID of the same attraction in other language files
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
    internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // All image names used in fullDescription
  },
  //Museum of Folk Culture !
  {
    id: 15, // This ID must match the ID of the same attraction in other language files
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
    internalImageNames: ['9.jpg', '2.jpg', '3.jpg'], // All image names used in fullDescription
  },
  //Teochew Assembly Hall
  {
    id: 16, // This ID must match the ID of the same attraction in other language files
    title: 'Teochew Assembly Hall',
    description:
      'This hall was originally a center for the social and religious life of all Teochew Chinese.',
    fullDescription: `
<p>
    Among the many magnificent assembly halls of Hoi An, there is one that immediately catches the eye with its special style and rich history – it's the <strong>Teochew Assembly Hall</strong>. It is also called Trieu Chau Assembly Hall or, simply, Ong Bon Pagoda. And it's no coincidence, as it was built by the Chinese community from the Chaozhou (Teochew) region in distant 1845!
</p>
<img src="IMAGE_PLACEHOLDER_43.jpg" alt="Teochew Assembly Hall"/>
<p>
    This hall was originally a center for the social and religious life of all Teochew Chinese who lived and traded in Hoi An. It served as a place for meetings, festivals, and mutual assistance. And although the hall has been repeatedly renovated and rebuilt, especially in 1887, 1970, and 1991, it has retained its unique appearance and status as one of the few ancient relics of Vietnam, recognized even by the French School of the Far East!
</p>

<h6>Architectural Magic and the Art of Details</h6>
<img src="IMAGE_PLACEHOLDER_44.jpg" alt="Teochew Assembly Hall"/>
<p>
    The Teochew Assembly Hall is a true architectural masterpiece, where Chinese style harmoniously intertwines with local Vietnamese elements. Its layout is very symbolic and follows the Chinese character "国" (guó), meaning "country" or "nation," with three main parts: a front courtyard, an inner courtyard, and a main hall.
</p>
<img src="IMAGE_PLACEHOLDER_45.jpg" alt="Teochew Assembly Hall"/>
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
<img src="IMAGE_PLACEHOLDER_46.jpg" alt="Teochew Assembly Hall"/>
<p>
    The main deity worshipped in the central sanctuary is <strong>Ong Bon</strong>, or Ma Yuan – a Chinese warlord who lived before our era and was deified after death. His official title is "General who calms the waves." He was prayed to for safe passage and successful trade at sea, which was vital for Teochew merchants whose lives depended on sea voyages.
</p>
<p>
    In addition to religious purposes, the Teochew Assembly Hall has always been a crucial center for preserving and spreading the culture and spiritual values of the Teochew community in Hoi An. Festivals and cultural events are still regularly held here, attracting both the local Chinese community and tourists.
</p>
<img src="IMAGE_PLACEHOLDER_47.jpg" alt="Teochew Assembly Hall"/>
<p>
    And finally, a little secret: in 1989, archaeologists discovered many ceramic items and ancient coins from the 15th-20th centuries, made in China, Japan, and Vietnam, beneath the Teochew Assembly Hall! These finds once again prove that Hoi An was an incredibly bustling trading port.
</p>
<p>
    The Teochew Assembly Hall is one of the most important and unique architectural and cultural sites in Hoi An. Be sure to stop by to delve into history and understand how different cultures shaped this ancient city.
</p>
    `,
    internalImageNames: ['43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg'], // All image names used in fullDescription
  },
  //Precious Heritage Art Gallery Museum
  {
    id: 17, // This ID must match the ID of the same attraction in other language files
    title: 'Precious Heritage Art Gallery Museum',
    description: 'Every Portrait is an Open Soul of Vietnam!',
    fullDescription: `
  
<p>
    For a moment, forget about ancient temples and trading houses. In Hoi An, there's a truly special place where history is written not in stone, but in human faces and stories. We're talking about the <strong>Precious Heritage Art Gallery Museum</strong>, a project by French photographer <strong>Réhahn</strong>, a man called "the photographer who captures the souls of his models."
</p>
<img src="IMAGE_PLACEHOLDER_49.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    Réhahn is not just a man with a camera. He is a true explorer of humanity who traveled to over 35 countries before settling in his beloved Hoi An. For him, photography is a way to get closer to people, hear their stories, and understand their culture. "Good contact (and photography) starts with respect," says Réhahn, and his works reflect this in every frame.
</p>

<h6>"Hidden Smile" and a Project That Changed Lives</h6>
<p>
    In 2011, Réhahn met a woman who changed everything – a 72-year-old boat captain named <strong>Bui Thi Xong</strong>. When he asked to take her portrait, she shyly laughed and covered her mouth. This is how the legendary photograph <strong>"Hidden Smile"</strong> came to be – a photo that conquered the world, became the most expensive Asian photograph (sold for $150,000!), and was even presented by the President of Vietnam to Emmanuel Macron.
</p>
<img src="IMAGE_PLACEHOLDER_50.jpg" alt="Precious Heritage Art Gallery Museum"/>
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
<img src="IMAGE_PLACEHOLDER_51.jpg" alt="Precious Heritage Art Gallery Museum"/>
<p>
    And the result of this incredible work is the <strong>Precious Heritage Museum in Hoi An</strong>, opened in 2017. It is the only museum in the world that houses artifacts from all ethnic groups of Vietnam! Imagine: 100 stunning photographs, 62 authentic national costumes, five halls, and 500 square meters of space dedicated to cultural diversity.
</p>
<p>
    "Before Vietnam, I couldn't imagine a country where so many languages, traditions, and identities coexist," says Réhahn. His mission is to preserve this fragile and unique heritage.
</p>
<p>
    Visiting the Precious Heritage Art Gallery Museum is not just a tour; it's an emotional journey that will allow you to glimpse into the most hidden corners of Vietnam through the faces of its people. Prepare to leave inspired and with a smile on your face!
</p>

    `,
    internalImageNames: ['48.jpg', '49.jpg', '50.jpg', '51.jpg'], // All image names used in fullDescription
  },
];
