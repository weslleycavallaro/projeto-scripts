"use strict";

module.exports = {

    async up(queryInterface, Sequelize){

        await queryInterface.createTable("Contatos", {

            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            modelo: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            nome: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cpf: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: true
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }

        });

    },
    async down(queryInterface, Sequelize){
        await queryInterface.dropTable("Contatos");
    }

};