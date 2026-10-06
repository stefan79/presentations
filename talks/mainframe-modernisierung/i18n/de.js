// German (lead language) — one entry per <section>, DOM order.
// Auto-extracted; edit text only, keep the HTML structure aligned with index.html.
window.I18N = window.I18N || {};
window.I18N.de = [
/* 0 */ `<!-- Left-column vertical dark scrim for legibility over the busy console -->
        <div style="position:absolute; inset:0; background:linear-gradient(90deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.8) 40%, rgba(13,17,23,0.45) 70%, rgba(13,17,23,0) 100%);"></div>
        <div style="position:absolute; top:0; left:64px; height:100%; width:640px; display:flex; flex-direction:column; justify-content:center; text-align:left;">
          <div style="font-family:var(--r-heading-font); font-weight:800; font-size:60px; line-height:1.04; letter-spacing:-0.03em; color:#fff;">Mainframe-<br>Modernisierung</div>
          <div style="font-family:var(--r-heading-font); font-weight:600; font-size:32px; line-height:1.15; letter-spacing:-0.02em; color:var(--epam-blue); margin-top:20px; max-width:90%;">Vom Bestandsüberblick zur AI-gestützten Transformation</div>
          <div style="width:72px; height:3px; background:linear-gradient(90deg,var(--epam-blue),var(--epam-accent)); border-radius:2px; margin:24px 0;"></div>
          <div style="font-size:24px; color:#E6E9ED; line-height:1.3; max-width:90%;">Wir wissen, was wir haben — wir wissen, was wir bauen.</div>
          <div style="font-size:14px; color:var(--epam-subtle); margin-top:28px;">
            Stefan Siprell, EPAM · Public
          </div>
        </div>
        <img class="logo" src="../../templates/themes/epam-logo.png" alt="EPAM" style="bottom:40px; left:64px; height:34px;">
        <aside class="notes">Vollflächiges Retro-Motiv (IBM System/360) als Brücke vom Bestand zur AI-gestützten Zukunft.</aside>`,

/* 1 */ `<h2 class="title">Zwei berechtigte <span class="ac">Sorgen</span></h2>
        <div style="display:flex; gap:22px; margin-top:16px; align-items:stretch;">
          <div style="flex:1.35;">
            <div class="subline" style="color:#fff; font-weight:600; margin-bottom:8px;">Mainframe-Modernisierung <span style="color:var(--epam-subtle); font-weight:400;">— kompliziert, oft nicht abgeschlossen</span></div>
            <div class="tile-row" style="gap:12px;">
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">74 %</div><div class="cap" style="font-size:12px;">haben ein Modernisierungsprojekt begonnen — und nicht abgeschlossen</div><div class="src" style="font-size:10px;">Advanced, Business Barometer 2020</div></div>
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">22 %</div><div class="cap" style="font-size:12px;">Erfolgsquote rein intern geplanter Projekte — 46 % planen so</div><div class="src" style="font-size:10px;">Advanced, 4th annual report 2024</div></div>
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">80 %</div><div class="cap" style="font-size:12px;">änderten ihre Mainframe-Strategie im letzten Jahr — Big Bang weicht Phasen</div><div class="src" style="font-size:10px;">Kyndryl, State of Mainframe 2025</div></div>
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">16 %</div><div class="cap" style="font-size:12px;">davon wegen Budget, Skills oder gescheiterter Ansätze</div><div class="src" style="font-size:10px;">Kyndryl 2025</div></div>
            </div>
          </div>
          <div style="width:1px; background:var(--epam-border);"></div>
          <div style="flex:1;">
            <div class="subline" style="color:#fff; font-weight:600; margin-bottom:8px;">AI im Engineering <span style="color:var(--epam-subtle); font-weight:400;">— genutzt, aber misstraut</span></div>
            <div class="tile-row" style="gap:12px;">
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">84 %</div><div class="cap" style="font-size:12px;">der Entwickler nutzen AI-Werkzeuge oder planen es</div></div>
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">46 %</div><div class="cap" style="font-size:12px;">misstrauen der Genauigkeit — 2024 waren es 31 %</div></div>
              <div class="tile" style="padding:12px 13px;"><div class="num" style="font-size:31px;">66 %</div><div class="cap" style="font-size:12px;">verlieren Zeit mit „fast richtigem" AI-Code</div><div class="src" style="font-size:10px;">Stack Overflow Survey 2025, 49.000</div></div>
            </div>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:24px;">
          <div>
            <div class="body-line">Die Zieltechnologie können wir wählen. Die Fachlogik müssen wir erst verstehen.</div>
            <div class="body-line">Die Antwort ist nicht mehr AI. Es sind <span class="ac">Grounding, Gates und Belege</span>.</div>
          </div>
          <div class="sup-line" style="max-width:34%; text-align:right;">Unser Befund, keine Statistik: Wer die Analyse überspringt, findet die Regeln im Abnahmetest.</div>
        </div>
        <aside class="notes">Situation und Complication auf einer Folie: Mainframe-Migrationen sind kompliziert, AI wird skeptisch gesehen, beide Sorgen sind berechtigt. Die Synthese unten leitet in den Vortrag über. ~2 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Beide Sorgen sind ernst zu nehmen. Sie legen fest, was der Ansatz beweisen muss.</span></div>`,

/* 2 */ `<h2 class="title">Zehn Einwände, <span class="ac">vier Phasen</span></h2>

        <div class="morph">
          <!-- Scaffolds: phase structure, revealed on the same step the chips settle -->
          <div class="scaf col-f sup-line">Ihre Leute haben Einwände — berechtigt. Wir clustern sie auf vier Phasen. So liest sich die Agenda.</div>
          <div class="scaf col-h cL1"><div class="node" style="padding:7px; font-size:15px;">Analysieren</div></div>
          <div class="scaf col-h cL2"><div class="node" style="padding:7px; font-size:15px;">Planen</div></div>
          <div class="scaf col-h cL3"><div class="node" style="padding:7px; font-size:15px;">Umsetzen</div></div>
          <div class="scaf col-h cL4"><div class="node" style="padding:7px; font-size:15px;">Überführen</div></div>
          <div class="scaf col-c cL1 sup-line" style="font-style:italic;">klassisch: Assessment &amp; Discovery</div>
          <div class="scaf col-c cL2 sup-line" style="font-style:italic;">klassisch: Design &amp; Blueprint</div>
          <div class="scaf col-c cL3 sup-line" style="font-style:italic;">klassisch: Build &amp; Migrate</div>
          <div class="scaf col-c cL4 sup-line" style="font-style:italic;">klassisch: Test, Cutover &amp; Go-live</div>
          <div class="scaf col-o cL1"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Landkarte · Wellen · Regeln · Testgerüst</div></div>
          <div class="scaf col-o cL2"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Regelwerk · Zielbild · bepreiste Roadmap</div></div>
          <div class="scaf col-o cL3"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: geprüfter Code · lernende Wissensbasis</div></div>
          <div class="scaf col-o cL4"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: live · Rückfall · Belegkette</div></div>
          <div class="scaf col-x"><span class="xref">und bauen sie in Phasen auf</span> <span class="sup-line">— quer über alle Phasen (Prüfstand)</span></div>

          <!-- The ten objection chips — one DOM set. They start scattered (chaos) and MOVE to their column on the fragment step. -->
          <span class="qchip mchip m1">„Ein Mainframe ist zu groß dafür."</span>
          <span class="qchip mchip m2">„Wir haben weder Doku noch Tests."</span>
          <span class="qchip mchip m3">„Halluziniert."</span>
          <span class="qchip mchip m4">„Tokens werden zu teuer."</span>
          <span class="qchip mchip m5">„Sloppy."</span>
          <span class="qchip mchip m6">„Fast richtig ist falsch."</span>
          <span class="qchip mchip m7">„Niemand kann so viel Code prüfen."</span>
          <span class="qchip mchip m8">„Der Cutover ist das Risiko."</span>
          <span class="qchip mchip m9">„Wer haftet?"</span>
          <span class="qchip mchip m10">„Wir hängen am Modellanbieter."</span>

          <!-- invisible fragment: one Down press flips :has(.morph-trigger.visible) → chips settle + scaffolds fade in -->
          <span class="fragment morph-trigger" data-fragment-index="0" style="position:absolute; width:1px; height:1px; opacity:0; pointer-events:none;"></span>
        </div>

        <aside class="notes">
          Erst das Chaos: alle zehn Einwände liegen ungeordnet im Raum — berechtigt, aber ohne Struktur.
          Ein Klick — dieselben Kacheln wandern an ihren Platz — clustert sie auf die vier Phasen mit klassischem Pendant und Ergebnis. Die konkreten Antworten je Einwand kommen erst später, Abschnitt für Abschnitt.
        </aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Jeder Einwand wird zu einer planbaren Phase mit klarem Ergebnis.</span></div>`,

/* 3 */ `<div class="bg" style="background:
          linear-gradient(to top, rgba(13,17,23,0.96) 0%, rgba(13,17,23,0.55) 30%, rgba(13,17,23,0.12) 58%, rgba(13,17,23,0) 78%),
          linear-gradient(to right, rgba(13,17,23,0.82) 0%, rgba(13,17,23,0.2) 45%, transparent 72%);"></div>
        <div class="wrap">
          <div class="sec">Abschnitt 1</div>
          <h1>Analysieren — <span class="ac">erst verstehen, dann schneiden</span></h1>
          <div class="sup">Was der Code über den Bestand weiß, holen wir vollständig heraus — und trauen ihm nur bei einer Frage.</div>
        </div>`,

/* 4 */ `<h2 class="title">Code ist keine <span class="ac">Spezifikation</span></h2>
        <div style="display:flex; gap:24px; margin-top:18px;">
          <div style="flex:1;">
            <div class="sup-line" style="margin-bottom:6px;">Eine Zeile COBOL — was war gewollt?</div>
            <pre style="font-size:13px; width:100%; margin:0;"><code>       IF  KD-TYP = '7'
           COMPUTE RABATT = BETRAG * 0.0725
           ADD 1 TO BETRAG            *&gt; seit 1994 – ?
       ELSE
           COMPUTE RABATT = BETRAG * STD-SATZ
       END-IF
       MOVE RABATT TO AUSGABE-FELD</code></pre>
            <div class="chip" style="display:block; margin-top:10px; border-color:#E3A000; color:#E3A000; background:rgba(227,160,0,0.08); font-size:13px;">Warum Kundentyp 7? Warum 0,0725? Warum das „+1"? — Der Code verrät die Absicht nicht.</div>
          </div>
          <div style="flex:1;">
            <div class="sup-line" style="margin-bottom:8px; color:#fff; font-weight:600;">Diese eine Zeile kann alles davon sein:</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
              <div class="card" style="padding:10px 12px;"><div class="cl" style="margin:0;">Bugfix für ein <strong style="color:#fff;">anderes</strong> Problem</div></div>
              <div class="card" style="padding:10px 12px;"><div class="cl" style="margin:0;">Undokumentierte Änderung</div></div>
              <div class="card" style="padding:10px 12px;"><div class="cl" style="margin:0;">Workaround um eine Plattformgrenze</div></div>
              <div class="card" style="padding:10px 12px;"><div class="cl" style="margin:0;">Unerfahrener Entwickler</div></div>
              <div class="card" style="padding:10px 12px;"><div class="cl" style="margin:0;">Schlichter Fehler — nie bemerkt</div></div>
              <div class="card accent-teal" style="padding:10px 12px;"><div class="cl" style="margin:0;">Echte Fachregel — gewollt</div></div>
            </div>
            <div class="sup-line" style="margin-top:10px;">Aus dem Code allein nicht zu unterscheiden.</div>
          </div>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:18px;">
          <div class="body-line" style="max-width:64%;">Der Code sagt, <strong style="color:#fff;">was</strong> geschieht, nicht <strong style="color:#fff;">warum</strong>. Anforderungen entstehen erst mit Kontext.</div>
          <div class="sup-line" style="max-width:34%; text-align:right;">Code migrieren, wie er ist, heißt Lift-and-Shift in Verkleidung: Die alten Fehler ziehen mit um.</div>
        </div>
        <aside class="notes">Zuerst die These: niemals Code allein migrieren. Das COBOL-Snippet zeigt eine mehrdeutige Regel; die Karten zählen auf, was hinter einer Zeile stecken kann — aus dem Code nicht unterscheidbar. „Was hängt zusammen" beantwortet die nächste Folie. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Erst die Fachlogik rekonstruieren, dann bauen. Sonst migriert man alte Fehler mit.</span></div>`,

/* 5 */ `<span class="qchip answer">„Ein Mainframe ist zu groß dafür."</span>
        <h2 class="title">Wir lösen den Mainframe in <span class="ac">Wellen</span> ab</h2>
        <div class="strangler">
          <!-- Stage 0 -->
          <div class="st">
            <div class="usr">↓ ↓ ↓</div>
            <div class="indsp"></div>
            <div class="bodyrow"><div class="blk leg" style="flex:1;">Legacy</div></div>
            <div class="dbrow"><div class="db leg"></div></div>
            <div class="sn">Stage 0</div>
            <div class="sc">Planung &amp; Vorbereitung</div>
          </div>
          <div class="stsep">→</div>
          <!-- Stage 1 -->
          <div class="st">
            <div class="usr">↓ ↓ ↓</div>
            <div class="ind">Fassade / Router</div>
            <div class="bodyrow"><div class="blk leg" style="flex:1;">Legacy</div></div>
            <div class="dbrow"><div class="db leg"></div></div>
            <div class="sn">Stage 1</div>
            <div class="sc">Fassade einziehen</div>
          </div>
          <div class="stsep">→</div>
          <!-- Stage 2 -->
          <div class="st">
            <div class="usr">↓ ↓ ↓</div>
            <div class="ind">Fassade / Router</div>
            <div class="bodyrow"><div class="blk new" style="flex:1;">Neu</div><div class="blk leg" style="flex:1.4;">Legacy</div></div>
            <div class="dbrow"><div class="db new"></div><span class="cdc">⇄</span><div class="db leg"></div></div>
            <div class="sn">Stage 2</div>
            <div class="sc">Erste Komponente</div>
          </div>
          <div class="stsep">→</div>
          <!-- Stage 3 -->
          <div class="st">
            <div class="usr">↓ ↓ ↓</div>
            <div class="ind">Fassade / Router</div>
            <div class="bodyrow"><div class="blk new" style="flex:2;">Neu</div><div class="blk leg" style="flex:1;">Legacy</div></div>
            <div class="dbrow"><div class="db new"></div><span class="cdc">⇄</span><div class="db leg"></div></div>
            <div class="sn">Stage 3</div>
            <div class="sc">Mehr Funktionalität</div>
          </div>
          <div class="stsep">→</div>
          <!-- Stage N-1 -->
          <div class="st">
            <div class="usr">↓ ↓ ↓</div>
            <div class="ind">Fassade / Router</div>
            <div class="bodyrow"><div class="blk new" style="flex:1;">Neu</div></div>
            <div class="dbrow"><div class="db new"></div></div>
            <div class="sn">Stage N-1</div>
            <div class="sc">Legacy abschalten</div>
          </div>
          <div class="stsep">→</div>
          <!-- Stage N -->
          <div class="st">
            <div class="usr">↓ ↓ ↓</div>
            <div class="indsp"></div>
            <div class="bodyrow"><div class="blk new" style="flex:1;">Neu</div></div>
            <div class="dbrow"><div class="db new"></div></div>
            <div class="sn">Stage N</div>
            <div class="sc">Fassade entfernen</div>
          </div>
        </div>
        <div style="text-align:center; margin-top:8px;"><span class="sup-line" style="color:var(--epam-accent); border-top:1px dashed rgba(0,201,167,0.4); padding-top:4px;">⟲ iterieren — Welle für Welle, bis Legacy leer ist</span></div>

        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:14px;">
          <div>
            <div class="body-line">Jede Welle nimmt einen Bereich mit: die Logik und die Daten, die dazugehören.</div>
            <div class="body-line">Beide Systeme laufen parallel, bis die letzte Welle drüben ist.</div>
          </div>
          <div class="sup-line" style="max-width:34%; text-align:right;">Übergangskomponenten: Fassade/Router · CDC-Datennaht (⇄) · Adapter. Sie erlauben die Koexistenz. <span class="sh">(Strangler-Muster)</span></div>
        </div>
        <aside class="notes">Nach „Code allein migrieren wir nie": wie wir es stattdessen tun — die Übergangsarchitektur nach dem Strangler-Muster. Fassade/Router schaltet je Bereich auf Neu; die CDC-Naht hält beide Datenbestände aktuell; Adapter überbrücken. Overlap ist per Bereich, nicht bestandsweit. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Beide Systeme laufen parallel. Der Umstieg wird reversibel statt zum Stichtagsrisiko.</span></div>`,

/* 6 */ `<span class="qchip answer">„Wir haben weder Doku noch Tests."</span>
        <h2 class="title">Ein Graph aus Technik und <span class="ac">Fachlogik</span></h2>

        <div class="graph" id="g5" style="height:330px; margin-top:6px;">
          <!-- panel backdrops -->
          <div style="position:absolute; left:0.8%; top:20px; width:46%; height:292px; border:1px solid rgba(0,160,227,0.28); background:rgba(0,160,227,0.04); border-radius:12px; z-index:0;"></div>
          <div class="fragment" data-fragment-index="0" style="position:absolute; right:0.8%; top:20px; width:44.5%; height:292px; border:1px solid rgba(0,201,167,0.32); background:rgba(0,201,167,0.04); border-radius:12px; z-index:0;"></div>
          <!-- edges + labels drawn at runtime by drawGraph5(), attached to box borders -->
          <svg id="g5svg" preserveAspectRatio="none" style="z-index:1;"></svg>
          <span class="fragment" data-fragment-index="1" data-conn aria-hidden="true" style="position:absolute;width:0;height:0;"></span>

          <!-- panel labels -->
          <div class="gband" style="top:0; left:2%; color:var(--epam-blue);">Technik — Estate Scanner (aus Code)</div>
          <div class="gband fragment" data-fragment-index="0" style="top:0; left:56%; color:var(--epam-accent);">Fachlichkeit — FINIUS (aus Spezifikationen)</div>

          <!-- technical nodes (left) — incl. terminal + java dependencies -->
          <div class="gnode gtech" data-g="terminal" style="left:8%;  top:85px;"><span class="ty">Terminal 3270</span><b>Sachbearbeiter</b></div>
          <div class="gnode gtech" data-g="java" style="left:8%;  top:290px;"><span class="ty">Java</span><b>Channel-API</b></div>
          <div class="gnode gtech" data-g="jcl" style="left:8%; top:185px;"><span class="ty">JCL</span><b>NIGHTLY</b></div>
          <div class="gnode gtech" data-g="cics" style="left:27%; top:88px;"><span class="ty">CICS</span><b>QUOT</b></div>
          <div class="gnode gtech" data-g="cobol" style="left:27%; top:215px;"><span class="ty">COBOL</span><b>RATE-CALC</b></div>
          <div class="gnode gtech" data-g="mq" style="left:18%; top:290px;"><span class="ty">MQ</span><b>PAYMENTS</b></div>
          <div class="gnode gtech" data-g="db2" style="left:42%; top:150px;"><span class="ty">DB2</span><b>VERTRAG</b></div>
          <div class="gnode gtech" data-g="vsam" style="left:42%; top:278px;"><span class="ty">VSAM</span><b>KDNR</b></div>

          <!-- business / requirement nodes (right) -->
          <div class="gnode gbiz fragment" data-fragment-index="0" data-g="bs" style="left:65%; top:92px;"><span class="ty">Business Service</span><b>Beitrag berechnen</b></div>
          <div class="gnode gbiz fragment" data-fragment-index="0" data-g="boV" style="left:90%; top:150px;"><span class="ty">Business Object</span><b>Vertrag</b></div>
          <div class="gnode gbiz fragment" data-fragment-index="0" data-g="boK" style="left:65%; top:255px;"><span class="ty">Business Object</span><b>Kunde</b></div>
          <div class="gnode gbiz fragment" data-fragment-index="0" data-g="rq" style="left:90%; top:268px;"><span class="ty">Requirement</span><b>Rundung §4</b></div>
        </div>
        <div class="sup-line" style="text-align:center; margin-top:6px;"><span style="color:#5B6875;">──</span> technische Abhängigkeit &nbsp;·&nbsp; <span style="color:var(--epam-accent);">╌ ╌</span> Quellenverweis — FINIUS verbindet Technik und Fachlichkeit</div>

        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:12px;">
          <div class="body-line" style="max-width:70%;">Im Graphen steht nicht nur Code. Jeder Knoten, jede Kante trägt ihren <span class="ac">Quellenverweis</span> <span class="sh">(Citation)</span>, vollständig und widerspruchsfrei.</div>
          <div><span class="xref">aus fünf Zeugen gespeist</span></div>
        </div>
        <aside class="notes">Der Graph ist nicht nur Code: der Estate Scanner liest die Technik (JCL, COBOL, CICS, DB2, VSAM, MQ) und ihre Interaktionen; FINIUS extrahiert Business Services, Business Objects und Anforderungen aus den Spezifikationen und verbindet sie — ein vollständiger, konsistenter Graph, in dem jede Kante ein Quellenverweis ist. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Erst wenn Technik und Regeln verknüpft sind, ist der Bestand verstanden.</span></div>`,

/* 7 */ `<h2 class="title">Der Graph gibt die <span class="ac">Wellenfolge</span> vor</h2>
        <div style="display:flex; gap:20px; margin-top:12px; align-items:flex-start;">
          <div style="flex:0 0 700px;">
            <img src="assets/migration-planner.png" alt="Migration Planner" style="width:100%; height:auto; border-radius:10px; border:1px solid var(--epam-border); display:block;">
            <div class="sup-line" style="margin-top:7px; color:#C9D1D9;">Migration Planner — Slices nach Command-Co-Access, am wenigsten verflochten zuerst · Naht (CDC) je Slice</div>
          </div>
          <div style="flex:1; display:flex; flex-direction:column; gap:11px;">
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="flex:none; width:22px; height:22px; border-radius:50%; background:rgba(0,160,227,0.15); border:1px solid var(--epam-blue); color:var(--epam-blue); font-family:var(--r-heading-font); font-weight:700; font-size:12px; display:flex; align-items:center; justify-content:center;">1</span>
              <div><div style="color:#fff; font-weight:600; font-size:16px;">Abhängigkeiten isolieren</div><div class="cl" style="margin:0; font-size:13px;">technische Kopplung lesen — welche Bereiche lassen sich sauber herauslösen?</div></div>
            </div>
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="flex:none; width:22px; height:22px; border-radius:50%; background:rgba(0,160,227,0.15); border:1px solid var(--epam-blue); color:var(--epam-blue); font-family:var(--r-heading-font); font-weight:700; font-size:12px; display:flex; align-items:center; justify-content:center;">2</span>
              <div><div style="color:#fff; font-weight:600; font-size:16px;">Cluster fachlich bewerten</div><div class="cl" style="margin:0; font-size:13px;">nach Business-Anforderungen — Wert, Risiko, Dringlichkeit.</div></div>
            </div>
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="flex:none; width:22px; height:22px; border-radius:50%; background:rgba(0,160,227,0.15); border:1px solid var(--epam-blue); color:var(--epam-blue); font-family:var(--r-heading-font); font-weight:700; font-size:12px; display:flex; align-items:center; justify-content:center;">3</span>
              <div><div style="color:#fff; font-weight:600; font-size:16px;">Ersten Cluster &amp; Reihenfolge</div><div class="cl" style="margin:0; font-size:13px;">womit anfangen, in welcher Sequenz — am wenigsten verflochten zuerst.</div></div>
            </div>
            <div style="display:flex; gap:10px; align-items:flex-start;">
              <span style="flex:none; width:22px; height:22px; border-radius:50%; background:rgba(0,201,167,0.16); border:1px solid var(--epam-accent); color:var(--epam-accent); font-family:var(--r-heading-font); font-weight:700; font-size:12px; display:flex; align-items:center; justify-content:center;">4</span>
              <div><div style="color:#fff; font-weight:600; font-size:16px;">Übergangsarchitektur abschätzen</div><div class="cl" style="margin:0; font-size:13px;">erster Blick: wie viel Fassade/Router/CDC der Parallelbetrieb je Welle braucht.</div></div>
            </div>
          </div>
        </div>
        <aside class="notes">Vom Verstehen zum Schnitt: aus den technischen Abhängigkeiten die isolierbaren Cluster; Bewertung nach Business-Anforderungen; erster Cluster und Reihenfolge; erster Blick auf den Übergangsarchitektur-Bedarf für den Parallelbetrieb. Ergebnis des Abschnitts. ~2 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Technische Isolierbarkeit und fachlicher Wert bestimmen die Reihenfolge, nicht das Bauchgefühl.</span></div>`,

/* 8 */ `<h2 class="title" style="font-size:25px;">Zwischenstand: <span class="ac">Analysieren ist gelöst</span>. Die Antworten stehen in der Wissensbasis.</h2>
        <div class="sup-line" style="margin-top:2px;">Was wir gelernt haben, füllt die Phasen Schritt für Schritt.</div>
        <div style="display:flex; gap:12px; margin-top:14px; height:400px;">
          <!-- Analysieren — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Analysieren</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Assessment &amp; Discovery</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Ein Mainframe ist zu groß dafür."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Übergangsarchitektur, Schnitt in Wellen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wir haben weder Doku noch Tests."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Estate Scanner: Regeln, Tests, Simulationen</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Landkarte · Wellen · Regeln · Testgerüst</div></div>
          </div>
          <!-- Planen — PENDING -->
          <div style="flex:1; display:flex; flex-direction:column; opacity:0.4;">
            <div class="node" style="padding:7px; font-size:15px;">Planen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Design &amp; Blueprint</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Halluziniert."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (1)</span>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Regelwerk · Zielbild · bepreiste Roadmap</div></div>
          </div>
          <!-- Umsetzen — PENDING -->
          <div style="flex:1; display:flex; flex-direction:column; opacity:0.4;">
            <div class="node" style="padding:7px; font-size:15px;">Umsetzen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Build &amp; Migrate</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Sloppy." · „Fast richtig ist falsch."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Niemand kann so viel prüfen."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (2)</span>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: geprüfter Code · lernende Wissensbasis</div></div>
          </div>
          <!-- Überführen — PENDING -->
          <div style="flex:1; display:flex; flex-direction:column; opacity:0.4;">
            <div class="node" style="padding:7px; font-size:15px;">Überführen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Test, Cutover &amp; Go-live</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Der Cutover ist das Risiko."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wer haftet?"</span>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: live · Rückfall · Belegkette</div></div>
          </div>
        </div>
        <aside class="notes">Zwischenstand nach Abschnitt 1: Analysieren ist beantwortet, die Antworten stehen in der Wissensbasis — drei Phasen folgen noch.</aside>`,

/* 9 */ `<div class="bg" style="background:
          linear-gradient(to top, rgba(13,17,23,0.96) 0%, rgba(13,17,23,0.55) 30%, rgba(13,17,23,0.12) 58%, rgba(13,17,23,0) 78%),
          linear-gradient(to right, rgba(13,17,23,0.82) 0%, rgba(13,17,23,0.2) 45%, transparent 72%);"></div>
        <div class="wrap">
          <div class="sec">Abschnitt 2</div>
          <h1>Planen — <span class="ac">das Zielbild in die Wissensbasis</span></h1>
          <div class="sup">Aus fünf Zeugen wird ein Regelwerk, aus dem Regelwerk ein Zielbild, aus dem Zielbild eine bepreiste Roadmap.</div>
        </div>`,

/* 10 */ `<h2 class="title">Wissen ohne Dopplung sauber <span class="ac">schichten</span></h2>
        <div class="sup-line" style="margin-top:2px;">Compliance, Quality, Security … können auf jeder Ebene definiert sein. Ein Skill zieht später die relevanten Fragmente von jeder übergeordneten Ebene.</div>

        <div style="display:flex; gap:20px; margin-top:12px; align-items:stretch;">
          <!-- nested scope: Enterprise ⊃ Program ⊃ Application -->
          <div style="flex:1.55;">
            <div class="nest ent">
              <div class="nlbl"><b>Unternehmen</b><span class="sc">Enterprise · global</span></div>
              <span class="ochip own-gov">Compliance &amp; Governance</span>
              <span class="ochip own-ea">EA-Standards</span>
              <span class="ochip own-sec">Security-Baseline</span>
              <span class="ochip own-qa">Quality-Standards</span>
              <div class="nest prog">
                <div class="nlbl"><b>Programm</b><span class="sc">Teil des Unternehmens</span></div>
                <span class="ochip own-gov">Compliance (Programm)</span>
                <span class="ochip own-ea">Migrations-Architektur</span>
                <span class="ochip own-qa">Quality-Gates</span>
                <span class="ochip own-biz">Programm-Vorgaben</span>
                <div class="nest app">
                  <div class="nlbl"><b>Anwendung: Tarifierung</b><span class="sc">Teil des Programms</span></div>
                  <span class="ochip own-biz">Anforderungen</span>
                  <span class="ochip own-qa">Test- &amp; Qualitätsplan</span>
                  <span class="ochip own-sec">Datenschutz</span>
                  <span class="ochip own-tech">Technik → COBOL · JCL · DB2 · MQ <span style="color:var(--epam-subtle);">(referenziert Graph)</span></span>
                </div>
              </div>
            </div>
          </div>

          <!-- upward resolution: a skill composes context up the chain -->
          <div style="flex:1; display:flex; flex-direction:column; justify-content:center;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin-bottom:8px;">Auflösung nach oben</div>
            <div style="border:1px solid rgba(0,201,167,0.4); border-radius:10px; padding:12px; background:rgba(0,201,167,0.04); text-align:center;">
              <div class="sup-line" style="color:var(--epam-subtle);">Unternehmen</div>
              <div style="color:var(--epam-accent); font-size:16px; line-height:1;">↑</div>
              <div class="sup-line" style="color:var(--epam-subtle);">Programm</div>
              <div style="color:var(--epam-accent); font-size:16px; line-height:1;">↑</div>
              <div class="sup-line" style="color:var(--epam-subtle);">Anwendung</div>
              <div style="color:var(--epam-accent); font-size:16px; line-height:1;">↑</div>
              <div class="chip blue" style="display:inline-block;">Skill / Aufgabe</div>
            </div>
            <div class="body-line" style="font-size:17px; margin-top:12px;">Ein Skill setzt seinen Kontext nach oben zusammen und zieht nur die relevanten Fragmente jeder Ebene.</div>
            <div class="sup-line" style="margin-top:6px;">Jedes Fragment lebt auf genau einer Ebene → saubere Hierarchie, keine Dopplung.</div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:12px;">
          <div class="sup-line" style="max-width:74%;">
            Owner: <span class="odot" style="background:#00A0E3;"></span>EA &nbsp;<span class="odot" style="background:#E35050;"></span>Security &nbsp;<span class="odot" style="background:#00C9A7;"></span>Business &nbsp;<span class="odot" style="background:#E3A000;"></span>Quality &nbsp;<span class="odot" style="background:#A970FF;"></span>Compliance/Governance &nbsp;<span class="odot" style="background:#00A0E3;"></span>Technik → Graph &nbsp;·&nbsp; jedes Fragment hat einen Owner (speist die Review-Lineage) · <span style="font-family:var(--r-heading-font); font-weight:600;"><span style="color:#4285F4;">G</span><span style="color:#EA4335;">o</span><span style="color:#FBBC05;">o</span><span style="color:#4285F4;">g</span><span style="color:#34A853;">l</span><span style="color:#EA4335;">e</span></span> <b style="color:#E6E9ED;">OKF</b>, versioniert (Git).
          </div>
          <div style="text-align:right;"><span class="xref">sieht nur seinen Ausschnitt</span><br><span class="xref" style="margin-top:6px; display:inline-block;">aus fünf Zeugen gespeist</span></div>
        </div>
        <aside class="notes">Informationelle Komposition durch Scope-Verschachtelung: Programm liegt im Unternehmen, Anwendung im Programm. Aspekte (Compliance, Quality, Security …) können auf jeder Ebene definiert sein — Quality z. B. auf Enterprise, Programm und Anwendung. Jedes Fragment lebt auf genau einer Ebene → saubere Hierarchie, keine Dopplung. Ein Skill löst nach oben auf: er zieht die relevanten Fragmente von Anwendung, Programm und Unternehmen. Owner-Farbe = Lineage für den Review-Zyklus. Basis: Google OKF, versioniert (Git). ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Saubere Ebenen lassen Skills Wissen von jeder passenden Stufe ziehen, ohne Vermischung.</span></div>`,

/* 11 */ `<span class="qchip answer">„Halluziniert."</span>
        <h2 class="title">Generieren, prüfen, <span class="ac">erweitern</span></h2>

        <div style="display:flex; gap:6px; align-items:center; margin-top:10px;">
          <!-- Priming feeds in from the side -->
          <div style="flex:none; width:210px; border:1px solid var(--epam-border); border-radius:10px; background:var(--epam-surface); padding:8px 11px;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin:0 0 6px;">Priming <span style="color:var(--epam-subtle); font-weight:400;">— einmalig</span></div>
            <span class="chip" style="display:block; font-size:12px; padding:4px 9px; margin-bottom:4px;">Code</span>
            <span class="chip" style="display:block; font-size:12px; padding:4px 9px; margin-bottom:4px;">Spezifikationen &amp; Zielbild</span>
            <span class="chip" style="display:block; font-size:12px; padding:4px 9px; margin-bottom:4px;">Ticket- &amp; Fehlerhistorie</span>
            <span class="chip" style="display:block; font-size:12px; padding:4px 9px; margin-bottom:4px;">Aufgezeichnetes Verhalten</span>
            <span class="chip" style="display:block; font-size:12px; padding:4px 9px;">Menschen</span>
          </div>
          <div style="flex:none; text-align:center; color:var(--epam-subtle); width:70px;"><div style="font-size:30px; line-height:1;">→</div><div style="font-size:11px;">Priming</div></div>

          <!-- The circle: Generieren → Review → Erweitern around the knowledge base -->
          <div style="flex:1; display:flex; justify-content:center;">
            <div style="position:relative; width:480px; height:420px;">
              <svg viewBox="0 0 480 420" preserveAspectRatio="none" style="position:absolute; inset:0; width:100%; height:100%;">
                <defs>
                  <marker id="s8c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#00C9A7"/></marker>
                </defs>
                <!-- one circle (r=175, centre 240,205), drawn as three arcs = clockwise flow -->
                <g fill="none" stroke="#00C9A7" stroke-width="2.8" marker-end="url(#s8c)">
                  <path d="M314,46 A175,175 0 0 1 414,220"/>
                  <path d="M340,348 A175,175 0 0 1 140,348"/>
                  <path d="M66,220 A175,175 0 0 1 166,46"/>
                </g>
              </svg>
              <!-- knowledge base (centre) -->
              <div class="node teal" style="position:absolute; left:240px; top:205px; transform:translate(-50%,-50%); font-size:17px; padding:14px 20px;">Wissensbasis</div>
              <!-- Generieren (top) -->
              <div class="chip blue" style="position:absolute; left:240px; top:30px; transform:translate(-50%,-50%); font-size:15px; padding:9px 16px;">Generieren</div>
              <!-- Review (bottom-right) with human -->
              <div class="chip blue" style="position:absolute; left:392px; top:293px; transform:translate(-50%,-50%); font-size:15px; text-align:center; padding:9px 14px;">Review <span style="color:var(--epam-subtle); font-size:12px;">(HITL)</span><br><span style="font-size:13px;">🧑 Mensch prüft</span></div>
              <!-- Erweitern (bottom-left) with triggers + human -->
              <div style="position:absolute; left:88px; top:293px; transform:translate(-50%,-50%); width:180px; border:1.5px solid var(--epam-accent); background:rgba(0,201,167,0.10); border-radius:9px; padding:9px 12px; font-family:var(--r-heading-font);">
                <div style="color:#fff; font-weight:700; font-size:14px;">Erweitern</div>
                <div style="font-size:11px; color:#C9D1D9; margin-top:2px;">🧑 Interview · Quelle → Anfrage nach außen</div>
                <div style="font-size:11px; color:#E3A000; margin-top:3px; line-height:1.3;">Auslöser: 🕳 Lücke · ⚡ Widerspruch · 🙋 HITL-Signal</div>
              </div>
            </div>
          </div>
        </div>

        <div class="body-line" style="margin-top:8px; font-size:19px;">Priming baut die Basis einmal auf. Dann läuft der Kreis — Menschen prüfen (Review) und ergänzen (Erweitern); beim Erweitern fragt die Basis aktiv nach außen: bei Lücken, Widersprüchen oder einem HITL-Signal.</div>
        <aside class="notes">Zwei Teile: (1) Priming/Bootstrapping — die Basis wird einmalig aus Code, Spezifikationen, Historie, Verhalten, Menschen aufgebaut, kommt von der Seite herein. (2) Der Kreislauf um die Wissensbasis: Generieren → Review → Erweitern. Menschen wirken an Review (HITL-Prüfung) und an Erweitern (Interview/Quelle) mit. Im Erweitern-Schritt fragt die Basis aktiv nach außen — ausgelöst durch eine Abdeckungslücke, einen Widerspruch der Fragmente oder ein HITL-Signal (falsch/fehlt). So schließt sie Wissenslücken aktiv statt zu raten — die Antwort auf Halluzination. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Jeder Durchlauf verbessert die Wissensbasis. Der nächste wird schneller und billiger.</span></div>`,

/* 12 */ `<span class="qchip answer">„Tokens werden zu teuer."</span>
        <h2 class="title">Wir planen aus <span class="ac">Fakten</span>, nicht aus Schätzung</h2>

        <!-- Zone A: the dialog, visualised (graph ⇄ hierarchy) -->
        <div style="display:flex; gap:14px; align-items:stretch; margin-top:12px;">
          <div class="card accent-top" style="flex:1; padding:10px 14px; display:flex; align-items:center; gap:12px;">
            <svg viewBox="0 0 170 100" style="width:170px; height:100px; flex:none;">
              <g stroke="#5B6875" stroke-width="1.4">
                <line x1="85" y1="55" x2="35" y2="28"/><line x1="85" y1="55" x2="140" y2="30"/>
                <line x1="85" y1="55" x2="35" y2="80"/><line x1="85" y1="55" x2="140" y2="78"/>
                <line x1="35" y1="28" x2="140" y2="30"/>
              </g>
              <g font-family="'Outfit',sans-serif" font-size="8" fill="#E6E9ED" text-anchor="middle">
                <g><rect x="65" y="47" width="40" height="16" rx="4" fill="rgba(0,160,227,0.16)" stroke="#00A0E3"/><text x="85" y="58">COBOL</text></g>
                <g><rect x="16" y="20" width="34" height="15" rx="4" fill="rgba(0,160,227,0.16)" stroke="#00A0E3"/><text x="33" y="30.5">CICS</text></g>
                <g><rect x="120" y="22" width="32" height="15" rx="4" fill="rgba(0,160,227,0.16)" stroke="#00A0E3"/><text x="136" y="32.5">DB2</text></g>
                <g><rect x="122" y="70" width="30" height="15" rx="4" fill="rgba(0,160,227,0.16)" stroke="#00A0E3"/><text x="137" y="80.5">MQ</text></g>
                <g><rect x="18" y="72" width="30" height="15" rx="4" fill="rgba(0,160,227,0.16)" stroke="#00A0E3"/><text x="33" y="82.5">JCL</text></g>
              </g>
            </svg>
            <div>
              <div style="font-size:18px; color:#fff; font-style:italic;">„Ich weiß, was wir heute haben."</div>
              <div class="sup-line" style="margin-top:4px;"><span class="odot" style="background:#00A0E3;"></span>Estate-Graph · Bestand (as-is)</div>
            </div>
          </div>
          <div style="flex:none; display:flex; flex-direction:column; align-items:center; justify-content:center; min-width:40px;"><div style="font-size:26px; color:var(--epam-accent);">⇄</div><div style="font-size:11px; color:var(--epam-subtle);">Dialog</div></div>
          <div class="card accent-teal" style="flex:1; padding:10px 14px; display:flex; align-items:center; gap:12px;">
            <div style="text-align:right;">
              <div style="font-size:18px; color:#fff; font-style:italic;">„Ich weiß, wie wir es bauen."</div>
              <div class="sup-line" style="margin-top:4px;">Wissensbasis · Zielbild (to-be) <span class="odot" style="background:#00C9A7; margin-left:4px; margin-right:0;"></span></div>
            </div>
            <svg viewBox="0 0 170 100" style="width:170px; height:100px; flex:none;">
              <rect x="6" y="10" width="158" height="82" rx="9" fill="rgba(139,148,158,0.06)" stroke="rgba(139,148,158,0.55)"/>
              <rect x="26" y="30" width="122" height="56" rx="8" fill="rgba(0,160,227,0.06)" stroke="rgba(0,160,227,0.55)"/>
              <rect x="46" y="48" width="82" height="32" rx="7" fill="rgba(0,201,167,0.08)" stroke="rgba(0,201,167,0.6)"/>
              <g font-family="'Outfit',sans-serif" font-size="7.5" fill="#C9D1D9">
                <text x="12" y="22">Unternehmen</text><text x="32" y="42">Programm</text><text x="52" y="66">Anwendung</text>
              </g>
              <circle cx="150" cy="17" r="3" fill="#A970FF"/><circle cx="140" cy="17" r="3" fill="#E35050"/><circle cx="130" cy="17" r="3" fill="#E3A000"/>
            </svg>
          </div>
        </div>
        <div class="sup-line" style="text-align:center; margin-top:6px; color:var(--epam-accent);">↓ gemeinsam entsteht der Plan: bepreist, mit ehrlichen Lücken</div>

        <!-- Zone B: three wave boxes — content · confidence · price -->
        <div style="display:flex; gap:12px; margin-top:8px;">
          <div class="card" style="flex:1; padding:11px 14px;">
            <h4 style="margin:0 0 2px; font-size:16px;">Welle 1 · Tarifierung</h4>
            <div class="cl" style="margin:0 0 9px; font-size:12px;">12 Use Cases · 8 Schnittstellen · 15 Tabellen</div>
            <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--epam-subtle);"><span>Konfidenz — wie viel wir wissen</span><span style="color:var(--epam-accent);">hoch · 90 %</span></div>
            <div style="height:8px; border-radius:4px; background:rgba(139,148,158,0.2); overflow:hidden; margin:3px 0 9px;"><div style="width:90%; height:100%; background:var(--epam-accent);"></div></div>
            <div style="display:flex; justify-content:space-between; align-items:baseline;"><span style="font-size:11px; color:var(--epam-subtle);">Preis · ✓ belegt</span><span style="font-family:var(--r-heading-font); font-weight:700; font-size:19px; color:#fff;">€ 0,6 M</span></div>
          </div>
          <div class="card" style="flex:1; padding:11px 14px;">
            <h4 style="margin:0 0 2px; font-size:16px;">Welle 2 · Schaden &amp; Leistung</h4>
            <div class="cl" style="margin:0 0 9px; font-size:12px;">34 Use Cases · 22 Schnittstellen · 40 Tabellen</div>
            <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--epam-subtle);"><span>Konfidenz — wie viel wir wissen</span><span style="color:#E3A000;">mittel · 55 %</span></div>
            <div style="height:8px; border-radius:4px; background:rgba(139,148,158,0.2); overflow:hidden; margin:3px 0 9px;"><div style="width:55%; height:100%; background:#E3A000;"></div></div>
            <div style="display:flex; justify-content:space-between; align-items:baseline;"><span style="font-size:11px; color:#E3A000;">Preis · Testdaten fehlen</span><span style="font-family:var(--r-heading-font); font-weight:700; font-size:19px; color:#fff;">€ 1,0–1,6 M</span></div>
          </div>
          <div class="card" style="flex:1; padding:11px 14px;">
            <h4 style="margin:0 0 2px; font-size:16px;">Welle 3 · Partneranbindung</h4>
            <div class="cl" style="margin:0 0 9px; font-size:12px;">~60 Use Cases · ~30 Schnittstellen · ~55 Tabellen</div>
            <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--epam-subtle);"><span>Konfidenz — wie viel wir wissen</span><span style="color:#E35050;">niedrig · 30 %</span></div>
            <div style="height:8px; border-radius:4px; background:rgba(139,148,158,0.2); overflow:hidden; margin:3px 0 9px;"><div style="width:30%; height:100%; background:#E35050;"></div></div>
            <div style="display:flex; justify-content:space-between; align-items:baseline;"><span style="font-size:11px; color:#E3A000;">Preis · Umfang offen</span><span style="font-family:var(--r-heading-font); font-weight:700; font-size:19px; color:#fff;">~ € 2 M</span></div>
          </div>
        </div>
        <div class="sup-line" style="margin-top:4px;">Konfidenz = wie viel Wissen wir schon haben; sie steigt zur anstehenden Welle.</div>

        <!-- Zone C: progressive elaboration + outcome -->
        <div class="sup-line" style="margin-top:8px;">Nicht alles vorab: <b style="color:#E6E9ED;">High-Level zuerst</b> für die ersten Schätzungen, <b style="color:#E6E9ED;">Details just-in-time</b>, wenn die Welle ansteht. <span class="sh">Preis je Welle: Umfang × Strategie × Automatisierungsgrad × Prüfkapazität.</span></div>
        <aside class="notes">Kernaussage: der Plan wird aus Fakten konstruiert, nicht geschätzt. Der Estate-Graph kennt das Heute (Bestand, Abhängigkeiten, Volumina), die Wissensbasis kennt das Wie (Regelwerk, Zielbetriebsmodell, Strategie) — im Dialog entsteht die bepreiste Roadmap, inklusive ehrlicher Lücken (fehlende Info je Welle). Progressive Elaboration: nicht alles vorab füllen — High-Level zuerst für erste Schätzungen, Details just-in-time je Migrationswelle. Ergebnis: eine handlungsbereite Wissensbasis für die Umsetzung. ~2 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Fehlendes Wissen wird sichtbar und gezielt ergänzt, bevor Aufwand und Preis feststehen.</span></div>`,

/* 13 */ `<h2 class="title" style="font-size:25px;">Zwischenstand: <span class="ac">Analysieren und Planen sind gelöst</span>.</h2>
        <div class="sup-line" style="margin-top:2px;">Was wir gelernt haben, füllt die Phasen Schritt für Schritt.</div>
        <div style="display:flex; gap:12px; margin-top:14px; height:400px;">
          <!-- Analysieren — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Analysieren</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Assessment &amp; Discovery</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Ein Mainframe ist zu groß dafür."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Übergangsarchitektur, Schnitt in Wellen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wir haben weder Doku noch Tests."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Estate Scanner: Regeln, Tests, Simulationen</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Landkarte · Wellen · Regeln · Testgerüst</div></div>
          </div>
          <!-- Planen — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Planen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Design &amp; Blueprint</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Halluziniert."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Wissensbasis aus fünf Zeugen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (1)</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Roadmap mit Preis je Welle</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Regelwerk · Zielbild · bepreiste Roadmap</div></div>
          </div>
          <!-- Umsetzen — PENDING -->
          <div style="flex:1; display:flex; flex-direction:column; opacity:0.4;">
            <div class="node" style="padding:7px; font-size:15px;">Umsetzen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Build &amp; Migrate</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Sloppy." · „Fast richtig ist falsch."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Niemand kann so viel prüfen."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (2)</span>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: geprüfter Code · lernende Wissensbasis</div></div>
          </div>
          <!-- Überführen — PENDING -->
          <div style="flex:1; display:flex; flex-direction:column; opacity:0.4;">
            <div class="node" style="padding:7px; font-size:15px;">Überführen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Test, Cutover &amp; Go-live</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Der Cutover ist das Risiko."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wer haftet?"</span>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: live · Rückfall · Belegkette</div></div>
          </div>
        </div>
        <aside class="notes">Zwischenstand nach Abschnitt 2: Analysieren und Planen sind beantwortet — Umsetzen und Überführen stehen noch aus.</aside>`,

/* 14 */ `<div class="bg" style="background:
          linear-gradient(to top, rgba(13,17,23,0.96) 0%, rgba(13,17,23,0.55) 30%, rgba(13,17,23,0.12) 58%, rgba(13,17,23,0) 78%),
          linear-gradient(to right, rgba(13,17,23,0.82) 0%, rgba(13,17,23,0.2) 45%, transparent 72%);"></div>
        <div class="wrap">
          <div class="sec">Abschnitt 3</div>
          <h1>Umsetzen — <span class="ac">generieren mit Quellenverweis und Gates</span></h1>
          <div class="sup">Spezifizieren, implementieren, prüfen — und jedes Urteil am Gate macht die nächste Welle besser.</div>
        </div>`,

/* 15 */ `<span class="qchip answer">„Sloppy."</span>
        <h2 class="title">Zwei Phasen, <span class="ac">zwei Gates</span></h2>

        <!-- Phase 1 -->
        <div style="border:1px solid var(--epam-border); border-radius:11px; padding:12px 14px; background:rgba(0,160,227,0.04); margin-top:16px;">
          <div style="font-family:var(--r-heading-font); font-weight:700; font-size:15px; color:#fff; margin-bottom:9px;">Phase 1 · Spezifikation erstellen <span class="badge subtle">agentisch</span></div>
          <div style="display:flex; align-items:center; gap:7px; flex-wrap:wrap;">
            <span class="chip">Quellen: Wissensbasis + Bestand</span>
            <span class="arrow" style="font-size:16px;">→</span>
            <span class="chip">Spec generieren</span>
            <span class="arrow" style="font-size:16px;">→</span>
            <span class="chip">Zitate prüfen · Fach-Reviews (Architektur · Governance · PO · UX)</span>
            <span class="arrow" style="font-size:16px;">→</span>
            <span class="chip" style="border-color:var(--epam-accent); background:rgba(0,201,167,0.12); color:#fff;">🧑 Gate: Spec-Freigabe <span class="sh">(HITL)</span></span>
          </div>
        </div>

        <div class="sup-line" style="text-align:center; margin:6px 0; color:var(--epam-accent);">↓ freigegebene Spec</div>

        <!-- Phase 2 -->
        <div style="border:1px solid var(--epam-border); border-radius:11px; padding:12px 14px; background:rgba(0,201,167,0.04);">
          <div style="font-family:var(--r-heading-font); font-weight:700; font-size:15px; color:#fff; margin-bottom:9px;">Phase 2 · Spezifikation umsetzen <span class="badge subtle">agentisch</span></div>
          <div style="display:flex; align-items:center; gap:7px; flex-wrap:wrap;">
            <span class="chip">Code &amp; Tests generieren</span>
            <span class="arrow" style="font-size:16px;">→</span>
            <span class="chip">Vorprüfung: jede Einheit gegen ihr Fragment</span>
            <span class="arrow" style="font-size:16px;">→</span>
            <span class="chip" style="border-color:var(--epam-accent); background:rgba(0,201,167,0.12); color:#fff;">🧑 Gate: Code-Freigabe <span class="sh">(HITL)</span></span>
            <span class="arrow" style="font-size:16px;">→</span>
            <span class="chip" style="border-color:var(--epam-accent);">fertiges Increment · Merge</span>
          </div>
        </div>

        <div class="sup-line" style="margin-top:14px;">Alles dazwischen ist <b style="color:#E6E9ED;">agentisch</b>. Die beiden <b style="color:#E6E9ED;">Gates gehören den Menschen</b>, nicht verhandelbar. In abgeschotteter Werkstatt <span class="sh">(Sandbox)</span>: freigegebene Modelle, kein Internet, keine Produktionsdaten.</div>
        <div class="sup-line" style="margin-top:4px;">Gleich im Detail: <span class="xref">Zitate in die OpenSpec-Dateien</span> und die Zitat-Logik dahinter.</div>
        <aside class="notes">Öffnet den Abschnitt mit dem Gesamtablauf, bewusst einfach für ein nicht-technisches Publikum: zwei Phasen — (1) Spezifikation erstellen, (2) Spezifikation umsetzen — mit je einem menschlichen Gate (HITL). Innerhalb jeder Phase läuft eine agentische Pipeline (generieren · Zitate/Reviews prüfen · entscheiden), hier zusammengefasst. Danach: Detail zu OpenSpec und zur Zitat-Logik. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Menschen entscheiden an genau zwei Punkten: davor die Spec, danach der Code.</span></div>`,

/* 16 */ `<h2 class="title">Die Spezifikation als <span class="ac">Vertrag</span></h2>
        <div style="display:flex; gap:22px; margin-top:12px;">
          <!-- LEFT: KB → curate → citation package → OpenSpec files -->
          <div style="flex:1.15; display:flex; flex-direction:column; align-items:center; gap:5px;">
            <div class="node teal" style="display:inline-flex; align-items:center; gap:10px; padding:8px 16px; font-size:15px;">
              <svg viewBox="0 0 44 30" width="40" height="27" style="flex:none;"><rect x="1" y="1" width="42" height="28" rx="4" fill="rgba(139,148,158,0.08)" stroke="rgba(139,148,158,0.6)"/><rect x="7" y="6" width="30" height="18" rx="3" fill="rgba(0,160,227,0.12)" stroke="rgba(0,160,227,0.6)"/><rect x="13" y="11" width="18" height="8" rx="2" fill="rgba(0,201,167,0.14)" stroke="rgba(0,201,167,0.7)"/></svg>
              Wissensbasis
            </div>
            <div class="sup-line" style="text-align:center; margin:1px 0;">↓ <b style="color:#E6E9ED;">kuratieren</b> — der Curation-Graph schlägt Zitate vor, prüft Abdeckung, findet Lücken</div>
            <div class="card accent-teal" style="width:100%; padding:8px 12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;"><b style="color:#fff; font-size:14px;">Wissenspaket</b><span class="sup-line" style="margin:0;">kuratierte Zitate</span></div>
              <div style="font-family:var(--r-code-font); font-size:11px; color:var(--epam-accent); margin-top:3px; line-height:1.5;">kb://rate-calc/rundung#§4 · kb://vertrag/tarifwechsel · kb://obj/vertrag · kb://test/tarifwechsel</div>
            </div>
            <div class="sup-line" style="text-align:center; margin:1px 0;">↓ <b style="color:#E6E9ED;">OpenSpec</b> verteilt die Zitate in die Dateien</div>
            <div style="display:flex; gap:7px; width:100%;">
              <div class="card accent-top" style="flex:1; padding:7px 9px; text-align:center; border-top-color:var(--epam-accent);"><div style="font-family:var(--r-code-font); font-size:12px; color:var(--epam-accent);">proposal.md</div><div class="cl" style="margin:1px 0 0; font-size:10px;">Intent · Warum/Was</div></div>
              <div class="card" style="flex:1; padding:7px 9px; text-align:center;"><div style="font-family:var(--r-code-font); font-size:12px; color:var(--epam-blue);">spec.md</div><div class="cl" style="margin:1px 0 0; font-size:10px;">Requirements · Szenarien</div></div>
              <div class="card" style="flex:1; padding:7px 9px; text-align:center;"><div style="font-family:var(--r-code-font); font-size:12px; color:var(--epam-blue);">design.md</div><div class="cl" style="margin:1px 0 0; font-size:10px;">Design</div></div>
              <div class="card" style="flex:1; padding:7px 9px; text-align:center;"><div style="font-family:var(--r-code-font); font-size:12px; color:var(--epam-blue);">tasks.md</div><div class="cl" style="margin:1px 0 0; font-size:10px;">Todos</div></div>
            </div>
          </div>
          <!-- RIGHT: the high-level intent file (proposal.md) with real citations -->
          <div style="flex:1;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin-bottom:5px;">proposal.md — der Intent, hoch angesetzt und leicht zu verstehen</div>
            <div style="background:#10141a; border:1px solid var(--epam-accent); border-radius:10px; padding:11px 14px; font-family:var(--r-code-font); font-size:12px; line-height:1.5; color:#C9D1D9;">
              <div style="color:var(--epam-subtle);"># change: rate-calc-01</div>
              <div style="color:#fff; margin-top:5px;">## Warum</div>
              <div>Beitragsrundung bei Tarifwechsel muss stimmen —</div>
              <div>heute in RATE-CALC ¶3200 verankert.</div>
              <div style="color:#fff; margin-top:5px;">## Was ändert sich</div>
              <div>Rundungsregel neu bauen, prüfbar gegen die</div>
              <div>Fachregel.</div>
              <div style="color:#fff; margin-top:5px;">## Grundlage</div>
              <div style="color:var(--epam-accent);">kb://rate-calc/rundung#§4 @c1a9f3d</div>
              <div style="color:var(--epam-accent); text-indent:1.2em;">sha256:9c1f… role=grounds</div>
              <div style="color:var(--epam-accent);">kb://vertrag/tarifwechsel#mitte @c1a9f3d</div>
              <div style="color:var(--epam-accent); text-indent:1.2em;">sha256:4e77… role=grounds</div>
            </div>
            <div class="sup-line" style="margin-top:5px;">Zitat = Fragment <b style="color:#E6E9ED;">@Revision</b> + <b style="color:#E6E9ED;">sha256</b> + <b style="color:#E6E9ED;">role</b> — an die Git-Revision gepinnt, in CI auf Aktualität prüfbar.</div>
          </div>
        </div>
        <div class="body-line" style="margin-top:8px;">Die Spec ist eine Kopie genau des Wissens, das dieses Increment braucht, und wird Teil der Lieferung. <span class="xref">schleifen die Quellenverweise durch</span></div>
        <aside class="notes">Diagramm von oben: Wissensbasis → Kuratieren (der Curation-Graph schlägt Zitate vor, prüft Abdeckung, findet Lücken → Kurator-Queue) → ein Wissenspaket aus kuratierten Zitaten → OpenSpec verteilt die Zitate in seine Dateien (proposal/Intent, spec/Requirements+Szenarien, design, tasks/Todos). Beispiel ist die proposal.md (Intent), weil sie hoch angesetzt und leicht verständlich ist. Zitatformat nach dem Traceability-Paper: kb://kontext#anker @revision sha256:… role=… — an die Git-Revision gepinnt, in CI auf Aktualität prüfbar. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Die Spec trägt das gesamte relevante Wissen und wird selbst Teil der Lieferung.</span></div>`,

/* 17 */ `<span class="qchip answer">„Fast richtig ist falsch."</span>
        <h2 class="title">Ein Zitat, <span class="ac">durchgeschliffen</span></h2>

        <!-- the citation, embedded in each of the three artefact types -->
        <div style="display:flex; align-items:stretch; gap:6px; margin-top:14px;">
          <div style="flex:1;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin:0 0 3px; font-size:12px;">1 · Wissensbasis-Fragment <span class="sh">(OKF)</span></div>
            <div style="background:#10141a; border:1px solid rgba(0,201,167,0.45); border-radius:8px; padding:8px 10px; font-family:var(--r-code-font); font-size:10.5px; line-height:1.5; color:#C9D1D9; min-height:118px;">
              <div style="color:var(--epam-accent);">kb://rate-calc/rundung#§4</div>
              <div>„kaufm. Rundung bei Tarifwechsel"</div>
              <div style="color:#fff; margin-top:3px;">source_refs:</div>
              <div>&nbsp;&nbsp;policy-v5.2 §4</div>
              <div>&nbsp;&nbsp;RATE-CALC ¶3200</div>
              <div style="color:#fff;">verified_by: Tarif-Team</div>
            </div>
            <div class="sup-line" style="font-size:11px; margin-top:2px;">zitiert seine <b style="color:#E6E9ED;">Herkunft</b></div>
          </div>
          <span class="arrow" style="align-self:center;">→</span>
          <div style="flex:1;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin:0 0 3px; font-size:12px;">2 · Spezifikation <span class="sh">(OpenSpec)</span></div>
            <div style="background:#10141a; border:1px solid var(--epam-border); border-radius:8px; padding:8px 10px; font-family:var(--r-code-font); font-size:10.5px; line-height:1.5; color:#C9D1D9; min-height:118px;">
              <div style="color:#fff;">## Requirement</div>
              <div>Beitrag kaufmännisch runden.</div>
              <div style="color:var(--epam-accent); margin-top:3px;">kb://rate-calc/rundung#§4</div>
              <div style="color:var(--epam-accent);">&nbsp;&nbsp;@c1a9f3d sha256:9c1f…</div>
              <div style="color:var(--epam-accent);">&nbsp;&nbsp;role=grounds</div>
            </div>
            <div class="sup-line" style="font-size:11px; margin-top:2px;">zitiert das Fragment · <b style="color:#E6E9ED;">role=grounds</b></div>
          </div>
          <span class="arrow" style="align-self:center;">→</span>
          <div style="flex:1;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin:0 0 3px; font-size:12px;">3 · Einheit <span class="sh">(Code + Test)</span></div>
            <div style="background:#10141a; border:1px solid var(--epam-border); border-radius:8px; padding:8px 10px; font-family:var(--r-code-font); font-size:10.5px; line-height:1.5; color:#C9D1D9; min-height:118px;">
              <div style="color:var(--epam-accent);">// cites kb://rate-calc/rundung#§4</div>
              <div style="color:var(--epam-accent);">//&nbsp;&nbsp;@c1a9f3d sha256:9c1f…</div>
              <div style="color:var(--epam-accent);">//&nbsp;&nbsp;role=implements</div>
              <div style="color:#fff;">BigDecimal beitrag(BigDecimal x){</div>
              <div>&nbsp;&nbsp;return x.setScale(2, HALF_UP);</div>
              <div style="color:#fff;">}</div>
            </div>
            <div class="sup-line" style="font-size:11px; margin-top:2px;">zitiert das Fragment · <b style="color:#E6E9ED;">role=implements</b></div>
          </div>
        </div>
        <div class="sup-line" style="text-align:center; margin-top:6px; color:var(--epam-accent);">↻ derselbe Quellenverweis, in jedem Artefakt eingebettet — durchgeschliffen von der Quelle bis ins Increment</div>

        <!-- five guarantees the looped citation buys -->
        <div style="display:flex; gap:10px; margin-top:16px;">
          <div class="card accent-top" style="flex:1; padding:11px 13px;"><h4 style="font-size:15px; margin:0 0 3px;">Nachvollziehbar</h4><div class="cl" style="margin:0; font-size:12.5px;">Anforderung ↔ Code in beide Richtungen lückenlos rückverfolgbar.</div></div>
          <div class="card accent-top" style="flex:1; padding:11px 13px;"><h4 style="font-size:15px; margin:0 0 3px;">Grounding geprüft</h4><div class="cl" style="margin:0; font-size:12.5px;">Zitat-Statistik der Spec: unbelegte Sätze = Halluzinationsrisiko → erst gefixt, dann generiert.</div></div>
          <div class="card accent-top" style="flex:1; padding:11px 13px;"><h4 style="font-size:15px; margin:0 0 3px;">Vollständig</h4><div class="cl" style="margin:0; font-size:12.5px;">Jede gegebene Quelle taucht in Spec und Code auf — nichts fällt weg.</div></div>
          <div class="card accent-top" style="flex:1; padding:11px 13px;"><h4 style="font-size:15px; margin:0 0 3px;">Audit-Trail</h4><div class="cl" style="margin:0; font-size:12.5px;">Permanent: alles, was beim Bauen berücksichtigt wurde, ist dokumentiert.</div></div>
          <div class="card accent-teal" style="flex:1; padding:11px 13px;"><h4 style="font-size:15px; margin:0 0 3px;">Review-Routing</h4><div class="cl" style="margin:0; font-size:12.5px;">Der Quellenverweis leitet jedes Fragment an die Owner des Wissens.</div></div>
        </div>
        <div class="sup-line" style="margin-top:12px;">Ein Mechanismus — der durchgeschliffene Quellenverweis — trägt fünf Garantien. <span class="xref">sieht nur seinen Ausschnitt</span></div>
        <aside class="notes">Das Alleinstellungsmerkmal: der Quellenverweis wird durchgeschliffen — Wissensbasis-Fragment → Spec-Anforderung → generierte Einheit (Code + Test). Fünf Nutzen: (1) Nachvollziehbarkeit Anforderung↔Code; (2) Grounding via Zitat-Statistik auf der Spec verhindert Halluzination; (3) Vollständigkeit — alle eingegebenen Quellen erscheinen in Spec und Code, nichts fällt weg; (4) permanenter Audit-Trail über alles Berücksichtigte; (5) Review-Routing — Quellenverweise leiten Review-Fragmente an die Wissens-Owner. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Ein einziger Quellenverweis macht Anforderung und Code in beide Richtungen prüfbar.</span></div>`,

/* 18 */ `<span class="qchip answer">„Niemand kann so viel Code prüfen."</span>
        <h2 class="title">Review ohne <span class="ac">Ermüdung</span></h2>

        <!-- flow: change → citation → fragment → owner → the right reviewer -->
        <div style="display:flex; align-items:center; gap:6px; margin-top:12px; flex-wrap:wrap;">
          <span class="chip" style="text-align:center;">Änderungen · PR<br><span class="sh">viele Einheiten</span></span>
          <span class="arrow" style="font-size:16px;">→</span>
          <span class="chip" style="text-align:center;">Zitat je Einheit<br><span style="color:var(--epam-accent); font-family:var(--r-code-font); font-size:11px;">kb://…</span></span>
          <span class="arrow" style="font-size:16px;">→</span>
          <span class="chip" style="text-align:center;">Fragment<br><span class="sh">Wissensbasis</span></span>
          <span class="arrow" style="font-size:16px;">→</span>
          <span class="chip" style="text-align:center; border-color:var(--epam-accent);">Owner<br><span class="sh">des Fragments</span></span>
          <span class="arrow" style="font-size:16px;">→</span>
          <span class="chip" style="text-align:center; border-color:var(--epam-accent); background:rgba(0,201,167,0.12); color:#fff;">🧑 Review<br><span class="sh">beim richtigen Menschen</span></span>
        </div>
        <div class="sup-line" style="margin-top:6px;">Der <b style="color:#E6E9ED;">Herkunftsgraph</b> verfolgt jede Einheit zurück — das Zitat bestimmt den Owner. Die AI <b style="color:#E6E9ED;">clustert nach Bedeutung</b> und beschreibt jede Gruppe.</div>

        <!-- screenshot + AI-clustered callouts -->
        <div style="display:flex; gap:16px; margin-top:12px; align-items:stretch;">
          <div style="flex:0 0 640px;">
            <img src="assets/review-environment.png" alt="Review-Umgebung" style="width:100%; height:auto; border-radius:10px; border:1px solid var(--epam-border); display:block;">
          </div>
          <div style="flex:0.95; display:flex; flex-direction:column; gap:9px;">
            <div style="border:1px solid #E35050; border-radius:10px; background:rgba(227,80,80,0.08); padding:10px 12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;"><b style="color:#fff; font-size:15px;">🔴 2 Änderungen · kritisch</b><span style="font-size:11px; padding:2px 8px; border-radius:12px; background:rgba(227,80,80,0.2); color:#E35050;">Owner: Security</span></div>
              <div class="cl" style="margin:5px 0 0; font-size:13px;">Erste Umsetzung einer neuen Authentifizierungsregel — <b style="color:#E6E9ED;">genau prüfen</b>.</div>
            </div>
            <div style="border:1px solid var(--epam-border); border-radius:10px; background:var(--epam-surface); padding:10px 12px;">
              <div style="display:flex; justify-content:space-between; align-items:center;"><b style="color:#fff; font-size:15px;">⚪ 80 Änderungen · Routine</b><span style="font-size:11px; padding:2px 8px; border-radius:12px; background:rgba(139,148,158,0.18); color:var(--epam-subtle);">Owner: Tarif</span></div>
              <div class="cl" style="margin:5px 0 0; font-size:13px;">Spiegeln nur die Umbenennung eines Business Service — <b style="color:#E6E9ED;">im Block bestätigen</b>.</div>
            </div>
            <div class="sup-line" style="margin-top:auto;">Aufmerksamkeit dort, wo sie zählt. Abdeckung steigt, Aufwand sinkt.</div>
          </div>
        </div>
        <div class="sup-line" style="margin-top:8px;"><span style="color:#fff; font-weight:600;">Review-Umgebung</span> <span class="sh">(IRE)</span> — das Gate bleibt beidseitig: Ihre Owner prüfen mit.</div>
        <aside class="notes">Der Review-Prozess: jede generierte Einheit wird über ihr Zitat zum Fragment und damit zum Owner zurückverfolgt — der Herkunftsgraph bestimmt, wer prüft. Die AI clustert die Änderungen nach Bedeutung und beschreibt jede Gruppe: z. B. 2 kritische Änderungen (erste Umsetzung einer neuen Authentifizierungsregel, Owner Security) vs. 80 Routine-Änderungen (nur eine Umbenennung eines Business Service, im Block bestätigen). So werden Reviews präzise und effizient. Flow-Diagramm links, Screenshot der Review-Umgebung, Callouts rechts. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Änderungen gehen geclustert an ihre Owner. Die Prüfung bleibt echt und leistbar.</span></div>`,

/* 19 */ `<span class="qchip answer">„Tokens werden zu teuer."</span>
        <h2 class="title">Auf dem Weg zur <span class="ac">Dark Factory</span></h2>

        <!-- A + B: worked example + approval prediction -->
        <div style="display:flex; gap:14px; margin-top:12px; align-items:stretch;">
          <div class="card" style="flex:1; padding:11px 14px;">
            <div style="font-weight:700; color:#fff; font-size:14px; font-family:var(--r-heading-font);">Beispiel · ein Urteil verbessert das Wissen</div>
            <div class="cl" style="margin:6px 0 0; font-size:13px;">Umgesetzt: Front-End-Auth wie beschrieben — <span style="font-family:var(--r-code-font); color:var(--epam-accent); font-size:12px;">kb://auth/frontend#saml</span></div>
            <div class="cl" style="margin:4px 0 0; font-size:13px; color:#E3A000;">Review: „Bitte OAuth 2 statt SAML." → abgelehnt</div>
            <div class="cl" style="margin:4px 0 0; font-size:13px;">🤖 Vorschlag: Wissensbasis <span style="font-family:var(--r-code-font); color:var(--epam-accent); font-size:12px;">§Auth</span> aktualisieren — <b style="color:#fff;">SAML → OAuth 2</b> · Owner: Security</div>
          </div>
          <div class="card" style="flex:1; padding:11px 14px;">
            <div style="font-weight:700; color:#fff; font-size:14px; font-family:var(--r-heading-font);">Freigabequote vorhersagen — aus den Zitaten</div>
            <div class="sup-line" style="margin:4px 0 7px; font-size:11px;">Signale: Belegdichte · Quellen-Status · Aktualität · Faithfulness · Neuheit — kalibriert an vergangenen Urteilen.</div>
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:5px;">
              <span style="width:112px; font-size:12px; color:#C9D1D9;">Routine-Cluster</span>
              <div style="flex:1; height:9px; border-radius:5px; background:rgba(139,148,158,0.2); overflow:hidden;"><div style="width:94%; height:100%; background:var(--epam-accent);"></div></div>
              <span style="font-size:12px; color:var(--epam-accent); width:96px; text-align:right;">94 % → auto</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="width:112px; font-size:12px; color:#C9D1D9;">neue Auth-Regel</span>
              <div style="flex:1; height:9px; border-radius:5px; background:rgba(139,148,158,0.2); overflow:hidden;"><div style="width:41%; height:100%; background:#E35050;"></div></div>
              <span style="font-size:12px; color:#E35050; width:96px; text-align:right;">41 % → Mensch</span>
            </div>
            <div class="sup-line" style="margin-top:7px; font-size:11px;">Erstumsetzung &amp; niedrige Konfidenz gehen <b style="color:#E6E9ED;">immer</b> zum Menschen. Die Vorhersage priorisiert, entscheidet nicht.</div>
          </div>
        </div>

        <!-- C: maturity staircase toward the dark factory -->
        <div style="display:flex; align-items:flex-end; gap:6px; margin-top:16px;">
          <div style="flex:1; margin-bottom:0; border:1px solid var(--epam-border); border-radius:8px; padding:7px 9px; background:var(--epam-surface);"><div style="font-size:10px; color:var(--epam-subtle);">L0</div><div style="font-size:12px; color:#C9D1D9;">manuell</div></div>
          <span style="color:var(--epam-subtle); align-self:center;">↗</span>
          <div style="flex:1; margin-bottom:16px; border:1px solid var(--epam-border); border-radius:8px; padding:7px 9px; background:var(--epam-surface);"><div style="font-size:10px; color:var(--epam-subtle);">L1</div><div style="font-size:12px; color:#C9D1D9;">AI assistiert</div></div>
          <span style="color:var(--epam-subtle); align-self:center;">↗</span>
          <div style="flex:1.25; margin-bottom:32px; border:1.5px solid var(--epam-blue); border-radius:8px; padding:7px 9px; background:rgba(0,160,227,0.08);"><div style="font-size:10px; color:var(--epam-blue);">L2 · wir sind hier</div><div style="font-size:12px; color:#fff;">AI generiert · Mensch prüft alles</div></div>
          <span style="color:var(--epam-accent); align-self:center;">↗</span>
          <div style="flex:1.25; margin-bottom:48px; border:1.5px solid var(--epam-blue); border-radius:8px; padding:7px 9px; background:rgba(0,160,227,0.08);"><div style="font-size:10px; color:var(--epam-blue);">L3 · wir wachsen</div><div style="font-size:12px; color:#fff;">+ validiert · Mensch prüft Ausnahmen</div></div>
          <span style="color:var(--epam-accent); align-self:center;">↗</span>
          <div style="flex:1.3; margin-bottom:64px; border:1.5px solid var(--epam-accent); border-radius:8px; padding:7px 9px; background:rgba(0,201,167,0.14);"><div style="font-size:10px; color:var(--epam-accent);">L4 · Ziel</div><div style="font-size:12px; color:#fff; font-weight:700;">Dark Factory</div><div style="font-size:10px; color:#C9D1D9;">Routine automatisch, in Policy</div></div>
        </div>
        <div class="sup-line" style="margin-top:8px;">Motor nach oben: das <b style="color:#E6E9ED;">Schwungrad</b> (Wissen wird besser) + die <b style="color:#E6E9ED;">kalibrierte Freigabe-Vorhersage</b> (Schwelle sicher anheben). Je höher der Reifegrad, desto weniger Prüf-Aufwand je Änderung und desto günstiger.</div>
        <aside class="notes">Repurpose: der Wissens-Loop wurde bereits gezeigt (Abschnitt-Anfang). Hier drei neue Punkte: (1) konkretes Beispiel — Umsetzung nach SAML, Review verlangt OAuth 2, die AI schlägt eine Wissensbasis-Aktualisierung vor (SAML→OAuth 2, Owner Security). (2) Freigabequote vorhersagen: aus Zitat-Signalen (Belegdichte, Quellen-Status, Aktualität, Faithfulness, Neuheit) einen kalibrierten p(Freigabe) je Cluster schätzen — Routine auto-bestätigen, Erstumsetzungen zum Menschen; Vorhersage priorisiert, entscheidet nicht; trainiert auf den vergangenen Urteilen des Gates. (3) Reifegrad-Wachstum L0→L4: das Schwungrad und die kalibrierte Vorhersage heben die Automatisierungs-Schwelle sicher an — Richtung Dark Factory (Routine automatisch in Policy, Mensch bei Ausnahmen). Höhere Reife = günstiger. ~2 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Ablehnungen und Vorhersagen kalibrieren das System. Autonomie wächst nur mit Belegen.</span></div>`,

/* 20 */ `<h2 class="title" style="font-size:25px;">Zwischenstand: <span class="ac">Analysieren, Planen und Umsetzen sind gelöst</span>.</h2>
        <div class="sup-line" style="margin-top:2px;">Was wir gelernt haben, füllt die Phasen Schritt für Schritt.</div>
        <div style="display:flex; gap:12px; margin-top:14px; height:400px;">
          <!-- Analysieren — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Analysieren</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Assessment &amp; Discovery</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Ein Mainframe ist zu groß dafür."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Übergangsarchitektur, Schnitt in Wellen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wir haben weder Doku noch Tests."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Estate Scanner: Regeln, Tests, Simulationen</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Landkarte · Wellen · Regeln · Testgerüst</div></div>
          </div>
          <!-- Planen — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Planen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Design &amp; Blueprint</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Halluziniert."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Wissensbasis aus fünf Zeugen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (1)</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Roadmap mit Preis je Welle</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Regelwerk · Zielbild · bepreiste Roadmap</div></div>
          </div>
          <!-- Umsetzen — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Umsetzen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Build &amp; Migrate</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Sloppy." · „Fast richtig ist falsch."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Quellenverweis, Gates, Vollständigkeitsprüfung</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Niemand kann so viel prüfen."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Review-Umgebung je Owner</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (2)</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Das Schwungrad</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: geprüfter Code · lernende Wissensbasis</div></div>
          </div>
          <!-- Überführen — PENDING -->
          <div style="flex:1; display:flex; flex-direction:column; opacity:0.4;">
            <div class="node" style="padding:7px; font-size:15px;">Überführen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Test, Cutover &amp; Go-live</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Der Cutover ist das Risiko."</span>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wer haftet?"</span>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: live · Rückfall · Belegkette</div></div>
          </div>
        </div>
        <aside class="notes">Zwischenstand nach Abschnitt 3: Analysieren, Planen und Umsetzen sind beantwortet — nur Überführen bleibt.</aside>`,

/* 21 */ `<div class="bg" style="background:
          linear-gradient(to top, rgba(13,17,23,0.96) 0%, rgba(13,17,23,0.55) 30%, rgba(13,17,23,0.12) 58%, rgba(13,17,23,0) 78%),
          linear-gradient(to right, rgba(13,17,23,0.82) 0%, rgba(13,17,23,0.2) 45%, transparent 72%);"></div>
        <div class="wrap">
          <div class="sec">Abschnitt 4</div>
          <h1>Überführen — <span class="ac">live gehen, ohne den Atem anzuhalten</span></h1>
          <div class="sup">Der Router entscheidet, das Monitoring wacht, der Rückfall ist eingebaut — und jeder Schritt ist belegt.</div>
        </div>`,

/* 22 */ `<span class="qchip answer">„Der Cutover ist das Risiko."</span>
        <h2 class="title">Umschalten mit <span class="ac">Rückfall</span></h2>

        <div style="display:flex; gap:14px; margin-top:12px; align-items:stretch;">
          <!-- LEFT: the router -->
          <div style="flex:1;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin-bottom:5px;">Router — je Bereich entscheidet er, wer führt</div>
            <div style="border:1px solid var(--epam-border); border-radius:10px; padding:10px 12px;">
              <div class="chip" style="display:block; text-align:center;">Clients <span class="sh">(unverändert)</span></div>
              <div style="text-align:center; color:var(--epam-subtle); line-height:1;">↓</div>
              <div class="chip blue" style="display:block; text-align:center;">Router</div>
              <div style="font-size:11.5px; color:#C9D1D9; margin:7px 0; line-height:1.7;">
                • <b style="color:#fff;">Befehle</b>: repliziert (dual-write) — beide bleiben aktuell<br>
                • <b style="color:#fff;">Lesen</b>: nur vom <b style="color:#fff;">führenden</b> System<br>
                • ⟲ <span style="color:#E3A000;">Rückfall</span> auf Legacy — Policy, Mensch bestätigt
              </div>
              <div style="display:flex; gap:10px; align-items:center; justify-content:center;">
                <div class="node" style="font-size:12px; padding:8px 12px;">Legacy</div>
                <span style="color:var(--epam-accent); font-size:12px;">⇄ CDC</span>
                <div class="node teal" style="font-size:12px; padding:8px 12px;">Neu · Welle n</div>
              </div>
              <div class="sup-line" style="text-align:center; margin-top:6px; font-size:11px;">Modi je Bereich: Legacy führt → Neu führt → Neu allein</div>
            </div>
          </div>

          <!-- RIGHT: AST view overlaid on the telemetry graph -->
          <div style="flex:1.05;">
            <div class="sup-line" style="color:#fff; font-weight:600; margin-bottom:5px;">Gesundheit — AST-Graph über die Telemetrie gelegt</div>
            <div style="border:1px solid var(--epam-border); border-radius:10px; padding:10px 12px;">
              <div class="chip" style="display:block; text-align:center; border-color:var(--epam-blue);">Estate Scanner erfasst <b>auch das Neue</b> → AST-Graph <span class="sh">(Struktur)</span></div>
              <div style="text-align:center; color:var(--epam-accent); font-size:13px; line-height:1.2;">⇕ overlay</div>
              <div class="chip" style="display:block; text-align:center; border-color:var(--epam-accent);">Telemetrie-Graph — <b>OpenTelemetry · dash0</b> <span class="sh">(Laufzeit)</span></div>
              <div style="font-size:11.5px; color:#C9D1D9; margin:7px 0 0; line-height:1.7;">
                <b style="color:#fff;">Healthcheck</b>: Ergebnisse · Fehlerraten · Latenz — Legacy vs. Neu<br>
                <span class="sh" style="color:var(--epam-subtle);">auch der Mainframe emittiert OTel — z/OS Connect · Broadcom z/IRIS</span><br>
                Problem → <span style="color:#E3A000;">Rückfall</span> (an den Router) &nbsp;+&nbsp; <span style="color:var(--epam-accent);">Folge-Fix</span> (zurück in die Pipeline)
              </div>
            </div>
          </div>
        </div>

        <div class="body-line" style="margin-top:12px; font-size:18px;">Weil jede Einheit ihr Zitat trägt: <span style="font-family:var(--r-code-font); color:var(--epam-accent); font-size:15px;">Span → Einheit → Zitat → Fragment → Owner</span>. So findet ein Produktionsproblem sein Wissen und seinen Verantwortlichen zurück.</div>
        <div class="sup-line" style="margin-top:4px;">Router und Monitor entstehen in derselben Pipeline, mit Quellenverweis auf das Zielbetriebsmodell. Beide Systeme laufen, bis der Fach-Owner den Schnitt freigibt.</div>
        <aside class="notes">Die Übergangs-Architektur in einem Bild. Router (je Bereich): Befehle werden repliziert (dual-write), Lesen kommt vom führenden System, Rückfall auf Legacy in Policy mit menschlicher Bestätigung; Modi je Bereich Legacy-führt → Neu-führt → Neu-allein; Clients ändern sich nie. Rechts: der Estate Scanner erfasst auch die neu generierte Software (AST-Graph); dieser Struktur-Graph wird über den Laufzeit-Telemetrie-Graph gelegt (OpenTelemetry, visualisiert in dash0). Automatischer Healthcheck vergleicht Legacy und Neu; ein Problem löst Rückfall (Router) und einen Folge-Fix (zurück in die Pipeline, Agent0-Stil) aus. Weil Einheiten Zitate tragen, führt ein Span über Einheit → Zitat → Fragment → Owner zum richtigen Wissen und Menschen. ~2 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Jedes Laufzeitproblem führt zurück zu Einheit, Zitat und Owner, mit eingebautem Rückfall.</span></div>`,

/* 23 */ `<span class="qchip answer">„Wer haftet?"</span>
        <h2 class="title">Belege statt <span class="ac">Beteuerungen</span></h2>
        <div class="subline" style="margin:2px 0 0;">Jede Lieferung trägt eine Quittung, aus der ein Prüfer das ganze Lieferereignis rekonstruiert, ohne Chat-Verlauf, ohne Zuruf.</div>
        <div style="display:flex; gap:22px; margin-top:14px; align-items:stretch;">
          <div style="flex:0 0 39%; display:flex; flex-direction:column; gap:9px;">
            <div class="sup-line" style="margin:0; color:#fff; font-weight:600; font-size:12.5px;">Fünf Fragen, die die Quittung beantwortet:</div>
            <div style="display:flex; align-items:baseline; gap:10px;"><span class="pill ok" style="background:rgba(0,201,167,0.16); color:var(--epam-accent); padding:2px 8px; border-radius:6px; font-size:12px;">1</span><span class="body-line" style="margin:0; font-size:13px;">Was wurde beauftragt? <span style="color:#8B949E;">→ Spec · Work-Item · Konstitution</span></span></div>
            <div style="display:flex; align-items:baseline; gap:10px;"><span class="pill ok" style="background:rgba(0,201,167,0.16); color:var(--epam-accent); padding:2px 8px; border-radius:6px; font-size:12px;">2</span><span class="body-line" style="margin:0; font-size:13px;">Welche Quellen, Governance- & Compliance-Vorgaben? <span style="color:#8B949E;">→ mit Hash & KB-Verweis</span></span></div>
            <div style="display:flex; align-items:baseline; gap:10px;"><span class="pill ok" style="background:rgba(0,201,167,0.16); color:var(--epam-accent); padding:2px 8px; border-radius:6px; font-size:12px;">3</span><span class="body-line" style="margin:0; font-size:13px;">Was hat gebaut? <span style="color:#8B949E;">→ Modelle · Skills · Agenten · Tools · Versionen</span></span></div>
            <div style="display:flex; align-items:baseline; gap:10px;"><span class="pill ok" style="background:rgba(0,201,167,0.16); color:var(--epam-accent); padding:2px 8px; border-radius:6px; font-size:12px;">4</span><span class="body-line" style="margin:0; font-size:13px;">Was wurde geprüft? <span style="color:#8B949E;">→ Tests, Scans, offene Findings mit Ablauf</span></span></div>
            <div style="display:flex; align-items:baseline; gap:10px;"><span class="pill ok" style="background:rgba(0,201,167,0.16); color:var(--epam-accent); padding:2px 8px; border-radius:6px; font-size:12px;">5</span><span class="body-line" style="margin:0; font-size:13px;">Wer hat freigegeben? <span style="color:#8B949E;">→ namentliche Freigaben · Hashes · Attestierung</span></span></div>
          </div>
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="sup-line" style="margin:0 0 3px; color:#fff; font-weight:600; font-size:12px;">GEN-RECEIPT-000184 <span class="sh">— menschen- & maschinenlesbar, manipulationssicher</span></div>
            <div style="background:#10141a; border:1px solid var(--epam-border); border-radius:8px; padding:8px 11px; font-family:var(--r-code-font); font-size:10px; line-height:1.5; color:#C9D1D9;">
              <div><span style="color:#8B949E;">receipt:</span> GEN-RECEIPT-000184 &nbsp; <span style="color:var(--epam-accent);">status: approved</span></div>
              <div><span style="color:#8B949E;">spec:</span> SPEC-042-v7 · <span style="color:#8B949E;">pr:</span> PR-318 · <span style="color:#8B949E;">parent:</span> …177</div>
              <div style="color:#79B8FF;">approved_basis:</div>
              <div>&nbsp;&nbsp;konstitution: CONST-2026.08-03</div>
              <div>&nbsp;&nbsp;quellen: fachrichtlinie-rundung v5.2 <span style="color:var(--epam-accent);">sha256:9c1f…</span></div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;schnittstelle-buchung&nbsp; v3.1 <span style="color:var(--epam-accent);">sha256:a4e0…</span></div>
              <div>&nbsp;&nbsp;governance &amp; compliance <span style="color:#8B949E;">(aus KB, abgedeckt):</span> segregation-of-duties · <span style="color:var(--epam-accent);">dora-resilienz#§5</span> · gdpr-datenminimierung &nbsp;<span style="color:var(--epam-accent);">role=grounds ✓</span></div>
              <div style="color:#79B8FF;">factory_config:</div>
              <div>&nbsp;&nbsp;modelle: <span style="color:var(--epam-accent);">gateway/opus-4-8</span> → spec, impl · <span style="color:var(--epam-accent);">gateway/sonnet-4-6</span> → validate <span style="color:#8B949E;">(Version protokolliert)</span></div>
              <div>&nbsp;&nbsp;skills: rule-extraction@4.3 · java-gen@7.1 · agenten: spec@3.4 · impl@6.2 · validate@5.8</div>
              <div style="color:#79B8FF;">verification:</div>
              <div>&nbsp;&nbsp;build <span style="color:var(--epam-accent);">✓</span> unit <span style="color:var(--epam-accent);">✓</span> integration <span style="color:var(--epam-accent);">✓</span> edge-cases <span style="color:var(--epam-accent);">✓</span> sbom <span style="color:var(--epam-accent);">✓</span> licence <span style="color:var(--epam-accent);">✓</span></div>
              <div>&nbsp;&nbsp;security: passed_with_findings · <span style="color:#E3A000;">offen VULN-118 (low)→security-owner</span></div>
              <div style="color:#79B8FF;">approvals:</div>
              <div>&nbsp;&nbsp;spec: rule-owner (A. Roth) · technik: architect (S. Kaya) · compliance: compliance-sme (Dr. L. Weber)</div>
              <div>&nbsp;&nbsp;<span style="color:var(--epam-accent);">sign-off: release-owner — M. Braun ✓ 2026-08-26T14:42Z</span></div>
              <div style="color:#79B8FF;">integrity:</div>
              <div>&nbsp;&nbsp;hashes: app · container · receipt · <span style="color:var(--epam-accent);">attestation: signiert</span></div>
            </div>
          </div>
        </div>
        <div class="sup-line" style="margin-top:11px;"><b style="color:#E6E9ED;">Eine Quittung, viele Regime.</b> Der Auftraggeber entscheidet Anwendbarkeit, Wesentlichkeit und Restrisiko — die Factory liefert die Evidenz: Model-Risk · Third-Party-Risiko · operative Resilienz <span class="sh">(DORA)</span> · Datenschutz <span class="sh">(GDPR)</span> · KI-Governance <span class="sh">(EU AI Act · ISO/IEC 42001)</span>. <span style="color:#8B949E;">Ehrliche Grenze: belegt ist, dass Code und Menschen übereinstimmen — nicht, dass beide recht haben.</span></div>
        <aside class="notes">Die Quittung fällt beim Bauen an, nicht nachträglich — sie ersetzt verstreute Evidenz aus Tickets, Chats und Repos durch eine strukturierte Kette. Fünf Fragen links, ein echtes Beispiel rechts. Kernbotschaft zur Haftung: dieselbe Evidenz trägt jedes Regime; wer welches Regime anwendbar erklärt und Restrisiko freigibt, bleibt beim Auftraggeber. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Dieselbe Belegkette bedient jedes Regime. Die Verantwortung bleibt beim Auftraggeber.</span></div>`,

/* 24 */ `<h2 class="title">Fünf Dimensionen, <span class="ac">fünf Ergebnisse</span></h2>
        <div class="subline" style="margin-top:8px; color:#fff; font-weight:600;">Was bleibt — und was es Ihnen bringt</div>
        <div class="tile-row" style="margin-top:12px; gap:12px;">
          <div class="tile"><h4 style="margin:0 0 6px; font-size:17px; color:#fff;">Anwendung</h4><div class="cap" style="font-size:12px;">Code, Regeln, Schemata, Konfiguration</div><div style="margin-top:auto; padding-top:8px; border-top:1px solid rgba(0,201,167,0.22); color:var(--epam-accent); font-size:12.5px; line-height:1.3;">→ erweiterte Features bei <b>geringerer technischer Schuld</b></div></div>
          <div class="tile"><h4 style="margin:0 0 6px; font-size:17px; color:#fff;">Wissensbasis</h4><div class="cap" style="font-size:12px;">kuratierte Anforderungen, Zielbetriebsmodell, Historie, Freigaben</div><div style="margin-top:auto; padding-top:8px; border-top:1px solid rgba(0,201,167,0.22); color:var(--epam-accent); font-size:12.5px; line-height:1.3;">→ <b>Startkapital</b> für weitere Migrationen</div></div>
          <div class="tile"><h4 style="margin:0 0 6px; font-size:17px; color:#fff;">Engineering &amp; Betrieb</h4><div class="cap" style="font-size:12px;">Specs, Tests, Pipelines, Runbooks — mit Observability &amp; Estate Scanner <b style="color:#C9D1D9;">verlinkt</b></div><div style="margin-top:auto; padding-top:8px; border-top:1px solid rgba(0,201,167,0.22); color:var(--epam-accent); font-size:12.5px; line-height:1.3;">→ <b>DevOps-Automation</b> auf Live-Telemetrie</div></div>
          <div class="tile"><h4 style="margin:0 0 6px; font-size:17px; color:#fff;">Compliance-Belege</h4><div class="cap" style="font-size:12px;">Quittungen je Einheit — Quellen, Modelle, Freigaben, Governance-Coverage</div><div style="margin-top:auto; padding-top:8px; border-top:1px solid rgba(0,201,167,0.22); color:var(--epam-accent); font-size:12.5px; line-height:1.3;">→ <b>automatisierte</b> Compliance- &amp; Governance-Reviews</div></div>
          <div class="tile accent"><h4 style="margin:0 0 6px; font-size:17px; color:#fff;">Harness &amp; Skills</h4><div class="cap" style="font-size:12px;">Harness, Skills, Agenten, Policies — die AI-SDLC-Fabrik selbst</div><div style="margin-top:auto; padding-top:8px; border-top:1px solid rgba(0,201,167,0.35); color:var(--epam-accent); font-size:12.5px; line-height:1.3;">→ nächster Case: <b>Brownfield-Entwicklung, COTS-Ablösung …</b></div></div>
        </div>
        <div class="body-line" style="margin-top:16px;">Keine Laufzeit-Abhängigkeit von der Factory: Ein anderer Lieferant kann gegen dieselbe Wissensbasis bauen. Die Fabrik selbst bleibt und ist bereit für den nächsten Anwendungsfall.</div>
        <aside class="notes">Der Endzustand — fünf Dimensionen, je ein Nutzen. Anwendung: Feature-Plus bei weniger Schuld. Wissensbasis: Startkapital für die nächste Migration. Engineering &amp; Betrieb: Observability, Estate Scanner und Specs verlinkt → DevOps-Automation. Compliance-Belege: Reviews laufen automatisiert gegen die Quittungen. Harness &amp; Skills: die Fabrik bleibt und lässt sich auf Brownfield, COTS-Ablösung u. a. AI-SDLC-Fälle richten. Lock-in-Konter in der Body-Zeile. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Kein Lock-in. Die Fabrik selbst wird zum Startkapital für den nächsten Fall.</span></div>`,

/* 25 */ `<h2 class="title" style="font-size:25px;">Zwischenstand: <span class="ac">alle vier Phasen sind gelöst</span>. Jeder Einwand hat seine Antwort in der Wissensbasis.</h2>
        <div class="sup-line" style="margin-top:2px;">Was wir gelernt haben, füllt jetzt alle Phasen. Der Kreis ist geschlossen.</div>
        <div style="display:flex; gap:12px; margin-top:14px; height:400px;">
          <!-- Analysieren — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Analysieren</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Assessment &amp; Discovery</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Ein Mainframe ist zu groß dafür."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Übergangsarchitektur, Schnitt in Wellen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wir haben weder Doku noch Tests."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Estate Scanner: Regeln, Tests, Simulationen</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Landkarte · Wellen · Regeln · Testgerüst</div></div>
          </div>
          <!-- Planen — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Planen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Design &amp; Blueprint</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Halluziniert."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Wissensbasis aus fünf Zeugen</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (1)</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Roadmap mit Preis je Welle</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: Regelwerk · Zielbild · bepreiste Roadmap</div></div>
          </div>
          <!-- Umsetzen — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Umsetzen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Build &amp; Migrate</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Sloppy." · „Fast richtig ist falsch."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Quellenverweis, Gates, Vollständigkeitsprüfung</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Niemand kann so viel prüfen."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Review-Umgebung je Owner</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Tokens werden zu teuer." (2)</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Das Schwungrad</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: geprüfter Code · lernende Wissensbasis</div></div>
          </div>
          <!-- Überführen — SOLVED -->
          <div style="flex:1; display:flex; flex-direction:column;">
            <div class="node" style="padding:7px; font-size:15px;">Überführen</div>
            <div class="sup-line" style="font-style:italic; margin:4px 0 8px;">klassisch: Test, Cutover &amp; Go-live</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Der Cutover ist das Risiko."</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Router, Monitoring, Rückfall</div>
            <span class="qchip" style="display:block; font-size:12px; padding:5px 9px; margin-bottom:4px;">„Wer haftet?"</span>
            <div class="sup-line" style="margin:2px 0 8px; color:var(--epam-accent);">→ Nachvollziehbarkeit des Harness</div>
            <div style="margin-top:auto"><div class="chip" style="display:block; font-size:12px; border-color:var(--epam-accent); background:rgba(0,201,167,0.08); color:var(--epam-accent);">Ergebnis: live · Rückfall · Belegkette</div></div>
          </div>
        </div>
        <aside class="notes">Zwischenstand nach Abschnitt 4: alle vier Phasen sind beantwortet, die Antworten stehen in der Wissensbasis — Überleitung zum Abschluss. Der Modellanbieter-Einwand wird auf der Schlussfolie beantwortet (Prüfstand).</aside>`,

/* 26 */ `<span class="qchip answer">„Wir hängen am Modellanbieter."</span>
        <h2 class="title">Die Factory aus <span class="ac">Bausteinen</span></h2>
        <div style="display:flex; gap:24px; margin-top:16px;">
          <div style="flex:1.1;">
            <table class="matrix">
              <thead><tr><th style="text-align:left;">Baustein</th><th>Analysieren</th><th>Planen</th><th>Umsetzen</th><th>Überführen</th></tr></thead>
              <tbody>
                <tr><td class="lbl">Estate Scanner</td><td class="cell">●</td><td></td><td></td><td class="cell">●</td></tr>
                <tr><td class="lbl">Wissensbasis + FINIUS</td><td class="cell">●</td><td class="cell">●</td><td class="cell">●</td><td class="cell">●</td></tr>
                <tr><td class="lbl">SDD-Pipelines / Harness</td><td></td><td></td><td class="cell">●</td><td></td></tr>
                <tr><td class="lbl">Review-Umgebung</td><td></td><td></td><td class="cell">●</td><td></td></tr>
                <tr><td class="lbl">Router + Monitor</td><td></td><td></td><td></td><td class="cell">●</td></tr>
                <tr><td class="lbl">Prüfstand <span class="sh">(Skill Workbench)</span></td><td colspan="4" class="span">Token-Budget je Rolle · Modellwechsel als Routine</td></tr>
                <tr><td class="lbl">Belege</td><td class="cell">●</td><td class="cell">●</td><td class="cell">●</td><td class="cell">●</td></tr>
              </tbody>
            </table>
          </div>
          <div style="flex:1;">
            <div class="sup-line" style="margin:2px 0;"><span style="color:var(--epam-blue); font-weight:700;">1.</span> Modernisierung scheitert an unverstandener Fachlogik. Erst Karte und Regelwerk, dann Code.</div>
            <div class="sup-line" style="margin:8px 0;"><span style="color:var(--epam-blue); font-weight:700;">2.</span> Nichts ohne Quellenverweis. Jedes Urteil am Gate verbessert die Wissensbasis.</div>
            <div class="sup-line" style="margin:8px 0;"><span style="color:var(--epam-blue); font-weight:700;">3.</span> Menschen entscheiden an Gates. Belege zeigen wer, was, womit.</div>
            <div class="sup-line" style="margin:8px 0; border-left:3px solid var(--epam-accent); padding-left:10px; color:#E6E9ED;"><span style="color:var(--epam-accent); font-weight:700;">4.</span> Wir bauen unsere Factory aus Bausteinen und richten sie in Phasen ein.</div>
          </div>
        </div>
        <div class="sup-line" style="margin-top:14px;">EPAM Estate Scanner, Wissensbasis, Harness und Review-Umgebung — mit FINIUS für das fachliche Regelwerk.</div>
        <img class="logo" src="../../templates/themes/epam-logo.png" alt="EPAM">
        <aside class="notes">Der Abschluss: Bausteine über vier Phasen; der Prüfstand als Antwort auf „Modellanbieter"; vier Takeaways. Die Folie, auf der EPAM genannt wird. ~1,5 min.</aside>
          <div class="takeaway"><span class="tk-label">Takeaway</span><span class="tk-text">Kein Monolith, kein Anbieter-Lock-in: Bausteine, phasenweise aufgebaut und jederzeit austauschbar.</span></div>`,

/* 27 */ `<!-- Same dark scrim as the cover, for a deliberate bookend -->
        <div style="position:absolute; inset:0; background:linear-gradient(90deg, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.8) 40%, rgba(13,17,23,0.45) 70%, rgba(13,17,23,0) 100%);"></div>
        <div style="position:absolute; top:0; left:64px; height:100%; width:660px; display:flex; flex-direction:column; justify-content:center; text-align:left;">
          <div style="font-family:var(--r-heading-font); font-weight:800; font-size:64px; line-height:1.04; letter-spacing:-0.03em; color:#fff;">Vielen Dank.</div>
          <div style="font-family:var(--r-heading-font); font-weight:600; font-size:32px; line-height:1.15; letter-spacing:-0.02em; color:var(--epam-blue); margin-top:16px;">Fragen &amp; Diskussion</div>
          <div style="width:72px; height:3px; background:linear-gradient(90deg,var(--epam-blue),var(--epam-accent)); border-radius:2px; margin:24px 0;"></div>
          <div style="font-size:24px; color:#E6E9ED; line-height:1.3; max-width:92%;">Wir wissen, was wir haben — wir wissen, was wir bauen.</div>
          <div style="font-size:15px; color:var(--epam-subtle); margin-top:28px;">
            Stefan Siprell · EPAM · Public
          </div>
        </div>
        <img class="logo" src="../../templates/themes/epam-logo.png" alt="EPAM" style="bottom:40px; left:64px; height:34px;">
        <aside class="notes">Abschluss — Danke und Übergang in die Fragerunde. Bookend zum Cover (dasselbe System/360-Motiv). Der Anhang folgt als Backup für Detailfragen. ~0,5 min.</aside>`,

/* 28 */ `<h2>Anhang</h2>
        <p>Referenzfolien A–F: zum Nachlesen, nicht zum Vortrag. Auf Nachfrage eingeblendet.</p>`,

/* 29 */ `<span class="appendix-tag">Anhang A · Prüfstand</span>
        <h2 class="title" style="font-size:24px;">Der Prüfstand hält die Bausteine ehrlich: <span class="ac">Quellenverweise werden getestet</span>, bevor ein Baustein läuft.</h2>
        <div style="display:flex; gap:16px; margin-top:20px;">
          <div class="card accent-top" style="flex:1;"><h4 style="font-size:18px;">Gemockte Wissensbasis</h4><div class="cl">Feste Fragmente mit bekannten Ankern — der Prüfstand prüft, ob ein Baustein genau die richtigen Quellenverweise ausgibt.</div></div>
          <div class="card accent-top" style="flex:1;"><h4 style="font-size:18px;">Evaluation über Modelle und Kontextlasten</h4><div class="cl">Zitiert das Modell, zitiert es korrekt, erfindet es? Ergebnis: Modell je Rolle, Kontextgrenze, Token-Budget.</div></div>
          <div class="card accent-top" style="flex:1;"><h4 style="font-size:18px;">Regression auf echten Urteilen</h4><div class="cl">Jede Prompt- oder Modelländerung läuft gegen vergangene Fälle. Bricht die Verweis-Treue, wird nicht ausgeliefert.</div></div>
        </div>
        <div class="sup-line" style="margin-top:20px;">Ein günstigeres Modell darf kuratieren, wenn es unter Last keine Quellen erfindet. Das entscheidet der Prüfstand, nicht der Geschmack.</div>
        <div class="chip" style="margin-top:14px; font-size:12px;">Skill Workbench (SWB)</div>
        <aside class="notes">Nutzen, wenn jemand fragt, wie die AI vom Erfinden von Quellen abgehalten wird oder was bei Modellwechsel passiert.</aside>`,

/* 30 */ `<span class="appendix-tag">Anhang B · Beleg</span>
        <h2 class="title" style="font-size:24px;">So sieht ein Beleg aus: <span class="ac">jeder Schritt ist nachlesbar</span>, ohne Chatverlauf.</h2>
        <div style="display:flex; gap:18px; margin-top:18px; align-items:flex-start;">
          <div style="flex:1.4;"><div class="shot" style="height:300px; text-align:left; align-items:flex-start;"><span style="color:var(--epam-subtle); font-size:12px;">Generierungsbeleg · YAML</span></div></div>
          <div style="flex:1; display:flex; flex-direction:column; gap:8px;">
            <div class="chip">Auftrag</div><div class="chip">Grundlage</div><div class="chip">Konfiguration</div><div class="chip">Ergebnisse</div><div class="chip">Prüfungen</div><div class="chip">Freigaben und Hashes</div>
          </div>
        </div>
        <div class="sup-line" style="margin-top:16px;">Sechs Blöcke: Auftrag · Grundlage · Konfiguration · Ergebnisse · Prüfungen · Freigaben und Hashes.</div>
        <aside class="notes">Nutzen, wenn jemand fragt, was ein Beleg enthält. Keine Prompts, kein Chat — Verweise, Versionen, Hashes.</aside>`,

/* 31 */ `<span class="appendix-tag">Anhang C · Wissensbasis</span>
        <h2 class="title" style="font-size:24px;">Die Wissensbasis ist ein Git-Repository im <span class="ac">Google Open Knowledge Format (OKF)</span>. Die Struktur liegt im Werkzeug, nicht in der Disziplin.</h2>
        <div style="display:flex; gap:18px; margin-top:18px; align-items:flex-start;">
          <div style="flex:0.85;"><pre style="font-size:12px; width:100%;"><code>kb_id
category
contexts
layers
concerns
source_refs
validation
related
verified_by</code></pre><div class="sup-line">OKF-Header (Google Open Knowledge Format)</div></div>
          <div style="flex:1.15;">
            <div class="cl" style="font-size:15px;">Skill-Layer: Beitragende beantworten Fragen, das Werkzeug schreibt den Header.</div>
            <div class="cl" style="font-size:15px;">CI auf jedem Pull Request: Schema, kontrollierte Vokabulare, Fragment-IDs, Links, Split-Regel.</div>
            <div class="cl" style="font-size:15px;">Abruf: erst filtern (Layer, Concern), dann semantisch ranken. Der Filter ist die Leitplanke.</div>
            <div class="cl" style="font-size:15px;">Zwei Konsumenten: der Agenten-Pfad pinnt Ergebnisse, der interaktive Pfad nicht.</div>
          </div>
        </div>
        <aside class="notes">Nutzen, wenn ein Architekt fragt, wie die Basis strukturiert, abgerufen oder gegatet wird. Kontrollierte Vokabulare fallen in CI durch.</aside>`,

/* 32 */ `<span class="appendix-tag">Anhang D · Herkunftsgraph</span>
        <h2 class="title" style="font-size:24px;">Der Herkunftsgraph ist eine <span class="ac">Sicht auf Code und Wissen</span>, kein zweites Artefakt.</h2>
        <div style="display:flex; gap:18px; margin-top:18px; align-items:flex-start;">
          <div style="flex:1.15;">
            <div class="chip" style="display:block; margin-bottom:8px;">Modul → Einheit (Methode, Konstante, Test — als Syntaxbaum-Knoten, nicht als Datei)</div>
            <div class="chip" style="display:block; margin-bottom:8px;">CITES (Rolle, Revision, Hash) → Wissensfragment</div>
            <div class="chip" style="display:block;">TOUCHES: Revision → geänderte Einheiten</div>
          </div>
          <div style="flex:0.85; display:flex; flex-direction:column; gap:10px;">
            <div class="card" style="padding:12px;"><div class="cl" style="margin:0;"><strong style="color:#fff;">Native Graph-DB</strong> — schnellste Traversalen, neue Infrastruktur</div></div>
            <div class="card accent-teal" style="padding:12px;"><div class="cl" style="margin:0;"><strong style="color:#fff;">Bestehende relationale Basis erweitert</strong> — kein neues System zu zertifizieren</div></div>
            <div class="card" style="padding:12px;"><div class="cl" style="margin:0;"><strong style="color:#fff;">Abgeleiteter Index, bei Merge neu gebaut</strong> — wegwerfbar, nur lesend</div></div>
          </div>
        </div>
        <div class="sup-line" style="margin-top:16px;">Empfehlung: relationale Basis zuerst, Graph als materialisierte Sicht, Migration erst bei Bedarf.</div>
        <aside class="notes">Nutzen, wenn jemand fragt, wo die Herkunft lebt oder welche Datenbank sie braucht. Antwort: Option 2.</aside>`,

/* 33 */ `<span class="appendix-tag">Anhang E · Regime</span>
        <h2 class="title" style="font-size:24px;">Eine Evidenz <span class="ac">beantwortet mehrere Regime</span>: die Zuordnung.</h2>
        <table class="wave" style="margin-top:16px; font-size:12px;">
          <thead><tr><th>Regime</th><th>Erwartung</th><th>Evidenz</th></tr></thead>
          <tbody>
            <tr><td><strong>EU AI Act</strong></td><td>Dokumentation, Aufzeichnung, Nachvollziehbarkeit, menschliche Aufsicht</td><td>Herkunftsgraph, Owner-Ausschnitte, gepinnte Kette</td></tr>
            <tr><td><strong>DORA</strong></td><td>Nachvollziehbarkeit von IKT-Änderungen</td><td>Änderungshistorie mit Quellenverweisen</td></tr>
            <tr><td><strong>Modellrisiko-Praxis</strong></td><td>Entwicklungsnachweis, Audit-Trail von Ausgaben zu Eingaben</td><td>die Kette je Einheit</td></tr>
            <tr><td><strong>ISO/IEC 42001</strong></td><td>Nachvollziehbarkeit als System, nicht als Einzelabfrage</td><td>—</td></tr>
          </tbody>
        </table>
        <div class="chip" style="display:block; margin-top:14px; font-size:12px;">Bank/Versicherer: Regulierungsperimeter, Interpretation, Materialität, Restrisiko, Release · Lieferteam: Softwarequalität, Betrieb der Werkstatt nach vereinbarten Kontrollen</div>
        <div class="sup-line" style="margin-top:12px;">Keine Rechtsauskunft. Die Anwendbarkeit bestimmt das Institut.</div>
        <aside class="notes">Nutzen, wenn Compliance/Risk fragt, welche Regulierung dies erfüllt. Zeilen ordnen Evidenz Erwartungen zu, nicht Zertifizierung.</aside>`,

/* 34 */ `<span class="appendix-tag">Anhang F · Playbook</span>
        <h2 class="title" style="font-size:24px;">Fünf Phasen, drei Reifegrade: <span class="ac">das Playbook hinter dem Vortrag</span>.</h2>
        <div style="display:flex; gap:6px; margin-top:16px;">
          <div class="chip blue" style="flex:1; text-align:center; font-size:12px;">1 Discovery &amp; Assessment</div>
          <div class="chip blue" style="flex:1; text-align:center; font-size:12px;">2 Behavioral Baseline</div>
          <div class="chip blue" style="flex:1; text-align:center; font-size:12px;">3 Preparation &amp; Design</div>
          <div class="chip blue" style="flex:1; text-align:center; font-size:12px;">4 Iterative Modernization</div>
          <div class="chip blue" style="flex:1; text-align:center; font-size:12px;">5 Validation &amp; Cutover</div>
        </div>
        <div class="sup-line" style="text-align:center; margin-top:10px;">Analysieren → 1–2 · Planen → 3 · Umsetzen → 4 · Überführen → 5</div>
        <div style="margin-top:18px;">
          <div class="cl" style="font-size:14px;"><strong style="color:#fff;">Grad 0:</strong> manuell</div>
          <div class="cl" style="font-size:14px;"><strong style="color:#fff;">Grad 1:</strong> AI unterstützt Schritte</div>
          <div class="cl" style="font-size:14px;"><strong style="color:#fff;">Grad 2:</strong> AI generiert, Menschen prüfen</div>
          <div class="cl" style="font-size:14px;"><strong style="color:#fff;">Grad 3:</strong> AI generiert und validiert, Menschen prüfen Ausnahmen</div>
        </div>
        <div class="sup-line" style="margin-top:16px;">Reifegrad je Bereich, steigt mit Nachweis, nie pauschal.</div>
        <aside class="notes">Nutzen, wenn jemand die Gesamtmethode erfragt. Datenmigration/Cutover-Detail ist bewusst außerhalb des Vortragsumfangs.</aside>`
];
