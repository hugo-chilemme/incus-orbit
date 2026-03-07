# Containers

## Liste

**Endpoint**

    GET /api/v1/containers

**Query parameters**

  | Paramètre | Description |
  |-----------|---------------------------------------------------|
  | `name`    | filtre par nom (partiel)                          |
  | `status`  | filtre par statut (`Running` / `Stopped`)         |
  | `type`    | filtre par type (`container` / `virtual-machine`) |
  | `profile` | filtre par profil (ex: `default`)                 |
  | `ip`      | filtre par adresse IP (partielle)                 |

**Fonctionnalités**

-   [x] lister les containers
-   [x] filtrer par nom
-   [x] filtrer par statut
-   [x] filtrer par profil
-   [x] filtrer par type
-   [x] filtrer par adresse IP

## Informations

**Endpoint**

	GET /api/v1/containers/:name

**Fonctionnalités**

-   [x] récupérer les informations d'un container
-   [x] récupérer l'état (Running / Stopped)
-   [x] récupérer l'adresse IP
-   [x] récupérer la configuration
-   [x] récupérer les devices

## Création

-   [ ] créer un container depuis une image
-   [ ] créer un container depuis un snapshot
-   [ ] créer un container avec un profil
-   [ ] créer un container avec configuration personnalisée

## Suppression

-   [ ] supprimer un container
-   [ ] supprimer un container avec force

## Autres actions

-   [ ] renommer un container
-   [ ] cloner un container

------------------------------------------------------------------------

# Lifecycle Container

-   [ ] démarrer un container
-   [ ] arrêter un container
-   [ ] redémarrer un container
-   [ ] forcer l'arrêt d'un container
-   [ ] mettre en pause un container
-   [ ] reprendre un container

------------------------------------------------------------------------

# Configuration Container

## Configuration

-   [ ] modifier une configuration
-   [ ] ajouter une configuration
-   [ ] supprimer une configuration

## Profils

-   [ ] ajouter un profil
-   [ ] retirer un profil
-   [ ] modifier les profils

## Devices

-   [ ] ajouter un device
-   [ ] supprimer un device
-   [ ] modifier un device

------------------------------------------------------------------------

# Snapshots

-   [ ] lister les snapshots
-   [ ] créer un snapshot
-   [ ] restaurer un snapshot
-   [ ] supprimer un snapshot
-   [ ] renommer un snapshot

------------------------------------------------------------------------

# Terminal / Exec

-   [ ] exécuter une commande dans le container
-   [ ] ouvrir un shell
-   [ ] exécuter un script

------------------------------------------------------------------------

# Gestion des fichiers

-   [ ] upload fichier
-   [ ] download fichier
-   [ ] supprimer fichier
-   [ ] créer dossier
-   [ ] modifier permissions

------------------------------------------------------------------------

# Monitoring

## Statistiques

-   [ ] utilisation CPU
-   [ ] utilisation RAM
-   [ ] utilisation réseau
-   [ ] utilisation disque

## État

-   [ ] état du container
-   [ ] PID du container
-   [ ] uptime du container

## Logs

-   [ ] logs container
-   [ ] logs erreur

------------------------------------------------------------------------

# Images

-   [ ] lister les images
-   [ ] importer une image
-   [ ] supprimer une image
-   [ ] exporter une image

------------------------------------------------------------------------

# Networks

-   [ ] lister les réseaux
-   [ ] voir un réseau
-   [ ] créer un réseau
-   [ ] supprimer un réseau

------------------------------------------------------------------------

# Storage

## Storage Pools

-   [ ] lister les pools
-   [ ] voir un pool
-   [ ] créer un pool
-   [ ] supprimer un pool

## Volumes

-   [ ] lister les volumes
-   [ ] créer un volume
-   [ ] supprimer un volume

------------------------------------------------------------------------

# Serveur

-   [ ] informations du serveur Incus
-   [ ] ressources CPU
-   [ ] ressources mémoire
-   [ ] stockage total

------------------------------------------------------------------------

# Events

-   [ ] écouter les événements du serveur
