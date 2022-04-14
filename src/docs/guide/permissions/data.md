# Autorisations des données

La gestion des autorisations des données peut se faire de la manière que pour les applications (cf. [voir ici](/guide/permissions/app)).

## Aperçu

La figure ci-dessous illustre l’exemple d’un agriculteur (qui met à disposition des données qu’il a créé lui-même et qui gère les autorisations d’accès à ses données).

![Image](/images/guide/permissions/data/permissions-data-overview.png)

Les lignes représentent :
* Liste les données que l’utilisateur a fournies via la plateforme (celles qui sont mises à disposition par des tiers et celles qu’il a lui-même ajoutées).
* S’ajoutent automatiquement lorsqu’on fournit de nouvelles données, de nouveaux applicatifs ou qu’un partenaire de la plateforme met à disposition un service qui peut fournir des données qui concernent l’utilisateur.
* Pour chaque donnée, la situation actuelle des autorisations.

Les colonnes représentent :
* En grisé, si autorisé par le système (par exemple, contre un payement).
* 3 grandes catégories (déjà détaillées précédemment) :
  1. Les autorisations gérées automatiquement par la plateforme. Par exemple, dans le cas de données mises à disposition contre une rémunération, une autorisation est accordée dès qu’un utilisateur a payé pour y accéder.
  2. Les autorisations gérées automatiquement par la plateforme via une liste d’autorisations accessible par webservice. Par exemple, dans le cas d’un développeur d’applications qui gère lui-même les payements, la liste des utilisateurs autorisés à utiliser son application est actualisée par lui-même et fournie à la plateforme via webservice.
  3. Les autorisations gérées manuellement par l’utilisateur, qui sont elles-mêmes subdivisées en deux catégories :
      * Les catégories que l’utilisateur peut créer.
      * Les catégories qui autorisent l’accès aux données pour les applications utilisées (l’utilisateur à la possibilité de supprimer à tout moment les autorisations accordées aux applications, mais un message d’alerte doit le prévenir qu’elles risquent de ne plus fonctionner correctement).

## Nouvelles autorisations

Un utilisateur a la possibilité de créer une nouvelle autorisation à un groupe ou un seul utilisateur, sans qu’il le demande. L'autorisation peut être associée à une date d'expiration.

![Image](/images/guide/permissions/data/permissions-data-add.png)

## Demandes

Cette page affiche la liste des demandes à traiter « Reçues ». Il peut s’agir :
* De demandes générées lors de l’ajout d’une donnée dans la section « Utiliser ».
* De demandes générées par un autre utilisateur (un conseillé de l’exploitation, un collègue fermier, etc.).

Les demandes sont groupées par utilisateur et données. Pour chaque demande, l’utilisateur a la possibilité de valider ou de refuser les autorisations.
* La validation d’autorisations à ce niveau est automatiquement répercutée dans le tableau synthétique.
* Possibilité de refuser toutes les demandes en cliquant sur le bouton :wastebasket:.
* Ensuite, toutes les demandes/modifications validées (ou refusées) sont archivées.

![Image](/images/guide/permissions/data/permissions-data-requests.png)

La page affiche également les demandes d'autorisations « Envoyées » à d'autres utilisateurs, avec la possibilité de les annuler.

## Historiques

Cette section affiche l'historique des toutes les autorisations groupées par utilisateur puis par donnée.

![Image](/images/guide/permissions/data/permissions-data-history.png)

![Image](/images/guide/permissions/data/permissions-data-history-detail.png)
