import Demand from "../models/Demand.js";

export const addDemand = async (req, res) => {
  let newDemand;
  newDemand = new Demand({
    ...req.body,
  });
  try {
    // create a new Post
    // save it in the database
    let demand = await newDemand.save();
    res.send({ msg: "demand is saved", demand });
  } catch (error) {
    console.log(error);
    res.status(403).send({ errors: [{ msg: "can not add demand", error }] });
  }
};

export const allDemand = async (req, res) => {
  try {
    let demand = await Demand.find();
    res.send({ msg: "all demand", demand });
  } catch (error) {
    console.log(error);
    res.status(403).send({ errors: [{ msg: "can not load demand", error }] });
  }
};
