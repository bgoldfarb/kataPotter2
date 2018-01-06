import kataPotter from './kataPotter'
import sinon from 'sinon'
import { expect } from 'chai'


describe('All Tests', function () {

    beforeEach(() => {
    })


    it('kataPotter should exist', () => {
        expect(kataPotter).to.not.be.undefined;
    })

    it('should return 0 when no book is entered', () => {
        const expectedPrice = 0
        expect(kataPotter.returnPrice()).to.equal(0)
    })

    


})