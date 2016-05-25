import Collection from './collection/index'

export default class Reframe {
  static confirm() {
    console.log("Congratulations, Reframe is working.")
  }
}

export class Tools {
  static purgeTableVisibility() {
    Collection.purgeVisibility()
  }
}
