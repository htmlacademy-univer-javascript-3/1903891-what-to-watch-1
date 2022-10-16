export type Comment = {
  id: number,
  filmId: number,
  comment: string,
  date: Date,
  rating: number,
  user: {
    id: number,
    name: string,
  }
}
