'use strict'

const Database = use('Database');
const Agenda = use('App/Models/Agenda');
const config = require('../../../config/config.json');
const Opentok = require('opentok');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with sessions
 */
class SessionController {

  /**
   * Create/save a new session.
   * POST sessions
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response, params }) {
    const agenda = await Agenda.findOrFail(params.id)
    if (agenda) {
      const opentok = new Opentok(config.apiKey, config.apiKey_secret);
      const teste = opentok.createSession({ mediaMode: 'relayed' }, async (err, session) => {
        if (err) {
          console.log("Error creating session:", err)
        } else {
          let tokenOptions = {}
          tokenOptions.role = 'publisher'
          let token = opentok.generateToken(session.sessionId)
          console.log("Token: " + token);
          try {
            let sessionid = session.sessionId
            await Database.table('sessions').insert({ session: sessionid, token: token,agenda_id:agenda.id })
            console.log("Session ID: " + sessionid);
          } catch (error) {
            console.log("Error creating session:", error)
          }

        }
      })
      return response.status(200).json(teste)
    }else {
      return response.status(404).json({mensagem:"Agenda não encontrada"})
    }
  }
  async teste({ request, response }) {
    const opentok = new Opentok(config.apiKey, config.apiKey_secret);
    const teste = opentok.createSession({ mediaMode: 'relayed' }, async (err, session) => {
      if (err) {
        console.log("Error creating session:", err)
      } else {
        let tokenOptions = {}
        tokenOptions.role = 'publisher'
        let token = opentok.generateToken(session.sessionId)
        console.log("Token: " + token);
        try {
          let sessionid = session.sessionId
          await Database.table('sessions').insert({ session: sessionid, token: token })
          console.log("Session ID: " + sessionid);
        } catch (error) {
          console.log("Error creating session:", error)
        }

      }
    })
    return response.status(200).json(teste)
  }


}

module.exports = SessionController
