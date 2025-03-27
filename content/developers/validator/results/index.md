---
modified: '2025-03-22T02:04:54.053Z'
---

## Understanding The Results

To Pass validation, for V3 & V1 of the schema, no issues can be found with the API responses of the basic endpoints.
The basic endpoints are those that are deemed vital for a feed to be useful.

The V3 basic endpoints are 
- `GET /` 
- `GET /services` 
- `GET /services/{id}`

The V1 basic endpoints 
- `GET /services` 
- `GET /services/{id}`

### Errors, Warnings, & Failing Validation 

Any issues found with a response from one of the basic endpoints will be labelled as an **ERROR** and the feed will fail validation.

Any issues found with any of the other endpoints will be marked as a **WARNING**. 
These may include issues which are the same as those labelled as errors but as the issue is not on one of the basic endpoints it is labelled with a lower severity.