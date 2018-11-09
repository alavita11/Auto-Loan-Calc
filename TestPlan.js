describe('Auto Loan Calculator', function () {

  it('Validates URL', function () {
    cy.visit('https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx')
    cy.url().should('eq', 'https://www.bankrate.com/calculators/auto/auto-loan-calculator.aspx') 
  })

  it('Checks the amortization schedule', function () {
    cy.contains('See amortization schedule').click()

  })

    
  it('Enters borrow amount', function () {
     cy.get('gearbox-input') //[name='amount']
     .type('100001')
     .should('have.value', '100001')
  //Finds "How much would you like to borrow" field and enters amount

  })

    it('Selects item from drowndown', function () {
      cy.get('dropdown__selected selected selectedTitle +mg-bottom-none').click()
    //.expect('dropdown__selected selected selectedTitle +mg-bottom-none --is-active').to.be.true
      .select('dropdown__input-label').contains('48 months')
      .expect('dropdown__list-item selected').to.be.true
    
    
    cy.get('dropdown__selected selected selectedTitle +mg-bottom-none').click()
    //.expect('dropdown__selected selected selectedTitle +mg-bottom-none --is-active').to.be.true
      .select('dropdown__input-label').contains('60 months')
      .expect('dropdown__list-item selected').to.be.true
      
    cy.get('dropdown__selected selected selectedTitle +mg-bottom-none').click()
    //.expect('dropdown__selected selected selectedTitle +mg-bottom-none --is-active').to.be.true    
      .select('dropdown__input-label').contains('72 months')
      .expect('dropdown__list-item selected').to.be.true
      
    cy.get('dropdown__selected selected selectedTitle +mg-bottom-none')
    //.expect('dropdown__selected selected selectedTitle +mg-bottom-none --is-active').to.be.true
      .select('dropdown__input-label').contains('New')
      .expect ('dropdown__list-item selected').to.be.true
    })
    
    it('Enters an intererest rate', function () {
    cy.get('gearbox-input').contains('interest-rate')
    .type('99')
    .expect('error-message interest-input__error').contains('Invalid rate')
    //Finds "Enter an Interest Rate" field and enters amount  

    

  })
})