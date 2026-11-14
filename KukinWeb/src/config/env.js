require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  appName: process.env.APP_NAME || 'Kukin',
  contactEmail: process.env.CONTACT_EMAIL || '',
  apkDownloadUrl: process.env.APK_DOWNLOAD_URL || '#'
};