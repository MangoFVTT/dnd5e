const { BooleanField, ColorField, NumberField, SchemaField } = foundry.data.fields;

/**
 * Token Ring flag data
 * @typedef {object} TokenRingFlagData
 * @property {boolean} enabled                    Should the dynamic token be used?
 * @property {object} [colors]
 * @property {string|number} [colors.ring]        The color of the ring.
 * @property {string|number} [colors.background]  The color of the background.
 * @property {number} effects                     The effect value (composited with bitwise operations). Only supports
 *                                                up to 23 bits of data.
 */

/**
 * A custom model to validate system flags on Token Documents.
 *
 * @property {TokenRingFlagData} tokenRing
 */
export default class TokenSystemFlags extends foundry.abstract.DataModel {
  /** @override */
  static defineSchema() {
    return {
      tokenRing: new SchemaField({
        enabled: new BooleanField({label: "DND5E.TokenRings.Enabled"}),
        colors: new SchemaField({
          ring: new ColorField({required: false, label: "DND5E.TokenRings.RingColor"}),
          background: new ColorField({required: false, label: "DND5E.TokenRings.RingColor"})
        }, {required: false, initial: undefined}),
        effects: new NumberField({initial: 1, min: 0, max: 8388607, integer: true, label: "DND5E.TokenRings.Effects"})
      }, {required: false, initial: undefined, label: "DND5E.TokenRings.Title"})
    };
  }
}
