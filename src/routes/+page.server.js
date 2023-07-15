
export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = String(data.get('name'));
		const note = String(data.get('note'));
		const time = String(data.get('time'));
		const email = String(data.get('email'));
		await new Promise(r => setTimeout(r, 5000));

		console.log(name, note, time, email);
		return { succes: true };
	}
};
