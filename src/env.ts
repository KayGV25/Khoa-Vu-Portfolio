import type { Env } from './env.d'

export const EnvImp: Env = {
    version: Number(import.meta.env.VITE_VERSION ?? '1'),
}
