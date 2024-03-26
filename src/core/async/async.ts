import type { AsyncOpts, onlyKeysOfMapByTime, NewPromiseData } from './async-types';

export const Async = class Async {

	#timeouts = new Map()
	#intervals = new Map()
	#promises = new Map()

	promise(originalPromise: Promise<any>, asyncOpts: AsyncOpts) {
		asyncOpts ? asyncOpts : {};

		asyncOpts.group ??= '[[DEFAULT_GROUP]]';
		asyncOpts.label ??= `[[DEFAULT_LABEL]]_${Math.random() * 1e3}`;

		const
			{label, group} = asyncOpts,
			promises = this.#promises;

		let
			groupMap = promises.get(group);

		if (groupMap) {
			const
				promiseData = groupMap.get(label);

			if (promiseData) {
				promiseData.rejector({reason: 'collision'});
				groupMap.delete(label);
			}

		} else {
			promises.set(group, groupMap = new Map());
		}

		const newPromiseData: NewPromiseData = {
			promise: originalPromise,
			rejector: undefined,
			resolver: undefined
		}

		const pr = new Promise((res, rej) => {
			newPromiseData.rejector = rej;
			newPromiseData.resolver = res;

			originalPromise.then((value) => res(value));
			originalPromise.catch((err) => rej(err));
		});

		groupMap.set(label, newPromiseData);

		return pr;
	}

	setTimeout (fn: Function, time: number, asyncOpts: AsyncOpts) {
		asyncOpts ? asyncOpts : {};
		asyncOpts.group ??= '[[DEFAULT_GROUP]]';
		asyncOpts.label ??= `[[DEFAULT_LABEL]]_${Math.random() * 1e3}`;


		const
			{label, group} = asyncOpts,
			timeouts = this.#timeouts;

		let
			groupMap = timeouts.get(group);

		const
			originalTimeout = setTimeout(fn, time);

		if (timeouts.get(group)) {
			const
				timeoutData = groupMap.get(label);

			if (timeoutData) {
				timeoutData.rejector();
				groupMap.delete(label);
			}
		} else {
			timeouts.set(group, groupMap = new Map());
		}

		const
			newTimeoutData = {
				timeout: originalTimeout,
				rejector: () => {
					clearTimeout(originalTimeout);
				}
			}

		groupMap.set(label, newTimeoutData);
	}

	setInterval(fn: Function, time: number, asyncOpts: AsyncOpts) {
		asyncOpts ? asyncOpts : {};
		asyncOpts.group ??= '[[DEFAULT_GROUP]]';
		asyncOpts.label ??= `[[DEFAULT_LABEL]]_${Math.random() * 1e3}`;

		const
			{label, group} = asyncOpts,
			intervals = this.#intervals;

		let
			groupMap = intervals.get(group);

		const
			originalTimeout = setInterval(fn, time);

		if (intervals.get(group)) {
			const timeoutData = groupMap.get(label);

			if (timeoutData) {
				timeoutData.rejector();
				groupMap.delete(label);
			}
		} else {
			intervals.set(group, groupMap = new Map());
		}

		const
			newIntervalData = {
				interval: originalTimeout,
				rejector: () => {
					clearTimeout(originalTimeout);
				}
			}

		groupMap.set(label, newIntervalData);
	}

	clearAll(asyncOpts: AsyncOpts) {
		this.clearInterval(asyncOpts);
		this.clearPromise(asyncOpts);
		this.clearTimeout(asyncOpts);
	}

	clearInterval(asyncOpts: AsyncOpts) {
		this.#clear('interval', asyncOpts);
	}

	clearPromise(asyncOpts: AsyncOpts) {
		asyncOpts? asyncOpts : {};

		this.#clear('promise', asyncOpts);
	}

	clearTimeout(asyncOpts: AsyncOpts) {
		asyncOpts? asyncOpts : {};

		this.#clear('timeout', asyncOpts);
	}

	#clear(type: string, asyncOpts: AsyncOpts) {
		asyncOpts? asyncOpts : {};

		const
			giveAsyncOpts = Boolean(asyncOpts.group || asyncOpts.label);

		asyncOpts.group ??= '[[DEFAULT_GROUP]]';

		const mapByType = {
			interval: this.#intervals,
			timeout: this.#timeouts,
			promise: this.#promises,
		}

		const
			{group, label} = asyncOpts,
			groups = mapByType[type as onlyKeysOfMapByTime];

		// На случай, если группы еще не были созданы или переданы
		if (!groups.get(group)) {
			return;
		}

		if (!groups.get(group).get(label)) {
			return;
		}

		if (giveAsyncOpts) {

			if (label) {
				groups.get(group).get(label).rejector({reason: 'clear'});
				groups.delete(groups.get(group).get(label));

			} else {
				for (const [label, value] of groups.get(group)) {

					value.rejector({reason: 'clear'});
					groups.delete(label);
				}
			}
		} else {
			for (const [groupName, labelMap] of groups) {
				for (const [labelName, labelData] of labelMap) {
					labelData.rejector({reason: 'clear'});
					groups.delete(groups.get(groupName).get(labelName));
				}

				groups.delete(groups.get(groupName));

				}
		}

	}
}