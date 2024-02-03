export type AsyncOpts = {
	label: string | undefined,
	group: string | undefined
}

export type onlyKeysOfMapByTime = "interval" | "timeout" | 'promise';

export type NewPromiseData = {
	promise: Promise<any>,
	rejector: Function | undefined,
	resolver: Function | undefined,
}

