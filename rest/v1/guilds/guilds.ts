import type { APIGuild, APIPayload, DeepPartial } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type RESTGetAPIGuildResponse = APIPayload<APIGuild>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type RESTPostAPIGuildCreateBody = APIGuild;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds
 */
export type RESTPostAPIGuildUpdateBody = DeepPartial<APIGuild>;
