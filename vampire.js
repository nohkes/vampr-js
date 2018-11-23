class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Retuarrayrns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let numberOfVamps = 0;
    let currentVamp = this;
    while (currentVamp.creator) {
      currentVamp = currentVamp.creator;
      numberOfVamps++;
    }
    return numberOfVamps;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return (
      this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal
    );
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {}
}
// Returns the vampire object with that name, or null if no vampire exists with that name
vampireWithName(name) {
if (this.name === name){
  return this;
}
let vamp;
for (var offspring of this.offspring){
  vamp = offspring.vampireWithName(name)
  if(vamp!== null){
    return vamp;
  }
}
return null
}

// Returns the total number of vampires that exist
get totalDescendents() {
let total = 0;
total += this.numberOfOffspring
this.offspring.forEach(element => {
  total+=element.total
});
return totalDescendents
}

// Returns an array of all the vampires that were converted after 1980
get allMillennialVampires() {
let vampires = [];
if(this.yearConverted > 1980) {
  vampires.push(this);
}
for (const offspring of this.offspring){
  const nVamp = offspring.allMillennialVampires;
  if(nVamp!== null){
    vampires = vampires.concat(nVamp);
  }
}
return vampires;
}
module.exports = Vampire;
