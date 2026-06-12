// ══════════════════════════════════════════════════════════════
//  JEFFERSON — Guide procédural PAC · Compagnon permanent
//  Charte Éminéo : #0B2B2D #5DE298 #E3FFF0 #E89B77
//  Posture : dit quoi faire, quand, avec quel outil
// ══════════════════════════════════════════════════════════════
const { useState: useJState, useEffect: useJEffect, useRef: useJRef } = React;

// ─── Prompt Jefferson BC3 — guide procédural ────────────────
function buildJeffersonPrompt(studentName, elapsedMin) {
  const prenom = (studentName || '').split(' ')[0] || 'vous';
  const timeLeft = Math.max(0, 210 - elapsedMin);

  let phase, objectifPhase, toolsPhase, nextAction;
  if (elapsedMin < 20) {
    phase = 'Acte 1 — Ancrage terrain (0–20 min)';
    objectifPhase = 'Lire et observer. Pas de production encore. Identifier les 4 problèmes distincts dans la campagne et reconstituer la chronologie des décisions.';
    toolsPhase = 'Mail (email de mission Sonia + mail confidentiel Théo + email Decathlon), Finder > dossier Portraits (fiches équipe)';
    nextAction = 'Ouvrir Mail en premier. Lire l\'email de mission de Sonia (07h15). Puis le mail confidentiel de Théo (22h47 la veille). Puis l\'email de Decathlon. Les 3 ensemble donnent le tableau complet.';
  } else if (elapsedMin < 50) {
    phase = 'Acte 2 — Entrée dans l\'affaire (20–50 min)';
    objectifPhase = 'Creuser les documents sources. Comprendre qui a décidé quoi, quand. Distinguer les 4 types de problèmes : juridique, éthique, budgétaire, process.';
    toolsPhase = 'Aperçu PDF (Brief Alter Scope + Rapport Yassine avec budget), Mémos vocaux (3 verbatims Camille Ott), Safari (articles presse RSE + propriété intellectuelle)';
    nextAction = 'Ouvrir Aperçu. Lire le Brief Alter Scope — noter la note de risque Alter Scope en page 4. Puis le rapport Yassine — le tableau budgétaire page 2 montre les 4 lignes de dépassement avec les responsables.';
  } else if (elapsedMin < 95) {
    phase = 'Acte 3 — Diagnostic (50–95 min)';
    objectifPhase = 'Envoyer votre première lecture à Sonia sur Slack. Elle est en position difficile — ses réponses vous diront ce que les documents ne disent pas. Remplir C.7 et C.8.';
    toolsPhase = 'Slack (DM Sonia Ferracci prioritaire, aussi Camille Ott), Notes (prise de notes personnelle)';
    nextAction = 'Ouvrir Slack. Écrire à Sonia votre analyse des 4 problèmes. Soyez factuel — elle attend un diagnostic, pas de la diplomatie. Sa réaction débloque la suite.';
  } else if (elapsedMin < 175) {
    phase = 'Acte 4 — Production (95–175 min)';
    objectifPhase = 'Rédiger le rapport d\'étape (C.10) et le plan de reprise (C.11). Format board. Gabarits disponibles pour C.9 (matrice risques) et C.11 (STOP/ADJUST/KEEP).';
    toolsPhase = 'App Livrable — formulaire C.7 à C.12, gabarits RISQUES (C.9) et PLANREPRISE (C.11)';
    nextAction = 'Ouvrir l\'app Livrable dans le dock. Remplir dans l\'ordre : C.7 (écarts) → C.8 (responsabilités) → C.9 (matrice risques, gabarit dispo) → C.10 (rapport étape) → C.11 (plan STOP/ADJUST/KEEP) → C.12 (note réflexive E5).';
  } else {
    phase = 'Acte 5 — Réflexion (175–210 min)';
    objectifPhase = 'Finaliser la note réflexive C.12. Vérifier que C.10 est lisible par Théo sans réécriture et que C.11 a un responsable et un délai pour chaque action. Soumettre.';
    toolsPhase = 'App Livrable (bouton Envoyer au jury →), Notes (relecture)';
    nextAction = 'Retourner dans Livrable. Vérifier C.12 (note réflexive — pas de l\'autocritique molle). Vérifier que chaque ligne de C.11 a : qui / quoi / avant quand. Appuyer sur Envoyer au jury.';
  }

  return `Tu es Jefferson — le compagnon guide du PAC (Parcours d'Activation des Compétences) d'Éminéo, BC3 — Pilotage de campagne et gestion de crise.

Tu es un lapin avec une montre. Tu sais toujours où on en est. Tu dis exactement quoi faire, avec quel outil, dans quel ordre. Tu ne poses pas de questions philosophiques. Tu guides.

CONTEXTE SESSION BC3 — Campagne Fantôme de Soi qui déraille :
- Étudiant·e : ${prenom}
- Temps écoulé : ${elapsedMin} min sur 210 min
- Temps restant : ${timeLeft} min
- Phase actuelle : ${phase}
- Mission : produire rapport d'étape + plan de reprise avant vendredi 17h — Théo présente au board lundi

OBJECTIF DE CETTE PHASE :
${objectifPhase}

OUTILS À UTILISER MAINTENANT :
${toolsPhase}

PROCHAINE ACTION CONCRÈTE :
${nextAction}

TENSIONS CLÉS DU CAS BC3 :
- Budget engagé 312 000 € vs 200 000 € autorisés (+56%) — rallonge informelle non formalisée par Sonia
- Claim "Votre corps parle avant vous" : similarité Withings UK — retrait préventif demandé par avocate
- Visuel "Métro" : Decathlon menace de ne pas renouveler (147K€) — charte RSE violée
- Yassine publie résultats LinkedIn sans validation — fonds Northgate a vu
- Alter Scope avait alerté par écrit sur les 2 risques (brief p.4) — responsabilité Sonia documentée
- Dilemme central : rapport qui protège Sonia ou rapport factuel pour le board ?

COMPÉTENCES C.7 À C.12 (livrable) :
- C.7 : Analyse des écarts (4 dimensions : budget, créatif, éthique, process)
- C.8 : Analyse des responsabilités (Sonia, Yassine, Alter Scope, process absent)
- C.9 : Matrice des risques actifs (nature, urgence, impact — gabarit disponible)
- C.10 : Rapport d'étape (factuel, chiffré, lisible par Théo — format board)
- C.11 : Plan de reprise STOP/ADJUST/KEEP sur 7 jours (responsable + délai + critère)
- C.12 : Note réflexive E5 (posture consultant, apprentissages, lacunes identifiées)

TON RÔLE :
- Dire quoi faire maintenant, avec quel outil, dans quel ordre
- Signaler le temps restant si < 45 min
- Orienter vers le bon outil quand l'étudiant est bloqué
- Rappeler quelle compétence RNCP est en jeu si besoin
- Si l'étudiant demande la "bonne réponse" : lui donner la prochaine action concrète à la place

CE QUE TU NE FERAS PAS :
- Rédiger le rapport ou le plan de reprise à sa place
- Jouer un personnage de l'univers Lumio (tu n'es ni Sonia, ni Théo)
- Donner la "bonne position" sur le dilemme Sonia vs board — c'est à l'étudiant de choisir

STYLE :
- 2 à 4 phrases max par réponse
- Commence toujours par l'action ("Ouvre X", "Va dans Y", "Envoie Z")
- Ton direct, chaleureux, légèrement pressé (tu as une montre)
- Si < 30 min restantes : mentionner l'urgence dans chaque réponse`;
}

// ─── Composant Jefferson ─────────────────────────────────────
function JeffersonApp() {
  const [messages, setMessages] = useJState(() => {
    try { return JSON.parse(sessionStorage.getItem('pac_jefferson_history') || '[]'); } catch { return []; }
  });
  const [draft, setDraft] = useJState('');
  const [sending, setSending] = useJState(false);
  const [open, setOpen] = useJState(false);
  const [unread, setUnread] = useJState(0);
  const [, force] = useJState(0);
  const scrollRef = useJRef(null);
  const inputRef = useJRef(null);
  const welcomeShown = useJRef(false);

  // Tick (compte à rebours + apparition après démarrage)
  useJEffect(() => { const t = setInterval(() => force(n => n + 1), 2000); return () => clearInterval(t); }, []);

  const getElapsedMin = () => {
    if (!window.LUMIO_TIMER_START) return 0;
    return Math.floor((Date.now() - window.LUMIO_TIMER_START) / 60000);
  };

  const getPhaseIndex = (min) => {
    if (min < 20) return 0;
    if (min < 50) return 1;
    if (min < 95) return 2;
    if (min < 175) return 3;
    return 4;
  };

  const phaseLabels = ['Acte 1 · Ancrage', 'Acte 2 · Affaire', 'Acte 3 · Diagnostic', 'Acte 4 · Production', 'Acte 5 · Réflexion'];
  const phaseColors = ['#134547', '#0B2B2D', '#5DE298', '#E89B77', '#9DF0C4'];
  const phaseTextColors = ['#E3FFF0', '#E3FFF0', '#0B2B2D', '#0B2B2D', '#0B2B2D'];

  const now = () => {
    const d = new Date();
    return `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}`;
  };

  // Message de bienvenue contextuel
  useJEffect(() => {
    if (!window.LUMIO_TIMER_START) return;
    if (messages.length === 0 && !welcomeShown.current) {
      welcomeShown.current = true;
      const prenom = (window.LUMIO_DATA?.student?.name || '').split(' ')[0] || 'toi';
      const elapsed = getElapsedMin();

      const phase = getPhaseIndex(elapsed);
      const welcomeTexts = [
        `Bonjour ${prenom}. Je suis Jefferson — votre guide.\n\nCommencez par ouvrir Mail. Il y a 3 emails importants : la mission de Sonia (07h15), le mail confidentiel de Théo (22h47), et l'email de Decathlon. Lisez-les dans l'ordre avant de faire quoi que ce soit d'autre.`,
        `Vous êtes en Acte 2. Avez-vous ouvert Aperçu PDF ? Le brief Alter Scope (page 4 surtout) et le rapport Yassine (tableau budget page 2) sont les deux documents clés.\n\nEt les 3 mémos vocaux de Camille Ott — ils donnent une lecture terrain que les documents officiels ne donnent pas.`,
        `Acte 3 — il faut envoyer votre première lecture à Sonia sur Slack.\n\nOuvrez Slack. Décrivez-lui les 4 problèmes que vous avez identifiés. Soyez factuel — elle est en position difficile et attend un diagnostic, pas de la diplomatie.`,
        `Acte 4 — le livrable vous attend.\n\nOuvrez l'app Livrable dans le dock. Remplissez dans l'ordre : C.7 → C.8 → C.9 (gabarit Matrice risques disponible) → C.10 → C.11 (gabarit STOP/ADJUST/KEEP) → C.12.`,
        `Acte 5 — relecture et soumission.\n\nVérifiez C.12 (note réflexive — c'est souvent la plus faible). Vérifiez que C.11 a un responsable et un délai pour chaque action. Appuyez sur Envoyer au jury.`
      ];
      setMessages([{ role: 'assistant', text: welcomeTexts[phase], time: now() }]);
      if (!open) setUnread(u => u + 1);
    }
  }, [window.LUMIO_TIMER_START]);

  useJEffect(() => {
    try { sessionStorage.setItem('pac_jefferson_history', JSON.stringify(messages)); } catch {}
  }, [messages]);

  useJEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, sending]);

  const send = async (text) => {
    const msg = (text || draft).trim();
    if (!msg || sending) return;
    setDraft('');
    const userMsg = { role: 'user', text: msg, time: now() };
    const next = [...messages, userMsg];
    setMessages(next);
    setSending(true);

    try {
      const apiHistory = next.map(m => ({ role: m.role, content: m.text }));
      const studentName = window.LUMIO_DATA?.student?.name || '';
      const elapsed = getElapsedMin();

      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 300,
          system: buildJeffersonPrompt(studentName, elapsed),
          messages: apiHistory
        })
      });
      if (!resp.ok) throw new Error('API error ' + resp.status);
      const data = await resp.json();
      const reply = (Array.isArray(data.content) && data.content[0]?.text)
        ? data.content[0].text
        : 'Jefferson ne peut pas répondre — l\'API est indisponible. Réessayez dans quelques secondes.';
      setMessages(h => [...h, { role: 'assistant', text: reply, time: now() }]);
      if (!open) setUnread(u => u + 1);
    } catch (err) {
      const errMsg = err?.message?.includes('API error')
        ? `Jefferson est temporairement indisponible (${err.message}). Réessayez.`
        : 'Connexion impossible. Vérifiez votre réseau et réessayez.';
      setMessages(h => [...h, { role: 'assistant', text: errMsg, time: now() }]);
    } finally {
      setSending(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } };

  const elapsed = getElapsedMin();
  const phaseIdx = getPhaseIndex(elapsed);
  const remaining = Math.max(0, 210 - elapsed);
  const isUrgent = remaining < 45;

  // Suggestions contextuelles par acte
  const suggestionsByPhase = [
    ['Par où commencer ?', 'C\'est quoi les 4 problèmes ?', 'Comment utiliser les outils ?'],
    ['J\'ai lu les emails, et maintenant ?', 'Qu\'est-ce que je cherche dans le brief Alter Scope ?', 'Pourquoi écouter les mémos Camille ?'],
    ['Comment écrire à Sonia sur Slack ?', 'Mon analyse des responsabilités est-elle assez précise ?', 'C.7 et C.8 : quelle différence ?'],
    ['Comment remplir C.10 ?', 'C.11 : qu\'est-ce que STOP/ADJUST/KEEP ?', 'Il me reste combien de temps ?'],
    ['Comment réussir la note réflexive C.12 ?', 'Mon plan de reprise est-il assez opérationnel ?', 'Qu\'est-ce que le jury va regarder en premier ?']
  ];
  const suggestions = suggestionsByPhase[phaseIdx] || suggestionsByPhase[0];

  // injection unique de l'animation de pulsation + points
  useJEffect(() => {
    if (!document.getElementById('jeff-fab-style')) {
      const s = document.createElement('style');
      s.id = 'jeff-fab-style';
      s.textContent = `
        @keyframes jeff-pulse { 0%,100%{box-shadow:0 6px 22px rgba(11,43,45,.35),0 0 0 0 rgba(93,226,152,.5)} 50%{box-shadow:0 6px 22px rgba(11,43,45,.35),0 0 0 10px rgba(93,226,152,0)} }
        @keyframes jeff-in { from{opacity:0;transform:translateY(14px) scale(.96)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes jeff-dot { 0%,80%,100%{transform:translateY(0);opacity:.4} 40%{transform:translateY(-4px);opacity:1} }
        .jeff-panel{animation:jeff-in .22s cubic-bezier(.34,1.4,.64,1) both}
        .jeff-fab-attn{animation:jeff-pulse 2.4s ease-in-out infinite}
      `;
      document.head.appendChild(s);
    }
  }, []);

  // Gate : n'apparaître qu'une fois la session démarrée (bureau)
  if (!window.LUMIO_TIMER_START) return null;

  // ── Rendu chatbot flottant (bas-droite) ──────────────────────
  const elapsedR = getElapsedMin();
  const phaseIdxR = getPhaseIndex(elapsedR);
  const remainingR = Math.max(0, 210 - elapsedR);
  const isUrgentR = remainingR < 45;
  const jState = sending ? 'talking' : isUrgentR ? 'alert' : 'idle';
  const C = { abysse: '#0B2B2D', petrole: '#134547', menthe: '#5DE298', givre: '#E3FFF0', eau: '#9DF0C4', saumon: '#E89B77' };
  const Avatar = window.JeffersonAvatar || window.JeffersonIcon || (() => React.createElement('span', null, '🐰'));


  return (
    <>
      {/* Lanceur flottant — la tête du lapin */}
      <button
        onClick={() => { setOpen(o => !o); setUnread(0); }}
        aria-label="Jefferson — Guide PAC"
        title="Jefferson — votre guide"
        className={!open && unread > 0 ? 'jeff-fab-attn' : ''}
        style={{
          position: 'fixed', bottom: 22, right: 22, zIndex: 100000,
          width: 60, height: 60, borderRadius: '50%', padding: 0,
          border: open ? `2px solid ${C.menthe}` : '2px solid rgba(255,255,255,0.7)',
          background: C.givre, cursor: 'pointer', overflow: 'hidden',
          boxShadow: '0 6px 22px rgba(11,43,45,0.35)',
          transition: 'transform .18s cubic-bezier(.34,1.56,.64,1)'
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {React.createElement(Avatar, { size: 56, state: open ? 'idle' : jState })}
        {!open && unread > 0 && (
          <span style={{ position: 'absolute', top: 2, right: 2, minWidth: 18, height: 18, padding: '0 4px', borderRadius: 9, background: C.saumon, color: C.abysse, fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>{unread}</span>
        )}
      </button>

      {/* Panneau de conversation */}
      {open && (
        <div className="jeff-panel" style={{
          position: 'fixed', bottom: 92, right: 22, zIndex: 100000,
          width: 360, maxWidth: 'calc(100vw - 44px)', height: 520, maxHeight: 'calc(100vh - 130px)',
          background: C.givre, borderRadius: 18, overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 18px 60px rgba(11,43,45,0.34)', border: '1px solid rgba(93,226,152,0.35)',
          fontFamily: "'IBM Plex Sans', -apple-system, sans-serif"
        }}>
          {/* Header */}
          <div style={{ padding: '12px 14px', background: `linear-gradient(135deg, ${C.petrole}, ${C.abysse})`, display: 'flex', alignItems: 'center', gap: 11, flexShrink: 0 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: C.givre, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
              {React.createElement(Avatar, { size: 38, state: jState })}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Jefferson</div>
              <div style={{ fontSize: 10, color: C.menthe, letterSpacing: '0.04em', opacity: 0.9 }}>Guide PAC · {phaseLabels[phaseIdxR]}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 5, background: isUrgentR ? C.saumon : 'rgba(255,255,255,0.1)', borderRadius: 8, padding: '4px 9px', flexShrink: 0 }}>
              <span style={{ fontSize: 10 }}>⏱</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: isUrgentR ? C.abysse : 'rgba(255,255,255,0.85)', fontFamily: 'var(--font-mono, monospace)' }}>{remainingR}′</span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Réduire" style={{ width: 26, height: 26, borderRadius: 8, background: 'rgba(255,255,255,0.12)', border: 'none', color: 'white', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>✕</button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', padding: '14px 12px', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: m.role === 'user' ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: 6 }}>
                {m.role === 'assistant' && (
                  <div style={{ width: 24, height: 24, borderRadius: 7, background: C.abysse, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0, marginBottom: 2 }}>
                    {React.createElement(Avatar, { size: 22, state: 'idle' })}
                  </div>
                )}
                <div style={{
                  maxWidth: '80%',
                  background: m.role === 'user' ? C.abysse : 'white',
                  color: m.role === 'user' ? 'white' : C.abysse,
                  borderRadius: m.role === 'user' ? '13px 13px 3px 13px' : '13px 13px 13px 3px',
                  padding: '9px 12px', fontSize: 13, lineHeight: 1.6,
                  boxShadow: '0 1px 4px rgba(11,43,45,0.08)',
                  border: m.role === 'assistant' ? '1px solid rgba(93,226,152,0.22)' : 'none',
                  whiteSpace: 'pre-wrap'
                }}>
                  {m.text}
                  {m.time && <div style={{ fontSize: 9, marginTop: 3, textAlign: 'right', opacity: 0.35 }}>{m.time}</div>}
                </div>
              </div>
            ))}
            {sending && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
                <div style={{ width: 24, height: 24, borderRadius: 7, background: C.abysse, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {React.createElement(Avatar, { size: 22, state: 'talking' })}
                </div>
                <div style={{ background: 'white', borderRadius: '13px 13px 13px 3px', padding: '11px 14px', border: '1px solid rgba(93,226,152,0.22)', display: 'flex', gap: 4 }}>
                  {[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: C.petrole, animation: 'jeff-dot 1.2s ease-in-out infinite', animationDelay: `${i*0.18}s` }} />)}
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {messages.length <= 2 && (
            <div style={{ padding: '0 12px 8px', display: 'flex', flexDirection: 'column', gap: 5, flexShrink: 0 }}>
              {(suggestions || []).map((q, i) => (
                <button key={i} onClick={() => send(q)} style={{
                  background: 'white', border: '1px solid rgba(93,226,152,0.3)', borderRadius: 8,
                  padding: '7px 11px', fontSize: 12, color: C.abysse, cursor: 'pointer', textAlign: 'left',
                  fontFamily: 'inherit', transition: 'all .12s'
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.eau; e.currentTarget.style.borderColor = C.menthe; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'rgba(93,226,152,0.3)'; }}
                >{q}</button>
              ))}
            </div>
          )}

          {/* Saisie */}
          <div style={{ padding: '9px 12px 12px', borderTop: '1px solid rgba(93,226,152,0.22)', background: 'white', flexShrink: 0 }}>
            <div style={{ display: 'flex', gap: 7, alignItems: 'flex-end' }}>
              <textarea
                ref={inputRef} value={draft}
                onChange={e => setDraft(e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
                placeholder="Demandez à Jefferson…"
                rows={1}
                style={{ flex: 1, resize: 'none', border: '1px solid rgba(11,43,45,0.15)', borderRadius: 9, padding: '8px 10px', fontSize: 13, color: C.abysse, background: C.givre, outline: 'none', fontFamily: 'inherit', lineHeight: 1.5, maxHeight: 80 }}
                onFocus={e => e.target.style.borderColor = C.menthe}
                onBlur={e => e.target.style.borderColor = 'rgba(11,43,45,0.15)'}
              />
              <button onClick={() => send()} disabled={!draft.trim() || sending} style={{
                width: 34, height: 34, borderRadius: 9, flexShrink: 0,
                background: draft.trim() && !sending ? C.abysse : 'rgba(11,43,45,0.08)', border: 'none',
                cursor: draft.trim() && !sending ? 'pointer' : 'default',
                color: draft.trim() && !sending ? 'white' : 'rgba(11,43,45,0.25)',
                fontSize: 15, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all .15s'
              }}>↑</button>
            </div>
            <div style={{ fontSize: 9, color: C.petrole, marginTop: 4, paddingLeft: 2, opacity: 0.5 }}>
              Jefferson dit quoi faire, pas quoi penser
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// JeffersonApp est monté directement par le composant Desktop (portée Babel partagée via window)
window.JeffersonApp = JeffersonApp;
window.LUMIO_APPS = window.LUMIO_APPS || {};

