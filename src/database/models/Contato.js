import { DataTypes } from "sequelize";

const Contato = seqielize.define('Contato',{

    modelo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

}, {

tableName: 'Contatos',
timestamps: true,

});

export default Contato;