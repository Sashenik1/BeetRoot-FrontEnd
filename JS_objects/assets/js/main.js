//----------------------Task1--------------------------------------

const car = {
    manufacturer: 'X-company',
    model: 'KIA-RIO',
    yearOfProduse: 2010,
    averageSpeed: 100,
    tankVolume: 3,
    fuelConsumption: 10,
    drivers: ['Shevchenko', 'Onopko', 'Iov'],

    info() {
        let rez = '<ol>';
        let x = '<li>';
        let y = '</li>';
        rez = rez += x + 'Manufacturer: ' + car.manufacturer + y +
            x + 'Model: ' + car.model + y +
            x + 'Year of Produse: ' + car.yearOfProduse + y +
            x + 'Average speed: ' + car.averageSpeed + y +
            x + 'Tank volume: ' + car.tankVolume + y +
            x + 'Fuel consumption: ' + car.fuelConsumption + y +
            x + 'Drivers: ' + car.drivers + y;

        rez += '</ol>';
        return rez;
    },

    addDriver() {
        const newDraver = document.getElementById('new_driver').value;
        car.drivers.push(newDraver);
        document.getElementById('added-driv').innerHTML = car.drivers.at(-1);
    },

    checkDriver() {
        const checkedDraver = document.getElementById('check_driver').value;
        let rez1 = '';
        let rez2 = '';
        let x = false;
        car.drivers.forEach((element) => {
            if (element === checkedDraver) {
                rez1 = 'Driver ' + checkedDraver + ' is in the list';
                x = true;
            } else {
                rez2 = 'Driver ' + checkedDraver + ' is not in the list';
            }

        });
        if (x) return rez1;
        else return rez2;
    },

    calculation() {
        const distance = document.getElementById('distance').valueAsNumber;
        const time = (distance / car.averageSpeed) +
            Math.floor(distance / car.averageSpeed / 4);
        const fuel = distance / car.fuelConsumption;
        document.getElementById('rez-calc').innerHTML = 'Time: ' + time.toFixed(1) + ' hours, ' +
            'Amount of fuel: ' + fuel.toFixed(1) + ' liters';
    }
};

function myFuntion1() {
    const carInfo = car.info();
    document.getElementById('info').innerHTML = carInfo;
}


function myFuntion2() {
    car.addDriver();

}

function myFuntion3() {

    document.getElementById('check').innerHTML = car.checkDriver();
}

function myFuntion4() {
    car.calculation();

}




//----------------------Task2--------------------------------------

const time = {

    h: 0,
    m: 0,
    s: 0,

    timeOnScreen() {
        let hOnScreen;
        let mOnScreen;
        let sOnScreen;
        if (time.h < 10)
            hOnScreen = '0' + time.h;
        else
            hOnScreen = time.h;
        if (time.m < 10)
            mOnScreen = '0' + time.m;
        else
            mOnScreen = time.m;
        if (time.s < 10)
            sOnScreen = '0' + time.s;
        else
            sOnScreen = time.s;

        document.getElementById('time').innerHTML = hOnScreen + ':' + mOnScreen + ':' + sOnScreen;

    },

    toChangeTime() {
        addH = document.getElementById('hours').valueAsNumber;
        if (isNaN(addH) || addH < 0)
            addH = 0;
        addM = document.getElementById('minutes').valueAsNumber;
        if (isNaN(addM) || addM < 0)
            addM = 0;

        addS = document.getElementById('seconds').valueAsNumber;
        if (isNaN(addS) || addS < 0)
            addS = 0;

        time.h += addH;
        time.m += addM;
        time.s += addS;
        if (time.s > 59) {
            time.m = time.m + Math.trunc(time.s / 60);
            time.s = time.s % 60;
        }
        if (time.m > 59) {
            time.h = time.h + Math.trunc(time.m / 60);
            time.m = time.m % 60;
        }

        if (time.h > 23)
            time.h = time.h % 24;
    }

}

function myFuntion5() {
    time.timeOnScreen();
}

function myFuntion6() {
    time.toChangeTime();
    time.timeOnScreen();
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}