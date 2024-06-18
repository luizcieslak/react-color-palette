import React$1 from 'react';

interface IColor {
    readonly hex: string;
    readonly rgb: IColorRgb;
    readonly hsv: IColorHsv;
}
interface IColorRgb {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
}
interface IColorHsv {
    readonly h: number;
    readonly s: number;
    readonly v: number;
    readonly a: number;
}
declare class ColorServiceStatic {
    convert<M extends keyof IColor, C extends IColor[M]>(model: M, color: C): IColor;
    toHex(value: string): IColor["hex"];
    toRgb(value: string): IColor["rgb"];
    toHsv(value: string): IColor["hsv"];
    hex2rgb(hex: IColor["hex"]): IColor["rgb"];
    rgb2hsv({ r, g, b, a }: IColor["rgb"]): IColor["hsv"];
    hsv2rgb({ h, s, v, a }: IColor["hsv"]): IColor["rgb"];
    rgb2hex({ r, g, b, a }: IColor["rgb"]): IColor["hex"];
}
declare const ColorService: ColorServiceStatic;

interface IColorPickerProps {
    readonly height?: number;
    readonly hideAlpha?: boolean;
    readonly hideInput?: (keyof IColor)[] | boolean;
    readonly color: IColor;
    readonly onChange: (color: IColor) => void;
    readonly onChangeComplete?: (color: IColor) => void;
    readonly disabled?: boolean;
}
declare const ColorPicker: React$1.MemoExoticComponent<({ height, hideAlpha, hideInput, color, onChange, onChangeComplete, disabled, }: IColorPickerProps) => React$1.JSX.Element>;

interface ISaturationProps {
    readonly height: number;
    readonly color: IColor;
    readonly onChange: (color: IColor) => void;
    readonly onChangeComplete?: (color: IColor) => void;
    readonly disabled: boolean;
}
declare const Saturation: React$1.MemoExoticComponent<({ height, color, onChange, onChangeComplete, disabled }: ISaturationProps) => React$1.JSX.Element>;

interface IHueProps {
    readonly color: IColor;
    readonly onChange: (color: IColor) => void;
    readonly onChangeComplete?: (color: IColor) => void;
    readonly disabled: boolean;
}
declare const Hue: React$1.MemoExoticComponent<({ color, onChange, onChangeComplete, disabled }: IHueProps) => React$1.JSX.Element>;

interface IAlphaProps {
    readonly color: IColor;
    readonly onChange: (color: IColor) => void;
    readonly onChangeComplete?: (color: IColor) => void;
    readonly disabled: boolean;
}
declare const Alpha: React$1.MemoExoticComponent<({ color, onChange, onChangeComplete, disabled }: IAlphaProps) => React$1.JSX.Element>;

declare function useColor(initialColor: string): [IColor, React.Dispatch<React.SetStateAction<IColor>>];

export { Alpha, ColorPicker, ColorService, Hue, IColor, Saturation, useColor };
