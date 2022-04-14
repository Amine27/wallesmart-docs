# Autorisations des applications

La gestion des autorisations peut se faire de trois manières :
1. Les autorisations sont gérées par la plateforme automatiquement (Par exemple, dans le cas d’une application utilisable moyennant un payement effectué sur la plateforme : la
plateforme autorise automatiquement l’accès pour une période liée au montant du payement.);
2. Les autorisations sont gérées par la plateforme grâce à un webservice (Par exemple, dans le cas de Myawénet utilisable sur la plateforme, mais dont la facturation est gérée
par le service administratif : la plateforme récupère quotidiennement la liste des utilisateurs autorisés à accéder à l’application via un webservice fourni par Elevéo.);
3. Les autorisations sont gérées manuellement (Par exemple, dans le cas d’un agriculteur qui met à disposition ses données via la plateforme : l’utilisateur paramètre manuellement les autorisations.).

## Aperçu

La figure ci-dessous illustre l’exemple d’un agriculteur (qui met à disposition des applications qu’il a créé lui-même et qui gère les autorisations d’accès à ses données). La description du contenu tableau est la suivante :
  * :heavy_check_mark: : Autorisation validée
  * :x: : Autorisation refusée
  * :clock4: : Autorisation en attente
  * :heavy_minus_sign: : Autorisation partielle
  * :black_square_button: : Pas d'autorisation
  * :wastebasket: : Supprimer toutes les autorisations de cet utilisateur
  * :keycap_ten: : Nombre d'autorisations accordées automatiquement par la plateforme

![Image](/images/guide/permissions/apps/permissions-apps-overview.png)

Les lignes représentent :
* Liste les applications que l’utilisateur a fournies via la plateforme (celles qui sont mises à disposition par des tiers et celles qu’il a lui-même ajoutées).
* S’ajoutent automatiquement lorsqu’on fournit de nouvelles données, de nouveaux applicatifs ou qu’un partenaire de la plateforme met à disposition un service qui peut fournir des données qui concernent l’utilisateur.
* Pour chaque application, la situation actuelle des autorisations.
* L'utilisateur a la possibilité de masquer les sous-menus, de masquer / d’afficher tous les sous-menus.

Les colonnes représentent :
* En grisé, si autorisé par le système (par exemple, contre un payement).
* 3 grandes catégories (déjà détaillées précédemment) :
  1. Les autorisations gérées automatiquement par la plateforme. Par exemple, dans le cas d'applications mises à disposition contre une rémunération, une autorisation est accordée dès qu’un utilisateur a payé pour y accéder.
  2. Les autorisations gérées automatiquement par la plateforme via une liste d’autorisations accessible par webservice. Par exemple, dans le cas d’un développeur d’applications qui gère lui-même les payements, la liste des utilisateurs autorisés à utiliser son application est actualisée par lui-même et fournie à la plateforme via webservice.
  3. Les autorisations gérées manuellement par l’utilisateur, qui sont elles-mêmes subdivisées en deux catégories :
      * Les catégories que l’utilisateur peut créer.
      * Les catégories qui autorisent l’accès aux données pour les applications utilisées (l’utilisateur à la possibilité de supprimer à tout moment les autorisations accordées aux applications, mais un message d’alerte doit le prévenir qu’elles risquent de ne plus fonctionner correctement).
* L’utilisateur a la possibilité d’effectuer des modifications dans cette page.
* La validation (obligatoire) des modifications entraîne automatiquement la création d’une entrée dans la page « Historique » (si les modifications concernent plusieurs colonnes, cela entraîne automatiquement la création de plusieurs entrées dans la page « Historique »).

## Nouvelles autorisations

Un utilisateur a la possibilité de créer une nouvelle autorisation à un groupe ou un seul utilisateur, sans qu’il le demande. L'autorisation peut être associée à une date d'expiration.

![Image](/images/guide/permissions/apps/permissions-apps-add.png)

## Demandes

Cette page affiche la liste des demandes à traiter « Reçues ». Il peut s’agir :
* De demandes générées lors de l’ajout d’une application dans la section « Utiliser ».
* De demandes générées par un autre utilisateur (un conseillé de l’exploitation, un collègue fermier, etc.).

Les demandes sont groupées par utilisateur et application. Pour chaque demande, l’utilisateur a la possibilité de valider ou de refuser les autorisations.
* La validation d’autorisations à ce niveau est automatiquement répercutée dans le tableau synthétique.
* Possibilité de refuser toutes les demandes en cliquant sur le bouton :wastebasket:.
* Ensuite, toutes les demandes/modifications validées (ou refusées) sont archivées.

![Image](/images/guide/permissions/apps/permissions-apps-requests.png)

La page affiche également les demandes d'autorisations « Envoyées » à d'autres utilisateurs, avec la possibilité de les annuler.

## Historiques

Cette section affiche l'historique des toutes les autorisations groupées par utilisateur puis par application.

![Image](/images/guide/permissions/apps/permissions-apps-history.png)

![Image](/images/guide/permissions/apps/permissions-apps-history-detail.png)
