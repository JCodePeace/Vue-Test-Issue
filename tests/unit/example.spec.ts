import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const vis = true
    const wrapper = shallowMount(HelloWorld, {
      props: { vis }
    })
    console.log(wrapper.html())
  })
})
