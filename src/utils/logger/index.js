export default class Logger {

  static trap() {
    return process.env.NODE_ENV !== 'production'
  }

  static notice(...args) {
    if(Logger.trap())
      console.notice(...args)
  }

  static info(...args) {
    if(Logger.trap())
      console.info(...args)
  }

  static log(...args) {
    if(Logger.trap())
      console.log(...args)
  }

  static error(...args) {
    if(Logger.trap())
      console.error(...args)
  }

  static warn(...args) {
    if(Logger.trap())
      console.warn(...args)
  }

}
