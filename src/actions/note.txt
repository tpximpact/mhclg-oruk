curl --location 'https://oruk-api-2a920f51d6bb.herokuapp.com/api/dashboard/submit' \
--header 'Content-Type: application/json' \
--data-raw '{
  "name": "Dave'\''s Services",
  "publisher": "Dave",
  "publisherUrl": "dave.co.uk",
  "description": "A feed of services published by Dave",
  "developer": "Dave",
  "developerUrl": "dave.com",
  "serviceUrl": "dave.com/api",
  "contactEmail": "dave@dave.co.uk",
  "acceptedLicense": true
}'