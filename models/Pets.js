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
        // setting allowNull to false will add NOT NULL to the column, which means an error will be
        // thrown from the DB when the query is executed if the column is null. If you want to check that a value
        // is not null before querying the DB, look at the validations section below.
        adoptionDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        
    });


    return Pets;
}