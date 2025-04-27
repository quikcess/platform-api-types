import type { APIGuildMember, ISODateString, SnowFlake } from "../../../../v1";

/**
 * Game queue mode (team size configuration)
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export type GuildQueueMode = "1x1" | "2x2" | "3x3" | "4x4" | "5x5" | "6x6";
export const GuildQueueMode = {
	x1: "1x1",
	x2: "2x2",
	x3: "3x3",
	x4: "4x4",
	x5: "5x5",
	x6: "6x6",
} as const;

/**
 * Device types for queue configuration
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export type GuildQueueDevice = 1 | 2 | 3 | 4;
export const GuildQueueDevice = {
	Mobile: 1,
	Emulator: 2,
	Mixed: 3,
	Console: 4,
} as const;

/**
 * Game format identifier
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export type APIGuildFormat = string;

/**
 * Gel type for Free Fire
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export type GuildQueueGelType = 1 | 2;
export const GuildQueueGelType = {
	Normal: 1,
	Infinity: 2,
} as const;

/**
 * Platform provider for the queue
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export type GuildQueueProvider = 1 | 2;
export const GuildQueueProvider = {
	Discord: 1,
	Website: 2,
} as const;

/**
 * Supported games for queues
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export type GuildQueueGame = 1 | 2 | 3 | 4 | 5 | 6;
export const GuildQueueGame = {
	FreeFire: 1,
	Valorant: 2,
	Efootball: 3,
	Fifa: 4,
	Clashroyale: 5,
	Brawstars: 6,
} as const;

/**
 * Guild queue interface
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export interface APIGuildQueue {
	id: SnowFlake;
	guild_id: SnowFlake;
	game: GuildQueueGame;
	provider: GuildQueueProvider;
	device: GuildQueueDevice;
	format: APIGuildFormat;
	mode: GuildQueueMode;
	gel_type?: GuildQueueGelType;
	gel_count?: number;
	emulators?: number;
	channel_id?: SnowFlake;
	players: APIGuildMember[];
	expires_at?: ISODateString;
	created_at: ISODateString;
	updated_at: ISODateString;
}
