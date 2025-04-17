import type { ISODateString, SnowFlake } from "../../../v1";

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
	MAX_PERMISSION: 1 << 30, // 1073741824 - cuidado: superpoder
} as const;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export interface APIGuild {
	id: SnowFlake;
	name: string;
	description: string;
	icon_url: string | null;
	banner_url: string | null;
	owner_id: string;
	created_at: ISODateString;
	updated_at: ISODateString;
}
