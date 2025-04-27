import type { APIGuildRole, ISODateString, SnowFlake } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/members
 */
export interface APIGuildMember {
	id: SnowFlake;
	roles: APIGuildRole[];
	permissions: number;
	created_at: ISODateString;
	updated_at: ISODateString;
}
