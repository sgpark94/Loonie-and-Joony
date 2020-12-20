export default {
	name: "food",
	explanation: "우리가 크리스마스 데이트때 함께 먹을 음식들",
	foodList: [
		// 4
		{
			date: "2020-12-24",
			eatingList: [
				{
					name: "점심",
					content: "in 아웃백 스테이크 하우스",
					is_recipe: false,
				},
			],
		},
		{
			date: "2020-12-25",
			eatingList: [
				{
					name: "점심",
					content: "in 상현역 근방 식당",
					is_recipe: false,
				},
				{
					name: "저녁",
					content: "화로구이",
					is_recipe: true,
					recipe:
						"⛽연료, 🧫화로, 🍆가지, 양파, 마늘, 🍄양송이, 🍍파인애플, 🥩고기, 🥂담금주",
				},
			],
		},
		{
			date: "2020-12-26",
			eatingList: [
				{
					name: "아침",
					content: "브런치",
					is_recipe: true,
				},
				{
					name: "점심",
					content: "감바스, 알료올료",
					is_recipe: true,
				},
				{
					name: "저녁",
					content: "모듬전",
					is_recipe: true,
				},
			],
		},
		{
			date: "2020-12-27",
			eatingList: [
				{
					name: "아침",
					content: "브런치",
					is_recipe: true,
				},
				{
					name: "점심",
					content: "제육쌈밥",
					is_recipe: true,
				},
			],
		},
	],
};
