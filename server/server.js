const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

const { Dropbox } = require('dropbox');
const fs = require('fs');

app.use(express.json());
app.use(cors());

const accessToken =
  'uat.ACM1cS4dfL30Tgf__2Hi9btovrtJYT1sTx_c36OzAaQD1v_jnNmHk3dedZTgCJX0w5LQIitLa56_b8-AZ_zcm3rApWCTSJURPQDCn9HAJCIiOie_F9O4cMslo-QKMwGpU6Vg9sWwWkYoDckHB-QiFedF-nLrlL35HOFnNVMoG7HxLUym-iExgnmG032bCgjXfS7--xtY1C--Nq-dw0qo1D-MwwWBUtx13zJkM6ONNBIty3xuNjfTNxD0ZZBezBJTMojOp1rIdvm2qtNLzHSx-er1092kBtSMbx3o5XcsULCFjahBJwLPGj_wHzZwmOMuJKThFxA1wDHAPj3xXNrQEnUlVYUZ1-wKmMAuq3aicT7P3Z8JK2LLWmooJCMh0dgrSFhHbDdjB24DTcRGt2qvjjMrycQZId7waEMEKjoHLjxqx32u2XjGtMou68MftRLmiKIapky-LrP87iBJ5yR7OZdBcMBgQGM-y6ZOTi3dpsAmQ4rfSXg5hCfm3IW6FNowTbaN8wJ5d4PET85Un0ojKfXUD5-7-J95BhNwDpJUurTNdrF1xgCW7mYSMOoCSmSrPOw9tTuiSxlZxCPIsM3DHo2Bv4NgUqzxnOwpgcL4cJjmmpPDLCDws3I9TXf1ye0BbbHl6oYtkx-xSO1V3cnmPHKVPW6lIUc6ScLIiql3PvsM-zGsEAzikGgYlOaN1Uo34G4bakAq-STYCVwR5HOyXRae6QnfR3B-B09HhCSE-ahHABMj2KB9OU0c-IEOVpjoe3seD-Dy4riqs9VX7YPdG-WCf8UNmtjYazmJrdbkq7UE3RlaleJnlT7y_qr1AJ4H7yIo36ONn6L_qrm0EeaHFtZNY-AHNEqC35s9PRQLq0be9zAJJXciyN_iktlBu8RH1bIq6ly7Nr9XJ23rJeEriDJsmyQPt1lP3_gKNWaBF7uxZd5ijRLEKX5ajPryxKkljExdkbBo1lCLcE5pSkK7so-eCv27kE8eAQFlI7RvGUOdSCEAf2owTEY3j6Csp6Dldq937y2qRJiEqJbsqmD3uv5HTELd4XP-7U-pbophGvPEfB27TV0RbsGOKvbUEKaKIwdVmwYnIacLHtcX8IEwGapqOG4Oe7kJhpaGaOvJPe43o9RIWThpNu-0fZU7hww0wB6pvl5lZ6PYvoQRzXMjjR8WZRgms70TCGSK94K_cxEroJzzVifDSUzYYbCLo_BHlFUdTUAeWMJ-7NcUB_WJymgN-_-uqCeJm9NBV8qLNIRy81N7Cik1yXGgFZIpJZz1k2f8DYeRcJNfL3aZM4Dn_C_I';
const dbx = new Dropbox({ accessToken });

app.get('/', (req, res) => {
  console.log(req);
});

// app.get('/json', (req, res) => {
//   res.json({ message: 'Hello, JSON!' });
// });

app.get('/download', async (req, res) => {
  try {
    const path = req.query.path;

    const response = await dbx.filesDownload({ path });

    await new Promise((resolve, reject) => {
      fs.writeFile(
        response.result.name,
        response.result.fileBinary,
        'binary',
        err => {
          if (err) {
            reject(err);
          } else {
            console.log('File: ' + response.result.name + ' saved.');
            resolve();
          }
        }
      );
    });
  } catch (error) {
    console.error(error);
  }

  res.json({ message: 'String received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
