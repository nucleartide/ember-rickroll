
import Ember from 'ember'
import layout from './template'
import SC from 'soundcloud'

const { htmlSafe } = Ember.String
const RICKROLL_URL = 'https://soundcloud.com/gail-sanderson-randle/barry-white-never-never-gonna'
const IFRAME_SRC = `https://w.soundcloud.com/player?url=${RICKROLL_URL}`

export default Ember.Component.extend({
  tagName: 'iframe',
  attributeBindings: ['src', 'style'],
  src: IFRAME_SRC,
  style: htmlSafe('display: none'),
  layout,

  didInsertElement() {
    this._super(...arguments)
    this.widget = SC.Widget(this.$()[0])
    this.widget.load(RICKROLL_URL, {
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

