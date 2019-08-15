export interface IHotel {
  getRooms(): {}[];
  getRoom(id: string): {};
  reservationRoom(name: string, tel: string, date: string[]): boolean;
  deleteAllReservation(): boolean;
}
