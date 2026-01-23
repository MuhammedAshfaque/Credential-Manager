import Credential from "../models/Credential.js";

const isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

const isStrongPassword = (password) => {
  // min 8 chars, 1 letter, 1 number
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
};


const addCredential = async (req, res) => {
  const { site, username, password } = req.body;

  if (!site || !username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
    // URL validation
  if (!isValidURL(site)) {
    return res.status(400).json({ message: "Invalid website URL" });
  }

  // Password validation
  if (!isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and contain letters and numbers",
    });
  }
  const credential = await Credential.create({
    user: req.userId, 
    site,
    username,
    password,
  });

  res.status(201).json(credential);
};

const getCredentials = async (req, res) => {
  const credentials = await Credential.find({ user: req.userId });
  res.json(credentials);
};

const deleteCredential = async (req, res) => {
  await Credential.deleteOne({
    _id: req.params.id,
    user: req.userId, // ensures ownership
  });
  res.json({ message: "Deleted" });
};

export {
    addCredential,
    getCredentials,
    deleteCredential
}