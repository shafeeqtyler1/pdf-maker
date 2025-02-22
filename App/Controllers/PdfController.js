const pool = require('../../config/db');
const Pdf = require('../Models/PdfModel');
const path = require('path');
class PdfController {
    async makePdf(req, res) {
        const { url } = req.query;

        if (!url) {
            return res.status(400).send('Error: URL query parameter is required');
        }

        try {
            const puppeteer = require('puppeteer');
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto(url, { waitUntil: 'networkidle2' });
            const fileName = `output-${Date.now()}.pdf`;
            const filePath = `storage/${fileName}`; // Save as a relative path
            await page.pdf({ path: filePath, format: 'A4' });
            await browser.close();

            const pdf = await Pdf.create({ file_path: filePath, url });
            console.log('PDF details saved with ID:', pdf.id);            
            // res.download(filePath);
            console.log(pdf);
            return res.json({
                'success':true,
                'message':'success',
                'data':{
                    created_at: pdf.created_at,
                    updated_at: pdf.updated_at,
                    id: pdf.id,
                    file_path: pdf.getDownloadUrl(), // Use the getter for the URL
                    url: url,
                },
            })
        } catch (error) {
            res.status(500).send('Error generating PDF: ' + error.message);
        }
    }
}

module.exports = new PdfController();
