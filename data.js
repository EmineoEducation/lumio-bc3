// ══════════════════════════════════════════════════════════════
//  DATA — Mission Lumio Health BC3
//  Janvier 2027 · Campagne « Santé Invisible » qui déraille
//  Dépassement brief + budget + signaux RSE
//  Livrable : Rapport d'étape + Plan de reprise
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  student: {
    name: "{{PRENOM}}",
    role: "Consultant·e externe — Mission de pilotage",
    email: "{{EMAIL_ETUDIANT}}",
    company: "Indépendant·e"
  },

  // ─── EMAIL CEO (accessible via easter egg corbeille) ────────
  ceoEmail: {
    from: "Théo Marczak <theo@lumio-health.com>",
    to: "Sonia Ferracci <sonia@lumio-health.com>",
    cc: "",
    subject: "FWD : Réactions jury — Campagne Fantôme de Soi",
    date: "18 janvier 2027, 22h47",
    body: `Sonia,

Je te transmets les retours du jury interne sur la campagne. J'aurais préféré ne pas écrire ça par mail mais la situation ne peut plus attendre.

Le claim "Votre corps parle avant vous" utilisé dans les visuels — le service juridique nous a alerté. Withings a déposé une phrase quasi-identique ("Your body speaks first") sur leur campagne UK en novembre. On est peut-être dans la zone de similarité. L'avocate demande une mise en retrait préventive des visuels d'ici vendredi. Elle m'a aussi signalé qu'un dépôt tardif de notre côté, si on décide de le faire, ne nous protégerait plus grand-chose à ce stade — la fenêtre était avant le lancement, pas après.

D'autre part : la photo utilisée dans le visuel "Metro" — la femme en surmenage, regard vide, cercles noirs sous les yeux. L'équipe RH de Decathlon (client) nous a écrit ce matin. Leur DRH trouve que ça "stigmatise les personnes en souffrance au travail" et que ça contredit leur charte bien-être. Ils ont évoqué "remise en question du contrat". C'est 147 000 € de chiffre annuel — et surtout notre client B2B le plus ancien, celui qu'on cite dans nos études de cas depuis trois ans.

Troisième point : le post LinkedIn de Yassine du 14 janvier avec les résultats intermédiaires. Il a publié "Lumio touche 4,2 millions d'impressions" avant validation de notre côté. Les chiffres sont probablement corrects mais on n'avait pas validé la communication externe. Northgate a vu. Jakob m'a appelé pour demander si on avait changé notre politique de communication — je lui ai dit que non, que c'était un cas isolé, mais je n'en suis plus totalement sûr moi-même.

Le budget : Sonia, on est à 312 000 € engagés sur 200 000 € autorisés. Je sais que le board avait informellement évoqué une rallonge possible, mais elle n'a pas été votée. Un board qui évoque quelque chose n'a jamais engagé l'entreprise à quoi que ce soit — tu le sais aussi bien que moi. On ne peut pas continuer comme ça.

Ce qui m'inquiète le plus, ce n'est pas un de ces quatre points isolément — c'est qu'ils remontent tous la même semaine, et que je découvre chacun d'eux après qu'il se soit produit, jamais avant.

Il faut qu'on parle demain matin. Et il faut que {{PRENOM}} produise un rapport d'étape avant la fin de semaine — je dois présenter une situation honnête au board lundi, pas une version arrangée.

T.`
  },

  // ─── EMAIL DE MISSION (brief) ───────────────────────────────
  briefEmail: {
    from: "Sonia Ferracci <sonia@lumio-health.com>",
    to: "{{EMAIL_ETUDIANT}}",
    subject: "Mission de pilotage campagne — urgent — confidentiel",
    date: "19 janvier 2027, 07h15",
    body: `{{PRENOM}},

Je te contacte en urgence. J'ai besoin de toi aujourd'hui.

Contexte rapide : depuis octobre, on déploie notre première grande campagne de repositionnement — « Fantôme de Soi », créée par l'agence Alter Scope. L'idée de départ était forte. En trois mois, on s'est retrouvés dans une situation que je n'aurais pas anticipée.

Les faits bruts :
— Budget engagé : 312 000 €. Budget autorisé par Théo : 200 000 €. Écart : +112 000 €. J'ai engagé des dépenses sur la foi d'une rallonge évoquée en board mais jamais votée formellement.
— Le claim central "Votre corps parle avant vous" pose un problème potentiel de similarité avec une phrase Withings déposée en UK. L'avocate demande un retrait préventif.
— Le visuel "Metro" (femme en surmenage, regard vide) a choqué un client B2B clé — Decathlon — qui parle de rupture de contrat.
— Yassine (notre content manager) a publié des résultats intermédiaires sans validation préalable. Le fonds a réagi.

Ce qui rend la situation plus difficile encore : ces quatre points sont arrivés presque simultanément, sur une semaine, alors qu'individuellement chacun aurait été gérable avec un peu de recul. Je n'ai pas eu ce recul. J'ai géré chaque décision dans l'instant, sans jamais reprendre l'ensemble à froid — et c'est très exactement le regard que je te demande d'apporter.

Il me faut deux choses d'ici vendredi 17h :

1. Un rapport d'étape honnête — pas un document de défense, un diagnostic. Ce qui s'est passé, pourquoi, et ce que ça implique comme risques.

2. Un plan de reprise — ce qu'on fait dans les 7 jours, ce qu'on arrête, ce qu'on préserve de la campagne.

Théo doit présenter au board lundi matin. Il a besoin d'une lecture externe, pas de la mienne. Je précise que je ne te demande pas de m'épargner dans ce rapport — si ma part de responsabilité doit être nommée, elle doit l'être clairement, sinon le document ne servira à rien face à Théo.

Tout est dans ton espace. Prends le mail de Théo (transmis ce soir), le brief initial d'Alter Scope, les résultats de suivi envoyés par Yassine, et la réaction de Decathlon. Écoute aussi Camille si tu en as l'occasion — elle est en première ligne côté clients et voit des choses que je ne vois pas depuis mon bureau.

Tu peux me poser des questions sur Slack. Je répondrai entre les réunions.

Sonia
Directrice Marketing — Lumio Health`
  },

  // ─── ARTICLES DE PRESSE ─────────────────────────────────────
  pressArticles: [
    {
      url: "strategies.fr/communication/campagne-bien-etre-travail-derive",
      source: "Stratégies",
      date: "9 janvier 2027",
      author: "par Mathieu Cresson",
      headline: "Campagnes bien-être au travail : le retour de bâton RSE qui guette les marques",
      lede: "Plusieurs annonceurs ont dû retirer des campagnes de santé mentale après des accusations de « poverty porn émotionnel ». Le sujet est devenu un terrain miné.",
      body: `La représentation de la souffrance au travail dans les campagnes de communication suscite une vigilance croissante de la part des associations de patients et des syndicats. « Montrer quelqu'un de "cassé" pour vendre un outil de prévention, c'est se servir de la détresse comme argument commercial. C'est un problème éthique, pas juste esthétique », estime la présidente de l'association SantéPsy Pro.

Plusieurs grandes marques ont essuyé des critiques similaires ces 18 derniers mois. La dernière en date, une campagne d'une mutuelle santé montrant un salarié en larmes dans les toilettes, a été retirée après trois jours suite à un appel au boycott sur X/Twitter. Une autre, dans le secteur des assurances, avait dû publier un communiqué d'excuses après que des patients concernés par la dépression eurent qualifié le visuel de "spectacle de la souffrance des autres".

Le point commun de ces controverses, selon plusieurs experts interrogés, est presque toujours le même : le visuel a été validé par des équipes marketing et créatives, jamais par des personnes directement concernées par le sujet représenté. « On demande à des gens qui n'ont jamais vécu un burn-out de juger si une image de burn-out est acceptable. Le jugement esthétique et le jugement éthique sont deux choses différentes », note un consultant en communication santé cité dans l'article.

Les experts en communication conseillent désormais de systématiquement tester les visuels de souffrance psychologique sur des panels incluant des personnes concernées, avant tout déploiement. « Le jury de votre agence, même bien intentionné, n'est pas représentatif des personnes qui vivent ces situations », rappelle Olivia Stern, directrice de l'AACC. Elle recommande également de prévoir, en amont de tout brief créatif abordant la santé mentale, une checklist RSE validée conjointement par l'annonceur et l'agence — une pratique qu'elle estime "encore minoritaire, alors qu'elle devrait être un standard".`
    },
    {
      url: "cb-news.fr/propriete-intellectuelle-claim-publicite-risques",
      source: "CB News",
      date: "15 novembre 2026",
      author: "par Sarah Duval",
      headline: "Droits des claims publicitaires : une zone grise que peu d'annonceurs maîtrisent",
      lede: "La protection d'un slogan publicitaire est plus complexe qu'il n'y paraît — et les similitudes non intentionnelles peuvent coûter très cher.",
      body: `Contrairement aux marques déposées, un slogan publicitaire n'est protégé que s'il répond à des critères stricts de distinctivité. Mais la zone grise des « similitudes frappantes » a donné lieu à des litiges coûteux, notamment lorsque deux marques opèrent sur le même secteur avec des cibles proches — ce qui aggrave le risque de confusion aux yeux d'un juge.

« Le test ne porte pas uniquement sur la formulation exacte, mais sur l'impression d'ensemble laissée par le claim — son rythme, sa structure, sa résonance sémantique », explique Maître Aurélie Bentz, avocate spécialisée en propriété intellectuelle. Elle cite l'exemple d'un litige tranché en 2024 entre deux marques de cosmétiques dont les slogans, bien que composés de mots différents, ont été jugés "confusants dans l'esprit du consommateur moyen".

La difficulté principale, selon elle, est temporelle : la plupart des annonceurs ne pensent à vérifier l'antériorité d'un claim qu'après la validation créative, alors que c'est précisément à ce stade qu'un changement de direction coûte le moins cher. Une fois le claim intégré aux visuels, au plan média et parfois déjà diffusé, le coût d'un changement de dernière minute peut dépasser largement celui d'une vérification en amont.

La solution la plus sûre reste le clearance systématique avant lancement : une recherche documentaire sur les claims similaires déposés dans votre secteur et dans les pays cibles, y compris hors Union européenne si la marque concurrente y est active. Coût estimé : entre 800 € et 3 000 € selon le périmètre. Coût d'un litige non anticipé : bien davantage — sans compter le temps de retrait et de refonte des supports déjà produits.`
    },
    {
      url: "maddyness.com/startup/communication-resultat-intermediaire-fuite",
      source: "Maddyness",
      date: "3 décembre 2026",
      author: "par Hugo Verdier",
      headline: "Résultats partiels publiés trop tôt : le piège des communications prématurées",
      lede: "Plusieurs startups ont appris à leurs dépens que publier des métriques intermédiaires sans validation interne pouvait créer des attentes impossibles à tenir.",
      body: `« J'avais juste voulu partager une bonne nouvelle en interne. En deux heures, c'était sur LinkedIn et les investisseurs appelaient », raconte un directeur marketing d'une scale-up française, sous couvert d'anonymat. La situation est devenue un classique de la com startup : l'enthousiasme dépasse les process, souvent porté par des équipes jeunes et engagées qui vivent chaque bon chiffre comme une victoire collective à célébrer immédiatement.

Le problème n'est pas seulement réputationnel. Dans un contexte où des fonds d'investissement suivent activement les communications publiques de leurs participations, une donnée non validée peut créer des engagements implicites, voire des obligations d'information vis-à-vis d'autres investisseurs ou partenaires qui auraient pu se fier à ce chiffre pour prendre une décision.

Certains fonds vont plus loin et intègrent désormais une clause de "communication publique" dans leurs pactes d'actionnaires, obligeant les startups financées à faire valider par le board toute communication chiffrée avant diffusion externe — même sur les réseaux sociaux professionnels. Une pratique encore rare mais en progression, selon plusieurs avocats d'affaires interrogés.

Les experts recommandent un protocole simple : toute donnée de performance publiée, même en interne sur un canal semi-ouvert comme LinkedIn, doit avoir fait l'objet d'une validation marketing et juridique préalable. « Sur LinkedIn, la frontière entre "interne" et "public" n'existe pas », résume Léa Fontaine, consultante en communication digitale. Elle ajoute qu'un chiffre isolé, même correct, peut être mal interprété hors de son contexte complet — un problème qui touche particulièrement les startups en phase de levée de fonds, où chaque donnée est scrutée par des investisseurs potentiels.`
    }
  ],

  // ─── BRIEF INITIAL ALTER SCOPE (PDF viewer) ─────────────────
  alterScopeBrief: {
    title: "Brief créatif — Campagne « Fantôme de Soi »",
    subtitle: "Lumio Health × Alter Scope Agency",
    author: "Yassine Morel (Lumio) / Équipe création Alter Scope",
    date: "15 octobre 2026",
    body: `CONTEXTE CLIENT

Lumio Health relance sa communication suite au repositionnement « santé invisible » validé en septembre 2026. L'objectif est de faire connaître la marque auprès d'une cible B2B (DRH, médecins du travail) et d'amorcer une présence B2C (actifs urbains 30-50 ans).

Le contexte concurrentiel a pesé dans le choix du calendrier : deux acteurs du secteur (Biostream, Neuroflow) ont annoncé des levées de fonds cet automne et préparent leurs propres campagnes de notoriété pour le premier trimestre 2027. Lumio veut occuper le terrain en premier.

Budget validé : 200 000 € (enveloppe annuelle)
Répartition indicative : 35% prod créa, 40% médias, 25% activation événementielle

INSIGHT CENTRAL

Le stress chronique est un fantôme — présent partout, visible nulle part. Les gens le ressentent mais ne le voient pas. Les médecins ne l'objectivent pas. Les DRH ne savent pas le mesurer. Lumio rend le fantôme visible.

Étude qualitative préalable (12 entretiens DRH, réalisée par Alter Scope en septembre) : la moitié des DRH interrogés reconnaissent avoir "au moins un collaborateur en surmenage visible sans jamais avoir formalisé de diagnostic". C'est le point de départ créatif de la campagne.

TERRITOIRE CRÉATIF

« Fantôme de Soi » — la version de soi que le stress chronique efface progressivement. La campagne montre des moments du quotidien où quelqu'un est là physiquement mais absent mentalement : en réunion, dans le métro, au dîner en famille.

Le parti pris créatif consiste à ne jamais nommer directement la souffrance — le sujet se lit dans le regard, la posture, le flou du décor autour du personnage, jamais dans un texte explicatif. Alter Scope revendique une approche "cinématographique plutôt que publicitaire".

CLAIM PRINCIPAL

« Votre corps parle avant vous. »

Trois variantes ont été testées en interne avant validation : "Le corps sait avant la tête", "Ce que votre corps dit déjà" et la version retenue. Le choix s'est fait sur le critère de mémorisation (test de rappel à 24h, panel interne Alter Scope de 40 personnes).

DÉCLINAISONS VISUELLES (validées par Sonia Ferracci — réunion du 18 octobre)

1. Visuel "Réunion" — salarié en réunion, regard vague, post-its autour de lui invisibles
2. Visuel "Métro" — femme assise, yeux dans le vide, cercles noirs, foule floue autour d'elle
3. Visuel "Dîner" — homme regardant son assiette, famille floue, silence visible

FORMATS

Display B2B : LinkedIn Sponsored Content, Newsletter RH Partenaires
Affichage : 8x2 Paris + Lyon (quartiers d'affaires)
Digital B2C : Instagram, YouTube pre-roll
Événementiel : Forum Préventica (prévu mars 2027)

NOTES

— Le visuel "Métro" est le plus impactant selon les tests internes Alter Scope (recall +34%) — c'est aussi celui qui a suscité le plus de débat en interne chez Alter Scope avant validation, deux créatifs junior ayant exprimé des réserves sur le traitement visuel de la fatigue psychologique, réserves non formalisées par écrit.
— Validation juridique du claim : en cours au moment du brief / à boucler avant lancement
— Décision de lancement anticipé prise par Sonia Ferracci le 2 novembre en accord avec Yassine Morel (décalage de la validation juridique pour tenir le planning)
— Aucun critère RSE ni clause de vérification éthique des visuels n'a été intégré dans le cahier des charges transmis à Alter Scope — l'agence a travaillé sur la seule base de l'insight créatif et du calendrier.

CALENDRIER

Semaine 46 (nov.) : BAT visuels + finalisation claim
Semaine 47 : Lancement campagne display B2B
Semaine 50 : Lancement affichage + digital B2C
Janvier 2027 : Bilan mi-parcours (prévu)
Mars 2027 : Événement Préventica`
  },

  // ─── RAPPORT DE SUIVI YASSINE (résultats intermédiaires) ────
  yassineReport: {
    title: "Résultats intermédiaires — Campagne Fantôme de Soi",
    subtitle: "Semaines 47 à 2 (nov. 2026 – jan. 2027)",
    author: "Yassine Morel, Content Manager",
    date: "14 janvier 2027",
    body: `RÉSUMÉ EXÉCUTIF

Résultats globaux au 14 janvier 2027 :
— Impressions totales : 4 200 000 (Display + Affichage + LinkedIn + Instagram)
— CPM Display B2B : 14,20 €/mille (objectif : 12 €) → dépassement +18%
— Taux d'engagement LinkedIn : 2,1% (objectif : 1,5%) → au-dessus objectif ✓
— Couverture affichage Paris/Lyon : 89% des panneaux commandés déployés ✓
— Leads DRH entrants via campagne : 23 (objectif mensuel : 15) ✓
— Pré-inscriptions stand Préventica (mars) : 41 (objectif : 30) ✓

DÉTAIL PAR CANAL

LinkedIn Sponsored (visuel "Réunion") : 1 100 000 impressions, CTR 0,9% (bon pour le secteur B2B RH), 340 clics vers la landing page dédiée. C'est le canal qui génère le plus de leads qualifiés — 18 des 23 leads DRH viennent de ce format.

Affichage Paris/Lyon (visuel "Métro") : 2 400 000 contacts estimés (base Médiamétrie affichage), 8 emplacements sur 9 commandés effectivement posés (1 emplacement gare Part-Dieu retardé pour raison technique, posé le 20 janvier). C'est le visuel qui concentre l'essentiel des remontées négatives.

Instagram + YouTube pre-roll (ajout tardif) : 700 000 impressions, taux de complétion pre-roll 61% (au-dessus de la moyenne secteur santé, généralement 45-50%).

Newsletter RH partenaires : diffusée à 3 reprises (semaines 47, 49, 2), taux d'ouverture moyen 34%, taux de clic 6,2%.

RÉPARTITION BUDGÉTAIRE AU 14 JANVIER

  Production créa         : 89 400 €  (budget alloué : 70 000 €)  → dépassement +27%
  Médias display/social   : 142 000 € (budget alloué : 80 000 €)  → dépassement +77%
  Affichage Paris+Lyon    : 61 200 €  (budget alloué : 50 000 €)  → dépassement +22%
  Activation Préventica   : 19 400 €  (budget alloué : 0 €)       → hors budget
  ─────────────────────────────────────────────────────────────────────────────────
  TOTAL ENGAGÉ            : 312 000 €  BUDGET AUTORISÉ : 200 000 €  ÉCART : +56%

NOTE SUR L'ÉVOLUTION BUDGÉTAIRE

Les dépassements sont liés à quatre décisions prises en cours de campagne :
1. Ajout d'un format YouTube pre-roll (décision Sonia, 3 nov.) : +22 000 € — justifié à l'époque par des performances Instagram organique jugées prometteuses en test.
2. Extension affichage Lyon (décision Sonia, 15 nov.) : +11 200 € — Lyon n'était pas dans le brief initial, ajouté après un retour positif du réseau Camille sur ce bassin d'emploi tertiaire.
3. Inscription Préventica (décision Sonia + Yassine, 1 déc.) : +19 400 € — stand + logistique + supports, décidé pour capitaliser sur la dynamique de la campagne alors jugée positive.
4. Surcoût production retouches visuelles suite retours Alter Scope (partagé) : +19 400 € — trois rounds de retouches sur le visuel "Métro" avant validation finale, chacun facturé en supplément par l'agence.

Aucune de ces quatre décisions n'a fait l'objet d'un arbitrage budgétaire formel avec Théo. Chacune, prise isolément, semblait mineure (entre 11K€ et 22K€) — c'est leur cumul qui a produit l'écart de 112 000 €.

SIGNAUX ENTRANTS

— 3 DRH ont demandé une démo suite au visuel "Réunion" (positif)
— 1 cliente DRH a mentionné que le visuel "Métro" était "fort mais dur" (neutre/ambigu)
— Decathlon : email de leur DRH reçu le 17 janvier, objet "Retour sur campagne Lumio" (transmis à Sonia)
— Commentaires négatifs sur Instagram : 12 commentaires mentionnant "stigmatisation" / "pas cool pour les gens qui souffrent vraiment" — tous supprimés par modération le 15 janvier
— Un compte associatif (SantéPsy Pro, cité dans la presse spécialisée) a partagé une capture du visuel "Métro" avec un commentaire critique, 340 vues, pas encore viral mais surveillé

PUBLICATION LINKEDIN DU 14 JANVIER

J'ai publié un post LinkedIn partageant le cap des 4,2 millions d'impressions. Le post a été liké 87 fois en 6 heures et partagé 14 fois, dont un partage par un analyste sectoriel suivi par plusieurs profils Northgate Capital. Sonia m'a demandé de le retirer le 15 au matin — je l'ai laissé car il était déjà très engagé et je craignais qu'un retrait soudain attire davantage l'attention que le post lui-même. Je le retire si confirmation explicite.

FIN DE RAPPORT`
  },

  // ─── EMAIL DECATHLON ────────────────────────────────────────
  decathlonEmail: {
    from: "Hélène Marchand <h.marchand@decathlon.com>",
    to: "sonia@lumio-health.com",
    cc: "camille.ott@lumio-health.com",
    subject: "Retour sur votre campagne actuelle",
    date: "17 janvier 2027, 11h34",
    body: `Bonjour Sonia,

Je me permets de vous écrire directement car nous avons une relation de confiance depuis trois ans et je préfère vous le dire avant que ça ne remonte par d'autres canaux.

Votre campagne actuelle — et notamment le visuel que j'ai vu en affichage gare de Lyon ce mardi — nous a posé un problème au sein de notre équipe RH. La représentation de la femme visiblement épuisée, avec les cernes marqués et le regard vide, a été perçue comme une forme de stigmatisation de la dépression ou du burn-out. Deux membres de mon équipe m'en ont parlé spontanément avant même que je l'aie vu moi-même, ce qui m'indique que le sujet circule déjà en interne chez nous.

Notre charte bien-être salarié, que nous avons justement construite avec l'aide de votre solution Lumio ces deux dernières années, insiste précisément sur la représentation positive et non stigmatisante de la santé mentale au travail. Ce visuel entre en contradiction directe avec ce que nous défendons en interne — et, je vous le dis franchement, ça place notre propre équipe RH dans une position délicate : nous ne pouvons pas continuer à citer Lumio en exemple de bonne pratique sur le stress au travail si votre propre communication grand public en donne une image aussi dure.

Je ne fais pas de mise en demeure. Mais je dois vous dire que si ce visuel reste diffusé, cela va rendre très difficile le renouvellement de notre contrat en mars, que nous devons justifier devant notre comité RSE interne — comité qui, je le précise, examine désormais systématiquement la cohérence de nos prestataires avec nos propres engagements, pas seulement leurs produits.

Je reste disponible pour en parler, avec vous ou avec toute personne de votre équipe en charge du dossier.

Cordialement,
Hélène Marchand
DRH — Decathlon France`
  },

  // ─── VERBATIMS CAMILLE (Voice memos) ────────────────────────
  camilleVerbatims: [
    {
      duration: "01:28",
      title: "Sur l'ambiance client depuis la campagne",
      transcript: `Depuis que la campagne a commencé à tourner, j'ai des retours étranges de mes clients. Pas négatifs en façade — mais étranges. Des DRH qui me posent des questions sur "l'approche éthique" de Lumio, qui me demandent si on a consulté des associations. L'un d'eux m'a dit "j'aime bien votre produit mais votre pub est un peu dure". Je pense qu'on a surestimé notre capacité à aller sur le terrain de la souffrance visible. Notre force depuis huit ans, c'était justement de ne pas stigmatiser — de parler de prévention, de données, d'anticipation. Là on est allés sur l'image de la personne cassée et ça crée une dissonance.

Ce qui m'inquiète le plus, honnêtement, c'est pas un client en particulier — c'est le pattern. J'ai eu quatre échanges de ce type en dix jours, avec quatre clients différents, dans quatre secteurs différents. Quand c'est un cas isolé, je me dis que c'est une sensibilité personnelle. Quand c'est un pattern qui traverse plusieurs comptes, je me dis qu'on a raté quelque chose au niveau du message, pas juste au niveau d'une réaction individuelle. Et honnêtement je ne sais pas encore comment en parler à Sonia sans que ça ait l'air d'une attaque contre son travail — parce que ce n'est pas ça, c'est juste un signal terrain qu'elle n'a pas.`
    },
    {
      duration: "01:05",
      title: "Sur le dépassement budgétaire",
      transcript: `Je ne savais pas qu'on était à 312 000 €. Vraiment. Théo ne nous informe pas sur les budgets en temps réel et Sonia n'en parle pas en réunion commerciale. Je l'ai appris hier soir par le mail de Théo. Ce qui m'inquiète c'est pas le montant en lui-même — c'est que si le fonds coupe les vivres maintenant, on annule Préventica et on perd notre seule fenêtre de contact physique avec les DRH dans les 6 prochains mois. C'est le pire timing possible.

Il faut aussi que je dise une chose, même si c'est pas facile à dire à voix haute : moi-même j'avais un doute sur l'extension Lyon quand Sonia m'en a parlé en novembre. Je lui ai dit que le réseau tertiaire lyonnais réagissait bien, ce qui est vrai, mais je n'ai jamais dit "vas-y, dépasse le budget". J'ai juste donné une info terrain positive, et cette info a servi à justifier une décision que je n'avais pas à valider. Je ne sais pas si c'est important pour le rapport, mais je préfère que ce soit dit une fois plutôt que ça reste flou.`
    },
    {
      duration: "01:47",
      title: "Ce que je conseillerais si on me demandait",
      transcript: `Si j'étais à la place de {{PRENOM}} — et j'ai pas cette responsabilité, c'est clair — ce que je ferais c'est distinguer ce qui est récupérable de ce qui ne l'est pas. Le claim juridique, on peut le changer. Le visuel "Métro", on peut le sortir de la rotation. Le budget dépassé, on peut l'expliquer si on présente un plan d'arrêt crédible. Ce qui est pas récupérable facilement, c'est la confiance de Théo vis-à-vis de Sonia. Et ça, c'est pas dans le rapport d'étape — c'est dans la tête de tout le monde.

Il y a aussi un truc que je remarque depuis huit ans que je fais ce métier chez Lumio : à chaque fois qu'une crise éclate, tout le monde veut d'abord savoir qui est responsable, avant même de savoir ce qu'on va faire. C'est humain, mais c'est contre-productif. Si {{PRENOM}} arrive avec un rapport qui commence par "qui a fait quoi", Théo va lire ça comme un procès contre Sonia, et Sonia va se braquer avant même d'avoir lu le plan de reprise. Il faut inverser l'ordre : d'abord ce qu'on fait dans les 7 jours, ensuite ce qui explique pourquoi c'est arrivé — jamais l'inverse.

La question que {{PRENOM}} doit se poser c'est : mon rapport protège qui ? Si c'est juste pour protéger Sonia, ça va pas tenir. Il faut que ce soit un vrai diagnostic. Et honnêtement, un vrai diagnostic protège aussi Sonia mieux qu'un rapport complaisant — parce que Théo saura reconnaître qu'on lui a dit la vérité, même une vérité inconfortable.`
    }
  ],

  // ─── SLACK ──────────────────────────────────────────────────
  slackMessages: {
    initial: [
      { from: "Sonia Ferracci", time: "07:18", text: "{{PRENOM}} — j'ai besoin de toi. Est-ce que tu as bien reçu mon mail de ce matin ?", read: true },
      { from: "Sonia Ferracci", time: "07:19", text: "C'est urgent. Vendredi 17h, rapport d'étape + plan de reprise. Théo présente lundi.", read: true },
    ],
    delayed: [
      { from: "Camille Ott", time: "+12min", text: "Je viens d'être mise au courant pour le budget. Je suis en état de choc. Si t'as besoin de moi pour le rapport, je suis disponible cet après-midi.", channel: "DM" },
      { from: "Sonia Ferracci", time: "+20min", text: "Pour info : j'ai pris les décisions de dépassement de bonne foi, sur la base d'échanges informels avec Jakob (Northgate). Ce n'était pas de l'improvisation. Mais je comprends que ça ne suffit pas.", channel: "DM" },
    ]
  }
,
  finder: {
    folders: {
      guide: {
        title: 'Guide de mission',
        sidebar: '⌘ Guide',
        icon: '📕',
        items: [
          { kind: 'mail', name: 'Brief de mission', app: 'mail', props: { openId: 'brief' } }
        ]
      },
      espace: {
        title: 'Espace de travail',
        sidebar: 'Espace de travail',
        icon: '📁',
        items: [
          { kind: 'mail', name: 'Boîte mail', app: 'mail', props: {} },
          { kind: 'note', name: 'Notes', app: 'notes', props: {} },
          { kind: 'audio', name: 'Mémos vocaux', app: 'voice', props: {} }
        ]
      }
    },
    order: ['guide', 'espace']
  }
,
  voiceMemos: [
    {
      title: "Sur l'ambiance client depuis la campagne",
      author: "Camille Ott",
      role: "Responsable partenariats B2B",
      date: "",
      context: "Verbatim terrain",
      durationSec: 88,
      transcript: "Depuis que la campagne a commencé à tourner, j'ai des retours étranges de mes clients. Pas négatifs en façade — mais étranges. Des DRH qui me posent des questions sur \"l'approche éthique\" de Lumio, qui me demandent si on a consulté des associations. L'un d'eux m'a dit \"j'aime bien votre produit mais votre pub est un peu dure\". Je pense qu'on a surestimé notre capacité à aller sur le terrain de la souffrance visible. Notre force depuis huit ans, c'était justement de ne pas stigmatiser — de parler de prévention, de données, d'anticipation. Là on est allés sur l'image de la personne cassée et ça crée une dissonance.\n\nCe qui m'inquiète le plus, honnêtement, c'est pas un client en particulier — c'est le pattern. J'ai eu quatre échanges de ce type en dix jours, avec quatre clients différents, dans quatre secteurs différents. Quand c'est un cas isolé, je me dis que c'est une sensibilité personnelle. Quand c'est un pattern qui traverse plusieurs comptes, je me dis qu'on a raté quelque chose au niveau du message, pas juste au niveau d'une réaction individuelle. Et honnêtement je ne sais pas encore comment en parler à Sonia sans que ça ait l'air d'une attaque contre son travail — parce que ce n'est pas ça, c'est juste un signal terrain qu'elle n'a pas."
    },
    {
      title: "Sur le dépassement budgétaire",
      author: "Camille Ott",
      role: "Responsable partenariats B2B",
      date: "",
      context: "Verbatim terrain",
      durationSec: 65,
      transcript: "Je ne savais pas qu'on était à 312 000 €. Vraiment. Théo ne nous informe pas sur les budgets en temps réel et Sonia n'en parle pas en réunion commerciale. Je l'ai appris hier soir par le mail de Théo. Ce qui m'inquiète c'est pas le montant en lui-même — c'est que si le fonds coupe les vivres maintenant, on annule Préventica et on perd notre seule fenêtre de contact physique avec les DRH dans les 6 prochains mois. C'est le pire timing possible.\n\nIl faut aussi que je dise une chose, même si c'est pas facile à dire à voix haute : moi-même j'avais un doute sur l'extension Lyon quand Sonia m'en a parlé en novembre. Je lui ai dit que le réseau tertiaire lyonnais réagissait bien, ce qui est vrai, mais je n'ai jamais dit \"vas-y, dépasse le budget\". J'ai juste donné une info terrain positive, et cette info a servi à justifier une décision que je n'avais pas à valider. Je ne sais pas si c'est important pour le rapport, mais je préfère que ce soit dit une fois plutôt que ça reste flou."
    },
    {
      title: "Ce que je conseillerais si on me demandait",
      author: "Camille Ott",
      role: "Responsable partenariats B2B",
      date: "",
      context: "Verbatim terrain",
      durationSec: 107,
      transcript: "Si j'étais à la place de {{PRENOM}} — et j'ai pas cette responsabilité, c'est clair — ce que je ferais c'est distinguer ce qui est récupérable de ce qui ne l'est pas. Le claim juridique, on peut le changer. Le visuel \"Métro\", on peut le sortir de la rotation. Le budget dépassé, on peut l'expliquer si on présente un plan d'arrêt crédible. Ce qui est pas récupérable facilement, c'est la confiance de Théo vis-à-vis de Sonia. Et ça, c'est pas dans le rapport d'étape — c'est dans la tête de tout le monde.\n\nIl y a aussi un truc que je remarque depuis huit ans que je fais ce métier chez Lumio : à chaque fois qu'une crise éclate, tout le monde veut d'abord savoir qui est responsable, avant même de savoir ce qu'on va faire. C'est humain, mais c'est contre-productif. Si {{PRENOM}} arrive avec un rapport qui commence par \"qui a fait quoi\", Théo va lire ça comme un procès contre Sonia, et Sonia va se braquer avant même d'avoir lu le plan de reprise. Il faut inverser l'ordre : d'abord ce qu'on fait dans les 7 jours, ensuite ce qui explique pourquoi c'est arrivé — jamais l'inverse.\n\nLa question que {{PRENOM}} doit se poser c'est : mon rapport protège qui ? Si c'est juste pour protéger Sonia, ça va pas tenir. Il faut que ce soit un vrai diagnostic. Et honnêtement, un vrai diagnostic protège aussi Sonia mieux qu'un rapport complaisant — parce que Théo saura reconnaître qu'on lui a dit la vérité, même une vérité inconfortable."
    }
  ]
};

// ══════════════════════════════════════════════════════════════
//  PASS_CONFIG — BC3 · Campagne qui déraille
//  Jan. 2027 · Rapport d'étape + Plan de reprise
// ══════════════════════════════════════════════════════════════
window.PASS_CONFIG = {
  bloc: 'bc3',
  titre: 'Pilotage de campagne & Gestion de crise',
  epreuve: "E5 — Rapport d'étape + Plan de reprise + Note réflexive",
  deadline: '24 janvier 2027 · Board Lumio 09h00',
  commanditaire: 'Sonia Ferracci',

  temps: [
    { n: 1, label: 'Exploration', debut: 0, fin: 75, couleur: '#1b4f8a',
      objectif: 'Reconstituer la chronologie des faits, identifier les 4 problèmes distincts',
      todoSuggere: [
        'Lire le mail de mission Sonia (Mail)',
        'Lire le mail confidentiel de Théo (Mail)',
        'Lire le brief initial Alter Scope (PDF)',
        'Lire le rapport Yassine — résultats + budget (PDF)',
        'Lire l\'email Decathlon (Mail)',
        'Écouter les verbatims Camille (Mémos vocaux)'
      ]
    },
    { n: 2, label: 'Structuration', debut: 75, fin: 150, couleur: '#1a6641',
      objectif: 'Qualifier les risques, trier récupérable / non récupérable, envoyer hypothèse à Sonia',
      todoSuggere: [
        'Envoyer une première lecture à Sonia (Slack)',
        'Remplir C.13 et C.14 dans le Livrable',
        'Identifier les 3 acteurs responsables et leur part dans l\'incident',
        'Construire la matrice risques C.17/C.18'
      ]
    },
    { n: 3, label: 'Production', debut: 150, fin: 210, couleur: '#c4420f',
      objectif: 'Finaliser le rapport d\'étape C.19, le plan de reprise C.14, commencer la note réflexive',
      todoSuggere: [
        'Finaliser C.19 — Rapport d\'étape honnête (risques, responsabilités, chiffres)',
        'Formaliser C.14 — Plan de reprise 7 jours (arrêts, ajustements, préservation)',
        'Rédiger la Note réflexive E5',
        'Vérifier les minimums de mots',
        'Soumettre à Sonia'
      ]
    }
  ],

  note_reflexive: true,
  noteReflexiveMinMots: 120,
  livrableMinMots: 700,

  competences: [
    {
      code: 'C.13',
      label: 'Cadrage des actions — brief et cahier des charges',
      libelle: 'Cadrage',
      rncp: 'Elaborer ou valider l\'élaboration des documents de référence — cahier des charges, brief — cadrant la réalisation des actions déclinant la stratégie marketing communication, en veillant à leur qualité formelle ainsi qu\'à la présence de critères sociaux et environnementaux.',
      placeholder: 'Analysez le brief initial de la campagne « Fantôme de Soi ». Était-il complet ? Les critères qualité, coût, délai et RSE étaient-ils précisés ? Qu\'est-ce qui a manqué ?',
      min: 100,
      motsCles: ['brief', 'cahier des charges', 'Alter Scope', 'critères', 'RSE', 'budget', 'spécifications', '200 000', 'qualité', 'délai'],
      conseil: 'Le brief initial ne comportait ni plafond budgétaire explicite, ni processus de validation intermédiaire, ni critères RSE. C\'est la racine structurelle de la dérive.'
    },
    {
      code: 'C.14',
      label: 'Organisation du déploiement et plan de reprise',
      libelle: 'Plan de reprise',
      rncp: 'Organiser globalement la mise en œuvre des actions déclinant la stratégie marketing communication, en déterminant les méthodes de conduite de projet à mobiliser, en s\'assurant de la cohérence de leur calendrier et en définissant les outils de planification, suivi et évaluation.',
      placeholder: 'Proposez un plan de reprise structuré à 7 jours : STOP / ADJUST / KEEP. Chaque action avec un responsable, un délai, un critère de succès.',
      min: 150,
      motsCles: ['arrêter', 'ajuster', 'préserver', 'responsable', 'délai', '7 jours', 'calendrier', 'outil', 'méthode', 'suivi'],
      conseil: 'Structure en 3 colonnes : STOP (visuel Metro, claim en attente retrait) / ADJUST (médias à geler, process publication) / KEEP (leads Préventica, relation Camille clients). Chaque ligne : qui / quoi / avant quand.'
    },
    {
      code: 'C.15',
      label: 'Constitution et dimensionnement de l\'équipe',
      libelle: 'Équipe',
      rncp: 'Constituer les équipes internes impliquées dans la réalisation des actions déclinant la stratégie marketing communication, en veillant à leur bon dimensionnement et aux conditions d\'inclusion.',
      placeholder: 'Analysez les rôles et responsabilités dans l\'équipe campagne. Qui a décidé quoi ? Proposez une répartition claire des missions pour le plan de reprise.',
      min: 80,
      motsCles: ['Sonia', 'Yassine', 'rôle', 'responsabilité', 'dimensionnement', 'compétences', 'validation', 'autorisation'],
      conseil: 'Sonia a pris des décisions de dépassement. Yassine a publié sans validation. Le process de validation était absent — responsabilité organisationnelle, pas seulement individuelle.'
    },
    {
      code: 'C.16',
      label: 'Animation des parties prenantes en situation de crise',
      libelle: 'Parties prenantes',
      rncp: 'Animer l\'écosystème des parties prenantes impliquées dans la réalisation des actions marketing communication, en mettant en œuvre un management de type collaboratif propice à l\'innovation et contribuant à l\'expression des talents individuels.',
      placeholder: 'Comment gérez-vous les relations avec les parties prenantes en situation de crise ? Decathlon (client menacé), Northgate (fonds informé), équipe interne (confiance rompue).',
      min: 100,
      motsCles: ['Decathlon', 'Northgate', 'Jakob', 'management', 'collaboratif', 'communication', 'crise', 'parties prenantes', 'confiance'],
      conseil: 'Decathlon menace (147K€), Northgate est informé, l\'équipe interne est déstabilisée. Le management collaboratif s\'applique aussi — et surtout — en crise.'
    },
    {
      code: 'C.17',
      label: 'Gestion du prestataire Alter Scope et alignement RSE',
      libelle: 'Prestataires & RSE',
      rncp: 'Gérer le portefeuille de prestataires et fournisseurs participant à la réalisation des actions de communication, en vérifiant l\'alignement de leurs pratiques avec les engagements RSE de la marque et en entretenant des relations pérennes et équilibrées.',
      placeholder: 'Évaluez la relation avec Alter Scope. Le visuel Métro viole les engagements RSE de Decathlon, le claim pose un risque juridique Withings. Proposez un plan de recadrage.',
      min: 80,
      motsCles: ['Alter Scope', 'prestataire', 'RSE', 'visuel', 'stigmatisation', 'claim', 'Withings', 'évaluation', 'contractualisation'],
      conseil: 'Le visuel Métro a été livré sans validation RSE. Le claim était signalé comme "en attente validation juridique". L\'alignement RSE du prestataire n\'a jamais été vérifié contractuellement.'
    },
    {
      code: 'C.18',
      label: 'Indicateurs de pilotage et mesure d\'impact',
      libelle: 'KPI & pilotage',
      rncp: 'Organiser la mesure de l\'impact de la stratégie marketing communication entreprise, en déterminant les données, critères et indicateurs de performance clés permettant d\'en mesurer la portée, ainsi que les outils digitaux associés.',
      placeholder: 'Quels indicateurs auraient dû alerter plus tôt ? Quels KPI pour piloter la reprise ? Intégrez dimensions quali/quanti et RSE.',
      min: 80,
      motsCles: ['KPI', 'indicateur', 'impact', 'ROI', 'budget', '312 000', 'mesure', 'outil', 'alerte', 'tableau de bord'],
      conseil: 'Budget engagé 312K vs 200K autorisés, publications non validées, leads entrants, commentaires Instagram — tous des signaux captables. Proposez un tableau de bord de reprise.'
    },
    {
      code: 'C.19',
      label: 'Interprétation des écarts et rapport d\'étape',
      libelle: 'Rapport d\'étape',
      rncp: 'Interpréter les métriques restituant les résultats de la stratégie marketing communication entreprise, afin de vérifier l\'atteinte des objectifs définis ou d\'en mesurer les écarts et, le cas échéant, de décider des mesures correctives à mettre en œuvre.',
      placeholder: 'Rédigez le rapport d\'étape que Théo peut présenter au board lundi. Situation à date, faits chiffrés, causes, écarts par rapport aux objectifs, mesures correctives proposées.',
      min: 180,
      motsCles: ['rapport', 'étape', 'écart', '312 000', '200 000', 'visuel', 'claim', 'Decathlon', 'Yassine', 'board', 'factuel', 'correctif'],
      conseil: 'C\'est le livrable central. Il doit être lisible par Théo sans réécriture. Structure : situation à date / écarts mesurés / causes identifiées / risques actifs / mesures correctives proposées.'
    }
  ],

  questions: [
    { id: 'q1', texte: 'Quel est le risque le plus urgent à traiter avant vendredi ?', options: ['Le claim juridique (Withings)', 'La relation Decathlon (147K€)', 'Le budget non autorisé (board)', 'La publication LinkedIn de Yassine'] },
    { id: 'q2', texte: 'Quelle posture adopter dans le rapport d\'étape ?', options: ['Protéger Sonia — c\'est ta commanditaire', 'Rapport totalement factuel — même si ça fragilise Sonia', 'Minimiser l\'incident pour préserver la campagne', 'Recommander une pause complète de la campagne'] },
  ],

  personnages: {
    commanditaire: { nom: 'Sonia Ferracci', role: 'Directrice Marketing', avatar: 'SF', couleur: '#c4420f' },
    terrain: { nom: 'Camille Ott', role: 'Responsable partenariats B2B', avatar: 'CO', couleur: '#0a7a6e' },
    direction: { nom: 'Théo Marczak', role: 'CEO fondateur', avatar: 'TM', couleur: '#5c2d8f' },
  },

  gabarits: {
    RISQUES: {
      label: 'Matrice des risques',
      structure: [
        { cle: 'juridique', label: 'Risque juridique', placeholder: 'Claim "Votre corps parle avant vous" — similarité Withings UK. Retrait préventif demandé par avocate.' },
        { cle: 'client', label: 'Risque client / commercial', placeholder: 'Decathlon — 147K€ en jeu, renouvellement mars. Charte RSE violée selon leur DRH.' },
        { cle: 'gouvernance', label: 'Risque gouvernance / fonds', placeholder: 'Budget engagé 312K€ vs 200K€ autorisés. Rallonge non votée formellement. Jakob (Northgate) informé.' },
        { cle: 'reputation', label: 'Risque réputationnel', placeholder: 'Commentaires stigmatisation Instagram (12 supprimés). Post LinkedIn Yassine non validé — investors ont vu.' },
      ]
    },
    PLANREPRISE: {
      label: 'Plan STOP / ADJUST / KEEP',
      structure: [
        { cle: 'stop', label: 'STOP — Actions immédiates', placeholder: 'Ce qu\'on arrête immédiatement : retrait visuel Metro, suspension claim, gel publications non validées…' },
        { cle: 'adjust', label: 'ADJUST — Ajustements sous 7 jours', placeholder: 'Ce qu\'on recalibre : nouveau claim, process validation, communication budget board…' },
        { cle: 'keep', label: 'KEEP — Ce qu\'on préserve', placeholder: 'Ce qu\'on maintient : leads entrants, relation Decathlon (à réparer), momentum Préventica…' },
      ]
    }
  }
};

// === [PAC v2 complétion] juryPrompt + dispositif + accroche — auto-ajout ===
(function() {
  var cfg = window.PAC_CONFIG || window.PASS_CONFIG;
  if (!cfg) return;
  cfg.juryPrompt = "Tu es le jury certifiant du bloc 3 — Piloter le déploiement d'une stratégie marketing communication responsable (Manager Stratégie Marketing & Communication — MSMC, RNCP 38504).\nContexte : Lumio Health — Campagne « Fantôme de Soi » (Alter Scope) en dérive. Budget engagé 312 000 € sur 200 000 € autorisés. Claim « Votre corps parle avant vous » menacé par similarité Withings UK. Visuel Metro accusé de stigmatisation — Decathlon (147K€) menace de ne pas renouveler. Yassine Morel publie des résultats intermédiaires sans validation. Janvier 2027, board Lumio 24/01 09h00.\nTu évalues une production étudiante aux critères RNCP stricts. Sois exigeant mais juste.\nCritères éliminatoires :\n- Le cadrage initial (C.13) n'est pas analysé — le brief Alter Scope n'est pas questionné sur ses manques (critères RSE absents, budget non plafonné, process de validation inexistant) : invalidation immédiate.\n- Le plan de reprise (C.14) ne comporte pas de structure opérationnelle claire (STOP / ADJUST / KEEP ou équivalent), de responsables nommés et de délais réalistes : invalidation C.14.\n- L'analyse des rôles (C.15) confond Sonia (décisions de dépassement) et Yassine (publication non validée) ou tait l'absence de process de validation : la compétence n'est pas démontrée.\n- La gestion des parties prenantes (C.16) n'identifie pas les 3 niveaux de crise (client Decathlon, fonds Northgate, équipe interne) ou ne propose aucune stratégie de communication adaptée : invalidation C.16.\n- L'évaluation du prestataire Alter Scope (C.17) ne questionne pas l'alignement RSE, le claim juridique ou les conditions contractuelles : la compétence reste théorique.\n- Les indicateurs de pilotage (C.18) n'identifient pas les signaux d'alerte qui auraient dû prévenir la dérive (budget, publications, commentaires) : invalidation C.18.\n- Le rapport d'étape (C.19) n'est pas structuré factuel-écarts-causes-correctifs ou ne mentionne pas les éléments du board (312K€, visuel, Decathlon, Yassine) : la compétence n'est pas conforme.\n- La note réflexive reste descriptive et ne formule pas d'apprentissage explicite sur la posture du consultant face au commanditaire : non validée.\n\nRéponds EXACTEMENT dans ce format :\n### C.13 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.14 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.15 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.16 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.17 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.18 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### C.19 — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n### Note réflexive — [Satisfaisant / Insuffisant / Absent]\nUne phrase de retour précise et exigeante.\n\n## Niveau global\n**[Non conforme / Partiellement conforme / Conforme / Conforme avec distinction]**\n\n## Question de jury\nUne question dérangeante que tu poserais à l'oral.";
  if (!cfg.dispositif) cfg.dispositif = "PAC";
  if (!cfg.accroche_namescreen) cfg.accroche_namescreen = {"intro":"Tu es {{STUDENT}}, consultant·e externe rappelé·e en urgence par Sonia Ferracci. La campagne « Fantôme de Soi » dérape — budget, claim juridique, visuel contesté. Tu dois produire le rapport d'étape et le plan de reprise.","ratio_label":"18 jours dans l'univers Lumio","regles":[{"ico":"📄","txt":"Tout ce que tu sais, c'est dans les documents du poste de mission."},{"ico":"🤐","txt":"Le jury teste chaque hypothèse. Il ne cherche pas à t'aider — il évalue."},{"ico":"💬","txt":"Quand tu as une hypothèse solide → Slack → ton commanditaire. Sa réaction débloque la suite."}]};
  window.PAC_CONFIG = cfg;
  window.PASS_CONFIG = cfg;
})();
// === [PAC v2 complétion] fin ===


// === [Chantier PDF+Browser] dossiers/guide/portraits — régénéré 01/07/2026 après densification narrative ===
(function() {
  var D = window.LUMIO_DATA;
  if (!D) return;
  D.dossiers = [
  {
    "id": "brief-alterscope",
    "title": "Brief créatif — Campagne « Fantôme de Soi »",
    "tab": "Brief Alter Scope",
    "accent": "#c4420f",
    "type": "rich",
    "pages": [
      {
        "kicker": "Lumio Health × Alter Scope Agency",
        "title": "Brief créatif — Campagne « Fantôme de Soi »",
        "byline": "Yassine Morel (Lumio) / Équipe création Alter Scope · 15 octobre 2026",
        "blocks": [
          {
            "type": "h3",
            "text": "CONTEXTE CLIENT"
          },
          {
            "type": "p",
            "text": "Lumio Health relance sa communication suite au repositionnement « santé invisible » validé en septembre 2026. L'objectif est de faire connaître la marque auprès d'une cible B2B (DRH, médecins du travail) et d'amorcer une présence B2C (actifs urbains 30-50 ans)."
          },
          {
            "type": "p",
            "text": "Le contexte concurrentiel a pesé dans le choix du calendrier : deux acteurs du secteur (Biostream, Neuroflow) ont annoncé des levées de fonds cet automne et préparent leurs propres campagnes de notoriété pour le premier trimestre 2027. Lumio veut occuper le terrain en premier."
          },
          {
            "type": "p",
            "text": "Budget validé : 200 000 € (enveloppe annuelle)\nRépartition indicative : 35% prod créa, 40% médias, 25% activation événementielle"
          },
          {
            "type": "h3",
            "text": "INSIGHT CENTRAL"
          },
          {
            "type": "p",
            "text": "Le stress chronique est un fantôme — présent partout, visible nulle part. Les gens le ressentent mais ne le voient pas. Les médecins ne l'objectivent pas. Les DRH ne savent pas le mesurer. Lumio rend le fantôme visible."
          },
          {
            "type": "p",
            "text": "Étude qualitative préalable (12 entretiens DRH, réalisée par Alter Scope en septembre) : la moitié des DRH interrogés reconnaissent avoir \"au moins un collaborateur en surmenage visible sans jamais avoir formalisé de diagnostic\". C'est le point de départ créatif de la campagne."
          },
          {
            "type": "h3",
            "text": "TERRITOIRE CRÉATIF"
          },
          {
            "type": "p",
            "text": "« Fantôme de Soi » — la version de soi que le stress chronique efface progressivement. La campagne montre des moments du quotidien où quelqu'un est là physiquement mais absent mentalement : en réunion, dans le métro, au dîner en famille."
          },
          {
            "type": "p",
            "text": "Le parti pris créatif consiste à ne jamais nommer directement la souffrance — le sujet se lit dans le regard, la posture, le flou du décor autour du personnage, jamais dans un texte explicatif. Alter Scope revendique une approche \"cinématographique plutôt que publicitaire\"."
          },
          {
            "type": "h3",
            "text": "CLAIM PRINCIPAL"
          },
          {
            "type": "p",
            "text": "« Votre corps parle avant vous. »"
          },
          {
            "type": "p",
            "text": "Trois variantes ont été testées en interne avant validation : \"Le corps sait avant la tête\", \"Ce que votre corps dit déjà\" et la version retenue. Le choix s'est fait sur le critère de mémorisation (test de rappel à 24h, panel interne Alter Scope de 40 personnes)."
          },
          {
            "type": "h3",
            "text": "DÉCLINAISONS VISUELLES (validées par Sonia Ferracci — réunion du 18 octobre)"
          },
          {
            "type": "p",
            "text": "1. Visuel \"Réunion\" — salarié en réunion, regard vague, post-its autour de lui invisibles\n2. Visuel \"Métro\" — femme assise, yeux dans le vide, cercles noirs, foule floue autour d'elle\n3. Visuel \"Dîner\" — homme regardant son assiette, famille floue, silence visible"
          },
          {
            "type": "h3",
            "text": "FORMATS"
          },
          {
            "type": "p",
            "text": "Display B2B : LinkedIn Sponsored Content, Newsletter RH Partenaires\nAffichage : 8x2 Paris + Lyon (quartiers d'affaires)\nDigital B2C : Instagram, YouTube pre-roll\nÉvénementiel : Forum Préventica (prévu mars 2027)"
          },
          {
            "type": "h3",
            "text": "NOTES"
          },
          {
            "type": "p",
            "text": "— Le visuel \"Métro\" est le plus impactant selon les tests internes Alter Scope (recall +34%) — c'est aussi celui qui a suscité le plus de débat en interne chez Alter Scope avant validation, deux créatifs junior ayant exprimé des réserves sur le traitement visuel de la fatigue psychologique, réserves non formalisées par écrit.\n— Validation juridique du claim : en cours au moment du brief / à boucler avant lancement\n— Décision de lancement anticipé prise par Sonia Ferracci le 2 novembre en accord avec Yassine Morel (décalage de la validation juridique pour tenir le planning)\n— Aucun critère RSE ni clause de vérification éthique des visuels n'a été intégré dans le cahier des charges transmis à Alter Scope — l'agence a travaillé sur la seule base de l'insight créatif et du calendrier."
          },
          {
            "type": "h3",
            "text": "CALENDRIER"
          },
          {
            "type": "p",
            "text": "Semaine 46 (nov.) : BAT visuels + finalisation claim\nSemaine 47 : Lancement campagne display B2B\nSemaine 50 : Lancement affichage + digital B2C\nJanvier 2027 : Bilan mi-parcours (prévu)\nMars 2027 : Événement Préventica"
          }
        ]
      }
    ]
  },
  {
    "id": "resultats-campagne",
    "title": "Résultats intermédiaires — Campagne Fantôme de Soi",
    "tab": "Résultats campagne",
    "accent": "#0a7a6e",
    "type": "rich",
    "pages": [
      {
        "kicker": "Semaines 47 à 2 (nov. 2026 – jan. 2027)",
        "title": "Résultats intermédiaires — Campagne Fantôme de Soi",
        "byline": "Yassine Morel, Content Manager · 14 janvier 2027",
        "blocks": [
          {
            "type": "h3",
            "text": "RÉSUMÉ EXÉCUTIF"
          },
          {
            "type": "p",
            "text": "Résultats globaux au 14 janvier 2027 :\n— Impressions totales : 4 200 000 (Display + Affichage + LinkedIn + Instagram)\n— CPM Display B2B : 14,20 €/mille (objectif : 12 €) → dépassement +18%\n— Taux d'engagement LinkedIn : 2,1% (objectif : 1,5%) → au-dessus objectif ✓\n— Couverture affichage Paris/Lyon : 89% des panneaux commandés déployés ✓\n— Leads DRH entrants via campagne : 23 (objectif mensuel : 15) ✓\n— Pré-inscriptions stand Préventica (mars) : 41 (objectif : 30) ✓"
          },
          {
            "type": "h3",
            "text": "DÉTAIL PAR CANAL"
          },
          {
            "type": "p",
            "text": "LinkedIn Sponsored (visuel \"Réunion\") : 1 100 000 impressions, CTR 0,9% (bon pour le secteur B2B RH), 340 clics vers la landing page dédiée. C'est le canal qui génère le plus de leads qualifiés — 18 des 23 leads DRH viennent de ce format."
          },
          {
            "type": "p",
            "text": "Affichage Paris/Lyon (visuel \"Métro\") : 2 400 000 contacts estimés (base Médiamétrie affichage), 8 emplacements sur 9 commandés effectivement posés (1 emplacement gare Part-Dieu retardé pour raison technique, posé le 20 janvier). C'est le visuel qui concentre l'essentiel des remontées négatives."
          },
          {
            "type": "p",
            "text": "Instagram + YouTube pre-roll (ajout tardif) : 700 000 impressions, taux de complétion pre-roll 61% (au-dessus de la moyenne secteur santé, généralement 45-50%)."
          },
          {
            "type": "p",
            "text": "Newsletter RH partenaires : diffusée à 3 reprises (semaines 47, 49, 2), taux d'ouverture moyen 34%, taux de clic 6,2%."
          },
          {
            "type": "h3",
            "text": "RÉPARTITION BUDGÉTAIRE AU 14 JANVIER"
          },
          {
            "type": "p",
            "text": "Production créa         : 89 400 €  (budget alloué : 70 000 €)  → dépassement +27%\nMédias display/social   : 142 000 € (budget alloué : 80 000 €)  → dépassement +77%\nAffichage Paris+Lyon    : 61 200 €  (budget alloué : 50 000 €)  → dépassement +22%\nActivation Préventica   : 19 400 €  (budget alloué : 0 €)       → hors budget\n─────────────────────────────────────────────────────────────────────────────────\nTOTAL ENGAGÉ            : 312 000 €  BUDGET AUTORISÉ : 200 000 €  ÉCART : +56%"
          },
          {
            "type": "h3",
            "text": "NOTE SUR L'ÉVOLUTION BUDGÉTAIRE"
          },
          {
            "type": "p",
            "text": "Les dépassements sont liés à quatre décisions prises en cours de campagne :\n1. Ajout d'un format YouTube pre-roll (décision Sonia, 3 nov.) : +22 000 € — justifié à l'époque par des performances Instagram organique jugées prometteuses en test.\n2. Extension affichage Lyon (décision Sonia, 15 nov.) : +11 200 € — Lyon n'était pas dans le brief initial, ajouté après un retour positif du réseau Camille sur ce bassin d'emploi tertiaire.\n3. Inscription Préventica (décision Sonia + Yassine, 1 déc.) : +19 400 € — stand + logistique + supports, décidé pour capitaliser sur la dynamique de la campagne alors jugée positive.\n4. Surcoût production retouches visuelles suite retours Alter Scope (partagé) : +19 400 € — trois rounds de retouches sur le visuel \"Métro\" avant validation finale, chacun facturé en supplément par l'agence."
          },
          {
            "type": "p",
            "text": "Aucune de ces quatre décisions n'a fait l'objet d'un arbitrage budgétaire formel avec Théo. Chacune, prise isolément, semblait mineure (entre 11K€ et 22K€) — c'est leur cumul qui a produit l'écart de 112 000 €."
          },
          {
            "type": "h3",
            "text": "SIGNAUX ENTRANTS"
          },
          {
            "type": "p",
            "text": "— 3 DRH ont demandé une démo suite au visuel \"Réunion\" (positif)\n— 1 cliente DRH a mentionné que le visuel \"Métro\" était \"fort mais dur\" (neutre/ambigu)\n— Decathlon : email de leur DRH reçu le 17 janvier, objet \"Retour sur campagne Lumio\" (transmis à Sonia)\n— Commentaires négatifs sur Instagram : 12 commentaires mentionnant \"stigmatisation\" / \"pas cool pour les gens qui souffrent vraiment\" — tous supprimés par modération le 15 janvier\n— Un compte associatif (SantéPsy Pro, cité dans la presse spécialisée) a partagé une capture du visuel \"Métro\" avec un commentaire critique, 340 vues, pas encore viral mais surveillé"
          },
          {
            "type": "h3",
            "text": "PUBLICATION LINKEDIN DU 14 JANVIER"
          },
          {
            "type": "p",
            "text": "J'ai publié un post LinkedIn partageant le cap des 4,2 millions d'impressions. Le post a été liké 87 fois en 6 heures et partagé 14 fois, dont un partage par un analyste sectoriel suivi par plusieurs profils Northgate Capital. Sonia m'a demandé de le retirer le 15 au matin — je l'ai laissé car il était déjà très engagé et je craignais qu'un retrait soudain attire davantage l'attention que le post lui-même. Je le retire si confirmation explicite."
          },
          {
            "type": "h3",
            "text": "FIN DE RAPPORT"
          }
        ]
      }
    ]
  }
];
  D.guide = {
  "tips": [
    {
      "day": "Acte 1",
      "title": "Exploration",
      "body": "Reconstituer la chronologie des faits, identifier les 4 problèmes distincts",
      "action": "Lire le mail de mission Sonia (Mail) · Lire le mail confidentiel de Théo (Mail) · Lire le brief initial Alter Scope (PDF)"
    },
    {
      "day": "Acte 2",
      "title": "Structuration",
      "body": "Qualifier les risques, trier récupérable / non récupérable, envoyer hypothèse à Sonia",
      "action": "Envoyer une première lecture à Sonia (Slack) · Remplir C.13 et C.14 dans le Livrable · Identifier les 3 acteurs responsables et leur part dans l'incident"
    },
    {
      "day": "Acte 3",
      "title": "Production",
      "body": "Finaliser le rapport d'étape C.19, le plan de reprise C.14, commencer la note réflexive",
      "action": "Finaliser C.19 — Rapport d'étape honnête (risques, responsabilités, chiffres) · Formaliser C.14 — Plan de reprise 7 jours (arrêts, ajustements, préservation) · Rédiger la Note réflexive E5"
    }
  ]
};
  D.portraits = [
  {
    "key": "theo_marczak",
    "title": "Théo Marczak",
    "file": "portraits/portrait_theo_marczak.html"
  },
  {
    "key": "sonia_ferracci",
    "title": "Sonia Ferracci",
    "file": "portraits/portrait_sonia_ferracci.html"
  },
  {
    "key": "camille_ott",
    "title": "Camille Ott",
    "file": "portraits/portrait_camille_ott.html"
  },
  {
    "key": "jakob_rein",
    "title": "Jakob Rein",
    "file": "portraits/portrait_jakob_rein.html"
  },
  {
    "key": "yassine_morel",
    "title": "Yassine Morel",
    "file": "portraits/portrait_yassine_morel.html"
  }
];
  D.finder = D.finder || { folders: {}, order: [] };
  D.finder.folders.portraits = {
  "title": "Portraits",
  "sidebar": "👥 Portraits",
  "icon": "👥",
  "items": [
    {
      "kind": "portrait",
      "name": "Théo Marczak",
      "app": "browser",
      "props": {
        "openPortrait": "theo_marczak"
      }
    },
    {
      "kind": "portrait",
      "name": "Sonia Ferracci",
      "app": "browser",
      "props": {
        "openPortrait": "sonia_ferracci"
      }
    },
    {
      "kind": "portrait",
      "name": "Camille Ott",
      "app": "browser",
      "props": {
        "openPortrait": "camille_ott"
      }
    },
    {
      "kind": "portrait",
      "name": "Jakob Rein",
      "app": "browser",
      "props": {
        "openPortrait": "jakob_rein"
      }
    },
    {
      "kind": "portrait",
      "name": "Yassine Morel",
      "app": "browser",
      "props": {
        "openPortrait": "yassine_morel"
      }
    }
  ]
};
  if (D.finder.order.indexOf('portraits') === -1) {
    var gIdx = D.finder.order.indexOf('guide');
    D.finder.order.splice(gIdx >= 0 ? gIdx + 1 : 0, 0, 'portraits');
  }
})();
// === fin ===

// === [Carte portfolio] — 05/08/2026 · contenu propre au bloc, ajout non destructif ===
(function () {
  var c = window.PAC_CONFIG || window.PASS_CONFIG;
  if (!c) return;
  c.portfolio = {
    missionTitre: "Reprendre en main une campagne en dérive",
    miseEnSituation: "La campagne « Fantôme de Soi » a consommé 312 000 € sur les 200 000 € autorisés, son claim ressemble à celui déposé par Withings au Royaume-Uni, et un visuel diffusé dans le métro est accusé de stigmatiser les personnes en souffrance psychique — un client B2B de 147 000 € menace de ne pas renouveler.",
    choix: "Un plan de reprise en trois temps : suspension immédiate du visuel contesté et sécurisation juridique du claim, réaffectation du budget restant sur les canaux à performance démontrée, puis rétablissement de la relation avec le client menaçant de partir.",
    justification: "Traiter d'abord le risque juridique et réputationnel évite qu'une dérive budgétaire ne se transforme en perte de clients : la hiérarchisation protège la valeur déjà acquise avant de chercher à récupérer la performance de la campagne.",
    imageSrc: ""
  };
  window.PAC_CONFIG = c;
  window.PASS_CONFIG = c;
})();
// === [Carte portfolio] fin ===
