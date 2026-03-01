# Incus Orchestrator

Cloud infrastructure orchestration platform for provisioning and
managing VPS instances using Incus.

## Overview

Incus Orchestrator is a developer platform designed to provision,
manage, and monitor VPS infrastructure through a simple API and web
dashboard. The system automates container provisioning, lifecycle
management, and infrastructure operations using Incus.

The objective of this project is to demonstrate how modern
infrastructure platforms can expose developer-friendly APIs and
interfaces to manage virtual servers.

This repository showcases experience in backend architecture,
infrastructure automation, and cloud platform design.

------------------------------------------------------------------------

## Features

-   Automated VPS provisioning using Incus containers
-   REST API for infrastructure management
-   Web dashboard for VPS lifecycle control
-   Start, stop, restart and delete instances
-   Resource monitoring (CPU, RAM, disk usage)
-   Secure authentication and user management
-   Infrastructure automation scripts
-   Modular architecture designed for cloud environments

------------------------------------------------------------------------

## Architecture

Frontend (Next.js / React) \| v Backend API (Node.js / Express) \| v
Infrastructure Layer (Incus Containers)

The backend communicates directly with the Incus API to provision and
manage containers.

------------------------------------------------------------------------

## Repository Structure

incus-orchestrator

backend/ api/ controllers/ services/ routes/ infrastructure/ server.js

frontend/ app/ components/ services/ pages/

scripts/ provisioning/ deployment/

docs/ architecture.md api.md

docker-compose.yml README.md

------------------------------------------------------------------------

## Backend Responsibilities

The backend API handles:

-   Infrastructure orchestration
-   VPS lifecycle management
-   Authentication and access control
-   Monitoring and statistics
-   Communication with the Incus daemon

Example API endpoints:

POST /vps/create POST /vps/:id/start POST /vps/:id/stop POST
/vps/:id/restart DELETE /vps/:id GET /vps/:id/stats

------------------------------------------------------------------------

## Frontend

The frontend dashboard provides a control interface allowing users to:

-   Provision new VPS instances
-   Monitor server resources
-   Manage lifecycle actions
-   View infrastructure status

The interface is designed to resemble modern cloud management platforms.

------------------------------------------------------------------------

## Infrastructure

The infrastructure layer relies on Incus containers to provide isolated
VPS environments.

Provisioning includes:

-   Container creation
-   Network configuration
-   SSH access configuration
-   Initial server setup

------------------------------------------------------------------------

## Goals

This project demonstrates practical experience in:

-   Cloud platform architecture
-   Infrastructure automation
-   Backend API design
-   DevOps and container orchestration
-   Full-stack SaaS platform development

------------------------------------------------------------------------

## Future Improvements

Planned features include:

-   Billing integration
-   Multi-node orchestration
-   Load balancing
-   Autoscaling
-   Role-based access control
-   Advanced monitoring

------------------------------------------------------------------------

## Author

Hugo Chilemme\
Full-Stack & Infrastructure Engineer
