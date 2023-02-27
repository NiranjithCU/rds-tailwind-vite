import { Button } from './Button'

describe('<Button />', () => {
  it('Should render Default Alert', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Button label="Cookie" />)
  })
})
