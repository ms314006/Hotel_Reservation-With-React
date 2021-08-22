import * as hotel from "./hotel"
// @ponicode
describe("hotel.deleteAllReservation", () => {
    test("0", () => {
        let callFunction: any = () => {
            hotel.deleteAllReservation()
        }
    
        expect(callFunction).not.toThrow()
    })
})
