import { MetaInfo } from 'vue-meta'

interface Meta {
	description: string
	i18nHead: MetaInfo
	title: string
	url: string
}

export default (meta: Meta): MetaInfo => {
	return {
		htmlAttrs: {
			...meta.i18nHead.htmlAttrs,
		},
		link: [...meta.i18nHead.link!],
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: meta.description,
			},
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
			...meta.i18nHead.meta!,
		],
		title: meta.title,
	}
}
