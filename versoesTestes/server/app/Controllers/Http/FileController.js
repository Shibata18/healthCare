'use strict'
const Agenda = use('App/Models/Agenda');
const Helpers = use('Helpers')
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with files
 */
class FileController {
  /**
   * Show a list of all files.
   * GET files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new file.
   * GET files/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new file.
   * POST files
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ params, request }) {
    const agenda = await Agenda.findOrFail(params.id)
  
    const images = request.file('file', {
      types: ['application','video','image','audio','text'],
      size: '4mb',
      //extnames:['pdf','jpg','png']//https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basico_sobre_HTTP/MIME_types/Complete_list_of_MIME_types
    })
                                //tmpPath
    await images.moveAll(Helpers.tmpPath('uploads'), file => ({
      name: `${Date.now()}-${file.clientName}`
    }))
  
    if (!images.movedAll()) {
      return images.errors()
    }
  
    await Promise.all(
      images
        .movedList()
        .map(image => agenda.file().create({ path: image.fileName }))
    )
  }

  /**
   * Display a single file.
   * GET files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, response }) {
    return response.download(Helpers.tmpPath(`uploads/${params.path}`))
  }

  /**
   * Render a form to update an existing file.
   * GET files/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update file details.
   * PUT or PATCH files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a file with id.
   * DELETE files/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = FileController
