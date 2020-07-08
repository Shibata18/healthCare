'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class File extends Model {
    static get computed () {
        return ['url']
      }
    
      getUrl ({ path }) {
        return `${Env.get('APP_URL')}/file/${path}`
      }
    agenda(){
        return this.belongsTo('App/Models/Agenda')
    }
}

module.exports = File
