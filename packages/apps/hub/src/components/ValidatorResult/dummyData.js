export const dummyData = {
  "serviceUrl": "https://run.mocky.io/v3/984b4aa4-3b12-4c8d-a9ef-47e6f477f869",
  "allTestsPassed": false,
  "testsProfile": "HSDS-3.0-UK",
  "tests": [
    {
      "name": "API meta info - API & schema validation",
      "endpoint": "/",
      "description": "Does the base endpoint return meta information about the API, and does it adhere to the schema",
      "success": true,
      "issues": []
    },
    {
      "name": "Services list - schema validation",
      "endpoint": "/services",
      "description": "Does the services list endpoint return a paginated list of services in the correct schema",
      "success": false,
      "issues": [
        {
          "name": "required",
          "description": "A schema validation issue has been found",
          "message": "Required properties [\"id\",\"name\",\"status\"] are not present"
        }
      ]
    },
    {
      "name": "Service by id - schema validation",
      "endpoint": "/services/{id}",
      "description": "Does the service by id endpoint return a fully nested service in the correct schema",
      "success": false,
      "issues": [
        {
          "name": "required",
          "description": "A schema validation issue has been found",
          "message": "Required properties [\"id\",\"name\",\"status\"] are not present"
        }
      ]
    },
    {
      "name": "Taxonomies list - schema validation",
      "endpoint": "/taxonomies",
      "description": "Does the taxonomies list endpoint return a paginated list of taxonomies in the correct schema",
      "success": true,
      "issues": []
    },
    {
      "name": "Taxonomy by id - schema validation",
      "endpoint": "/taxonomies/{id}",
      "description": "Does the taxonomy by id endpoint return the full information of a taxonomy in the correct schema",
      "success": false,
      "issues": [
        {
          "name": "required",
          "description": "A schema validation issue has been found",
          "message": "Required properties [\"id\",\"name\",\"description\"] are not present"
        }
      ]
    },
    {
      "name": "Taxonomy terms list - schema validation",
      "endpoint": "/taxonomy_terms",
      "description": "Does the taxonomy terms list endpoint return a paginated list of taxonomy terms in the correct schema",
      "success": true,
      "issues": []
    },
    {
      "name": "Taxonomy terms list - schema validation",
      "endpoint": "/taxonomy_terms/{id}",
      "description": "Does the taxonomy term by id endpoint return the full information of a taxonomy term in the correct schema",
      "success": false,
      "issues": [
        {
          "name": "required",
          "description": "A schema validation issue has been found",
          "message": "Required properties [\"id\",\"name\",\"description\"] are not present"
        }
      ]
    },
    {
      "name": "Service at location list - schema validation",
      "endpoint": "/service_at_locations",
      "description": "Does the service at location list endpoint return a paginated list of services at locations in the correct schema",
      "success": false,
      "issues": [
        {
          "name": "required",
          "description": "A schema validation issue has been found",
          "message": "Required properties [\"id\"] are not present"
        }
      ]
    },
    {
      "name": "Service at location by id - schema validation",
      "endpoint": "/service_at_locations/{id}",
      "description": "Does the service at location by id endpoint return the full information of a service at location in the correct schema",
      "success": false,
      "issues": [
        {
          "name": "required",
          "description": "A schema validation issue has been found",
          "message": "Required properties [\"id\"] are not present"
        }
      ]
    }
  ]