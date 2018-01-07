import kataPotter from './kataPotter'
import Books from './Books'
import sinon from 'sinon'
import { expect } from 'chai'

describe('All Tests', function () {

    

    it('kataPotter should exist', () => {
        expect(kataPotter).to.not.be.undefined;
    })

    it('should return 0 when no book is entered', () => {
        const expectedPrice = 0    
        expect(kataPotter.getTotalPrice()).to.equal(0)
    })

    it('should return 8 when user selects the first book', () => {
        const expectedPrice = 8
        kataPotter.addBookToBookArray(Books[0])
        expect(kataPotter.getTotalPrice()).to.equal(8)
        
    })

    it('should return 8 when user selects the second book', () => {
        const expectedPrice = 8
        kataPotter.addBookToBookArray(Books[1])        
        expect(kataPotter.getTotalPrice()).to.equal(8)
        
    })

    it('should return 16 when user selects two of the same book', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[1])
        kataPotter.addBookToBookArray(Books[1])        
        expect(kataPotter.getTotalPrice()).to.equal(16)
        
    })

    it('should return discounted price for two different books', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[1])
        kataPotter.addBookToBookArray(Books[2])        
        expect(kataPotter.getTotalPrice()).to.equal(15.2)
        
    })

    it('should return discounted price for two different books', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[5],)        
        expect(kataPotter.getTotalPrice()).to.equal(15.2)
        
    })

    it('should return discounted price for two different books bought twice', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[2],)
        kataPotter.addBookToBookArray(Books[2],)
        kataPotter.addBookToBookArray(Books[5],)
        kataPotter.addBookToBookArray(Books[5],)                
        expect(kataPotter.getTotalPrice()).to.equal(30.4)
    })

    it('should return discounted price for two different books bought and the third book should not recieve discount', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[2],)
        kataPotter.addBookToBookArray(Books[3],)
        kataPotter.addBookToBookArray(Books[2],)
        expect(kataPotter.getTotalPrice()).to.equal(23.20)
    })

    it('should return discounted price for three different books bought', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[1],)
        kataPotter.addBookToBookArray(Books[2],)
        kataPotter.addBookToBookArray(Books[3],)
        expect(kataPotter.getTotalPrice()).to.equal(21.60)
    })


    it('should return discounted price for three different books bought and not on the last book bought', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[1],)
        kataPotter.addBookToBookArray(Books[2],)
        kataPotter.addBookToBookArray(Books[3],)
        kataPotter.addBookToBookArray(Books[3],)
        expect(kataPotter.getTotalPrice()).to.equal(29.60)
    })

    it('should pass the final test', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[4])
        kataPotter.addBookToBookArray(Books[5])
        expect(kataPotter.getTotalPrice()).to.equal(33.60)
    })

    it('six books, two same, 20% discount', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[5])
        kataPotter.addBookToBookArray(Books[1])
        expect(kataPotter.getTotalPrice()).to.equal(40.80)
    })

    it('five different books', () => {
        const expectedPrice = 16
        kataPotter.addBookToBookArray(Books[1])
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[4])
        kataPotter.addBookToBookArray(Books[5])
        expect(kataPotter.getTotalPrice()).to.equal(30.00)
    })


    it('should pass the final test', () => {
        kataPotter.addBookToBookArray(Books[1])
        kataPotter.addBookToBookArray(Books[1])
        kataPotter.addBookToBookArray(Books[1])
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[2])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[3])
        kataPotter.addBookToBookArray(Books[4])
        kataPotter.addBookToBookArray(Books[4])
        kataPotter.addBookToBookArray(Books[5])
        expect(kataPotter.getTotalPrice()).to.equal(30+25.60+15.20+8)
    })



    


})