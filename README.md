# Open Referral UK

![Vercel Deploy](https://deploy-badge.vercel.app/vercel/mhclg-oruk)

## Overview

Open Referral UK (ORUK) is a comprehensive web platform and ecosystem for the Open Referral UK data standard - an open standard that provides a consistent way to publish, find, and use community services data. This makes it easier for people to find what they need and supports connected local services across the UK.

### Purpose and Features

This platform serves multiple audiences:

- **Local Authorities**: Resources, templates, and guides to support adoption of the ORUK standard, including business case templates, project initiation documents, and benefits calculators
- **Developers**: Technical documentation, API specifications, validation tools, and developer resources for implementing ORUK-compliant systems
- **Service Providers**: Information about publishing service data in ORUK format and joining the verified feed directory
- **Community Members**: Access to case studies, forums, and collaborative tools for sharing knowledge and best practices

**Key Features:**

- **API Documentation**: Complete OpenAPI specifications for ORUK data standard versions
- **Validator Tool**: Real-time validation of ORUK API feeds for compliance checking
- **Dashboard**: Monitoring of verified feed availability and health status
- **Data Model Explorer**: Interactive documentation of the ORUK schema
- **Content Management**: Markdown-based content system with frontmatter support
- **Case Studies**: Real-world implementation examples from councils and organizations across the UK

## Technical Architecture

### Technology Stack

This is a modern Next.js 16 application built with:

- **Framework**: Next.js 16 with App Router and React 19
- **Language**: TypeScript 5.9 with strict type checking
- **Styling**: CSS Modules for component-scoped styles
- **Database**: MongoDB for service feed tracking and dashboard data
- **Testing**: Jest for unit tests, Playwright for end-to-end testing
- **Deployment**: Vercel with continuous deployment
- **Code Quality**: ESLint, Prettier, and TypeScript compiler checks

### Architecture Components

#### Frontend
- **Server Components**: Leverages Next.js 16 server components for optimal performance
- **Dynamic Routing**: File-based routing with dynamic segments for content pages
- **Markdown Processing**: Custom markdown rendering with `gray-matter` for frontmatter and `marked` for parsing
- **Component Library**: Reusable React components for common UI patterns (buttons, banners, forms, documentation viewers)

#### Backend Services
- **MongoDB Integration**: Service repository pattern for data access with Zod schema validation
- **API Proxy**: Server-side proxy for external API validation and dashboard data fetching
- **Server Actions**: Next.js server actions for form handling and data mutations
- **Content Loading**: Dynamic content loading from filesystem with versioning support

#### Developer Tools
- **Validator**: POST endpoint integration with external validation service for ORUK API compliance
- **Dashboard**: Real-time monitoring of registered service feeds with status tracking
- **API Explorer**: Interactive API documentation with request/response examples
- **Schema Browser**: Navigable data model documentation with relationship visualization

#### Key Directories
```
src/
├── app/              # Next.js app router pages
├── components/       # Reusable React components
├── lib/             # MongoDB client and utilities
├── models/          # Zod schemas for data validation
├── repositories/    # Data access layer
├── specifications/  # OpenAPI specs for different versions
├── utilities/       # Helper functions and utilities
└── e2e/             # Playwright end-to-end tests

content/             # Markdown content files
├── about/           # About pages
├── adopt/           # Council adoption resources
├── case-studies/    # Implementation case studies
├── community/       # Community information
├── developers/      # Technical documentation
└── info/            # Site information pages
```

## Community and Contribution

Open Referral UK is built on the foundation of the international [Open Referral](https://openreferral.org/) initiative and the Human Services Data Specification (HSDS).

### Get Involved

- **Community Forum**: Join discussions, ask questions, and share insights at [forum.openreferraluk.org](https://forum.openreferraluk.org/)
- **International Forum**: Participate in global Open Referral discussions at [forum.openreferral.org](https://forum.openreferral.org/)
- **GitHub Issues**: Report bugs, request features, and discuss technical matters on our [GitHub issue tracker](https://github.com/OpenReferralUK/human-services/issues)
- **Code Repository**: Contribute to the codebase via our public repositories:
  - [Frontend Repository](https://github.com/tpximpact/mhclg-oruk)
  - [API Repository](https://github.com/tpximpact/OpenReferralApi)

### Attribution

This project builds upon the excellent work of the international [Open Referral community](https://openreferral.org/) and the Human Services Data Specification (HSDS). We acknowledge and thank all contributors to the global Open Referral initiative.

Our preferred form of attribution is: _"Human Services Data Specification UK: an Open Referral UK resource (https://openreferraluk.org/)"_

The standard originates with and the Open Referral UK project is built upon the international Human Services Data Specification: an Open Referral resource (https://openreferral.org/)

## License

This project uses dual licensing:

### Content and Documentation
The Human Services Data Specification UK (HSDS-UK) and associated documentation are licensed under the **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)** license.

- Full license text: https://creativecommons.org/licenses/by-sa/4.0/
- See [LICENSE](LICENSE) file for complete terms

Unless otherwise stated, contributions are copyright of the Open Referral UK project.

### Source Code
The application source code in this repository is available under the **BSD 3-Clause License** terms. This allows you to:

- Use the code commercially
- Modify and distribute
- Use privately
- Include in proprietary software (with attribution)

See the repository license file for full BSD 3-Clause terms.

## Development

### Getting Started

1. Clone the repository
2. Install dependencies: `yarn install`
3. Set up environment variables (copy `.env.example` to `.env.local`)
4. Run development server: `yarn dev`
5. Open [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn test` - Run Jest unit tests
- `yarn test:watch` - Run tests in watch mode
- `yarn e2e` - Run Playwright end-to-end tests
- `yarn lint` - Lint and fix code with ESLint
- `yarn tidy` - Format code with Prettier

### Environment Variables

Required environment variables:
- `MONGODB_URI` - MongoDB connection string
- `MONGODB_DB` - MongoDB database name
- `VALIDATOR_ENDPOINT` - External validator service endpoint
- `DASHBOARD_DETAILS_ENDPOINT` - Dashboard data service endpoint

For full documentation, see [the wiki](https://github.com/tpximpact/mhclg-oruk/wiki)
