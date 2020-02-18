module.exports = (sequelize, dataTypes) => {
    const Product_Type = sequelize.define ('product_types', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            name: {
                type: dataTypes.STRING,
                allowNull: false
            }, 
            quantity: {
                type: dataTypes.INTEGER,
            },
            price: {
                type: dataTypes.DECIMAL,
            }, 
        }, 
        {
            tableName: 'product_types',
            underscored: true,
            timestamps: true
        }
    );
    Product_Type.associate = function (models){
        Product_Type.hasMany (models.products, {
            as: 'products',
            foreignKey: "type_id"
        })
    }
    return Product_Type;
}