'use strict'

const BaseModel = use('MongooseModel')

/**
 * @class prontuario
 */
class prontuario extends BaseModel {
  static boot ({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'prontuarioHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * prontuario's schema
   */
  static get schema () {
    return {

    }
  }
}

module.exports = prontuario.buildModel('prontuario')
