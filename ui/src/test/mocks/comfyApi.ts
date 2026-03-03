export const api = {
	fetchApi: async (_route: string, _options?: RequestInit): Promise<Response> =>
		new Response(),
	addEventListener: (
		_type: string,
		_callback: (event: CustomEvent<unknown>) => void,
	): void => {},
};
