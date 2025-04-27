import type { APIGuildMember, ISODateString, SnowFlake } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/mediators
 */
export interface APIGuildMediatorLimiter {
	simultaneous: number;
	daily: number;
}

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/mediators
 */
export interface APIGuildMediatorSignature {
	role_id: string | null;
	expiration_time: number | null;
	autorole: boolean;
}

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/mediators
 */
export interface APIGuildMediatorPix {
	key: string | null;
	name: string | null;
	message: string | null;
}

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/mediators
 */
export interface APIGuildMediator {
	id: SnowFlake;
	member: APIGuildMember;
	pix: APIGuildMediatorPix;
	uptime: number;
	last_entry: number | null;
	signature: APIGuildMediatorSignature;
	limiter: APIGuildMediatorLimiter;
	created_at: ISODateString;
	updated_at: ISODateString;
}
