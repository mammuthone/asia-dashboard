import * as admin from "firebase-admin";

if (!admin.apps.length) {
  console.log("firebase admin init");
  admin.initializeApp({
    credential: admin.credential.cert({
      "type": "service_account",
      "project_id": "asia-395019",
      "private_key_id": "4664c719c8f3fdea78ced0c890fbcc39c25a0d7d",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCSuqd1emFCPjZo\nbydTHLkT0XzNAbqwHcOTYBkmlsZCwqLg/DIJF8XxteIo2ifoi6BPa7j3h5JSfOAY\ngVDTJzvoRCMRQv9z8NybjBWJehhDldf4tp7TR0LCyduv0bGTZFxZiS8DO7fXXb67\n7CUfLKCQj3vHAjC0eRPOU0hBjq/HK0Gc6vIo7UQ+DcjrLeJ7dkFojELiNfw6BURz\nkREKHpk2FqTWDaXZ5ldPU6iBkYVlPLYWZzHjuBPa6fTxGBI7M1Y5df/HTCJr2pN6\nJSkM1zLmFKVE7Cu48ZoELZLA2WkuzDT+Y969HMHsMn6MCgyPTdgb3sraoFH5aDv+\nzLExMgcTAgMBAAECggEAA+sECbkI29H5dfRx4mBD+OmBIaBIMee5jzfjtAoWpTW5\nT7SsSV3fJUMsFNcudaE02KoRuFpgZ995xG2/kMPdb6hSH2XgmGH4IhcthAxElZls\nuPF3cEDY4YauXRWGXl8xsBpfrQBtOk0AiNgXbautZe7O6VN/pXIOO1Yx+b4rp2/P\n5BblwdbLaexkyYKhPpCRhSBmm9f8jVbEkNqgB2YjWzxv036Mo0derMLCPzUC7Mdx\n9PtleQ7mNMdlnmaBDy05axiKsz0gF/8haDm2MEtbjevb3wuY1aZT6XtQjuE1eMcQ\nFh3EEFJyahWKlUsrnF7orvZrxd9xb1o6cLPHvgXNMQKBgQDN6yPv1WtOH+AsFS/B\nUkT26lViX9G4WSnQgO6h9o/sREMZNS3BmzACvKEiJpY9zDZ0/wc5AEFJkRDieriD\nQit4On09jMQaTUe3rfhFSfb0NXJcK9ogUuqhk7dSz52oEMCwMnx8yPmY4QEGqOwz\ne5eWoDdYE1AmQwwpf9rQkOHXfQKBgQC2akZM0vzzYTSHyOmKBPDpsk28fL7nhkJz\nteXjhCxC1S9B6RW0lLoj/LDqIJNlw2SlrGNqod+jbG3uzF8NaQtKfj8BdMdTJWqS\nKe1XU3j9Qmua4rrgNUpTdPauzGdLzFbgMukcmfNdCzMgSUKUY8zsEiq0kGymxL6y\n+0FkT+w9zwKBgGIykTetKffeoZPEIrrpVbP+Oeuo0CU+d/9TjPk10JqWTv01a/WY\n4QNdGuZjSmB8Azg16ibXpUrE4C1w4o7NvlceZV01xMraMao5T10Tka4R0tB7pRCn\nGfclr1XRZligbJNZ8B295bFvE4MuiT1f4gFVtC7PPviQHrunmhy+CsUtAoGAA1+b\nxTfxrZ6SliBFEWReADRn86Bq92UoPXOTuM1s9B91LEbfO+O0PY4ix3GqyCsA5X92\npzYvKJqMvenRqDHVH5+OErzSItuCSQm1dfP5PNXJn6epxRO3OCvlk/37uw8gXC0U\n2o6OTZ4zZ9ly/cOKuqLrX0N8fukMjcrPvscrm0kCgYBlGWzUQJATfgeHnP60xROc\nK31PLYKFJ6hmaFb1m0IhqMxh7+IUjXDDLsJgQlHoYdPQjO+X+mK3p2NgfuXwAD6B\nscFyJkrjxROyDTP+EhJWHaOipv4Ai8L8bauqvqyFs9dk9kYk1aifOuYvBnl2K6Jo\nQLLkoKYmaRMf92C3wIW/Yw==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-614iz@asia-395019.iam.gserviceaccount.com",
      "client_id": "117698716301652381202",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-614iz%40asia-395019.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    })
  });
}

export default admin;