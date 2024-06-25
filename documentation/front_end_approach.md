Memorandum: Adopting Open Referral UK - Front end architecture and approach
Distribution: Matos, Catarina; O'Brien, Jay; Thacker, Mike; Unsworth, Ben
Author: Hilton,G (TPXImpact) guy.hilton@tpximpact.com
Date: 25 June, 2024

---

# Adopting Open Referral UK - Front end architecture and approach

## 1.0 Executive summary

- 1.1 This document describes changes proposed to the architecture of the user-facing websites.

- 1.2 A shared understanding of the implications and benefits is important. As these are prerequisite requirements, we need to commit to these, and if possible, escalate to client for sign-off.

- 1.3 Most of the existing online properties can be - and will benefit from being - consolidated into a common platform.

- 1.5 A static site build will be triggered - and tested and deployed if successful - automatically, whenever new content is committed to a git repository. This inverts the current arrangement, which combines human-initiated builds and demand-time information requests.

- 1.6 The proposed changes make the front end more maintainable, more reliable, more accessible, more robust, more performant and simpler.

- 1.7 Content and site appearance remain as-is modulo some minor essential accommodations. This is not a content or visual redesign.

## 2.0 Proposed approach

- 2.0.1 The existing online provision includes a discussion forum feature. This will remain As IS and is explicitly excluded and OUT OF SCOPE for everything that follows.

### 2.1 Code hosting

- 2.1.1 A single canonical git repository hosted on Github consolidates all front end code. (This supersedes several existing repositories).

- 2.1.2 The `main` branch is the single source of truth for publication. Development - including content updating as and if required  - is done in feature branches.

- 2.1.3 Development and content updating leverage the normal git workflows of branching, pull requests etc.

- 2.1.4 This enables publishing of complete - but separately encapsulated and private - iterations of the site *and its content* for preview, testing, approval and quality assurance.

### 2.2 Site hosting, continuous deployment and testing

- 2.2.1 During development and while TPX is responsible for the site, we will deploy to Netlify, and will use that service to provide automated builds, continuous deployment, parallel builds, hosting, security and backup. 

- 2.2.2 Netlify [https://www.netlify.com](https://www.netlify.com) is a fully-hosted service, with rich functionality, and enables fast and efficient working during development.

- 2.2.3 When the service is handed over, responsibility for all of this passes to the new party. They can remain using Netlify, with existing functionality, or migrate to their preferred host. Depending on their preferred arrangements, they may choose to implement the dev ops picture differently. There are alternative fully hosted services, or they can use their own infrastructure. 

- 2.2.4 The continuous deployment, testing, deployment and hosting are OUT OF SCOPE of TPX's deliverable - but we will provide a fully working end-to-end Netlify-based proof of concept.

- 2.2.5 The build-test-deployment process is triggered automatically when changes are pushed to the `main` branch. Only if the build succeeds is the live site replaced with the updated version.

- 2.2.6 As needed, other branches can be configured to publish eg staging or test builds automatically.

### 2.3 Code organisation

- 2.3.1 A **monorepo** approach is used, enabling us to maintain synchronised development and content without constraining technical architecture.

### 2.4 Content organisation

- 2.4.1 The existing content, which has diverse provenances, some hardcoded, some dynamic via Strapi (a content management technology), some the output of upstream tools, is standardised and consolidated into markdown files in the repository. 

- 2.4.2 Markdown is standard and portable and provides adequate separation of content and presentation without imposing any assumptions about hosting or authoring.

- 2.4.3 Some work (estimated at ≈ 2 days) will be required to extract and re-format existing content. 

- 2.4.4 **NB: NO changes to content are in scope of this work** Existing content will be migrated / ported verbatim to the new system.

### 2.5 Technology stack

- 2.5.1 The legacy front end site uses React via `create-react-app`, running under Node.js in a unix environment.

- 2.5.2 This will be replaced by a new site built on Next.js. This also runs under Node, in a unix environment.

- 2.5.3 Our Next.js site will use server side generation. This satisfies all our technical requirements without imposing a hosting burden, but notice that it also leaves the door open to leveraging more of the Next functionality to accommodate future or unanticipated requirements.

- 2.5.4 For compatibility with future hosting requirements, Next.js supports multiple hosting scenarios including self hosting on AWS, via Docker images etc.

- 2.5.5 Next.js is documented at [https://nextjs.org](https://nextjs.org). It is presently the leading and most commonly used React framework.

### 2.6 Consolidation

- 2.6.1 The existing front end services will be consolidated into one site (excluding the mailing list, which will continue to be hosted on Mailchimp and the discussion forum).

- 2.6.2 Specifically, the existing front end site, the  dashboard, the validator and the existing developer site will now all be moved to a single codebase and single deployment workflow.

### 2.7 Design and styling

- 2.7.1 ** Significant changes to design are OUT OF SCOPE. This is not a re-design. **

- 2.7.2 As the styling will be unified, made consistent and accessibility will be assessed and addressed, there will be inevitable minor visual changes, so expectations should be calibrated accordingly.

- 2.7.3 The styling across all the content and tools will be made consistent with the existing legacy https://openreferraluk.org. This will mean the developer site will change in appearance slightly to match. 

- 2.7.4 Only one minor design revision is anticipated: the site level navigation menu, which is presently single level will be minimally revised to allow more flexibility of number of items and better to show context. ie We will be adding a 'developer' section and its associated navigation.

- 2.7.5 It is important to be clear that what is proposed is neither a pixel-perfect clone, nor a re-imagining. It is the most simple and minimal possible application of the visual style already set by the current main site, mutatis mutandis, and accepting essential adaptations where these are unavoidable.

### 2.8 Validator and dashboard tools

- 2.8.1 The validator tool and dashboard are excluded from 2.7.1 - 2.7.5. These WILL be subject to a new design process, and will be redesigned appropriately, sympathetically to to the consistent site look and feel.

#### 2.8.2 Dashboard

- 2.8.2.1 The dashboard is presently a client side only application which requests a JSON document at page-load time. The web page then blocks until the data are available, and finally renders it in tabular format.

- 2.8.2.2 The current dashboard is thus constrained to performance which worsens (a) the more users it has (2) the more adopters of OR-UK sign up.

- 2.8.2.3 It is therefore important to re-architect this to be more scalable.

- 2.8.2.4 Under the new proposal, the remote dashboard service **which is not part of the front end project** and which is developed and hosted separately - will be amended so that rather than posting a JSON document over a web API, it will push the json document to the git repository whenever new data are required. The continuous deployment system will then build a new version of the static website - rendering the table server side.

- 2.8.2.5 This means that we can paginate the results server side without needing to complicate the API by adding pagination, making it possible to scale to much larger numbers of records.

- 2.8.2.6 We also decouple data publishing from the process of spidering the many remote services, so this can be scheduled and rescheduled however convenient to accommodate future demands.

- 2.8.2.7 A full history is preserved in the git repository

#### 2.8.2 Validator

- 2.8.2.1 Requirements for improvements to the validator are not yet complete. However it is likely that this will still require client side javascript. If so this will be the sole item of functionality with this requirement.

#### 2.8.3 Service packaging tool

- 2.8.3.1 No revisions to this are in scope. It is hoped that it will be portable to the new system but this remains to be clarified.

### 2.9 Information architecture

- 2.9.1 No changes to information architecture, site organisation, structure etc are presently proposed.

- 2.9.2 However, it should be noted both that the IA could, be improved, especially if we do end up adding additional content and that doing this is, from a development point of view, a very easy, minor, low-impact-low-risk job. Within the wider project, site IA might be a low hanging target for improvements to user experience.

### 2.10 Homepage

- 2.10.1 At present no changes to the homepage (excepting the navigation are proposed

- 2.10.2 We may at a later stage of the project find it aligns with wider project goals to make content, organisational or design changes to the homepage. 

### 2.11 Subdomains

- 2.11.1 Some tools are available at present on dedicated sub domains, eg https://validator.openreferraluk.org. 

- 2.11.2 It is presently unclear if this is a requirement. The specifics of a solution for this will depend on the eventual deployment scenario, but some combination of the dns hosting and web server configuration should be able to replicate most needs. 

## 3.0 Benefits

- 3.0.1 It is seldom advisable to make any but the most minimal possible interventions in a codebase, however in this case we believe it is justified. The existing site has some hallmarks of a 'technology zoo' and can be simplified considerably.

- 3.0.2 This is beneficial for service robustness but in particular is pragmatic given the requirement that the site be handed over for future maintenance. Consolidating the code and hosting requirements on on platform makes it easier to deliver to quality, easier to document and simpler to hand over. 

- 3.0.3 As the present validator front end  and dashboard do not share a codebase with the rest of the project, enforcing consistency makes these more robust against future requirements and de-risks the need to iterate on their visual design for acceptance or quality purposes. 

- 3.0.4 ie A small amount of up-front work to enforce consistency minimises subsequent work involved in innovating in the design of the improved tools.

- 3.0.5 Because the new architecture can be rendered server-side (with the sole exception of the validator - see 3.1), we can significantly improve the reliability, performance and accessibility of the site.

- 3.0.6 Similarly, we reduce server load on the dashboard API 

- 3.0.7 With all content now synchronised and version controlled, there is a full audit trail of the historical state of the site at any point.

- 3.0.8 With all content under version control, rollbacks, acceptance testing and quality assurance are all automatable. New possibilities - such as A/B testing of eg new content, tools etc become available.