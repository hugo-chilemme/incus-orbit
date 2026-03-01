# Incus Orchestrator

Plateforme d'orchestration d'infrastructure cloud permettant de
provisionner et gérer des VPS en utilisant Incus.

## Présentation

Incus Orchestrator est une plateforme destinée aux développeurs
permettant de provisionner, gérer et superviser une infrastructure VPS
via une API et un tableau de bord web.

Le système automatise la création de conteneurs, la gestion du cycle de
vie des instances et les opérations d'infrastructure à l'aide d'Incus.

L'objectif de ce projet est de démontrer comment une plateforme
d'infrastructure moderne peut exposer des APIs simples et des interfaces
web pour gérer des serveurs virtuels.

Ce dépôt met en avant des compétences en architecture backend,
automatisation d'infrastructure et conception de plateformes cloud.

------------------------------------------------------------------------

## Fonctionnalités

-   Provisionnement automatique de VPS via des conteneurs Incus
-   API REST pour la gestion de l'infrastructure
-   Tableau de bord web pour contrôler le cycle de vie des VPS
-   Démarrage, arrêt, redémarrage et suppression des instances
-   Monitoring des ressources (CPU, RAM, disque)
-   Authentification sécurisée et gestion des utilisateurs
-   Scripts d'automatisation de l'infrastructure
-   Architecture modulaire adaptée aux environnements cloud

------------------------------------------------------------------------

## Architecture

Frontend (Next.js / React) \| v Backend API (Node.js / Express) \| v
Infrastructure (Conteneurs Incus)

Le backend communique directement avec l'API Incus pour créer et gérer
les conteneurs.

------------------------------------------------------------------------

## Structure du dépôt

incus-orchestrator

backend/ api/ controllers/ services/ routes/ infrastructure/ server.js

frontend/ app/ components/ services/ pages/

scripts/ provisioning/ deployment/

docs/ architecture.md api.md

docker-compose.yml README.md

------------------------------------------------------------------------

## Responsabilités du Backend

L'API backend gère :

-   l'orchestration de l'infrastructure
-   la gestion du cycle de vie des VPS
-   l'authentification et le contrôle d'accès
-   la collecte des statistiques et du monitoring
-   la communication avec le daemon Incus

Exemples d'API :

POST /vps/create POST /vps/:id/start POST /vps/:id/stop POST
/vps/:id/restart DELETE /vps/:id GET /vps/:id/stats

------------------------------------------------------------------------

## Frontend

Le tableau de bord permet aux utilisateurs de :

-   créer de nouveaux VPS
-   surveiller les ressources des serveurs
-   gérer les actions du cycle de vie
-   visualiser l'état de l'infrastructure

L'interface est conçue pour se rapprocher des panels utilisés par les
plateformes cloud modernes.

------------------------------------------------------------------------

## Infrastructure

La couche d'infrastructure utilise les conteneurs Incus pour fournir des
environnements VPS isolés.

Le processus de provisionnement inclut :

-   la création du conteneur
-   la configuration réseau
-   la configuration de l'accès SSH
-   l'initialisation du serveur

------------------------------------------------------------------------

## Objectifs du projet

Ce projet démontre des compétences pratiques en :

-   architecture de plateforme cloud
-   automatisation d'infrastructure
-   conception d'API backend
-   DevOps et orchestration de conteneurs
-   développement de plateformes SaaS full‑stack

------------------------------------------------------------------------

## Améliorations futures

Fonctionnalités prévues :

-   intégration de la facturation
-   orchestration multi‑nœuds
-   load balancing
-   autoscaling
-   gestion des rôles et permissions
-   monitoring avancé

------------------------------------------------------------------------

## Auteur

Hugo Chilemme\
Full‑Stack & Infrastructure Engineer
