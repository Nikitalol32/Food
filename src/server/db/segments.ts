export const segmentIds = <const>{
	breakfast: '25d3153c-0029-46dc-8df2-9e6d0c413a84',
	raw: '20eb5da9-181a-4625-8892-15cbb0c23288',
	snaсks: '09472d2b-51f2-4afb-a433-9f5eddf2c949',
	bruskets: '24cb17ba-29d6-4ffb-9125-ef7a6ce851a9',
	forVine: 'd120b4f9-c762-4485-869e-4828838abd40',
	salad: 'a5606fea-aa7a-480d-ada7-6f61cedfd203',
	soups: 'd5a83ac2-c8a0-4aca-bf11-422fb829d631',
	pasta: 'f5dbdbce-13eb-43ff-b91f-26b01c922a57',
	meat: '6b608846-1fbf-410b-90d5-ec322367a840',
	fish: '5ac64fe6-bedb-489b-a2a6-a19cbd34f711',
	grill: '6ca16d09-f1ec-402f-851a-e38198bf2608',
	brazier: 'c6021d07-545a-402b-ae8c-4ae6a8699588',
	garnish: '68e35266-7ee4-4202-8adc-57d0d0d6ae15'
}

export const segments = () => [
	{
		title: 'Завтраки',
		id: segmentIds.breakfast
	},
	{
		title: 'Raw',
		id: segmentIds.raw
	},
	{
		title: 'Холодные закуски',
		id: segmentIds.snaсks
	},
	{
		title: 'Брускетты',
		id: segmentIds.bruskets
	},
	{
		title: 'К вину',
		id: segmentIds.forVine
	},
	{
		title: 'Салаты',
		id: segmentIds.salad
	},
	{
		title: 'Супы',
		id: segmentIds.soups
	},
	{
		title: 'Паста и ризотто',
		id: segmentIds.pasta
	},
	{
		title: 'Мясо',
		id: segmentIds.meat
	},
	{
		title: 'Рыба',
		id: segmentIds.fish
	}
]