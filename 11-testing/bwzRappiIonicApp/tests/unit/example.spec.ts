import { IonicVue } from '@ionic/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import router from '@/router';
import HistoryView from '@/views/HistoryView.vue'

describe('HistoryView.vue', () => {
  test('renders HistoryView', () => {
    // Arrange: create Ionic Vue App container and initialize routing
    const wrapper = mount(HistoryView, {
      global: { plugins: [router, IonicVue] }
    })

    // Act

    // Assert
    expect(wrapper.find('h2').text()).toMatch('Moves')
  })
})