import type { APIGuildMember, APIPayload } from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/members
 */
export type RESTGetAPIGuildMemberResponse = APIPayload<APIGuildMember>;
