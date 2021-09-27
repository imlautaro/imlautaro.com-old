interface Meta {
	description: string
	lang: string
	title: string
	url: string
}

export default (meta: Meta) => {
	return {
		htmlAttrs: {
			lang: meta.lang,
		},
		link: [
			{
				hid: 'canonical',
				rel: 'canonical',
				content: meta.url,
			},
		],
		meta: [
			{
				hid: 'og:description',
				property: 'og:description',
				content: meta.description,
			},
			{
				hid: 'og:title',
				property: 'og:title',
				content: meta.title,
			},
			{
				hid: 'og:url',
				property: 'og:url',
				content: meta.url,
			},
		],
		title: meta.title,
	}
}
