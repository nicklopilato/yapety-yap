import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";
import type { TypeCategoryTagsSkeleton } from "./TypeCategoryTags";
import type { TypePeopleSkeleton } from "./TypePeople";

export interface TypeBlogPostFields {
	title: EntryFieldTypes.Symbol;
	authors: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePeopleSkeleton>>;
	publishDate: EntryFieldTypes.Date;
	coverImage?: EntryFieldTypes.AssetLink;
	tags: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeCategoryTagsSkeleton>
	>;
	content: EntryFieldTypes.RichText;
}

export type TypeBlogPostSkeleton = EntrySkeletonType<
	TypeBlogPostFields,
	"blogPost"
>;
export type TypeBlogPost<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeBlogPostSkeleton, Modifiers, Locales>;
