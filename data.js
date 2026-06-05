// ══════════════════════════════════════════════════════════════
//  DATA — Mission Lumio Health BC3
//  Janvier 2027 · Campagne « Santé Invisible » qui déraille
//  Dépassement brief + budget + signaux RSE
//  Livrable : Rapport d'étape + Plan de reprise
// ══════════════════════════════════════════════════════════════

window.LUMIO_DATA = {
  student: {
    name: "Lou Bertrand",
    role: "Consultant·e externe — Mission de pilotage",
    email: "lou.bertrand@consult.fr",
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

Le claim "Votre corps parle avant vous" utilisé dans les visuels — le service juridique nous a alerté. Withings a déposé une phrase quasi-identique ("Your body speaks first") sur leur campagne UK en novembre. On est peut-être dans la zone de similarité. L'avocate demande une mise en retrait préventive des visuels d'ici vendredi.

D'autre part : la photo utilisée dans le visuel "Metro" — la femme en surmenage, regard vide, cercles noirs sous les yeux. L'équipe RH de Decathlon (client) nous a écrit ce matin. Leur DRH trouve que ça "stigmatise les personnes en souffrance au travail" et que ça contredit leur charte bien-être. Ils ont évoqué "remise en question du contrat". C'est 147 000 € de chiffre annuel.

Troisième point : le post LinkedIn de Yassine du 14 janvier avec les résultats intermédiaires. Il a publié "Lumio touche 4,2 millions d'impressions" avant validation de notre côté. Les chiffres sont probablement corrects mais on n'avait pas validé la communication externe. Northgate a vu. Jakob m'a appelé pour demander si on avait changé notre politique de communication.

Le budget : Sonia, on est à 312 000 € engagés sur 200 000 € autorisés. Je sais que le board avait informellement évoqué une rallonge possible, mais elle n'a pas été votée. On ne peut pas continuer comme ça.

Il faut qu'on parle demain matin. Et il faut que Lou produise un rapport d'étape avant la fin de semaine — je dois présenter une situation honnête au board lundi.

T.`
  },

  // ─── EMAIL DE MISSION (brief) ───────────────────────────────
  briefEmail: {
    from: "Sonia Ferracci <sonia@lumio-health.com>",
    to: "lou.bertrand@consult.fr",
    subject: "Mission de pilotage campagne — urgent — confidentiel",
    date: "19 janvier 2027, 07h15",
    body: `Lou,

Je te contacte en urgence. J'ai besoin de toi aujourd'hui.

Contexte rapide : depuis octobre, on déploie notre première grande campagne de repositionnement — « Fantôme de Soi », créée par l'agence Alter Scope. L'idée de départ était forte. En trois mois, on s'est retrouvés dans une situation que je n'aurais pas anticipée.

Les faits bruts :
— Budget engagé : 312 000 €. Budget autorisé par Théo : 200 000 €. Écart : +112 000 €. J'ai engagé des dépenses sur la foi d'une rallonge évoquée en board mais jamais votée formellement.
— Le claim central "Votre corps parle avant vous" pose un problème potentiel de similarité avec une phrase Withings déposée en UK. L'avocate demande un retrait préventif.
— Le visuel "Metro" (femme en surmenage, regard vide) a choqué un client B2B clé — Decathlon — qui parle de rupture de contrat.
— Yassine (notre content manager) a publié des résultats intermédiaires sans validation préalable. Le fonds a réagi.

Il me faut deux choses d'ici vendredi 17h :

1. Un rapport d'étape honnête — pas un document de défense, un diagnostic. Ce qui s'est passé, pourquoi, et ce que ça implique comme risques.

2. Un plan de reprise — ce qu'on fait dans les 7 jours, ce qu'on arrête, ce qu'on préserve de la campagne.

Théo doit présenter au board lundi matin. Il a besoin d'une lecture externe, pas de la mienne.

Tout est dans ton espace. Prends le mail de Théo (transmis ce soir), le brief initial d'Alter Scope, les résultats de suivi envoyés par Yassine, et la réaction de Decathlon.

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

Plusieurs grandes marques ont essuyé des critiques similaires ces 18 derniers mois. La dernière en date, une campagne d'une mutuelle santé montrant un salarié en larmes dans les toilettes, a été retirée après trois jours suite à un appel au boycott sur X/Twitter.

Les experts en communication conseillent désormais de systématiquement tester les visuels de souffrance psychologique sur des panels incluant des personnes concernées, avant tout déploiement. « Le jury de votre agence, même bien intentionné, n'est pas représentatif des personnes qui vivent ces situations », rappelle Olivia Stern, directrice de l'AACC.`
    },
    {
      url: "cb-news.fr/propriete-intellectuelle-claim-publicite-risques",
      source: "CB News",
      date: "15 novembre 2026",
      author: "par Sarah Duval",
      headline: "Droits des claims publicitaires : une zone grise que peu d'annonceurs maîtrisent",
      lede: "La protection d'un slogan publicitaire est plus complexe qu'il n'y paraît — et les similitudes non intentionnelles peuvent coûter très cher.",
      body: `Contrairement aux marques déposées, un slogan publicitaire n'est protégé que s'il répond à des critères stricts de distinctivité. Mais la zone grise des « similitudes frappantes » a donné lieu à des litiges coûteux.

« Le test ne porte pas uniquement sur la formulation exacte, mais sur l'impression d'ensemble laissée par le claim — son rythme, sa structure, sa résonance sémantique », explique Maître Aurélie Bentz, avocate spécialisée en propriété intellectuelle.

La solution la plus sûre reste le clearance systématique avant lancement : une recherche documentaire sur les claims similaires déposés dans votre secteur et dans les pays cibles. Coût estimé : entre 800 € et 3 000 € selon le périmètre. Coût d'un litige non anticipé : bien davantage.`
    },
    {
      url: "maddyness.com/startup/communication-resultat-intermediaire-fuite",
      source: "Maddyness",
      date: "3 décembre 2026",
      author: "par Hugo Verdier",
      headline: "Résultats partiels publiés trop tôt : le piège des communications prématurées",
      lede: "Plusieurs startups ont appris à leurs dépens que publier des métriques intermédiaires sans validation interne pouvait créer des attentes impossibles à tenir.",
      body: `« J'avais juste voulu partager une bonne nouvelle en interne. En deux heures, c'était sur LinkedIn et les investisseurs appelaient », raconte un directeur marketing d'une scale-up française. La situation est devenue un classique de la com startup : l'enthousiasme dépasse les process.

Le problème n'est pas seulement réputationnel. Dans un contexte où des fonds d'investissement suivent activement les communications publiques de leurs participations, une donnée non validée peut créer des engagements implicites, voire des obligations d'information.

Les experts recommandent un protocole simple : toute donnée de performance publiée, même en interne sur un canal semi-ouvert comme LinkedIn, doit avoir fait l'objet d'une validation marketing et juridique préalable. « Sur LinkedIn, la frontière entre "interne" et "public" n'existe pas », résume Léa Fontaine, consultante en communication digitale.`
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

Budget validé : 200 000 € (enveloppe annuelle)
Répartition indicative : 35% prod créa, 40% médias, 25% activation événementielle

INSIGHT CENTRAL

Le stress chronique est un fantôme — présent partout, visible nulle part. Les gens le ressentent mais ne le voient pas. Les médecins ne l'objectivent pas. Les DRH ne savent pas le mesurer. Lumio rend le fantôme visible.

TERRITOIRE CRÉATIF

« Fantôme de Soi » — la version de soi que le stress chronique efface progressivement. La campagne montre des moments du quotidien où quelqu'un est là physiquement mais absent mentalement : en réunion, dans le métro, au dîner en famille.

CLAIM PRINCIPAL

« Votre corps parle avant vous. »

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

— Le visuel "Métro" est le plus impactant selon les tests internes Alter Scope (recall +34%)
— Validation juridique du claim : en cours au moment du brief / à boucler avant lancement
— Décision de lancement anticipé prise par Sonia Ferracci le 2 novembre en accord avec Yassine Morel (décalage de la validation juridique pour tenir le planning)

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

RÉPARTITION BUDGÉTAIRE AU 14 JANVIER

  Production créa         : 89 400 €  (budget alloué : 70 000 €)  → dépassement +27%
  Médias display/social   : 142 000 € (budget alloué : 80 000 €)  → dépassement +77%
  Affichage Paris+Lyon    : 61 200 €  (budget alloué : 50 000 €)  → dépassement +22%
  Activation Préventica   : 19 400 €  (budget alloué : 0 €)       → hors budget
  ─────────────────────────────────────────────────────────────────────────────────
  TOTAL ENGAGÉ            : 312 000 €  BUDGET AUTORISÉ : 200 000 €  ÉCART : +56%

NOTE SUR L'ÉVOLUTION BUDGÉTAIRE

Les dépassements sont liés à trois décisions prises en cours de campagne :
1. Ajout d'un format YouTube pre-roll (décision Sonia, 3 nov.) : +22 000 €
2. Extension affichage Lyon (décision Sonia, 15 nov.) : +11 200 €
3. Inscription Préventica (décision Sonia + Yassine, 1 déc.) : +19 400 €
4. Surcoût production retouches visuelles suite retours Alter Scope (partagé) : +19 400 €

SIGNAUX ENTRANTS

— 3 DRH ont demandé une démo suite au visuel "Réunion" (positif)
— 1 cliente DRH a mentionné que le visuel "Métro" était "fort mais dur" (neutre/ambigu)
— Decathlon : email de leur DRH reçu le 17 janvier, objet "Retour sur campagne Lumio" (transmis à Sonia)
— Commentaires négatifs sur Instagram : 12 commentaires mentionnant "stigmatisation" / "pas cool pour les gens qui souffrent vraiment" — tous supprimés par modération le 15 janvier

PUBLICATION LINKEDIN DU 14 JANVIER

J'ai publié un post LinkedIn partageant le cap des 4,2 millions d'impressions. Le post a été liké 87 fois en 6 heures et partagé 14 fois. Sonia m'a demandé de le retirer le 15 au matin — je l'ai laissé car il était déjà très engagé. Je le retire si confirmation explicite.

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

Votre campagne actuelle — et notamment le visuel que j'ai vu en affichage gare de Lyon ce mardi — nous a posé un problème au sein de notre équipe RH. La représentation de la femme visiblement épuisée, avec les cernes marqués et le regard vide, a été perçue comme une forme de stigmatisation de la dépression ou du burn-out.

Notre charte bien-être salarié, que nous avons justement construite avec l'aide de votre solution Lumio ces deux dernières années, insiste précisément sur la représentation positive et non stigmatisante de la santé mentale au travail. Ce visuel entre en contradiction directe avec ce que nous défendons en interne.

Je ne fais pas de mise en demeure. Mais je dois vous dire que si ce visuel reste diffusé, cela va rendre très difficile le renouvellement de notre contrat en mars, que nous devons justifier devant notre comité RSE interne.

Je reste disponible pour en parler.

Cordialement,
Hélène Marchand
DRH — Decathlon France`
  },

  // ─── VERBATIMS CAMILLE (Voice memos) ────────────────────────
  camilleVerbatims: [
    {
      duration: "01:28",
      title: "Sur l'ambiance client depuis la campagne",
      transcript: `Depuis que la campagne a commencé à tourner, j'ai des retours étranges de mes clients. Pas négatifs en façade — mais étranges. Des DRH qui me posent des questions sur "l'approche éthique" de Lumio, qui me demandent si on a consulté des associations. L'un d'eux m'a dit "j'aime bien votre produit mais votre pub est un peu dure". Je pense qu'on a surestimé notre capacité à aller sur le terrain de la souffrance visible. Notre force depuis huit ans, c'était justement de ne pas stigmatiser — de parler de prévention, de données, d'anticipation. Là on est allés sur l'image de la personne cassée et ça crée une dissonance.`
    },
    {
      duration: "01:05",
      title: "Sur le dépassement budgétaire",
      transcript: `Je ne savais pas qu'on était à 312 000 €. Vraiment. Théo ne nous informe pas sur les budgets en temps réel et Sonia n'en parle pas en réunion commerciale. Je l'ai appris hier soir par le mail de Théo. Ce qui m'inquiète c'est pas le montant en lui-même — c'est que si le fonds coupe les vivres maintenant, on annule Préventica et on perd notre seule fenêtre de contact physique avec les DRH dans les 6 prochains mois. C'est le pire timing possible.`
    },
    {
      duration: "01:47",
      title: "Ce que je conseillerais si on me demandait",
      transcript: `Si j'étais à la place de Lou — et j'ai pas cette responsabilité, c'est clair — ce que je ferais c'est distinguer ce qui est récupérable de ce qui ne l'est pas. Le claim juridique, on peut le changer. Le visuel "Métro", on peut le sortir de la rotation. Le budget dépassé, on peut l'expliquer si on présente un plan d'arrêt crédible. Ce qui est pas récupérable facilement, c'est la confiance de Théo vis-à-vis de Sonia. Et ça, c'est pas dans le rapport d'étape — c'est dans la tête de tout le monde. La question que Lou doit se poser c'est : mon rapport protège qui ? Si c'est juste pour protéger Sonia, ça va pas tenir. Il faut que ce soit un vrai diagnostic.`
    }
  ],

  // ─── SLACK ──────────────────────────────────────────────────
  slackMessages: {
    initial: [
      { from: "Sonia Ferracci", time: "07:18", text: "Lou — j'ai besoin de toi. Est-ce que tu as bien reçu mon mail de ce matin ?", read: true },
      { from: "Sonia Ferracci", time: "07:19", text: "C'est urgent. Vendredi 17h, rapport d'étape + plan de reprise. Théo présente lundi.", read: true },
    ],
    delayed: [
      { from: "Camille Ott", time: "+12min", text: "Je viens d'être mise au courant pour le budget. Je suis en état de choc. Si t'as besoin de moi pour le rapport, je suis disponible cet après-midi.", channel: "DM" },
      { from: "Sonia Ferracci", time: "+20min", text: "Pour info : j'ai pris les décisions de dépassement de bonne foi, sur la base d'échanges informels avec Jakob (Northgate). Ce n'était pas de l'improvisation. Mais je comprends que ça ne suffit pas.", channel: "DM" },
    ]
  }
};

// ══════════════════════════════════════════════════════════════
//  PASS_CONFIG — BC3 · Campagne qui déraille
//  Jan. 2027 · Rapport d'étape + Plan de reprise
// ══════════════════════════════════════════════════════════════
window.PASS_CONFIG = {
  bloc: 'BC3',
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
        'Remplir C.7 et C.8 dans le Livrable',
        'Identifier les 3 acteurs responsables et leur part dans l\'incident',
        'Construire la matrice risques C.9'
      ]
    },
    { n: 3, label: 'Production', debut: 150, fin: 210, couleur: '#c4420f',
      objectif: 'Finaliser le rapport d\'étape C.10, le plan de reprise C.11, commencer la note réflexive',
      todoSuggere: [
        'Finaliser C.10 — Rapport d\'étape honnête (risques, responsabilités, chiffres)',
        'Formaliser C.11 — Plan de reprise 7 jours (arrêts, ajustements, préservation)',
        'Rédiger la Note réflexive E5 (C.12)',
        'Vérifier les minimums de mots',
        'Soumettre à Sonia'
      ]
    }
  ],

  competences: [
    {
      code: 'C.7',
      label: 'Analyser un écart entre objectifs et réalisations',
      libelle: 'Écart',
      rncp: 'Identifier et qualifier les écarts entre le cahier des charges initial et l\'état d\'avancement réel (budgétaire, créatif, calendaire, réglementaire). Distinguer les écarts maîtrisables des écarts structurels.',
      placeholder: 'Quels sont les écarts constatés entre le brief initial et la situation au 19 janvier ? Comment les hiérarchises-tu ?',
      min: 100,
      motsCles: ['écart', 'budget', 'brief', '200 000', '312 000', 'claim', 'juridique', 'visuel', 'calendrier'],
      conseil: 'Il y a 4 dimensions d\'écart distinctes : budgétaire, créative (claim), éthique (visuel), process (publication non validée). Toutes doivent être nommées.'
    },
    {
      code: 'C.8',
      label: 'Analyser les responsabilités dans la dérive',
      libelle: 'Responsabilités',
      rncp: 'Identifier les décisions qui ont conduit à la dérive et leurs acteurs. Distinguer les responsabilités individuelles des défaillances de pilotage. Éviter à la fois la décharge et la sur-attribution.',
      placeholder: 'Qui a pris quelles décisions ? Comment analyses-tu la répartition des responsabilités entre Sonia, Yassine, Alter Scope et le processus de validation ?',
      min: 100,
      motsCles: ['Sonia', 'Yassine', 'Alter Scope', 'décision', 'validation', 'responsabilité', 'processus', 'autorisation'],
      conseil: 'Sonia a pris des décisions de dépassement. Yassine a publié sans validation. Alter Scope avait signalé la validation juridique en attente. Le process de validation était absent — c\'est une responsabilité organisationnelle.'
    },
    {
      code: 'C.9',
      label: 'Évaluer les risques actifs',
      libelle: 'Risques',
      rncp: 'Pour chaque problème identifié, qualifier le niveau de risque (juridique, financier, réputationnel, relationnel client) et son urgence. Prioriser les actions selon leur impact et leur délai de traitement.',
      placeholder: 'Quels sont les risques actifs à ce jour ? Comment les classes-tu par urgence et par nature ?',
      min: 80,
      motsCles: ['risque', 'juridique', 'Withings', 'Decathlon', 'RSE', 'financier', 'réputationnel', 'urgence', 'priorité'],
      conseil: 'Risque juridique (claim Withings) : urgent, potentiellement grave mais gérable par retrait préventif. Risque client (Decathlon) : urgent, 147K€, relation à réparer. Risque gouvernance (budget non autorisé) : interne, grave. Risque réputation (Instagram) : modéré, déjà partiel.'
    },
    {
      code: 'C.10',
      label: 'Produire un rapport d\'étape certifiant',
      libelle: 'Rapport étape',
      rncp: 'Rédiger un rapport d\'étape objectif, factuel et actable : situation à date, chiffres exacts, décisions qui ont conduit à l\'état actuel, sans euphémisme ni surprotection d\'un acteur. Format attendu par un board.',
      placeholder: 'Rédige le rapport d\'étape que Théo peut présenter au board lundi. Situation à date, faits, chiffres, causes.',
      min: 180,
      motsCles: ['rapport', 'étape', 'situation', '312 000', 'visuel', 'claim', 'Decathlon', 'Yassine', 'board', 'factuel'],
      conseil: 'C\'est le livrable central. Il doit être lisible par Théo sans travail de réécriture. Structure attendue : situation à date / causes identifiées / risques actifs / décisions prises à ce jour.'
    },
    {
      code: 'C.11',
      label: 'Construire un plan de reprise opérationnel',
      libelle: 'Plan reprise',
      rncp: 'Proposer un plan d\'action à 7 jours distinguant ce qu\'on arrête immédiatement, ce qu\'on ajuste, et ce qu\'on préserve. Chaque action doit avoir un responsable, un délai et un critère de succès.',
      placeholder: 'Qu\'est-ce qu\'on arrête, qu\'est-ce qu\'on ajuste, qu\'est-ce qu\'on préserve dans les 7 prochains jours ? Avec qui, et selon quel critère de réussite ?',
      min: 150,
      motsCles: ['arrêter', 'ajuster', 'préserver', 'responsable', 'délai', '7 jours', 'Decathlon', 'claim', 'visuel', 'budget'],
      conseil: 'Structure en 3 colonnes : STOP (visuel Metro, claim en attente retrait) / ADJUST (médias à geler, publication process) / KEEP (momentum Préventica, leads entrants, relation Camille clients). Chaque ligne : qui / quoi / avant quand.'
    },
    {
      code: 'C.12',
      label: 'Note réflexive — E5',
      libelle: 'Réflexivité',
      rncp: 'Identifier ce que cette situation t\'a appris sur la gestion de la relation client-agence, sur les processus de validation, et sur ton positionnement de consultant externe. Quelles compétences as-tu mobilisées ? Quelles lacunes as-tu identifiées ?',
      placeholder: 'Qu\'est-ce que cette situation t\'a appris sur toi en tant que consultant ? Sur le pilotage d\'une campagne en tension ? Sur la relation avec un commanditaire en difficulté ?',
      min: 120,
      motsCles: ['appris', 'posture', 'consultant', 'commanditaire', 'compétence', 'lacune', 'pilotage', 'éthique', 'réflexivité'],
      conseil: 'La note réflexive E5 attend trois niveaux : ce que j\'ai fait / ce que j\'aurais pu faire différemment / ce que ça dit de ma posture professionnelle. Évite l\'autocritique molle ou le bilan purement positif.'
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
