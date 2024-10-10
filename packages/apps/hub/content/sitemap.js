export const pageTree = [
	{
		name: "home",
		label: "home",
		contentPath: "/home",
		hide: true
	},
	{
		name: "not-found",
		label: "404",
		contentPath: "/not-found",
		hide: true
	},
	{
		name: "info",
		label: "Information",
		urlPath: "/info",
		contentPath: "/info",
		hide: true,
		automenu: false,
		todo: true,
		childNodes: [
			{
				name: "accessibility",
				label: "Accessibility statement",
				urlPath: "accessibility",
				contentPath: "accessibility",
				automenu: true,
				todo: true
			},
			{
				name: "privacy",
				label: "Privacy policy",
				urlPath: "privacy",
				contentPath: "privacy",
				automenu: true,
				todo: true
			},
			{
				name: "terms",
				label: "Terms and conditions",
				urlPath: "terms",
				contentPath: "terms",
				automenu: true,
				todo: true
			}
		]
	},
	{
		name: "about",
		label: "About",
		urlPath: "/about",
		contentPath: "/about",
		automenu: true
	},
	{
		name: "playbook",
		label: "Playbook",
		urlPath: "/playbook",
		contentPath: "/playbook",
		automenu: true,
		todo: true
	},
	{
		name: "how",
		label: "How it works",
		urlPath: "/how",
		contentPath: "/how",
		automenu: false,
		todo: true,
		childNodes: [
			{
				name: "steps",
				label: "Steps to adopt",
				urlPath: "steps",
				contentPath: "steps",
				automenu: true,
				todo: true
			},
			{
				name: "features",
				label: "Features of the standard",
				urlPath: "features",
				contentPath: "features",
				automenu: true,
				todo: true
			}
		]
	},
	{
		name: "community",
		label: "Community",
		urlPath: "/community",
		contentPath: "/community",
		todo: true,
		childNodes: [
			{
				name: "organisations",
				label: "Adoptors",
				urlPath: "organisations",
				contentPath: "organisations",
				todo: true
			},
			{
				name: "case-studies",
				label: "Case studies",
				urlPath: "case-studies",
				contentPath: "case-studies",
				todo: true
			},
			{
				name: "directory",
				label: "Service Directory",
				urlPath: "directory",
				contentPath: "directory",
				todo: true
			},
			{
				name: "join",
				label: "Join our community",
				urlPath: "join",
				contentPath: "join",
				automenu: false,
				todo: true
			},
			{
				name: "forum",
				label: "Forum",
				urlPath: "https://forum.openreferral.org",
				offsite: true
			}
		]
	},
	{
		name: "developers",
		label: "Developers",
		urlPath: "/developers",
		contentPath: "/developers",
		automenu: false,
		todo: true,
		childNodes: [
			{
				name: "data-standard",
				label: "Data standard",
				urlPath: "data-standard",
				contentPath: "data-standard",
				todo: true,
				childNodes: [
					{
						name: "reference",
						label: "Reference",
						urlPath: "reference",
						contentPath: "reference",
						todo: true
					},
					{
						name: "guidance",
						label: "Guidance",
						urlPath: "guidance",
						contentPath: "guidance",
						todo: true
					},
					{
						name: "taxonomies",
						label: "Use of Taxonomies",
						urlPath: "taxonomies",
						contentPath: "taxonomies",
						todo: true
					},
					{
						name: "aggregation",
						label: "Aggregation, deduplication and validation",
						urlPath: "aggregation",
						contentPath: "aggregation",
						todo: true
					}
				]
			},
			{
				name: "api",
				label: "API",
				urlPath: "api",
				contentPath: "api",
				todo: true,
				childNodes: [
					{
						name: "api-reference",
						label: "Reference",
						urlPath: "api-reference",
						contentPath: "api-reference",
						todo: true
					},
					{
						name: "api-guidance",
						label: "Guidance",
						urlPath: "api-guidance",
						contentPath: "api-guidance",
						todo: true
					},
					{
						name: "implementation",
						label: "Implementation",
						urlPath: "implementation",
						contentPath: "implementation",
						todo: true
					}
				]
			},
			{
				name: "validator",
				label: "Service Validator",
				urlPath: "validator",
				contentPath: "validator",
				"teaser": "This tool checks that a specific service directory follows the standard. It shows any issues as well as statistics on what types of data is included in the scanned Service Directory. This helps Councils move to the standard. This tool also helps establish trust as it ensures that a Service Directory follows the standard."
			},
			{
				name: "dashboard",
				label: "Data Providers",
				urlPath: "dashboard",
				contentPath: "dashboard"
			}
		]
	},

	{
		name: "contact",
		label: "Contact us",
		urlPath: "/contact",
		contentPath: "/contact",
		todo: true
	}
]
