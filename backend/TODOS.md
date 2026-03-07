# Containers

## Liste

**Endpoint**

    GET /api/v1/containers

**Description**
Récupère la liste des containers avec leurs informations de base. Permet de filtrer par différents critères.

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

**Response**

```json
{
  "status": true,
  "data": [
	{
	  "name": "my-container",
	  "status": "Running",
	  "type": "container",
	  "profile": "default",
	  "ip": "xx.xx.xx.xx"
	},
	...
  ]
}
```

## Informations

**Endpoint**

	GET /api/v1/containers/:name

**Description**
Récupère les informations détaillées d'un container spécifique.

**Fonctionnalités**

-   [x] récupérer les informations d'un container
-   [x] récupérer l'état (Running / Stopped)
-   [x] récupérer l'adresse IP
-   [x] récupérer la configuration
-   [x] récupérer les devices

**Response**

```json
{
  "status": true,
  "data": {
	"name": "my-container",
	"status": "Running",
	"type": "container",
	"profile": "default",
	"ip": "xx.xx.xx.xx",
	"config": { ... },
	"devices": { ... }
	... (autres infos)
  }
}
```

## Création

**Endpoint**

	POST /api/v1/containers

**Description**
Crée un nouveau container à partir d'une image ou d'un snapshot, avec un profil et une configuration personnalisée.

**Depracated**: la création à partir d'un snapshot est déplacée dans la section Snapshots.

**Body parameters**

  | Paramètre   | Description |
  |-------------|---------------------------------------------------|
  | `name`      | nom du container (ex: `my-container`)             |
  | `image`     | nom de l'image (ex: `ubuntu:20.04`)              |
  | `profile`    | nom du profil (ex: `default`)                    |
  | `config`     | configuration personnalisée (objet JSON)         |

**Fonctionnalités**

-   [x] créer un container depuis une image
-   [ ] créer un container depuis un snapshot (moved to snapshots)
-   [x] créer un container avec un profil
-   [x] créer un container avec configuration personnalisée

**Response**

```json
{
  "status": true,
  "data": {
	"name": "my-container",
	"status": "Stopped",
	"type": "container",
	"profile": "default",
	"ip": null,
	"config": { ... },
	"devices": { ... }
	... (autres infos)
  }
}
```

## Suppression

**Endpoint**

	DELETE /api/v1/containers/:name

**Description**
Supprime un container existant. Permet de forcer la suppression si le container est en cours d'exécution.

**Query parameters**

  | Paramètre | Description |
  |-----------|---------------------------------------------------|
  | `force`   | si `true`, force la suppression même si le container est en cours d'exécution |

**Fonctionnalités**

-   [x] supprimer un container
-   [x] supprimer un container avec force

**Response**

```json
{
  "status": true,
}
```

## Autres actions

**Endpoint**

	POST /api/v1/containers/:name/action

**Description**
Permet d'effectuer différentes actions sur un container (démarrer, arrêter, redémarrer, etc.) et de modifier sa configuration (renommer, cloner, etc.).

**Query parameters**

| Paramètre  | Description                                                                                                                                           |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `action`   | Action à effectuer : <br>• `start`<br>• `stop`<br>• `restart`<br>• `force-stop`<br>• `pause`<br>• `unpause`<br>• `rename`<br>• `clone`<br>• `update-config`<br>• `update-devices` |
| `params`  | paramètres supplémentaires pour l'action (ex: nouveau nom pour `rename`, configuration pour `update-config`, devices pour `update-devices`) |



**Fonctionnalités**

-   [ ] renommer un container
-   [ ] cloner un container
-   [ ] démarrer un container
-   [ ] arrêter un container
-   [ ] redémarrer un container
-   [ ] forcer l'arrêt d'un container
-   [ ] mettre en pause un container
-   [ ] reprendre un container
-   [ ] modifier la configuration d'un container
-   [ ] modifier les devices d'un container

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
