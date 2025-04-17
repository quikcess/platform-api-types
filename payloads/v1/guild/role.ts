import type { ISODateString, SnowFlake } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export interface APIGuildRole {
	id: SnowFlake;
	name: string;
	permissions: number; // bitfield
	created_at: ISODateString;
	updated_at: ISODateString;
}
