import { get } from "lodash";

export const getStringEnv = (key: string): string => get(process.env, key, "");

export const getNumberEnv = (key: string): number => {
    const value = Number(process.env[key]);
    return isNaN(value) ? 0 : value;
};
