import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

export interface TypeSiteContentFields {
	title: EntryFieldTypes.Symbol;
	image?: EntryFieldTypes.AssetLink;
	content?: EntryFieldTypes.RichText;
	reference: EntryFieldTypes.Symbol;
}

export type TypeSiteContentSkeleton = EntrySkeletonType<
	TypeSiteContentFields,
	"siteContent"
>;
export type TypeSiteContent<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeSiteContentSkeleton, Modifiers, Locales>;
