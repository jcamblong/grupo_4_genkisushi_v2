module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define ('products', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            }, 
            name: {
                type: dataTypes.STRING(50),
                allowNull: false
            }, 
            detail: {
                type: dataTypes.STRING(255),
                allowNull: true
            }, 
            type_id: {
                type: dataTypes.INTEGER
            }, 
            category_id: {
                type: dataTypes.INTEGER
            },
            image: {
                type: dataTypes.STRING(50)
            },
            created_at: {
                type: dataTypes.DATE
            },
            updated_at: {
                type: dataTypes.DATE
            }
        }, 
        {
            tableName: 'products',
            underscored: true,
            timestamps: true
        }
    );
    Product.associate = function (models){
        Product.belongsTo (models.categories, {
            as: 'categories',
            foreignKey: "category_id"
        })
        Product.belongsTo (models.product_types, {
            as: 'product_types',
            foreignKey: "type_id"
        })
    }
    return Product;
}