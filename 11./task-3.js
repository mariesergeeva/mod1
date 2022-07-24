let getKiller = (suspectInfo, deadPeople) => {
    for (susp in suspectInfo) 
    if (deadPeople.every(item => suspectInfo[susp].indexOf(item) >= 0)) 
    console.log(`Убийца ${susp}`)
}
getKiller(
    {
      James: ["Jacob", "Bill", "Lucas"],
      Johnny: ["David", "Kyle", "Lucas"],
      Peter: ["Lucy", "Kyle"]
    },
    ["Lucas", "Bill"]
  ); // Убийца James
  
  getKiller(
    {
      Brad: [],
      Megan: ["Ben", "Kevin"],
      Finn: []
    },
    ["Ben"]
  ); // Убийца Megan