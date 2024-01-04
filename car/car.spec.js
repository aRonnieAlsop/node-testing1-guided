const Car = require('./car')
// Test away!
describe('Intro to testing', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).not.toBe(7)
        expect(5).toBeDefined()
        expect(5).toBeGreaterThan(4)
    })
})
test('objects', () => {
    const o = { a: 1 }
    const oo = { a: 1 }
    const ooo = oo
    expect(o).toBe(o)
    expect(oo).toBe(ooo)
})
describe('Car class', () => {
   let prius
   beforeEach(() => {
    prius = new Car('toyota', 'prius')
   })
   it('TDD starts with a failing test', () => {
    expect(Car).toBeDefined()
   })
   it('makes instances of Cars', () => {
    expect(prius).toBeInstanceOf(Car)
   })
   it('cars hava a make property', () => {
    // const prius = new Car('toyota', 'prius') // no longer needed b/c beforeEach
    expect(prius.make).toBe('toyota') // strict equality
    expect(prius).toHaveProperty('make') // checking only existance of a property
    expect(prius).toHaveProperty('make', 'toyota') // property + it's value
   })
   it('cars have a model property', () => {
    expect(prius.model).toBe('prius')
   })
   it('cars have the make and model passed into Car', () => {
    expect(prius).toMatchObject(
        { make: 'toyota', model: 'prius' }
    )
   })
   it('new cars have odometer set a 0', () => {
    expect(prius.odometer).toBe(0)
   })
   it('has a drive method', () => {
    expect(prius.drive).toBeDefined()
    expect(prius.drive).toBeTruthy()
    expect(prius.drive).toBeInstanceOf(Function)
    expect(prius.drive).toBe(Car.prototype.drive)
   })
   it('drive returns the driven distance', () => {
   
   })
})
