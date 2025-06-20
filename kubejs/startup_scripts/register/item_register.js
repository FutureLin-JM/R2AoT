StartupEvents.registry("item", (event) => {
	event.create("r2aot:wooden_shears", "shears").maxDamage(64);
	event.create("r2aot:wooden_hammer", "pickaxe").tier("wood").speed(2).maxDamage(128);
	event.create("r2aot:stone_hammer", "pickaxe").tier("stone").speed(4).maxDamage(256);
	event.create("r2aot:compressed_wooden_hammer", "pickaxe").tier("wood").speed(4).maxDamage(1280);
	event.create("r2aot:compressed_stone_hammer", "pickaxe").tier("stone").speed(6).maxDamage(2560);
	event.create("r2aot:green_gravel_shard","basic");

	event.create("r2aot:iron_furnace_component", "basic").rarity('uncommon');
	event.create("r2aot:copper_furnace_component", "basic").rarity('uncommon');
	event.create("r2aot:crystal_furnace_component", "basic").rarity("rare");
	event.create("r2aot:diamond_furnace_component", "basic").rarity('rare');
	event.create("r2aot:emerald_furnace_component", "basic").rarity('rare');
	event.create("r2aot:gold_furnace_component", "basic").rarity('uncommon');
	event.create("r2aot:netherite_furnace_component", "basic").rarity("epic");
	event.create("r2aot:obsidian_furnace_component", "basic").rarity("epic");

	event.create("r2aot:creative_casing_shard", "basic");
	event.create("r2aot:rune_elemental", "basic");

	event.create("kubejs:incomplete_water_seeds", "create:sequenced_assembly").texture('r2aot:item/mystical_seeds');
	event.create("kubejs:incomplete_fire_seeds", "create:sequenced_assembly").texture('r2aot:item/mystical_seeds');
	event.create("kubejs:incomplete_earth_seeds", "create:sequenced_assembly").texture('r2aot:item/mystical_seeds');
	event.create("kubejs:incomplete_air_seeds", "create:sequenced_assembly").texture('r2aot:item/mystical_seeds');

	let folderType = [
		'mysticalagriculture:water_seeds',
		'mysticalagriculture:fire_seeds',
		'mysticalagriculture:earth_seeds',
		'mysticalagriculture:air_seeds'
	]
	folderType.forEach(type => {
		let itemName = type.split(':')[1]
		event.create(`kubejs:${itemName}_folder`, "basic")
			.texture('r2aot:item/material_folder')
	})
})