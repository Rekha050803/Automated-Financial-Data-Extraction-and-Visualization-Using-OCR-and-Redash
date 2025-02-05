# Automated Financial Data Extraction and Visualization

This project provides an automated system for extracting financial Profit and Loss (PnL) values from trading account screenshots using Optical Character Recognition (OCR). The extracted data is stored in a MySQL database and visualized through a React-based web interface. The system supports automated image sorting, real-time data processing, and graphical analysis of PnL trends.

## Features

- **Automated Image Processing:** Automatically detects and processes new image files in designated directories.
- **Optical Character Recognition (OCR):** Extracts PnL values from specific regions of trading account screenshots.
- **Database Integration:** Stores extracted PnL data with image modification timestamps in a MySQL database.
- **Data Visualization:** Provides graphical representations of PnL data via a React-based frontend and Redash integration.
- **Real-Time Monitoring:** Continuously scans for new images and processes data in real-time.

## Technologies Used

### Backend
- **Python** for scripting and automation
- **Pillow (PIL)** for image processing
- **pytesseract** for OCR
- **MySQL** for database storage

### Frontend
- **React.js** for building the user interface
- **Redash** for data visualization

## Directory Structure

- **5PAISA Folder:** Stores screenshots from the 5Paisa trading platform.
- **FINVASIA Folder:** Stores screenshots from the Finvasia trading platform.

## Setup Instructions

### Prerequisites

1. **Tesseract OCR:** Install [Tesseract OCR](https://github.com/tesseract-ocr/tesseract) and configure the executable path.
2. **Python Libraries:** Install the required libraries using:
   ```bash
   pip install pillow pytesseract mysql-connector-python
   ```
3. **MySQL Database:** Configure and create a database with appropriate tables.
4. **Node.js (for React frontend):** Install [Node.js](https://nodejs.org/).

### Configuration

Update the following paths and credentials in the code:

- **Tesseract Path:** Update `pytesseract.pytesseract.tesseract_cmd` to your local Tesseract executable path.
- **MySQL Configuration:** Update `mysql_config` with your database credentials.
- **Image Folder Path:** Set `folder_path` to your directory containing trading screenshots.

### Running the Application

1. **Start the Backend:**
   ```bash
   python backend_script.py
   ```
2. **Run the React Frontend:**
   ```bash
   npm start
   ```
3. **Access the Dashboard:** Navigate to `http://localhost:3000` in your web browser.

## Usage

1. Place trading account screenshots in the designated folder.
2. The system automatically processes the images, extracts PnL values, and stores them in the database.
3. View and analyze the PnL data through the React dashboard.



