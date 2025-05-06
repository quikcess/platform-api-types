import type {
	APIGuildMemberRaw,
	APIGuildRole,
	APIPaginatedPayload,
	APIPayload,
	DeepPartial,
} from "../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/roles
 */
export type RESTGetAPIGuildRoleResponse = APIPayload<APIGuildRole>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/roles
 */
export type RESTGetAPIGuildRolesResponse = APIPayload<APIGuildRole[]>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/roles
 */
export type RESTGetAPIGuildRoleMembersResponse = APIPaginatedPayload<
	APIGuildMemberRaw[]
>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/roles
 */
export type RESTPostAPIGuildRoleDeleteResponse = APIPayload<boolean>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/roles
 */
export type RESTPostAPIGuildRoleUpdateBody = DeepPartial<APIGuildRole>;
