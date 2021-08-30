const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    dataNascimento: { type: String, unique: false, required: true },
    estadoCivil: { type: String, unique: false, required: true },
    sexo: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    numero: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    telefone1: { type: String, unique: true, required: true },
    telefone2: { type: String, unique: true, required: true },
    celular: { type: String, unique: true, required: true },
    contato: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    identidade: { type: String, unique: false, required: true },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: true },
    habilitacao: { type: String, unique: false, required: true }
 
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);