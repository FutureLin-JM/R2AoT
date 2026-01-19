// priority: 99

const $Integer = Java.loadClass('java.lang.Integer');
const $Axis = Java.loadClass('com.mojang.math.Axis');
const $Block = Java.loadClass('net.minecraft.world.level.block.Block');
const FluidUtil = Java.loadClass('net.minecraftforge.fluids.FluidUtil');
const $RecipeTypes = Java.loadClass('mezz.jei.api.constants.RecipeTypes');
const $RecipeType = Java.loadClass('mezz.jei.api.recipe.RecipeType');
const $MBDRecipeTypeCategory$RecipeWrapper = Java.loadClass(
    'com.lowdragmc.mbd2.integration.jei.MBDRecipeTypeCategory$RecipeWrapper',
);
const $IElementHelper = Java.loadClass('snownee.jade.api.ui.IElementHelper');
const $CyclingDrawable = Java.loadClass('appeng.integration.modules.jei.CyclingDrawable');
const $DoubleItemIcon = Java.loadClass('com.simibubi.create.compat.jei.DoubleItemIcon');
const $CreateRecipeCategory = Java.loadClass('com.simibubi.create.compat.jei.category.CreateRecipeCategory');
const $AllGuiTextures = Java.loadClass('com.simibubi.create.foundation.gui.AllGuiTextures');
const $AnimatedKinetics = Java.loadClass('com.simibubi.create.compat.jei.category.animations.AnimatedKinetics');
const $AllPartialModels = Java.loadClass('com.simibubi.create.AllPartialModels');
