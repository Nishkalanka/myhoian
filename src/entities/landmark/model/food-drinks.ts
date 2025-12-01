import type { Landmark } from './landmarkTypes';

export const foodDrinksLandmarks: Landmark[] = [
  //hill-station
  {
    id: 'hill-station',
    coordinates: [15.877801450043398, 108.33391777335922],
    category: ['food-drinks'],
    imageUrl: '53.jpg',
    en: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Premium deli and boutique offering artisanal sandwiches, gourmet cheese and charcuterie, with a focus on quality ingredients and authentic flavors.',
      fullDescription: `
<p>Located in the heart of Hoi An's Ancient Town, The Hill Station Deli & Boutique has been a culinary landmark since 2011. Our journey began with a simple idea: to bring the freshness of local produce and the richness of global culinary traditions to our guests.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Breakfast',
          items: [
            {
              name: 'Eggs Benedict',
              description:
                'English muffin with 2 poached eggs, ham & hollandaise sauce',
              price: '175.000',
            },
            {
              name: 'Eggs Florentine',
              description:
                'English muffin with 2 poached eggs, spinach & hollandaise sauce',
              price: '155.000',
            },
            {
              name: 'Omelette with Ham',
              description:
                'Served with homemade bread, bacon, salad & fried onion',
              price: '155.000',
            },
            {
              name: 'Omelette with Gouda Cheese',
              description:
                'Served with homemade bread, bacon, salad & fried onion',
              price: '155.000',
            },
            {
              name: 'Scrambled or Fried Eggs',
              description:
                'Served with homemade bread, bacon, salad & fried onion',
              price: '145.000',
            },
            {
              name: 'Fruit Salad',
              description: 'Fresh seasonal fruits with yoghurt and honey',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Baguettes',
          items: [
            {
              name: 'Country Ham and Gouda Cheese',
              description: 'Classic combination on homemade baguette',
              price: '145.000',
            },
            {
              name: 'Serrano Ham, Tomato, Red Pesto & Garlic',
              description: 'Spanish ham with vibrant flavors',
              price: '165.000',
            },
            {
              name: 'Chicken & Dry Cured Bacon',
              description: 'Hearty protein-packed sandwich',
              price: '145.000',
            },
            {
              name: 'Blue Cheese & Beetroot Jam',
              description: 'Sweet and savory combination',
              price: '165.000',
            },
            {
              name: 'Roasted Bell Pepper, Yellow Pesto & Salad',
              description: 'Vegetarian option with fresh vegetables',
              price: '145.000',
            },
            {
              name: 'Italian Salami & Grana Padano Cheese',
              description: 'Italian classics combined',
              price: '165.000',
            },
            {
              name: 'Herbal Feta Cheese Spread, Tomato & Basil',
              description: 'Fresh Mediterranean flavors',
              price: '145.000',
            },
            {
              name: 'Smoked Salmon, Chives, Red Onion & Cream Cheese',
              description: 'Luxurious Nordic combination',
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Wraps & Panini',
          items: [
            {
              name: 'Chicken, Coleslaw & Caesar Sauce Wrap',
              description: 'Creamy and fresh hand-held meal',
              price: '175.000',
            },
            {
              name: 'Veggie Wrap',
              description:
                'Mayonnaise, salad, bell pepper, tomato, onion, cucumber, lime',
              price: '135.000',
            },
            {
              name: 'Vegetarian Sourdough Panini',
              description:
                'Yellow pesto, roasted bell pepper, kale, olive & sun dried tomato',
              price: '215.000',
            },
            {
              name: 'Ham & Cheese Panini',
              description:
                'Country ham, Gouda cheese, caramelized onion & mustard',
              price: '225.000',
            },
            {
              name: 'Chicken, Red Pesto & Basil Panini',
              description:
                'Pesto, grilled chicken, fried Serrano ham, basil & sun dried tomato',
              price: '225.000',
            },
            {
              name: 'Reuben Sandwich à la The Hill Station',
              description:
                'Our take on the classic with homemade Russian dressing, Swiss cheese, pastrami & pickled red cabbage',
              price: '285.000',
            },
          ],
        },
        {
          categoryName: 'Crostini & Snacks',
          items: [
            {
              name: 'Raclette Cheese & Roasted Bell Pepper Crostini',
              description: 'Melted cheese on crispy bread',
              price: '95.000',
            },
            {
              name: 'Roasted Camembert and Mango Crostini',
              description: 'Sweet and savory combination',
              price: '95.000',
            },
            {
              name: 'Serrano Ham, Tomato, Garlic and Olive Oil Crostini',
              description: 'Classic Italian flavors',
              price: '95.000',
            },
            {
              name: 'Blue Cheese & Beetroot Jam Crostini',
              description: 'Elegant flavor pairing',
              price: '95.000',
            },
            {
              name: 'Croquettes with Serrano Ham',
              description: 'Served with aioli',
              price: '145.000',
            },
            {
              name: 'Croquettes with 4 Cheese',
              description: 'Served with spicy dip',
              price: '145.000',
            },
            {
              name: 'French Fries',
              description: 'Served with ketchup and mayonnaise',
              price: '95.000',
            },
            {
              name: 'Hummus',
              description: 'Served with bread',
              price: '135.000',
            },
          ],
        },
        {
          categoryName: 'Soup & Salads',
          items: [
            {
              name: 'Rustic Tomato Soup',
              description: 'Homemade comfort classic',
              price: '115.000',
            },
            {
              name: 'Garden Salad',
              description: 'Seasonal greens & olives',
              price: '125.000',
            },
            {
              name: 'Classic Caesar Salad',
              description: 'Lettuce, croutons, bacon, Grana Padano & dressing',
              price: '145.000',
            },
            {
              name: 'Watermelon & Feta Salad',
              description: 'Fresh and refreshing combination',
              price: '175.000',
            },
          ],
        },
        {
          categoryName: 'Main Courses',
          items: [
            {
              name: 'Thai Basil Fry with Chicken',
              description: 'Basil & chili stir-fried with minced chicken',
              price: '145.000',
            },
            {
              name: 'Bangers & Mash',
              description:
                'Homemade sausages with gravy, green peas & mashed potato',
              price: '245.000',
            },
            {
              name: 'Homemade Spaghetti with Yellow Pesto & Feta',
              description: 'Fresh pasta with sun-dried tomato',
              price: '195.000',
            },
            {
              name: 'Homemade Spaghetti with Smoked Salmon',
              description: 'Broccoli & creamy sauce',
              price: '265.000',
            },
            {
              name: 'Scandinavian Meatballs',
              description: 'Served with gravy, pickles and mashed potato',
              price: '215.000',
            },
            {
              name: 'Chicken and Chorizo Stew',
              description: 'Served with rice',
              price: '225.000',
            },
            {
              name: 'Four Cheese Potato Gratin',
              description: 'Served with a side salad',
              price: '245.000',
            },
            {
              name: 'Beef Stew "Bo Kho"',
              description:
                'The Hill Station signature - slow cooked beef infused with traditional Vietnamese herbs (cinnamon, star anise). Served with bread, rice or mashed potato',
              price: '295.000',
            },
          ],
        },
        {
          categoryName: 'Desserts',
          items: [
            {
              name: 'Blueberry Cheesecake',
              description: 'Classic creamy cheesecake with fresh blueberries',
              price: '95.000',
            },
            {
              name: 'Warm Chocolate Brownie',
              description: 'With whipped cream',
              price: '95.000',
            },
          ],
        },
        {
          categoryName: 'Cheese & Charcuterie Plates',
          items: [
            {
              name: 'Smoked Salmon Platter',
              description: 'Cream cheese, capers, red onion and bread',
              price: '295.000',
            },
            {
              name: 'Mixed Cheese Plate',
              description: '3 assorted cheeses',
              price: '295.000',
            },
            {
              name: 'Gourmet Cheese Plate',
              description:
                '5 assorted cheeses with homemade bread, mango jam and condiments',
              price: '395.000',
            },
            {
              name: 'Mixed Cold Cut Plate',
              description: '3 assorted cold cuts',
              price: '295.000',
            },
            {
              name: 'Gourmet Cold Cut Plate',
              description:
                '5 assorted cold cuts with homemade bread, jam, olive oil and condiments',
              price: '395.000',
            },
            {
              name: 'Snack Plate',
              description: 'Two cold cuts and one cheese for one person',
              price: '325.000',
            },
            {
              name: 'Mixed Gourmet Plate',
              description:
                'Two cold cuts & three cheeses with homemade bread, jam, olive oil and condiments',
              price: '445.000',
            },
          ],
        },
        {
          categoryName: 'Specialty Raclette',
          items: [
            {
              name: 'Raclette Set for 1 Person',
              description:
                'Melted cheese classic served with potatoes, bread, pickles, salad and assorted charcuterie',
              price: '495.000',
            },
            {
              name: 'Raclette Set for 2 Persons',
              description:
                'Melted cheese classic served with potatoes, bread, pickles, salad and assorted charcuterie',
              price: '890.000',
            },
            {
              name: 'Raclette Set for 4 Persons',
              description:
                'Melted cheese classic served with potatoes, bread, pickles, salad and assorted charcuterie',
              price: '1.590.000',
            },
            {
              name: 'Wine Pairing - Alsatian Riesling',
              description:
                'Gustave Lorentz Riesling (bottle) - Special price only with Raclette',
              price: '1.190.000',
            },
          ],
        },
      ],
    },
    es: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Delicatessen y boutique premium que ofrece sándwiches artesanales, quesos y charcutería gourmet, con énfasis en ingredientes de calidad y sabores auténticos.',
      fullDescription: `
<p>Ubicado en el corazón del Casco Antiguo de Hoi An, The Hill Station Deli & Boutique ha sido un referente culinario desde 2011.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Desayuno',
          items: [
            {
              name: 'Huevos Benedictinos',
              description:
                'Muffin inglés con 2 huevos escalfados, jamón y salsa holandesa',
              price: '175.000',
            },
            {
              name: 'Huevos Florentina',
              description:
                'Muffin inglés con 2 huevos escalfados, espinacas y salsa holandesa',
              price: '155.000',
            },
            {
              name: 'Tortilla con Jamón',
              description:
                'Servido con pan casero, tocino, ensalada y cebolla frita',
              price: '155.000',
            },
            {
              name: 'Tortilla con Queso Gouda',
              description:
                'Servido con pan casero, tocino, ensalada y cebolla frita',
              price: '155.000',
            },
            {
              name: 'Huevos Revueltos o Fritos',
              description:
                'Servido con pan casero, tocino, ensalada y cebolla frita',
              price: '145.000',
            },
            {
              name: 'Ensalada de Frutas',
              description: 'Frutas frescas de temporada con yogur y miel',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Baguettes',
          items: [
            {
              name: 'Jamón de Campo y Queso Gouda',
              description: 'Combinación clásica en baguette casero',
              price: '145.000',
            },
            {
              name: 'Jamón Serrano, Tomate, Pesto Rojo y Ajo',
              description: 'Jamón español con sabores vibrantes',
              price: '165.000',
            },
            {
              name: 'Pollo y Tocino Curado',
              description: 'Sándwich repleto de proteína',
              price: '145.000',
            },
            {
              name: 'Queso Azul y Mermelada de Remolacha',
              description: 'Combinación dulce y salada',
              price: '165.000',
            },
            {
              name: 'Pimiento Rojo Asado, Pesto Amarillo y Ensalada',
              description: 'Opción vegetariana con verduras frescas',
              price: '145.000',
            },
            {
              name: 'Salami Italiano y Queso Grana Padano',
              description: 'Clásicos italianos combinados',
              price: '165.000',
            },
            {
              name: 'Propagación de Queso Feta Aromático, Tomate y Albahaca',
              description: 'Sabores frescos del Mediterráneo',
              price: '145.000',
            },
            {
              name: 'Salmón Ahumado, Cebollino, Cebolla Roja y Queso Crema',
              description: 'Combinación lujosa nórdica',
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Wraps y Paninis',
          items: [
            {
              name: 'Wrap de Pollo, Coleslaw y Salsa César',
              description: 'Comida fresca y cremosa',
              price: '175.000',
            },
            {
              name: 'Wrap Vegetariano',
              description:
                'Mayonesa, ensalada, pimiento rojo, tomate, cebolla, pepino, lima',
              price: '135.000',
            },
            {
              name: 'Panini de Masa Madre Vegetariano',
              description:
                'Pesto amarillo, pimiento rojo asado, col rizada, aceituna y tomate secado al sol',
              price: '215.000',
            },
            {
              name: 'Panini de Jamón y Queso',
              description:
                'Jamón de campo, queso Gouda, cebolla caramelizada y mostaza',
              price: '225.000',
            },
            {
              name: 'Panini de Pollo, Pesto Rojo y Albahaca',
              description:
                'Pesto, pollo a la parrilla, jamón serrano frito, albahaca y tomate secado al sol',
              price: '225.000',
            },
            {
              name: 'Sándwich Reuben à la The Hill Station',
              description:
                'Nuestra versión del clásico con aderezo ruso casero, queso suizo, pastrami y col roja encurtida',
              price: '285.000',
            },
          ],
        },
        {
          categoryName: 'Crostinis y Aperitivos',
          items: [
            {
              name: 'Crostini de Queso Raclette y Pimiento Rojo Asado',
              description: 'Queso fundido en pan crujiente',
              price: '95.000',
            },
            {
              name: 'Crostini de Camembert Asado y Mango',
              description: 'Combinación dulce y salada',
              price: '95.000',
            },
            {
              name: 'Crostini de Jamón Serrano, Tomate, Ajo y Aceite de Oliva',
              description: 'Sabores clásicos italianos',
              price: '95.000',
            },
            {
              name: 'Crostini de Queso Azul y Mermelada de Remolacha',
              description: 'Emparejamiento elegante de sabores',
              price: '95.000',
            },
            {
              name: 'Croquetas con Jamón Serrano',
              description: 'Servido con alioli',
              price: '145.000',
            },
            {
              name: 'Croquetas con 4 Quesos',
              description: 'Servido con salsa picante',
              price: '145.000',
            },
            {
              name: 'Papas Fritas',
              description: 'Servido con ketchup y mayonesa',
              price: '95.000',
            },
            {
              name: 'Hummus',
              description: 'Servido con pan',
              price: '135.000',
            },
          ],
        },
        {
          categoryName: 'Sopas y Ensaladas',
          items: [
            {
              name: 'Sopa de Tomate Rústica',
              description: 'Clásico casero reconfortante',
              price: '115.000',
            },
            {
              name: 'Ensalada de Jardín',
              description: 'Verduras de temporada y aceitunas',
              price: '125.000',
            },
            {
              name: 'Ensalada César Clásica',
              description: 'Lechuga, crutones, tocino, Grana Padano y aderezo',
              price: '145.000',
            },
            {
              name: 'Ensalada de Sandía y Queso Feta',
              description: 'Combinación fresca y refrescante',
              price: '175.000',
            },
          ],
        },
        {
          categoryName: 'Platos Principales',
          items: [
            {
              name: 'Salteado de Pollo con Albahaca Tailandesa',
              description: 'Albahaca y chile salteados con pollo molido',
              price: '145.000',
            },
            {
              name: 'Bangers & Mash',
              description:
                'Salchichas caseras con salsa, arvejas verdes y puré de papas',
              price: '245.000',
            },
            {
              name: 'Espagueti Casero con Pesto Amarillo y Queso Feta',
              description: 'Pasta fresca con tomate secado al sol',
              price: '195.000',
            },
            {
              name: 'Espagueti Casero con Salmón Ahumado',
              description: 'Brócoli y salsa cremosa',
              price: '265.000',
            },
            {
              name: 'Albóndigas Escandinavas',
              description: 'Servido con salsa, encurtidos y puré de papas',
              price: '215.000',
            },
            {
              name: 'Estofado de Pollo y Chorizo',
              description: 'Servido con arroz',
              price: '225.000',
            },
            {
              name: 'Gratén de Papas con Cuatro Quesos',
              description: 'Servido con ensalada fresca',
              price: '245.000',
            },
            {
              name: 'Estofado de Res "Bo Kho"',
              description:
                'Firma de The Hill Station - res cocida lentamente infusionada con hierbas vietnamitas tradicionales (canela, anís estrellado). Se sirve con pan, arroz o puré de papas',
              price: '295.000',
            },
          ],
        },
        {
          categoryName: 'Postres',
          items: [
            {
              name: 'Pastel de Queso con Arándanos',
              description:
                'Clásico pastel de queso cremoso con arándanos frescos',
              price: '95.000',
            },
            {
              name: 'Brownie de Chocolate Tibio',
              description: 'Con crema batida',
              price: '95.000',
            },
          ],
        },
        {
          categoryName: 'Tablas de Queso y Charcutería',
          items: [
            {
              name: 'Tabla de Salmón Ahumado',
              description: 'Queso crema, alcaparras, cebolla roja y pan',
              price: '295.000',
            },
            {
              name: 'Tabla de Queso Mixto',
              description: '3 quesos surtidos',
              price: '295.000',
            },
            {
              name: 'Tabla de Queso Gourmet',
              description:
                '5 quesos surtidos con pan casero, mermelada de mango y condimentos',
              price: '395.000',
            },
            {
              name: 'Tabla de Embutidos Mixtos',
              description: '3 embutidos surtidos',
              price: '295.000',
            },
            {
              name: 'Tabla de Embutidos Gourmet',
              description:
                '5 embutidos surtidos con pan casero, mermelada, aceite de oliva y condimentos',
              price: '395.000',
            },
            {
              name: 'Tabla de Aperitivo',
              description: 'Dos embutidos y un queso para una persona',
              price: '325.000',
            },
            {
              name: 'Tabla Gourmet Mixta',
              description:
                'Dos embutidos y tres quesos con pan casero, mermelada, aceite de oliva y condimentos',
              price: '445.000',
            },
          ],
        },
        {
          categoryName: 'Raclette Especial',
          items: [
            {
              name: 'Set de Raclette para 1 Persona',
              description:
                'Clásico queso fundido servido con papas, pan, encurtidos, ensalada y charcutería surtida',
              price: '495.000',
            },
            {
              name: 'Set de Raclette para 2 Personas',
              description:
                'Clásico queso fundido servido con papas, pan, encurtidos, ensalada y charcutería surtida',
              price: '890.000',
            },
            {
              name: 'Set de Raclette para 4 Personas',
              description:
                'Clásico queso fundido servido con papas, pan, encurtidos, ensalada y charcutería surtida',
              price: '1.590.000',
            },
            {
              name: 'Emparejamiento de Vino - Alsatian Riesling',
              description:
                'Gustave Lorentz Riesling (botella) - Precio especial solo con Raclette',
              price: '1.190.000',
            },
          ],
        },
      ],
    },
    fr: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Délicatessen et boutique haut de gamme offrant des sandwichs artisanaux, du fromage et de la charcuterie gastronomiques, avec un accent sur les ingrédients de qualité et les saveurs authentiques.',
      fullDescription: `
<p>Situé au cœur de la Ville Ancienne de Hoi An, The Hill Station Deli & Boutique est un repère culinaire depuis 2011. Notre histoire a commencé par une idée simple : apporter la fraîcheur des produits locaux et la richesse des traditions culinaires mondiales à nos hôtes.</p>

<p>Nous nous spécialisons dans les baguettes artisanales, les sandwichs gastronomiques et une impressionnante sélection de fromages et charcuteries européens. Notre équipe de cuisine crée tout à partir de zéro, y compris nos saucisses de marque, pesto et sauce russe maison.</p>

<h6>Nos Spécialités</h6>
<p>The Hill Station est réputé pour notre Sandwich Reuben à la The Hill Station, une interprétation du classique avec sauce russe maison, fromage suisse et pastrami. Nous servons également notre Ragoût de Boeuf signature 'Bo Kho', une fusion unique des traditions vietnamiennes avec les techniques de cuisine européenne.</p>

<p>Nos plateaux de fromage et charcuterie sont parfaits pour partager, avec des importations européennes soigneusement sélectionnées aux côtés d'articles frais faits maison. Ne manquez pas notre expérience Raclette - un classique de fromage fondu servi avec tous les accompagnements traditionnels.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Petit-déjeuner',
          items: [
            {
              name: 'Oeufs Bénédicte',
              description:
                'Muffin anglais avec 2 oeufs pochés, jambon et sauce hollandaise',
              price: '175.000',
            },
            {
              name: 'Oeufs Florentine',
              description:
                'Muffin anglais avec 2 oeufs pochés, épinards et sauce hollandaise',
              price: '155.000',
            },
            {
              name: 'Omelette au Jambon',
              description:
                'Servie avec pain maison, bacon, salade et oignon frit',
              price: '155.000',
            },
            {
              name: 'Omelette au Fromage Gouda',
              description:
                'Servie avec pain maison, bacon, salade et oignon frit',
              price: '155.000',
            },
            {
              name: 'Oeufs Brouillés ou Frits',
              description:
                'Servis avec pain maison, bacon, salade et oignon frit',
              price: '145.000',
            },
            {
              name: 'Salade de Fruits',
              description: 'Fruits frais de saison avec yaourt et miel',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Baguettes',
          items: [
            {
              name: 'Jambon de Pays et Fromage Gouda',
              description: 'Combinaison classique sur baguette maison',
              price: '145.000',
            },
            {
              name: 'Jambon Serrano, Tomate, Pesto Rouge et Ail',
              description: 'Jambon espagnol aux saveurs vibrantes',
              price: '165.000',
            },
            {
              name: 'Poulet et Bacon Fumé',
              description: 'Sandwich riche en protéines',
              price: '145.000',
            },
            {
              name: 'Fromage Bleu et Confiture de Betterave',
              description: 'Combinaison sucrée-salée',
              price: '165.000',
            },
            {
              name: 'Poivron Rouge Rôti, Pesto Jaune et Salade',
              description: 'Option végétarienne avec légumes frais',
              price: '145.000',
            },
            {
              name: 'Salami Italien et Fromage Grana Padano',
              description: 'Classiques italiens combinés',
              price: '165.000',
            },
            {
              name: 'Tartine de Fromage Feta Aromatique, Tomate et Basilic',
              description: 'Saveurs fraîches de la Méditerranée',
              price: '145.000',
            },
            {
              name: 'Saumon Fumé, Ciboulette, Oignon Rouge et Fromage à Tartiner',
              description: 'Combinaison luxueuse nordique',
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Wraps et Paninis',
          items: [
            {
              name: 'Wrap au Poulet, Coleslaw et Sauce César',
              description: 'Repas frais et crémeux',
              price: '175.000',
            },
            {
              name: 'Wrap Végétarien',
              description:
                'Mayonnaise, salade, poivron rouge, tomate, oignon, concombre, citron vert',
              price: '135.000',
            },
            {
              name: 'Panini Levain Végétarien',
              description:
                'Pesto jaune, poivron rouge rôti, chou frisé, olive et tomate séchée',
              price: '215.000',
            },
            {
              name: 'Panini Jambon et Fromage',
              description:
                'Jambon de pays, fromage Gouda, oignon caramélisé et moutarde',
              price: '225.000',
            },
            {
              name: 'Panini Poulet, Pesto Rouge et Basilic',
              description:
                'Pesto, poulet grillé, jambon serrano frit, basilic et tomate séchée',
              price: '225.000',
            },
            {
              name: 'Sandwich Reuben à la The Hill Station',
              description:
                'Notre interprétation du classique avec sauce russe maison, fromage suisse, pastrami et chou rouge mariné',
              price: '285.000',
            },
          ],
        },
        {
          categoryName: 'Crostinis et Amuse-bouches',
          items: [
            {
              name: 'Crostini Fromage Raclette et Poivron Rouge Rôti',
              description: 'Fromage fondu sur pain croustillant',
              price: '95.000',
            },
            {
              name: 'Crostini Camembert Rôti et Mangue',
              description: 'Combinaison sucrée-salée',
              price: '95.000',
            },
            {
              name: "Crostini Jambon Serrano, Tomate, Ail et Huile d'Olive",
              description: 'Saveurs classiques italiennes',
              price: '95.000',
            },
            {
              name: 'Crostini Fromage Bleu et Confiture de Betterave',
              description: 'Appariement élégant de saveurs',
              price: '95.000',
            },
            {
              name: 'Croquettes au Jambon Serrano',
              description: 'Servies avec aïoli',
              price: '145.000',
            },
            {
              name: 'Croquettes aux 4 Fromages',
              description: 'Servies avec sauce épicée',
              price: '145.000',
            },
            {
              name: 'Frites',
              description: 'Servies avec ketchup et mayonnaise',
              price: '95.000',
            },
            {
              name: 'Houmous',
              description: 'Servi avec pain',
              price: '135.000',
            },
          ],
        },
        {
          categoryName: 'Soupes et Salades',
          items: [
            {
              name: 'Soupe de Tomate Rustique',
              description: 'Classique du confort maison',
              price: '115.000',
            },
            {
              name: 'Salade de Jardin',
              description: 'Verdures de saison et olives',
              price: '125.000',
            },
            {
              name: 'Salade César Classique',
              description:
                'Laitue, croûtons, bacon, Grana Padano et vinaigrette',
              price: '145.000',
            },
            {
              name: 'Salade Pastèque et Fromage Feta',
              description: 'Combinaison fraîche et rafraîchissante',
              price: '175.000',
            },
          ],
        },
        {
          categoryName: 'Plats Principaux',
          items: [
            {
              name: 'Sauté de Poulet au Basilic Thaï',
              description: 'Basilic et piment sautés avec poulet haché',
              price: '145.000',
            },
            {
              name: 'Bangers & Mash',
              description:
                'Saucisses maison avec sauce, petits pois et purée de pommes de terre',
              price: '245.000',
            },
            {
              name: 'Spaghetti Maison au Pesto Jaune et Fromage Feta',
              description: 'Pâtes fraîches avec tomate séchée',
              price: '195.000',
            },
            {
              name: 'Spaghetti Maison au Saumon Fumé',
              description: 'Brocoli et sauce crémeuse',
              price: '265.000',
            },
            {
              name: 'Boulettes Scandinaves',
              description:
                'Servies avec sauce, cornichons et purée de pommes de terre',
              price: '215.000',
            },
            {
              name: 'Ragoût de Poulet et Chorizo',
              description: 'Servi avec riz',
              price: '225.000',
            },
            {
              name: 'Gratin Dauphinois aux Quatre Fromages',
              description: 'Servi avec salade fraîche',
              price: '245.000',
            },
            {
              name: 'Ragoût de Boeuf "Bo Kho"',
              description:
                "Signature de The Hill Station - boeuf cuit lentement infusé d'herbes vietnamiennes traditionnelles (cannelle, anis étoilé). Servi avec pain, riz ou purée de pommes de terre",
              price: '295.000',
            },
          ],
        },
        {
          categoryName: 'Desserts',
          items: [
            {
              name: 'Cheesecake aux Myrtilles',
              description:
                'Classique cheesecake crémeux avec myrtilles fraîches',
              price: '95.000',
            },
            {
              name: 'Brownie au Chocolat Tiède',
              description: 'Avec crème fouettée',
              price: '95.000',
            },
          ],
        },
        {
          categoryName: 'Plateaux Fromages et Charcuteries',
          items: [
            {
              name: 'Plateau Saumon Fumé',
              description: 'Fromage à tartiner, câpres, oignon rouge et pain',
              price: '295.000',
            },
            {
              name: 'Plateau Fromages Mixtes',
              description: '3 fromages assortis',
              price: '295.000',
            },
            {
              name: 'Plateau Fromages Gourmet',
              description:
                '5 fromages assortis avec pain maison, confiture de mangue et condiments',
              price: '395.000',
            },
            {
              name: 'Plateau Charcuteries Mixtes',
              description: '3 charcuteries assorties',
              price: '295.000',
            },
            {
              name: 'Plateau Charcuteries Gourmet',
              description:
                "5 charcuteries assorties avec pain maison, confiture, huile d'olive et condiments",
              price: '395.000',
            },
            {
              name: 'Plateau Amuse-bouche',
              description: 'Deux charcuteries et un fromage pour une personne',
              price: '325.000',
            },
            {
              name: 'Plateau Gourmet Mixte',
              description:
                "Deux charcuteries et trois fromages avec pain maison, confiture, huile d'olive et condiments",
              price: '445.000',
            },
          ],
        },
        {
          categoryName: 'Raclette Spéciale',
          items: [
            {
              name: 'Set Raclette pour 1 Personne',
              description:
                'Classique fromage fondu servi avec pommes de terre, pain, cornichons, salade et charcuterie assortie',
              price: '495.000',
            },
            {
              name: 'Set Raclette pour 2 Personnes',
              description:
                'Classique fromage fondu servi avec pommes de terre, pain, cornichons, salade et charcuterie assortie',
              price: '890.000',
            },
            {
              name: 'Set Raclette pour 4 Personnes',
              description:
                'Classique fromage fondu servi avec pommes de terre, pain, cornichons, salade et charcuterie assortie',
              price: '1.590.000',
            },
            {
              name: 'Accords Mets-Vins - Riesling Alsacien',
              description:
                'Gustave Lorentz Riesling (bouteille) - Prix spécial uniquement avec Raclette',
              price: '1.190.000',
            },
          ],
        },
      ],
    },
    ru: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Премиум-дели и бутик с ремесленными сэндвичами, гурме-сыром и колбасами, с акцентом на качественные ингредиенты и аутентичные вкусы.',
      fullDescription: `
<p>Расположенный в самом сердце древнего города Хойан, The Hill Station Deli & Boutique является кулинарной достопримечательностью с 2011 года.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Завтрак',
          items: [
            {
              name: 'Яйца Бенедикт',
              description:
                'Английский маффин с 2 яйцами пашот, ветчина и голландский соус',
              price: '175.000',
            },
            {
              name: 'Яйца Флорентин',
              description:
                'Английский маффин с 2 яйцами пашот, шпинат и голландский соус',
              price: '155.000',
            },
            {
              name: 'Омлет с ветчиной',
              description:
                'Подается с домашним хлебом, беконом, салатом и жареным луком',
              price: '155.000',
            },
            {
              name: 'Омлет с сыром Гауда',
              description:
                'Подается с домашним хлебом, беконом, салатом и жареным луком',
              price: '155.000',
            },
            {
              name: 'Омлет или жареные яйца',
              description:
                'Подается с домашним хлебом, беконом, салатом и жареным луком',
              price: '145.000',
            },
            {
              name: 'Фруктовый салат',
              description: 'Свежие сезонные фрукты с йогуртом и медом',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Багеты',
          items: [
            {
              name: 'Деревенская ветчина и сыр Гауда',
              description: 'Классическое сочетание на домашнем багете',
              price: '145.000',
            },
            {
              name: 'Иберийская ветчина, помидоры, красное песто и чеснок',
              description: 'Испанская ветчина с яркими вкусами',
              price: '165.000',
            },
            {
              name: 'Курица и копченый бекон',
              description: 'Сытный сэндвич с белками',
              price: '145.000',
            },
            {
              name: 'Горгонзола и варенье из свеклы',
              description: 'Сладко-соленое сочетание',
              price: '165.000',
            },
            {
              name: 'Жареный болгарский перец, желтое песто и салат',
              description: 'Вегетарианский вариант со свежими овощами',
              price: '145.000',
            },
            {
              name: 'Итальянская салями и сыр Граны Падано',
              description: 'Итальянские классики в сочетании',
              price: '165.000',
            },
            {
              name: 'Травяная паста фета, помидоры и базилик',
              description: 'Свежие средиземноморские вкусы',
              price: '145.000',
            },
            {
              name: 'Копченый лосось, шнитт-лук, красный лук и сливочный сыр',
              description: 'Роскошное нордическое сочетание',
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Лепешки и панини',
          items: [
            {
              name: 'Курица, салат из капусты и соус Цезарь в лепешке',
              description: 'Кремовое и свежее блюдо',
              price: '175.000',
            },
            {
              name: 'Вегетарианская лепешка',
              description:
                'Майонез, салат, болгарский перец, помидоры, лук, огурец, лайм',
              price: '135.000',
            },
            {
              name: 'Вегетарианский панини на ржаном хлебе',
              description:
                'Желтое песто, жареный болгарский перец, капуста, оливки и вяленые помидоры',
              price: '215.000',
            },
            {
              name: 'Панини ветчина и сыр',
              description:
                'Деревенская ветчина, сыр Гауда, карамелизованный лук и горчица',
              price: '225.000',
            },
            {
              name: 'Панини курица, красное песто и базилик',
              description:
                'Песто, курица гриль, жареная иберийская ветчина, базилик и вяленые помидоры',
              price: '225.000',
            },
            {
              name: 'Сэндвич Рубен по рецепту The Hill Station',
              description:
                'Наша интерпретация классики с домашней русской заправкой, швейцарским сыром, пастрами и маринованной красной капустой',
              price: '285.000',
            },
          ],
        },
        {
          categoryName: 'Брускетты и закуски',
          items: [
            {
              name: 'Брускетта с раклетом и жареным болгарским перцем',
              description: 'Расплавленный сыр на хрустящем хлебе',
              price: '95.000',
            },
            {
              name: 'Брускетта с жареным камамбером и манго',
              description: 'Сладко-соленое сочетание',
              price: '95.000',
            },
            {
              name: 'Брускетта с иберийской ветчиной, помидорами, чесноком и оливковым маслом',
              description: 'Классические итальянские вкусы',
              price: '95.000',
            },
            {
              name: 'Брускетта с горгонзолой и вареньем из свеклы',
              description: 'Элегантное сочетание вкусов',
              price: '95.000',
            },
            {
              name: 'Крокеты с иберийской ветчиной',
              description: 'Подается с айоли',
              price: '145.000',
            },
            {
              name: 'Крокеты с 4 видами сыра',
              description: 'Подается с острым соусом',
              price: '145.000',
            },
            {
              name: 'Картофель фри',
              description: 'Подается с кетчупом и майонезом',
              price: '95.000',
            },
            {
              name: 'Хумус',
              description: 'Подается с хлебом',
              price: '135.000',
            },
          ],
        },
        {
          categoryName: 'Супы и салаты',
          items: [
            {
              name: 'Деревенский томатный суп',
              description: 'Домашняя комфортная классика',
              price: '115.000',
            },
            {
              name: 'Садовый салат',
              description: 'Сезонная зелень и оливки',
              price: '125.000',
            },
            {
              name: 'Классический салат Цезарь',
              description: 'Салат, сухарики, бекон, Граны Падано и заправка',
              price: '145.000',
            },
            {
              name: 'Салат с арбузом и фетой',
              description: 'Свежее и освежающее сочетание',
              price: '175.000',
            },
          ],
        },
        {
          categoryName: 'Основные блюда',
          items: [
            {
              name: 'Жарение с тайским базиликом и курицей',
              description: 'Базилик и перец с молотой курицей',
              price: '145.000',
            },
            {
              name: 'Сосиски с картофельным пюре',
              description:
                'Домашние сосиски с подливкой, зеленый горошек и картофельное пюре',
              price: '245.000',
            },
            {
              name: 'Домашняя спагетти с желтым песто и фетой',
              description: 'Свежая паста с вяленых помидорами',
              price: '195.000',
            },
            {
              name: 'Домашняя спагетти с копченым лососем',
              description: 'Брокколи и сливочный соус',
              price: '265.000',
            },
            {
              name: 'Скандинавские фрикадельки',
              description:
                'Подается с подливкой, маринадом и картофельным пюре',
              price: '215.000',
            },
            {
              name: 'Рагу из курицы и чоризо',
              description: 'Подается с рисом',
              price: '225.000',
            },
            {
              name: 'Картофельный гратен с четырьмя видами сыра',
              description: 'Подается с салатом',
              price: '245.000',
            },
            {
              name: 'Рагу из говядины Бо Кхо',
              description:
                'Фирменное блюдо The Hill Station - медленно тушеная говядина с традиционными вьетнамскими травами (корица, бадьян). Подается с хлебом, рисом или картофельным пюре',
              price: '295.000',
            },
          ],
        },
        {
          categoryName: 'Десерты',
          items: [
            {
              name: 'Чизкейк с черникой',
              description: 'Классический кремовый чизкейк со свежей черникой',
              price: '95.000',
            },
            {
              name: 'Теплый шоколадный брауни',
              description: 'С взбитыми сливками',
              price: '95.000',
            },
          ],
        },
        {
          categoryName: 'Сыры и колбасы',
          items: [
            {
              name: 'Тарелка копченого лосося',
              description: 'Сливочный сыр, каперсы, красный лук и хлеб',
              price: '295.000',
            },
            {
              name: 'Смешанная сырная тарелка',
              description: '3 разных сыра',
              price: '295.000',
            },
            {
              name: 'Гурме-сырная тарелка',
              description:
                '5 разных сыров с домашним хлебом, манговым вареньем и специями',
              price: '395.000',
            },
            {
              name: 'Смешанная тарелка колбас',
              description: '3 разных колбасы',
              price: '295.000',
            },
            {
              name: 'Гурме-тарелка колбас',
              description:
                '5 разных колбас с домашним хлебом, вареньем, оливковым маслом и специями',
              price: '395.000',
            },
            {
              name: 'Закуска',
              description: 'Две колбасы и один сыр на одного человека',
              price: '325.000',
            },
            {
              name: 'Смешанная гурме-тарелка',
              description:
                'Две колбасы и три сыра с домашним хлебом, вареньем, оливковым маслом и специями',
              price: '445.000',
            },
          ],
        },
        {
          categoryName: 'Специальная раклетт',
          items: [
            {
              name: 'Раклетт на одного',
              description:
                'Расплавленный сыр классический вариант с картофелем, хлебом, маринадом, салатом и колбасами',
              price: '495.000',
            },
            {
              name: 'Раклетт на двоих',
              description:
                'Расплавленный сыр классический вариант с картофелем, хлебом, маринадом, салатом и колбасами',
              price: '890.000',
            },
            {
              name: 'Раклетт на четверых',
              description:
                'Расплавленный сыр классический вариант с картофелем, хлебом, маринадом, салатом и колбасами',
              price: '1.590.000',
            },
            {
              name: 'Винное сочетание - Alsatian Riesling',
              description:
                'Gustave Lorentz Riesling (бутылка) - Специальная цена только с раклетт',
              price: '1.190.000',
            },
          ],
        },
      ],
    },
    vn: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Deli và boutique hàng cao cấp phục vụ bánh mì thủ công, phô mai và thịt nguội sang trọng, nhấn mạnh vào nguyên liệu chất lượng cao và hương vị chân thực.',
      fullDescription: `
<p>Nằm ở trung tâm Phố cổ Hội An, The Hill Station Deli & Boutique là một điểm đến ẩm thực kể từ năm 2011.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Bữa sáng',
          items: [
            {
              name: 'Trứng Benedictine',
              description:
                'Bánh muffin Anh với 2 quả trứng poached, thịt giăm bông và nước sốt hollandaise',
              price: '175.000',
            },
            {
              name: 'Trứng Florentine',
              description:
                'Bánh muffin Anh với 2 quả trứng poached, rau chân vịt và nước sốt hollandaise',
              price: '155.000',
            },
            {
              name: 'Trứng tráo với Thịt giăm bông',
              description:
                'Phục vụ với bánh mì nhà làm, thịt xông khói, salad và hành tây chiên',
              price: '155.000',
            },
            {
              name: 'Trứng tráo với Phô mai Gouda',
              description:
                'Phục vụ với bánh mì nhà làm, thịt xông khói, salad và hành tây chiên',
              price: '155.000',
            },
            {
              name: 'Trứng xáo hoặc Trứng chiên',
              description:
                'Phục vụ với bánh mì nhà làm, thịt xông khói, salad và hành tây chiên',
              price: '145.000',
            },
            {
              name: 'Salad Trái cây',
              description: 'Trái cây tươi theo mùa với sữa chua và mật ong',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Bánh mì',
          items: [
            {
              name: 'Thịt giăm bông Miền quê và Phô mai Gouda',
              description: 'Sự kết hợp cổ điển trên bánh mì nhà làm',
              price: '145.000',
            },
            {
              name: 'Thịt giăm bông Serrano, Cà chua, Pesto đỏ và Tỏi',
              description: 'Thịt giăm bông Tây Ban Nha với hương vị sôi nổi',
              price: '165.000',
            },
            {
              name: 'Gà và Thịt xông khói Khô cứng',
              description: 'Bánh mì đầy đủ protein',
              price: '145.000',
            },
            {
              name: 'Phô mai Xanh và Mứt Củ cải',
              description: 'Sự kết hợp ngọt mặn',
              price: '165.000',
            },
            {
              name: 'Ớt Chuông Nướng, Pesto Vàng và Salad',
              description: 'Lựa chọn chay với rau tươi',
              price: '145.000',
            },
            {
              name: 'Salami Ý và Phô mai Grana Padano',
              description: 'Các kinh điển Ý kết hợp',
              price: '165.000',
            },
            {
              name: 'Chà Phô mai Feta Thơm, Cà chua và Húng quế',
              description: 'Hương vị Địa Trung Hải tươi',
              price: '145.000',
            },
            {
              name: 'Cá hồi Xông khói, Tỏi Scotch, Hành tây đỏ và Phô mai Kem',
              description: 'Sự kết hợp cao cấp của Bắc Âu',
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Wraps và Paninis',
          items: [
            {
              name: 'Wrap Gà, Coleslaw và Nước sốt Caesar',
              description: 'Bữa ăn tươi và kem',
              price: '175.000',
            },
            {
              name: 'Wrap Chay',
              description:
                'Xmayonaise, salad, ớt chuông đỏ, cà chua, hành, dưa chuột, chanh tươi',
              price: '135.000',
            },
            {
              name: 'Panini Bánh mì Chay',
              description:
                'Pesto vàng, ớt chuông nướng, bắp cải xoăn, ô liu và cà chua khô nắng',
              price: '215.000',
            },
            {
              name: 'Panini Thịt giăm bông và Phô mai',
              description:
                'Thịt giăm bông miền quê, phô mai Gouda, hành caramel hóa và moutarde',
              price: '225.000',
            },
            {
              name: 'Panini Gà, Pesto Đỏ và Húng quế',
              description:
                'Pesto, gà nướng, thịt giăm bông serrano chiên, húng quế và cà chua khô nắng',
              price: '225.000',
            },
            {
              name: 'Bánh mì Reuben theo cách của The Hill Station',
              description:
                'Cách hiểu của chúng tôi về kinh điển với nước sốt Nga nhà làm, phô mai Thụy Sĩ, pastrami và bắp cải đỏ ngâm',
              price: '285.000',
            },
          ],
        },
        {
          categoryName: 'Crostinis và Đồ ăn nhẹ',
          items: [
            {
              name: 'Crostini Phô mai Raclette và Ớt Chuông Nướng',
              description: 'Phô mai tan trên bánh mì giòn',
              price: '95.000',
            },
            {
              name: 'Crostini Camembert Nướng và Xoài',
              description: 'Sự kết hợp ngọt mặn',
              price: '95.000',
            },
            {
              name: 'Crostini Thịt giăm bông Serrano, Cà chua, Tỏi và Dầu ô liu',
              description: 'Hương vị cổ điển Ý',
              price: '95.000',
            },
            {
              name: 'Crostini Phô mai Xanh và Mứt Củ cải',
              description: 'Kết hợp hương vị tinh tế',
              price: '95.000',
            },
            {
              name: 'Bánh Croquette với Thịt giăm bông Serrano',
              description: 'Phục vụ với aioli',
              price: '145.000',
            },
            {
              name: 'Bánh Croquette với 4 Phô mai',
              description: 'Phục vụ với nước sốt cay',
              price: '145.000',
            },
            {
              name: 'Khoai tây chiên',
              description: 'Phục vụ với ketchup và xayonaise',
              price: '95.000',
            },
            {
              name: 'Hummus',
              description: 'Phục vụ với bánh mì',
              price: '135.000',
            },
          ],
        },
        {
          categoryName: 'Súp và Salads',
          items: [
            {
              name: 'Súp Cà chua Mộc mạc',
              description: 'Kinh điển thoải mái nhà làm',
              price: '115.000',
            },
            {
              name: 'Salad Khu vườn',
              description: 'Rau tươi theo mùa và ô liu',
              price: '125.000',
            },
            {
              name: 'Salad Caesar Cổ điển',
              description:
                'Xà lách, bánh crouton, thịt xông khói, Grana Padano và nước sốt',
              price: '145.000',
            },
            {
              name: 'Salad Dưa hấu và Phô mai Feta',
              description: 'Sự kết hợp tươi và làm mát',
              price: '175.000',
            },
          ],
        },
        {
          categoryName: 'Các Món Chính',
          items: [
            {
              name: 'Xào Gà với Húng quế Thái',
              description: 'Húng quế và ớt xào với gà xay nhuyễn',
              price: '145.000',
            },
            {
              name: 'Xúc xích và Khoai tây nghiền',
              description:
                'Xúc xích nhà làm với nước sốt, đậu Hà Lan xanh và khoai tây nghiền',
              price: '245.000',
            },
            {
              name: 'Mì Spaghetti Nhà làm với Pesto Vàng và Phô mai Feta',
              description: 'Mì tươi với cà chua khô nắng',
              price: '195.000',
            },
            {
              name: 'Mì Spaghetti Nhà làm với Cá hồi Xông khói',
              description: 'Bông cải xanh và nước sốt kem',
              price: '265.000',
            },
            {
              name: 'Thớn Scandinavia',
              description:
                'Phục vụ với nước sốt, muối chua và khoai tây nghiền',
              price: '215.000',
            },
            {
              name: 'Hầm Gà và Chorizo',
              description: 'Phục vụ với cơm',
              price: '225.000',
            },
            {
              name: 'Gratin Khoai tây Bốn Phô mai',
              description: 'Phục vụ với salad tươi',
              price: '245.000',
            },
            {
              name: 'Hầm Thịt bò "Bo Kho"',
              description:
                'Chữ ký của The Hill Station - thịt bò được nấu chậm ngâm các loại cây thảo dược Việt Nam truyền thống (quế, hồi). Phục vụ với bánh mì, cơm hoặc khoai tây nghiền',
              price: '295.000',
            },
          ],
        },
        {
          categoryName: 'Tráng miệng',
          items: [
            {
              name: 'Bánh phô mai với Việt quất',
              description: 'Bánh phô mai kem cổ điển với việt quất tươi',
              price: '95.000',
            },
            {
              name: 'Brownie Chocolate Ấm',
              description: 'Với kem đánh bông',
              price: '95.000',
            },
          ],
        },
        {
          categoryName: 'Bàn Phô mai và Thịt Nguội',
          items: [
            {
              name: 'Bàn Cá hồi Xông khói',
              description: 'Phô mai kem, capers, hành tây đỏ và bánh mì',
              price: '295.000',
            },
            {
              name: 'Bàn Phô mai Hỗn hợp',
              description: '3 loại phô mai hỗn hợp',
              price: '295.000',
            },
            {
              name: 'Bàn Phô mai Cao cấp',
              description:
                '5 loại phô mai hỗn hợp với bánh mì nhà làm, mứt xoài và gia vị',
              price: '395.000',
            },
            {
              name: 'Bàn Thịt Nguội Hỗn hợp',
              description: '3 loại thịt nguội hỗn hợp',
              price: '295.000',
            },
            {
              name: 'Bàn Thịt Nguội Cao cấp',
              description:
                '5 loại thịt nguội hỗn hợp với bánh mì nhà làm, mứt, dầu ô liu và gia vị',
              price: '395.000',
            },
            {
              name: 'Bàn Đồ ăn nhẹ',
              description: 'Hai loại thịt nguội và một phô mai cho một người',
              price: '325.000',
            },
            {
              name: 'Bàn Hỗn hợp Cao cấp',
              description:
                'Hai loại thịt nguội và ba phô mai với bánh mì nhà làm, mứt, dầu ô liu và gia vị',
              price: '445.000',
            },
          ],
        },
        {
          categoryName: 'Raclette Đặc biệt',
          items: [
            {
              name: 'Bộ Raclette cho 1 Người',
              description:
                'Kinh điển phô mai tan phục vụ với khoai tây, bánh mì, muối chua, salad và thịt nguội hỗn hợp',
              price: '495.000',
            },
            {
              name: 'Bộ Raclette cho 2 Người',
              description:
                'Kinh điển phô mai tan phục vụ với khoai tây, bánh mì, muối chua, salad và thịt nguội hỗn hợp',
              price: '890.000',
            },
            {
              name: 'Bộ Raclette cho 4 Người',
              description:
                'Kinh điển phô mai tan phục vụ với khoai tây, bánh mì, muối chua, salad và thịt nguội hỗn hợp',
              price: '1.590.000',
            },
            {
              name: 'Kết hợp Rượu - Riesling Alsatian',
              description:
                'Gustave Lorentz Riesling (chai) - Giá đặc biệt chỉ khi gọi Raclette',
              price: '1.190.000',
            },
          ],
        },
      ],
    },
    slug: {
      en: 'the-hill-station-deli-and-boutique',
      ru: 'the-hill-station-deli-and-boutique',
      es: 'the-hill-station-deli-and-boutique',
      fr: 'the-hill-station-deli-and-boutique',
      vn: 'the-hill-station-deli-and-boutique',
    },
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
      en: 'sua-vegan-restaurant',
      ru: 'sua-veganskii-restoran',
      es: 'restaurante-vegano-sua',
      fr: 'restaurant-vegane-sua',
      vn: 'nha-hang-thuan-chay-sua',
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
    imageUrl: '61.jpg', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Fefe Roastery ',
      description:
        'FeFe Roastery is a serene haven for coffee enthusiasts and food lovers alike.',
      fullDescription: `
<p>Nestled in front of the iconic Ba Mu Temple, FeFe Roastery is a serene haven for coffee enthusiasts and food lovers alike. The café boasts an inviting atmosphere with lanterns dancing overhead, making it an ideal spot for relaxation and people-watching. With both outdoor seating that overlooks the vibrant square and a charming indoor garden, guests can enjoy their drinks in various cozy settings. At FeFe Roastery, the coffee experience is elevated to new heights.
</p>
      `,
      internalImageNames: [], // Добавьте имена файлов изображений, если они будут
    },
    es: {
      title: 'Fefe Roastery',
      description:
        'FeFe Roastery es un refugio sereno tanto para los entusiastas del café como para los amantes de la buena comida.﻿',
      fullDescription: `
<p>Ubicado frente al icónico templo Ba Mu, FeFe Roastery es un refugio sereno tanto para los entusiastas del café como para los amantes de la comida. La cafetería cuenta con una atmósfera acogedora con linternas que danzan en lo alto, lo que la convierte en un lugar ideal para relajarse y observar a la gente. Con asientos al aire libre con vistas a la vibrante plaza y un encantador jardín interior, los huéspedes pueden disfrutar de sus bebidas en varios entornos acogedores. En FeFe Roastery, la experiencia del café se eleva a nuevas alturas.</p>
      `,
      internalImageNames: [],
    },
    fr: {
      title: 'FeFe Roastery',
      description:
        'FeFe Roastery est un havre de paix pour les amateurs de café comme pour les gourmands.﻿',
      fullDescription: `
        <p>Niché devant l'emblématique temple Ba Mu, FeFe Roastery est un havre de paix pour les amateurs de café et les gourmands. Le café offre une atmosphère accueillante avec des lanternes dansant au-dessus des têtes, ce qui en fait un lieu idéal pour se détendre et regarder les passants. Avec des places assises en plein air donnant sur la place animée et un charmant jardin intérieur, les clients peuvent savourer leurs boissons dans différents cadres confortables. Chez FeFe Roastery, l'expérience du café est élevée vers de nouveaux sommets.</p>
      `,
      internalImageNames: [],
    },
    ru: {
      title: 'FeFe Roastery',
      description:
        'FeFe Roastery — это тихая гавань как для ценителей кофе, так и для любителей вкусной еды.',
      fullDescription: `
        <p>Расположенный прямо перед знаменитым храмом Ба Му, FeFe Roastery — это тихая гавань как для ценителей кофе, так и для любителей вкусной еды. Кафе отличается гостеприимной атмосферой с танцующими над головой фонариками, что делает его идеальным местом для отдыха и наблюдения за прохожими. Благодаря столикам на улице с видом на оживленную площадь и очаровательному внутреннему саду, гости могут наслаждаться напитками в самых разных уютных уголках. В FeFe Roastery культура потребления кофе возведена на новую высоту.</p>
      `,
      internalImageNames: [],
    },
    vn: {
      title: 'Sua Vegan Restaurant',
      description:
        'FeFe Roastery là chốn bình yên dành cho những tín đồ cà phê cũng như những người yêu ẩm thực.﻿',
      fullDescription: `
<p>Nằm ngay trước di tích Cổng chùa Bà Mụ mang tính biểu tượng, FeFe Roastery là một chốn bình yên dành cho những tín đồ cà phê và những người yêu ẩm thực. Quán mang đến bầu không khí lôi cuốn với những chiếc đèn lồng đung đưa trên cao, tạo nên một địa điểm lý tưởng để thư giãn và ngắm nhìn dòng người qua lại. Với chỗ ngồi ngoài trời nhìn ra quảng trường sôi động và khu vườn trong nhà đầy quyến rũ, thực khách có thể thưởng thức đồ uống trong nhiều không gian ấm cúng khác nhau. Tại FeFe Roastery, trải nghiệm cà phê được nâng tầm lên một đẳng cấp mới.</p>
      `,
      internalImageNames: [],
    },
    slug: {
      // <-- Добавлен объект slug для локализованных URL
      en: 'fefe-roastery',
      ru: 'fefe-roastery', // <-- Замените на реальный slug para el ruso
      es: 'fefe-roastery',
      fr: 'fefe-roastery',
      vn: 'fefe-roastery',
    },
  },
];
