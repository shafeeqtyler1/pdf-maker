const { DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');
const { storage } = require('../../helpers/urlHelper'); // Adjust path as necessary

const Pdf = sequelize.define('Pdf', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW // Automatically update this field on update
    }
}, {
    tableName: 'pdfs',
    timestamps: true, // Enable automatic timestamps
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

// Getter for download URL
Pdf.prototype.getDownloadUrl = function() {
    return storage(this.file_path.split('/').pop()); // Use storage helper
};

module.exports = Pdf;
