let arrayExercise = {
    data: [],
    capacitNo: 2*(this.data.length),
    capacityLower: 2,
    add(i){
        return this.data = [...this.data, i]
    },
    get (i) {
        return this.data[i]
    },
    set(i, j){
        return this.data[i] = j
    },
    size(){
        return this.data.length
    },

    capacity() {
        if (this.data.length == 0) {
            return 1
        }

         if (this.data.length == 1) {
            return 1
        }

         if (this.data.length == 2) {
            return 2
        }

         if (this.data.length < this.capacitNo) {
          return this.capacitNo = 2 * this.capacitNo
        }

    }
}

console.log(arrayExercise.set(0, 600))
console.log(arrayExercise.get(0))
console.log(arrayExercise.add(80))
console.log(arrayExercise.add(70))
console.log(arrayExercise.size())
console.log(arrayExercise.data)
console.log('capacity',arrayExercise.capacity())