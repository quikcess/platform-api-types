import type {
	APIGuildMember,
	APIGuildMemberRaw,
	APIPaginatedPayload,
	APIPayload,
} from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/members
 */
export type RESTGetAPIGuildMemberResponse = APIPayload<APIGuildMember>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/members
 */
export type RESTGetAPIGuildMemberRawResponse = APIPayload<APIGuildMemberRaw>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/members
 */
export type RESTGetAPIGuildMembersResponse = APIPaginatedPayload<
	APIGuildMemberRaw[]
>;
