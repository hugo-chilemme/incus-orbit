# Backend Architecture

This backend provides the core infrastructure for the platform,
including API routing, infrastructure orchestration, authentication, and
system automation.

The architecture is designed to be modular, scalable, and easy to
maintain. It follows a file-based routing approach inspired by modern
frameworks while remaining fully compatible with Express.

------------------------------------------------------------------------

# Overview

The backend is responsible for:

-   API routing and request handling
-   infrastructure orchestration
-   authentication and authorization
-   system monitoring and management
-   integration with container infrastructure (Incus)

The system uses a dynamic routing loader that maps the filesystem
directly to HTTP endpoints, removing the need for manual route
declarations.

------------------------------------------------------------------------

# Key Features

-   File-based API routing
-   Automatic route discovery
-   Hierarchical middleware system
-   API versioning support
-   Infrastructure automation
-   Container orchestration integration
-   Modular service architecture

------------------------------------------------------------------------

# Technology Stack

Backend technologies used in this project:

-   Node.js
-   Express
-   Incus (container infrastructure)
-   JavaScript (ES modules)
-   REST API architecture

------------------------------------------------------------------------

# Project Structure

backend/

api/ v1/ layout.js auth/ register/ post.js users/ \[id\]/ get.js

core/ autoLoader.js

controllers/ services/ middlewares/ utils/

app.js server.js

------------------------------------------------------------------------

# Routing System

The backend uses an automatic routing system.

Each directory represents a URL segment, and each HTTP file becomes an
endpoint.

Example:

src/api/v1/auth/register/post.js

becomes

POST /api/v1/auth/register

Dynamic parameters are supported using bracket notation.

src/api/v1/users/\[id\]/get.js

becomes

GET /api/v1/users/:id

------------------------------------------------------------------------

# Middleware Layout System

Middleware can be applied to route groups using `layout.js`.

A layout file affects all routes inside its directory and nested
directories.

Example:

src/api/v1/layout.js

applies middleware to:

/api/v1/\*

Additional layouts can extend middleware behavior for sub-routes.

------------------------------------------------------------------------

# Automatic Route Loader

Routes are automatically loaded by the internal loader located in:

core/autoLoader.js

The loader performs:

-   recursive scanning of the API directory
-   dynamic parameter conversion
-   middleware inheritance
-   automatic route registration

Routes are mounted under:

/api

------------------------------------------------------------------------

# Application Startup

The backend startup process is organized as follows.

app.js

Initializes the Express application and loads all routes.

server.js

Starts the HTTP server using the configured environment port.

Default port:

3000

------------------------------------------------------------------------

# Infrastructure Integration

The backend communicates with the infrastructure layer to manage
containers and services.

Responsibilities include:

-   provisioning infrastructure resources
-   monitoring system status
-   executing infrastructure actions

------------------------------------------------------------------------

# Design Principles

The backend follows several architectural principles:

-   clear separation of concerns
-   predictable API structure
-   scalable routing architecture
-   minimal configuration

This approach allows developers to focus on business logic while the
system manages routing, middleware composition, and infrastructure
interaction.

------------------------------------------------------------------------

# Future Improvements

Planned improvements include:

-   role-based access control
-   advanced monitoring
-   billing integration
-   multi-node orchestration
-   improved infrastructure automation
