import kataPotter from './kataPotter'
import Books from './Books'
import sinon from 'sinon'
import { expect } from 'chai'

let bookArray = []

describe('All Tests', function () {

    
    beforeEach(() => {
         bookArray.length = 0
    })


    it('kataPotter should exist', () => {
        expect(kataPotter).to.not.be.undefined;
    })

    it('should return 0 when no book is entered', () => {
        const expectedPrice = 0    
        expect(kataPotter.getTotalPrice(bookArray)).to.equal(0)
    })

    it('should return 8 when user selects the first book', () => {
        const expectedPrice = 8
        kataPotter.addBookToBookArray(Books[0],bookArray)
        expect(kataPotter.getTotalPrice(bookArray)).to.equal(8)
        
    })

    it('should return 8 when user selects the second book', () => {
        const expectedPrice = 8
        kataPotter.addBookToBookArray(Books[1],bookArray)        
        expect(kataPotter.getTotalPrice(bookArray)).to.equal(8)
        
    })

    it('should return 16 when user selects two of the same book', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[1],bookArray)
        kataPotter.addBookToBookArray(Books[1],bookArray)        
        expect(kataPotter.getTotalPrice(bookArray)).to.equal(16)
        
    })

    


})