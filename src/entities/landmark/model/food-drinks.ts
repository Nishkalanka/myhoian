import type { Landmark } from './landmarkTypes';

export const foodDrinksLandmarks: Landmark[] = [
  //hill-station
  {
    id: 'hill-station',
    coordinates: [15.877801450043398, 108.33391777335922],
    category: ['food-drinks'],
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
  //Sua
  {
    id: 'sua-vegan-restaurant', // <-- ID теперь строковый
    coordinates: [15.883638636542983, 108.32000846236811], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: '58.webp', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
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
    id: 'fefe-roastery',
    coordinates: [15.877930767963667, 108.32668616386269],
    category: ['food-drinks'],
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
  //Secret-Garden
  {
    id: 'secret-garden', // <-- ID теперь строковый
    coordinates: [15.877724249099783, 108.32800995382493], // <-- ПРИМЕР: Замените на реальные координаты моста [долгота, широта]
    category: ['food-drinks'],
    imageUrl: 'secret-garden.webp', // <-- ПРИМЕР: Укажите имя файла главного изображения для карточки
    en: {
      title: 'Secret Garden',
      description: 'Secret Garden in Hoi An is a true oasis of calm and green.',
      fullDescription: `
<p>Wow, what a surprise!” – That’s what we often hear from guests who discover us. Tucked away like a hidden gem in the middle of Hoi An Old Town, Secret Garden in Hoi An is a true oasis of calm and green. You’ll find us at the end of the alley next to No.132 Trần Phú Street. Step behind the old walls and into a peaceful garden where traditional Vietnamese dishes and carefully crafted Western flavors come together. Here, time slows, flavors bloom, and every moment feels like home.
</p>
      `,
      internalImageNames: [], // Добавьте имена файлов изображений, если они будут
    },
    es: {
      title: 'Secret Garden',
      description:
        'Secret Garden en Hoi An es un verdadero oasis de calma y verdor.',
      fullDescription: `
<p>¡Wow, qué sorpresa!" – Eso es lo que frecuentemente escuchamos de los huéspedes que nos descubren. Escondido como una joya oculta en medio de la Ciudad Antigua de Hoi An, Secret Garden en Hoi An es un verdadero oasis de calma y verdor. Nos encontrarás al final del callejón junto al No.132 de la calle Trần Phú. Entra detrás de los muros antiguos en un jardín tranquilo donde los platos vietnamitas tradicionales y los sabores occidentales cuidadosamente elaborados se unen. Aquí, el tiempo se ralentiza, los sabores florecen, y cada momento se siente como en casa.
</p>
      `,
      internalImageNames: [],
    },
    fr: {
      title: 'Secret Garden',
      description:
        'Secret Garden à Hoi An est un véritable oasis de calme et de verdure.',
      fullDescription: `
<p>"Wow, quel surprise !" – C'est ce que nous entendons souvent de la part des clients qui nous découvrent. Caché comme un joyau secret au cœur de la Vieille Ville de Hoi An, Secret Garden à Hoi An est un véritable oasis de calme et de verdure. Vous nous trouverez au bout de la ruelle à côté du No.132 rue Trần Phú. Franchez les vieux murs et entrez dans un jardin paisible où les plats traditionnels vietnamiens et les saveurs occidentales soigneusement élaborées se rencontrent. Ici, le temps ralentit, les saveurs s'épanouissent, et chaque moment se sent comme à la maison.
</p>
      `,
      internalImageNames: [],
    },
    ru: {
      title: 'Secret Garden',
      description:
        'Secret Garden в Хойане — это настоящий оазис спокойствия и зелени.',
      fullDescription: `
<p>"Вау, какой сюрприз!" – Вот что мы часто слышим от гостей, которые нас обнаруживают. Спрятанный как скрытая драгоценность в центре Древнего города Хойан, Secret Garden в Хойане — это настоящий оазис спокойствия и зелени. Вы найдете нас в конце переулка рядом с домом № 132 на улице Чан Фу. Шагните за древние стены в мирный сад, где встречаются традиционные вьетнамские блюда и тщательно созданные западные вкусы. Здесь время замедляется, вкусы расцветают, и каждый момент кажется домом.
</p>
      `,
      internalImageNames: [],
    },
    vn: {
      title: 'Secret Garden',
      description:
        'Secret Garden ở Hội An là một ốc đảo thực sự của sự yên tĩnh và xanh mát.',
      fullDescription: `
<p>"Wow, thật là bất ngờ!" – Đó là những gì chúng tôi thường nghe từ những vị khách phát hiện ra chúng tôi. Ẩn giấu như một viên ngọc quý giá giữa Phố Cổ Hội An, Secret Garden ở Hội An là một ốc đảo thực sự của sự yên tĩnh và xanh mát. Bạn sẽ tìm thấy chúng tôi ở cuối con hẻm bên cạnh Số 132 đường Trần Phú. Bước qua những bức tường cũ vào một khu vườn yên bình nơi các món ăn Việt Nam truyền thống và những hương vị phương Tây được chế tác cẩn thận gặp nhau. Ở đây, thời gian chậm lại, hương vị nở hoa, và mỗi khoảnh khắc đều cảm thấy như ở nhà.
</p>
      `,
      internalImageNames: [],
    },
    slug: {
      en: 'secret-garden-restaurant',
      ru: 'secret-garden-restoran',
      es: 'secret-garden-restaurante',
      fr: 'secret-garden-restaurant',
      vn: 'nha-hang-secret-garden',
    },
  },
];
