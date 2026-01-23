import Credential from "../models/Credential.js";

const addCredential = async (req, res) => {
  const { site, username, password } = req.body;

  const credential = await Credential.create({
    user: req.userId, // 🔥 user-specific
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