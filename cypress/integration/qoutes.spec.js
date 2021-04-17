describe('Pizza App', () => {

    it('does not do much', ()=> {
        expect(true).to.equal(true)
    })

    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })
    
    
})