import type { ISODateString, SnowFlake } from "../../v1";
import type { APIGuildMember } from "./guild/members";

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/messages
 */
export type MessageStatus = 1 | 2 | 3 | 4;
export const MessageStatus = {
	Sent: 1,
	Edited: 2,
	Deleted: 3,
	Replied: 4,
} as const;

/**
 * @see https://docs.quikcess.com/platform/api-reference/endpoint/messages
 */
export interface APIMessage {
	id: SnowFlake;
	content: string;
	status: MessageStatus;
	files: string[];
	author: APIGuildMember;
	created_at: ISODateString;
	updated_at: ISODateString;
	edited_from?: SnowFlake;
	replied_to?: SnowFlake;
}
