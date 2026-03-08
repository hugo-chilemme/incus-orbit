# Auth

## Authentification
- [x] POST /auth/login
- [x] POST /auth/register
- [x] GET /auth/me


# Containers

## Liste
- [x] GET /containers
- [x] filtrer par nom
- [x] filtrer par statut
- [x] filtrer par profil
- [x] filtrer par type
- [x] filtrer par adresse IP

## Informations
- [x] GET /containers/:name
- [x] récupérer état
- [x] récupérer IP
- [x] récupérer config
- [x] récupérer devices

## Création
- [x] POST /containers
- [x] créer depuis image
- [x] appliquer profil
- [x] appliquer config custom

## Suppression
- [x] DELETE /containers/:name
- [x] suppression forcée


# Actions container
POST /containers/:name/action

- [x] start
- [x] stop
- [x] restart
- [x] force-stop
- [x] pause
- [x] resume
- [x] rename
- [x] clone
- [x] update-config
- [ ] update-devices


# Configuration

## Lire config
- [x] GET /containers/:name/config
- [x] filtrer par clé

## Modifier config
- [x] POST /containers/:name/config
- [x] modifier plusieurs clés

## Supprimer config
- [x] DELETE /containers/:name/config
- [x] supprimer plusieurs clés


# Profils

## Lire profils
- [x] GET /containers/:name/profiles

## Ajouter profil
- [x] POST /containers/:name/profiles

## Retirer profil
- [x] DELETE /containers/:name/profiles


# Devices
- [x] ajouter device
- [x] supprimer device
- [x] modifier device


# Snapshots
- [x] lister snapshots
- [x] créer snapshot
- [x] restaurer snapshot
- [x] supprimer snapshot
- [ ] renommer snapshot (not implemented in Incus API)


# Exec
- [x] exécuter commande
- [ ] ouvrir shell
- [ ] exécuter script


# Files
- [ ] upload fichier
- [ ] download fichier
- [ ] supprimer fichier
- [ ] créer dossier
- [ ] modifier permissions


# Monitoring

## State
- [x] état container
- [x] PID
- [x] uptime
- [x] CPU usage
- [x] RAM usage
- [x] network usage
- [ ] disk usage (bad implement in my side, need to be fixed)

## Logs
- [ ] logs container
- [ ] logs erreur


# Images
- [ ] lister images
- [ ] importer image
- [ ] supprimer image
- [ ] exporter image


# Networks
- [ ] lister réseaux
- [ ] voir réseau
- [ ] créer réseau
- [ ] supprimer réseau


# Storage

## Pools
- [ ] lister pools
- [ ] voir pool
- [ ] créer pool
- [ ] supprimer pool

## Volumes
- [ ] lister volumes
- [ ] créer volume
- [ ] supprimer volume


# Server
- [ ] infos serveur incus
- [ ] ressources CPU
- [ ] ressources RAM
- [ ] stockage total


# Events
- [ ] écouter événements