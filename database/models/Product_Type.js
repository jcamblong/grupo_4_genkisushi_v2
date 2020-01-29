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
                type: dataTypes.VARCHAR(50),
                allowNull: false
            }, 
            quantity: {
                type: dataTypes.TINYINTEGER(100),
            },
            price: {
                type: dataTypes.DECIMAL(6.2),
            }, 
        }, 
        {
            tableName: 'product_types',
            underscored: true,
            timestamps: true
        }
    );
    return Product_Type;
}