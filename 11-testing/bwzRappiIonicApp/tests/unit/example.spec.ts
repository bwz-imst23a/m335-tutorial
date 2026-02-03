import { IonicVue } from '@ionic/vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import router from '@/router';
import HistoryPage from '@/views/HistoryPage.vue'

describe('HistoryPage.vue', () => {
  test('renders HistoryPage', () => {
    // Arrange: create Ionic Vue App container and initialize routing
    const wrapper = mount(HistoryPage, {
      global: { plugins: [router, IonicVue] }
    })

    // Act

    // Assert
    expect(wrapper.find('ion-title').text()).toMatch('History')
  })
})