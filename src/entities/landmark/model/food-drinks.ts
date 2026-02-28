import type { Landmark } from './landmarkTypes';

export const foodDrinksLandmarks: Landmark[] = [
  //hill-station
  {
    id: 'hill-station',
    coordinates: [15.877801450043398, 108.33391777335922],
    category: ['food-drinks'],
    isMustVisit: true,
    imageUrl: '53.webp',
    en: {
      title: 'The Hill Station Deli & Boutique',
      description:
        'Premium deli and boutique offering artisanal sandwiches, gourmet cheese and charcuterie, with a focus on quality ingredients and authentic flavors.',
      fullDescription: `
<p>Located in the heart of Hoi An's Ancient Town, The Hill Station Deli & Boutique has been a culinary landmark since 2011.</p>
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
        {
          categoryName: 'Aperitifs',
          items: [
            {
              name: 'Ricard, Campari or Amaretto',
              description: 'Classic aperitifs',
              price: '75.000',
            },
            {
              name: "Bailey's",
              description: 'Creamy liqueur',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Premium Spirits',
          items: [
            {
              name: 'Vodka, Whiskey, Gin or White Rum',
              description: 'Premium spirits',
              price: '85.000',
            },
            {
              name: 'House Spirit with Mixer',
              description: 'Mixed drink',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Non-Alcoholic Drinks',
          items: [
            {
              name: 'Sprite, Coca-Cola, Fanta',
              description: 'Soft drinks',
              price: '30.000',
            },
            {
              name: 'Soda Water',
              description: 'Carbonated water',
              price: '30.000',
            },
            {
              name: 'Tonic Water',
              description: 'Tonic drink',
              price: '30.000',
            },
          ],
        },
        {
          categoryName: 'Freshly Squeezed Juices',
          items: [
            {
              name: '100% Fresh Orange Juice',
              description: 'Freshly squeezed orange juice',
              price: '65.000',
            },
            {
              name: 'Watermelon Juice',
              description: 'Freshly squeezed watermelon juice',
              price: '65.000',
            },
            {
              name: 'Mango Juice',
              description: 'Freshly squeezed mango juice',
              price: '65.000',
            },
            {
              name: 'Lime Juice',
              description: 'Freshly squeezed lime juice',
              price: '35.000',
            },
            {
              name: 'Young Coconut',
              description: 'Fresh coconut milk',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Tea',
          items: [
            {
              name: 'Green Tea, Jasmine Tea, Black Tea, Oolong, Earl Grey',
              description: 'High quality tea Vergers du Mekong',
              price: '35.000',
            },
          ],
        },
        {
          categoryName: 'Coffee',
          items: [
            {
              name: 'Orange Americano',
              description: 'Coffee with orange flavor',
              price: '85.000',
            },
            {
              name: 'Cappuccino',
              description: 'Classic Italian coffee',
              price: '55.000',
            },
            {
              name: 'Latte',
              description: 'Coffee with milk',
              price: '55.000',
            },
            {
              name: 'Espresso',
              description: 'Strong black coffee',
              price: '45.000',
            },
            {
              name: 'Vietnamese Coffee Black/White',
              description: 'Traditional Vietnamese coffee',
              price: '30.000',
            },
            {
              name: 'Espresso Macchiato',
              description: 'Espresso with a touch of milk',
              price: '50.000',
            },
            {
              name: 'Hot Chocolate',
              description: 'Hot chocolate drink',
              price: '65.000',
            },
            {
              name: 'Americano',
              description: 'Classic black coffee',
              price: '45.000',
            },
          ],
        },
        {
          categoryName: 'Carlsberg Beer',
          items: [
            {
              name: 'Carlsberg Lager 4.7% - 330ml',
              description: 'Classic lager beer',
              price: '40.000',
            },
            {
              name: 'Carlsberg Lager 4.7% - 500ml',
              description: 'Classic lager beer',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 330ml',
              description: 'Pilsner beer',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 550ml',
              description: 'Pilsner beer',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Craft Beer',
          items: [
            {
              name: 'Kroneburg 1664 Blanc - Wheat 5%',
              description: 'Wheat beer',
              price: '75.000',
            },
            {
              name: 'Beach Blonde - Blonde Ale 5%',
              description: 'Blonde ale',
              price: '85.000',
            },
            {
              name: 'Fire Eater Stout - Cacao-Chili Stout 7.3%',
              description: 'Spicy stout from 7 Bridges',
              price: '125.000',
            },
            {
              name: 'Sunset Tangerine - Fruit Wheat 4.2%',
              description: 'Wheat beer with tangerine',
              price: '115.000',
            },
            {
              name: 'Hibiscus Cider - Cider 4.8%',
              description: 'Hibiscus cider from Bazan Brewing',
              price: '115.000',
            },
            {
              name: 'Pacific Pilsner - Pilsner 5%',
              description: 'Pilsner beer',
              price: '115.000',
            },
            {
              name: 'East West Pale Ale - Pale Ale 6%',
              description: 'Pale ale from East West',
              price: '115.000',
            },
            {
              name: 'Black Shadows Espresso Martini Stout - Stout 6.4%',
              description: 'Espresso stout',
              price: '135.000',
            },
            {
              name: 'Dream Alone - Pale Ale 5.7%',
              description: 'Pale ale from Heart of Darkness',
              price: '125.000',
            },
            {
              name: 'Dream Sensations - Hazy IPA 5.7%',
              description: 'Hazy IPA',
              price: '125.000',
            },
            {
              name: 'Kurtz Insane IPA - IPA 7.1%',
              description: 'Strong IPA',
              price: '135.000',
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
        {
          categoryName: 'Aperitivos',
          items: [
            {
              name: 'Ricard, Campari o Amaretto',
              description: 'Aperitivos clásicos',
              price: '75.000',
            },
            { name: "Bailey's", description: 'Licor cremoso', price: '75.000' },
          ],
        },
        {
          categoryName: 'Bebidas Alcohólicas Premium',
          items: [
            {
              name: 'Vodka, Whiskey, Ginebra o Ron Blanco',
              description: 'Bebidas espirituosas premium',
              price: '85.000',
            },
            {
              name: 'Bebida Espirituosa con Mezclador',
              description: 'Bebida mixta',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Bebidas Sin Alcohol',
          items: [
            {
              name: 'Sprite, Coca-Cola, Fanta',
              description: 'Bebidas gaseosas',
              price: '30.000',
            },
            {
              name: 'Agua Carbonatada',
              description: 'Agua gaseosa',
              price: '30.000',
            },
            {
              name: 'Agua Tónica',
              description: 'Bebida tónica',
              price: '30.000',
            },
          ],
        },
        {
          categoryName: 'Jugos Recién Exprimidos',
          items: [
            {
              name: 'Jugo de Naranja 100%',
              description: 'Jugo de naranja recién exprimido',
              price: '65.000',
            },
            {
              name: 'Jugo de Sandía',
              description: 'Jugo de sandía recién exprimido',
              price: '65.000',
            },
            {
              name: 'Jugo de Mango',
              description: 'Jugo de mango recién exprimido',
              price: '65.000',
            },
            {
              name: 'Jugo de Lima',
              description: 'Jugo de lima recién exprimido',
              price: '35.000',
            },
            {
              name: 'Coco Joven',
              description: 'Leche de coco fresca',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Té',
          items: [
            {
              name: 'Té Verde, Té de Jazmín, Té Negro, Oolong, Conde Gris',
              description: 'Té de alta calidad Vergers du Mekong',
              price: '35.000',
            },
          ],
        },
        {
          categoryName: 'Café',
          items: [
            {
              name: 'Americano Naranja',
              description: 'Café con sabor a naranja',
              price: '85.000',
            },
            {
              name: 'Capuchino',
              description: 'Café italiano clásico',
              price: '55.000',
            },
            { name: 'Latte', description: 'Café con leche', price: '55.000' },
            {
              name: 'Espresso',
              description: 'Café negro fuerte',
              price: '45.000',
            },
            {
              name: 'Café Vietnamita Negro/Blanco',
              description: 'Café vietnamita tradicional',
              price: '30.000',
            },
            {
              name: 'Espresso Macchiato',
              description: 'Espresso con toque de leche',
              price: '50.000',
            },
            {
              name: 'Chocolate Caliente',
              description: 'Bebida de chocolate caliente',
              price: '65.000',
            },
            {
              name: 'Americano',
              description: 'Café negro clásico',
              price: '45.000',
            },
          ],
        },
        {
          categoryName: 'Cerveza Carlsberg',
          items: [
            {
              name: 'Carlsberg Lager 4.7% - 330ml',
              description: 'Cerveza Lager clásica',
              price: '40.000',
            },
            {
              name: 'Carlsberg Lager 4.7% - 500ml',
              description: 'Cerveza Lager clásica',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 330ml',
              description: 'Cerveza Pilsner',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 550ml',
              description: 'Cerveza Pilsner',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Cerveza Artesanal',
          items: [
            {
              name: 'Kroneburg 1664 Blanc - Trigo 5%',
              description: 'Cerveza de trigo',
              price: '75.000',
            },
            {
              name: 'Beach Blonde - Ale Rubia 5%',
              description: 'Cerveza rubia',
              price: '85.000',
            },
            {
              name: 'Fire Eater Stout - Cacao-Chile Stout 7.3%',
              description: 'Stout picante de 7 Bridges',
              price: '125.000',
            },
            {
              name: 'Sunset Tangerine - Trigo Frutal 4.2%',
              description: 'Cerveza de trigo con mandarina',
              price: '115.000',
            },
            {
              name: 'Hibiscus Cider - Sidra 4.8%',
              description: 'Sidra de hibisco de Bazan Brewing',
              price: '115.000',
            },
            {
              name: 'Pacific Pilsner - Pilsner 5%',
              description: 'Cerveza Pilsner',
              price: '115.000',
            },
            {
              name: 'East West Pale Ale - Pale Ale 6%',
              description: 'Pale Ale de East West',
              price: '115.000',
            },
            {
              name: 'Black Shadows Espresso Martini Stout - Stout 6.4%',
              description: 'Stout de Espresso',
              price: '135.000',
            },
            {
              name: 'Dream Alone - Pale Ale 5.7%',
              description: 'Pale Ale de Heart of Darkness',
              price: '125.000',
            },
            {
              name: 'Dream Sensations - Hazy IPA 5.7%',
              description: 'Hazy IPA',
              price: '125.000',
            },
            {
              name: 'Kurtz Insane IPA - IPA 7.1%',
              description: 'IPA fuerte',
              price: '135.000',
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
<p>Situé au cœur de la Ville Ancienne de Hoi An, The Hill Station Deli & Boutique est un repère culinaire depuis 2011.</p>
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
        {
          categoryName: 'Apéritifs',
          items: [
            {
              name: 'Ricard, Campari ou Amaretto',
              description: 'Apéritifs classiques',
              price: '75.000',
            },
            {
              name: "Bailey's",
              description: 'Liqueur crémeuse',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Alcools Premium',
          items: [
            {
              name: 'Vodka, Whiskey, Gin ou Rhum Blanc',
              description: 'Boissons alcoolisées premium',
              price: '85.000',
            },
            {
              name: 'Alcool Maison avec Mélangeur',
              description: 'Boisson mixte',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Boissons Sans Alcool',
          items: [
            {
              name: 'Sprite, Coca-Cola, Fanta',
              description: 'Boissons gazeuses',
              price: '30.000',
            },
            {
              name: 'Eau Gazeuse',
              description: 'Eau gazeuse',
              price: '30.000',
            },
            {
              name: 'Eau Tonique',
              description: 'Boisson tonique',
              price: '30.000',
            },
          ],
        },
        {
          categoryName: 'Jus Frais Pressés',
          items: [
            {
              name: "Jus d'Orange 100%",
              description: "Jus d'orange frais pressé",
              price: '65.000',
            },
            {
              name: 'Jus de Pastèque',
              description: 'Jus de pastèque frais pressé',
              price: '65.000',
            },
            {
              name: 'Jus de Mangue',
              description: 'Jus de mangue frais pressé',
              price: '65.000',
            },
            {
              name: 'Jus de Citron Vert',
              description: 'Jus de citron vert frais pressé',
              price: '35.000',
            },
            {
              name: 'Jeune Noix de Coco',
              description: 'Lait de coco frais',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Thé',
          items: [
            {
              name: 'Thé Vert, Thé au Jasmin, Thé Noir, Oolong, Comte Grey',
              description: 'Thé de haute qualité Vergers du Mekong',
              price: '35.000',
            },
          ],
        },
        {
          categoryName: 'Café',
          items: [
            {
              name: 'Americano Orange',
              description: "Café avec saveur d'orange",
              price: '85.000',
            },
            {
              name: 'Cappuccino',
              description: 'Café italien classique',
              price: '55.000',
            },
            { name: 'Latte', description: 'Café au lait', price: '55.000' },
            {
              name: 'Espresso',
              description: 'Café noir fort',
              price: '45.000',
            },
            {
              name: 'Café Vietnamien Noir/Blanc',
              description: 'Café vietnamien traditionnel',
              price: '30.000',
            },
            {
              name: 'Espresso Macchiato',
              description: 'Espresso avec trait de lait',
              price: '50.000',
            },
            {
              name: 'Chocolat Chaud',
              description: 'Boisson chocolatée chaude',
              price: '65.000',
            },
            {
              name: 'Americano',
              description: 'Café noir classique',
              price: '45.000',
            },
          ],
        },
        {
          categoryName: 'Bière Carlsberg',
          items: [
            {
              name: 'Carlsberg Lager 4.7% - 330ml',
              description: 'Bière Lager classique',
              price: '40.000',
            },
            {
              name: 'Carlsberg Lager 4.7% - 500ml',
              description: 'Bière Lager classique',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 330ml',
              description: 'Bière Pilsner',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 550ml',
              description: 'Bière Pilsner',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Bière Artisanale',
          items: [
            {
              name: 'Kroneburg 1664 Blanc - Blé 5%',
              description: 'Bière de blé',
              price: '75.000',
            },
            {
              name: 'Beach Blonde - Pale Ale Blonde 5%',
              description: 'Bière blonde',
              price: '85.000',
            },
            {
              name: 'Fire Eater Stout - Stout Cacao-Chili 7.3%',
              description: 'Stout épicé de 7 Bridges',
              price: '125.000',
            },
            {
              name: 'Sunset Tangerine - Blé Fruité 4.2%',
              description: 'Bière de blé à la mandarine',
              price: '115.000',
            },
            {
              name: 'Hibiscus Cider - Cidre 4.8%',
              description: "Cidre à l'hibiscus de Bazan Brewing",
              price: '115.000',
            },
            {
              name: 'Pacific Pilsner - Pilsner 5%',
              description: 'Bière Pilsner',
              price: '115.000',
            },
            {
              name: 'East West Pale Ale - Pale Ale 6%',
              description: "Pale Ale d'East West",
              price: '115.000',
            },
            {
              name: 'Black Shadows Espresso Martini Stout - Stout 6.4%',
              description: "Stout à l'espresso",
              price: '135.000',
            },
            {
              name: 'Dream Alone - Pale Ale 5.7%',
              description: 'Pale Ale de Heart of Darkness',
              price: '125.000',
            },
            {
              name: 'Dream Sensations - Hazy IPA 5.7%',
              description: 'Hazy IPA',
              price: '125.000',
            },
            {
              name: 'Kurtz Insane IPA - IPA 7.1%',
              description: 'IPA forte',
              price: '135.000',
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
        {
          categoryName: 'Аперитивы',
          items: [
            {
              name: 'Риард, Кампари или Амаретто',
              description: 'Классические аперитивы',
              price: '75.000',
            },
            {
              name: 'Бейлис',
              description: 'Кремовый ликер',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Крепкие спиртные напитки',
          items: [
            {
              name: 'Водка, виски, джин или белый ром',
              description: 'Домашние спиртные напитки',
              price: '85.000',
            },
            {
              name: 'Домашний спирт с миксером',
              description: 'Смешанный напиток',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Безалкогольные напитки',
          items: [
            {
              name: 'Спрайт, Кока-Кола, Фанта',
              description: 'Газированные напитки',
              price: '30.000',
            },
            {
              name: 'Содовая вода',
              description: 'Газированная вода',
              price: '30.000',
            },
            {
              name: 'Тоник',
              description: 'Тонизирующий напиток',
              price: '30.000',
            },
          ],
        },
        {
          categoryName: 'Свежевыжатые соки',
          items: [
            {
              name: 'Апельсиновый сок 100%',
              description: 'Свежевыжатый апельсиновый сок',
              price: '65.000',
            },
            {
              name: 'Сок дыни',
              description: 'Свежевыжатый сок дыни',
              price: '65.000',
            },
            {
              name: 'Манговый сок',
              description: 'Свежевыжатый манговый сок',
              price: '65.000',
            },
            {
              name: 'Сок лайма',
              description: 'Свежевыжатый сок лайма',
              price: '35.000',
            },
            {
              name: 'Молодой кокос',
              description: 'Свежее кокосовое молоко',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Чай',
          items: [
            {
              name: 'Зеленый чай, чай с жасмином, черный чай, улун, Граф Грей',
              description: 'Высококачественный чай Vergers du Mekong',
              price: '35.000',
            },
          ],
        },
        {
          categoryName: 'Кофе',
          items: [
            {
              name: 'Оранжевый американо',
              description: 'Кофе с апельсиновым вкусом',
              price: '85.000',
            },
            {
              name: 'Капучино',
              description: 'Классический итальянский кофе',
              price: '55.000',
            },
            {
              name: 'Латте',
              description: 'Кофе с молоком',
              price: '55.000',
            },
            {
              name: 'Эспрессо',
              description: 'Крепкий черный кофе',
              price: '45.000',
            },
            {
              name: 'Вьетнамский кофе черный/белый',
              description: 'Традиционный вьетнамский кофе',
              price: '30.000',
            },
            {
              name: 'Эспрессо Макиато',
              description: 'Эспрессо с каплей молока',
              price: '50.000',
            },
            {
              name: 'Горячий шоколад',
              description: 'Горячий шоколадный напиток',
              price: '65.000',
            },
            {
              name: 'Американо',
              description: 'Классический черный кофе',
              price: '45.000',
            },
          ],
        },
        {
          categoryName: 'Пиво Карлсберг',
          items: [
            {
              name: 'Карлсберг Лагер 4.7% - 330мл',
              description: 'Классическое лагер пиво',
              price: '40.000',
            },
            {
              name: 'Карлсберг Лагер 4.7% - 500мл',
              description: 'Классическое лагер пиво',
              price: '60.000',
            },
            {
              name: 'Карлсберг Пилснер 4.8% - 330мл',
              description: 'Пилснер пиво',
              price: '60.000',
            },
            {
              name: 'Карлсберг Пилснер 4.8% - 550мл',
              description: 'Пилснер пиво',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Ремесленное пиво',
          items: [
            {
              name: 'Кронебург 1664 Блан - Пшеничное 5%',
              description: 'Пшеничное пиво',
              price: '75.000',
            },
            {
              name: 'Beach Blonde - Светлый эль 5%',
              description: 'Светлое пиво',
              price: '85.000',
            },
            {
              name: 'Fire Eater Stout - Какао-чили стаут 7.3%',
              description: 'Пряный стаут от 7 Bridges',
              price: '125.000',
            },
            {
              name: 'Sunset Tangerine - Фруктовое пшеничное 4.2%',
              description: 'Пшеничное пиво с мандарином',
              price: '115.000',
            },
            {
              name: 'Hibiscus Cider - Сидр 4.8%',
              description: 'Гибискусовый сидр от Bazan Brewing',
              price: '115.000',
            },
            {
              name: 'Pacific Pilsner - Пилснер 5%',
              description: 'Пилснер пиво',
              price: '115.000',
            },
            {
              name: 'East West Pale Ale - Бледный эль 6%',
              description: 'Бледный эль от East West',
              price: '115.000',
            },
            {
              name: 'Black Shadows Espresso Martini Stout - Стаут 6.4%',
              description: 'Эспрессо стаут',
              price: '135.000',
            },
            {
              name: 'Dream Alone - Бледный эль 5.7%',
              description: 'Бледный эль от Heart of Darkness',
              price: '125.000',
            },
            {
              name: 'Dream Sensations - Мутный IPA 5.7%',
              description: 'Хейзи IPA',
              price: '125.000',
            },
            {
              name: 'Kurtz Insane IPA - IPA 7.1%',
              description: 'Крепкой IPA',
              price: '135.000',
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
        {
          categoryName: 'Aperitif',
          items: [
            {
              name: 'Ricard, Campari hoặc Amaretto',
              description: 'Các aperitif cổ điển',
              price: '75.000',
            },
            { name: "Bailey's", description: 'Rượu kem', price: '75.000' },
          ],
        },
        {
          categoryName: 'Rượu Cao Cấp',
          items: [
            {
              name: 'Vodka, Whiskey, Gin hoặc Rum Trắng',
              description: 'Đồ uống rượu cao cấp',
              price: '85.000',
            },
            {
              name: 'Rượu Nhà với Chế phẩm Trộn',
              description: 'Đồ uống trộn',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Đồ Uống Không Cồn',
          items: [
            {
              name: 'Sprite, Coca-Cola, Fanta',
              description: 'Đồ uống có ga',
              price: '30.000',
            },
            { name: 'Nước Soda', description: 'Nước có ga', price: '30.000' },
            {
              name: 'Nước Tonic',
              description: 'Đồ uống tonic',
              price: '30.000',
            },
          ],
        },
        {
          categoryName: 'Nước Ép Tươi',
          items: [
            {
              name: 'Nước Ép Cam 100%',
              description: 'Nước ép cam tươi',
              price: '65.000',
            },
            {
              name: 'Nước Ép Dưa Hấu',
              description: 'Nước ép dưa hấu tươi',
              price: '65.000',
            },
            {
              name: 'Nước Ép Xoài',
              description: 'Nước ép xoài tươi',
              price: '65.000',
            },
            {
              name: 'Nước Ép Chanh',
              description: 'Nước ép chanh tươi',
              price: '35.000',
            },
            { name: 'Dừa Xiêm', description: 'Sữa dừa tươi', price: '65.000' },
          ],
        },
        {
          categoryName: 'Trà',
          items: [
            {
              name: 'Trà Xanh, Trà Hoa Nhài, Trà Đen, Trà Oolong, Trà Bá Tước',
              description: 'Trà chất lượng cao Vergers du Mekong',
              price: '35.000',
            },
          ],
        },
        {
          categoryName: 'Cà Phê',
          items: [
            {
              name: 'Americano Cam',
              description: 'Cà phê với hương vị cam',
              price: '85.000',
            },
            {
              name: 'Cappuccino',
              description: 'Cà phê Ý cổ điển',
              price: '55.000',
            },
            { name: 'Latte', description: 'Cà phê với sữa', price: '55.000' },
            {
              name: 'Espresso',
              description: 'Cà phê đen mạnh',
              price: '45.000',
            },
            {
              name: 'Cà Phê Việt Nam Đen/Trắng',
              description: 'Cà phê Việt Nam truyền thống',
              price: '30.000',
            },
            {
              name: 'Espresso Macchiato',
              description: 'Espresso với ít sữa',
              price: '50.000',
            },
            {
              name: 'Sô-cô-la Nóng',
              description: 'Đồ uống sô-cô-la nóng',
              price: '65.000',
            },
            {
              name: 'Americano',
              description: 'Cà phê đen cổ điển',
              price: '45.000',
            },
          ],
        },
        {
          categoryName: 'Bia Carlsberg',
          items: [
            {
              name: 'Carlsberg Lager 4.7% - 330ml',
              description: 'Bia Lager cổ điển',
              price: '40.000',
            },
            {
              name: 'Carlsberg Lager 4.7% - 500ml',
              description: 'Bia Lager cổ điển',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 330ml',
              description: 'Bia Pilsner',
              price: '60.000',
            },
            {
              name: 'Carlsberg Pilsner 4.8% - 550ml',
              description: 'Bia Pilsner',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Bia Thủ Công',
          items: [
            {
              name: 'Kroneburg 1664 Blanc - Lúa Mạch 5%',
              description: 'Bia lúa mạch',
              price: '75.000',
            },
            {
              name: 'Beach Blonde - Pale Ale Vàng 5%',
              description: 'Bia vàng',
              price: '85.000',
            },
            {
              name: 'Fire Eater Stout - Stout Cacao-Ớt 7.3%',
              description: 'Stout cay từ 7 Bridges',
              price: '125.000',
            },
            {
              name: 'Sunset Tangerine - Lúa Mạch Trái Cây 4.2%',
              description: 'Bia lúa mạch với quế',
              price: '115.000',
            },
            {
              name: 'Hibiscus Cider - Rượu Táo 4.8%',
              description: 'Rượu táo hoa Cúc từ Bazan Brewing',
              price: '115.000',
            },
            {
              name: 'Pacific Pilsner - Pilsner 5%',
              description: 'Bia Pilsner',
              price: '115.000',
            },
            {
              name: 'East West Pale Ale - Pale Ale 6%',
              description: 'Pale Ale từ East West',
              price: '115.000',
            },
            {
              name: 'Black Shadows Espresso Martini Stout - Stout 6.4%',
              description: 'Stout Espresso',
              price: '135.000',
            },
            {
              name: 'Dream Alone - Pale Ale 5.7%',
              description: 'Pale Ale từ Heart of Darkness',
              price: '125.000',
            },
            {
              name: 'Dream Sensations - Hazy IPA 5.7%',
              description: 'Hazy IPA',
              price: '125.000',
            },
            {
              name: 'Kurtz Insane IPA - IPA 7.1%',
              description: 'IPA Mạnh',
              price: '135.000',
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
  //fefe-Roastery
  {
    id: 'fefe-roastery',
    coordinates: [15.877930767963667, 108.32668616386269],
    category: ['food-drinks'],
    isMustVisit: true,
    imageUrl: '61.webp',

    en: {
      title: 'Fefe Roastery',
      description:
        'Serene coffee haven offering premium Vietnamese coffee, specialty espresso drinks, smoothies, fresh juices, and authentic coffee experiences in a charming atmosphere.',
      fullDescription: `
<p>FeFe Roastery is a serene haven for coffee lovers alike.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Smoothies',
          items: [
            {
              name: 'Mango',
              description: 'Smooth and creamy mango bliss',
              price: '85.000',
            },
            {
              name: 'Strawberry',
              description: 'Fresh strawberry smoothie',
              price: '85.000',
            },
            {
              name: 'Avocado',
              description: 'Creamy avocado delight',
              price: '90.000',
            },
            {
              name: 'Sunrise',
              description: 'Pineapple, mango, banana, chia seeds',
              price: '90.000',
            },
            {
              name: 'Midday',
              description:
                'Strawberry, banana, red dragon fruit, mango, chia seeds',
              price: '90.000',
            },
            {
              name: 'Gloaming',
              description: 'Pineapple, banana, mango, avocado',
              price: '90.000',
            },
            {
              name: 'Twilight',
              description: 'Avocado, banana, honey, natural yogurt',
              price: '90.000',
            },
            {
              name: 'Sunset',
              description: 'Mango, pineapple, passion fruit, banana',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Vietnamese Coffee',
          items: [
            {
              name: 'Black Coffee',
              description: 'Traditional dark roast Vietnamese coffee',
              price: '50.000',
            },
            {
              name: 'Coffee with Condensed Milk',
              description:
                'Classic Vietnamese style with sweetened condensed milk',
              price: '55.000',
            },
            {
              name: 'Saigon Black',
              description: 'Rich black coffee speciality',
              price: '55.000',
            },
            {
              name: 'Saigon Brown',
              description: 'Light brown coffee with perfect balance',
              price: '65.000',
            },
            {
              name: 'White Coffee',
              description: 'Light and smooth Vietnamese white coffee',
              price: '65.000',
            },
            {
              name: 'Egg Coffee',
              description: 'Traditional Hoi An specialty with whipped egg yolk',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Espresso',
          items: [
            {
              name: 'Espresso',
              description: 'Pure shot of espresso',
              price: '55.000',
            },
            {
              name: 'Americano',
              description: 'Espresso with hot water',
              price: '55.000',
            },
            {
              name: 'Macchiato',
              description: 'Espresso with splash of milk',
              price: '75.000',
            },
            {
              name: 'Cappuccino',
              description: 'Espresso with steamed milk and foam',
              price: '70.000',
            },
            {
              name: 'Latte',
              description: 'Espresso with steamed milk',
              price: '75.000',
            },
            {
              name: 'Flat White',
              description: 'Espresso with velvety steamed milk',
              price: '75.000',
            },
            {
              name: 'Babyccino',
              description: 'Steamed milk with cocoa powder for kids',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Manual Coffee',
          items: [
            {
              name: 'V60',
              description: 'Hand-drip coffee perfection',
              price: '105.000',
            },
            {
              name: 'Kalita',
              description: 'Smooth hand-drip brewing',
              price: '105.000',
            },
            {
              name: 'Chemex',
              description: 'Classic glass brewing vessel',
              price: '105.000',
            },
            {
              name: 'Syphon',
              description: 'Theatrical vacuum pot brewing',
              price: '115.000',
            },
            {
              name: 'Ice Drip',
              description: 'Slow drip cold brew method (or with Fresh Milk)',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Matcha',
          items: [
            {
              name: 'Matcha Latte',
              description: 'Matcha + milk of choice + sugar (separate)',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Chocolate',
          items: [
            {
              name: 'Chocolate',
              description: 'Chocolate + milk of choice + condensed milk',
              price: '70.000',
            },
          ],
        },
        {
          categoryName: 'Signature Drinks',
          items: [
            {
              name: 'Salted Coffee',
              description: 'Coffee with condensed milk + Salty foam',
              price: '65.000',
            },
            {
              name: 'Ora-Americano',
              description: 'Espresso + Orange + Sugar',
              price: '65.000',
            },
            {
              name: 'Hat De Mua He',
              description: 'Cold brew + Fresh milk + Hazelnut syrup',
              price: '75.000',
            },
            {
              name: 'Huong',
              description: 'Cold brew + Lemon juice + Sugar + Rosemary',
              price: '75.000',
            },
            {
              name: 'Coconut Latte',
              description: 'Espresso + Coconut cream + Condensed milk',
              price: '75.000',
            },
            {
              name: 'Inesoy',
              description:
                'Espresso + Soya milk + Vanilla syrup + Pandan leaves',
              price: '75.000',
            },
            {
              name: 'Joyful',
              description: 'Espresso + Citron tea',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Plain Juice',
          items: [
            {
              name: 'Orange',
              description: 'Freshly squeezed orange juice',
              price: '75.000',
            },
            {
              name: 'Pineapple',
              description: 'Freshly squeezed pineapple juice',
              price: '75.000',
            },
            {
              name: 'Carrot',
              description: 'Freshly squeezed carrot juice',
              price: '75.000',
            },
            {
              name: 'Water Melon',
              description: 'Freshly squeezed watermelon juice',
              price: '75.000',
            },
            {
              name: 'Passion Fruit',
              description: 'Freshly squeezed passion fruit juice',
              price: '75.000',
            },
            {
              name: 'Cinnamon Lemon',
              description: 'Cinnamon and lemon juice blend',
              price: '75.000',
            },
            {
              name: 'Coconut',
              description: 'Fresh coconut juice',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Mixed Juice',
          items: [
            {
              name: 'Hey new day',
              description: 'Carrot, apple, lime, beetroot, ginger',
              price: '90.000',
            },
            {
              name: 'Refresher',
              description: 'Pineapple, watermelon, lime, mint leaves',
              price: '85.000',
            },
            {
              name: 'Body detox',
              description: 'Cucumber, apple, ginger, pineapple, lime',
              price: '90.000',
            },
            {
              name: 'Flu fighter',
              description: 'Carrot, orange, ginger',
              price: '85.000',
            },
            {
              name: 'Love your liver',
              description: 'Apple, cucumber, carrot, ginger, pineapple',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Extras',
          items: [
            {
              name: 'Any fruit',
              description: 'Add any fruit to your drink',
              price: '15.000',
            },
            { name: 'Ginger', description: 'Add ginger - free', price: '0' },
          ],
        },
      ],
    },

    ru: {
      title: 'Fefe Roastery',
      description:
        'Уютное кофейное пространство с премиум вьетнамским кофе, специальными эспрессо-напитками, смузи и свежими соками в очаровательной атмосфере.',
      fullDescription: `
<p>FeFe Roastery – это уютное пространство для любителей кофе.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Смузи',
          items: [
            {
              name: 'Манго',
              description: 'Гладкое и кремовое манговое блаженство',
              price: '85.000',
            },
            {
              name: 'Клубника',
              description: 'Свежий клубничный смузи',
              price: '85.000',
            },
            {
              name: 'Авокадо',
              description: 'Кремовое авокадо',
              price: '90.000',
            },
            {
              name: 'Восход',
              description: 'Ананас, манго, банан, семена чиа',
              price: '90.000',
            },
            {
              name: 'Полдень',
              description:
                'Клубника, банан, красный драконий фрукт, манго, семена чиа',
              price: '90.000',
            },
            {
              name: 'Сумерки',
              description: 'Ананас, банан, манго, авокадо',
              price: '90.000',
            },
            {
              name: 'Закат солнца',
              description: 'Авокадо, банан, мёд, натуральный йогурт',
              price: '90.000',
            },
            {
              name: 'Закат',
              description: 'Манго, ананас, маракуйя, банан',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Вьетнамский кофе',
          items: [
            {
              name: 'Чёрный кофе',
              description: 'Традиционный тёмный вьетнамский кофе',
              price: '50.000',
            },
            {
              name: 'Кофе со сгущённым молоком',
              description:
                'Классический вьетнамский стиль со сгущённым молоком',
              price: '55.000',
            },
            {
              name: 'Сайгон Чёрный',
              description: 'Насыщенный чёрный кофе',
              price: '55.000',
            },
            {
              name: 'Сайгон Коричневый',
              description: 'Светлый кофе с идеальным балансом',
              price: '65.000',
            },
            {
              name: 'Белый кофе',
              description: 'Лёгкий и гладкий вьетнамский белый кофе',
              price: '65.000',
            },
            {
              name: 'Кофе с яйцом',
              description:
                'Традиционная хойанская специальность с взбитым желтком',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Эспрессо',
          items: [
            {
              name: 'Эспрессо',
              description: 'Чистый выстрел эспрессо',
              price: '55.000',
            },
            {
              name: 'Американо',
              description: 'Эспрессо с горячей водой',
              price: '55.000',
            },
            {
              name: 'Макиато',
              description: 'Эспрессо со всплеском молока',
              price: '75.000',
            },
            {
              name: 'Капучино',
              description: 'Эспрессо с вспенённым молоком',
              price: '70.000',
            },
            {
              name: 'Латте',
              description: 'Эспрессо с вспенённым молоком',
              price: '75.000',
            },
            {
              name: 'Флэт Уайт',
              description: 'Эспрессо с нежным вспенённым молоком',
              price: '75.000',
            },
            {
              name: 'Бебиччино',
              description: 'Вспенённое молоко с какао для детей',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Ручной кофе',
          items: [
            {
              name: 'V60',
              description: 'Ручное капание в совершенстве',
              price: '105.000',
            },
            {
              name: 'Калита',
              description: 'Гладкое ручное заваривание',
              price: '105.000',
            },
            {
              name: 'Хемекс',
              description: 'Классический стеклянный сосуд для заваривания',
              price: '105.000',
            },
            {
              name: 'Сифон',
              description: 'Театральное вакуумное заваривание',
              price: '115.000',
            },
            {
              name: 'Ледяной капель',
              description:
                'Медленное холодное заваривание (или со свежим молоком)',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Матча',
          items: [
            {
              name: 'Матча латте',
              description: 'Матча + молоко на выбор + сахар (отдельно)',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Шоколад',
          items: [
            {
              name: 'Шоколад',
              description: 'Шоколад + молоко на выбор + сгущённое молоко',
              price: '70.000',
            },
          ],
        },
        {
          categoryName: 'Фирменные напитки',
          items: [
            {
              name: 'Солёный кофе',
              description: 'Кофе со сгущённым молоком + солёная пена',
              price: '65.000',
            },
            {
              name: 'Ора-Американо',
              description: 'Эспрессо + апельсин + сахар',
              price: '65.000',
            },
            {
              name: 'Hat De Mua He',
              description: 'Холодный кофе + свежее молоко + фундучный сироп',
              price: '75.000',
            },
            {
              name: 'Huong',
              description: 'Холодный кофе + лимонный сок + сахар + розмарин',
              price: '75.000',
            },
            {
              name: 'Кокосовое латте',
              description: 'Эспрессо + кокосовые сливки + сгущённое молоко',
              price: '75.000',
            },
            {
              name: 'Inesoy',
              description:
                'Эспрессо + соевое молоко + ванильный сироп + листья панданы',
              price: '75.000',
            },
            {
              name: 'Joyful',
              description: 'Эспрессо + чай цитрон',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Простые соки',
          items: [
            {
              name: 'Апельсин',
              description: 'Свежевыжатый апельсиновый сок',
              price: '75.000',
            },
            {
              name: 'Ананас',
              description: 'Свежевыжатый ананасовый сок',
              price: '75.000',
            },
            {
              name: 'Морковь',
              description: 'Свежевыжатый морковный сок',
              price: '75.000',
            },
            {
              name: 'Арбуз',
              description: 'Свежевыжатый арбузный сок',
              price: '75.000',
            },
            {
              name: 'Маракуйя',
              description: 'Свежевыжатый сок маракуйи',
              price: '75.000',
            },
            {
              name: 'Корица и лимон',
              description: 'Смесь корицы и лимонного сока',
              price: '75.000',
            },
            {
              name: 'Кокос',
              description: 'Свежий кокосовый сок',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Смешанные соки',
          items: [
            {
              name: 'Hey new day',
              description: 'Морковь, яблоко, лайм, свёкла, имбирь',
              price: '90.000',
            },
            {
              name: 'Refresher',
              description: 'Ананас, арбуз, лайм, листья мяты',
              price: '85.000',
            },
            {
              name: 'Body detox',
              description: 'Огурец, яблоко, имбирь, ананас, лайм',
              price: '90.000',
            },
            {
              name: 'Flu fighter',
              description: 'Морковь, апельсин, имбирь',
              price: '85.000',
            },
            {
              name: 'Love your liver',
              description: 'Яблоко, огурец, морковь, имбирь, ананас',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Добавки',
          items: [
            {
              name: 'Любой фрукт',
              description: 'Добавить любой фрукт к напитку',
              price: '15.000',
            },
            {
              name: 'Имбирь',
              description: 'Добавить имбирь - бесплатно',
              price: '0',
            },
          ],
        },
      ],
    },

    es: {
      title: 'Fefe Roastery',
      description:
        'Refugio sereno para amantes del café con café vietnamita premium, bebidas espresso especiales, batidos y jugos frescos en una atmósfera encantadora.',
      fullDescription: `
<p>FeFe Roastery es un refugio sereno para los amantes del café.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Batidos',
          items: [
            {
              name: 'Mango',
              description: 'Suave y cremoso deleite de mango',
              price: '85.000',
            },
            {
              name: 'Fresa',
              description: 'Batido fresco de fresa',
              price: '85.000',
            },
            {
              name: 'Aguacate',
              description: 'Delicia cremosa de aguacate',
              price: '90.000',
            },
            {
              name: 'Amanecer',
              description: 'Piña, mango, plátano, semillas de chía',
              price: '90.000',
            },
            {
              name: 'Mediodía',
              description:
                'Fresa, plátano, pitaya roja, mango, semillas de chía',
              price: '90.000',
            },
            {
              name: 'Crepúsculo',
              description: 'Piña, plátano, mango, aguacate',
              price: '90.000',
            },
            {
              name: 'Atardecer',
              description: 'Aguacate, plátano, miel, yogur natural',
              price: '90.000',
            },
            {
              name: 'Puesta de sol',
              description: 'Mango, piña, pasión, plátano',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Café Vietnamita',
          items: [
            {
              name: 'Café Negro',
              description: 'Café vietnamita tradicional de tueste oscuro',
              price: '50.000',
            },
            {
              name: 'Café con Leche Condensada',
              description: 'Estilo vietnamita clásico con leche condensada',
              price: '55.000',
            },
            {
              name: 'Saigón Negro',
              description: 'Café negro especialidad rico',
              price: '55.000',
            },
            {
              name: 'Saigón Marrón',
              description: 'Café marrón claro con balance perfecto',
              price: '65.000',
            },
            {
              name: 'Café Blanco',
              description: 'Café blanco vietnamita ligero y suave',
              price: '65.000',
            },
            {
              name: 'Café de Huevo',
              description: 'Especialidad tradicional de Hoi An con yema batida',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Espresso',
          items: [
            {
              name: 'Espresso',
              description: 'Tiro puro de espresso',
              price: '55.000',
            },
            {
              name: 'Americano',
              description: 'Espresso con agua caliente',
              price: '55.000',
            },
            {
              name: 'Macchiato',
              description: 'Espresso con salpicadura de leche',
              price: '75.000',
            },
            {
              name: 'Cappuccino',
              description: 'Espresso con leche vaporizada y espuma',
              price: '70.000',
            },
            {
              name: 'Latte',
              description: 'Espresso con leche vaporizada',
              price: '75.000',
            },
            {
              name: 'Flat White',
              description: 'Espresso con leche vaporizada aterciopelada',
              price: '75.000',
            },
            {
              name: 'Babyccino',
              description: 'Leche vaporizada con cacao para niños',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Café Manual',
          items: [
            {
              name: 'V60',
              description: 'Café de goteo manual perfecto',
              price: '105.000',
            },
            {
              name: 'Kalita',
              description: 'Preparación suave de goteo manual',
              price: '105.000',
            },
            {
              name: 'Chemex',
              description: 'Vaso de vidrio clásico para preparación',
              price: '105.000',
            },
            {
              name: 'Sifón',
              description: 'Preparación teatral de olla de vacío',
              price: '115.000',
            },
            {
              name: 'Goteo de Hielo',
              description: 'Método de infusión fría lenta (o con Leche Fresca)',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Matcha',
          items: [
            {
              name: 'Latte de Matcha',
              description: 'Matcha + leche de tu elección + azúcar (aparte)',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Chocolate',
          items: [
            {
              name: 'Chocolate',
              description:
                'Chocolate + leche de tu elección + leche condensada',
              price: '70.000',
            },
          ],
        },
        {
          categoryName: 'Bebidas Especiales',
          items: [
            {
              name: 'Café Salado',
              description: 'Café con leche condensada + Espuma salada',
              price: '65.000',
            },
            {
              name: 'Ora-Americano',
              description: 'Espresso + Naranja + Azúcar',
              price: '65.000',
            },
            {
              name: 'Hat De Mua He',
              description: 'Café frío + Leche fresca + Jarabe de avellana',
              price: '75.000',
            },
            {
              name: 'Huong',
              description: 'Café frío + Jugo de limón + Azúcar + Romero',
              price: '75.000',
            },
            {
              name: 'Latte de Coco',
              description: 'Espresso + Crema de coco + Leche condensada',
              price: '75.000',
            },
            {
              name: 'Inesoy',
              description:
                'Espresso + Leche de soja + Jarabe de vainilla + Hojas de pandan',
              price: '75.000',
            },
            {
              name: 'Joyful',
              description: 'Espresso + Té de cidra',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Jugo Puro',
          items: [
            {
              name: 'Naranja',
              description: 'Jugo de naranja recién exprimido',
              price: '75.000',
            },
            {
              name: 'Piña',
              description: 'Jugo de piña recién exprimido',
              price: '75.000',
            },
            {
              name: 'Zanahoria',
              description: 'Jugo de zanahoria recién exprimido',
              price: '75.000',
            },
            {
              name: 'Sandía',
              description: 'Jugo de sandía recién exprimido',
              price: '75.000',
            },
            {
              name: 'Pasión',
              description: 'Jugo de maracuyá recién exprimido',
              price: '75.000',
            },
            {
              name: 'Limón y Canela',
              description: 'Mezcla de jugo de canela y limón',
              price: '75.000',
            },
            {
              name: 'Coco',
              description: 'Jugo fresco de coco',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Jugo Mixto',
          items: [
            {
              name: 'Hey new day',
              description: 'Zanahoria, manzana, lima, remolacha, jengibre',
              price: '90.000',
            },
            {
              name: 'Refresher',
              description: 'Piña, sandía, lima, hojas de menta',
              price: '85.000',
            },
            {
              name: 'Body detox',
              description: 'Pepino, manzana, jengibre, piña, lima',
              price: '90.000',
            },
            {
              name: 'Flu fighter',
              description: 'Zanahoria, naranja, jengibre',
              price: '85.000',
            },
            {
              name: 'Love your liver',
              description: 'Manzana, pepino, zanahoria, jengibre, piña',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Extras',
          items: [
            {
              name: 'Cualquier fruta',
              description: 'Agregue cualquier fruta a su bebida',
              price: '15.000',
            },
            {
              name: 'Jengibre',
              description: 'Agregue jengibre - gratis',
              price: '0',
            },
          ],
        },
      ],
    },

    fr: {
      title: 'Fefe Roastery',
      description:
        'Havre serein pour les amateurs de café offrant du café vietnamien premium, des boissons espresso spécialisées, des smoothies et des jus frais dans une atmosphère charmante.',
      fullDescription: `
<p>FeFe Roastery est un havre serein pour les amateurs de café.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Smoothies',
          items: [
            {
              name: 'Mangue',
              description: 'Délice de mangue lisse et crémeux',
              price: '85.000',
            },
            {
              name: 'Fraise',
              description: 'Smoothie à la fraise frais',
              price: '85.000',
            },
            {
              name: 'Avocat',
              description: "Délice crémeux d'avocat",
              price: '90.000',
            },
            {
              name: 'Levée du soleil',
              description: 'Ananas, mangue, banane, graines de chia',
              price: '90.000',
            },
            {
              name: 'Midi',
              description:
                'Fraise, banane, fruit du dragon rouge, mangue, graines de chia',
              price: '90.000',
            },
            {
              name: 'Crépuscule',
              description: 'Ananas, banane, mangue, avocat',
              price: '90.000',
            },
            {
              name: 'Crépuscule',
              description: 'Avocat, banane, miel, yaourt nature',
              price: '90.000',
            },
            {
              name: 'Coucher de soleil',
              description: 'Mangue, ananas, passion, banane',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Café Vietnamien',
          items: [
            {
              name: 'Café Noir',
              description: 'Café vietnamien traditionnel à rôti foncé',
              price: '50.000',
            },
            {
              name: 'Café au Lait Condensé',
              description:
                'Style vietnamien classique avec lait condensé sucré',
              price: '55.000',
            },
            {
              name: 'Saigon Noir',
              description: 'Café noir riche spécialité',
              price: '55.000',
            },
            {
              name: 'Saigon Marron',
              description: 'Café marron clair avec équilibre parfait',
              price: '65.000',
            },
            {
              name: 'Café Blanc',
              description: 'Café blanc vietnamien léger et lisse',
              price: '65.000',
            },
            {
              name: 'Café aux Œufs',
              description:
                "Spécialité traditionnelle de Hoi An avec jaune d'œuf fouetté",
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Espresso',
          items: [
            {
              name: 'Espresso',
              description: "Coup pur d'espresso",
              price: '55.000',
            },
            {
              name: 'Americano',
              description: 'Espresso avec eau chaude',
              price: '55.000',
            },
            {
              name: 'Macchiato',
              description: 'Espresso avec trait de lait',
              price: '75.000',
            },
            {
              name: 'Cappuccino',
              description: 'Espresso avec lait vaporisé et mousse',
              price: '70.000',
            },
            {
              name: 'Latte',
              description: 'Espresso avec lait vaporisé',
              price: '75.000',
            },
            {
              name: 'Flat White',
              description: 'Espresso avec lait vaporisé velouté',
              price: '75.000',
            },
            {
              name: 'Babyccino',
              description: 'Lait vaporisé avec cacao pour enfants',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Café Manuel',
          items: [
            {
              name: 'V60',
              description: 'Café versé à la main parfait',
              price: '105.000',
            },
            {
              name: 'Kalita',
              description: 'Brassage versé à la main lisse',
              price: '105.000',
            },
            {
              name: 'Chemex',
              description: 'Verre classique pour le brassage',
              price: '105.000',
            },
            {
              name: 'Siphon',
              description: 'Brassage théâtral en pot à vide',
              price: '115.000',
            },
            {
              name: 'Goutte de Glace',
              description:
                "Méthode d'infusion froide lente (ou avec Lait Frais)",
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Matcha',
          items: [
            {
              name: 'Latte Matcha',
              description: 'Matcha + lait de votre choix + sucre (séparé)',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Chocolat',
          items: [
            {
              name: 'Chocolat',
              description: 'Chocolat + lait de votre choix + lait condensé',
              price: '70.000',
            },
          ],
        },
        {
          categoryName: 'Boissons Signature',
          items: [
            {
              name: 'Café Salé',
              description: 'Café avec lait condensé + Mousse salée',
              price: '65.000',
            },
            {
              name: 'Ora-Americano',
              description: 'Espresso + Orange + Sucre',
              price: '65.000',
            },
            {
              name: 'Hat De Mua He',
              description: 'Infusion froide + Lait frais + Sirop de noisette',
              price: '75.000',
            },
            {
              name: 'Huong',
              description: 'Infusion froide + Jus de citron + Sucre + Romarin',
              price: '75.000',
            },
            {
              name: 'Latte Coco',
              description: 'Espresso + Crème de coco + Lait condensé',
              price: '75.000',
            },
            {
              name: 'Inesoy',
              description:
                'Espresso + Lait de soja + Sirop vanille + Feuilles de pandan',
              price: '75.000',
            },
            {
              name: 'Joyful',
              description: 'Espresso + Thé citron',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Jus Pur',
          items: [
            {
              name: 'Orange',
              description: "Jus d'orange fraîchement pressé",
              price: '75.000',
            },
            {
              name: 'Ananas',
              description: "Jus d'ananas fraîchement pressé",
              price: '75.000',
            },
            {
              name: 'Carotte',
              description: 'Jus de carotte fraîchement pressé',
              price: '75.000',
            },
            {
              name: 'Pastèque',
              description: 'Jus de pastèque fraîchement pressé',
              price: '75.000',
            },
            {
              name: 'Passion',
              description: 'Jus de passion fraîchement pressé',
              price: '75.000',
            },
            {
              name: 'Citron Cannelle',
              description: 'Mélange de jus de cannelle et citron',
              price: '75.000',
            },
            { name: 'Coco', description: 'Jus de coco frais', price: '75.000' },
          ],
        },
        {
          categoryName: 'Jus Mixte',
          items: [
            {
              name: 'Hey new day',
              description: 'Carotte, pomme, citron vert, betterave, gingembre',
              price: '90.000',
            },
            {
              name: 'Refresher',
              description: 'Ananas, pastèque, citron vert, feuilles de menthe',
              price: '85.000',
            },
            {
              name: 'Body detox',
              description: 'Concombre, pomme, gingembre, ananas, citron vert',
              price: '90.000',
            },
            {
              name: 'Flu fighter',
              description: 'Carotte, orange, gingembre',
              price: '85.000',
            },
            {
              name: 'Love your liver',
              description: 'Pomme, concombre, carotte, gingembre, ananas',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Extras',
          items: [
            {
              name: "N'importe quel fruit",
              description: "Ajouter n'importe quel fruit à votre boisson",
              price: '15.000',
            },
            {
              name: 'Gingembre',
              description: 'Ajouter du gingembre - gratuit',
              price: '0',
            },
          ],
        },
      ],
    },

    vn: {
      title: 'Fefe Roastery',
      description:
        'Không gian cà phê yên tĩnh với cà phê Việt cao cấp, đồ uống espresso đặc biệt, sinh tố và nước ép tươi trong bầu không khí quyến rũ.',
      fullDescription: `
<p>FeFe Roastery là không gian yên tĩnh cho những người yêu cà phê.</p>
    `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Sinh Tố',
          items: [
            {
              name: 'Xoài',
              description: 'Sinh tố xoài mềm mại và kem',
              price: '85.000',
            },
            {
              name: 'Dâu Tây',
              description: 'Sinh tố dâu tây tươi',
              price: '85.000',
            },
            { name: 'Bơ', description: 'Sinh tố bơ kem', price: '90.000' },
            {
              name: 'Mặt Trời Mọc',
              description: 'Dứa, xoài, chuối, hạt chia',
              price: '90.000',
            },
            {
              name: 'Buổi Trưa',
              description: 'Dâu tây, chuối, thanh long đỏ, xoài, hạt chia',
              price: '90.000',
            },
            {
              name: 'Chạng Vạng',
              description: 'Dứa, chuối, xoài, bơ',
              price: '90.000',
            },
            {
              name: 'Hoàng Hôn',
              description: 'Bơ, chuối, mật ong, sữa chua tự nhiên',
              price: '90.000',
            },
            {
              name: 'Lặn Dương',
              description: 'Xoài, dứa, chanh dây, chuối',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Cà Phê Việt Nam',
          items: [
            {
              name: 'Cà Phê Đen',
              description: 'Cà phê Việt truyền thống rang tối',
              price: '50.000',
            },
            {
              name: 'Cà Phê Sữa Đặc',
              description: 'Phong cách Việt cổ điển với sữa đặc ngọt',
              price: '55.000',
            },
            {
              name: 'Sài Gòn Đen',
              description: 'Cà phê đen giàu đặc biệt',
              price: '55.000',
            },
            {
              name: 'Sài Gòn Nâu',
              description: 'Cà phê nâu nhạt với cân bằng hoàn hảo',
              price: '65.000',
            },
            {
              name: 'Cà Phê Trắng',
              description: 'Cà phê trắng Việt nhẹ và mịn',
              price: '65.000',
            },
            {
              name: 'Cà Phê Trứng',
              description:
                'Đặc sản truyền thống Hội An với lòng đỏ trứng đánh bông',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Espresso',
          items: [
            {
              name: 'Espresso',
              description: 'Một phát đơn espresso',
              price: '55.000',
            },
            {
              name: 'Americano',
              description: 'Espresso với nước nóng',
              price: '55.000',
            },
            {
              name: 'Macchiato',
              description: 'Espresso với một chút sữa',
              price: '75.000',
            },
            {
              name: 'Cappuccino',
              description: 'Espresso với sữa nóng và bọt',
              price: '70.000',
            },
            {
              name: 'Latte',
              description: 'Espresso với sữa nóng',
              price: '75.000',
            },
            {
              name: 'Flat White',
              description: 'Espresso với sữa nóng nhung',
              price: '75.000',
            },
            {
              name: 'Babyccino',
              description: 'Sữa nóng với ca cao cho trẻ em',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Cà Phê Thủ Công',
          items: [
            {
              name: 'V60',
              description: 'Cà phê damit tay hoàn hảo',
              price: '105.000',
            },
            {
              name: 'Kalita',
              description: 'Pha chế damit tay mịn',
              price: '105.000',
            },
            {
              name: 'Chemex',
              description: 'Bình thủy tinh cổ điển để pha chế',
              price: '105.000',
            },
            {
              name: 'Syphon',
              description: 'Pha chế bình chân không sân khấu',
              price: '115.000',
            },
            {
              name: 'Giọt Nước Đá',
              description: 'Phương pháp pha chế lạnh chậm (hoặc với Sữa Tươi)',
              price: '105.000',
            },
          ],
        },
        {
          categoryName: 'Matcha',
          items: [
            {
              name: 'Matcha Latte',
              description: 'Matcha + sữa tùy chọn + đường (riêng)',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Sôcôla',
          items: [
            {
              name: 'Sôcôla',
              description: 'Sôcôla + sữa tùy chọn + sữa đặc',
              price: '70.000',
            },
          ],
        },
        {
          categoryName: 'Đồ Uống Đặc Biệt',
          items: [
            {
              name: 'Cà Phê Mặn',
              description: 'Cà phê với sữa đặc + Bọt mặn',
              price: '65.000',
            },
            {
              name: 'Ora-Americano',
              description: 'Espresso + Cam + Đường',
              price: '65.000',
            },
            {
              name: 'Hat De Mua He',
              description: 'Pha lạnh + Sữa tươi + Siro hạt dẻ',
              price: '75.000',
            },
            {
              name: 'Huong',
              description: 'Pha lạnh + Nước chanh + Đường + Cây hương thảo',
              price: '75.000',
            },
            {
              name: 'Latte Dừa',
              description: 'Espresso + Kem dừa + Sữa đặc',
              price: '75.000',
            },
            {
              name: 'Inesoy',
              description: 'Espresso + Sữa đậu nành + Siro vani + Lá pandan',
              price: '75.000',
            },
            {
              name: 'Joyful',
              description: 'Espresso + Trà citron',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Nước Ép Tinh Khiết',
          items: [
            {
              name: 'Cam',
              description: 'Nước ép cam vắt tươi',
              price: '75.000',
            },
            {
              name: 'Dứa',
              description: 'Nước ép dứa vắt tươi',
              price: '75.000',
            },
            {
              name: 'Cà Rốt',
              description: 'Nước ép cà rốt vắt tươi',
              price: '75.000',
            },
            {
              name: 'Dưa Hấu',
              description: 'Nước ép dưa hấu vắt tươi',
              price: '75.000',
            },
            {
              name: 'Chanh Dây',
              description: 'Nước ép chanh dây vắt tươi',
              price: '75.000',
            },
            {
              name: 'Quế & Chanh',
              description: 'Hỗn hợp nước ép quế và chanh',
              price: '75.000',
            },
            { name: 'Dừa', description: 'Nước dừa tươi', price: '75.000' },
          ],
        },
        {
          categoryName: 'Nước Ép Trộn',
          items: [
            {
              name: 'Hey new day',
              description: 'Cà rốt, táo, chanh, cà chua đỏ, gừng',
              price: '90.000',
            },
            {
              name: 'Refresher',
              description: 'Dứa, dưa hấu, chanh, lá bạc hà',
              price: '85.000',
            },
            {
              name: 'Body detox',
              description: 'Dưa chuột, táo, gừng, dứa, chanh',
              price: '90.000',
            },
            {
              name: 'Flu fighter',
              description: 'Cà rốt, cam, gừng',
              price: '85.000',
            },
            {
              name: 'Love your liver',
              description: 'Táo, dưa chuột, cà rốt, gừng, dứa',
              price: '90.000',
            },
          ],
        },
        {
          categoryName: 'Bổ Sung',
          items: [
            {
              name: 'Bất Kỳ Trái Cây',
              description: 'Thêm bất kỳ trái cây nào vào đồ uống của bạn',
              price: '15.000',
            },
            { name: 'Gừng', description: 'Thêm gừng - miễn phí', price: '0' },
          ],
        },
      ],
    },

    slug: {
      en: 'fefe-roastery',
      ru: 'fefe-roastery-kofeynya',
      es: 'fefe-roastery',
      fr: 'fefe-roastery',
      vn: 'fefe-roastery',
    },
  },
  //Sinh To Tam
  {
    id: 'sinh-to-tam', // <-- ID теперь строковый
    coordinates: [15.88333331732692, 108.3501025836399], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'sinh_to_tam.webp',
    en: {
      title: 'Sinh To Tam',
      description: 'Vibrant local cafe located in Hoi An',
      fullDescription: `
<p>Sinh To Tam is a vibrant local cafe located in Hoi An, known for its fresh juices and delicious vegetarian Bahn Mi options. With a friendly atmosphere and attentive staff, it has become a favorite spot for both locals and tourists seeking healthy, flavorful drinks and meals.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Coffee',
          items: [
            {
              name: 'Black Coffee',
              description: 'Traditional Vietnamese black coffee',
              price: '15.000 / 20.000',
            },
            {
              name: 'Milk Coffee',
              description: 'Vietnamese coffee with condensed milk',
              price: '20.000 / 25.000',
            },
            {
              name: 'Salt Coffee',
              description: 'Coffee with salted cream',
              price: '25.000 / 30.000',
            },
            {
              name: 'Coconut Coffee',
              description: 'Coffee with coconut flavour',
              price: '25.000 / 30.000',
            },
            {
              name: 'White Coffee',
              description: 'Light and creamy white coffee',
              price: '20.000 / 25.000',
            },
            {
              name: 'Salt White Coffee',
              description: 'White coffee with salted cream',
              price: '20.000 / 25.000',
            },
            {
              name: 'Salt Cacao',
              description: 'Cacao drink with salted cream',
              price: '20.000 / 25.000',
            },
            {
              name: 'Coffee with Almond & Fresh Milk',
              description: 'Coffee with almond and fresh milk',
              price: '20.000 / 25.000',
            },
            {
              name: 'Hot Ginger Tea',
              description: 'Warm ginger tea with honey',
              price: '20.000 / 25.000',
            },
            {
              name: 'Avocado Cream Coffee',
              description: 'Coffee with avocado cream',
              price: '30.000 / 35.000',
            },
            {
              name: 'Durian Avocado Cream Coffee',
              description: 'Coffee with durian and avocado cream',
              price: '35.000 / 40.000',
            },
          ],
        },
        {
          categoryName: 'Fresh Drinks',
          items: [
            {
              name: 'Lime Juice',
              description: 'Fresh lime juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Passion Fruit Juice',
              description: 'Fresh passion fruit juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Salt Lime Juice',
              description: 'Lime juice with salt',
              price: '20.000 / 25.000',
            },
            {
              name: 'Coconut Water',
              description: 'Fresh coconut water',
              price: '20.000 / 25.000',
            },
            {
              name: 'Pennywort Juice',
              description: 'Fresh pennywort juice',
              price: '15.000 / 20.000',
            },
            {
              name: 'Ambarella Juice',
              description: 'Fresh ambarella juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Carrot Juice',
              description: 'Fresh carrot juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Tomato Juice',
              description: 'Fresh tomato juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Apple Juice',
              description: 'Fresh apple juice',
              price: '30.000 / 35.000',
            },
            {
              name: 'Pomegranate Juice',
              description: 'Fresh pomegranate juice',
              price: '30.000 / 35.000',
            },
            {
              name: 'Watermelon Juice',
              description: 'Fresh watermelon juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Guava Juice',
              description: 'Fresh guava juice',
              price: '20.000 / 25.000',
            },
            {
              name: 'Corn Milk Juice',
              description: 'Sweet corn milk drink',
              price: '20.000 / 25.000',
            },
            {
              name: 'Carrot & Ginger Juice',
              description: 'Carrot juice with ginger',
              price: '25.000 / 30.000',
            },
            {
              name: 'Pineapple Juice',
              description: 'Fresh pineapple juice',
              price: '25.000 / 30.000',
            },
            {
              name: 'Fresh Passion Fruit Juice',
              description: 'Passion fruit with pineapple',
              price: '25.000 / 30.000',
            },
          ],
        },
        {
          categoryName: 'Smoothies',
          items: [
            {
              name: 'Blended Mixed Fruits',
              description: 'Mixed fruit smoothie',
              price: '25.000 / 30.000',
            },
            {
              name: 'Mixed Fruit Beans',
              description: 'Mixed fruit smoothie with beans',
              price: '25.000 / 30.000',
            },
            {
              name: 'Avocado Beams',
              description: 'Avocado smoothie with beans',
              price: '30.000 / 35.000',
            },
            {
              name: 'Avocado Smoothie',
              description: 'Creamy avocado smoothie',
              price: '30.000 / 35.000',
            },
            {
              name: 'Avocado Durian',
              description: 'Avocado smoothie with durian',
              price: '35.000 / 40.000',
            },
            {
              name: 'Young Coconut Smoothie',
              description: 'Smoothie with young coconut',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sapodilla Beams',
              description: 'Sapodilla smoothie with beans',
              price: '25.000 / 30.000',
            },
            {
              name: 'Sapodilla Smoothie',
              description: 'Smooth sapodilla smoothie',
              price: '25.000 / 30.000',
            },
            {
              name: 'Avocado Mango Smoothie',
              description: 'Avocado and mango mix',
              price: '30.000 / 35.000',
            },
            {
              name: 'Coconut Milk Smoothie',
              description: 'Smoothie with coconut milk',
              price: '25.000 / 30.000',
            },
            {
              name: 'Potato and Coconut Milk',
              description: 'Purple potato with coconut milk',
              price: '30.000 / 35.000',
            },
            {
              name: 'Coconut Durian Smoothie',
              description: 'Coconut and durian smoothie',
              price: '35.000 / 40.000',
            },
            {
              name: 'Strawberry Yogurt',
              description: 'Yogurt with strawberry',
              price: '30.000 / 35.000',
            },
            {
              name: 'Banana Yogurt',
              description: 'Yogurt with banana',
              price: '25.000 / 30.000',
            },
            {
              name: 'Avocado Yogurt',
              description: 'Yogurt with avocado',
              price: '30.000 / 35.000',
            },
            {
              name: 'Mango Yogurt',
              description: 'Yogurt with mango',
              price: '30.000 / 35.000',
            },
          ],
        },
        {
          categoryName: 'Milk Tea',
          items: [
            {
              name: 'Apple Milk Tea',
              description: 'Apple-flavoured milk tea',
              price: '20.000 / 25.000',
            },
            {
              name: 'Chocolate Milk Tea',
              description: 'Chocolate-flavoured milk tea',
              price: '20.000 / 25.000',
            },
            {
              name: 'Kiwi Milk Tea',
              description: 'Kiwi-flavoured milk tea',
              price: '20.000 / 25.000',
            },
            {
              name: 'Mint Milk Tea',
              description: 'Mint-flavoured milk tea',
              price: '20.000 / 25.000',
            },
            {
              name: 'Pandan Milk Tea',
              description: 'Pandan-flavoured milk tea',
              price: '20.000 / 25.000',
            },
            {
              name: 'Peach Tea',
              description: 'Refreshing peach tea',
              price: '20.000 / 25.000',
            },
            {
              name: 'Lemongrass Peach Tea',
              description: 'Peach tea with lemongrass',
              price: '20.000 / 25.000',
            },
            {
              name: 'Lemon Tea',
              description: 'Iced lemon tea',
              price: '20.000 / 25.000',
            },
          ],
        },
        {
          categoryName: 'Specials',
          items: [
            {
              name: 'Ginger Shot 100ml',
              description: 'Concentrated ginger shot',
              price: '25.000',
            },
            {
              name: 'Yogurt with Mixed Fruits',
              description: 'Fruit and seed yogurt cup',
              price: '40.000',
            },
          ],
        },
      ],
    },

    ru: {
      title: 'Sinh To Tam',
      description:
        'Яркое местное кафе, известное свежими соками и вегетарианскими бань ми',
      fullDescription: `
<p>Sinh To Tam — это яркое местное кафе в Хойане, известное своими свежевыжатыми соками и вкусными вегетарианскими бань ми. Дружелюбная атмосфера и внимательный персонал сделали его любимым местом отдыха как для местных жителей, так и для туристов, ищущих полезные и вкусные блюда и напитки.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Кофе',
          items: [
            {
              name: 'Черный кофе',
              description: 'Традиционный вьетнамский черный кофе',
              price: '15.000 / 20.000',
            },
            {
              name: 'Кофе с сгущенным молоком',
              description: 'Вьетнамский кофе со сладким сгущенным молоком',
              price: '20.000 / 25.000',
            },
            {
              name: 'Соленый кофе',
              description: 'Кофе с соленой сливочной пенкой',
              price: '25.000 / 30.000',
            },
            {
              name: 'Кокосовый кофе',
              description: 'Кофе с кокосовым вкусом',
              price: '25.000 / 30.000',
            },
            {
              name: 'Белый кофе',
              description: 'Мягкий и сливочный белый кофе',
              price: '20.000 / 25.000',
            },
            {
              name: 'Белый кофе с солью',
              description: 'Белый кофе с соленой пенкой',
              price: '20.000 / 25.000',
            },
            {
              name: 'Какао с солью',
              description: 'Напиток какао с соленой сливочной пенкой',
              price: '20.000 / 25.000',
            },
            {
              name: 'Кофе с миндалем и свежим молоком',
              description: 'Кофе с миндалем и свежим молоком',
              price: '20.000 / 25.000',
            },
            {
              name: 'Горячий имбирный чай',
              description: 'Горячий имбирный чай с медом',
              price: '20.000 / 25.000',
            },
            {
              name: 'Кофе с авокадо-кремом',
              description: 'Кофе с кремом из авокадо',
              price: '30.000 / 35.000',
            },
            {
              name: 'Кофе с дурианом и авокадо',
              description: 'Кофе с кремом из дуриана и авокадо',
              price: '35.000 / 40.000',
            },
          ],
        },
        {
          categoryName: 'Прохладительные напитки',
          items: [
            {
              name: 'Лимонад',
              description: 'Свежевыжатый сок лайма',
              price: '20.000 / 25.000',
            },
            {
              name: 'Маракуйя',
              description: 'Свежевыжатый сок маракуйи',
              price: '20.000 / 25.000',
            },
            {
              name: 'Лайм с солью',
              description: 'Свежий лайм с солью',
              price: '20.000 / 25.000',
            },
            {
              name: 'Кокосовая вода',
              description: 'Свежая кокосовая вода',
              price: '20.000 / 25.000',
            },
            {
              name: 'Сок центеллы',
              description: 'Свежий сок из центеллы азиатской',
              price: '15.000 / 20.000',
            },
            {
              name: 'Сок амбареллы',
              description: 'Свежий сок из амбареллы',
              price: '20.000 / 25.000',
            },
            {
              name: 'Морковь',
              description: 'Свежевыжатый морковный сок',
              price: '20.000 / 25.000',
            },
            {
              name: 'Томатный сок',
              description: 'Свежий томатный сок',
              price: '20.000 / 25.000',
            },
            {
              name: 'Яблочный сок',
              description: 'Свежевыжатый яблочный сок',
              price: '30.000 / 35.000',
            },
            {
              name: 'Гранатовый сок',
              description: 'Свежий гранатовый сок',
              price: '30.000 / 35.000',
            },
            {
              name: 'Арбузный сок',
              description: 'Свежевыжатый сок арбуза',
              price: '20.000 / 25.000',
            },
            {
              name: 'Сок гуавы',
              description: 'Свежий сок гуавы',
              price: '20.000 / 25.000',
            },
            {
              name: 'Кукурузный напиток',
              description: 'Сладкий напиток из кукурузного молока',
              price: '20.000 / 25.000',
            },
            {
              name: 'Морковь с имбирем',
              description: 'Свежий морковный сок с имбирем',
              price: '25.000 / 30.000',
            },
            {
              name: 'Ананасовый сок',
              description: 'Свежевыжатый сок ананаса',
              price: '25.000 / 30.000',
            },
            {
              name: 'Маракуйя с ананасом',
              description: 'Маракуйя в сочетании с ананасом',
              price: '25.000 / 30.000',
            },
          ],
        },
        {
          categoryName: 'Смузи',
          items: [
            {
              name: 'Смузи из микса фруктов',
              description: 'Смузи из различных фруктов',
              price: '25.000 / 30.000',
            },
            {
              name: 'Смузи фрукты с бобами',
              description: 'Фруктовый смузи с бобами',
              price: '25.000 / 30.000',
            },
            {
              name: 'Смузи авокадо с бобами',
              description: 'Кремовый смузи из авокадо с бобами',
              price: '30.000 / 35.000',
            },
            {
              name: 'Смузи авокадо',
              description: 'Кремовый смузи из авокадо',
              price: '30.000 / 35.000',
            },
            {
              name: 'Смузи авокадо с дурианом',
              description: 'Смузи из авокадо с дурианом',
              price: '35.000 / 40.000',
            },
            {
              name: 'Смузи из молодого кокоса',
              description: 'Смузи из молодого кокоса',
              price: '30.000 / 35.000',
            },
            {
              name: 'Саподилла с бобами',
              description: 'Смузи из саподиллы с бобами',
              price: '25.000 / 30.000',
            },
            {
              name: 'Смузи саподилла',
              description: 'Нежный смузи из саподиллы',
              price: '25.000 / 30.000',
            },
            {
              name: 'Смузи авокадо с манго',
              description: 'Микс авокадо и манго',
              price: '30.000 / 35.000',
            },
            {
              name: 'Смузи на кокосовом молоке',
              description: 'Смузи с кокосовым молоком',
              price: '25.000 / 30.000',
            },
            {
              name: 'Фиолетовый батат с кокосом',
              description: 'Фиолетовый батат с кокосовым молоком',
              price: '30.000 / 35.000',
            },
            {
              name: 'Смузи кокос с дурианом',
              description: 'Смузи из кокоса и дуриана',
              price: '35.000 / 40.000',
            },
            {
              name: 'Йогурт с клубникой',
              description: 'Йогурт с кусочками клубники',
              price: '30.000 / 35.000',
            },
            {
              name: 'Йогурт с бананом',
              description: 'Йогурт с бананом',
              price: '25.000 / 30.000',
            },
            {
              name: 'Йогурт с авокадо',
              description: 'Йогурт с кремовым авокадо',
              price: '30.000 / 35.000',
            },
            {
              name: 'Йогурт с манго',
              description: 'Йогурт со свежим манго',
              price: '30.000 / 35.000',
            },
          ],
        },
        {
          categoryName: 'Молочный чай',
          items: [
            {
              name: 'Молочный чай с яблоком',
              description: 'Молочный чай со вкусом яблока',
              price: '20.000 / 25.000',
            },
            {
              name: 'Молочный чай с шоколадом',
              description: 'Молочный чай со вкусом шоколада',
              price: '20.000 / 25.000',
            },
            {
              name: 'Молочный чай с киви',
              description: 'Молочный чай со вкусом киви',
              price: '20.000 / 25.000',
            },
            {
              name: 'Молочный чай с мятой',
              description: 'Молочный чай со вкусом мяты',
              price: '20.000 / 25.000',
            },
            {
              name: 'Молочный чай с панданом',
              description: 'Молочный чай со вкусом листа пандана',
              price: '20.000 / 25.000',
            },
            {
              name: 'Персиковый чай',
              description: 'Освежающий персиковый чай',
              price: '20.000 / 25.000',
            },
            {
              name: 'Персиковый чай с лемонграссом',
              description: 'Персиковый чай с лемонграссом',
              price: '20.000 / 25.000',
            },
            {
              name: 'Лимонный чай',
              description: 'Холодный чай с лимоном',
              price: '20.000 / 25.000',
            },
          ],
        },
        {
          categoryName: 'Специальные предложения',
          items: [
            {
              name: 'Имбирный шот 100 мл',
              description: 'Концентрированный шот из имбиря',
              price: '25.000',
            },
            {
              name: 'Йогурт с фруктами и семенами',
              description: 'Стаканчик йогурта с миксом фруктов и семян',
              price: '40.000',
            },
          ],
        },
      ],
    },

    es: {
      title: 'Sinh To Tam',
      description:
        'Café local vibrante conocido por sus jugos frescos y Banh Mi vegetarianos',
      fullDescription: `
<p>Sinh To Tam es un café local muy animado en Hoi An, conocido por sus jugos frescos y deliciosas opciones de Banh Mi vegetarianos. Con un ambiente amigable y un personal atento, se ha convertido en un lugar favorito tanto para los locales como para los turistas que buscan comidas y bebidas saludables y sabrosas.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Café',
          items: [
            {
              name: 'Café negro',
              description: 'Café vietnamita negro tradicional',
              price: '15.000 / 20.000',
            },
            {
              name: 'Café con leche condensada',
              description: 'Café vietnamita con leche condensada dulce',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café con sal',
              description: 'Café con crema salada',
              price: '25.000 / 30.000',
            },
            {
              name: 'Café de coco',
              description: 'Café con sabor a coco',
              price: '25.000 / 30.000',
            },
            {
              name: 'Café blanco',
              description: 'Café blanco suave y cremoso',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café blanco con sal',
              description: 'Café blanco con crema salada',
              price: '20.000 / 25.000',
            },
            {
              name: 'Cacao con sal',
              description: 'Bebida de cacao con crema salada',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café con almendra y leche fresca',
              description: 'Café con almendra y leche fresca',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té caliente de jengibre',
              description: 'Té de jengibre caliente con miel',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café con crema de aguacate',
              description: 'Café con crema de aguacate',
              price: '30.000 / 35.000',
            },
            {
              name: 'Café con durián y aguacate',
              description: 'Café con crema de durián y aguacate',
              price: '35.000 / 40.000',
            },
          ],
        },
        {
          categoryName: 'Bebidas frescas',
          items: [
            {
              name: 'Zumo de lima',
              description: 'Zumo de lima fresco',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de fruta de la pasión',
              description: 'Zumo de maracuyá fresco',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de lima con sal',
              description: 'Lima fresca con sal',
              price: '20.000 / 25.000',
            },
            {
              name: 'Agua de coco',
              description: 'Agua de coco fresca',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de centella asiática',
              description: 'Zumo fresco de centella asiática',
              price: '15.000 / 20.000',
            },
            {
              name: 'Zumo de ciruela ambarella',
              description: 'Zumo fresco de ambarella',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de zanahoria',
              description: 'Zumo de zanahoria recién exprimido',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de tomate',
              description: 'Zumo de tomate fresco',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de manzana',
              description: 'Zumo de manzana fresco',
              price: '30.000 / 35.000',
            },
            {
              name: 'Zumo de granada',
              description: 'Zumo de granada fresco',
              price: '30.000 / 35.000',
            },
            {
              name: 'Zumo de sandía',
              description: 'Zumo de sandía fresco',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de guayaba',
              description: 'Zumo de guayaba fresco',
              price: '20.000 / 25.000',
            },
            {
              name: 'Bebida de leche de maíz',
              description: 'Bebida dulce de leche de maíz',
              price: '20.000 / 25.000',
            },
            {
              name: 'Zumo de zanahoria y jengibre',
              description: 'Zanahoria fresca con jengibre',
              price: '25.000 / 30.000',
            },
            {
              name: 'Zumo de piña',
              description: 'Zumo de piña recién exprimido',
              price: '25.000 / 30.000',
            },
            {
              name: 'Zumo de maracuyá y piña',
              description: 'Maracuyá combinado con piña',
              price: '25.000 / 30.000',
            },
          ],
        },
        {
          categoryName: 'Batidos',
          items: [
            {
              name: 'Batido de frutas mixtas',
              description: 'Batido de frutas variadas',
              price: '25.000 / 30.000',
            },
            {
              name: 'Batido de frutas y frijoles',
              description: 'Batido de frutas mixtas con frijoles',
              price: '25.000 / 30.000',
            },
            {
              name: 'Batido de aguacate con frijoles',
              description: 'Batido cremoso de aguacate con frijoles',
              price: '30.000 / 35.000',
            },
            {
              name: 'Batido de aguacate',
              description: 'Batido de aguacate cremoso',
              price: '30.000 / 35.000',
            },
            {
              name: 'Batido de aguacate y durián',
              description: 'Batido de aguacate con durián',
              price: '35.000 / 40.000',
            },
            {
              name: 'Batido de coco tierno',
              description: 'Batido de coco joven',
              price: '30.000 / 35.000',
            },
            {
              name: 'Batido de sapodilla con frijoles',
              description: 'Batido de zapote con frijoles',
              price: '25.000 / 30.000',
            },
            {
              name: 'Batido de sapodilla',
              description: 'Batido suave de zapote',
              price: '25.000 / 30.000',
            },
            {
              name: 'Batido de aguacate y mango',
              description: 'Mezcla de aguacate y mango',
              price: '30.000 / 35.000',
            },
            {
              name: 'Batido de leche de coco',
              description: 'Batido con leche de coco',
              price: '25.000 / 30.000',
            },
            {
              name: 'Batido de boniato morado y coco',
              description: 'Boniato morado con leche de coco',
              price: '30.000 / 35.000',
            },
            {
              name: 'Batido de coco y durián',
              description: 'Batido de coco con durián',
              price: '35.000 / 40.000',
            },
            {
              name: 'Yogur con fresa',
              description: 'Yogur con trozos de fresa',
              price: '30.000 / 35.000',
            },
            {
              name: 'Yogur con plátano',
              description: 'Yogur con plátano',
              price: '25.000 / 30.000',
            },
            {
              name: 'Yogur con aguacate',
              description: 'Yogur con aguacate cremoso',
              price: '30.000 / 35.000',
            },
            {
              name: 'Yogur con mango',
              description: 'Yogur con mango fresco',
              price: '30.000 / 35.000',
            },
          ],
        },
        {
          categoryName: 'Té con leche',
          items: [
            {
              name: 'Té con leche de manzana',
              description: 'Té con leche sabor manzana',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té con leche de chocolate',
              description: 'Té con leche sabor chocolate',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té con leche de kiwi',
              description: 'Té con leche sabor kiwi',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té con leche de menta',
              description: 'Té con leche sabor menta',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té con leche de pandan',
              description: 'Té con leche sabor hoja de pandan',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té de durazno',
              description: 'Refrescante té de durazno',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té de durazno con hierba de limón',
              description: 'Té de durazno con citronela',
              price: '20.000 / 25.000',
            },
            {
              name: 'Té de limón',
              description: 'Té helado de limón',
              price: '20.000 / 25.000',
            },
          ],
        },
        {
          categoryName: 'Especiales',
          items: [
            {
              name: 'Ginger Shot 100 ml',
              description: 'Chupito concentrado de jengibre',
              price: '25.000',
            },
            {
              name: 'Yogur con frutas mixtas',
              description: 'Vasito de yogur con frutas y semillas',
              price: '40.000',
            },
          ],
        },
      ],
    },

    fr: {
      title: 'Sinh To Tam',
      description:
        'Café local animé, connu pour ses jus frais et ses Banh Mi végétariens',
      fullDescription: `
<p>Sinh To Tam est un café local animé situé à Hoi An, réputé pour ses jus frais et ses délicieux Banh Mi végétariens. Grâce à son atmosphère conviviale et à son personnel attentionné, il est devenu un lieu apprécié des habitants comme des visiteurs à la recherche de repas et de boissons sains et savoureux.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Café',
          items: [
            {
              name: 'Café noir',
              description: 'Café vietnamien noir traditionnel',
              price: '15.000 / 20.000',
            },
            {
              name: 'Café au lait concentré',
              description: 'Café vietnamien avec lait concentré sucré',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café salé',
              description: 'Café avec crème salée',
              price: '25.000 / 30.000',
            },
            {
              name: 'Café à la noix de coco',
              description: 'Café parfumé à la noix de coco',
              price: '25.000 / 30.000',
            },
            {
              name: 'Café blanc',
              description: 'Café blanc doux et crémeux',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café blanc salé',
              description: 'Café blanc avec crème salée',
              price: '20.000 / 25.000',
            },
            {
              name: 'Cacao salé',
              description: 'Boisson au cacao avec crème salée',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café aux amandes et lait frais',
              description: 'Café avec amandes et lait frais',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé chaud au gingembre',
              description: 'Thé chaud au gingembre avec miel',
              price: '20.000 / 25.000',
            },
            {
              name: 'Café crème à l’avocat',
              description: 'Café avec crème d’avocat',
              price: '30.000 / 35.000',
            },
            {
              name: 'Café durian-avocat',
              description: 'Café avec crème de durian et d’avocat',
              price: '35.000 / 40.000',
            },
          ],
        },
        {
          categoryName: 'Boissons fraîches',
          items: [
            {
              name: 'Jus de citron vert',
              description: 'Jus de citron vert frais',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus de fruit de la passion',
              description: 'Jus de maracudja frais',
              price: '20.000 / 25.000',
            },
            {
              name: 'Citron vert salé',
              description: 'Jus de citron vert avec sel',
              price: '20.000 / 25.000',
            },
            {
              name: 'Eau de coco',
              description: 'Eau de coco fraîche',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus de centella',
              description: 'Jus frais de centella asiatica',
              price: '15.000 / 20.000',
            },
            {
              name: 'Jus d’ambarella',
              description: 'Jus frais d’ambarella',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus de carotte',
              description: 'Jus de carotte fraîchement pressé',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus de tomate',
              description: 'Jus de tomate frais',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus de pomme',
              description: 'Jus de pomme fraîchement pressé',
              price: '30.000 / 35.000',
            },
            {
              name: 'Jus de grenade',
              description: 'Jus de grenade frais',
              price: '30.000 / 35.000',
            },
            {
              name: 'Jus de pastèque',
              description: 'Jus de pastèque frais',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus de goyave',
              description: 'Jus de goyave frais',
              price: '20.000 / 25.000',
            },
            {
              name: 'Boisson au lait de maïs',
              description: 'Boisson sucrée au lait de maïs',
              price: '20.000 / 25.000',
            },
            {
              name: 'Jus carotte-gingembre',
              description: 'Jus de carotte fraîche avec gingembre',
              price: '25.000 / 30.000',
            },
            {
              name: 'Jus d’ananas',
              description: 'Jus d’ananas fraîchement pressé',
              price: '25.000 / 30.000',
            },
            {
              name: 'Maracudja et ananas',
              description: 'Jus de fruit de la passion mélangé à l’ananas',
              price: '25.000 / 30.000',
            },
          ],
        },
        {
          categoryName: 'Smoothies',
          items: [
            {
              name: 'Smoothie aux fruits mixtes',
              description: 'Smoothie de fruits variés',
              price: '25.000 / 30.000',
            },
            {
              name: 'Smoothie fruits et haricots',
              description: 'Smoothie de fruits mixtes avec haricots',
              price: '25.000 / 30.000',
            },
            {
              name: 'Smoothie avocat-haricots',
              description: 'Smoothie crémeux à l’avocat et aux haricots',
              price: '30.000 / 35.000',
            },
            {
              name: 'Smoothie à l’avocat',
              description: 'Smoothie crémeux à l’avocat',
              price: '30.000 / 35.000',
            },
            {
              name: 'Smoothie avocat-durian',
              description: 'Smoothie à l’avocat et au durian',
              price: '35.000 / 40.000',
            },
            {
              name: 'Smoothie coco jeune',
              description: 'Smoothie au jeune coco',
              price: '30.000 / 35.000',
            },
            {
              name: 'Smoothie sapotille-haricots',
              description: 'Smoothie de sapotille avec haricots',
              price: '25.000 / 30.000',
            },
            {
              name: 'Smoothie à la sapotille',
              description: 'Smoothie doux à la sapotille',
              price: '25.000 / 30.000',
            },
            {
              name: 'Smoothie avocat-mangue',
              description: 'Mélange d’avocat et de mangue',
              price: '30.000 / 35.000',
            },
            {
              name: 'Smoothie au lait de coco',
              description: 'Smoothie au lait de coco',
              price: '25.000 / 30.000',
            },
            {
              name: 'Patate douce violette et coco',
              description: 'Patate douce violette avec lait de coco',
              price: '30.000 / 35.000',
            },
            {
              name: 'Smoothie coco-durian',
              description: 'Smoothie à la noix de coco et au durian',
              price: '35.000 / 40.000',
            },
            {
              name: 'Yaourt à la fraise',
              description: 'Yaourt avec morceaux de fraise',
              price: '30.000 / 35.000',
            },
            {
              name: 'Yaourt à la banane',
              description: 'Yaourt à la banane',
              price: '25.000 / 30.000',
            },
            {
              name: 'Yaourt à l’avocat',
              description: 'Yaourt avec avocat crémeux',
              price: '30.000 / 35.000',
            },
            {
              name: 'Yaourt à la mangue',
              description: 'Yaourt à la mangue fraîche',
              price: '30.000 / 35.000',
            },
          ],
        },
        {
          categoryName: 'Thé au lait',
          items: [
            {
              name: 'Thé au lait pomme',
              description: 'Thé au lait aromatisé à la pomme',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé au lait chocolat',
              description: 'Thé au lait goût chocolat',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé au lait kiwi',
              description: 'Thé au lait goût kiwi',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé au lait menthe',
              description: 'Thé au lait goût menthe',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé au lait pandan',
              description: 'Thé au lait parfumé à la feuille de pandan',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé à la pêche',
              description: 'Thé à la pêche rafraîchissant',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé pêche-citronnelle',
              description: 'Thé à la pêche avec citronnelle',
              price: '20.000 / 25.000',
            },
            {
              name: 'Thé au citron',
              description: 'Thé glacé au citron',
              price: '20.000 / 25.000',
            },
          ],
        },
        {
          categoryName: 'Spécialités',
          items: [
            {
              name: 'Ginger Shot 100 ml',
              description: 'Shot concentré de gingembre',
              price: '25.000',
            },
            {
              name: 'Yaourt aux fruits et graines',
              description: 'Verrine de yaourt avec fruits mixtes et graines',
              price: '40.000',
            },
          ],
        },
      ],
    },

    vn: {
      title: 'Sinh To Tam',
      description:
        'Quán cà phê sôi động nổi tiếng với nước ép tươi và bánh mì chay',
      fullDescription: `
<p>Sinh To Tam là một quán cà phê địa phương sôi động tại Hội An, nổi tiếng với các loại nước ép tươi và bánh mì chay thơm ngon. Với không khí thân thiện và đội ngũ nhân viên chu đáo, nơi đây đã trở thành điểm yêu thích của cả người dân địa phương và du khách tìm kiếm những món ăn và thức uống lành mạnh, đậm đà hương vị.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Cà phê',
          items: [
            {
              name: 'Cà phê đen',
              description: 'Cà phê đen Việt Nam truyền thống',
              price: '15.000 / 20.000',
            },
            {
              name: 'Cà phê sữa',
              description: 'Cà phê Việt Nam với sữa đặc ngọt',
              price: '20.000 / 25.000',
            },
            {
              name: 'Cà phê muối',
              description: 'Cà phê với lớp kem mặn béo',
              price: '25.000 / 30.000',
            },
            {
              name: 'Cà phê dừa',
              description: 'Cà phê hương dừa béo thơm',
              price: '25.000 / 30.000',
            },
            {
              name: 'Cà phê trắng',
              description: 'Cà phê trắng mềm và béo nhẹ',
              price: '20.000 / 25.000',
            },
            {
              name: 'Bạc xỉu muối',
              description: 'Bạc xỉu với lớp kem mặn',
              price: '20.000 / 25.000',
            },
            {
              name: 'Ca cao muối',
              description: 'Ca cao nóng với lớp kem mặn',
              price: '20.000 / 25.000',
            },
            {
              name: 'Cà phê hạnh nhân sữa tươi',
              description: 'Cà phê với hạnh nhân và sữa tươi',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà gừng nóng',
              description: 'Trà gừng nóng pha cùng mật ong',
              price: '20.000 / 25.000',
            },
            {
              name: 'Cà phê kem bơ',
              description: 'Cà phê với kem bơ béo mịn',
              price: '30.000 / 35.000',
            },
            {
              name: 'Cà phê kem bơ sầu riêng',
              description: 'Cà phê với kem bơ và sầu riêng',
              price: '35.000 / 40.000',
            },
          ],
        },
        {
          categoryName: 'Giải khát',
          items: [
            {
              name: 'Nước chanh tươi',
              description: 'Nước chanh tươi mát',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước chanh dây',
              description: 'Nước chanh dây nguyên chất',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước chanh muối',
              description: 'Chanh muối truyền thống',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước dừa tươi',
              description: 'Nước dừa tươi mát lạnh',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước rau má',
              description: 'Nước rau má thanh mát',
              price: '15.000 / 20.000',
            },
            {
              name: 'Nước ép cóc',
              description: 'Nước ép cóc chua ngọt',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước ép cà rốt',
              description: 'Nước ép cà rốt tươi',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước ép cà chua',
              description: 'Nước ép cà chua tươi',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước ép táo',
              description: 'Nước ép táo nguyên chất',
              price: '30.000 / 35.000',
            },
            {
              name: 'Nước ép lựu',
              description: 'Nước ép lựu tươi',
              price: '30.000 / 35.000',
            },
            {
              name: 'Nước ép dưa hấu',
              description: 'Nước ép dưa hấu mát lạnh',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước ép ổi',
              description: 'Nước ép ổi chua dịu',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước bắp sữa',
              description: 'Nước bắp ngọt với sữa',
              price: '20.000 / 25.000',
            },
            {
              name: 'Nước ép cà rốt gừng',
              description: 'Cà rốt ép cùng gừng tươi',
              price: '25.000 / 30.000',
            },
            {
              name: 'Nước ép thơm',
              description: 'Nước ép dứa tươi',
              price: '25.000 / 30.000',
            },
            {
              name: 'Nước ép chanh dây thơm',
              description: 'Chanh dây phối với dứa',
              price: '25.000 / 30.000',
            },
          ],
        },
        {
          categoryName: 'Sinh tố',
          items: [
            {
              name: 'Sinh tố trái cây thập cẩm',
              description: 'Sinh tố tổng hợp nhiều loại trái cây',
              price: '25.000 / 30.000',
            },
            {
              name: 'Sinh tố trái cây đậu',
              description: 'Sinh tố trái cây mix đậu',
              price: '25.000 / 30.000',
            },
            {
              name: 'Sinh tố bơ đậu',
              description: 'Sinh tố bơ béo với đậu',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sinh tố bơ',
              description: 'Sinh tố bơ béo mịn',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sinh tố bơ sầu riêng',
              description: 'Sinh tố bơ kết hợp sầu riêng',
              price: '35.000 / 40.000',
            },
            {
              name: 'Sinh tố dừa non',
              description: 'Sinh tố dừa non mát lạnh',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sinh tố sapôchê đậu',
              description: 'Sinh tố sapôchê mix đậu',
              price: '25.000 / 30.000',
            },
            {
              name: 'Sinh tố sapôchê',
              description: 'Sinh tố sapôchê ngọt béo',
              price: '25.000 / 30.000',
            },
            {
              name: 'Sinh tố bơ xoài',
              description: 'Sinh tố bơ và xoài',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sinh tố sữa dừa',
              description: 'Sinh tố với sữa dừa béo',
              price: '25.000 / 30.000',
            },
            {
              name: 'Khoai môn sữa dừa',
              description: 'Khoai môn xay với sữa dừa',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sinh tố dừa sầu riêng',
              description: 'Sinh tố dừa kết hợp sầu riêng',
              price: '35.000 / 40.000',
            },
            {
              name: 'Sữa chua dâu tây',
              description: 'Sữa chua ăn cùng dâu tây',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sữa chua chuối',
              description: 'Sữa chua ăn cùng chuối',
              price: '25.000 / 30.000',
            },
            {
              name: 'Sữa chua bơ',
              description: 'Sữa chua ăn cùng bơ béo',
              price: '30.000 / 35.000',
            },
            {
              name: 'Sữa chua xoài',
              description: 'Sữa chua ăn cùng xoài tươi',
              price: '30.000 / 35.000',
            },
          ],
        },
        {
          categoryName: 'Trà sữa',
          items: [
            {
              name: 'Trà sữa táo',
              description: 'Trà sữa hương táo',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà sữa socola',
              description: 'Trà sữa vị socola',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà sữa kiwi',
              description: 'Trà sữa vị kiwi',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà sữa bạc hà',
              description: 'Trà sữa vị bạc hà mát',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà sữa lá dứa',
              description: 'Trà sữa thơm mùi lá dứa',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà đào',
              description: 'Trà đào tươi mát',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà đào cam sả',
              description: 'Trà đào kết hợp cam và sả',
              price: '20.000 / 25.000',
            },
            {
              name: 'Trà chanh',
              description: 'Trà chanh đá giải khát',
              price: '20.000 / 25.000',
            },
          ],
        },
        {
          categoryName: 'Món đặc biệt',
          items: [
            {
              name: 'Ginger Shot 100ml',
              description: 'Ly gừng cô đặc tốt cho sức khỏe',
              price: '25.000',
            },
            {
              name: 'Sữa chua trái cây hạt',
              description: 'Sữa chua trộn trái cây tươi và các loại hạt',
              price: '40.000',
            },
          ],
        },
      ],
    },

    slug: {
      en: 'sinh-to-tam',
      ru: 'sinh-to-tam',
      es: 'sinh-to-tam',
      fr: 'sinh-to-tam',
      vn: 'sinh-to-tam',
    },
  },
  //KURUMI
  {
    id: 'kurumi', // <-- ID теперь строковый
    coordinates: [15.883556858075686, 108.32699190044264], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'kurumi.webp',
    en: {
      title: 'Kurumi - Vegan Restaurant',
      description:
        'The plant-based menu features homemade Italian and Slavic dishes, Asian specials, hearty Buddha bowls, vibrant raw food, and exquisite vegan desserts.',
      fullDescription: `
<p>The plant-based menu features homemade Italian and Slavic dishes, Asian specials, hearty Buddha bowls, vibrant raw food, and exquisite vegan desserts.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Breakfast/Brunch/Lunch',
          items: [
            {
              name: 'Oatmeal Coconut Pancakes',
              description:
                'Oats, coconut milk, banana, vanilla extract. Topping: chia pudding, chia jam, peanut butter, mix of nuts and seeds, banana, mango.',
              price: '105.000',
            },
            {
              name: 'Oatmeal with Chia Pudding and Dragonfruit Jam',
              description:
                'Oatmeal, chia pudding, chia jam, coconut milk, banana, pineapple, mix of seeds and nuts, mint, cashew butter.',
              price: '90.000',
            },
            {
              name: 'Chickpea Protein Omelet',
              description:
                'Chickpea flour, spices, dill, Himalayan salt, mashed avocado, fresh red pepper, microgreens, roasted tomatoes, fried oyster mushrooms, spicy homemade mayo. Gluten-free.',
              price: '99.000',
            },
            {
              name: 'Tofu "Benedict"',
              description:
                'Whole grain buns, salad, tomato, avocado, fried tofu, vegan hollandaise sauce, soy tempeh "bacon".',
              price: '120.000',
            },
            {
              name: 'Bean Quesadilla',
              description:
                'Homemade whole grain tortillas, activated adzuki beans in a special sauce, mashed avocado, cashew cream, roasted vegetables, salsa.',
              price: '110.000',
            },
          ],
        },
        {
          categoryName: 'Nutritious Toasts / Sandwiches',
          items: [
            {
              name: 'Smoked Tofu and Caramelized Onion Sandwich',
              description:
                'Sourdough whole grain baguette, caramelized onions, firm tofu, pickled cucumbers, smoked carrots, smoked cashew cheese.',
              price: '110.000',
            },
            {
              name: 'Italian Baguette with Brie Cheese',
              description:
                'Sourdough whole grain baguette, homemade Brie cheese, cashew cream, homemade pesto sauce, tomatoes, sun-dried tomatoes, microgreens, red onion, green olives, oregano.',
              price: '115.000',
            },
            {
              name: 'Avocado and Sun-dried Tomato Toast',
              description:
                'Sourdough toast, mashed avocado, sun-dried tomatoes, microgreens, salad.',
              price: '79.000',
            },
            {
              name: 'Avocado Heart Toast',
              description:
                'Sourdough whole grain toast, Himalayan salt, mashed avocado, cherry tomatoes, seed mix, salad.',
              price: '65.000',
            },
            {
              name: 'Cheesy Mushroom Toast',
              description:
                'Sourdough whole grain toast, fermented cashew cheese, avocado, smoked paprika, straw mushrooms, dill.',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Superfood Smoothie Bowls (350ml)',
          items: [
            {
              name: 'Choco Sense',
              description:
                'Banana, cocoa powder, coconut milk. Topping: banana, mix of nuts and seeds, chocolate bliss ball, dark chocolate, coconut flakes.',
              price: '99.000',
            },
            {
              name: 'My Favorite',
              description:
                'Mango, banana, pineapple, coconut milk. Topping: pineapple, mix of nuts and seeds, dark chocolate, peanut bliss ball, coconut flakes.',
              price: '85.000',
            },
            {
              name: 'Happy Stomach',
              description:
                'Papaya, strawberry, banana, coconut milk. Topping: strawberry, peanut bliss ball, mix of nuts and seeds, coconut flakes, dark chocolate.',
              price: '95.000',
            },
            {
              name: 'Purple Boom',
              description:
                'Blackberry, red dragonfruit, banana, coconut milk. Topping: mango, chocolate bliss ball, mix of nuts and seeds, coconut flakes, dark chocolate.',
              price: '99.000',
            },
            {
              name: 'Kurumi Smoothie Bowl',
              description:
                'Mango, banana, spirulina powder, coconut milk. Topping: strawberry, passion fruit, peanut bliss ball, mix of nuts and seeds, coconut flakes, dark chocolate.',
              price: '99.000',
            },
          ],
        },
        {
          categoryName: 'Dream Bowls',
          items: [
            {
              name: 'Burrito Bowl',
              description:
                'Brown rice, activated adzuki beans in tomato sauce, mashed avocado, tortilla, roasted sweet potato, fried eggplant and zucchini, red pepper, fermented cashew cheese, salsa, seeds.',
              price: '120.000',
            },
            {
              name: 'Poke Bowl',
              description:
                'Brown rice, soy tempeh in sauce, smoked carrots, avocado, pineapple, cucumber, edamame, pickled pink ginger, nori, spicy homemade mayo, mezun nuts, pickled onion.',
              price: '120.000',
            },
            {
              name: 'Mushroom Stroganoff with Brown Rice',
              description:
                'Brown rice, sourdough whole grain bread, lightly salted cucumber, pickled red onion, mushrooms, coconut milk, fermented cashew cheese, soy sauce, dill, chili flakes, garlic.',
              price: '110.000',
            },
            {
              name: 'Mushroom Stroganoff with Buckwheat',
              description:
                'Buckwheat, sourdough whole grain bread, lightly salted cucumber, pickled red onion, mushrooms, coconut milk, fermented cashew cheese, soy sauce, dill, chili flakes, garlic.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Asian Delights',
          items: [
            {
              name: 'Rice with Tofu Cubes and Mango Salad',
              description:
                'Brown rice, fried tofu cubes in sauce, mango, onion, avocado, salad, spicy mayo, soy sauce.',
              price: '89.000',
            },
            {
              name: 'Vegetable Noodles',
              description:
                'Linguine noodles, shiitake, zucchini, carrots, ginger, garlic, soy sauce, coconut sugar, salt, sesame, cilantro, soy tempeh.',
              price: '110.000',
            },
            {
              name: 'Yellow Thai Curry with Brown Rice and Tofu',
              description:
                'Brown rice, organic coconut milk, pumpkin, sweet potato, tomato, red pepper, eggplant, zucchini, mushrooms, cilantro, green onion, yellow curry, cashews.',
              price: '99.000',
            },
            {
              name: 'Local Buddha Bowl',
              description:
                'Brown rice noodles, tofu skin marinated in garlic sauce, seaweed in sauce, banana blossoms, soy sprouts, salad, mint, basil, leaf mustard, red cabbage, peanuts, peanut sauce, sesame.',
              price: '89.000',
            },
            {
              name: 'Momo Dumplings',
              description:
                'Whole grain flour, spinach, tofu, onion, mayo-soy sauce.',
              price: '125.000',
            },
          ],
        },
        {
          categoryName: 'Plant-Based "Meat"',
          items: [
            {
              name: '"NOT BEEF" Burger',
              description:
                "Whole grain bun, Let's Plant plant-based patty, mustard, salad, tomato, spicy mayo, cashew cheese, pickled cucumber, onion, BBQ sauce.",
              price: '175.000',
            },
            {
              name: '"Meaty" Quesadilla',
              description:
                "Whole grain tortillas, Let's Plant plant-based patty, red pepper, eggplant, zucchini, salsa, mashed avocado, cashew cheese.",
              price: '185.000',
            },
            {
              name: 'Pasta with Vegan Patty',
              description:
                "Pasta, Let's Plant plant-based patty, cashew cheese, tomato, microgreens, pepper, BBQ sauce.",
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Salads',
          items: [
            {
              name: 'Quinoa Salad with Marinated Artichokes',
              description:
                'Quinoa, marinated artichokes, tofu, cucumber, red onion, mango, tomatoes, red pepper, avocado, lime, olive oil, oregano, Himalayan salt, mustard dressing.',
              price: '85.000',
            },
            {
              name: 'Tempeh Caesar Salad',
              description:
                'Lettuce, dill, basil, cilantro, soy tempeh in sauce, croutons, cherry tomatoes, dill-cashew sauce.',
              price: '79.000',
            },
            {
              name: 'Probiotic Salad',
              description:
                'Natural fermented cabbage, beets, carrots, red onion, olive oil. Gluten-free.',
              price: '65.000',
            },
            {
              name: 'Korean Salad',
              description:
                'Tofu skin (fuchzh), carrots, garlic, ginger, sesame oil, soy sauce, salt, chili, sriracha.',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Raw Desserts (Sugar & Gluten Free)',
          items: [
            {
              name: 'Snickers Cake',
              description:
                'Raw cake with peanuts, date-based caramel, and chocolate glaze. Sugar and gluten free.',
              price: '85.000',
            },
            {
              name: 'Carrot Cake',
              description:
                'Raw carrot cake with spices, walnuts, and delicate cashew cream.',
              price: '79.000',
            },
            {
              name: 'Bounty Cake',
              description: 'Raw coconut cake with a chocolate layer.',
              price: '75.000',
            },
            {
              name: 'Berry / Strawberry Cake',
              description:
                'Light raw cake with wild berries or strawberries and cashew cream.',
              price: '85.000',
            },
            {
              name: 'Chocolate Brownie',
              description: 'Rich chocolate dessert based on cocoa and nuts.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Matcha Tea and Latte',
          items: [
            {
              name: 'Matcha Latte',
              description:
                'Japanese green matcha tea with coconut or fresh milk.',
              price: '45.000 / 50.000',
            },
            {
              name: 'Pink Matcha Latte',
              description:
                'Matcha with added rose water or dragonfruit powder.',
              price: '50.000 / 55.000',
            },
            {
              name: 'Blue Latte (Butterfly Pea)',
              description:
                'Butterfly pea flower drink with milk (caffeine-free).',
              price: '45.000 / 50.000',
            },
            {
              name: 'Golden Milk (Turmeric Latte)',
              description:
                'Warming drink with turmeric, spices, and coconut milk.',
              price: '45.000 / 50.000',
            },
          ],
        },
        {
          categoryName: 'Add-ons to the Main Menu',
          items: [
            {
              name: 'Cashew Cheese (Extra Portion)',
              description:
                'Signature fermented cheese made from activated cashews.',
              price: '20.000',
            },
            {
              name: 'Sourdough Bread (2 pieces)',
              description: 'Whole grain yeast-free bread.',
              price: '15.000',
            },
            {
              name: 'Avocado (Portion)',
              description: 'Fresh sliced avocado.',
              price: '25.000',
            },
            {
              name: 'Sauerkraut with Beets',
              description: 'Homemade fermented cabbage (probiotic).',
              price: '20.000',
            },
          ],
        },
        {
          categoryName: 'For Pasta Lovers',
          items: [
            {
              name: 'Pasta Pesto',
              description:
                'Linguine noodles, homemade vegan pesto, yellow roasted cherry tomatoes, microgreens, olive oil, oregano, nutmesan (vegan parmesan).',
              price: '115.000',
            },
            {
              name: 'Pasta Stroganoff',
              description:
                'Spaghetti, mushrooms, organic coconut milk, fermented cashew cheese, soy sauce, dill, red onion, chili flakes, garlic, olive oil.',
              price: '120.000',
            },
            {
              name: 'Vegan Pasta Alfredo with Mushrooms',
              description:
                'Linguine noodles, red onion, garlic, cashew cream cheese, lime juice, microgreens, nutmesan, mushrooms.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Warming Soups',
          items: [
            {
              name: 'Pumpkin Cream Soup + Quinoa',
              description:
                'Pumpkin, coconut milk, turmeric, tomato, fermented cashew cheese, garlic, quinoa, pumpkin seeds. Gluten-free.',
              price: '85.000',
            },
            {
              name: 'Tomato Cream Soup + Adzuki Beans + Garlic Croutons',
              description:
                'Tomato, red pepper, garlic, pesto, adzuki beans, seeds, garlic croutons, coconut milk.',
              price: '85.000',
            },
            {
              name: 'Simple Soup (No Toppings)',
              description: 'Options: Pumpkin or Tomato.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Slavic Cuisine',
          items: [
            {
              name: 'Tofuniki (Tofu Syrniki)',
              description:
                'Tofu, coconut flakes, whole grain flour, mango, strawberry, passion fruit caramel, cane sugar, palm syrup, mint, seeds.',
              price: '95.000',
            },
            {
              name: 'Cherry Vareniki',
              description:
                'Wheat flour, cherries, tofu, cane sugar, coconut milk, dragonfruit jam.',
              price: '115.000',
            },
            {
              name: 'Potato Vareniki',
              description:
                'Whole grain flour, potatoes, onions, cashew-dill sauce, sauerkraut (cabbage, beets, carrots).',
              price: '125.000',
            },
            {
              name: 'Solyanka Soup',
              description:
                'Potatoes, firm tofu, black olives, lemon, pickled cucumbers, dill, khmeli-suneli, onion, garlic, tomato paste, sourdough bread, cashew cheese.',
              price: '130.000',
            },
          ],
        },
        {
          categoryName: 'Desserts and Snacks',
          items: [
            {
              name: 'Bliss Balls',
              description:
                'Healthy candies made from dried fruits and nuts. Variants: Peanut or Chocolate.',
              price: '20.000',
            },
            {
              name: 'Chocolate Chip Cookie',
              description: 'Homemade vegan cookie with chocolate chunks.',
              price: '25.000',
            },
            {
              name: 'Chia Pudding',
              description: 'Chia seeds, coconut milk, syrup, fresh fruit.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Sides and Add-ons',
          items: [
            {
              name: 'Brown Rice',
              description: 'A portion of boiled brown rice.',
              price: '15.000',
            },
            {
              name: 'Buckwheat',
              description: 'A portion of boiled buckwheat.',
              price: '30.000',
            },
            {
              name: 'Sourdough Bread (2 pieces)',
              description: 'Homemade whole grain bread.',
              price: '15.000',
            },
            {
              name: 'Avocado (Half)',
              description: 'Fresh sliced avocado.',
              price: '20.000',
            },
            {
              name: 'Sauerkraut',
              description: 'Homemade fermented cabbage with beets.',
              price: '20.000',
            },
            {
              name: 'Cashew Cheese / Cashew Mayo',
              description: 'An extra portion of homemade vegan sauce.',
              price: '20.000',
            },
            {
              name: 'Plant-Based Patty (Extra)',
              description: "Extra Let's Plant patty for any dish.",
              price: '85.000',
            },
          ],
        },
      ],
    },

    ru: {
      title: 'Kurumi - Веганский ресторан',
      description:
        'Растительное меню включает итальянские и славянские блюда домашней кухни, азиатские специальные предложения, сытные миски Будды, яркую сыроедческую еду и роскошные веганские десерты.',
      fullDescription: `
<p>Растительное меню включает итальянские и славянские блюда домашней кухни, азиатские специальные предложения, сытные миски Будды, яркую сыроедческую еду и роскошные веганские десерты.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Завтрак/Бранч/Ланч',
          items: [
            {
              name: 'Овсяно-кокосовые блинчики',
              description:
                'Овес, кокосовое молоко, банан, экстракт ванили. Топпинг: чиа-пудинг, джем чиа, арахисовое масло, микс орехов и семян, банан, манго.',
              price: '105.000',
            },
            {
              name: 'Овсяная каша с чиа-пудингом и джемом из драгонфрута',
              description:
                'Овсянка, чиа-пудинг, джем чиа, кокосовое молоко, банан, ананас, микс семян и орехов, мята, кешью-масло.',
              price: '90.000',
            },
            {
              name: 'Протеиновый омлет из нута',
              description:
                'Нутовая мука, специи, укроп, гималайская соль, размятый авокадо, свежий красный перец, микрозелень, запеченные томаты, жареные вешенки, острый домашний майонез. Без глютена.',
              price: '99.000',
            },
            {
              name: 'Тофу "Бенедикт"',
              description:
                'Цельнозерновые булочки, салат, томат, авокадо, жареный тофу, веганский голландский соус, соевый темпе "бекон".',
              price: '120.000',
            },
            {
              name: 'Бобовая кесадилья',
              description:
                'Домашние цельнозерновые тортильи, активированная фасоль адзуки в специальном соусе, размятый авокадо, кешью-крем, запеченные овощи, сальса.',
              price: '110.000',
            },
          ],
        },
        {
          categoryName: 'Питательные тосты / Сэндвичи',
          items: [
            {
              name: 'Сэндвич с копченым тофу и карамелизированным луком',
              description:
                'Цельнозерновой багет на закваске, карамелизированный лук, твердый тофу, маринованные огурцы, копченая морковь, копченый сыр из кешью.',
              price: '110.000',
            },
            {
              name: 'Итальянский багет с сыром бри',
              description:
                'Цельнозерновой багет на закваске, домашний сыр Бри, кешью-крем, домашний соус песто, томаты, вяленые томаты, микрозелень, красный лук, зеленые оливки, орегано.',
              price: '115.000',
            },
            {
              name: 'Тост с авокадо и вялеными томатами',
              description:
                'Тост на закваске, размятый авокадо, вяленые томаты, микрозелень, салат.',
              price: '79.000',
            },
            {
              name: 'Тост "Сердце авокадо"',
              description:
                'Цельнозерновой тост на закваске, гималайская соль, размятый авокадо, томаты черри, микс семян, салат.',
              price: '65.000',
            },
            {
              name: 'Сырный тост с грибами',
              description:
                'Цельнозерновой тост на закваске, ферментированный кешью-сыр, авокадо, копченая паприка, соломенные грибы, укроп.',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Суперфуд Смузи Боулы (350мл)',
          items: [
            {
              name: 'Choco Sense',
              description:
                'Банан, какао-порошок, кокосовое молоко. Топпинг: банан, микс орехов и семян, шоколадный блаженство-шарик, темный шоколад, кокосовые хлопья.',
              price: '99.000',
            },
            {
              name: 'My Favorite',
              description:
                'Манго, банан, ананас, кокосовое молоко. Топпинг: ананас, микс орехов и семян, темный шоколад, арахисовый блаженство-шарик, кокосовые хлопья.',
              price: '85.000',
            },
            {
              name: 'Happy Stomach',
              description:
                'Папайя, клубника, банан, кокосовое молоко. Топпинг: клубника, арахисовый блаженство-шарик, микс орехов и семян, кокосовые хлопья, темный шоколад.',
              price: '95.000',
            },
            {
              name: 'Purple Boom',
              description:
                'Ежевика, красный драгонфрут, банан, кокосовое молоко. Топпинг: манго, шоколадный блаженство-шарик, микс орехов и семян, кокосовые хлопья, темный шоколад.',
              price: '99.000',
            },
            {
              name: 'Kurumi smoothie bowl',
              description:
                'Манго, банан, порошок спирулины, кокосовое молоко. Топпинг: клубника, маракуйя, арахисовый блаженство-шарик, микс орехов и семян, кокосовые хлопья, темный шоколад.',
              price: '99.000',
            },
          ],
        },
        {
          categoryName: 'Dream Bowls',
          items: [
            {
              name: 'Буррито боул',
              description:
                'Бурый рис, активированная фасоль адзуки в томатном соусе, размятый авокадо, тортилья, запеченный сладкий картофель, жареный баклажан и цукини, красный перец, ферментированный кешью-сыр, сальса, семена.',
              price: '120.000',
            },
            {
              name: 'Поке боул',
              description:
                'Бурый рис, соевый темпе в соусе, копченая морковь, авокадо, ананас, огурец, эдамаме, маринованный розовый имбирь, нори, домашний острый майонез, орехи мезун, маринованный лук.',
              price: '120.000',
            },
            {
              name: 'Грибной Строганов с бурым рисом',
              description:
                'Бурый рис, цельнозерновой хлеб на закваске, малосольный огурец, маринованный красный лук, грибы, кокосовое молоко, ферментированный кешью-сыр, соевый соус, укроп, хлопья чили, чеснок.',
              price: '110.000',
            },
            {
              name: 'Грибной Строганов с гречкой',
              description:
                'Гречка, цельнозерновой хлеб на закваске, малосольный огурец, маринованный красный лук, грибы, кокосовое молоко, ферментированный кешью-сыр, соевый соус, укроп, хлопья чили, чеснок.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Азиатские угощения',
          items: [
            {
              name: 'Рис с кубиками тофу и салатом из манго',
              description:
                'Бурый рис, жареные кубики тофу в соусе, манго, лук, авокадо, салат, острый майонез, соевый соус.',
              price: '89.000',
            },
            {
              name: 'Овощная лапша',
              description:
                'Лапша лингвини, шиитаке, цукини, морковь, имбирь, чеснок, соевый соус, кокосовый сахар, соль, кунжут, кинза, соевый темпе.',
              price: '110.000',
            },
            {
              name: 'Желтый Тайский карри с бурым рисом и тофу',
              description:
                'Бурый рис, органическое кокосовое молоко, тыква, сладкий картофель, томат, красный перец, баклажан, цукини, грибы, кинза, зеленый лук, желтый карри, кешью.',
              price: '99.000',
            },
            {
              name: 'Local Buddha bowl',
              description:
                'Лапша из бурого риса, кожа тофу маринованная в соусе с чесноком, морские водоросли в соусе, цветы банана, ростки сои, салат, мята, базилик, листовая горчица, красная капуста, арахис, арахисовый соус, кунжут.',
              price: '89.000',
            },
            {
              name: 'Дамплинги Момо',
              description:
                'Цельнозерновая мука, шпинат, тофу, лук, майонезно-соевый соус.',
              price: '125.000',
            },
          ],
        },
        {
          categoryName: 'Растительное "Мясо"',
          items: [
            {
              name: 'Бургер "НЕ ГОВЯДИНА"',
              description:
                "Цельнозерновая булочка, растительная котлета Let's Plant, горчица, салат, томат, острый майонез, кешью-сыр, маринованный огурец, лук, соус BBQ.",
              price: '175.000',
            },
            {
              name: '"Мясная" Кесадилья',
              description:
                "Цельнозерновые тортильи, растительная котлета Let's Plant, красный перец, баклажан, цукини, сальса, размятый авокадо, кешью-сыр.",
              price: '185.000',
            },
            {
              name: 'Паста с веганской котлетой',
              description:
                "Паста, растительная котлета Let's Plant, кешью-сыр, томат, микрозелень, перец, соус BBQ.",
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Салаты',
          items: [
            {
              name: 'Салат из киноа с маринованными артишоками',
              description:
                'Киноа, маринованные артишоки, тофу, огурец, красный лук, манго, томаты, красный перец, авокадо, лайм, оливковое масло, орегано, гималайская соль, горчичная заправка.',
              price: '85.000',
            },
            {
              name: 'Салат Цезарь с темпе',
              description:
                'Салат латук, укроп, базилик, кинза, соевый темпе в соусе, гренки, томаты черри, укропно-кешью соус.',
              price: '79.000',
            },
            {
              name: 'Пробиотический салат',
              description:
                'Натуральная ферментированная капуста, свекла, морковь, красный лук, оливковое масло. Без глютена.',
              price: '65.000',
            },
            {
              name: 'Корейский салат',
              description:
                'Кожа тофу (фучжу), морковь, чеснок, имбирь, кунжутное масло, соевый соус, соль, чили, шрирача.',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Raw Десерты (Без сахара и глютена)',
          items: [
            {
              name: 'Торт Сникерс',
              description:
                'Сыроедческий торт с арахисом, карамелью на основе фиников и шоколадной глазурью. Без сахара и глютена.',
              price: '85.000',
            },
            {
              name: 'Торт Морковный',
              description:
                'Сыроедческий морковный торт с пряностями, грецким орехом и нежным кешью-кремом.',
              price: '79.000',
            },
            {
              name: 'Торт Баунти',
              description: 'Сыроедческий кокосовый торт с шоколадным слоем.',
              price: '75.000',
            },
            {
              name: 'Торт Ягодный / Клубничный',
              description:
                'Легкий raw-торт с лесными ягодами или клубникой и кремом из кешью.',
              price: '85.000',
            },
            {
              name: 'Шоколадный Брауни',
              description:
                'Насыщенный шоколадный десерт на основе какао и орехов.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Чай Матча и Лате',
          items: [
            {
              name: 'Матча Лате',
              description:
                'Японский зеленый чай матча с кокосовым или свежим молоком.',
              price: '45.000 / 50.000',
            },
            {
              name: 'Розовый Матча Лате',
              description:
                'Матча с добавлением розовой воды или порошка питахайи.',
              price: '50.000 / 55.000',
            },
            {
              name: 'Синий Лате (Анчан)',
              description:
                'Напиток из цветков клитории с молоком (без кофеина).',
              price: '45.000 / 50.000',
            },
            {
              name: 'Золотое молоко (Куркума Лате)',
              description:
                'Согревающий напиток с куркумой, специями и кокосовым молоком.',
              price: '45.000 / 50.000',
            },
          ],
        },
        {
          categoryName: 'Добавки к основному меню',
          items: [
            {
              name: 'Кешью-сыр (дополнительная порция)',
              description:
                'Фирменный ферментированный сыр из активированного кешью.',
              price: '20.000',
            },
            {
              name: 'Хлеб на закваске (2 кусочка)',
              description: 'Цельнозерновой бездрожжевой хлеб.',
              price: '15.000',
            },
            {
              name: 'Авокадо (порция)',
              description: 'Нарезанный свежий авокадо.',
              price: '25.000',
            },
            {
              name: 'Квашеная капуста со свеклой',
              description: 'Домашняя ферментированная капуста (пробиотик).',
              price: '20.000',
            },
          ],
        },
        {
          categoryName: 'Любителям пасты',
          items: [
            {
              name: 'Паста песто',
              description:
                'Лапша лингвини, домашний веганский песто, желтые запеченные томаты черри, микрозелень, оливковое масло, орегано, нутмезан (веганский пармезан).',
              price: '115.000',
            },
            {
              name: 'Паста Строганов',
              description:
                'Спагетти, грибы, органическое кокосовое молоко, ферментированный кешью-сыр, соевый соус, укроп, красный лук, хлопья чили, чеснок, оливковое масло.',
              price: '120.000',
            },
            {
              name: 'Веганская паста Альфредо с грибами',
              description:
                'Лапша лингвини, красный лук, чеснок, кешью-крем-сыр, сок лайма, микрозелень, нутмезан, грибы.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Согревающие супы',
          items: [
            {
              name: 'Тыквенный крем-суп + киноа',
              description:
                'Тыква, кокосовое молоко, куркума, томат, ферментированный кешью-сыр, чеснок, киноа, тыквенные семечки. Без глютена.',
              price: '85.000',
            },
            {
              name: 'Томатный крем-суп + фасоль адзуки + чесночные гренки',
              description:
                'Томат, красный перец, чеснок, песто, фасоль адзуки, семена, чесночные гренки, кокосовое молоко.',
              price: '85.000',
            },
            {
              name: 'Простой суп (без топпингов)',
              description: 'Варианты: тыквенный или томатный.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Славянская кухня',
          items: [
            {
              name: 'Тофники (Сырники из тофу)',
              description:
                'Тофу, кокосовая стружка, цельнозерновая мука, манго, клубника, маракуйевая карамель, тростниковый сахар, пальмовый сироп, мята, семена.',
              price: '95.000',
            },
            {
              name: 'Вареники с вишней',
              description:
                'Пшеничная мука, вишня, тофу, тростниковый сахар, кокосовое молоко, джем из драгонфрута.',
              price: '115.000',
            },
            {
              name: 'Вареники с картофелем',
              description:
                'Цельнозерновая мука, картофель, лук, кешью-укропный соус, квашеная капуста (капуста, свекла, морковь).',
              price: '125.000',
            },
            {
              name: 'Суп Солянка',
              description:
                'Картофель, твердый тофу, черные оливки, лимон, маринованные огурцы, укроп, хмели-сунели, лук, чеснок, томатная паста, хлеб на закваске, кешью-сыр.',
              price: '130.000',
            },
          ],
        },
        {
          categoryName: 'Десерты и Снеки',
          items: [
            {
              name: 'Блаженство-шарики (Bliss Balls)',
              description:
                'Полезные конфеты из сухофруктов и орехов. Варианты: Арахисовый или Шоколадный.',
              price: '20.000',
            },
            {
              name: 'Шоколадное печенье',
              description: 'Домашнее веганское печенье с кусочками шоколада.',
              price: '25.000',
            },
            {
              name: 'Чиа-пудинг',
              description:
                'Семена чиа, кокосовое молоко, сироп, свежие фрукты.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Гарниры и Добавки',
          items: [
            {
              name: 'Бурый рис',
              description: 'Порция отварного бурого риса.',
              price: '15.000',
            },
            {
              name: 'Гречка',
              description: 'Порция отварной гречневой крупы.',
              price: '30.000',
            },
            {
              name: 'Хлеб на закваске (2 кусочка)',
              description: 'Домашний цельнозерновой хлеб.',
              price: '15.000',
            },
            {
              name: 'Авокадо (половинка)',
              description: 'Свежий нарезанный авокадо.',
              price: '20.000',
            },
            {
              name: 'Квашеная капуста',
              description: 'Домашняя ферментированная капуста со свеклой.',
              price: '20.000',
            },
            {
              name: 'Кешью-сыр / Кешью-майонез',
              description: 'Дополнительная порция домашнего веганского соуса.',
              price: '20.000',
            },
            {
              name: 'Растительная котлета (дополнительно)',
              description: "Дополнительная котлета Let's Plant к любому блюду.",
              price: '85.000',
            },
            {
              name: 'Бурый рис',
              description: 'Порция отварного бурого риса.',
              price: '15.000',
            },
            {
              name: 'Гречка',
              description: 'Порция отварной гречневой крупы.',
              price: '30.000',
            },
            {
              name: 'Хлеб на закваске (2 кусочка)',
              description: 'Домашний цельнозерновой хлеб.',
              price: '15.000',
            },
            {
              name: 'Авокадо (половинка)',
              description: 'Свежий нарезанный авокадо.',
              price: '20.000',
            },
            {
              name: 'Квашеная капуста',
              description: 'Домашняя ферментированная капуста со свеклой.',
              price: '20.000',
            },
            {
              name: 'Кешью-сыр / Кешью-майонез',
              description: 'Дополнительная порция домашнего веганского соуса.',
              price: '20.000',
            },
            {
              name: 'Растительная котлета (дополнительно)',
              description: "Дополнительная котлета Let's Plant к любому блюду.",
              price: '85.000',
            },
          ],
        },
      ],
    },

    es: {
      title: 'Kurumi - Restaurante Vegano',
      description:
        'El menú a base de plantas incluye platos caseros italianos y eslavos, especialidades asiáticas, nutritivos bowls de Buda, vibrante comida crudivegana y lujosos postres veganos.',
      fullDescription: `
<p>El menú a base de plantas incluye platos caseros italianos y eslavos, especialidades asiáticas, nutritivos bowls de Buda, vibrante comida crudivegana y lujosos postres veganos.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Desayuno/Brunch/Almuerzo',
          items: [
            {
              name: 'Panqueques de Avena y Coco',
              description:
                'Avena, leche de coco, plátano, extracto de vainilla. Cobertura: pudín de chía, mermelada de chía, mantequilla de maní, mezcla de frutos secos y semillas, plátano, mango.',
              price: '105.000',
            },
            {
              name: 'Gachas de Avena con Pudín de Chía и Mermelada de Pitaya',
              description:
                'Avena, pudín de chía, mermelada de chía, leche de coco, plátano, piña, mezcla de semillas y frutos secos, menta, mantequilla de anacardos.',
              price: '90.000',
            },
            {
              name: 'Tortilla de Proteína de Garbanzo',
              description:
                'Harina de garbanzo, especias, eneldo, sal del Himalaya, puré de aguacate, pimiento rojo fresco, microverdes, tomates asados, setas gírgolas salteadas, mayonesa casera picante. Sin gluten.',
              price: '99.000',
            },
            {
              name: 'Tofu "Benedict"',
              description:
                'Bollos integrales, ensalada, tomate, aguacate, tofu frito, salsa holandesa vegana, "beicon" de tempeh de soja.',
              price: '120.000',
            },
            {
              name: 'Quesadilla de Frijoles',
              description:
                'Tortillas integrales caseras, frijoles adzuki activados en salsa especial, puré de aguacate, crema de anacardos, verduras asadas, salsa.',
              price: '110.000',
            },
          ],
        },
        {
          categoryName: 'Tostadas Nutritivas / Sándwiches',
          items: [
            {
              name: 'Sándwich de Tofu Ahumado y Cebolla Caramelizada',
              description:
                'Baguette integral de masa madre, cebolla caramelizada, tofu firme, pepinillos, zanahoria ahumada, queso de anacardo ahumado.',
              price: '110.000',
            },
            {
              name: 'Baguette Italiana con Queso Brie',
              description:
                'Baguette integral de masa madre, queso Brie casero, crema de anacardos, salsa pesto casera, tomates, tomates secos, microverdes, cebolla roja, aceitunas verdes, orégano.',
              price: '115.000',
            },
            {
              name: 'Tostada con Aguacate y Tomates Secos',
              description:
                'Tostada de masa madre, puré de aguacate, tomates secos, microverdes, ensalada.',
              price: '79.000',
            },
            {
              name: 'Tostada "Corazón de Aguacate"',
              description:
                'Tostada integral de masa madre, sal del Himalaya, puré de aguacate, tomates cherry, mezcla de semillas, ensalada.',
              price: '65.000',
            },
            {
              name: 'Tostada de Queso con Champiñones',
              description:
                'Tostada integral de masa madre, queso de anacardo fermentado, aguacate, pimentón ahumado, champiñones de paja, eneldo.',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Smoothie Bowls Superalimentos (350ml)',
          items: [
            {
              name: 'Choco Sense',
              description:
                'Plátano, cacao en polvo, leche de coco. Cobertura: plátano, mezcla de frutos secos y semillas, bola de felicidad de chocolate, chocolate negro, coco rallado.',
              price: '99.000',
            },
            {
              name: 'My Favorite',
              description:
                'Mango, plátano, piña, leche de coco. Cobertura: piña, mezcla de frutos secos y semillas, chocolate negro, bola de felicidad de maní, coco rallado.',
              price: '85.000',
            },
            {
              name: 'Happy Stomach',
              description:
                'Papaya, fresa, plátano, leche de coco. Cobertura: fresa, bola de felicidad de maní, mezcla de frutos secos y semillas, coco rallado, chocolate negro.',
              price: '95.000',
            },
            {
              name: 'Purple Boom',
              description:
                'Mora, pitaya roja, plátano, leche de coco. Cobertura: mango, bola de felicidad de chocolate, mezcla de frutos secos y semillas, coco rallado, chocolate negro.',
              price: '99.000',
            },
            {
              name: 'Kurumi Smoothie Bowl',
              description:
                'Mango, plátano, espirulina en polvo, leche de coco. Cobertura: fresa, maracuyá, bola de felicidad de maní, mezcla de frutos secos y semillas, coco rallado, chocolate negro.',
              price: '99.000',
            },
          ],
        },
        {
          categoryName: 'Dream Bowls',
          items: [
            {
              name: 'Burrito Bowl',
              description:
                'Arroz integral, frijoles adzuki activados en salsa de tomate, puré de aguacate, tortilla, camote asado, berenjena y calabacín fritos, pimiento rojo, queso de anacardo fermentado, salsa, semillas.',
              price: '120.000',
            },
            {
              name: 'Poke Bowl',
              description:
                'Arroz integral, tempeh de soja en salsa, zanahoria ahumada, aguacate, piña, pepino, edamame, jengibre rosa encurtido, nori, mayonesa casera picante, nueces mezun, cebolla encurtida.',
              price: '120.000',
            },
            {
              name: 'Stroganoff de Champiñones con Arroz Integral',
              description:
                'Arroz integral, pan integral de masa madre, pepino poco salado, cebolla roja encurtida, champiñones, leche de coco, queso de anacardo fermentado, salsa de soja, eneldo, hojuelas de chile, ajo.',
              price: '110.000',
            },
            {
              name: 'Stroganoff de Champiñones con Trigo Sarraceno',
              description:
                'Trigo sarraceno, pan integral de masa madre, pepino poco salado, cebolla roja encurtida, champiñones, leche de coco, queso de anacardo fermentado, salsa de soja, eneldo, hojuelas de chile, ajo.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Delicias Asiáticas',
          items: [
            {
              name: 'Arroz con Dados de Tofu y Ensalada de Mango',
              description:
                'Arroz integral, dados de tofu fritos en salsa, mango, cebolla, aguacate, ensalada, mayonesa picante, salsa de soja.',
              price: '89.000',
            },
            {
              name: 'Fideos de Verduras',
              description:
                'Fideos linguine, shiitake, calabacín, zanahoria, jengibre, ajo, salsa de soja, azúcar de coco, sal, sésamo, cilantro, tempeh de soja.',
              price: '110.000',
            },
            {
              name: 'Curry Amarillo Tailandés con Arroz y Tofu',
              description:
                'Arroz integral, leche de coco orgánica, calabaza, camote, tomate, pimiento rojo, berenjena, calabacín, champiñones, cilantro, cebolla verde, curry amarillo, anacardos.',
              price: '99.000',
            },
            {
              name: 'Local Buddha Bowl',
              description:
                'Fideos de arroz integral, piel de tofu marinada en salsa de ajo, algas en salsa, flor de banano, brotes de soja, ensalada, menta, albahaca, mostaza de hoja, col lombarda, cacahuetes, salsa de cacahuete, sésamo.',
              price: '89.000',
            },
            {
              name: 'Dumplings Momo',
              description:
                'Harina integral, espinacas, tofu, cebolla, salsa de soja y mayonesa.',
              price: '125.000',
            },
          ],
        },
        {
          categoryName: '"Carne" de Origen Vegetal',
          items: [
            {
              name: 'Hamburguesa "NO TERNERA"',
              description:
                "Bollo integral, medallón vegetal Let's Plant, mostaza, ensalada, tomate, mayonesa picante, queso de anacardo, pepinillo, cebolla, salsa BBQ.",
              price: '175.000',
            },
            {
              name: 'Quesadilla "Carnosa"',
              description:
                "Tortillas integrales, medallón vegetal Let's Plant, pimiento rojo, berenjena, calabacín, salsa, puré de aguacate, queso de anacardo.",
              price: '185.000',
            },
            {
              name: 'Pasta con Medallón Vegano',
              description:
                "Pasta, medallón vegetal Let's Plant, queso de anacardo, tomate, microverdes, pimiento, salsa BBQ.",
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Ensaladas',
          items: [
            {
              name: 'Ensalada de Quinoa con Alcachofas Marinadas',
              description:
                'Quinoa, alcachofas marinadas, tofu, pepino, cebolla roja, mango, tomates, pimiento rojo, aguacate, lima, aceite de oliva, orégano, sal del Himalaya, aderezo de mostaza.',
              price: '85.000',
            },
            {
              name: 'Ensalada César con Tempeh',
              description:
                'Lechuga, eneldo, albahaca, cilantro, tempeh de soja en salsa, crotones, tomates cherry, salsa de eneldo y anacardo.',
              price: '79.000',
            },
            {
              name: 'Ensalada Probiótica',
              description:
                'Col fermentada natural, remolacha, zanahoria, cebolla roja, aceite de oliva. Sin gluten.',
              price: '65.000',
            },
            {
              name: 'Ensalada Coreana',
              description:
                'Piel de tofu (fuchzh), zanahoria, ajo, jengibre, aceite de sésamo, salsa de soja, sal, chile, sriracha.',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Postres Raw (Sin azúcar ni gluten)',
          items: [
            {
              name: 'Tarta Snickers',
              description:
                'Tarta crudivegana con cacahuetes, caramelo de dátiles y cobertura de chocolate. Sin azúcar ni gluten.',
              price: '85.000',
            },
            {
              name: 'Tarta de Zanahoria',
              description:
                'Tarta de zanahoria crudivegana con especias, nueces y delicada crema de anacardos.',
              price: '79.000',
            },
            {
              name: 'Tarta Bounty',
              description:
                'Tarta de coco crudivegana con una capa de chocolate.',
              price: '75.000',
            },
            {
              name: 'Tarta de Frutos Rojos / Fresa',
              description:
                'Tarta crudivegana ligera con bayas silvestres o fresas y crema de anacardos.',
              price: '85.000',
            },
            {
              name: 'Brownie de Chocolate',
              description:
                'Postre de chocolate intenso a base de cacao y nueces.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Té Matcha y Lattes',
          items: [
            {
              name: 'Matcha Latte',
              description:
                'Té verde matcha japonés con leche de coco или fresca.',
              price: '45.000 / 50.000',
            },
            {
              name: 'Matcha Latte Rosa',
              description: 'Matcha con agua de rosas o polvo de pitaya.',
              price: '50.000 / 55.000',
            },
            {
              name: 'Latte Azul (Butterfly Pea)',
              description:
                'Bebida de flores de clitoria con leche (sin cafeína).',
              price: '45.000 / 50.000',
            },
            {
              name: 'Leche Dorada (Cúrcuma Latte)',
              description:
                'Bebida reconfortante con cúrcuma, especias y leche de coco.',
              price: '45.000 / 50.000',
            },
          ],
        },
        {
          categoryName: 'Complementos del Menú Principal',
          items: [
            {
              name: 'Queso de Anacardo (Porción extra)',
              description:
                'Nuestro queso fermentado artesanal de anacardos activados.',
              price: '20.000',
            },
            {
              name: 'Pan de Masa Madre (2 trozos)',
              description: 'Pan integral sin levadura.',
              price: '15.000',
            },
            {
              name: 'Aguacate (Porción)',
              description: 'Aguacate fresco troceado.',
              price: '25.000',
            },
            {
              name: 'Chucrut con Remolacha',
              description: 'Col fermentada casera (probiótica).',
              price: '20.000',
            },
          ],
        },
        {
          categoryName: 'Para Amantes de la Pasta',
          items: [
            {
              name: 'Pasta Pesto',
              description:
                'Fideos linguine, pesto vegano casero, tomates cherry amarillos asados, microverdes, aceite de oliva, orégano, nutmesan (parmesano vegano).',
              price: '115.000',
            },
            {
              name: 'Pasta Stroganoff',
              description:
                'Espaguetis, champiñones, leche de coco orgánica, queso de anacardo fermentado, salsa de soja, eneldo, cebolla roja, hojuelas de chile, ajo, aceite de oliva.',
              price: '120.000',
            },
            {
              name: 'Pasta Alfredo Vegana con Champiñones',
              description:
                'Fideos linguine, cebolla roja, ajo, crema de queso de anacardo, jugo de lima, microverdes, nutmesan, champiñones.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Sopas Reconfortantes',
          items: [
            {
              name: 'Crema de Calabaza + Quinoa',
              description:
                'Calabaza, leche de coco, cúrcuma, tomate, queso de anacardo fermentado, ajo, quinoa, semillas de calabaza. Sin gluten.',
              price: '85.000',
            },
            {
              name: 'Crema de Tomate + Frijoles Adzuki + Crotones de Ajo',
              description:
                'Tomate, pimiento rojo, ajo, pesto, frijoles adzuki, semillas, crotones de ajo, leche de coco.',
              price: '85.000',
            },
            {
              name: 'Sopa Simple (Sin cobertura)',
              description: 'Opciones: Calabaza o Tomate.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Cocina Eslava',
          items: [
            {
              name: 'Tofuniki (Syrniki de Tofu)',
              description:
                'Tofu, coco rallado, harina integral, mango, fresa, caramelo de maracuyá, azúcar de caña, sirope de palma, menta, semillas.',
              price: '95.000',
            },
            {
              name: 'Vareniki de Cereza',
              description:
                'Harina de trigo, cerezas, tofu, azúcar de caña, leche de coco, mermelada de pitaya.',
              price: '115.000',
            },
            {
              name: 'Vareniki de Patata',
              description:
                'Harina integral, patatas, cebollas, salsa de anacardo y eneldo, chucrut (col, remolacha, zanahoria).',
              price: '125.000',
            },
            {
              name: 'Sopa Solyanka',
              description:
                'Patatas, tofu firme, aceitunas negras, limón, pepinillos, eneldo, khmeli-suneli, cebolla, ajo, pasta de tomate, pan de masa madre, queso de anacardo.',
              price: '130.000',
            },
          ],
        },
        {
          categoryName: 'Postres y Snacks',
          items: [
            {
              name: 'Bolas de Felicidad (Bliss Balls)',
              description:
                'Dulces saludables de frutos secos y nueces. Variantes: Maní o Chocolate.',
              price: '20.000',
            },
            {
              name: 'Galleta con Pepitas de Chocolate',
              description: 'Galleta vegana casera con trozos de chocolate.',
              price: '25.000',
            },
            {
              name: 'Pudín de Chía',
              description:
                'Semillas de chía, leche de coco, sirope, fruta fresca.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Guarniciones y Extras',
          items: [
            {
              name: 'Arroz Integral',
              description: 'Porción de arroz integral cocido.',
              price: '15.000',
            },
            {
              name: 'Trigo Sarraceno',
              description: 'Porción de trigo sarraceno cocido.',
              price: '30.000',
            },
            {
              name: 'Pan de Masa Madre (2 trozos)',
              description: 'Pan integral casero.',
              price: '15.000',
            },
            {
              name: 'Aguacate (Mitad)',
              description: 'Aguacate fresco rebanado.',
              price: '20.000',
            },
            {
              name: 'Chucrut',
              description: 'Col fermentada casera con remolacha.',
              price: '20.000',
            },
            {
              name: 'Queso de Anacardo / Mayonesa de Anacardo',
              description: 'Porción extra de salsa vegana casera.',
              price: '20.000',
            },
            {
              name: 'Medallón Vegetal (Extra)',
              description: "Medallón Let's Plant extra para cualquier plato.",
              price: '85.000',
            },
          ],
        },
      ],
    },

    fr: {
      title: 'Kurumi - Restaurant Végétalien',
      description:
        'Le menu à base de plantes comprend des plats italiens et slaves faits maison, des spécialités asiatiques, des bols de Bouddha copieux, une cuisine crue éclatante et de somptueux desserts végétaliens.',
      fullDescription: `
<p>Le menu à base de plantes comprend des plats italiens et slaves faits maison, des spécialités asiatiques, des bols de Bouddha copieux, une cuisine crue éclatante et de somptueux desserts végétaliens.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Petit-déjeuner/Brunch/Déjeuner',
          items: [
            {
              name: 'Pancakes Avoine et Coco',
              description:
                'Avoine, lait de coco, banane, extrait de vanille. Garniture : pudding de chia, confiture de chia, beurre de cacahuète, mélange de noix et graines, banane, mangue.',
              price: '105.000',
            },
            {
              name: "Porridge d'Avoine au Pudding de Chia et Confiture de Pitaya",
              description:
                "Flocons d'avoine, pudding de chia, confiture de chia, lait de coco, banane, ananas, mélange de graines et noix, menthe, beurre de cajou.",
              price: '90.000',
            },
            {
              name: 'Omelette Protéinée aux Pois Chiches',
              description:
                "Farine de pois chiches, épices, aneth, sel de l'Himalaya, purée d'avocat, poivron rouge frais, micropousses, tomates rôties, pleurotes sautées, mayonnaise maison pimentée. Sans gluten.",
              price: '99.000',
            },
            {
              name: 'Tofu "Bénédictine"',
              description:
                'Pains complets, salade, tomate, avocat, tofu frit, sauce hollandaise végétalienne, "bacon" de tempeh de soja.',
              price: '120.000',
            },
            {
              name: 'Quesadilla aux Haricots',
              description:
                "Tortillas complètes maison, haricots adzuki activés en sauce spéciale, purée d'avocat, crème de cajou, légumes rôtis, salsa.",
              price: '110.000',
            },
          ],
        },
        {
          categoryName: 'Toasts Nutritifs / Sandwiches',
          items: [
            {
              name: 'Sandwich au Tofu Fumé et Oignons Caramélisés',
              description:
                'Baguette complète au levain, oignons caramélisés, tofu ferme, cornichons, carottes fumées, fromage de cajou fumé.',
              price: '110.000',
            },
            {
              name: 'Baguette Italienne au Fromage Brie',
              description:
                'Baguette complète au levain, fromage Brie maison, crème de cajou, sauce pesto maison, tomates, tomates séchées, micropousses, oignon rouge, olives vertes, origan.',
              price: '115.000',
            },
            {
              name: "Toast à l'Avocat et Tomates Séchées",
              description:
                "Toast au levain, purée d'avocat, tomates séchées, micropousses, salade.",
              price: '79.000',
            },
            {
              name: 'Toast "Cœur d\'Avocat"',
              description:
                "Toast complet au levain, sel de l'Himalaya, purée d'avocat, tomates cerises, mélange de graines, salade.",
              price: '65.000',
            },
            {
              name: 'Toast au Fromage et Champignons',
              description:
                'Toast complet au levain, fromage de cajou fermenté, avocat, paprika fumé, champignons de paille, aneth.',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Smoothie Bowls Superfood (350ml)',
          items: [
            {
              name: 'Choco Sense',
              description:
                'Banane, cacao en poudre, lait de coco. Garniture : banane, mélange de noix et graines, bliss ball au chocolat, chocolat noir, noix de coco râpée.',
              price: '99.000',
            },
            {
              name: 'My Favorite',
              description:
                'Mangue, banane, ananas, lait de coco. Garniture : ananas, mélange de noix et graines, chocolat noir, bliss ball à la cacahuète, noix de coco râpée.',
              price: '85.000',
            },
            {
              name: 'Happy Stomach',
              description:
                'Papaye, fraise, banane, lait de coco. Garniture : fraise, bliss ball à la cacahuète, mélange de noix et graines, noix de coco râpée, chocolat noir.',
              price: '95.000',
            },
            {
              name: 'Purple Boom',
              description:
                'Mûre, pitaya rouge, banane, lait de coco. Garniture : mangue, bliss ball au chocolat, mélange de noix et graines, noix de coco râpée, chocolat noir.',
              price: '99.000',
            },
            {
              name: 'Kurumi Smoothie Bowl',
              description:
                'Mangue, banane, spiruline en poudre, lait de coco. Garniture : fraise, fruit de la passion, bliss ball à la cacahuète, mélange de noix et graines, noix de coco râpée, chocolat noir.',
              price: '99.000',
            },
          ],
        },
        {
          categoryName: 'Dream Bowls',
          items: [
            {
              name: 'Burrito Bowl',
              description:
                "Riz complet, haricots adzuki activés en sauce tomate, purée d'avocat, tortilla, patate douce rôtie, aubergines et courgettes frites, poivron rouge, fromage de cajou fermenté, salsa, graines.",
              price: '120.000',
            },
            {
              name: 'Poke Bowl',
              description:
                'Riz complet, tempeh de soja en sauce, carottes fumées, avocat, ananas, concombre, edamame, gingembre rose mariné, nori, mayonnaise maison pimentée, noix mezun, oignon mariné.',
              price: '120.000',
            },
            {
              name: 'Stroganoff aux Champignons avec Riz Complet',
              description:
                'Riz complet, pain complet au levain, concombre malossol, oignon rouge mariné, champignons, lait de coco, fromage de cajou fermenté, sauce soja, aneth, flocons de piment, ail.',
              price: '110.000',
            },
            {
              name: 'Stroganoff aux Champignons avec Sarrasin',
              description:
                'Sarrasin, pain complet au levain, concombre malossol, oignon rouge mariné, champignons, lait de coco, fromage de cajou fermenté, sauce soja, aneth, flocons de piment, ail.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Délices Asiatiques',
          items: [
            {
              name: 'Riz aux Dés de Tofu et Salade de Mangue',
              description:
                'Riz complet, dés de tofu frits en sauce, mangue, oignon, avocat, salade, mayonnaise pimentée, sauce soja.',
              price: '89.000',
            },
            {
              name: 'Nouilles aux Légumes',
              description:
                'Nouilles linguine, shiitake, courgette, carotte, gingembre, ail, sauce soja, sucre de coco, sel, sésame, cynorrhodon, tempeh de soja.',
              price: '110.000',
            },
            {
              name: 'Curry Jaune Thaï au Riz Complet et Tofu',
              description:
                'Riz complet, lait de coco bio, citrouille, patate douce, tomate, poivron rouge, aubergine, courgette, champignons, coriandre, oignon vert, curry jaune, noix de cajou.',
              price: '99.000',
            },
            {
              name: 'Local Buddha Bowl',
              description:
                "Nouilles de riz complet, peau de tofu marinée à l'ail, algues en sauce, fleurs de bananier, pousses de soja, salade, menthe, basilic, moutarde en feuille, chou rouge, cacahuètes, sauce cacahuète, sésame.",
              price: '89.000',
            },
            {
              name: 'Momo Dumplings',
              description:
                'Farine complète, épinards, tofu, oignon, sauce soja-mayonnaise.',
              price: '125.000',
            },
          ],
        },
        {
          categoryName: '"Viande" Végétale',
          items: [
            {
              name: 'Burger "PAS DE BŒUF"',
              description:
                "Pain complet, steak végétal Let's Plant, moutarde, salade, tomate, mayonnaise pimentée, fromage de cajou, cornichon, oignon, sauce BBQ.",
              price: '175.000',
            },
            {
              name: 'Quesadilla "Carnée"',
              description:
                "Tortillas complètes, steak végétal Let's Plant, poivron rouge, aubergine, courgette, salsa, purée d'avocat, fromage de cajou.",
              price: '185.000',
            },
            {
              name: 'Pâtes au Steak Végétalien',
              description:
                "Pâtes, steak végétal Let's Plant, fromage de cajou, tomate, micropousses, poivron, sauce BBQ.",
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Salades',
          items: [
            {
              name: 'Salade de Quinoa aux Artichauts Marinés',
              description:
                "Quinoa, artichauts marinés, tofu, concombre, oignon rouge, mangue, tomates, poivron rouge, avocat, citron vert, huile d'olive, origan, sel de l'Himalaya, sauce moutarde.",
              price: '85.000',
            },
            {
              name: 'Salade César au Tempeh',
              description:
                'Laitue, aneth, basilic, coriandre, tempeh de soja en sauce, croûtons, tomates cerises, sauce aneth-cajou.',
              price: '79.000',
            },
            {
              name: 'Salade Probiotique',
              description:
                "Chou fermenté naturel, betterave, carotte, oignon rouge, huile d'olive. Sans gluten.",
              price: '65.000',
            },
            {
              name: 'Salade Coréenne',
              description:
                'Peau de tofu (fuchzh), carotte, ail, gingembre, huile de sésame, sauce soja, sel, piment, sriracha.',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Desserts Raw (Sans sucre ni gluten)',
          items: [
            {
              name: 'Gâteau Snickers',
              description:
                'Gâteau cru aux cacahuètes, caramel de dattes et glaçage au chocolat. Sans sucre ni gluten.',
              price: '85.000',
            },
            {
              name: 'Gâteau aux Carottes',
              description:
                'Gâteau cru à la carotte avec épices, noix et crème de cajou onctueuse.',
              price: '79.000',
            },
            {
              name: 'Gâteau Bounty',
              description:
                'Gâteau cru à la noix de coco avec une couche de chocolat.',
              price: '75.000',
            },
            {
              name: 'Gâteau aux Fruits Rouges / Fraise',
              description:
                'Gâteau cru léger aux baies sauvages ou fraises et crème de cajou.',
              price: '85.000',
            },
            {
              name: 'Brownie au Chocolat',
              description:
                'Dessert chocolaté intense à base de cacao et de noix.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Thé Matcha et Latté',
          items: [
            {
              name: 'Matcha Latté',
              description:
                'Thé vert matcha japonais au lait de coco ou lait frais.',
              price: '45.000 / 50.000',
            },
            {
              name: 'Matcha Latté Rose',
              description: 'Matcha avec eau de rose ou poudre de pitaya.',
              price: '50.000 / 55.000',
            },
            {
              name: 'Latté Bleu (Butterfly Pea)',
              description:
                'Boisson aux fleurs de clitoria avec lait (sans caféine).',
              price: '45.000 / 50.000',
            },
            {
              name: "Lait d'Or (Curcuma Latté)",
              description:
                'Boisson réconfortante au curcuma, épices et lait de coco.',
              price: '45.000 / 50.000',
            },
          ],
        },
        {
          categoryName: 'Suppléments au Menu Principal',
          items: [
            {
              name: 'Fromage de Cajou (Portion extra)',
              description:
                'Notre fromage fermenté signature à base de noix de cajou activées.',
              price: '20.000',
            },
            {
              name: 'Pain au Levain (2 tranches)',
              description: 'Pain complet sans levure.',
              price: '15.000',
            },
            {
              name: 'Avocat (Portion)',
              description: 'Avocat frais tranché.',
              price: '25.000',
            },
            {
              name: 'Choucroute à la Betterave',
              description: 'Chou fermenté maison (probiotique).',
              price: '20.000',
            },
          ],
        },
        {
          categoryName: 'Pour les Amoureux des Pâtes',
          items: [
            {
              name: 'Pâtes au Pesto',
              description:
                "Nouilles linguine, pesto végétalien maison, tomates cerises jaunes rôties, micropousses, huile d'olive, origan, nutmesan (parmesan végétalien).",
              price: '115.000',
            },
            {
              name: 'Pâtes Stroganoff',
              description:
                "Spaghettis, champignons, lait de coco bio, fromage de cajou fermenté, sauce soja, aneth, oignon rouge, flocons de piment, ail, huile d'olive.",
              price: '120.000',
            },
            {
              name: 'Pâtes Alfredo Végétaliennes aux Champignons',
              description:
                'Nouilles linguine, oignon rouge, ail, fromage à la crème de cajou, jus de citron vert, micropousses, nutmesan, champignons.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Soupes Réconfortantes',
          items: [
            {
              name: 'Velouté de Citrouille + Quinoa',
              description:
                'Citrouille, lait de coco, curcuma, tomate, fromage de cajou fermenté, ail, quinoa, graines de courge. Sans gluten.',
              price: '85.000',
            },
            {
              name: "Velouté de Tomate + Haricots Adzuki + Croûtons à l'Ail",
              description:
                "Tomate, poivron rouge, ail, pesto, haricots adzuki, graines, croûtons à l'ail, lait de coco.",
              price: '85.000',
            },
            {
              name: 'Soupe Simple (Sans garniture)',
              description: 'Options : Citrouille ou Tomate.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Cuisine Slave',
          items: [
            {
              name: 'Tofuniki (Syrniki de Tofu)',
              description:
                'Tofu, noix de coco râpée, farine complète, mangue, fraise, caramel au fruit de la passion, sucre de canne, sirop de palme, menthe, graines.',
              price: '95.000',
            },
            {
              name: 'Vareniki à la Cerise',
              description:
                'Farine de blé, cerises, tofu, sucre de canne, lait de coco, confiture de pitaya.',
              price: '115.000',
            },
            {
              name: 'Vareniki à la Pomme de Terre',
              description:
                'Farine complète, pommes de terre, oignons, sauce cajou-aneth, choucroute (chou, betterave, carotte).',
              price: '125.000',
            },
            {
              name: 'Soupe Solyanka',
              description:
                'Pommes de terre, tofu ferme, olives noires, citron, cornichons, aneth, khmeli-suneli, oignon, ail, concentré de tomate, pain au levain, fromage de cajou.',
              price: '130.000',
            },
          ],
        },
        {
          categoryName: 'Desserts et Snacks',
          items: [
            {
              name: 'Bliss Balls',
              description:
                'Douceurs saines à base de fruits secs et de noix. Variantes : Cacahuète ou Chocolat.',
              price: '20.000',
            },
            {
              name: 'Cookie aux Pépites de Chocolat',
              description:
                'Cookie végétalien maison avec morceaux de chocolat.',
              price: '25.000',
            },
            {
              name: 'Chia Pudding',
              description:
                'Graines de chia, lait de coco, sirop, fruits frais.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Accompagnements et Extras',
          items: [
            {
              name: 'Riz Complet',
              description: 'Portion de riz complet bouilli.',
              price: '15.000',
            },
            {
              name: 'Sarrasin',
              description: 'Portion de sarrasin bouilli.',
              price: '30.000',
            },
            {
              name: 'Pain au Levain (2 tranches)',
              description: 'Pain complet maison.',
              price: '15.000',
            },
            {
              name: 'Avocat (Moitié)',
              description: 'Avocat frais tranché.',
              price: '20.000',
            },
            {
              name: 'Choucroute',
              description: 'Chou fermenté maison à la betterave.',
              price: '20.000',
            },
            {
              name: 'Fromage de Cajou / Mayo de Cajou',
              description:
                'Portion supplémentaire de sauce végétalienne maison.',
              price: '20.000',
            },
            {
              name: 'Steak Végétal (Extra)',
              description:
                "Steak Let's Plant supplémentaire pour n'importe quel plat.",
              price: '85.000',
            },
          ],
        },
      ],
    },

    vn: {
      title: 'Kurumi - Nhà hàng Thuần chay',
      description:
        'Thực đơn thuần chay bao gồm các món ăn Ý và Slavic truyền thống, các món đặc biệt châu Á, bát Buddha bổ dưỡng, thực phẩm thô (raw food) tươi mới và các món tráng miệng thuần chay cao cấp.',
      fullDescription: `
<p>Thực đơn thuần chay bao gồm các món ăn Ý và Slavic truyền thống, các món đặc biệt châu Á, bát Buddha bổ dưỡng, thực phẩm thô (raw food) tươi mới và các món tráng miệng thuần chay cao cấp.</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Bữa sáng / Bữa trưa muộn',
          items: [
            {
              name: 'Bánh kếp Yến mạch Dừa',
              description:
                'Yến mạch, sữa dừa, chuối, chiết xuất vani. Topping: pudding hạt chia, mứt chia, bơ đậu phộng, hạt và hạt hỗn hợp, chuối, xoài.',
              price: '105.000',
            },
            {
              name: 'Cháo Yến mạch với Pudding Chia và Mứt Thanh long',
              description:
                'Yến mạch, pudding hạt chia, mứt chia, sữa dừa, chuối, dứa, hỗn hợp hạt, bạc hà, bơ hạt điều.',
              price: '90.000',
            },
            {
              name: 'Trứng cuộn Protein từ Đậu gà',
              description:
                'Bột đậu gà, gia vị, thì là, muối hồng Himalaya, bơ nghiền, ớt chuông tươi, vi chất dinh dưỡng (microgreens), cà chua nướng, nấm bào ngư chiên, sốt mayonnaise cay tự làm. Không chứa gluten.',
              price: '99.000',
            },
            {
              name: 'Tofu "Benedict"',
              description:
                'Bánh mì ngũ cốc nguyên cám, salad, cà chua, bơ, đậu phụ chiên, sốt hollandaise thuần chay, "thịt xông khói" tempeh đậu nành.',
              price: '120.000',
            },
            {
              name: 'Bánh Quesadilla Đậu',
              description:
                'Bánh tortilla ngũ cốc nguyên cám tự làm, đậu adzuki kích hoạt trong sốt đặc biệt, bơ nghiền, kem hạt điều, rau củ nướng, sốt salsa.',
              price: '110.000',
            },
          ],
        },
        {
          categoryName: 'Bánh mì nướng Dinh dưỡng / Sandwich',
          items: [
            {
              name: 'Sandwich Đậu phụ xông khói và Hành tây caramel',
              description:
                'Bánh mì baguette ngũ cốc nguyên cám men tự nhiên, hành tây caramel, đậu phụ cứng, dưa chuột muối, cà rốt xông khói, phô mai hạt điều xông khói.',
              price: '110.000',
            },
            {
              name: 'Bánh mì Baguette Ý với Phô mai Brie',
              description:
                'Bánh mì baguette ngũ cốc nguyên cám men tự nhiên, phô mai Brie tự làm, kem hạt điều, sốt pesto tự làm, cà chua, cà chua sấy khô, vi chất dinh dưỡng, hành tây tím, ô liu xanh, kinh giới cay.',
              price: '115.000',
            },
            {
              name: 'Bánh mì nướng Bơ và Cà chua sấy khô',
              description:
                'Bánh mì nướng men tự nhiên, bơ nghiền, cà chua sấy khô, vi chất dinh dưỡng, salad.',
              price: '79.000',
            },
            {
              name: 'Bánh mì nướng "Trái tim Bơ"',
              description:
                'Bánh mì nướng ngũ cốc nguyên cám men tự nhiên, muối Himalaya, bơ nghiền, cà chua bi, hỗn hợp hạt, salad.',
              price: '65.000',
            },
            {
              name: 'Bánh mì nướng Phô mai Nấm',
              description:
                'Bánh mì nướng ngũ cốc nguyên cám men tự nhiên, phô mai hạt điều lên men, bơ, ớt bột xông khói, nấm rơm, thì là.',
              price: '75.000',
            },
          ],
        },
        {
          categoryName: 'Superfood Smoothie Bowls (350ml)',
          items: [
            {
              name: 'Choco Sense',
              description:
                'Chuối, bột ca cao, sữa dừa. Topping: chuối, hỗn hợp hạt, viên bliss ball socola, socola đen, dừa nạo.',
              price: '99.000',
            },
            {
              name: 'My Favorite',
              description:
                'Xoài, chuối, dứa, sữa dừa. Topping: dứa, hỗn hợp hạt, socola đen, viên bliss ball đậu phộng, dừa nạo.',
              price: '85.000',
            },
            {
              name: 'Happy Stomach',
              description:
                'Đu đủ, dâu tây, chuối, sữa dừa. Topping: dâu tây, viên bliss ball đậu phộng, hỗn hợp hạt, dừa nạo, socola đen.',
              price: '95.000',
            },
            {
              name: 'Purple Boom',
              description:
                'Dâu tằm, thanh long đỏ, chuối, sữa dừa. Topping: xoài, viên bliss ball socola, hỗn hợp hạt, dừa nạo, socola đen.',
              price: '99.000',
            },
            {
              name: 'Kurumi Smoothie Bowl',
              description:
                'Xoài, chuối, bột tảo xoắn spirulina, sữa dừa. Topping: dâu tây, chanh leo, viên bliss ball đậu phộng, hỗn hợp hạt, dừa nạo, socola đen.',
              price: '99.000',
            },
          ],
        },
        {
          categoryName: 'Dream Bowls',
          items: [
            {
              name: 'Burrito Bowl',
              description:
                'Gạo lứt, đậu adzuki kích hoạt trong sốt cà chua, bơ nghiền, bánh tortilla, khoai lang nướng, cà tím và bí ngòi chiên, ớt chuông đỏ, phô mai hạt điều lên men, sốt salsa, các loại hạt.',
              price: '120.000',
            },
            {
              name: 'Poke Bowl',
              description:
                'Gạo lứt, tempeh đậu nành trong sốt, cà rốt xông khói, bơ, dứa, dưa chuột, đậu nành edamame, gừng hồng muối, rong biển nori, sốt mayonnaise cay tự làm, hạt mezun, hành tây muối.',
              price: '120.000',
            },
            {
              name: 'Nấm Stroganoff với Gạo lứt',
              description:
                'Gạo lứt, bánh mì ngũ cốc nguyên cám men tự nhiên, dưa chuột muối nhẹ, hành tím muối, nấm, sữa dừa, phô mai hạt điều lên men, nước tương, thì là, ớt bột, tỏi.',
              price: '110.000',
            },
            {
              name: 'Nấm Stroganoff với Kiều mạch',
              description:
                'Kiều mạch, bánh mì ngũ cốc nguyên cám men tự nhiên, dưa chuột muối nhẹ, hành tím muối, nấm, sữa dừa, phô mai hạt điều lên men, nước tương, thì là, ớt bột, tỏi.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Món ngon Châu Á',
          items: [
            {
              name: 'Cơm Đậu phụ viên và Salad Xoài',
              description:
                'Gạo lứt, đậu phụ chiên viên trong sốt, xoài, hành tây, bơ, salad, mayonnaise cay, nước tương.',
              price: '89.000',
            },
            {
              name: 'Mì rau củ',
              description:
                'Mì linguine, nấm hương, bí ngòi, cà rốt, gừng, tỏi, nước tương, đường dừa, muối, mè, rau mùi, tempeh đậu nành.',
              price: '110.000',
            },
            {
              name: 'Cà ri Thái vàng với Gạo lứt và Đậu phụ',
              description:
                'Gạo lứt, sữa dừa hữu cơ, bí đỏ, khoai lang, cà chua, ớt chuông đỏ, cà tím, bí ngòi, nấm, rau mùi, hành lá, cà ri vàng, hạt điều.',
              price: '99.000',
            },
            {
              name: 'Local Buddha bowl',
              description:
                'Bún gạo lứt, phù trúc (váng đậu) tẩm sốt tỏi, rong biển trong sốt, hoa chuối, giá đỗ, salad, bạc hà, húng quế, cải bẹ xanh, bắp cải tím, đậu phộng, sốt đậu phộng, mè.',
              price: '89.000',
            },
            {
              name: 'Bánh xếp Momo',
              description:
                'Bột nguyên cám, rau bina, đậu phụ, hành tây, sốt mayonnaise-tương.',
              price: '125.000',
            },
          ],
        },
        {
          categoryName: '"Thịt" Thực vật',
          items: [
            {
              name: 'Burger "KHÔNG PHẢI THỊT BÒ"',
              description:
                "Bánh mì ngũ cốc nguyên cám, nhân thịt thực vật Let's Plant, mù tạt, salad, cà chua, mayonnaise cay, phô mai hạt điều, dưa chuột muối, hành tây, sốt BBQ.",
              price: '175.000',
            },
            {
              name: 'Quesadilla "Thịt"',
              description:
                "Bánh tortilla ngũ cốc nguyên cám, nhân thịt thực vật Let's Plant, ớt chuông đỏ, cà tím, bí ngòi, sốt salsa, bơ nghiền, phô mai hạt điều.",
              price: '185.000',
            },
            {
              name: 'Mì Ý với thịt viên thuần chay',
              description:
                "Mì Ý, nhân thịt thực vật Let's Plant, phô mai hạt điều, cà chua, vi chất dinh dưỡng, tiêu, sốt BBQ.",
              price: '185.000',
            },
          ],
        },
        {
          categoryName: 'Salad',
          items: [
            {
              name: 'Salad Diêm mạch với Atisô ngâm',
              description:
                'Diêm mạch (quinoa), atisô ngâm, đậu phụ, dưa chuột, hành tím, xoài, cà chua, ớt chuông đỏ, bơ, chanh, dầu ô liu, kinh giới, muối Himalaya, sốt mù tạt.',
              price: '85.000',
            },
            {
              name: 'Salad Caesar với Tempeh',
              description:
                'Xà lách lúa, thì là, húng quế, rau mùi, tempeh đậu nành trong sốt, bánh mì vụn, cà chua bi, sốt hạt điều-thì là.',
              price: '79.000',
            },
            {
              name: 'Salad Probiotic',
              description:
                'Bắp cải lên men tự nhiên, củ cải đường, cà rốt, hành tím, dầu ô liu. Không chứa gluten.',
              price: '65.000',
            },
            {
              name: 'Salad kiểu Hàn Quốc',
              description:
                'Phù trúc (fuchzh), cà rốt, tỏi, gừng, dầu mè, nước tương, muối, ớt, sriracha.',
              price: '50.000',
            },
          ],
        },
        {
          categoryName: 'Tráng miệng Raw (Không đường & gluten)',
          items: [
            {
              name: 'Bánh Snickers',
              description:
                'Bánh sống (raw) với đậu phộng, caramel từ chà là và lớp phủ socola. Không đường và gluten.',
              price: '85.000',
            },
            {
              name: 'Bánh Cà rốt',
              description:
                'Bánh cà rốt sống với gia vị, quả óc chó và kem hạt điều mềm mịn.',
              price: '79.000',
            },
            {
              name: 'Bánh Bounty',
              description: 'Bánh dừa sống với lớp socola.',
              price: '75.000',
            },
            {
              name: 'Bánh Dâu tây / Quả mọng',
              description:
                'Bánh sống nhẹ với quả mọng dại hoặc dâu tây và kem hạt điều.',
              price: '85.000',
            },
            {
              name: 'Chocolate Brownie',
              description:
                'Món tráng miệng socola đậm đà từ ca cao và các loại hạt.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Trà Matcha và Latte',
          items: [
            {
              name: 'Matcha Latte',
              description:
                'Trà xanh matcha Nhật Bản với sữa dừa hoặc sữa tươi.',
              price: '45.000 / 50.000',
            },
            {
              name: 'Pink Matcha Latte',
              description: 'Matcha thêm nước hoa hồng hoặc bột thanh long.',
              price: '50.000 / 55.000',
            },
            {
              name: 'Blue Latte (Hoa Đậu Biếc)',
              description: 'Thức uống hoa đậu biếc với sữa (không caffeine).',
              price: '45.000 / 50.000',
            },
            {
              name: 'Sữa Nghệ (Turmeric Latte)',
              description: 'Thức uống ấm áp với nghệ, gia vị và sữa dừa.',
              price: '45.000 / 50.000',
            },
          ],
        },
        {
          categoryName: 'Món ăn kèm & Thêm',
          items: [
            {
              name: 'Gạo lứt',
              description: 'Một phần gạo lứt luộc.',
              price: '15.000',
            },
            {
              name: 'Kiều mạch',
              description: 'Một phần kiều mạch luộc.',
              price: '30.000',
            },
            {
              name: 'Bánh mì men tự nhiên (2 lát)',
              description: 'Bánh mì ngũ cốc nguyên cám tự làm.',
              price: '15.000',
            },
            {
              name: 'Quả bơ (Nửa quả)',
              description: 'Bơ tươi cắt lát.',
              price: '20.000',
            },
            {
              name: 'Bắp cải muối',
              description: 'Bắp cải lên men tự làm với củ cải đường.',
              price: '20.000',
            },
            {
              name: 'Phô mai hạt điều / Mayo hạt điều',
              description: 'Thêm một phần sốt thuần chay tự làm.',
              price: '20.000',
            },
            {
              name: 'Nhân thịt thực vật (Thêm)',
              description: "Thêm nhân thịt Let's Plant cho bất kỳ món nào.",
              price: '85.000',
            },
          ],
        },
        {
          categoryName: 'Dành cho người yêu Mì Ý',
          items: [
            {
              name: 'Mì Ý Pesto',
              description:
                'Mì linguine, sốt pesto thuần chay tự làm, cà chua bi vàng nướng, vi chất dinh dưỡng, dầu ô liu, kinh giới, nutmesan (parmesan thuần chay).',
              price: '115.000',
            },
            {
              name: 'Mì Ý Stroganoff',
              description:
                'Mì Ý, nấm, sữa dừa hữu cơ, phô mai hạt điều lên men, nước tương, thì là, hành tím, ớt bột, tỏi, dầu ô liu.',
              price: '120.000',
            },
            {
              name: 'Mì Ý Alfredo thuần chay với Nấm',
              description:
                'Mì linguine, hành tím, tỏi, phô mai kem hạt điều, nước chanh, vi chất dinh dưỡng, nutmesan, nấm.',
              price: '115.000',
            },
          ],
        },
        {
          categoryName: 'Súp ấm nóng',
          items: [
            {
              name: 'Súp kem Bí đỏ + Diêm mạch',
              description:
                'Bí đỏ, sữa dừa, nghệ, cà chua, phô mai hạt điều lên men, tỏi, diêm mạch, hạt bí. Không chứa gluten.',
              price: '85.000',
            },
            {
              name: 'Súp kem Cà chua + Đậu adzuki + Bánh mì tỏi',
              description:
                'Cà chua, ớt chuông đỏ, tỏi, sốt pesto, đậu adzuki, các loại hạt, bánh mì tỏi, sữa dừa.',
              price: '85.000',
            },
            {
              name: 'Súp đơn giản (Không topping)',
              description: 'Tùy chọn: Bí đỏ hoặc Cà chua.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Ẩm thực Slavic',
          items: [
            {
              name: 'Tofuniki (Bánh rán đậu phụ)',
              description:
                'Đậu phụ, dừa nạo, bột nguyên cám, xoài, dâu tây, caramel chanh leo, đường mía, siro thốt nốt, bạc hà, hạt.',
              price: '95.000',
            },
            {
              name: 'Bánh Vareniki nhân Anh đào',
              description:
                'Bột mì, anh đào, đậu phụ, đường mía, sữa dừa, mứt thanh long.',
              price: '115.000',
            },
            {
              name: 'Bánh Vareniki nhân Khoai tây',
              description:
                'Bột nguyên cám, khoai tây, hành tây, sốt hạt điều-thì là, bắp cải muối (bắp cải, củ cải đường, cà rốt).',
              price: '125.000',
            },
            {
              name: 'Súp Solyanka',
              description:
                'Khoai tây, đậu phụ cứng, ô liu đen, chanh, dưa chuột muối, thì là, gia vị khmeli-suneli, hành tây, tỏi, sốt cà chua, bánh mì men tự nhiên, phô mai hạt điều.',
              price: '130.000',
            },
          ],
        },
        {
          categoryName: 'Tráng miệng và Đồ ăn nhẹ',
          items: [
            {
              name: 'Bliss Balls',
              description:
                'Kẹo bổ dưỡng từ trái cây khô và hạt. Tùy chọn: Đậu phộng hoặc Socola.',
              price: '20.000',
            },
            {
              name: 'Bánh quy Socola chip',
              description: 'Bánh quy thuần chay tự làm với socola miếng.',
              price: '25.000',
            },
            {
              name: 'Chia Pudding',
              description: 'Hạt chia, sữa dừa, siro, trái cây tươi.',
              price: '65.000',
            },
          ],
        },
      ],
    },

    slug: {
      en: 'kurumi',
      ru: 'kurumi',
      es: 'kurumi',
      fr: 'kurumi',
      vn: 'kurumi',
    },
  },
  //Rio Garden Coffee
  {
    id: 'rio-garden-coffee-hoi-an', // <-- ID теперь строковый
    coordinates: [15.885630712940545, 108.3345290124869], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'rio-garden-coffee.webp',
    en: {
      title: 'Rio Garden Coffee - Coffee Shop',
      description:
        'Coffee and drinks with rice field views, lots of ferns, greenery, and a koi pond',
      fullDescription: `
<p>Coffee and drinks with rice field views, lots of ferns, greenery, and a koi pond</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Drinks (Cold)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Fermented sparkling tea. Flavors: Classic, Ginger, Passion Fruit, or Mixed Berries (check availability).',
              price: '45.000',
            },
            {
              name: 'Homemade Lemonade',
              description:
                'Fresh lemon/lime juice, mint, a drop of syrup, and soda water.',
              price: '40.000',
            },
            {
              name: 'Fresh Coconut',
              description: 'Whole young coconut.',
              price: '35.000',
            },
            {
              name: 'Iced Coffee',
              description:
                'Black coffee or with your choice of plant-based milk over ice.',
              price: '40.000 / 50.000',
            },
            {
              name: 'Freshly Squeezed Juices',
              description: 'Orange, carrot, apple, or watermelon.',
              price: '55.000',
            },
          ],
        },
        {
          categoryName: 'Hot Drinks',
          items: [
            {
              name: 'Espresso',
              description: 'Classic strong coffee shot.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: 'Espresso shot with hot water.',
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latte',
              description: 'Made with oat or coconut milk.',
              price: '55.000',
            },
            {
              name: 'Herbal Tea (Pot)',
              description: 'Chamomile, Mint, Ginger, or local Vietnamese tea.',
              price: '45.000',
            },
            {
              name: 'Hot Cocoa with Marshmallows',
              description:
                'Hot chocolate drink with plant-based milk and vegan marshmallows.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Smoothie Bowl Add-ons',
          items: [
            {
              name: 'Extra Topping',
              description: 'Granola, chia seeds, nuts, or coconut flakes.',
              price: '15.000',
            },
            {
              name: 'Protein Powder',
              description:
                'A scoop of plant-based protein for your smoothie bowl.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    ru: {
      title: 'Rio Garden Coffee - Кофейня',
      description:
        'Кофе, напитки с видом на рисовые поля, много папоротников, зелени и пруд с карпами',
      fullDescription: `
<p>Кофе, напитки с видом на рисовые поля, много папоротников, зелени и пруд с карпами</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Напитки (Холодные)',
          items: [
            {
              name: 'Комбуча',
              description:
                'Ферментированный чайный гриб. Вкусы: классическая, имбирь, маракуйя или ягоды (наличие уточняйте).',
              price: '45.000',
            },
            {
              name: 'Домашний Лимонад',
              description:
                'Свежевыжатый сок лимона/лайма, мята, капля сиропа и содовая.',
              price: '40.000',
            },
            {
              name: 'Свежий кокос',
              description: 'Цельный молодой кокос.',
              price: '35.000',
            },
            {
              name: 'Холодный Кофе / Кофе со льдом',
              description:
                'Черный кофе или с добавлением растительного молока на ваш выбор.',
              price: '40.000 / 50.000',
            },
            {
              name: 'Свежевыжатые соки',
              description: 'Апельсин, морковь, яблоко или арбуз.',
              price: '55.000',
            },
          ],
        },
        {
          categoryName: 'Горячие напитки',
          items: [
            {
              name: 'Эспрессо',
              description: 'Классический крепкий кофе.',
              price: '30.000',
            },
            {
              name: 'Американо',
              description: 'Порция эспрессо с горячей водой.',
              price: '35.000',
            },
            {
              name: 'Капучино / Латте',
              description: 'На овсяном или кокосовом молоке.',
              price: '55.000',
            },
            {
              name: 'Травяной чай (в чайнике)',
              description:
                'Ромашка, мята, имбирный или местный вьетнамский чай.',
              price: '45.000',
            },
            {
              name: 'Какао с маршмэллоу',
              description:
                'Горячий шоколадный напиток на растительном молоке с веганскими зефирками.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Дополнения к Смузи-боулам',
          items: [
            {
              name: 'Дополнительный топпинг',
              description: 'Гранола, семена чиа, орехи или кокосовые хлопья.',
              price: '15.000',
            },
            {
              name: 'Протеиновый порошок',
              description: 'Порция растительного протеина в ваш смузи-боул.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    es: {
      title: 'Rio Garden Coffee',
      description:
        'Café, bebidas con vistas a los arrozales, helechos, vegetación y estanque de carpas',
      fullDescription: `
<p>Café, bebidas con vistas a los arrozales, helechos, vegetación y estanque de carpas</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Bebidas (Frías)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Té fermentado. Sabores: Clásico, Jengibre, Maracuyá o Bayas (consultar disponibilidad).',
              price: '45.000',
            },
            {
              name: 'Limonada Casera',
              description:
                'Zumo de limón/lima fresco, menta, una gota de sirope y soda.',
              price: '40.000',
            },
            {
              name: 'Coco Fresco',
              description: 'Coco joven entero.',
              price: '35.000',
            },
            {
              name: 'Café con Hielo',
              description:
                'Café solo o con la leche vegetal de su elección sobre hielo.',
              price: '40.000 / 50.000',
            },
            {
              name: 'Zumos Naturales',
              description: 'Naranja, zanahoria, manzana o sandía.',
              price: '55.000',
            },
          ],
        },
        {
          categoryName: 'Bebidas Calientes',
          items: [
            {
              name: 'Espresso',
              description: 'Café fuerte clásico.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: 'Espresso con agua caliente.',
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latte',
              description: 'Con leche de avena o de coco.',
              price: '55.000',
            },
            {
              name: 'Té de Hierbas (Tetera)',
              description: 'Manzanilla, Menta, Jengibre o té local vietnamita.',
              price: '45.000',
            },
            {
              name: 'Cacao con Malvaviscos',
              description:
                'Bebida de chocolate caliente con leche vegetal y malvaviscos veganos.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Extras para Smoothie Bowls',
          items: [
            {
              name: 'Topping Adicional',
              description:
                'Granola, semillas de chía, frutos secos o coco rallado.',
              price: '15.000',
            },
            {
              name: 'Proteína en Polvo',
              description: 'Una porción de proteína vegetal para su bowl.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    fr: {
      title: 'Rio Garden Coffee',
      description:
        'Café, boissons avec vue sur les rizières, fougères, verdure et étang à carpes koï',
      fullDescription: `
<p>Café, boissons avec vue sur les rizières, fougères, verdure et étang à carpes koï'</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Boissons (Froides)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Thé fermenté pétillant. Saveurs : Classique, Gingembre, Fruit de la passion ou Baies (selon disponibilité).',
              price: '45.000',
            },
            {
              name: 'Limonade Maison',
              description:
                'Jus de citron/citron vert frais, menthe, un soupçon de sirop et eau gazeuse.',
              price: '40.000',
            },
            {
              name: 'Coco Frais',
              description: 'Noix de coco jeune entière.',
              price: '35.000',
            },
            {
              name: 'Café Glacé',
              description:
                'Café noir ou avec le lait végétal de votre choix sur glace.',
              price: '40.000 / 50.000',
            },
            {
              name: 'Jus Frais Pressés',
              description: 'Orange, carotte, pomme ou pastèque.',
              price: '55.000',
            },
          ],
        },
        {
          categoryName: 'Boissons Chaudes',
          items: [
            {
              name: 'Espresso',
              description: 'Café serré classique.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: "Espresso avec de l'eau chaude.",
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latté',
              description: "Au lait d'avoine ou de coco.",
              price: '55.000',
            },
            {
              name: 'Infusion (Théière)',
              description:
                'Camomille, Menthe, Gingembre ou thé local vietnamien.',
              price: '45.000',
            },
            {
              name: 'Cacao et Guimauves',
              description:
                'Chocolat chaud au lait végétal avec guimauves végétaliennes.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Suppléments Smoothie Bowls',
          items: [
            {
              name: 'Garniture Supplémentaire',
              description:
                'Granola, graines de chia, noix ou noix de coco râpée.',
              price: '15.000',
            },
            {
              name: 'Protéine en Poudre',
              description:
                'Une dose de protéine végétale pour votre smoothie bowl.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    vn: {
      title: 'Rio Garden Coffee',
      description:
        'Cà phê, đồ uống ngắm ruộng lúa, nhiều dương xỉ, cây xanh và ao cá chép',
      fullDescription: `
<p>Cà phê, đồ uống ngắm ruộng lúa, nhiều dương xỉ, cây xanh và ao cá chép</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Đồ uống (Lạnh)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Trà lên men. Các vị: Truyền thống, Gừng, Chanh leo hoặc Dâu rừng (vui lòng kiểm tra tình trạng sẵn có).',
              price: '45.000',
            },
            {
              name: 'Nước chanh tươi tự làm',
              description:
                'Nước cốt chanh tươi, bạc hà, một chút siro và soda.',
              price: '40.000',
            },
            {
              name: 'Dừa tươi',
              description: 'Dừa xiêm nguyên quả.',
              price: '35.000',
            },
            {
              name: 'Cà phê đá',
              description:
                'Cà phê đen hoặc dùng kèm với loại sữa hạt tùy chọn của bạn.',
              price: '40.000 / 50.000',
            },
            {
              name: 'Nước ép trái cây tươi',
              description: 'Cam, cà rốt, táo hoặc dưa hấu.',
              price: '55.000',
            },
          ],
        },
        {
          categoryName: 'Đồ uống nóng',
          items: [
            {
              name: 'Espresso',
              description: 'Cà phê đen đậm đà kiểu Ý.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: 'Cà phê Espresso pha loãng với nước nóng.',
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latte',
              description: 'Pha với sữa yến mạch hoặc sữa dừa.',
              price: '55.000',
            },
            {
              name: 'Trà thảo mộc (Ấm)',
              description:
                'Hoa cúc, Bạc hà, Gừng hoặc trà địa phương Việt Nam.',
              price: '45.000',
            },
            {
              name: 'Ca cao với kẹo dẻo Marshmallow',
              description:
                'Thức uống ca cao nóng với sữa hạt và kẹo dẻo thuần chay.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Món thêm cho Smoothie Bowl',
          items: [
            {
              name: 'Topping thêm',
              description: 'Granola, hạt chia, các loại hạt hoặc dừa nạo.',
              price: '15.000',
            },
            {
              name: 'Bột Protein',
              description:
                'Một phần protein thực vật cho bát smoothie của bạn.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    slug: {
      en: 'rio-garden-coffee-hoi-an',
      ru: 'rio-garden-coffee-hoi-an',
      es: 'rio-garden-coffee-hoi-an',
      fr: 'rio-garden-coffee-hoi-an',
      vn: 'rio-garden-coffee-hoi-an',
    },
  },
  //me-hoi-an
  {
    id: 'mu-hoi-an-rooftop-coffee-kitchen', // <-- ID теперь строковый
    coordinates: [15.8771274969711, 108.32690509099474], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'me-hoi-an.webp',
    en: {
      title: 'Mê Hội An - Coffee Shop & Rooftop Restaurant',
      description:
        'Enjoy the best view of the Old Town from our cozy rooftop coffee shop',
      fullDescription: `
<p>Enjoy the best view of the Old Town from our cozy rooftop coffee shop</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Drinks (Cold)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Fermented sparkling tea. Flavors: Classic, Ginger, Passion Fruit, or Mixed Berries (check availability).',
              price: '45.000',
            },
            {
              name: 'Homemade Lemonade',
              description:
                'Fresh lemon/lime juice, mint, a drop of syrup, and soda water.',
              price: '40.000',
            },
            {
              name: 'Fresh Young Coconut',
              description: 'Whole local fresh coconut.',
              price: '40.000',
            },
            {
              name: 'Iced Coffee',
              description: 'Black coffee over ice. Add plant-based milk +15k.',
              price: '40.000',
            },
            {
              name: 'Iced Matcha',
              description:
                'Chilled Japanese matcha tea with your choice of plant-based milk.',
              price: '55.000',
            },
            {
              name: 'Freshly Squeezed Juices',
              description: 'Orange, carrot, apple, pineapple, or watermelon.',
              price: '45.000',
            },
            {
              name: 'Detox Juice',
              description:
                'A blend of fresh vegetables and fruits to cleanse your body.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Hot Drinks',
          items: [
            {
              name: 'Espresso',
              description: 'Classic strong coffee shot.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: 'Espresso shot with hot water.',
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latte',
              description: 'Made with oat or coconut milk.',
              price: '55.000',
            },
            {
              name: 'Flat White',
              description: 'Double espresso with smooth, velvety steamed milk.',
              price: '55.000',
            },
            {
              name: 'Herbal Tea (Pot)',
              description:
                'Options: Ginger with lemon, Chamomile, Mint, or Green tea.',
              price: '45.000',
            },
            {
              name: 'Hot Cocoa with Marshmallows',
              description:
                'Hot chocolate drink with plant-based milk and vegan marshmallows.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Smoothie Bowl Add-ons',
          items: [
            {
              name: 'Extra Topping',
              description: 'Granola, chia seeds, nuts, or coconut flakes.',
              price: '15.000',
            },
            {
              name: 'Protein Powder',
              description:
                'A scoop of plant-based protein (isolate) for your smoothie bowl.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    ru: {
      title: 'Mê Hội An - Кофейня и ресторан на крыше',
      description: 'С крыши этой кофейни приятно наблюдать за старым городом',
      fullDescription: `
<p>С крыши этой кофейни приятно наблюдать за старым городом</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Напитки (Холодные)',
          items: [
            {
              name: 'Комбуча',
              description:
                'Ферментированный чайный гриб. Вкусы: классическая, имбирь, маракуйя или ягоды (наличие уточняйте).',
              price: '45.000',
            },
            {
              name: 'Домашний Лимонад',
              description:
                'Свежевыжатый сок лимона/лайма, мята, капля сиропа и содовая.',
              price: '40.000',
            },
            {
              name: 'Свежий молодой кокос',
              description: 'Цельный местный кокос.',
              price: '40.000',
            },
            {
              name: 'Холодный Кофе / Кофе со льдом',
              description:
                'Черный кофе со льдом. Добавление растительного молока +15к.',
              price: '40.000',
            },
            {
              name: 'Холодная Матча',
              description:
                'Охлажденный японский чай матча с растительным молоком на ваш выбор.',
              price: '55.000',
            },
            {
              name: 'Свежевыжатые соки',
              description: 'Апельсин, морковь, яблоко, ананас или арбуз.',
              price: '45.000',
            },
            {
              name: 'Детокс-сок',
              description:
                'Смесь свежих овощей и фруктов для очищения организма.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Горячие напитки',
          items: [
            {
              name: 'Эспрессо',
              description: 'Классический крепкий кофе.',
              price: '30.000',
            },
            {
              name: 'Американо',
              description: 'Порция эспрессо с горячей водой.',
              price: '35.000',
            },
            {
              name: 'Капучино / Латте',
              description: 'На овсяном или кокосовом молоке.',
              price: '55.000',
            },
            {
              name: 'Плоский белый (Flat White)',
              description: 'Двойной эспрессо с нежной молочной пенкой.',
              price: '55.000',
            },
            {
              name: 'Травяной чай (в чайнике)',
              description:
                'Варианты: имбирь с лимоном, ромашка, мята или зеленый чай.',
              price: '45.000',
            },
            {
              name: 'Какао с маршмэллоу',
              description:
                'Горячий шоколадный напиток на растительном молоке с веганскими зефирками.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Дополнения к Смузи-боулам',
          items: [
            {
              name: 'Дополнительный топпинг',
              description: 'Гранола, семена чиа, орехи или кокосовые хлопья.',
              price: '15.000',
            },
            {
              name: 'Протеиновый порошок',
              description:
                'Порция растительного протеина (изолят) в ваш смузи-боул.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    es: {
      title: 'Mê Hội An - Cafetería y restaurante en la azotea',
      description:
        'Disfruta de la mejor vista del casco antiguo desde nuestra acogedora terraza',
      fullDescription: `
<p>Disfruta de la mejor vista del casco antiguo desde nuestra acogedora terraza</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Bebidas (Frías)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Té fermentado. Sabores: Clásico, Jengibre, Maracuyá o Bayas (consultar disponibilidad).',
              price: '45.000',
            },
            {
              name: 'Limonada Casera',
              description:
                'Zumo de limón/lima fresco, menta, una gota de sirope y soda.',
              price: '40.000',
            },
            {
              name: 'Coco Joven Fresco',
              description: 'Coco fresco local entero.',
              price: '40.000',
            },
            {
              name: 'Café con Hielo',
              description: 'Café solo con hielo. Con leche vegetal +15k.',
              price: '40.000',
            },
            {
              name: 'Matcha Frío',
              description:
                'Té matcha japonés frío con la leche vegetal de su elección.',
              price: '55.000',
            },
            {
              name: 'Zumos Naturales',
              description: 'Naranja, zanahoria, manzana, piña o sandía.',
              price: '45.000',
            },
            {
              name: 'Zumo Detox',
              description:
                'Mezcla de frutas y verduras frescas para depurar el organismo.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Bebidas Calientes',
          items: [
            {
              name: 'Espresso',
              description: 'Café fuerte clásico.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: 'Espresso con agua caliente.',
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latte',
              description: 'Preparado con leche de avena или de coco.',
              price: '55.000',
            },
            {
              name: 'Flat White',
              description: 'Doble espresso con una capa fina de leche cremosa.',
              price: '55.000',
            },
            {
              name: 'Té de Hierbas (Tetera)',
              description:
                'Opciones: jengibre con limón, manzanilla, menta o té verde.',
              price: '45.000',
            },
            {
              name: 'Cacao con Malvaviscos',
              description:
                'Chocolate caliente con leche vegetal y malvaviscos veganos.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Extras para Smoothie Bowls',
          items: [
            {
              name: 'Topping Adicional',
              description:
                'Granola, semillas de chía, frutos secos o coco rallado.',
              price: '15.000',
            },
            {
              name: 'Proteína en Polvo',
              description:
                'Una porción de proteína vegetal (aislado) para su bowl.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    fr: {
      title: 'Mê Hội An - Café & Restaurant en Rooftop',
      description:
        'Profitez de la meilleure vue sur la vieille ville depuis notre terrasse sur le toit',
      fullDescription: `
<p>Profitez de la meilleure vue sur la vieille ville depuis notre terrasse sur le toit</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Boissons (Froides)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Thé fermenté pétillant. Saveurs : Classique, Gingembre, Fruit de la passion ou Baies (selon disponibilité).',
              price: '45.000',
            },
            {
              name: 'Limonade Maison',
              description:
                'Jus de citron/citron vert frais, menthe, un soupçon de sirop et eau gazeuse.',
              price: '40.000',
            },
            {
              name: 'Coco Frais',
              description: 'Noix de coco jeune entière locale.',
              price: '40.000',
            },
            {
              name: 'Café Glacé',
              description: 'Café noir sur glace. Supplément lait végétal +15k.',
              price: '40.000',
            },
            {
              name: 'Matcha Glacé',
              description:
                'Thé matcha japonais frappé avec le lait végétal de votre choix.',
              price: '55.000',
            },
            {
              name: 'Jus Frais Pressés',
              description: 'Orange, carotte, pomme, ananas ou pastèque.',
              price: '45.000',
            },
            {
              name: 'Jus Détox',
              description:
                "Mélange de fruits et légumes frais pour purifier l'organisme.",
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Boissons Chaudes',
          items: [
            {
              name: 'Espresso',
              description: 'Café serré classique.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: "Espresso allongé à l'eau chaude.",
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latté',
              description: "Préparé au lait d'avoine ou de coco.",
              price: '55.000',
            },
            {
              name: 'Flat White',
              description: 'Double espresso avec une mousse de lait veloutée.',
              price: '55.000',
            },
            {
              name: 'Infusion (Théière)',
              description:
                'Au choix : gingembre-citron, camomille, menthe ou thé vert.',
              price: '45.000',
            },
            {
              name: 'Cacao et Guimauves',
              description:
                'Chocolat chaud au lait végétal avec guimauves végétaliennes.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Suppléments Smoothie Bowls',
          items: [
            {
              name: 'Garniture Supplémentaire',
              description:
                'Granola, graines de chia, noix ou noix de coco râpée.',
              price: '15.000',
            },
            {
              name: 'Protéine en Poudre',
              description:
                'Une dose de protéine végétale (isolat) pour votre bowl.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    vn: {
      title: 'Mê Hội An - Tiệm cà phê & Nhà hàng sân thượng',
      description:
        'Ngắm nhìn toàn cảnh phố cổ tuyệt đẹp từ không gian sân thượng của chúng tôi',
      fullDescription: `
<p>Ngắm nhìn toàn cảnh phố cổ tuyệt đẹp từ không gian sân thượng của chúng tôi</p>
  `,
      internalImageNames: [],
      menu: [
        {
          categoryName: 'Đồ uống (Lạnh)',
          items: [
            {
              name: 'Kombucha',
              description:
                'Trà lên men. Các vị: Truyền thống, Gừng, Chanh leo hoặc Dâu rừng (vui lòng kiểm tra tình trạng sẵn có).',
              price: '45.000',
            },
            {
              name: 'Nước chanh tươi tự làm',
              description:
                'Nước cốt chanh tươi, bạc hà, một chút siro và soda.',
              price: '40.000',
            },
            {
              name: 'Dừa xiêm tươi',
              description: 'Dừa tươi nguyên quả tại địa phương.',
              price: '40.000',
            },
            {
              name: 'Cà phê đá',
              description:
                'Cà phê đen nguyên chất dùng với đá. Thêm sữa hạt +15k.',
              price: '40.000',
            },
            {
              name: 'Matcha đá',
              description:
                'Trà matcha Nhật Bản dùng kèm với loại sữa hạt tùy chọn của bạn.',
              price: '55.000',
            },
            {
              name: 'Nước ép trái cây tươi',
              description: 'Cam, cà rốt, táo, dứa hoặc dưa hấu.',
              price: '45.000',
            },
            {
              name: 'Nước ép Detox',
              description:
                'Sự kết hợp giữa rau củ và trái cây tươi giúp thanh lọc cơ thể.',
              price: '65.000',
            },
          ],
        },
        {
          categoryName: 'Đồ uống nóng',
          items: [
            {
              name: 'Espresso',
              description: 'Cà phê đen đậm đà kiểu Ý.',
              price: '30.000',
            },
            {
              name: 'Americano',
              description: 'Cà phê Espresso pha loãng với nước nóng.',
              price: '35.000',
            },
            {
              name: 'Cappuccino / Latte',
              description: 'Pha với sữa yến mạch hoặc sữa dừa.',
              price: '55.000',
            },
            {
              name: 'Flat White',
              description: 'Gấp đôi Espresso cùng lớp bọt sữa mịn màng.',
              price: '55.000',
            },
            {
              name: 'Trà thảo mộc (Ấm)',
              description:
                'Các loại: gừng chanh, hoa cúc, bạc hà hoặc trà xanh.',
              price: '45.000',
            },
            {
              name: 'Ca cao với kẹo dẻo Marshmallow',
              description:
                'Ca cao nóng pha sữa hạt dùng kèm kẹo dẻo thuần chay.',
              price: '60.000',
            },
          ],
        },
        {
          categoryName: 'Món thêm cho Smoothie Bowl',
          items: [
            {
              name: 'Topping thêm',
              description: 'Granola, hạt chia, các loại hạt hoặc dừa nạo.',
              price: '15.000',
            },
            {
              name: 'Bột Protein',
              description:
                'Một phần protein thực vật (isolate) cho bát smoothie của bạn.',
              price: '25.000',
            },
          ],
        },
      ],
    },

    slug: {
      en: 'mu-hoi-an-rooftop-coffee-kitchen',
      ru: 'mu-hoi-an-rooftop-coffee-kitchen',
      es: 'mu-hoi-an-rooftop-coffee-kitchen',
      fr: 'mu-hoi-an-rooftop-coffee-kitchen',
      vn: 'mu-hoi-an-rooftop-coffee-kitchen',
    },
  },
  //The Hoianian - wine bar & restaurant
  {
    id: 'hoianian', // <-- ID теперь строковый
    coordinates: [15.876204803588317, 108.32872070337405], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'hoianian.webp',
    en: {
      title: 'The Hoianian — wine bar & restaurant',
      description:
        'Wine bar with happy hour on excellent wines and a magnificent view of the river',
      fullDescription: `
<p>Wine bar with happy hour on excellent wines and a magnificent view of the river</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'The Hoianian — винный бар и ресторан',
      description:
        'Винный бар, счастливые часы на отличное вино, великолепный вид на реку',
      fullDescription: `
<p>Винный бар, счастливые часы на отличное вино, великолепный вид на реку</p>
  `,
      internalImageNames: [],
    },

    es: {
      title: 'The Hoianian — wine bar y restaurante',
      description:
        'Bar de vinos, happy hour en vinos excelentes y una magnífica vista al río',
      fullDescription: `
<p>Bar de vinos, happy hour en vinos excelentes y una magnífica vista al río</p>
  `,
      internalImageNames: [],
    },

    fr: {
      title: 'The Hoianian — bar à vin & restaurant',
      description:
        'Bar à vin, happy hour sur d’excellents vins et une vue magnifique sur la rivière',
      fullDescription: `
<p>Bar à vin, happy hour sur d’excellents vins et une vue magnifique sur la rivière</p>
  `,
      internalImageNames: [],
    },

    vn: {
      title: 'The Hoianian — nhà hàng & quầy bar rượu vang',
      description:
        'Quầy bar rượu vang, giờ hạnh phúc với các loại vang hảo hạng và tầm nhìn hướng sông tuyệt đẹp',
      fullDescription: `
<p>Quầy bar rượu vang, giờ hạnh phúc với các loại vang hảo hạng và tầm nhìn hướng sông tuyệt đẹp</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'hoianian',
      ru: 'hoianian',
      es: 'hoianian',
      fr: 'hoianian',
      vn: 'hoianian',
    },
  },
  //Lan Thai & Mr. Hai Noodles
  {
    id: 'lan-thai-hai-noodles', // <-- ID теперь строковый
    coordinates: [15.877352231878573, 108.33430533374465], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'lan-thai-hai-noodles.webp',
    en: {
      title: 'Lan Thai & Mr. Hai Noodles',
      description: 'These two cafes are expats favorite spot in Hoi An.',
      fullDescription: `
<p>Amazing prices! Great taste!
Pad Thai with shrimp is a favorite among expats living here. And at Hai Noodles, probably the best Mì Quảng and Cao lầu for the price in Hoi An.</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'Lan Thai и Mr. Hai Noodles',
      description: 'Эти два кафе являются любимым местом для экспатов.',
      fullDescription: `
<p>Прекрасные цены! Отличный вкус!
Пад-тай с креветками обожают экспаты, живущие здесь. А в Hai Noodles — наверное, лучший Mì Quảng и Cao lầu за такие деньги в Хойане.</p>
  `,
      internalImageNames: [],
    },

    es: {
      title: 'Lan Thai и Mr. Hai Noodles',
      description:
        'Estos dos cafés son el lugar favorito de los expatriados en Hoi An.',
      fullDescription: `
<p>¡Precios increíbles! ¡Sabor excelente!
El pad thai con gambas lo adoran los expatriados que viven aquí. Y en Hai Noodles, probablemente el mejor Mì Quảng y Cao lầu por ese precio en Hoi An.</p>
  `,
      internalImageNames: [],
    },

    fr: {
      title: 'Lan Thai и Mr. Hai Noodles',
      description:
        'Ces deux cafés sont le endroit préféré des expatriés à Hoi An',
      fullDescription: `
<p>Prix imbattables ! Goût excellent !
Le pad thaï aux crevettes est adoré des expatriés qui vivent ici. Et chez Hai Noodles, vous trouverez probablement le meilleur Mì Quảng et Cao lầu pour ce prix à Hoi An.

</p>
  `,
      internalImageNames: [],
    },

    vn: {
      title: 'Lan Thai и Mr. Hai Noodles',
      description: 'Hai quán cà phê này là nơi yêu thích của expat ở Hội An.',
      fullDescription: `
<p>Giá siêu hời! Vị ngon tuyệt!
Pad Thai tôm được expat sống ở đây mê mẩn. Còn ở Hai Noodles chắc chắn là quán có Mì Quảng và Cao Lầu ngon nhất với giá rẻ nhất Hội An.</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'lan-thai',
      ru: 'lan-thai',
      es: 'lan-thai',
      fr: 'lan-thai',
      vn: 'lan-thai',
    },
  },
  //Secret House Hoi An
  {
    id: 'secret-house-hoi-an', // <-- ID теперь строковый
    coordinates: [15.893291273762264, 108.34549779143872], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks', 'art-galleries'],
    imageUrl: 'secret-house.webp',
    en: {
      title: 'Secret House Hoi An Gallery',
      description:
        'Delicious quality coffee, aesthetics, rice fields, silence, birds, artist host, apartments',
      fullDescription: `
<p>Delicious quality coffee, aesthetics, rice fields, silence, birds, artist host, apartments</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'Галерея Secret House Hoi An',
      description:
        'Вкусный качественный кофе, эстетика, рисовые поля, тишина, птицы, хозяин художник и артист, апартаменты',
      fullDescription: `
<p>Вкусный качественный кофе, эстетика, рисовые поля, тишина, птицы, хозяин художник и артист, апартаменты</p>
  `,
      internalImageNames: [],
    },

    es: {
      title: 'Galería Secret House Hoi An',
      description:
        'Café de calidad delicioso, estética, campos de arroz, silencio, pájaros, anfitrión artista, apartamentos',
      fullDescription: `
<p>Café de calidad delicioso, estética, campos de arroz, silencio, pájaros, anfitrión artista, apartamentos</p>
  `,
      internalImageNames: [],
    },

    fr: {
      title: 'Galerie Secret House Hoi An',
      description:
        'Café délicieux et de qualité, esthétique, rizières, calme, oiseaux, hôte artiste, appartements',
      fullDescription: `
<p>Café délicieux et de qualité, esthétique, rizières, calme, oiseaux, hôte artiste, appartements</p>
  `,
      internalImageNames: [],
    },
    vn: {
      title: 'Phòng trưng bày Secret House Hội An',
      description:
        'Cà phê ngon chất lượng, thẩm mỹ, cánh đồng lúa, yên tĩnh, tiếng chim hót, chủ nhà là nghệ sĩ, căn hộ dịch vụ',
      fullDescription: `
<p>Cà phê ngon chất lượng, thẩm mỹ, cánh đồng lúa, yên tĩnh, tiếng chim hót, chủ nhà là nghệ sĩ, căn hộ dịch vụ</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'secret-house-hoi-an',
      ru: 'secret-house-hoi-an',
      es: 'secret-house-hoi-an',
      fr: 'secret-house-hoi-an',
      vn: 'secret-house-hoi-an',
    },
  },
  //miss-hoi-an-cafe
  {
    id: 'miss-hoi-an-cafe', // <-- ID теперь строковый
    coordinates: [15.897336804950315, 108.33965546445937], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'miss-hoi-an.webp',
    en: {
      title: 'Miss Hoi An',
      description:
        'Drinks, Rice fields, sunset spot, unique interior. Be sure to go up to the third floor!',
      fullDescription: `
<p>Drinks, Rice fields, sunset spot, unique interior. Be sure to go up to the third floor!</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'Miss Hoi An',
      description:
        'Напитки, Рисовые поля, место для заката, уникальный интерьер. Обязательно поднимитесь на третий этаж!',
      fullDescription: `
<p>Напитки, Рисовые поля, место для заката, уникальный интерьер. Обязательно поднимитесь на третий этаж!</p>
  `,
      internalImageNames: [],
    },
    fr: {
      title: 'Miss Hoi An',
      description:
        'Boissons, rizières, spot de coucher de soleil, intérieur unique. N’oubliez pas de monter au troisième étage !',
      fullDescription: `
<p>Boissons, rizières, spot de coucher de soleil, intérieur unique. N’oubliez pas de monter au troisième étage !</p>
  `,
      internalImageNames: [],
    },
    es: {
      title: 'Miss Hoi An',
      description:
        'Bebidas, campos de arroz, lugar para el atardecer, interior único. ¡No olvides subir al tercer piso!',
      fullDescription: `
<p>Bebidas, campos de arroz, lugar para el atardecer, interior único. ¡No olvides subir al tercer piso!</p>
  `,
      internalImageNames: [],
    },
    vn: {
      title: 'Miss Hoi An',
      description:
        'Đồ uống, cánh đồng lúa, địa điểm ngắm hoàng hôn, nội thất độc đáo. Đừng quên lên tầng 3 nhé!',
      fullDescription: `
<p>Đồ uống, cánh đồng lúa, địa điểm ngắm hoàng hôn, nội thất độc đáo. Đừng quên lên tầng 3 nhé!</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'miss-hoi-an-cafe',
      ru: 'miss-hoi-an-cafe',
      es: 'miss-hoi-an-cafe',
      fr: 'miss-hoi-an-cafe',
      vn: 'miss-hoi-an-cafe',
    },
  },
  //La Quinn Bakery
  {
    id: 'la-quinn-bakery', // <-- ID теперь строковый
    coordinates: [15.885403645969976, 108.35077071131843], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'la-quinn-bakery.webp',
    en: {
      title: 'La Quinn Bakery',
      description: 'La Quinn Bakery is a delightful gem located in Hoi An',
      fullDescription: `
<p>La Quinn Bakery is a delightful gem located in Hoi An, known for its artisanal pastries and warm hospitality. The owner, trained at Le Cordon Bleu Thailand, creates a peaceful atmosphere where customers can enjoy freshly baked goods and high-quality coffee. Visitors rave about the delicious cheesecake, croissants, and various treats while appreciating the cozy setting that encourages relaxation and productivity.
Atmosphere: Customers frequently mention the tranquil environment of La Quinn Bakery, highlighting its peaceful setting amidst nature that makes it an ideal spot to relax or work with good WiFi available.
Service attitude and speed: Many reviews commend the owner’s friendly and welcoming demeanor; however, some customers noted that service can be slow during busy times as she often works alone.
Location: The bakery is situated on a quiet road in Hoi An, surrounded by rice fields which enhances its charming appeal, making it easily accessible for visitors seeking a serene café experience.
Price: Reviewers generally find the prices to be reasonable given the quality of food offered. They appreciate good value for money without compromising on taste or presentation.
Menu variety: La Quinn Bakery offers a diverse menu featuring various pastries such as cheesecakes, cookies, croissants, and specialty coffees. Customers express delight over trying multiple items from the extensive selection available.</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'Пекарня La Quinn',
      description: 'La Quinn Bakery — это очаровательная жемчужина в Хойане',
      fullDescription: `
<p>La Quinn Bakery — это очаровательная жемчужина в Хойане, известная своей ремесленной выпечкой и теплым гостеприимством. Владелица, прошедшая обучение в Le Cordon Bleu Thailand, создает спокойную атмосферу, где гости могут насладиться свежеиспеченными изделиями и высококачественным кофе. Посетители в восторге от вкуснейших чизкейков, круассанов и различных лакомств, отмечая уютную обстановку, которая располагает к отдыху и продуктивности.
Атмосфера: Клиенты часто упоминают спокойную обстановку La Quinn Bakery, подчеркивая ее умиротворенное расположение среди природы, что делает ее идеальным местом для отдыха или работы с хорошим Wi-Fi.
Обслуживание и скорость: Во многих отзывах отмечается дружелюбие и приветливость владелицы, однако некоторые гости заметили, что обслуживание может быть медленным в периоды высокой загрузки, так как она часто работает одна.
Расположение: Пекарня расположена на тихой дороге в Хойане в окружении рисовых полей, что придает ей особое очарование и делает ее легкодоступной для тех, кто ищет уединения в кафе.
Цена: Рецензенты в целом считают цены разумными, учитывая качество предлагаемой еды. Они ценят хорошее соотношение цены и качества без ущерба для вкуса и подачи.
Разнообразие меню: La Quinn Bakery предлагает разнообразное меню, включающее чизкейки, печенье, круассаны и фирменный кофе. Покупатели с удовольствием пробуют различные позиции из широкого ассортимента.</p>
  `,
      internalImageNames: [],
    },
    fr: {
      title: 'La Quinn Bakery',
      description: 'La Quinn Bakery est un charmant petit bijou situé à Hoi An',
      fullDescription: `
<p>La Quinn Bakery est un charmant petit bijou situé à Hoi An, réputé pour ses pâtisseries artisanales et son accueil chaleureux. La propriétaire, formée au Le Cordon Bleu Thaïlande, crée une atmosphère paisible où les clients peuvent savourer des produits fraîchement sortis du four et un café de haute qualité. Les visiteurs ne tarissent pas d'éloges sur les délicieux cheesecakes, croissants et diverses gourmandises, tout en appréciant le cadre douillet qui favorise la détente et la productivité.
Atmosphère : Les clients mentionnent fréquemment l'environnement tranquille de La Quinn Bakery, soulignant son cadre paisible en pleine nature qui en fait un lieu idéal pour se détendre ou travailler avec un bon Wi-Fi.
Service et rapidité : De nombreux avis louent le comportement amical et accueillant de la propriétaire ; cependant, certains clients ont noté que le service peut être lent en période d'affluence car elle travaille souvent seule.
Emplacement : La boulangerie est située sur une route calme de Hoi An, entourée de rizières, ce qui renforce son attrait charmant et la rend facilement accessible pour les visiteurs en quête d'une expérience de café sereine.
Prix : Les critiques trouvent généralement les prix raisonnables compte tenu de la qualité des produits. Ils apprécient le bon rapport qualité-prix sans compromis sur le goût ou la présentation.
Variété du menu : La Quinn Bakery propose une carte diversifiée comprenant divers cheesecakes, cookies, croissants et cafés de spécialité. Les clients expriment leur plaisir à goûter plusieurs articles de la vaste sélection disponible.</p>
  `,
      internalImageNames: [],
    },
    es: {
      title: 'La Quinn Bakery',
      description: 'La Quinn Bakery es una joya encantadora ubicada en Hoi An',
      fullDescription: `
<p>La Quinn Bakery es una joya encantadora ubicada en Hoi An, conocida por su repostería artesanal y su cálida hospitalidad. La propietaria, formada en Le Cordon Bleu Tailandia, crea un ambiente tranquilo donde los clientes pueden disfrutar de productos recién horneados y café de alta calidad. Los visitantes elogian las deliciosas tartas de queso, los cruasanes y diversos dulces, apreciando el ambiente acogedor que invita a la relajación y a la productividad.
Ambiente: Los clientes mencionan con frecuencia el entorno tranquilo de La Quinn Bakery, destacando su ubicación apacible rodeada de naturaleza que la convierte en un lugar ideal para relajarse o trabajar con buen Wi-Fi disponible.
Actitud y rapidez del servicio: Muchas reseñas elogian el trato amable y acogedor de la dueña; sin embargo, algunos clientes señalaron que el servicio puede ser lento en momentos de mucha actividad, ya que a menudo trabaja sola.
Ubicación: La panadería está situada en una calle tranquila de Hoi An, rodeada de campos de arroz, lo que realza su encanto y la hace fácilmente accesible para los visitantes que buscan una experiencia de café serena.
Precio: Los críticos generalmente consideran que los precios son razonables dada la calidad de la comida. Valoran la buena relación calidad-precio sin comprometer el sabor ni la presentación.
Variedad del menú: La Quinn Bakery ofrece un menú variado con diversas tartas de queso, galletas, cruasanes y cafés de especialidad. Los clientes disfrutan probando múltiples artículos de la extensa selección disponible.</p>
  `,
      internalImageNames: [],
    },
    vn: {
      title: 'Tiệm bánh La Quinn',
      description: 'La Quinn Bakery là một viên ngọc thú vị tọa lạc tại Hội An',
      fullDescription: `
<p>La Quinn Bakery là một viên ngọc thú vị tọa lạc tại Hội An, nổi tiếng với các loại bánh ngọt thủ công và sự hiếu khách nồng hậu. Chủ tiệm, từng theo học tại Le Cordon Bleu Thái Lan, đã tạo nên một không gian yên bình, nơi thực khách có thể thưởng thức bánh mới ra lò và cà phê chất lượng cao. Du khách rất yêu thích món bánh phô mai, bánh sừng bò và nhiều món ngọt khác, đồng thời đánh giá cao không gian ấm cúng giúp thư giãn và làm việc hiệu quả.
Không gian: Khách hàng thường xuyên nhắc đến môi trường tĩnh lặng của La Quinn Bakery, nhấn mạnh khung cảnh yên bình giữa thiên nhiên, biến nơi đây thành địa điểm lý tưởng để nghỉ ngơi hoặc làm việc với Wi-Fi ổn định.
Thái độ phục vụ và tốc độ: Nhiều đánh giá khen ngợi thái độ thân thiện và niềm nở của chủ tiệm; tuy nhiên, một số khách hàng lưu ý rằng phục vụ có thể hơi chậm vào giờ cao điểm vì cô ấy thường làm việc một mình.
Vị trí: Tiệm bánh nằm trên một con đường yên tĩnh ở Hội An, bao quanh bởi những cánh đồng lúa làm tăng thêm sức hút duyên dáng, giúp du khách dễ dàng tìm đến để tận hưởng trải nghiệm cà phê thanh bình.
Giá cả: Thực khách nhìn chung thấy mức giá hợp lý so với chất lượng món ăn. Họ đánh giá cao giá trị nhận được mà không làm giảm đi hương vị hay cách trình bày.
Sự đa dạng của thực đơn: La Quinn Bakery cung cấp thực đơn phong phú với nhiều loại bánh phô mai, bánh quy, bánh sừng bò và cà phê đặc sản. Khách hàng rất thích thú khi được trải nghiệm nhiều món khác nhau từ danh sách lựa chọn đa dạng này.</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'la-quinn-bakery',
      ru: 'la-quinn-bakery',
      es: 'la-quinn-bakery',
      fr: 'la-quinn-bakery',
      vn: 'la-quinn-bakery',
    },
  },
  //Hội An Salaisons/Les Artisans d’Indochine
  {
    id: 'hoi-an-salaisons', // <-- ID теперь строковый
    coordinates: [15.891022048651838, 108.35951050571823], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'salaisons.webp',
    en: {
      title: 'Hoi An Salaisons / Les Artisans d’Indochine',
      description:
        'Wine, cheeses, sometimes even "doktorskaya" sausage. French owner, speaks a bit of Russian',
      fullDescription: `
<p>Wine, cheeses, sometimes even "doktorskaya" sausage. French owner, speaks a bit of Russian</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'Hoi An Salaisons/Les Artisans d’Indochine',
      description:
        'Вино, сыры, бывает докторская колбаса, Хозяин француз, немного говорит по русски',
      fullDescription: `
<p>Вино, сыры, бывает докторская колбаса,
Хозяин француз, немного говорит по русски</p>
  `,
      internalImageNames: [],
    },
    fr: {
      title: 'Hoi An Salaisons / Les Artisans d’Indochine',
      description:
        'Vin, fromages, parfois du saucisson "doktorskaya". Propriétaire français, parle un peu le russe',
      fullDescription: `
<p>Vin, fromages, parfois du saucisson "doktorskaya". Propriétaire français, parle un peu le russe</p>
  `,
      internalImageNames: [],
    },
    es: {
      title: 'Hoi An Salaisons / Les Artisans d’Indochine',
      description:
        'Vino, quesos, a veces salchicha "doktorskaya". Dueño francés, habla un poco de ruso',
      fullDescription: `
<p>Vino, quesos, a veces salchicha "doktorskaya". Dueño francés, habla un poco de ruso</p>
  `,
      internalImageNames: [],
    },
    vn: {
      title: 'Hoi An Salaisons / Les Artisans d’Indochine',
      description:
        'Rượu vang, phô mai, đôi khi có cả xúc xích Nga "doktorskaya". Chủ quán là người Pháp, biết nói một chút tiếng Nga',
      fullDescription: `
<p>Rượu vang, phô mai, đôi khi có cả xúc xích Nga "doktorskaya". Chủ quán là người Pháp, biết nói một chút tiếng Nga</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'hoi-an-salaisons',
      ru: 'hoi-an-salaisons',
      es: 'hoi-an-salaisons',
      fr: 'hoi-an-salaisons',
      vn: 'hoi-an-salaisons',
    },
  },
  //Bon Restaurant
  {
    id: 'bon-restaurant', // <-- ID теперь строковый
    coordinates: [15.880606759243511, 108.34155626138296], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'bon-restaurant.webp',
    en: {
      title: 'Bon Restaurant',
      description:
        'Delicious local Vietnamese café. The clay pot eggplant is simply divine',
      fullDescription: `
<p>Delicious local Vietnamese café. The clay pot eggplant is simply divine</p>
  `,
      internalImageNames: [],
    },

    ru: {
      title: 'Bon Restaurant',
      description:
        'Местное вкусное вьетнамское кафе. Баклажаны в горшочке просто объедение',
      fullDescription: `
<p>Местное вкусное вьетнамское кафе. Баклажаны в горшочке просто объедение</p>
  `,
      internalImageNames: [],
    },
    fr: {
      title: 'Bon Restaurant',
      description:
        'Délicieux café vietnamien local. L’aubergine en marmite est un pur délice',
      fullDescription: `
<p>Délicieux café vietnamien local. L’aubergine en marmite est un pur délice</p>
  `,
      internalImageNames: [],
    },
    es: {
      title: 'Bon Restaurant',
      description:
        'Delicioso café local vietnamita. Las berenjenas en cazuela de barro son una delicia',
      fullDescription: `
<p>Delicioso café local vietnamita. Las berenjenas en cazuela de barro son una delicia</p>
  `,
      internalImageNames: [],
    },
    vn: {
      title: 'Nhà hàng Bon',
      description:
        'Quán ăn địa phương ngon miệng. Món cà tím tay cầm (nồi đất) thực sự rất tuyệt vời',
      fullDescription: `
<p>Quán ăn địa phương ngon miệng. Món cà tím tay cầm (nồi đất) thực sự rất tuyệt vời</p>
  `,
      internalImageNames: [],
    },

    slug: {
      en: 'bon-restaurant',
      ru: 'bon-restaurant',
      es: 'bon-restaurant',
      fr: 'bon-restaurant',
      vn: 'bon-restaurant',
    },
  },
];
