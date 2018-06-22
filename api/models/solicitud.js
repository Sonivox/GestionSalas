'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolicitudSchema = Schema({
    localID: {
        type: Schema.ObjectId,
        ref: 'Local'
    },
    correlativo: String,
    fecha_solicitud: String,
    nombre_actividad: String,
    inicio_evento: String,
    fin_evento: String,
    numero_asistentes: String,
    responsable_actividad: String,
    unidad_solicitante: String,
    jefe_unidad_solicitante: String,
    aprovacion: String,
    administrador_sistema: {
        type: Schema.ObjectId,
        ref: 'Usuario'
    }
    
});

module.exports = mongoose.model('Solicitud', SolicitudSchema);