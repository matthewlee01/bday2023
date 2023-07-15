import prisma from '$lib/prisma';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const note = data.get('note') || null;
		const time = data.get('time') || null;
		const email = data.get('email') || null;

		await prisma.attendee.create({
			data: {
				name,
				note,
				time,
				email
			}
		});

		return { success: true };
	}
};
