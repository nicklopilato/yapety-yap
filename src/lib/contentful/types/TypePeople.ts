import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";

export interface TypePeopleFields {
	name: EntryFieldTypes.Symbol;
	picture?: EntryFieldTypes.AssetLink;
	birthdate?: EntryFieldTypes.Date;
	biography?: EntryFieldTypes.RichText;
	isTeam: EntryFieldTypes.Boolean;
}

export type TypePeopleSkeleton = EntrySkeletonType<TypePeopleFields, "people">;
export type TypePeople<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypePeopleSkeleton, Modifiers, Locales>;
