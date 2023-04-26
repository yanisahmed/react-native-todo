import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.white
}

const BASE_MEDIUM = {
    fontFamily: typography.primaryMedium,
    fontSize: 16,
    color: colors.white
}

export const presets = {
    default: BASE,
    bold: BASE_BOLD,
    h1: {
        ...BASE,
        fontSize: 32
    },
    h2: {
        ...BASE,
        fontSize: 28
    },
    h3: {
        ...BASE,
        fontSize: 24
    },
    h4: {
        ...BASE,
        fontSize: 32
    },
    h5: {
        ...BASE,
        fontSize: 16
    },
    h6: {
        ...BASE,
        fontSize: 12
    },
}