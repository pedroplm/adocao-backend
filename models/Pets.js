module.exports = (sequelize, DataTypes)=>{
    const Pets = sequelize.define("Pets", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        race: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //permitido null
        adoptionDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        
    });


    return Pets;
}