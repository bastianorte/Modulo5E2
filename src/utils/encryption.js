import CryptoJS from "crypto-js";

const SECRET_KEY = "safeapp_secret_key"; // Cambiar a un valor seguro y único

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (encryptedData) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Error al desencriptar los datos", error);
    return null;
  }
};
