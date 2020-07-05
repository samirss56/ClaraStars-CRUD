import { mount, createLocalVue } from '@vue/test-utils'

import App from '../App'

import { expect } from '@jest/globals'

test('App has a .center-content class', () => {
  const vue = createLocalVue()

  const app = mount(App, { vue })

  expect(app.classes()).toContain('center-content')
})
