import type { ISODateString, SnowFlake } from "../../../../v1";
import type { APIGuildMember } from "../members";
import type { GuildQueueProvider } from "./default";

/**
 * Guild controller queue interface
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues
 */
export interface APIGuildControllerQueue {
	id: SnowFlake;
	guild_id: SnowFlake;
	provider: GuildQueueProvider;
	member: APIGuildMember;
	expires_at?: ISODateString;
	created_at: ISODateString;
	updated_at: ISODateString;
}
