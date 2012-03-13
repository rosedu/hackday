---
title: 24 martie
layout: arhiva
---

E timpul pentru un nou Hack Day! Încă lucrăm la lista de proiecte, dar
am stabilit ziua și ora: 24 martie, 14:00, în EG-106. Poți veni chiar
mai devreme, de la 13:00, când se termină [CDL][].

[CDL]: http://cdl.rosedu.org/2012/calendar

## Proiecte (listă în lucru)

* **[DEX online][]** este transpunerea pe internet a unor
  dicționare de prestigiu ale limbii române. El este creat și întreținut
  de un colectiv de voluntari.  Definițiile sunt preluate textual din
  sursele menționate. O parte din baza de definiții a DEX online este
  disponibilă gratuit sub licența publică generală GNU (GPL).

  Puteți vedea [instrucțiunile de instalare][dexonline-install] și o
  listă cu [task-uri propuse pentru hack day][dexonline-tasks].
  DEXonline rulează în PHP (idiorm, smarty) cu o bază de date MySQL.

[dex online]: http://dexonline.ro/
[dexonline-install]: http://wiki.dexonline.ro/wiki/AccesLaCodulSurs%C4%83
[dexonline-tasks]: http://wiki.dexonline.ro/report/20

* **[CensorMeNot][]**

[censormenot]: https://github.com/dserban/censormenot


* **[Apache HBase][hbase]** este o bază de date non-relațională,
  distribuită, complet consistentă, care permite accesul aleator, în
  timp real. Este bazat pe arhitectura BigTable, folosește un model de
  stocare orientat pe coloane, cu stocarea eficientă a seturilor de date
  sparse. HBase este bine integrat cu Apache Hadoop, permițând
  procesarea distribuită și paralelă a datelor cu MapReduce.

  HBase este construit deasupra unui sistem de fișiere distribuit (e.g.
  HDFS, MapR) folosind Apache Zookeeper ca sistem de coordonare.
  Tabelele sunt partiționate orizontal, pe baza cheilor, în regiuni, iar
  fiecare server din cluster (RegionServer) poate servi un număr
  arbitrar de regiuni, cu fail-over automat.

  HBase poate scala de la un server la mii de servere, fiind la ora
  actuală unul dintre cele mai scalabile sisteme de stocare distribuită
  a datelor. Printre companiile care folosesc HBase se numără: Adobe,
  EBay, Facebook, SalesForce, StumbleUpon, TrendMicro, Yahoo!, YFrog,
  etc - câteva dintre acestea având clustere cu capacități de peste 1PB.

  Manual: [HBase Book][]. Tehnologie: Java.

[hbase]: http://hbase.apache.org/
[hbase book]: http://hbase.apache.org/book/book.html
