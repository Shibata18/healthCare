'use strict'
const File = use("App/Models/File");
const Agenda = use('App/Models/Agenda')
const Helpers = use('Helpers')


class FileController {
    async index ({ request, response, view }) {
        const file = File.all();
    
        return file;
      }
    async show({ params, response }) {
        const agenda = await File.findOrFail(params.id);
        await agenda.load('chat')
        return agenda
        //return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }

    async store({ params, request }) {
        const agenda = await Agenda.findOrFail(params.id)

        const images = request.file('file', {
            types: ['image'],
            size: '2mb'
        })

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
}

module.exports = FileController
