import type { ISODateString, SnowFlake } from "../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/users
 */
export interface APIUser {
	id: SnowFlake;
	name: string;
	avatar_url: string | null;
	banner_url: string | null;
	created_at: ISODateString;
	updated_at: ISODateString;
}
