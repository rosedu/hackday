---
title: 27 mai
layout: arhiva
---

E timpul pentru un nou Hack Day! Data pe care ne întâlnim este duminică, 
**27 mai**, la ora **10:00** în **EG-106**.

Pentru ediția asta ne-am inspirat din practicile comunităților Agile și
ne propunem să exersăm tehnici moderne de scris cod: test-driven
development, pair programming, refactoring, development incremental.
Vino să înveți cu programatori experimentați, meseria se fură!

Stay tuned pentru updates!

## Proiecte (listă în lucru)

* **CaptureHiddenMultimediaContent** este o idee nouă de proiect
  pentru HackDay.

  Vom crea de la zero un custom proxy server având la bază
  [Node.JS][node-js] și modulul npm [node_pcap][node-pcap].
  Ideea este ca atunci când vizitezi o pagină care conține un obiect
  Flash, iar acel obiect rulează un algoritm obscur pentru a calcula
  URL-ul de la care stream-ează după aceea un fișier audio/video, să
  capturezi într-un buffer acel conținut multimedia aflat în tranzit și
  să reconstruiești din buffer pe HDD-ul local fișierul audio/video
  original.

  Ca implementare concretă, acest proxy server va verifica header-ul
  "Content-Type" pentru fiecare response, iar dacă acel header începe
  ori cu "audio/" ori cu "video/", captura va fi inițiată, iar
  utilizatorului îi vor fi prezentate detaliile tehnice într-un
  **div** în partea de sus a paginii vizitate.

[node-js]: http://nodejs.org/
[node-pcap]: https://github.com/mranney/node_pcap

* **<strike>DEX online</strike>** proiect anulat :(

* **[Harta Politicii][harta]** își propune să fie cea mai mare colecție de
  date de date despre politicieni români.

  Vrem să creăm atât o platformă utilă inițiaților în politică, cât și o
  unealtă care să ajute cetățeanul de rând să înțeleagă ce se întâmplă în
  politică, să poată compara politicieni pe bază de fapte, istoric, date,
  nu doar promisiuni.

  Puteți răsfoi [codul][harta-cod], iar cei interesați sunt așteptați să
  contribuie!

[harta]: http://hartapoliticii.ro
[harta-cod]: https://github.com/pistruiatul/hartapoliticii

* **[WoUSO][]** (World of USO) este un joc online text, conceput ca
  instrument adițional de curs (USO înseamnă Utilizarea Sistemelor de
  Operare); modulele de joc se bazează pe de o parte pe cunoașterea
  materiei (utilizare Linux) și pe de altă parte pe cultura geek. WoUSO
  permite adăugarea de noi jocuri și oferă platforma necesară unui
  astfel de sistem extensibil (formule și monede dinamice, modul de
  scoring în core, clase utilizator/grup/joc extensibile, modul global
  de administrare a întrebărilor).

  Tehnologii: Python, Django. Tichete în proiectul
  [Redmine][wouso-redmine], iar codul se găsește pe [Github][wouso-cod].

[wouso]: https://wouso.rosedu.org/
[wouso-cod]:  https://github.com/rosedu/wouso
[wouso-redmine]: https://projects.rosedu.org/projects/wouso

* **ROSEdu People** este un mic director de persoane și activități pentru
  recunoașterea meritelor unei comunități. Proiectul e în faza
  incipientă, există câteva idei de funcționalități, iar direcțiile în
  care se poate extinde sunt nenumărate.

  Scris peste Django, prezintă cel mai bun loc de pornire pentru
  începători. Puteți arunca un ochi peste cod la [Github][rppl-github]
  sau peste demo la [link][rppl-link].

[rppl-github]: http://github.com/alexef/rosedu-people
[rppl-link]: http://swarm.cs.pub.ro/~alexef/rppl/.

