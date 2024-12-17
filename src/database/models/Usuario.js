import { DataTypes } from "sequelize";

import database from "@/database";

const Usuario = database.define(
  "Usuario",
  {
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
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "Usuarios",
    timestamps: true,
  }
);

export default Usuario;
