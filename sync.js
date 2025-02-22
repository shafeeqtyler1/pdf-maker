const sequelize = require('./config/sequelize');
const Pdf = require('./App/Models/PdfModel');

const syncDatabase = async () => {
    try {
        // Drop the pdfs table if it exists
        await Pdf.sync({ force: true }); // Use { force: true } to drop and recreate the table
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();
