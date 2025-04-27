import type {
	APIGuild,
	APIGuildRawResponse,
	APIPayload,
	DeepPartial,
} from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildResponse = APIPayload<APIGuildRawResponse>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildsResponse = APIPayload<APIGuildRawResponse[]>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type RESTPostAPIGuildUpdateBody = DeepPartial<APIGuild>;
