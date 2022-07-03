import {DEVICE_SIZE} from "../consts/consts";
import {DEVICE} from "../consts/consts";

interface ISize {
    width: number,
    height: number
}

export const detectDevice = (size : ISize) => {
    if(size.width < DEVICE_SIZE.MOBILE) {
        return DEVICE.MOBILE;
    } else if (size.width < DEVICE_SIZE.LAPTOP) {
        return DEVICE.LAPTOP;
    } else {
        return DEVICE.DESKTOP;
    }
}
