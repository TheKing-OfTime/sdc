export default {
	youtube: '<:youtube:616206333473062927>',
	verefied: '<:verefied:616206333577920513>',
	user: '<:user:616214109624467467>',
	ups: '<:ups:616214109829988352>',
	twitch: '<:twitch:616206333770858506>',
	spamhunt: '<:spamhunt:616206333745692675>',
	sitedev: '<:sitedev:616206333154295808>',
	rating: '<:rating:616214109444112414>',
	partner: '<:partner:616206333347364864>',
	owner: '<:owner:616214109364551703>',
	online: '<:online:616214109310156823>',
	offline: '<:offline:616214108043345921>',
	idle: '<:idle:616214107892219926>',
	favorite: '<:favorite:616206333401759754>',
	easteregg: '<:easteregg:616206333544497192>',
	dnd: '<:dnd:616214108383215626>',
	comment: '<:comment:616214107502280705>',
	bughunter: '<:bughunter:616206333598892043>',
	botdev: '<:botdev:616206333716201492>',
};

export const pins = [
	{
		id: 1,
		description: 'Выдаётся всем серверам разработчиков проекта.',
		name: 'Разработчик сайта',
		icon: '<:sitedev:616206333154295808>',
	},
	{
		id: 2,
		description: 'Выдаётся серверам, у которых присутствует верификация от Discord.',
		name: 'Верифицированный сервер',
		icon: '<:verefied:616206333577920513>',
	},
	{
		id: 4,
		description: 'Выдаётся серверам, у которых присутствует официальная партнёрка от Discord.',
		name: 'Партнерский сервер',
		icon: '<:partner:616206333347364864>',
	},
	{
		id: 8,
		description: 'Выдаётся лично администрацией проекта серверам, которые соответствуют нормам и нуждаются в помощи.',
		name: 'Фаворитный сервер',
		icon: '<:favorite:616206333401759754>',
	},
	{
		id: 10,
		description: 'Выдаётся людям, принявшим участие в бета-тесте сайта.',
		name: 'Тестировщик сайта',
		icon: '<:bughunter:616206333598892043>',
	},
	{
		id: 20,
		description: 'Выдаётся после участия в ивенте по поиску пасхалок.',
		name: 'В поисках пасхалки',
		icon: '<:easteregg:616206333544497192>',
	},
	{
		id: 40,
		description: 'Выдаётся, если на сервере имеется собственный публичный бот, который есть более чем на 50 серверах.',
		name: 'Разработчик ботов',
		icon: '<:botdev:616206333716201492>',
	},
	{
		id: 80,
		description: 'Выдаётся серверам, если владелец проекта занимается деятельностью на YouTube.',
		name: 'Ютубер',
		icon: '<:youtube:616206333473062927>',
	},
	{
		id: 100,
		description: 'Выдаётся серверам, если владелец проекта занимается деятельностью на Twitch.',
		name: 'Твитчер',
		icon: '<:twitch:616206333770858506>',
	},
	{
		id: 200,
		description: 'Выдаётся серверам, администрация которых активно принимает участие в ловле спамеров.',
		name: 'Ловец спамеров',
		icon: '<:spamhunt:616206333745692675>',
	},
];
