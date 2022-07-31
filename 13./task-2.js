class CarService {
    static DefaultWorkingHours = {
        from: '9:00', 	
        till: '20:00',
    }

    constructor(name, workingHours) {
        this.name = name
        this.workingHours = workingHours || DefaultWorkingHours
    }
    
    repairCar(carName) {
        let hours = (new Date()).getHours()
        if (carName) {
            (Number(this.workingHours.from.split(':')[0]) <= hours && Number(this.workingHours.till.split(':')[0]) > hours)
            ? alert(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте пожалуйста`)
            : alert('К сожалению, мы сейчас закрыты. Приходите завтра')
        } else console.error('Вам необходимо указать название машины, чтобы ее отремонтировать')
    }
}

const carService = new CarService("RepairCarNow", {
    from: "8:00",
    till: "20:00"
});
carService.repairCar('');
carService.repairCar("BMW");