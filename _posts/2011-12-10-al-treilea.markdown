---
title: 10 decembrie
layout: arhiva
---

Al treilea hack day vine cu mai multe proiecte! Avem Python, PHP și
Java, pe gustul fiecăruia. Ne întâlnim în EG-106 (detalii pe [pagina de
descriere](/descriere.html)), la ora 13:00, după
[CDL](http://cdl.rosedu.org/2011-fall/).

* Îmbunătățiri la DEXonline
* Hadoop și Hbase


## Proiecte

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
[dexonline-tasks]: http://wiki.dexonline.ro/wiki/ROSEdu


* **[WoUSO][]** (World of USO) este un joc online text, conceput ca
  instrument adițional de curs (USO înseamnă Utilizarea Sistemelor de
  Operare); modulele de joc se bazează pe de o parte pe cunoașterea
  materiei (utilizare Linux) și pe de altă parte pe cultura geek. WoUSO
  permite adăugarea de noi jocuri și oferă platforma necesară unui
  astfel de sistem extensibil (formule și monede dinamice, modul de
  scoring în core, clase utilizator/grup/joc extensibile, modul global
  de administrare a întrebărilor).

  Tehnologii: Python, Django. Tichete în proiectul
  [redmine](https://projects.rosedu.org/projects/wouso).

[wouso]: https://wouso.rosedu.org/


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

  Manual: [HBase Book][]. Tehnologie: Java. Task-uri posibile: tichetele
  [4657 (Improve the efficiency of our MR jobs with a few
  configurations)](https://issues.apache.org/jira/browse/HBASE-4657),
  [3936 (Incremental load
  HFiles)](https://issues.apache.org/jira/browse/HBASE-3936),
  [4030 (FileNotFound exception in Incremental load
  HFOF)](https://issues.apache.org/jira/browse/HBASE-4030),
  [4557 (better Unknown scanner
  exception)](https://issues.apache.org/jira/browse/HBASE-4557),
  [4122 (improve hbck tool to fix .META. hole
  issue)](https://issues.apache.org/jira/browse/HBASE-4122).

[hbase]: http://hbase.apache.org/
[hbase book]: http://hbase.apache.org/book/book.html
