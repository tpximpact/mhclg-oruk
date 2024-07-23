import { NamedMarkdownPage } from '@/components/NamedMarkdownPage'
import { Masthead } from '@/components/Masthead'
import { PageMargin } from '@tpx/PageMargin'
import { Dashboard } from '@oruk/Dashboard'

export default function Home() {
	return (
		<div>
			<NamedMarkdownPage name='dashboard' />
			{/*<Dashboard />*/}
			<PageMargin>
				<Placeholder />
			</PageMargin>
		</div>
	)
}

const Placeholder = () => (
	<table className='feeds'>
		<thead>
			<tr>
				<th scope='col'>
					<span className='with-help'>
						Organisation{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>Name of the organisation publishing services data</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Developer{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>Name of the organisation developing the data feed</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Endpoint up{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>Open API feed is live</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Services feed{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>The /services web method returns a list of services in the correct format</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Service &#123;id&#125; feed{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>
										The /services/&#123;id&#125; web method returns details of a randomly picked
										service in the correct format
									</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Searchable{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>
										The /services web method accepts filter parameters for keyword, proximity and
										date/time
									</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Last checked{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>When we last checked the feed</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Summary{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>Text describing the feed</p>
								</section>
							</span>
						</span>
					</span>
				</th>
				<th scope='col'>
					<span className='with-help'>
						Explore{' '}
						<span className='help' tabindex='0'>
							<span className='help-text'>
								<section className=''>
									<p>Link to the API Query tool for the feed</p>
								</section>
							</span>
						</span>
					</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<a href='https://www.bristol.gov.uk' target='_blank' rel='noopener noreferrer'>
						Bristol Council
					</a>
				</td>
				<td>
					<a
						href='https://www.placecube.com/platforms/open-place-directory/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Placecube
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://bristol.openplace.directory/o/ServiceDirectoryService/v2/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://bristol.openplace.directory/o/ServiceDirectoryService/v2/services/d3a1e546-811f-cbba-baa0-7f65558ccd8f'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<span>Yes</span>
						<div className='message'>
							<ul>
								<li>Age: Yes</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:07 (took: 8 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog1content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog1content'>
								Services for Brisol and South Gloucestershire service finders
							</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://bristol.openplace.directory/o/ServiceDirectoryService/v2'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://bristol.openplace.directory/o/ServiceDirectoryService/v2'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://www.buckinghamshire.gov.uk/' target='_blank' rel='noopener noreferrer'>
						Buckinghamshire Council
					</a>
				</td>
				<td>
					<a href='https://wearefuturegov.com/' target='_blank' rel='noopener noreferrer'>
						FutureGov
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://api.familyinfo.buckinghamshire.gov.uk/api/v1/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://api.familyinfo.buckinghamshire.gov.uk/api/v1/services/1371'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='partial-checked ' tabindex='0'>
						<span>Partial</span>
						<div className='message'>
							<ul>
								<li>Age: Could not run Age Test test due to lack of data.</li>
								<li>Postcode: Could not run Postcode Search test due to lack of data.</li>
								<li>Taxonomy: Could not run Taxonomy Test test due to lack of data.</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 3 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog2content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog2content'>Buckinghamshire Family Information Service</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://api.familyinfo.buckinghamshire.gov.uk/api/v1'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://api.familyinfo.buckinghamshire.gov.uk/api/v1'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://www.cqc.org.uk' target='_blank' rel='noopener noreferrer'>
						Care Quality Commission
					</a>
				</td>
				<td>
					<a
						href='https://github.com/OpenReferralUK/human-services/tree/master/Utilities/CQCImport'
						target='_blank'
						rel='noopener noreferrer'
					>
						CQC/ORUK
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://api.porism.com/ServiceDirectoryServiceCQC/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://api.porism.com/ServiceDirectoryServiceCQC/services/6a5273c6-f741-41f1-a0e9-8e62751df6f2'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='partial-checked ' tabindex='0'>
						<span>Partial</span>
						<div className='message'>
							<ul>
								<li>Age: Could not run Age Test test due to lack of data.</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Could not run Time Search Test test due to lack of data.</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 67 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog3content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog3content'>
								Open source transformation run daily from Care Quality Commission locations feed
								from https://api.cqc.org.uk/public/v1/locations/ into an instance of the open source
								directory
							</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://api.porism.com/ServiceDirectoryServiceCQC'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://api.porism.com/ServiceDirectoryServiceCQC'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://www.cumbria.gov.uk/' target='_blank' rel='noopener noreferrer'>
						Cumbria Council
					</a>
				</td>
				<td>
					<a href='https://localgovdrupal.org/' target='_blank' rel='noopener noreferrer'>
						LG Drupal
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<a
							href='https://openreferral.localgovdrupal.org/openreferral/v1/services'
							target='_blank'
							rel='noreferrer'
						>
							No
						</a>
						<div className='message'>
							A paginatable service method is not present. Of the form /services?page=&#123;nn&#125;
						</div>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<span>No</span>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<span>No</span>
						<div className='message'>
							<ul>
								<li>Age: Could not run Age Test test due to lack of data.</li>
								<li>Postcode: Could not run Postcode Search test due to lack of data.</li>
								<li>Taxonomy: Could not run Taxonomy Test test due to lack of data.</li>
								<li>Text: Could not run Text Test test due to lack of data.</li>
								<li>Time: Could not run Time Search Test test due to lack of data.</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 1.43 seconds)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog4content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog4content'>
								Sample directory from the open source LocalGov Drupal project. See
								https://deploy-preview-55--trusting-noyce-aebebc.netlify.app/blog/openreferral.html
							</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://openreferral.localgovdrupal.org/openreferral/v1'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://openreferral.localgovdrupal.org/openreferral/v1'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://www.elmbridge.gov.uk' target='_blank' rel='noopener noreferrer'>
						Elmbridge Council
					</a>
				</td>
				<td>
					<a
						href='https://www.placecube.com/platforms/open-place-directory/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Placecube
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://elmbridge.openplace.directory/o/ServiceDirectoryService/v2/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://elmbridge.openplace.directory/o/ServiceDirectoryService/v2/services/b1926746-c2bc-4904-5034-2b6c2cc313fa'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<span>Yes</span>
						<div className='message'>
							<ul>
								<li>Age: Yes</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 4 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog5content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog5content'>Live Elmbridge Council services data</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://elmbridge.openplace.directory/o/ServiceDirectoryService/v2'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://elmbridge.openplace.directory/o/ServiceDirectoryService/v2'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='http://www.hull.gov.uk' target='_blank' rel='noopener noreferrer'>
						Hull City Council
					</a>
				</td>
				<td>
					<a href='http://www.peopleplaceslives.co.uk/' target='_blank' rel='noopener noreferrer'>
						People Places Lives
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<a href='https://lgaapi.connecttosupport.org/services' target='_blank' rel='noreferrer'>
							No
						</a>
						<div className='message'>
							Missing search method paginaton metadata at the begining of the JSON payload.
							Required: "totalElements"; "totalPages". It is case sensitive, and should be in the
							following format:
							&#123;"totalElements":nn,"totalPages":nn,"number":nn,"size":nn,"first":bb,"last":bb","content":[&#123;&#125;,&#123;&#125;]...
						</div>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://lgaapi.connecttosupport.org/services/f81ac542-32d3-49b4-a83d-ab5200fed93e'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='partial-checked ' tabindex='0'>
						<span>Partial</span>
						<div className='message'>
							<ul>
								<li>Age: Could not run Age Test test due to lack of data.</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>
									Text: Text Test failed. When tested using
									/services?text=Wishes+Care+and+Support+Yorkshire.
								</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 28.22 seconds)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog6content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog6content'>Live Hull City Council services data</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://lgaapi.connecttosupport.org'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://lgaapi.connecttosupport.org'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://mybestlife.app/' target='_blank' rel='noopener noreferrer'>
						My Best Life (NPC)
					</a>
				</td>
				<td>
					<a href='https://www.neontribe.co.uk/' target='_blank' rel='noopener noreferrer'>
						neontribe
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<a href='https://mybestlife.app/api//services' target='_blank' rel='noreferrer'>
							No
						</a>
						<div className='message'>
							A paginatable service method is not present. Of the form /services?page=&#123;nn&#125;
						</div>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<span>No</span>
					</div>
				</td>
				<td>
					<div className='unchecked ' tabindex='0'>
						<span>No</span>
						<div className='message'>
							<ul>
								<li>Age: Could not run Age Test test due to lack of data.</li>
								<li>Postcode: Could not run Postcode Search test due to lack of data.</li>
								<li>Taxonomy: Could not run Taxonomy Test test due to lack of data.</li>
								<li>Text: Could not run Text Test test due to lack of data.</li>
								<li>Time: Could not run Time Search Test test due to lack of data.</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 23.75 seconds)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog7content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog7content'>
								Sample dataset for Lambeth from the open-source My Best Life project.
							</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://mybestlife.app/api/'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://mybestlife.app/api/'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://www.northlincs.gov.uk/' target='_blank' rel='noopener noreferrer'>
						North Lincolnshire Council
					</a>
				</td>
				<td>
					<a
						href='https://www.placecube.com/platforms/open-place-directory/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Placecube
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://northlincs.openplace.directory/o/ServiceDirectoryService/v2/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://northlincs.openplace.directory/o/ServiceDirectoryService/v2/services/963179e6-2342-4f37-84d0-8f915b0d1b6e'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<span>Yes</span>
						<div className='message'>
							<ul>
								<li>Age: Yes</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 6 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog8content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog8content'>New so no useful data yet</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://northlincs.openplace.directory/o/ServiceDirectoryService/v2'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://northlincs.openplace.directory/o/ServiceDirectoryService/v2'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://opensessions.io/' target='_blank' rel='noopener noreferrer'>
						Open Sessions
					</a>
				</td>
				<td>
					<a href='https://londonsport.org/' target='_blank' rel='noopener noreferrer'>
						London Sport
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://api.porism.com/ServiceDirectoryServiceOpenActiveAggregated/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://api.porism.com/ServiceDirectoryServiceOpenActiveAggregated/services/f5423042-30de-41bb-924a-c3e9b2940293'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='partial-checked ' tabindex='0'>
						<span>Partial</span>
						<div className='message'>
							<ul>
								<li>Age: Yes</li>
								<li>
									Postcode: Postcode Search failed. When tested using
									/services?proximity=1000&amp;postcode=KT15+3ND
								</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 202 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog9content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog9content'>
								London Sport developed Open Referral feed utilising Open Active compliant data
								provided from the Open Sessions platform at https://opensessions.io/.
							</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://api.porism.com/ServiceDirectoryServiceOpenActiveAggregated'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://api.porism.com/ServiceDirectoryServiceOpenActiveAggregated'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a
						href='https://healthierpenninelancashire.co.uk/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Pennine Lancashire ICP
					</a>
				</td>
				<td>
					<a
						href='https://www.placecube.com/platforms/open-place-directory/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Placecube
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://penninelancs.openplace.directory/o/ServiceDirectoryService/v2/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://penninelancs.openplace.directory/o/ServiceDirectoryService/v2/services/e3c6e710-4484-597d-8b50-33b5aa706f82'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<span>Yes</span>
						<div className='message'>
							<ul>
								<li>Age: Yes</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 21 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog10content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog10content'>Live Pennine Lancashire ICP services data</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://penninelancs.openplace.directory/o/ServiceDirectoryService/v2'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://penninelancs.openplace.directory/o/ServiceDirectoryService/v2'>
						Validation
					</a>
				</td>
			</tr>
			<tr>
				<td>
					<a href='https://www.southampton.gov.uk/' target='_blank' rel='noopener noreferrer'>
						Southampton City Council
					</a>
				</td>
				<td>
					<a href='https://www.etchuk.com/' target='_blank' rel='noopener noreferrer'>
						Etch UK
					</a>
				</td>
				<td>
					<div className='checked '>
						<span>Live</span>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://directory.southampton.gov.uk/api/services'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<a
							href='https://directory.southampton.gov.uk/api/services/3320'
							target='_blank'
							rel='noreferrer'
						>
							Valid
						</a>
					</div>
				</td>
				<td>
					<div className='checked '>
						<span>Yes</span>
						<div className='message'>
							<ul>
								<li>Age: Yes</li>
								<li>Postcode: Yes</li>
								<li>Taxonomy: Yes</li>
								<li>Text: Yes</li>
								<li>Time: Yes</li>
							</ul>
						</div>
					</div>
				</td>
				<td>
					<span title='22 Jul 2024 19:00:08 (took: 12 minutes)'>7 hours ago</span>
				</td>
				<td>
					<button className='button-link'>Read</button>
					<div className='modal-background '>
						<div
							className='modal '
							role='dialog'
							aria-labelledby='dialog11content'
							aria-modal='true'
						>
							<button className='close-button button-link'>close</button>
							<p id='dialog11content'>Services directory of Southampton City Council</p>
						</div>
					</div>
				</td>
				<td>
					<a href='https://tools.openreferraluk.org/ApiQuery/?endpoint=https://directory.southampton.gov.uk/api'>
						API
					</a>
					<a href='https://validator.openreferraluk.org/?endpoint=https://directory.southampton.gov.uk/api'>
						Validation
					</a>
				</td>
			</tr>
		</tbody>
	</table>
)
