export const api = {
	clientId: "vitest-client",
	fetchApi: async (_route: string, _options?: RequestInit): Promise<Response> =>
		new Response(
			JSON.stringify({
				success: true,
				data: {},
			}),
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			},
		),
	addEventListener: (_type: string, _callback: (event: CustomEvent<unknown>) => void): void => {},
};
