import { Dimensions, Platform, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

class ResponsiveScreen {
    static wscale: number;
    static hscale: number;

    static init(width: number, height: number) {
        this.wscale = SCREEN_WIDTH / width;
        this.hscale = SCREEN_HEIGHT / height;
    }

    static normalize = (size: number, based: string) => {
        const newSize = based === 'height' ? size * ResponsiveScreen.hscale : size * ResponsiveScreen.wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
        }
    }

    static fontSize = (size: number, based: string) => {
        const newSize = based === 'height' ? size * ResponsiveScreen.hscale : size * ResponsiveScreen.wscale;
        if (Platform.OS === 'ios') {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        } else {
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        }
    }
}

export default ResponsiveScreen


