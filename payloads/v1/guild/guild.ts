import type { APIGuildRole, ISODateString, SnowFlake } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type GuildPermissions = 1;
export const GuildPermissions = {
	VIEW_MATCHES: 1 << 0, // 1
	MANAGE_MEMBERS: 1 << 1, // 2
	MANAGE_MEDIATORS: 1 << 2, // 4
	MANAGE_ROLES: 1 << 3, // 8
	MANAGE_MATCHES: 1 << 4, // 16
	SET_PIX_FOR_SELF: 1 << 5, //32
	MANAGE_PIX_ACCOUNTS: 1 << 6, // 64
	MEDIATORS: 1 << 7, // 128
	KICK_MEDIATORS: 1 << 8, // 256
	ACCESS_LOGS: 1 << 9, // 512
	MAX_PERMISSION: 1 << 30, // 1073741824 - cuidado: superpoder
} as const;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type GuildPlan = 1 | 2;
export const GuildPlan = {
	PRO: 1,
	ENTERPRISE: 2,
} as const;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export interface APIGuildRaw {
	id: SnowFlake;
	plan: GuildPlan;
	expires_at: ISODateString;
	owner_id: string;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export interface APIGuildRawResponse {
	id: SnowFlake;
	name: string;
	description: string;
	icon: string | null;
	banner: string | null;
	roles: APIGuildRole[];
	plan: GuildPlan;
	expires_at: ISODateString;
	owner_id: string;
	created_at: ISODateString;
	updated_at: ISODateString;
}

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export interface APIGuild {
	id: SnowFlake;
	name: string;
	description: string;
	icon: string | null;
	banner: string | null;
	plan: GuildPlan;
	expires_at: ISODateString;
	owner_id: string;
	created_at: ISODateString;
	updated_at: ISODateString;
}
