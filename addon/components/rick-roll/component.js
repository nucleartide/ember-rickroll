import Ember from 'ember'
import layout from './template'
import SC from 'soundcloud'

const { htmlSafe } = Ember.String

export default Ember.Component.extend({
  layout,
  tagName: 'iframe',

  attributeBindings: ['src', 'style'],
  src: 'https://w.soundcloud.com/player?url=https://soundcloud.com/catsystemcorp/nggyu-3',
  style: htmlSafe('display: none'),

  didInsertElement() {
    this._super(...arguments)
    this.widget = SC.Widget(this.$()[0])
    this.widget.load('https://soundcloud.com/catsystemcorp/nggyu-3', {
      auto_play: true
    })
  },

  /**
   * soundcloud widget has no cleanup function :(
   */
  willDestroyElement() {
    delete this.widget
  }
})

