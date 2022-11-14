const products = [
  {
    id: 1,
    title: "Heineken",
    subTitle: "Pack x6",
    price: 1250,
    stock: 6,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_795471-MLA46568867977_062021-V.webp",
    description:
      "Heineken es la cerveza Premium número 1 de Europa y la más internacional del mundo. Está presente en Argentina y en más de 198 países. A excepción de la Antártida y el Sahara, es posible tomar Heineken en todos los rincones del planeta. Se elabora con la misma receta desde 1873, usando los ingredientes naturales más puros, un excepcional estándar de calidad y sin ningún aditivo ni conservante. Es pura malta, elaborada a partir de un mosto cuyo extracto primitivo proviene exclusivamente de cebada malteada. Su sabor distintivo y único está dado por el uso exclusivo de la Levadura A, especialmente desarrollada por un discípulo de Louis Pasteur, resguardada en Holanda, desde donde se distribuye para garantizar que el sabor característico de Heineken sea igual en todo el mundo.",
  },
  {
    id: 2,
    title: "Andes Origen",
    subTitle: "Pack x6",
    price: 1100,
    stock: 15,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_718419-MLA44839770194_022021-V.webp",
    description:
      "Andes Origen Rubia es una cerveza estilo american pilsner, una rubia con cuerpo y carácter maltoso. Aroma leve a lúpulo, cereal y toque de levadura.Debe servirse en copa para apreciar mejor sus aromas y resaltar así su color dorado brillante.La Andes Origen Rubia es una cerveza de deleite, pero refrescante a la vez. Acompaña muy bien carnes de cerdo o carnes rojas elaboradas con salsas saborizadas, aliños especiados como mostaza, suave miel y hierbas tipo tomillo o romero.",
  },
  {
    id: 3,
    title: "Andes IPA",
    subTitle: "Pack x6",
    price: 1200,
    stock: 10,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_745870-MLA52024509773_102022-V.webp",
    description:
      "Es una cerveza de la escuela Inglesa. Como seguramente usted sabe, este estilo de cerveza se caracteriza por el amargor que le otorga su alto contenido de lúpulo. Lo que seguramente no sabe es que la IPA Andina contiene uva mendocina. Este ingrediente es clave para que en el paladar perciba una especie de dulzor, que a su vez hace el amargor más amigable. Esta edición limitada es ideal para acompañar platos picantones, como unas papas bravas o algún dip a base de curry.",
  },
  {
    id: 4,
    title: "Andes Roja",
    subTitle: "Pack x6",
    price: 1200,
    stock: 15,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_654410-MLA44839773937_022021-V.webp",
    description:
      "Andes Origen Roja es una cerveza estilo Vienna Lager, su aroma a suave caramelo y leve lúpulo logran un balance perfecto. La Andes origen Roja, color ámbar cobrizo, es una cerveza de deleite. Ideal para acompañar pescados o carnes rojas, elaborados con verduras frescas o grilladas. Pastas, ya sean con o sin relleno, con salsas suaves de tomate o con un toque de crema. Crumble de manzana o de pera.",
  },
  {
    id: 5,
    title: "Andes Negra",
    subTitle: "Pack x6",
    price: 1200,
    stock: 17,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_780484-MLA50761567246_072022-V.webp",
    description:
      "Andes Origen Negra es una cerveza de receta mendocina. Se recomienda servir en copa. Está hecha con pura malta tostada a fuego lento, que ofrece colores y texturas bien distintivas. Probalas, hay una rubia, una roja y una negra.",
  },
  {
    id: 6,
    title: "Stella Artois",
    subTitle: "Pack x6",
    price: 1350,
    stock: 12,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_842032-MLA44839776249_022021-V.webp",
    description:
      "Cerveza Stella Artois Belgium Lager. Tiene un sabor sutil, Stella Artois proviene de la mezcla de la mejor malta y las mejores variedades de lúpulo. Utilizando sólo ingredientes naturales que garantiza una lager fresca, de alta calidad con un ligero sabor amargo.",
  },
  {
    id: 7,
    title: "Stella Artois Noire",
    subTitle: "Pack x6",
    price: 1500,
    stock: 7,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_956392-MLA44839778484_022021-V.webp",
    description:
      "Cerveza Stella Artois Noire. Cerveza negra premium, de espuma cremosa, color negro intenso y aroma a maltas tostadas. Equilibrada, de cuerpo justo y amargor balanceado. Nace de la combinación de una selección de finas maltas tostadas y el prestigioso lúpulo Saazs, exclusivo de Stella Artois.",
  },
  {
    id: 8,
    title: "Corona Origen",
    subTitle: "Pack x6",
    price: 1600,
    stock: 19,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_849340-MLA51106110913_082022-F.webp",
    description:
      "Cerveza Corona de Lata. Es una cerveza de tipo pilsener que comenzó a elaborarse en el año 1925. Esta cerveza de México la produce, como bien hemos comentado antes, Grupo Modelo. El 49% de esta compañía cervecera pertenece desde 2012 a la empresa belgo-brasileña AB InBev. Grupo Modelo fue creado por el español Braulio Iriarte y Cerveza Corona fue su segunda marca. Cerveza Corona utilizó el ritual creado alrededor de su marca para fidelizar a sus clientes. Este ritual es muy famoso y hace que exista una clara diferenciación de la marca frente a la competencia: Cerveza Corona… la del limón.",
  },
  {
    id: 9,
    title: "Quilmes Clasica",
    subTitle: "Pack x6",
    price: 980,
    stock: 18,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_874386-MLA44839809366_022021-F.webp",
    description:
      "Quilmes Clásica es una cerveza equilibrada, de gran refrescancia y cuerpo balanceado, que marida con platos más bien grasosos o pesados. La gasificación de esta cerveza barre el paladar manteniendo las notas de sabores en la boca, y su gran refrescancia invita a comer acompañando siempre con la bebida.",
  },
  {
    id: 10,
    title: "Imperial APA",
    subTitle: "Pack x6",
    price: 1420,
    stock: 20,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_936190-MLA44085396011_112020-F.webp",
    description:
      "Imperial es una cerveza especial, Premium Argentina. La combinación de exclusivas recetas, una cuidadosa selección de ingredientes 100% naturales, la pasión y el cuidado por las cosas bien hechas y un expertise de más de 60 años en la producción cervecera son la clave para obtener una cerveza de calidad excepcional. Cerveza Imperial es una marca de CCU Argentina y su portafolio presenta una exclusiva gama de especialidades: Lager, Cream Stout, Amber Lager, IPA, APA y Weissbier.",
  },
  {
    id: 11,
    title: "Imperial Lager",
    subTitle: "Pack x6",
    price: 1300,
    stock: 12,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_844784-MLA44085329653_112020-F.webp",
    description:
      "Imperial es una cerveza especial, Premium Argentina. La combinación de exclusivas recetas, una cuidadosa selección de ingredientes 100% naturales, la pasión y el cuidado por las cosas bien hechas y un expertise de más de 60 años en la producción cervecera son la clave para obtener una cerveza de calidad excepcional. Cerveza Imperial es una marca de CCU Argentina y su portafolio presenta una exclusiva gama de especialidades: Lager, Cream Stout, Amber Lager, IPA, APA y Weissbier.",
  },
  {
    id: 12,
    title: "Imperial Golden",
    subTitle: "Pack x6",
    price: 1350,
    stock: 18,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_922753-MLA44516664626_012021-F.webp",
    description:
      "Imperial es una cerveza especial, Premium Argentina. La combinación de exclusivas recetas, una cuidadosa selección de ingredientes 100% naturales, la pasión y el cuidado por las cosas bien hechas y un expertise de más de 60 años en la producción cervecera son la clave para obtener una cerveza de calidad excepcional. Cerveza Imperial es una marca de CCU Argentina y su portafolio presenta una exclusiva gama de especialidades: Lager, Cream Stout, Amber Lager, IPA, APA y Weissbier.",
  },
  {
    id: 13,
    title: "Imperial Cream Stout",
    subTitle: "Pack x6",
    price: 1350,
    stock: 5,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_890867-MLA42324039504_062020-F.webp",
    description:
      "Imperial es una cerveza especial, Premium Argentina. La combinación de exclusivas recetas, una cuidadosa selección de ingredientes 100% naturales, la pasión y el cuidado por las cosas bien hechas y un expertise de más de 60 años en la producción cervecera son la clave para obtener una cerveza de calidad excepcional. Cerveza Imperial es una marca de CCU Argentina y su portafolio presenta una exclusiva gama de especialidades: Lager, Cream Stout, Amber Lager, IPA, APA y Weissbier.",
  },
  {
    id: 14,
    title: "Imperial Roja",
    subTitle: "Pack x6",
    price: 1350,
    stock: 16,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_2X_790987-MLA49524057162_032022-F.webp",
    description:
      "Imperial es una cerveza especial, Premium Argentina. La combinación de exclusivas recetas, una cuidadosa selección de ingredientes 100% naturales, la pasión y el cuidado por las cosas bien hechas y un expertise de más de 60 años en la producción cervecera son la clave para obtener una cerveza de calidad excepcional. Cerveza Imperial es una marca de CCU Argentina y su portafolio presenta una exclusiva gama de especialidades: Lager, Cream Stout, Amber Lager, IPA, APA y Weissbier.",
  },
  {
    id: 15,
    title: "Imperial IPA",
    subTitle: "Pack x6",
    price: 1420,
    stock: 7,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_753456-MLA46888868201_072021-V.webp",
    description:
      "Imperial es una cerveza especial, Premium Argentina. La combinación de exclusivas recetas, una cuidadosa selección de ingredientes 100% naturales, la pasión y el cuidado por las cosas bien hechas y un expertise de más de 60 años en la producción cervecera son la clave para obtener una cerveza de calidad excepcional. Cerveza Imperial es una marca de CCU Argentina y su portafolio presenta una exclusiva gama de especialidades: Lager, Cream Stout, Amber Lager, IPA, APA y Weissbier.",
  },
  {
    id: 16,
    title: "Brahma",
    subTitle: "Pack x6",
    price: 950,
    stock: 20,
    category: "cervezas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_640945-MLA44839805234_022021-V.webp",
    description:
      "Cerveza de calidad internacional con un sabor suave y refrescante para que la disfrutes y compartas donde quieras. Cerveza rubia de rico sabor con cuerpo suave y refrescante.",
  },
  {
    id: 17,
    title: "Cinzano Rosso",
    subTitle: "Vermouth Americano",
    price: 1250,
    stock: 19,
    category: "aperitivos",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/435280_p.jpg",
    description:
      "La historia de Cinzano comenzó en 1757. Desde finales del siglo XIX comienza a comercializarse en todo el mundo. Desde 1999 es parte del Grupo Campari. Vermouth Rosso clásico mundialmente reconocido. Para su elaboración se combinan vinos, hierbas, especias y otros ingredientes naturales de todo el mundo especialmente seleccionados. Tiene 15 grados AVB de alcohol y es un celebre participante en iconos de la cocteleria mundial en tragos como el Negroni y Manhattan.",
  },
  {
    id: 18,
    title: "Cinzano Bianco",
    subTitle: "Vermouth Bianco",
    price: 1250,
    stock: 5,
    category: "aperitivos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_836862-MLA50436713629_062022-V.webp",
    description:
      "En nariz despliega un aroma intenso y atractivo, con presencia de hierbas, flores y especias que son parte de su fórmula secreta. En boca es suave, dulce, con notas a ananá y naranja. Es refrescante y meloso, llena la boca y deja un leve amargor final.",
  },
  {
    id: 19,
    title: "Aperol",
    subTitle: "Licor Italiano",
    price: 1600,
    stock: 17,
    category: "aperitivos",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/892219_p.jpg",
    description:
      "Aperol esta compuesto de naranja amarga, ruibarbo, gentiana, cinchona. Aunque sabe y huele muy similar al Campari, Aperol tiene una graduación alcohólica de 11%, menos de la mitad que Campari. Sin embargo, es más suave y menos amargo, mientras que el Campari es más oscuro de color.",
  },
  {
    id: 20,
    title: "Puntemes",
    subTitle: "Vermouth Originale",
    price: 1200,
    stock: 17,
    category: "aperitivos",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/483694_p.jpg",
    description:
      "El vermut Rosso, un producto histórico de Carpano, tiene un sabor extremadamente particular, llamado en dialecto piamontés punt e mes, que significa un punto de amargor y medio punto (mezzo) de dulzura. Se dice que este nombre se origina en un episodio singular: dos operadores de bolsa en un bar en Turín discutían animadamente sobre una acción que había perdido un punto y medio. En el calor del momento, uno de los dos, deseando pedir un vermut, le pidió al camarero un punt e mes y el famoso nombre fue acuñado.",
  },
  {
    id: 21,
    title: "Cynar",
    subTitle: "Ricetta Originale",
    price: 1020,
    stock: 8,
    category: "aperitivos",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/483250_p.jpg",
    description:
      "El Cynar es un aperitivo italiano elaborado según una fórmula secreta que incluye alcachofas (Cynara scolymus) y 13 hierbas distintas. Su nombre deriva justamente de la forma en que se nombra en latín a la alcachofa. Su color es marrón con reflejos rojizos, tiene un aroma intenso y su sabor es amargo, aunque con un final dulzón.\nTiene una graduación alcohólica de 16,5 %.El Cynar puede tomarse solo, aunque la forma más popular es como aperitivo mezclado con soda, gaseosas (naranja, pomelo,tónica) o jugos. Los europeos lo mezclan a menudo con jugo de pomelo.",
  },
  {
    id: 22,
    title: "Martini Rosso",
    subTitle: "L’aperitivo",
    price: 1000,
    stock: 6,
    category: "aperitivos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_710847-MLA44140886644_112020-V.webp",
    description:
      "Martini Rosso, es un vermouth con una devota selección de hierbas regionales, y el caramelo natural le imparte su color escarlata profundo. Un auténtico ícono italiano. Receta original de Luigi Rossi, desarrollada en los años 1860’s. Una receta transmitida a través de nuestros maestros herbolarios. Los botánicos tienen un carácter poderoso, rico y complejo. En su corazón hay una porción grande de hierbas italianas: artemisia, ajedrea y dittany balanceadas con maderas exóticas agridulces. Altamente perfumado, con sabor agridulce y un carácter herbal, lo hacen un acompañante naturalmente refrescante.",
  },
  {
    id: 23,
    title: "Martini Extra dry",
    subTitle: "L’aperitivo",
    price: 1300,
    stock: 11,
    category: "aperitivos",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/448525_p.jpg",
    description:
      "Es elegante, delicado y muy fresco. Para muchos es el ingrediente básico para cualquier mezcla perfecta. Caracterizado por su color pálido y sus aromas frescos y afrutados, junto con un agudo perfume y una dulzura tentadora, es el lugar donde empezar para preparar un cóctel.",
  },
  {
    id: 24,
    title: "Campari",
    subTitle: "Bitter",
    price: 1350,
    stock: 5,
    category: "aperitivos",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/435198_p.jpg",
    description:
      "Campari es una bebida alcohólica espirituosa obtenida de la infusión de hierbas amargas, plantas aromáticas y frutas en alcohol y agua. Su color rojo vibrante, intenso aroma y su sabor amargo distintivo lo hacen extremadamente versátil, y la perfecta base para algunos de los cócteles más famosos del mundo.",
  },
  {
    id: 25,
    title: "Kilka",
    subTitle: "Malbec",
    price: 750,
    stock: 8,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_803157-MLA50432466156_062022-V.webp",
    description:
      "De color rojo violáceo, en nariz presenta aromas que recuerdan a ciruelas y moras con un toque de vainilla aportado por su paso por roble. En boca es un vino frutado de buena estructura y taninos sedosos.",
  },
  {
    id: 26,
    title: "Trumpeter",
    subTitle: "Cabernet sauvignon",
    price: 1350,
    stock: 6,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_790091-MLA43972770100_112020-V.webp",
    description:
      "Rubí intenso y profundo con matices violáceos. Nariz frutal y especiada que recuerda a frutos rojos maduros y a especias como la pimienta y el clavo de olor. Su perfil suave deja percibir los aromas a ciruelas maduras y cerezas negras, dejando un final de boca pleno y agradable.",
  },
  {
    id: 27,
    title: "Trumpeter",
    subTitle: "Malbec",
    price: 1350,
    stock: 5,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_808289-MLA50019891358_052022-V.webp",
    description:
      "De un impactante color violeta. Nariz frutal destacando ciruelas, cerezas y notas florales que nos recuerdan a las violetas. Posee gran cuerpo y su vivaz estructura acentúa sus taninos intensos que se vuelven aterciopelados en el retrogusto.",
  },
  {
    id: 28,
    title: "Las perdices",
    subTitle: "Blend de tintas",
    price: 700,
    stock: 7,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_940543-MLA52106900662_102022-V.webp",
    description:
      "Complejidad y elegancia aromática con predominio de frutos rojos. Suave en boca untuoso con gran volumen y persistencia. Ideal para acompañar carnes rojas, pastas o carnes blancas con salsas especiadas. 50% Malbec, 25% Cabernet Franc, 25% Petit Verdot de Agrelo",
  },
  {
    id: 29,
    title: "Las perdices",
    subTitle: "Pinot noir",
    price: 1230,
    stock: 13,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_818027-MLA47133841095_082021-V.webp",
    description:
      "Color rojo rubí con reflejos violáceos. Aromas a frutas rojas y negras como la cereza, frutilla, frambuesa, guinda y grosellas, conjugados con finos aromas de roble. En boca es un vino delicado, suave, en donde aparecen los sabores a frutilla y otras frutas rojas. La madera aporta las notas a vainilla y ahumado.",
  },
  {
    id: 30,
    title: "Las perdices",
    subTitle: "Malbec Reserva",
    price: 1190,
    stock: 19,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_685644-MLA41986525820_052020-V.webp",
    description:
      "Suave en boca, equilibrado, con notas de ciruelas, guindas, frutas rojas, violetas, chocolate, y café. Taninos suaves y maduros. Final de boca agradable y extenso. Ideal para acompañar carnes y vegetales grillados, pastas o quesos duros. CRIANZA: 1 año en barricas nuevas de roble",
  },
  {
    id: 31,
    title: "Rutini",
    subTitle: "Malbec Reserva",
    price: 1970,
    stock: 8,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_826358-MLA49900398110_052022-V.webp",
    description:
      "Rutini Malbec es en cata de color rojo violáceo muy profundo, los intensos aromas frutados se presentan entremezclados con otros propios de la crianza en roble nuevo (vainilla, ahumados, tostados). En boca, su estructura concentrada deja la evocación de sus taninos suaves y sucrosos. Apto para guarda de unos 6 años.",
  },
  {
    id: 32,
    title: "Rutini",
    subTitle: "Cabernet sauvignon",
    price: 1700,
    stock: 11,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_826358-MLA49900398110_052022-V.webp",
    description:
      "Rojo rubí intenso. En nariz, se presenta frutado, con notas de fruta negra y toques especiados que recuerdan a la vainilla, pimiento rojo y pimientas, mientras, en boca, se reafirman los acentos frutados. Los taninos, presentes, envolventes y sedosos nos denotan su personalidad y sutileza.",
  },
  {
    id: 33,
    title: "La poderosa",
    subTitle: "Pinot noir",
    price: 780,
    stock: 7,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_760072-MLA42302043538_062020-V.webp",
    description:
      "Color rojo intenso. Aroma a pequeños frutos rojos, zarzamora y cassis, con notas especiadas, avainilladas, coco y tabaco. A la boca es muy frutado, sabroso, equilibrado, de elegantes taninos y largo final. Vino de gran jerarquía.Color rojo intenso, re ejos violetas. Aroma  oral, violetas, con notas frutadas de ciruelas y mermeladas de frutos rojos. En boca es frutado, muy equilibrado, de adecuada acidez, de buen cuerpo, taninos suaves y muy largo  final de boca.",
  },
  {
    id: 34,
    title: "La poderosa",
    subTitle: "Cabernet Franc - Merlot",
    price: 740,
    stock: 8,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_790284-MLA51466791807_092022-V.webp",
    description:
      "Color rojo intenso. Aroma a pequeños frutos rojos, zarzamora y cassis, con notas especiadas, avainilladas, coco y tabaco. A la boca es muy frutado, sabroso, equilibrado, de elegantes taninos y largo final. Vino de gran jerarquía. Corte: Cabernet Franc 70 % Merlot  30 %. Barricado: Maceración por 25 días. Fermentación malo-láctica 100%. Crianza 12 meses en barricas de roble francés y americano.",
  },
  {
    id: 35,
    title: "Escorihuela Gascon",
    subTitle: "Pinot noir",
    price: 1780,
    stock: 20,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_697597-MLA50132327438_052022-V.webp",
    description:
      "Vino de color rojo cereza brillante con reflejos granate. Destaca por su aroma a caudal frutal de cerezas, arandanos y moras junto a tonos terrosos. La crianza aporta sutiles trazos especiados. Al paladar es seco y sobrio, fluye con cuerpo medio y delicado.",
  },
  {
    id: 36,
    title: "Escorihuela Gascon",
    subTitle: "Malbec",
    price: 1630,
    stock: 9,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_673918-MLA51359731524_082022-V.webp",
    description:
      "Malbec de paladar sabroso y buen jugo. Ofrece buena complejidad en boca con sabores frutales en primera línea pero también especiados y balsámicos. Buen equilibrio entre el alcohol y la frescura con taninos dulces y amables. Final largo con regusto frutal. Vino ideal para carnes rojas asadas y pastas con salsas mediterráneas.",
  },
  {
    id: 37,
    title: "Santa Julia",
    subTitle: "Dulce tinto natural",
    price: 920,
    stock: 12,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_611330-MLA50206558135_062022-V.webp",
    description:
      "Color: Rojo cereza intenso. Aroma: Muy fragrante, con notas de frutas rojas frescas como frutilla, cereza y frambuesas. Sabor: Muy refrescante y delicadamente dulce, con perfecto equilibrio entre azúcar y acidez. Final de boca frutado, en el que sobresalen las notas de fruta roja fresca.",
  },
  {
    id: 38,
    title: "Santa Julia",
    subTitle: "Bonarda",
    price: 860,
    stock: 6,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_772588-MLA50206603772_062022-V.webp",
    description:
      "De color violeta oscuro, con reflejos azulados. En nariz posee una intensidad de alto impacto, con aromas muy frescos y frutados que recuerdan a las frutillas frescas, frambuesa y cerezas.",
  },
  {
    id: 39,
    title: "Trumpeter",
    subTitle: "Chardonnay",
    price: 1460,
    stock: 16,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_693063-MLA42020349835_052020-V.webp",
    description:
      "De color amarillo dorado con reflejos verdosos. Aromas a fruta de carozo como durazno maduro, manzana y notas tropicales de ananá. Es un vino elegante y de gran suavidad en boca, untuoso y con buen balance, con un fino marco mineral en su final.",
  },
  {
    id: 40,
    title: "Trumpeter",
    subTitle: "Sauvignon blanc",
    price: 1660,
    stock: 10,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_691796-MLA44927010112_022021-V.webp",
    description:
      "De color cristalino con reflejos dorados. De nariz fresca y frutal: aromas cítricos que recuerdan al pomelo y limón junto a delicadas notas vegetales y minerales. En boca ligero, avanza refrescante con buen volumen y acidez. Su final es agradable y nos confirma su perfil cítrico.",
  },
  {
    id: 41,
    title: "Lopez",
    subTitle: "Dulce natural",
    price: 690,
    stock: 16,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_612675-MLA47010156095_082021-V.webp",
    description:
      "Presenta un color amarillo pálido, con reflejos dorados. Posee una boca almibarada, con gran balance entre dulzor y acidez, untuoso y un largo final. En nariz revela aromas delicados donde sobresalen notas a durazno blanco.",
  },
  {
    id: 42,
    title: "Lopez",
    subTitle: "Sauvignon blanc",
    price: 450,
    stock: 16,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_721123-MLA50998811818_082022-V.webp",
    description:
      "Suave, fresco, frutado y equilibrado, de color amarillo verdoso con destellos dorados. suaves, verduras y quesos suaves. Temperatura de servicio: 6-8 °C. Azúcar 1.50 g/l.",
  },
  {
    id: 43,
    title: "Cafayate",
    subTitle: "Chardonnay",
    price: 550,
    stock: 10,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_689137-MLA49924573118_052022-V.webp",
    description:
      "COLOR: amarillo con matices verdes. AROMA: frutas tropicales (ananá, durazno, melón) y notas complejas de manteca provenientes de la fermentación maloláctica. BOCA: buena estructura y concentración en boca, textura cremosa, acidez equilibrada, con final aromático y agradable, de notas cítricas y florales.",
  },
  {
    id: 44,
    title: "Cafayate",
    subTitle: "Torrontes",
    price: 530,
    stock: 6,
    category: "vinos",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_900085-MLA44220003837_122020-V.webp",
    description:
      "COLOR: amarillo pálido brillante con reflejos verdosos. AROMA: uvas maduras, durazno, lima y flores blancas que muestras su tipicidad. BOCA: delicado, refrescante y floral, con un final afrutado pero fresco. MARIDAJE SUGERIDO: ideal como aperitivo, con frutos de mar, pescados magros, pollo y cocina asiática.",
  },
  {
    id: 45,
    title: "Johnny Walker",
    subTitle: "Black label",
    price: 8500,
    stock: 12,
    category: "espirituosas",
    imgurl:
      "https://media-verticommnetwork1.netdna-ssl.com/wines/1454630_p.jpg",
    description:
      "Johnnie Walker Black Label es un verdadero ícono, reconocido como referente para todas las otras mezclas de lujo. Creado usando sólo whiskies con un mínimo de 12 años de añejamiento de los 4 rincones de Escocia, Johnnie Walker Black Label tiene un inconfundible carácter profundo, suave y complejo. Un whisky excepcional para compartir en cualquier ocasión, sea pasando un rato agradable en casa con sus amigos o en una salida inolvidable.\nJohnnie Walker Black Label es rico, complejo y bien balanceado, un blend con notas a frutos del bosque, vainilla y tierra ahumada.",
  },
  {
    id: 46,
    title: "Johnny Walker",
    subTitle: "Gold label",
    price: 13700,
    stock: 15,
    category: "espirituosas",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/833271_p.jpg",
    description:
      "Whisky Johnnie Walker Gold Label Reserve Blended Scotch\nJohnnie Walker Gold Label Reserve es conocido por su suavidad cremosa. Empieza con una explosión lujosa de delicado néctar y gentiles sabores ahumados que se convierten en frutas dulces y suaves tonos de miel profundos, para luego dar paso a un final duradero con notas ahumadas y roble.",
  },
  {
    id: 47,
    title: "Jameson",
    subTitle: "Black barrel",
    price: 4300,
    stock: 13,
    category: "espirituosas",
    imgurl:
      "https://media-verticommnetwork1.netdna-ssl.com/wines/1192793_p.jpg",
    description:
      "Destilado tres veces, carbonizado dos veces, solo para obtener un rico sabor suave. La carbonización es un método ancestral para revitalizar barriles e intensificar el sabor. Jameson Black Barrel es nuestro tributo a nuestros toneleros, quienes cuidadosamente les dan a sus barriles de bourbon una carbonización adicional para destapar su incalculable riqueza y amalgama de sabores. Como cada barril está lleno de secretos, el truco es saber descubrirlos.",
  },
  {
    id: 48,
    title: "Johnny Walker",
    subTitle: "Red label",
    price: 6400,
    stock: 9,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_831527-MLA45319126330_032021-V.webp",
    description:
      "Etiqueta roja, con su combinación de whiskies claros de la oscura costa este de Escocia y whiskies de la punta de la costa oeste, creó una mezcla con una extraordinaria profundidad de sabor. El sabor viaja en toda su paladar para ofrecer una experiencia que ni siquiera otros whiskies no ordinarios pueden igualar. El carácter del whisky se define por una intensa, picante y marcada sensación de sabores. Una ráfaga de etiqueta roja golpea el paladar con la frescura del agua de una ola al estrellarse, seguido por el sabor de las especias aromáticas y, finalmente, un largo y persistente, acabado humeante. La sensación en la boca es compleja - ’picante dulce’ es una buena descripción de este gusto y la sensación de hormigueo en la lengua.",
  },
  {
    id: 49,
    title: "Chivas Regal",
    subTitle: "Blended Scotch Whisky",
    price: 5400,
    stock: 20,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_607103-MLA50056333219_052022-V.webp",
    description:
      "Chivas Regal 12 Años 700ml. Chivas es una mezcla de whiskies de malta y grano escoceses que han sido madurados por al menos 12 años. Esta mezcla suave y generosa balancea el estilo con la sustancia y la tradición con un toque moderno.",
  },
  {
    id: 50,
    title: "Ballantines",
    subTitle: "Blended Scotch Whisky",
    price: 5200,
    stock: 20,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_711844-MLA51293877465_082022-V.webp",
    description:
      "Ballantine’s Finest es un blended whisky escocés complejo, refinado y elegante. Su sabor se considera ideal para satisfacer el estilo moderno. El color dorado claro de la marca y su inconfundible sabor provienen de una compleja mezcla de whiskies de malta y grano seleccionados especialmente; todos esos whiskies han madurado al menos durante tres años, aunque gran parte lo ha hecho durante mucho más tiempo. Los sabores característicos de las maltas de Miltonduff y Glenburgie aportan a Ballantine’s Finest notas de chocolate, manzana roja y vainilla.",
  },
  {
    id: 51,
    title: "Jack Daniel’s",
    subTitle: "Tennessee Honey",
    price: 8900,
    stock: 16,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_704045-MLA44850206709_022021-V.webp",
    description:
      "Cuando Jack Daniel’s se propuso sacudir el mundo de los Whiskey saborizados, lo hizo con el lanzamiento de Jack Daniel’s Tennessee Honey, una propuesta que presenta al ya icónico Jack Old No. 7 con un toque de miel. Cuando embotellado, su color ámbar cristalino le da una apariencia similar al de la miel de trébol.",
  },
  {
    id: 52,
    title: "Absolut",
    subTitle: "Azul classic",
    price: 2770,
    stock: 12,
    category: "espirituosas",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/920226_p.jpg",
    description:
      "Absolut Vodka se hace exclusivamente a partir de ingredientes naturales y, a diferencia de lo que ocurre con muchos otros vodkas, no contiene azúcar añadido. Absolut es, de hecho, tan puro como puede ser el vodka. Aún así, la pureza tiene un sabor: rico, con cuerpo y complejo, pero suave y maduro con el carácter distintivo del grano de trigo, seguido de un toque a frutas secas.",
  },
  {
    id: 53,
    title: "Smirnoff",
    subTitle: "Vodka",
    price: 1090,
    stock: 18,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_784549-MLA43807178122_102020-V.webp",
    description:
      "Smirnoff es el vodka Premium líder del mundo. Su pureza, versatilidad y suavidad son las claves de su éxito. Para elaborar Smirnoff Red se emplea alcohol de la máxima calidad, que será mejorado durante el proceso de producción. Muchas de sus impurezas se eliminan ya antes del filtrado. Para ello, se destila el alcohol en alambiques con forma de columna durante 24 horas. el proceso de filtración de Smirnoff Red es único en la industria del vodka mundial.",
  },
  {
    id: 54,
    title: "Beluga Noble",
    subTitle: "Noble Russian Vodka",
    price: 5930,
    stock: 8,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_894354-MLA47460433531_092021-V.webp",
    description:
      "Vodka Beluga es considerado uno de los mejores del mundo. Este vodka noble de origen ruso posee una calidad extraordinaria y una personalidad única. Beluga se elabora en la destilería Mariinks, fundada en el 1900 y situada en el corazón de Siberia. Su localización geográfica y el clima siberiano benefician enormemente el sabor y las propiedades del vodka. Además, en su elaboración se usa agua pura de pozos artesianos situados en sus inmediaciones. Esta destilería posee un equipamiento de última generación y minuciosos  sistemas de control de calidad, por lo que es considerada una de las mejores en su país.",
  },
  {
    id: 55,
    title: "Bombay",
    subTitle: "London Dry Gin",
    price: 5320,
    stock: 14,
    category: "espirituosas",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/445442_p.jpg",
    description:
      "Ginebra Bombay Original es una ginebra de 40º de alcohol fabricada en Inglaterra. El sabor de esta ginebra es el de una ginebra clásica, ligeramente seca y con un sutil acabado a enebro",
  },
  {
    id: 56,
    title: "Bulldog",
    subTitle: "London Dry Gin",
    price: 4750,
    stock: 19,
    category: "espirituosas",
    imgurl: "https://media-verticommnetwork1.netdna-ssl.com/wines/885943_p.jpg",
    description:
      "Entre los ingredientes de la Bulldog destaca la Amapola y el Ojo de Dragón, fáciles de detectar en su sabor. La Amapola tiene un sabor más familiar, parecido al de las semillas que encontramos en la parte superior de algunos tipos de pan, pero ¿ Y el Ojo de Dragón? Es una fruta original de China, parecida al Lychee y se ha utilizado desde tiempos ancestrales para estimular la vitalidad y la fuerza sexual.",
  },
  {
    id: 57,
    title: "Tanqueray",
    subTitle: "London Dry Gin",
    price: 3650,
    stock: 12,
    category: "espirituosas",
    imgurl:
      "https://media-verticommnetwork1.netdna-ssl.com/wines/1757707_p.jpg",
    description:
      "Una ginebra galardonada que permite crear un gin-tonic equilibrado, base para cócteles. La ginebra más influyente según The World’s top 50 Best Bars. Equilibrio perfecto entre enebro, cilantro, angélica y regaliz que ofrece una base clásica para cócteles. Sus sabores particulares se disfrutan mejor con tónica, mucho hielo y una rodaja de lima permite crear el gin-tonic definitivo, perfecto para degustar con amigos y familiares.",
  },
  {
    id: 58,
    title: "Beefeater",
    subTitle: "London Dry Gin",
    price: 3400,
    stock: 9,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_995832-MLA51838188478_102022-V.webp",
    description:
      "Beefeater London Dry tiene un sabor muy limpio, con un carácter de enebro fuerte que se equilibra con fuertes notas de cítricos, haciéndola la ginebra perfecta para disfrutar con la tónica de su elección. Esta ginebra, una London Dry Gin por antonomasia hecha con un intenso toque de enebro y fuertes notas cítricas, es una auténtica London Dry para quienes disfrutan del sabor auténtico de la ginebra.",
  },
  {
    id: 59,
    title: "Beefeater",
    subTitle: "London Pink Strawberry",
    price: 4020,
    stock: 10,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_875160-MLA50058020774_052022-V.webp",
    description:
      "La fresa completa la selección de 10 botánicos que dan a Beefeater Pink un sabor vibrante y refrescante. Enebro, Fresa, Piel de limón, Semilla de Cilantro, Almendra, Piel de Naranja de Sevilla, Raíz de Orris, Raíz de Regalíz, Raíz de Angélica, Semilla de Angélica.",
  },
  {
    id: 60,
    title: "Heraclito",
    subTitle: "London Dry Gin",
    price: 2130,
    stock: 11,
    category: "espirituosas",
    imgurl:
      "https://http2.mlstatic.com/D_NQ_NP_621878-MLA50260954091_062022-V.webp",
    description:
      "Un gin de corte tradicional sujeto a reglamentaciones especificas para calificar dentro de la categoría London Dry. Desde suelo Argentino y de la mano de su creador, Julian Varea, nace este gin compuesto por 13 botánicos. Notas de cata: Aromaticamente brinda una salida firme de enebro y coriandro que se combina con notas cítricas provenientes de componentes como el limón, la lima y la naranja Curazao. En boca es atrerciopelado, con buen volumen y surgen algunas notas complejas donde se destacan la menta y el romero.",
  },
];

export default products;
