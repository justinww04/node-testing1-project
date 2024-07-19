/**
 * @param {object} obj 
 * @returns {object} 
 
 */
function trimProperties(obj) {
  const result = {}
  for (let prop in obj) {
    result[prop] = obj[prop].trim()
  }
  return result
}

/**
 
 * @param {object} obj 
 * @returns {object} 
 *

 */
function trimPropertiesMutation(obj) {
  for (let prop in obj) {
    obj[prop] = obj[prop].trim()
  }
  return obj
}

/**
 
 * @param {object[]} integers 
 * @returns {number} 
 
 */
function findLargestInteger(integers) {
  let result = integers[0].integer
  for (let idx = 1; idx < integers.length; idx++) {
    if (integers[idx].integer > result) {
      result = integers[idx].integer
    }
  }
  return result
}

class Counter {
  /**
   
   * @param {number} initialNumber 
   */
  constructor(initialNumber) {
    this.count = initialNumber
  }

  /**
   * [Exercise 4B] Counter.prototype.countDown counts down to zero
   * @returns {number} - the next count, does not go below zero
   
   */
  countDown() {
    if (this.count === 0) {
      return 0
    }
    return this.count--
  }
}

class Seasons {
  /**
  
   */
  constructor() {
    this.seasons = ['summer', 'fall', 'winter', 'spring']
    this.idx = 0
  }

  /**
   * [Exercise 5B] Seasons.prototype.next returns the next season
   * @returns {string} - the next season starting with "summer"
   *
 "
   */
  next() {
    const result = this.seasons[this.idx]
    this.idx = (this.idx + 1) % 4
    return result
  }
}

class Car {
  /**
   * 
   * @param {string} name 
   * @param {number} tankSize 
   * @param {number} mpg 
   */
  constructor(name, tankSize, mpg) {
    this.odometer = 0
    this.tank = tankSize 
    this.tankSize = tankSize 
   
    this.mpg = mpg
  }

  /**
   * 
   * @param {string} distance 
   * @returns {number} 
   *
  
   */
  drive(distance) {
    const milesCanDrive = this.tank * this.mpg
    if (distance <= milesCanDrive) {
    this.odometer = this.odometer + distance 
    this.tank = this.tank - (distance / this.mpg)
    
    } else {
      this.odometer = this.odometer + milesCanDrive
      this.tank = 0
    }
    return this.odometer
  }

  /**
   * 
   * @param {number} gallons 
   * @returns {number}
   *
  
   */
  refuel(gallons) {
    const gallonsCanAdd = this.tankSize - this.tank
    if (gallons <= gallonsCanAdd) {
      this.tank = this.tank + gallons
    } else {
      this.tank = this.tankSize
    }
    return this.tank * this.mpg
  }
}

/**
 
 * @param {number} number 
 * @returns {promise} 
 
 * })
 */
function isEvenNumberAsync(number) {

}

module.exports = {
  trimProperties,
  trimPropertiesMutation,
  findLargestInteger,
  isEvenNumberAsync,
  Counter,
  Seasons,
  Car,
}