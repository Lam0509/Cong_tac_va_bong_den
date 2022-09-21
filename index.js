let SwitchButton = function (status, lamp) {
    this.status = status;
    this.lamp = lamp;
    this.connectToLamp = function (ElectricLamp) {
        this.lamp = ElectricLamp;
    }
    this.getLamp = function () {
        return this.lamp
    }
    this.setLamp = function (lamp) {
        this.lamp = lamp
    }
    this.switchOn = function () {
        this.lamp.status = true;
        return this.status = true;
    }
    this.switchOff = function () {
        this.lamp.status = false;
        return this.status = false;
    }
}

let ElectricLamp = function (status) {
    this.status = status;
    this.getStatus = function () {
        return this.status;
    }
    this.show = function () {
        if (this.status) {
            alert('Lightning')
        } else {
            alert('Not Lightning')
        }
    }
}

let switchButton = new SwitchButton(false, 'lamp');
let electricLamp = new ElectricLamp(false);
switchButton.connectToLamp(electricLamp);
switchButton.getLamp();
switchButton.switchOn();
electricLamp.getStatus();
electricLamp.show();
switchButton.switchOff();
electricLamp.getStatus();
electricLamp.show();

