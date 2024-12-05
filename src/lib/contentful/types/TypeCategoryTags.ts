import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

export interface TypeCategoryTagsFields {
	title: EntryFieldTypes.Symbol;
	description?: EntryFieldTypes.Symbol;
}

export type TypeCategoryTagsSkeleton = EntrySkeletonType<
	TypeCategoryTagsFields,
	"categoryTags"
>;
export type TypeCategoryTags<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeCategoryTagsSkeleton, Modifiers, Locales>;
