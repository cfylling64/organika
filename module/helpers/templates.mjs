/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/organika/templates/actor/parts/actor-features.hbs',
    'systems/organika/templates/actor/parts/actor-items.hbs',
    'systems/organika/templates/actor/parts/actor-spells.hbs',
    'systems/organika/templates/actor/parts/actor-effects.hbs',
    'systems/organika/templates/actor/parts/actor-electric.hbs',
    'systems/organika/templates/actor/parts/actor-hydro.hbs',
    'systems/organika/templates/actor/parts/actor-organic.hbs',
    // Item partials
    'systems/organika/templates/item/parts/item-effects.hbs',
  ]);
};
