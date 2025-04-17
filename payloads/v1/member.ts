import type { ISODateString, SnowFlake } from "../../v1";
import type { APIUser } from "./user";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/members
 */
export interface APIGuildMember {
	id: SnowFlake;
	user: APIUser;
	created_at: ISODateString;
	updated_at: ISODateString;
}
