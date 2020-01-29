module.exports = (sequelize, dataTypes) => {
    const Categorie = sequelize.define ('categories', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            name: {
                type: dataTypes.VARCHAR(45),
                allowNull: false
            }, 
        }, 
        {
            tableName: 'categories',
            underscored: true,
            timestamps: true
        }
    );
    return Categorie;
}