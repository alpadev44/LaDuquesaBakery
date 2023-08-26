const {
  createAddressService,
  getAllAddressService,
  detailsAddressService,
  updateAddressService,
  deleteAddressService,
} = require("../services/addressService.js");

async function createAddressController(req, res) {
  try {
    const address = await createAddressService(req.body);
    return res.status(201).json(address);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
}

async function getAllAddressController(req, res) {
  try {
    const address = await getAllAddressService();
    return res.status(200).json(address);
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
}

async function detailsAddressController(req, res) {
  try {
    const address = await detailsAddressService(req.params.id);
    if (address) {
      return res.status(200).json(address);
    } else {
      return res.status(404).json({ message: "Address not found" });
    }
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
}

async function updateAddressController(req, res) {
  try {
    const address = await updateAddressService(req.params.id, req.body);
    return res.status(200).json(address);
  } catch (err) {
    return res.status(400).json({ err: err.message });
  }
}

async function deleteAddressController(req, res) {
  try {
    await deleteAddressService(req.params.id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
}

module.exports = {
  createAddressController,
  getAllAddressController,
  detailsAddressController,
  updateAddressController,
  deleteAddressController,
};
