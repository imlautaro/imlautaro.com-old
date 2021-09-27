import {
	LinkPropertyBase,
	LinkPropertyHref,
	LinkPropertyHrefCallback,
	MetaInfo,
} from 'vue-meta'

interface Meta {
	description: string
	i18nHead: MetaInfo
	title: string
	url: string
}

type link = LinkPropertyBase | LinkPropertyHref | LinkPropertyHrefCallback

const addTrailingSlash = (item: link): link => {
	if (item.href[item.href.length - 1] !== '/') {
		item.href = item.href + '/'
	}
	return item
}

export default (meta: Meta): MetaInfo => {
	return {
		htmlAttrs: {
			...meta.i18nHead.htmlAttrs,
		},
		link: [...meta.i18nHead.link!.map(addTrailingSlash)],
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
