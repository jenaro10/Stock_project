declare global {
    namespace NodeJS {
        interface ProcessEnv {
            USERNAME: string
            PASSWORD: string
            SECRET: string
            NODE_ENV: 'development' | 'production'
        }
    }
}
  
export {}