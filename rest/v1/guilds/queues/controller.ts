import type { APIGuildControllerQueue } from "../../../../payloads/v1/guild/queues/controller";
import type { APIPayload } from "../../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/controller
 */
export type RESTGetAPIGuildControllerQueueResponse =
	APIPayload<APIGuildControllerQueue>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/controller
 */
export type RESTGetAPIGuildControllersQueueResponse = APIPayload<
	APIGuildControllerQueue[]
>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/controller
 */
export type RESTGetAPIGuildControllerQueueEnterResponse = APIPayload<boolean>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/controller
 */
export type RESTGetAPIGuildControllerQueueExitResponse = APIPayload<boolean>;
