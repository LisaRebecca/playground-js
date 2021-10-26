function makeClass(){
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp-32);
            console.log(this._temp)
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }

    return Thermostat;
}

const Thermostat = makeClass;
const thermos = new Thermostat(76);

console.log(thermos.temperature)
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)