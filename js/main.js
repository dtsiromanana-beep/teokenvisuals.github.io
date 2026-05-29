// ═══════════════════════════════════════════════════════════
// PHOTO DATA  (64 numbered + 56 Instagram = 120 photos)
// ═══════════════════════════════════════════════════════════
const PHOTOS = [
  // ── photo-1.jpg → photo-64.jpg ──────────────────────────
  { src:'images/photo-1.jpg',  cat:'portrait', title:'Lumière dorée',       desc:'Portrait baigné dans une lumière naturelle chaude et dorée',          alt:'Portrait lumière dorée' },
  { src:'images/photo-2.jpg',  cat:'mode',     title:'Style urbain',        desc:'Shooting mode sur un escalier urbain, attitude assurée',              alt:'Mode escaliers urbain',       v:'tall' },
  { src:'images/photo-3.jpg',  cat:'mode',     title:'Lecture au soleil',   desc:'Pause lecture dans l\'herbe, tenue décontractée et légère',           alt:'Mode lecture herbe' },
  { src:'images/photo-4.jpg',  cat:'portrait', title:'Émotion naturelle',   desc:'Expression authentique au milieu d\'un jardin en fleurs',             alt:'Portrait jardin fleurs',      v:'wide' },
  { src:'images/photo-5.jpg',  cat:'nature',   title:'Cardinal rouge',      desc:'Cardinal rouge éclatant parmi le feuillage vert tropical',            alt:'Oiseau rouge feuillage vert' },
  { src:'images/photo-6.jpg',  cat:'nature',   title:'Solitude sur le fil', desc:'Cardinal posé seul sur un fil électrique, ciel dégagé',              alt:'Oiseau rouge sur fil',        v:'tall' },
  { src:'images/photo-7.jpg',  cat:'street',   title:'Chemin du retour',    desc:'Garçon marchant seul sur la route au crépuscule malgache',            alt:'Garçon route crépuscule' },
  { src:'images/photo-8.jpg',  cat:'street',   title:'Mémoire vivante',     desc:'Vieil homme au chapeau, regard empreint de toute une vie',            alt:'Vieil homme chapeau rue' },
  { src:'images/photo-9.jpg',  cat:'street',   title:'ARA',                 desc:'Panneau et atmosphère street dans les rues de la ville',              alt:'Street style urbain',         v:'tall' },
  { src:'images/photo-10.jpg', cat:'mode',     title:'Collage & élégance',  desc:'Composition mode avec archives et superpositions artistiques',        alt:'Mode archives collage' },
  { src:'images/photo-11.jpg', cat:'mode',     title:'Bijou poignet',       desc:'Gros plan sur un bracelet délicat, mise en valeur des détails',      alt:'Mode bijoux bracelet' },
  { src:'images/photo-12.jpg', cat:'mode',     title:'Parure de cou',       desc:'Portrait serré sur un collier raffiné, peau et métal en contraste',  alt:'Mode bijoux collier' },
  { src:'images/photo-13.jpg', cat:'portrait', title:'Concentration',       desc:'Homme en costume, regard déterminé, rigueur et prestance',           alt:'Portrait homme costume' },
  { src:'images/photo-14.jpg', cat:'mode',     title:'Vie en hauteur',      desc:'Séance photo sur des escaliers, dynamisme et perspective urbaine',   alt:'Mode séance escaliers',       v:'wide' },
  { src:'images/photo-15.jpg', cat:'mode',     title:'Talons hauts',        desc:'Focus sur des chaussures à talons élégantes, détail et texture',     alt:'Mode chaussures talons' },
  { src:'images/photo-16.jpg', cat:'portrait', title:'Main & plume',        desc:'Main tenant un stylo, instant de réflexion et de création',          alt:'Portrait main stylo' },
  { src:'images/photo-17.jpg', cat:'portrait', title:'Présentation',        desc:'Femme en situation de prise de parole, assurance et clarté',         alt:'Portrait femme présentation' },
  { src:'images/photo-18.jpg', cat:'portrait', title:'Mélancolie douce',    desc:'Portrait introspectif, regard perdu dans les pensées',               alt:'Portrait mélancolie douce' },
  { src:'images/photo-19.jpg', cat:'mode',     title:'Lunettes soleil',     desc:'Monture jaune vif, énergie estivale et style assumé',                alt:'Mode lunettes jaunes',        v:'tall' },
  { src:'images/photo-20.jpg', cat:'portrait', title:'Jour de diplôme',     desc:'Portrait joyeux le jour de la remise de diplôme, émotion pure',      alt:'Portrait diplôme orange' },
  { src:'images/photo-21.jpg', cat:'mode',     title:'L\'attitude',         desc:'Pose confiante et naturelle lors d\'un shooting en extérieur',       alt:'Mode shooting attitude' },
  { src:'images/photo-22.jpg', cat:'mode',     title:'Sac à main',          desc:'Accessoire de mode mis en scène avec soin, cuir et couleur',         alt:'Mode sac à main',             v:'wide' },
  { src:'images/photo-23.jpg', cat:'portrait', title:'Regard intense',      desc:'Portrait rapproché, yeux expressifs et présence magnétique',         alt:'Portrait regard intense' },
  { src:'images/photo-24.jpg', cat:'mode',     title:'Lumière douce',       desc:'Séance baignée d\'une lumière diffuse et enveloppante',              alt:'Mode séance lumière' },
  { src:'images/photo-25.jpg', cat:'portrait', title:'Contemplation',       desc:'Pause silencieuse dans un jardin tropical luxuriant',                alt:'Portrait jardin tropical' },
  { src:'images/photo-26.jpg', cat:'nature',   title:'Sur le fil',          desc:'Cardinal rouge en équilibre sur un fil, la ville en fond flou',      alt:'Nature oiseau rouge fil',     v:'tall' },
  { src:'images/photo-27.jpg', cat:'nature',   title:'Plumage & feuilles',  desc:'Oiseau rouge niché parmi les feuilles, camouflage naturel brisé',   alt:'Nature oiseau rouge feuilles' },
  { src:'images/photo-28.jpg', cat:'mode',     title:'Chapeau & lecture',   desc:'Accessoires posés dans l\'herbe, esthétique douce et bucolique',     alt:'Mode chapeau livre herbe' },
  { src:'images/photo-29.jpg', cat:'nature',   title:'Fleur sauvage',       desc:'Fleur mauve délicate émergeant d\'un fond végétal naturel',          alt:'Nature fleur mauve',          v:'wide' },
  { src:'images/photo-30.jpg', cat:'mode',     title:'Lecture en plein air',desc:'Détente assumée avec un livre au soleil, mode et liberté',           alt:'Mode livre herbe soleil' },
  { src:'images/photo-31.jpg', cat:'nature',   title:'Après l\'averse',     desc:'Gouttes d\'eau accrochées aux feuilles après la pluie tropicale',    alt:'Nature feuilles gouttes' },
  { src:'images/photo-32.jpg', cat:'nature',   title:'Rosée matinale',      desc:'Plante recouverte de rosée, perles d\'eau sur feuilles vertes',      alt:'Nature plante rosée',         v:'tall' },
  { src:'images/photo-33.jpg', cat:'portrait', title:'Ombre & palmiers',    desc:'Portrait avec chapeau, palmiers en arrière-plan, chaleur tropicale', alt:'Portrait chapeau palmiers' },
  { src:'images/photo-34.jpg', cat:'nature',   title:'Pluie sur les toits', desc:'Eau ruisselant sur les feuilles et les toits lors d\'une averse',    alt:'Nature toit pluie feuilles' },
  { src:'images/photo-35.jpg', cat:'mode',     title:'Plongée dans les mots',desc:'Shooting mode vu de dos, livre ouvert, lumière naturelle',          alt:'Mode lecture livre dos' },
  { src:'images/photo-36.jpg', cat:'nature',   title:'Minuscule',           desc:'Petite fleur jaune fragile, macro sur la beauté de l\'infime',       alt:'Nature petite fleur jaune' },
  { src:'images/photo-37.jpg', cat:'mode',     title:'Still life mode',     desc:'Composition chapeau, livre et accessoires, nature morte élégante',   alt:'Mode chapeau livre stilllife' },
  { src:'images/photo-38.jpg', cat:'portrait', title:'Lumière de jardin',   desc:'Femme dans la verdure, lumière filtrée et regard serein',            alt:'Portrait femme jardin' },
  { src:'images/photo-39.jpg', cat:'portrait', title:'Sérénité',            desc:'Femme allongée dans l\'herbe, connexion douce avec la nature',       alt:'Portrait femme herbe',        v:'wide' },
  { src:'images/photo-40.jpg', cat:'street',   title:'Circulation',         desc:'Rue animée de Fianarantsoa, véhicules et mouvement urbain',          alt:'Street rue voitures' },
  { src:'images/photo-41.jpg', cat:'street',   title:'Route nationale',     desc:'Taxi-brousse sur la route nationale, transport du quotidien',        alt:'Street taxi-brousse route' },
  { src:'images/photo-42.jpg', cat:'street',   title:'Arrêt de bus',        desc:'Attente au bord de la route, vie de marché et patience',             alt:'Street bus marché',           v:'tall' },
  { src:'images/photo-43.jpg', cat:'street',   title:'Aventure en van',     desc:'Van orange sur une route de terre, esprit d\'exploration',           alt:'Street van orange route' },
  { src:'images/photo-44.jpg', cat:'street',   title:'Taxi rouge',          desc:'Taxi-brousse rouge typique de Madagascar, rythme de la campagne',    alt:'Street taxi rouge route' },
  { src:'images/photo-45.jpg', cat:'street',   title:'Départ imminent',     desc:'Bus en partance, passagers et bagages, énergie des départs',         alt:'Street bus départ' },
  { src:'images/photo-46.jpg', cat:'street',   title:'Rythme urbain',       desc:'Rue passante en pleine journée, fourmillement de la vie citadine',   alt:'Street rue animée' },
  { src:'images/photo-47.jpg', cat:'street',   title:'Enfant au soir',      desc:'Garçon sur la route au coucher du soleil, lumière rasante et or',    alt:'Street garçon route soir' },
  { src:'images/photo-48.jpg', cat:'street',   title:'Route de campagne',   desc:'Voyageurs à pied sur une piste rurale, paysage dégagé',              alt:'Street gens route campagne' },
  { src:'images/photo-49.jpg', cat:'street',   title:'Marché en mouvement', desc:'Animation du marché de rue, couleurs, bruits et vie locale',         alt:'Street marché rue animée' },
  { src:'images/photo-50.jpg', cat:'street',   title:'Zébus aux rizières',  desc:'Zébus traversant les rizières verdoyantes, scène rurale malgache',   alt:'Street zébus rizières' },
  { src:'images/photo-51.jpg', cat:'street',   title:'Porteurs',            desc:'Hommes transportant des charges lourdes sur la route nationale',     alt:'Street gens route charges' },
  { src:'images/photo-52.jpg', cat:'street',   title:'Repiquage du riz',    desc:'Paysans plantant le riz dans les rizières en eau, geste ancestral',  alt:'Street gens rizières',        v:'wide' },
  { src:'images/photo-53.jpg', cat:'portrait', title:'Visage du temps',     desc:'Portrait de vieil homme, rides profondes et regard plein de sagesse', alt:'Portrait vieux monsieur' },
  { src:'images/photo-54.jpg', cat:'street',   title:'Charrette de zébu',   desc:'Attelage traditionnel malgache sur un chemin de terre',              alt:'Street charrette zébu' },
  { src:'images/photo-55.jpg', cat:'nature',   title:'Fidèle compagnon',    desc:'Chien assis, regard attentif, fidélité et présence rassurante',      alt:'Nature chien fidèle',         v:'tall' },
  { src:'images/photo-56.jpg', cat:'nature',   title:'Ciel d\'orage',       desc:'Nuages menaçants au-dessus des toits, avant la tempête tropicale',   alt:'Nature ciel orageux toit' },
  { src:'images/photo-57.jpg', cat:'nature',   title:'Gouttières sous la pluie', desc:'Eau ruisselant des toits sous une pluie dense, abstraction naturelle', alt:'Nature pluie toit' },
  { src:'images/photo-58.jpg', cat:'nature',   title:'Martin-chasseur',     desc:'Martin-chasseur à l\'affût sur son perchoir, plumage vif et précis', alt:'Nature oiseau martin' },
  { src:'images/photo-59.jpg', cat:'nature',   title:'Bourgeon rose',       desc:'Bourgeon de fleur rose sur le point d\'éclore, délicatesse pure',    alt:'Nature fleur rose bourgeon' },
  { src:'images/photo-60.jpg', cat:'nature',   title:'Trio sur les toits',  desc:'Trois pigeons alignés sur un rebord, vie urbaine des oiseaux',       alt:'Nature pigeons toit' },
  { src:'images/photo-61.jpg', cat:'portrait', title:'Cérémonie de diplôme',desc:'Groupe de diplômés en robe, fierté et accomplissement partagé',      alt:'Portrait diplômés' },
  { src:'images/photo-62.jpg', cat:'portrait', title:'Soutenance',          desc:'Femme présentant ses travaux avec assurance et conviction',          alt:'Portrait femme soutenance' },
  { src:'images/photo-63.jpg', cat:'portrait', title:'Couloir de lumière',  desc:'Femme dans un couloir éclairé, perspective et légèreté',             alt:'Portrait femme couloir' },
  { src:'images/photo-64.jpg', cat:'mode',     title:'Costume blanc',       desc:'Élégance masculine en costume blanc dans un cadre urbain',           alt:'Mode costume blanc urbain' },
  // ── images/Photos/ ──────────────────────────────────────
  { src:'images/Photos/583319822_122099431197128394_8172895742380294557_n.jpg', cat:'street',   title:'Lumière de rue',       desc:'Jeu de lumière et d\'ombres dans les rues animées de Fianarantsoa',      alt:'Street lumière' },
  { src:'images/Photos/584400860_122098705791128394_2692878520382973591_n.jpg', cat:'mode',     title:'Éclat de style',       desc:'Shooting en extérieur, tenue en harmonie avec la lumière naturelle',    alt:'Mode éclat' },
  { src:'images/Photos/589499000_122106992301128394_3971008783394672761_n.jpg', cat:'mode',     title:'Mode & verdure',       desc:'Silhouette en mouvement au milieu d\'une végétation luxuriante',         alt:'Mode verdure',        v:'tall' },
  { src:'images/Photos/590754328_122106992457128394_465383160760579250_n.jpg',  cat:'mode',     title:'Shooting en plein air',desc:'Session photo en extérieur, nature en toile de fond',                   alt:'Mode plein air' },
  { src:'images/Photos/591714776_122108294355128394_8807656624365046943_n.jpg', cat:'portrait', title:'Expression libre',     desc:'Portrait spontané capturant une émotion vraie et fugace',               alt:'Portrait expression' },
  { src:'images/Photos/591721120_122106992313128394_5566652400864704384_n.jpg', cat:'mode',     title:'Pose naturelle',       desc:'Modèle détendu en plein air, style fluide et sans artifice',            alt:'Mode shooting' },
  { src:'images/Photos/591748944_122106992319128394_8704233386516666249_n.jpg', cat:'mode',     title:'Allure & caractère',   desc:'Posture affirmée, regard fort, mode qui parle sans crier',              alt:'Mode allure' },
  { src:'images/Photos/591842444_122108294301128394_4995706148842633439_n.jpg', cat:'portrait', title:'Regard profond',       desc:'Portrait serré sur les yeux, fenêtre ouverte sur l\'âme',               alt:'Portrait regard' },
  { src:'images/Photos/591873691_122108293725128394_5384422545985169476_n.jpg', cat:'portrait', title:'Douceur du moment',    desc:'Visage apaisé, lumière douce et atmosphere intime et chaleureuse',      alt:'Portrait douceur' },
  { src:'images/Photos/592641427_122108294667128394_4363835524295177457_n.jpg', cat:'portrait', title:'Sincérité',            desc:'Portrait en plan large, honnêteté du regard et naturel assumé',         alt:'Portrait sincérité',  v:'wide' },
  { src:'images/Photos/592911052_122108294469128394_8786277759495909689_n.jpg', cat:'street',   title:'Scène de ville',       desc:'Vue de rue à Fianarantsoa, architecture et mouvement quotidien',         alt:'Street ville' },
  { src:'images/Photos/593429983_122108294415128394_6469636801280491447_n.jpg', cat:'portrait', title:'Portrait de diplômé',  desc:'Cérémonie académique, vêtements de cérémonie et sourire de réussite',   alt:'Portrait diplôme' },
  { src:'images/Photos/594645448_122108294529128394_2560747269849625238_n.jpg', cat:'portrait', title:'Grâce naturelle',      desc:'Femme gracieuse, port de tête élégant et lumière bienveillante',        alt:'Portrait grâce' },
  { src:'images/Photos/594964003_122108294601128394_180940755125535496_n.jpg',  cat:'mode',     title:'Style du jour',        desc:'Look soigné pour une sortie, association de pièces et d\'attitude',     alt:'Mode style' },
  { src:'images/Photos/597387403_122111732805128394_2045665869999159390_n.jpg', cat:'portrait', title:'Instant volé',         desc:'Portrait candid capturant un micro-instant d\'authenticité',            alt:'Portrait instant' },
  { src:'images/Photos/597400306_122111732691128394_8314371208968697253_n.jpg', cat:'portrait', title:'Présence forte',       desc:'Sujet pleinement présent dans le cadre, regard direct et ancré',        alt:'Portrait présence' },
  { src:'images/Photos/598681540_122111732859128394_9221899769717975755_n.jpg', cat:'portrait', title:'Profondeur d\'âme',    desc:'Portrait introspectif, lumière latérale sculptant le visage',           alt:'Portrait âme' },
  { src:'images/Photos/599835545_122112234327128394_4384010813630895070_n.jpg', cat:'nature',   title:'Gecko de Madagascar',  desc:'Gecko malgache immobile sur sa surface, camouflage parfait',            alt:'Nature gecko' },
  { src:'images/Photos/599940796_122112234621128394_7348100634852652146_n.jpg', cat:'nature',   title:'Reflets sur l\'eau',   desc:'Surface d\'eau calme reflétant le ciel et la végétation environnante',  alt:'Nature eau' },
  { src:'images/Photos/599942229_122111732745128394_6449392625945976264_n.jpg', cat:'portrait', title:'Portrait urbain',      desc:'Portrait en milieu urbain, contraste entre le sujet et la ville',       alt:'Portrait urbain',     v:'tall' },
  { src:'images/Photos/599949444_122112234381128394_2535741325269155946_n.jpg', cat:'nature',   title:'Texture de bois',      desc:'Détail de bois naturel, grain et patine du temps qui passe',            alt:'Nature bois' },
  { src:'images/Photos/600189154_122112881001128394_5522673791807613616_n.jpg', cat:'portrait', title:'Regard tourné',        desc:'Portrait de trois-quarts, regard détourné, mystère et intrigue',        alt:'Portrait regard' },
  { src:'images/Photos/601443420_122112234159128394_2697640368644546122_n.jpg', cat:'nature',   title:'Horizon dégagé',       desc:'Paysage ouvert malgache, ciel vaste et lignes d\'horizon apaisantes',   alt:'Nature horizon' },
  { src:'images/Photos/601821486_122112234399128394_916410228112404415_n.jpg',  cat:'nature',   title:'Nuit tombante',        desc:'Paysage au crépuscule, transition douce entre le jour et la nuit',      alt:'Nature nuit' },
  { src:'images/Photos/601826326_122111732853128394_3869651781709297314_n.jpg', cat:'portrait', title:'Figure emblématique',  desc:'Portrait fort, personnalité affirmée et présence charismatique',        alt:'Portrait figure' },
  { src:'images/Photos/602323849_122112234201128394_3783646638378852227_n.jpg', cat:'nature',   title:'Verdure dense',        desc:'Végétation tropicale abondante, nuances de vert et lumière tamisée',     alt:'Nature verdure' },
  { src:'images/Photos/603913167_122112881061128394_8433268202056053994_n.jpg', cat:'portrait', title:'Portrait en lumière',  desc:'Sujet éclairé par une lumière douce et directionnelle, peau lumineuse', alt:'Portrait lumière' },
  { src:'images/Photos/604689823_122112234561128394_550359864125679748_n.jpg',  cat:'nature',   title:'Nature sauvage',       desc:'Espèce animale malgache dans son habitat naturel non perturbé',         alt:'Nature sauvage' },
  { src:'images/Photos/604808572_122112881133128394_4818548012639870603_n.jpg', cat:'nature',   title:'Faune locale',         desc:'Animal local capturé dans une posture naturelle et détendue',           alt:'Nature naturel' },
  { src:'images/Photos/605110328_122112880827128394_1688622093511389314_n.jpg', cat:'portrait', title:'Présence & charisme',  desc:'Portrait à la personnalité magnétique, regard qui traverse l\'image',  alt:'Portrait charisme',   v:'wide' },
  { src:'images/Photos/605710356_122112880767128394_3023770238170894960_n.jpg', cat:'portrait', title:'Portrait en action',   desc:'Sujet saisi en mouvement, dynamisme et vie dans le cadre',              alt:'Portrait mouvement' },
  { src:'images/Photos/612917652_122116375653128394_2902997054463069503_n.jpg', cat:'street',   title:'Passage animé',        desc:'Rue de passage, piétons et commerces, tissu urbain vivant',             alt:'Street passage' },
  { src:'images/Photos/613116891_122116375617128394_5580866591238786965_n.jpg', cat:'street',   title:'Marché local',         desc:'Étals colorés et commerçants, marché traditionnel de Madagascar',       alt:'Street marché' },
  { src:'images/Photos/613283567_122116375641128394_5035199686514663967_n.jpg', cat:'street',   title:'Ciel de ville',        desc:'Vue vers le ciel entre les bâtiments, géométrie urbaine et lumière',    alt:'Street ciel' },
  { src:'images/Photos/613425063_122116375689128394_6150541560802698187_n.jpg', cat:'street',   title:'Cycliste en ville',    desc:'Cycliste naviguant dans les rues, mobilité douce et quotidien',         alt:'Street vélo' },
  { src:'images/Photos/613553821_122116375665128394_8613666286555630987_n.jpg', cat:'street',   title:'Taxi-brousse',         desc:'Véhicule emblématique de Madagascar prêt pour un long trajet',          alt:'Street taxi-brousse' },
  { src:'images/Photos/614053834_122116375623128394_3616296510991102085_n.jpg', cat:'street',   title:'Route en perspective', desc:'Longue route droite se perdant dans le lointain malgache',              alt:'Street route' },
  { src:'images/Photos/614103634_122116375677128394_6898952125859573818_n.jpg', cat:'street',   title:'Asphalte & vie',       desc:'Détail de rue, asphalte usé et traces d\'une vie intense',              alt:'Street asphalte' },
  { src:'images/Photos/614852504_122116761915128394_1247179536128747287_n.jpg', cat:'street',   title:'Scène urbaine',        desc:'Instantané de la vie citadine, architecture et flux humain',            alt:'Street ville' },
  { src:'images/Photos/614924752_122116761927128394_5029909924403788841_n.jpg', cat:'street',   title:'Crépuscule en route',  desc:'Derniers rayons sur une rue animée, heure dorée et silhouettes',        alt:'Street crépuscule',   v:'tall' },
  { src:'images/Photos/614979623_122116761957128394_9218049929913134299_n.jpg', cat:'street',   title:'Dans le quartier',     desc:'Vue de quartier résidentiel, architecture locale et intimité',          alt:'Street quartier' },
  { src:'images/Photos/615055064_122116761981128394_3134458922414952981_n.jpg', cat:'street',   title:'La ruelle',            desc:'Ruelle étroite et pittoresque, ombres portées et silence relatif',      alt:'Street ruelle' },
  { src:'images/Photos/615064895_122116761993128394_8506288068696632866_n.jpg', cat:'street',   title:'Carrefour',            desc:'Croisement animé, directions multiples et flux de circulation',         alt:'Street carrefour' },
  { src:'images/Photos/615069148_122116761897128394_1423336119249385165_n.jpg', cat:'street',   title:'Lumière du soir',      desc:'Éclairage nocturne ou crépusculaire baignant la rue d\'une teinte chaude', alt:'Street lumière' },
  { src:'images/Photos/615376224_122116761885128394_4637850828848050799_n.jpg', cat:'portrait', title:'Charme naturel',       desc:'Portrait pris sur le vif, spontanéité et charme authentique',          alt:'Portrait charme' },
  { src:'images/Photos/615451783_122116761945128394_8866669723391874848_n.jpg', cat:'street',   title:'Veillée de rue',       desc:'Ambiance nocturne dans la rue, lumières chaudes et présences furtives', alt:'Street soir' },
  { src:'images/Photos/615490321_122117146845128394_3311969480957499924_n.jpg', cat:'nature',   title:'Chien de garde',       desc:'Chien veillant sur son territoire, vigilance et attachement au lieu',   alt:'Nature chien' },
  { src:'images/Photos/615698531_122117146791128394_8307280018302097468_n.jpg', cat:'nature',   title:'Élégance naturelle',   desc:'Créature locale dans une posture gracieuse, beauté du vivant',         alt:'Nature élégance' },
  { src:'images/Photos/616264573_122117146809128394_2395303523546809079_n.jpg', cat:'nature',   title:'Pluie tropicale',      desc:'Averse tropicale intense, eau qui ruisselle et végétation revigorée',   alt:'Nature pluie' },
  { src:'images/Photos/616287791_122117146779128394_8661695947664183909_n.jpg', cat:'nature',   title:'Martin-pêcheur',       desc:'Martin-pêcheur aux plumes vives, posé dans l\'attente du bon moment',   alt:'Nature oiseau' },
  { src:'images/Photos/616301494_122117146821128394_6689676186775633513_n.jpg', cat:'nature',   title:'Floraison',            desc:'Fleurs épanouies dans toute leur splendeur, couleur et délicatesse',     alt:'Nature floraison' },
  { src:'images/Photos/616352461_122117146833128394_3311308272511590177_n.jpg', cat:'nature',   title:'Vol de pigeons',       desc:'Pigeons en groupe sur les toits, vie urbaine des oiseaux locaux',       alt:'Nature pigeons' },
  { src:'images/Photos/641532729_122124643161128394_8156955788918663747_n.jpg', cat:'portrait', title:'Promotion diplômée',   desc:'Portrait lors de la cérémonie de remise des diplômes universitaires',   alt:'Portrait diplôme' },
  { src:'images/Photos/641692432_122124643215128394_6266642777835038616_n.jpg', cat:'portrait', title:'Portrait en studio',   desc:'Prise de vue en studio, maîtrise de la lumière et du cadre',            alt:'Portrait studio' },
  { src:'images/Photos/643343741_122124642819128394_7624690937762807119_n.jpg', cat:'portrait', title:'Jeune diplômée',       desc:'Portrait de jeune femme en toge de cérémonie, fierté et avenir',        alt:'Portrait diplômée' },
  { src:'images/Photos/643707119_122124643095128394_798819792424084071_n.jpg',  cat:'mode',     title:'Costume immaculé',     desc:'Costume blanc impeccable dans un cadre urbain, élégance masculine',     alt:'Mode costume blanc' },
];

// ═══════════════════════════════════════════════════════════
// GALLERY CAROUSEL
// ═══════════════════════════════════════════════════════════
const ZOOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`;
const CAT_FR = { portrait: 'Portrait', mode: 'Mode', nature: 'Nature', street: 'Street' };

let currentPhotos = PHOTOS.slice();
let currentSlide  = 0;

function photoItemHTML(p, idx) {
  return `<div class="gallery-item" data-cat="${p.cat}" data-idx="${idx}">
    <img src="${p.src}" alt="${p.alt}" loading="lazy" />
    <div class="gallery-overlay">
      <span class="gallery-cat">${CAT_FR[p.cat]}</span>
      <h3>${p.title}</h3>
      ${p.desc ? `<p class="gallery-desc">${p.desc}</p>` : ''}
      <button class="gallery-zoom" aria-label="Agrandir">${ZOOM_SVG}</button>
    </div>
  </div>`;
}

function renderGallery(photos) {
  currentPhotos = photos;
  currentSlide  = 0;
  const slider = document.getElementById('gallery');
  const dotsEl = document.getElementById('gallery-dots');
  if (!slider || !dotsEl) return;

  const SLIDE_SIZE = 6;
  const slides = [];
  for (let i = 0; i < photos.length; i += SLIDE_SIZE) slides.push(photos.slice(i, i + SLIDE_SIZE));

  // Each slide: 4 cols → tall | pair(2) | tall | pair(2)
  slider.innerHTML = slides.map(slide => {
    const [p0, p1, p2, p3, p4, p5] = slide;
    const base = currentPhotos.indexOf(slide[0]);
    const idx = (offset) => base + offset;
    return `<div class="gallery-slide">
      <div class="slide-col">${p0 ? photoItemHTML(p0, idx(0)) : ''}</div>
      <div class="slide-col">${[p1,p2].filter(Boolean).map((p,o)=>photoItemHTML(p,idx(1+o))).join('')}</div>
      <div class="slide-col">${p3 ? photoItemHTML(p3, idx(3)) : ''}</div>
      <div class="slide-col">${[p4,p5].filter(Boolean).map((p,o)=>photoItemHTML(p,idx(4+o))).join('')}</div>
    </div>`;
  }).join('');

  slider.querySelectorAll('.gallery-zoom').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      openLightbox(parseInt(btn.closest('.gallery-item').dataset.idx));
    });
  });

  dotsEl.innerHTML = slides.map((_,i) =>
    `<button class="g-dot${i===0?' active':''}" data-i="${i}"></button>`
  ).join('');
  dotsEl.querySelectorAll('.g-dot').forEach(btn =>
    btn.addEventListener('click', () => goSlide(parseInt(btn.dataset.i)))
  );

  slider.style.transform = 'translateX(0)';
}

function goSlide(idx) {
  currentSlide = idx;
  document.getElementById('gallery').style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.g-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
}

renderGallery(PHOTOS);

// ── Navbar scroll effect ─────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Mobile nav toggle ────────────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Scroll animations ────────────────────────────────────
const animEls = document.querySelectorAll('[data-animate]');
animEls.forEach(el => {
  el.style.transitionDelay = (el.dataset.delay || 0) + 'ms';
});

const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

animEls.forEach(el => animObserver.observe(el));

// Skill bars
document.querySelectorAll('.about-text-col').forEach(col => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('animated'));
      }
    });
  }, { threshold: 0.3 }).observe(col);
});

// ── Scrollspy ────────────────────────────────────────────
const spyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });

document.querySelectorAll('section[id]').forEach(s => spyObserver.observe(s));


// ═══════════════════════════════════════════════════════════
// PORTFOLIO FILTER
// ═══════════════════════════════════════════════════════════
const filterTabs = document.querySelectorAll('.filter-tab');

function applyFilter(filter) {
  filterTabs.forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.filter-tab[data-filter="${filter}"]`);
  if (activeTab) activeTab.classList.add('active');
  const filtered = filter === 'all' ? PHOTOS : PHOTOS.filter(p => p.cat === filter);
  renderGallery(filtered);
}

filterTabs.forEach(tab => tab.addEventListener('click', () => applyFilter(tab.dataset.filter)));

// Category panel "view" buttons → filter + scroll to gallery
document.querySelectorAll('.cat-view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    applyFilter(btn.dataset.filter);
    const galleryArea = document.getElementById('gallery-area');
    if (galleryArea) {
      setTimeout(() => galleryArea.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  });
});


// ═══════════════════════════════════════════════════════════
// LIGHTBOX
// ═══════════════════════════════════════════════════════════
const lightbox  = document.getElementById('lightbox');
const lbImg     = document.getElementById('lb-img');
const lbCaption = document.getElementById('lb-caption');
let lbIndex = 0;

lbImg.style.transition = 'opacity .18s ease';

function openLightbox(photoIdx) {
  lbIndex = photoIdx;
  updateLightbox();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

function updateLightbox() {
  if (!currentPhotos.length) return;
  const p = currentPhotos[lbIndex];
  if (!p) return;
  lbImg.src = p.src;
  lbImg.alt = p.alt;
  lbCaption.textContent = p.title;
}

function lbNav(dir) {
  lbIndex = (lbIndex + dir + currentPhotos.length) % currentPhotos.length;
  lbImg.style.opacity = '0';
  setTimeout(() => { updateLightbox(); lbImg.style.opacity = '1'; }, 180);
}

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  lbNav(-1);
  if (e.key === 'ArrowRight') lbNav(1);
});

// Expose for inline HTML buttons
window.closeLightbox = closeLightbox;
window.lbNav = lbNav;
window.goSlide = goSlide;


// ═══════════════════════════════════════════════════════════
// TESTIMONIALS SLIDER
// ═══════════════════════════════════════════════════════════
const track = document.getElementById('testi-track');
const dots  = document.querySelectorAll('.testi-dot');
let testitCurrent = 0;
let testiTimer;

function goTesti(index) {
  testitCurrent = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
  resetTestiTimer();
}

function resetTestiTimer() {
  clearInterval(testiTimer);
  testiTimer = setInterval(() => {
    goTesti((testitCurrent + 1) % dots.length);
  }, 5000);
}

window.goTesti = goTesti;
resetTestiTimer();

let touchStartX = 0;
track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
track.addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) goTesti(diff > 0
    ? Math.min(testitCurrent + 1, dots.length - 1)
    : Math.max(testitCurrent - 1, 0));
});


// ═══════════════════════════════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════════════════════════════
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit-photo');
  const orig = btn.textContent;
  btn.textContent = 'Message envoyé ✓';
  btn.style.background = '#22c55e';
  setTimeout(() => {
    btn.textContent = orig;
    btn.style.background = '';
    e.target.reset();
  }, 3500);
}

window.handleContactSubmit = handleContactSubmit;
