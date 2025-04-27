import type { APIGuildQueue, APIPayload } from "../../../../v1";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/default
 */
export type RESTGetAPIGuildQueueResponse = APIPayload<APIGuildQueue>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/default
 */
export type RESTGetAPIGuildQueuesResponse = APIPayload<APIGuildQueue[]>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/default
 */
export type RESTGetAPIGuildQueueEnterResponse = APIPayload<boolean>;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/guilds/queues/default
 */
export type RESTGetAPIGuildQueueExitResponse = APIPayload<boolean>;
