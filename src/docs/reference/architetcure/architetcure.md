# Architecture système

Dans cette section, nous décrivons l'architecture de la plateforme WALLeSmart. Nous adaptons une architecture **Lambda** pour implémenter notre système. Notre choix est justifié par le fait que l'analyse batch et temps réel sont différentes dans notre cas. Ainsi, nous utilisons des outils distincts pour chaque tâche. De plus, l'architecture Lambda garantit une évolutivité linéaire et une tolérance aux pannes contre les échecs matérielles tout en améliorant considérablement les performances. L'implémentation de notre système est composée des trois couches Lambda, le **batch**, la **vitesse** et la couche de **service**. Les outils utilisés dans notre implémentation sont choisis avec soin en fonction de plusieurs critères : sont open source, évolutifs, distribués, extensibles et éprouvés dans les environnements en production. Dans les sections suivantes, nous présenterons les couches de notre architecture.

## Architecture Lambda

L'architecture Lambda décrit une architecture de traitement de données en temps réel générique, évolutive et tolérante aux pannes. Elle a deux branches (1) pour le traitement par batch et (2) en temps réel. Comme le montre la figure, les données sont fournies aux deux branches. Dans la couche *batch*, les données sont ajoutées à une zone de stockage, appelée jeu de données *maître*. Habituellement, ces données sont traitées ultérieurement à l'aide d'un outil de traitement par lots tel que Apache Hadoop, ce qui donne des vues batch. Dans la couche de *vitesse*, les données sont traitées en temps réel à l'aide d'un outil de traitement de flux tel que Apache Storm, ce qui se traduit par une vue incrémentielle. Étant donné que le traitement d'ensembles de données volumineux dans la couche batch prend beaucoup de temps, les résultats ne sont généralement pas à jour. La couche de vitesse est utilisée pour combler cet écart en interrogeant les données les plus récentes. Enfin, la couche de service fusionne les vues des couches ci-dessus, dans lesquelles l'utilisateur final peut envoyer ses requêtes.

![Image](/images/reference/lambda.png)

### 1. Jeu de données principal

Les données circulant dans la plateforme passent par plusieurs étapes :

Premièrement, les données proviennent de deux sources principales (i) les fermes laitières et (ii) les observations des stations météorologiques. Les données entrantes peuvent être dans divers formats, tels que des fichiers XML, JSON ou XLS reçus de différentes manières, comme un service Web, une pièce jointe d'un e-mail ou un serveur MQTT, qui dépendent tous du fabricant du capteur utilisé. Ensuite, les données sont transmises à notre plateforme cloud via différents protocoles réseau, tels que Wi-Fi, 3G/4G ou LoRa. Nous utilisons EMQ X comme agent de messages MQTT.

Deuxièmement, lorsque les données arrivent sur notre plateforme, elles seront traitées par un outil d'ingestion de données chargé de capturer et de stocker les messages en temps réel à consommer par un consommateur de traitement par flux/batch. Dans notre solution, nous utilisons Apache Kafka comme outil d'ingestion de données. Il peut évoluer pour gérer des millions de messages par seconde.

Troisièmement, et après avoir capturé les messages en temps réel, la plateforme les traite pour acquérir des connaissances sur les données. Enfin, les outils de stockage sont utilisés comme sortie pour capturer des données en temps réel et par batch à des fins d'archivage ou de traitement ultérieur. Dans notre architecture, nous utilisons Apache Cassandra et Redis pour NoSQL, et PostgreSQL pour les données relationnelles.

### 2. Couche de batch

Dans le cas du traitement par batch, notre solution traite les données à l'aide de tâches par batch de longue durée pour filtrer, agréger et préparer les données pour l'analyse. À cet égard, nous utilisons Apache Hadoop, qui permet un traitement distribué de grands ensembles de données sur des grappes d'ordinateurs à l'aide du modèle de programmation MapReduce. MapReduce permet au système de calculer les vues par lots en fonction des trois étapes (Map, Shuffle, Reduce) en parallèle afin d'améliorer considérablement les performances. Nous utilisons également Apache Spark pour l'analyse par batch plus fine.

### 3. Couche de vitesse

Dans le cas du traitement en temps réel, notre solution utilise Apache Storm, qui est un framework à faible latence qui utilise une topologie de *spouts* et de *bolts* pour consommer, traiter et produire les résultats à partir de sources de données de flux en temps réel. Storm s'exécute en mémoire et est donc capable de traiter de gros volumes de données à une vitesse très rapide.

### 4. Couche de service

La couche de vitesse aide à manipuler WALLeSmart et à fournir des informations sur les données grâce à l'analyse, au reporting et à la visualisation en temps réel. Notre plateforme fournit une application Web développée avec Node.js, qui est un moteur d'exécution basé sur le moteur JavaScript V8 de Google pour créer facilement des applications clouds rapides et évolutives. Les données des fermes sont tracées sur des cartes interactives à l'aide d'OpenStreetMap et rendues dans des graphiques interactifs à l'aide de la bibliothèque Chart.js. Pour aider les chercheurs à accéder aux fermes et aux données météorologiques pour une analyse et une modélisation plus poussées, nous fournissons une API Web. Nous utilisons le langage de requête GraphQL et RESTful pour répondre aux requêtes API. GraphQL fournit une description complète des données dans l'API et donne aux utilisateurs le pouvoir de demander exactement ce dont ils ont besoin. De plus, notre application possède de nombreuses autres fonctionnalités telles que la vue du tableau de bord, la gestion des utilisateurs, la gestion des rôles et des autorisations, la planification des tâches par batch et en temps réel, la gestion des jetons d'accès, les e-mails, les notifications, etc.
