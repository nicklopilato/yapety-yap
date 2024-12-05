import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from "contentful";
import type { TypeCategoryTagsSkeleton } from "./TypeCategoryTags";
import type { TypePeopleSkeleton } from "./TypePeople";

export interface TypeEpisodesFields {
	title: EntryFieldTypes.Symbol;
	thumbnail: EntryFieldTypes.AssetLink;
	episodeNumber: EntryFieldTypes.Number;
	video?: EntryFieldTypes.AssetLink;
	description?: EntryFieldTypes.RichText;
	participants: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypePeopleSkeleton>
	>;
	publishDate: EntryFieldTypes.Date;
	tags: EntryFieldTypes.Array<
		EntryFieldTypes.EntryLink<TypeCategoryTagsSkeleton>
	>;
}

export type TypeEpisodesSkeleton = EntrySkeletonType<
	TypeEpisodesFields,
	"episodes"
>;
export type TypeEpisodes<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode = LocaleCode,
> = Entry<TypeEpisodesSkeleton, Modifiers, Locales>;
