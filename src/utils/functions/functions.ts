import {DEVICE_SIZE, RegExp} from "../constants/constants";
import {DEVICE} from "../constants/constants";
import {IElective, ISize} from "../../types/types";

export const detectDevice = (size : ISize) => {
    if(size.width < DEVICE_SIZE.MOBILE) {
        return DEVICE.MOBILE;
    } else if (size.width < DEVICE_SIZE.LAPTOP) {
        return DEVICE.LAPTOP;
    } else {
        return DEVICE.DESKTOP;
    }
}

export const getThemeColor = (isDarkTheme: boolean) => {
    return isDarkTheme ? 'white' : 'black'
}

export const arrayBetweenIndexes = (array: IElective[], currentIndex: number, limit: number) => {
    const startIndex = currentIndex * limit - limit;
    const endIndex = startIndex + limit;

    return array.slice(startIndex, endIndex)
}

