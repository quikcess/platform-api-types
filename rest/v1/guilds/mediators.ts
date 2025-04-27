import type { APIGuildMediator } from "../../../payloads/v1/guild/mediators";
import type { APIPayload } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/mediators
 */
export type RESTGetAPIGuildMediatorResponse = APIPayload<APIGuildMediator>;
