import { colors } from "./colors";

export const themes = {
    light: {
        appBackground: colors.gray100,
        appBackgroundInverse: colors.gray900,
        
        background: colors.white,
        backgroundInverse: colors.black,

        elementInteractionBackground: colors.white,
        elementInteractionBackgroundInverse: colors.black,

        text: colors.black,
        textInverse: colors.white,

        primary: colors.blue500,
        secondary: colors.bertiare500,

        success: colors.green500,
        
        successSale: colors.green300,
        successSaleHighlight: colors.green900,

        warning: colors.yellow500,
        
        warningSale: colors.yellow300,
        warningSaleHighlight: colors.yellow900,

        danger: colors.red500,
        
        dangerSale: colors.red300,
        dangerSaleHighlight: colors.red900,

        muted: colors.gray400,
        mutedInverse: colors.gray200,
        mutedIcon: colors.gray100,

        opacityBackground: colors.opacityBackgroundLight,

        inputBackground: colors.white,
        checkboxHover: colors.gray500,

        border: colors.gray100,
        shadow: colors.gray900,
        hoverDepth: colors.white,

        accent: colors.purple500,
        info: colors.cyan500,
    },
    dark: {
        appBackground: colors.black,
        appBackgroundInverse: colors.gray200,

        background: colors.gray900,
        backgroundInverse: colors.white,

        elementInteractionBackground: colors.black,
        elementInteractionBackgroundInverse: colors.white,

        text: colors.white,
        textInverse: colors.black,

        primary: colors.blue300,
        secondary: colors.bertiare300,
      
        success: colors.green400,

        successSale: colors.green500,
        successSaleHighlight: colors.green100,

        warning: colors.yellow300,

        warningSale: colors.yellow500,
        warningSaleHighlight: colors.yellow100,

        danger: colors.red300,
        
        dangerSale: colors.red500,
        dangerSaleHighlight: colors.red100,

        muted: colors.gray500,
        mutedInverse: colors.gray400,

        mutedIcon: colors.gray700,

        opacityBackground: colors.opacityBackgroundDark,
        inputBackground: colors.black,
        checkboxHover: colors.gray400,

        border: colors.gray700,
        shadow: colors.gray200,      
        hoverDepth: colors.gray800,

        accent: colors.purple300,      
        info: colors.cyan300,
    },
    solarized: {

    },
}