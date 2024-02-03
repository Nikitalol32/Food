
export type BindingValue = {
	position?: number,
	dishId?: string,
	screen?: string,
	segmentId?: string,
	once?: boolean
}

export type ObjectFnObserve = {
	el: HTMLElement,
	params?: BindingValue,
	id?: string,
	isObserve?: boolean
}
