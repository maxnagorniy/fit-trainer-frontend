const database = [
  {
    exerciseItems: [
      {
        id: 1,
        title: "Measurement type1",
        name: "Exercise Name",
        selectValue: ''
      },
      {
        id: 2,
        title: "Measurement type2",
        name: "Exercise Name2",
        selectValue: ''
      },
      {
        id: 3,
        title: "Measurement type3",
        name: "Exercise Name3",
        selectValue: ''
      }
    ]
  }
];

export default function data(state = database) {
  return state
}