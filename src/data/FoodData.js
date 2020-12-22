export default {
	name: "food",
	explanation: "우리가 크리스마스 데이트때 함께 먹을 음식들",
	foodList: [
		// 4
		{
			date: "2020-12-24",
			eatingList: [
				{
					name: "Lunch",
					content: "in Outback Steak-House",
					imageURL: "@/assets/images/main0.jpg",
					is_recipe: false
				},
			],
		},
		{
			date: "2020-12-25",
			eatingList: [
				{
					name: "Lunch",
					content: "near Sanghyeon Station",
					imageURL: "@/assets/images/main1.jpg",
					is_recipe: false
				},
				{
					name: "Dinner",
					content: "Grilled brazier",
					imageURL: "@/assets/images/main2.jpg",
					is_recipe: true,
					recipe:
						"⛽연료, \n🧫화로, 🍆가지, 양파, 마늘, 🍄양송이, 🍍파인애플, 🥩고기, 🥂담금주",
				},
			],
		},
		{
			date: "2020-12-26",
			eatingList: [
				{
					name: "Breakfast",
					content: "Branch",
					imageURL: "@/assets/images/main3.jpg",
					is_recipe: true,
					recipe: "🍳달걀, 🥛우유, 🥖빵, 🥓베이컨",
				},
				{
					name: "Lunch",
					content: "Gambas, Alio Olio (Pasta)",
					imageURL: "@/assets/images/main4.jpg",
					is_recipe: true
				},
				{
					name: "Dinner",
					content: "Korea pancake (kimchi, mushroom, etc)",
					imageURL: "@/assets/images/main5.jpg",
					is_recipe: true
				},
			],
		},
		{
			date: "2020-12-27",
			eatingList: [
				{
					name: "Breakfast",
					content: "Branch",
					imageURL: "@/assets/images/main6.jpg",
					is_recipe: true
				},
				{
					name: "Lunch",
					content: "Stir-fried spicy pork + Ssambap",
					imageURL: "@/assets/images/main7.jpg",
					is_recipe: true
				},
			],
		},
	],
};
