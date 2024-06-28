# Steps to adopting the standard

## Step 1 Understand the case for using the standard

Explore what the [Open Referral UK data standard](/about) is and the benefits of adopting the standard for your organisation or the partners you work with. 

You can find out information on this site and join our expanding [community](/community) to get support both before and during the process of adopting the standard.

See [Why adopt the standard?](/about#why) You can share this with people in your organisation to help explain what the standard is and the case for adopting the standard. 

## Step 2 Assess the current situation - what is the opportunity for your organisation?

### Local councils

Often local councils already have several directories. There is an opportunity to: 
- merge directories
- take in several feeds from others increasing the pool of information and data
- have one directory and make this directory interoperable (it can be used among many different organisations and by many software applications)

### Local hubs

Health, community and voluntary organisations, local councils and other public sector organisations can create partnership hubs to share services information. By working across multiple sectors this can mean, for example, that a person presenting in a health context with a health problem can be referred to a community activity which would benefit them.

### All organisations

There is an opportunity to extend the reach of service information and avoid having to enter the same information in many places. For example, CAST, which helps organisations use digital for social good, is developing a directory in which charities can record their services so the data can be used by everyone who can read from the standard format.

Existing feeds and open data dumps (large amounts of data that are moved from one computer system, file, or device to another) can be transformed into the Open Referral UK format. They can then take advantage of tools built around this structure. 

There is also an opportunity for the organisations that provide data dumps or feeds and can see the advantages of transforming them to the standard format, for example the Care Quality Commission.
These transformations can be carried out by the publishers of the data or by third parties on existing open data feeds.

## Step 3 Procure according to the standard

Commissioners and directors of services will need to work closely with their procurement team. As part of the procurement process your organisation needs to put in place formal arrangements for the supply of: 
- a services directory
- a service finder or finders
- data collection and maintenance services

You should be able to change any one of the above without impacting the others. You should define the 3 elements (services directory, service finder, data collection and maintenance services) independently and with the standard in mind. This is regardless of whether these are bought from one supplier or several, or they are supplied in-house.

### Procuring a services directory

To get a service directory that supports the standard you need to either:
- procure a new compliant directory
- have an existing supplier make its directory compliant within a given timescale, such as 12 months
- get a supplier who already supports the standard to switch on its Open Referral API feed for your directory. You may find your supplier already supports the standard for some of its other clients

You need to specify the following with the supplier of your service directory software. The software must:
- return data in the JSON format of the standard
- populate all the mandatory fields, plus any additional fields needed to meet your local requirement as defined by the standard
- provide an open API feed that, at a minimum, supports the /services and /services{id} web methods documents in the Open Referral UK [developer pages](/developer)

Your supplier should 
- advise what additional web methods are supported
- advise what additional fields are populated

You can check the API feeds are compliant with the standard against the [Open Referral UK validator](/developer/tools/validator). 

Our [dashboard](/developer/tools/dashboard) shows the level of compliance of each data feed with Open Referral UK. 

Any concerns over Distributed Denial Of Service can be addressed by reasonable throttling of API feeds (such as to 100 calls per minute from a single location) but they do not justify limiting who can access the feeds.

### Procuring a service finder or finders

A service finder is a piece of software that surfaces the content of a directory so someone such as an end user or frontline worker can find and process services information. Such software reads the output of a service directory API feed. You may purchase different service finders and other tools that all read from the same feed.

You need to specify with the supplier of your service finder software that it must:
- read data from any Open Referral UK compliant data feed
- read the API in real time, or take routine extracts of the data at specified intervals to process within the service finder

The supplier should
- specify which Open Referral UK web methods and parameters the software relies on to operate
- specify which data fields from the standard data structure must be populated and which it can read
- confirm the terms for accommodating changes to the API feed over time, such as the population of more fields

### Procuring service data collection and maintenance

The process of collecting and maintaining data is separate from the provision of a service directory. Although the data company will need to work with your procured service directory application.

Specify with the supplier of your service data collection and maintenance that it must:
- collect data about services, and each service provider that delivers it, as a separate data entity
- populate data entities and their fields from the Open Referral UK data structure to meet your needs. You should say which data you require
- make sure no data used to populate fields within the Open Referral UK data structure is subject to any Data Protection restrictions on how it can be reused
- indicate the percentage completeness of data to be achieved (such as, 25% of service records will have associate fees information; 100% of services will have at least one service taxonomy term)
- verify the correctness of data for each service at a specified maximum interval, normally 3 months
- indicate for what proportion of service records it will delegate maintenance to the service operator or a named third party
- confirm that ownership of the data rests with you and you have the right to share it publicly for non-commercial and commercial use

A sample agreement for the maintenance of data within a directory of services is here in [Open Document Text](https://github.com/OpenReferralUK/human-services/blob/master/Resources/Sample%20agreement%20for%20maintenance%20of%20a%20directory%20of%20services.odt?raw=true) and [PDF](https://github.com/OpenReferralUK/human-services/raw/master/Resources/Sample%20agreement%20for%20maintenance%20of%20a%20directory%20of%20services.pdf) formats.

## Step 4 Build, develop and test

Once procurement is completed and a contract is signed, developers will need to work with the suppliers to build the platform, test and release.

See the Open Referral UK [developer pages](/developer) for detailed documentation and tools.  Use the Open Referral UK tools to verify API feeds, the data structure and the richness of the data populated. You will need to verify the deliverables against the requirements listed in the procurement section. 

## Step 5 Launch the service

After the standard is launched it is important to continue to monitor and maintain the service. 

## Step 6 Monitor and maintain

Once the standard is implemented there will need to be processes in place to:
- regularly monitor and assess the quality and accuracy of the data
- promote compliance with the approved data standard