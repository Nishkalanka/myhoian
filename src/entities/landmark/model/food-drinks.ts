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
];
