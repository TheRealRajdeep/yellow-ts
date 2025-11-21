declare module "@erc7824/nitrolite" {
	export class NitroliteClient {
		constructor(config: any);
		deposit(amount: bigint): Promise<any>;
		approveTokens(amount: bigint): Promise<any>;
		getTokenAllowance(): Promise<bigint>;
		getTokenBalance(): Promise<bigint>;
		createChannel(params: any): Promise<any>;
		depositAndCreateChannel(depositAmount: bigint, params: any): Promise<any>;
		checkpointChannel(params: any): Promise<any>;
		challengeChannel(params: any): Promise<any>;
		resizeChannel(params: any): Promise<any>;
		closeChannel(params: any): Promise<any>;
		withdrawal(amount: bigint): Promise<any>;
		getAccountChannels(): Promise<any[]>;
		getAccountInfo(): Promise<any>;
	}

	export type RPCMethod = string;
	export type CreateChannelParams = any;
	export type CheckpointChannelParams = any;
	export type ChallengeChannelParams = any;
	export type ResizeChannelParams = any;
	export type CloseChannelParams = any;
	export type ChannelId = any;
	export type State = any;
	export type Hash = any;
	export type AccountInfo = any;
	export type NitroliteClientConfig = any;

	export function parseRPCResponse(data: any): any;
}


