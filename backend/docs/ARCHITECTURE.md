# Automatic API Routing System

## Overview

This project implements an automatic API routing system designed to
eliminate manual route declarations and simplify backend architecture.

The system dynamically maps the file system to HTTP endpoints, inspired
by modern frameworks such as Next.js. It allows developers to build
scalable APIs with minimal configuration while maintaining a clear and
structured routing architecture.

Key objectives:

-   Zero manual route declaration
-   File-based API routing
-   Built-in API versioning
-   Hierarchical middleware support
-   Predictable and scalable API structure

------------------------------------------------------------------------

## File-Based Routing

Each folder represents a URL segment and each HTTP file automatically
becomes an endpoint.

Example mapping:

src/api/v1 -\> /api/v1 src/api/v1/auth/register/post.js -\> POST
/api/v1/auth/register src/api/v1/users/\[id\]/get.js -\> GET
/api/v1/users/:id

Dynamic parameters are defined using bracket notation:

\[id\] -\> :id

------------------------------------------------------------------------

## API Versioning

The system supports native API versioning through folder structure.

Example:

src/api/v1 -\> /api/v1 src/api/v2 -\> /api/v2

This allows multiple API versions to coexist without complex
configuration.

------------------------------------------------------------------------

## Hierarchical Middleware (Layout System)

Middleware can be applied automatically to route groups using a
`layout.js` file.

A layout applies to:

-   the current directory
-   all nested routes

Example:

src/api/v1/layout.js

applies middleware to:

/api/v1/\*

Another layout placed in a subfolder adds additional middleware:

src/api/v1/auth/layout.js

applies to:

/api/v1/auth/\*

Middleware inheritance is handled automatically by the loader.

------------------------------------------------------------------------

## Supported Route Files

Routes are defined by HTTP method filenames.

Supported methods:

get.js post.js put.js patch.js delete.js options.js head.js

Each file exports a request handler:

export default async (req, res) =\> { // route logic }

Legacy format is also supported for backward compatibility:

route.get.js route.post.js

------------------------------------------------------------------------

## Automatic Route Loader

The routing system is powered by an internal loader responsible for
building the API dynamically.

Responsibilities include:

-   Recursive scanning of the `src/api` directory
-   Automatic conversion of dynamic segments (`[id] -> :id`)
-   Middleware composition based on directory hierarchy
-   Dynamic route registration in Express

Routes are mounted automatically under:

/api

------------------------------------------------------------------------

## Application Bootstrapping

The application startup process is structured as follows:

src/app.js

-   Initializes the Express application
-   Loads the automatic routing system

src/server.js

-   Starts the HTTP server
-   Uses environment variable `PORT` (default: `3000`)

------------------------------------------------------------------------

## Design Philosophy

This architecture aims to provide:

-   predictable API structure
-   minimal configuration
-   scalable routing architecture
-   clear separation of concerns

The system allows developers to focus on business logic while the
framework handles routing, middleware inheritance, and API versioning
automatically.
