import type {Directive, DirectiveBinding} from "vue";
import type {ObjectFnObserve} from '@/directives/analytics-types';

import {Async} from '@/core/async/async';

const async = new Async();

const analyticData = new Set();

// Функция наблюдения
function fnObserve(obj: ObjectFnObserve) {
	const {el, params, id, isObserve, once} = obj;

	const options = {
		root: null,
		threshold: .5
	}

	const callback = function(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
		entries.forEach((entry: IntersectionObserverEntry) => {

			if (entry.isIntersecting) {
				async.setTimeout(
					() => {
						analyticData.add(params);

						if (once) {
							observer.unobserve(el);
						}
					},
					1000,
					{label: id, group: 'd'}
				)

			} else {
				async.clearTimeout({label: id, group: 'd'});
			}

		})
	}

	const observer = new IntersectionObserver(callback, options);

	if (isObserve) {
		observer.observe(el);
	}
	else {
		observer.unobserve(el);
	}
}

// Отправка данных на ручку, на ножку
let status: boolean = true;

async.setInterval(
	() => {
		if (status && analyticData.size >= 20) {
			status = false;

			fetch('http://localhost:5540/api/analytics', {
				body: JSON.stringify([...analyticData]),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST',
			}).then(() => {
				status = true;
				analyticData.clear();
			})
		}
	},
	1000,
	{group: 'fast', label: 'asd'}
)

async.setInterval(
	() => {
		if (status && analyticData.size > 0) {
			status = false;

			fetch('http://localhost:5540/api/analytics', {
				body: JSON.stringify([...analyticData]),
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json'
				},
				method: 'POST'

			}).then(() => {
				status = true;
				analyticData.clear();
			})
		}

	},
	20000,
	{group: 'slowly', label: 'asd'}
)

// Сама директива
export const analytics: Directive<HTMLElement, string> = {
	created(el: HTMLElement, binding: DirectiveBinding) {

		function getScreen() {
			return binding.instance?.$route.name;
		}

		const
			events: string[] = binding.value.events,
			params: Record<string, any> = binding.value.params,
			once: boolean = binding.value.once;

		params.screen = getScreen();

		events.forEach(event => {

			// Event click
			if (event === 'click') {
				el.addEventListener('click', () => {
					params.screen = getScreen();
					analyticData.add(params);

					if (once) {
						el.removeEventListener;
					}
				})
			}

			// Event view
			if (event === 'view') {
				fnObserve({
					el: el,
					params: params,
					id: params.dishId,
					isObserve: true,
					once: once
				});
			}
		})
	},

	unmounted(el) {
		el.removeEventListener;
		fnObserve({el: el});
		async.clearAll;
	}
}
