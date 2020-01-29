module.exports = (sequelize, dataTypes) => {
    const Product = sequelize.define ('products', 
        {
            id: {
                type: dataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false}, 
            name: {
                type: dataTypes.VARCHAR(50),
                allowNull: false}, 
            detail: {
                type: dataTypes.VARCHAR(255),
                allowNull: true}, 
            type_id: {
                type: dataTypes.INTEGER}, 
            category_id: {
                type: dataTypes.INTEGER}
        }, 
        {
            tableName: 'products',
            underscored: true,
            timestamps: true
        }
    );
    return Product;
}