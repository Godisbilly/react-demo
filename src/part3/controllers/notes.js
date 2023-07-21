const notesRouter = require("express").Router();

const { request } = require("express");
const Note = require("../models/note");

notesRouter.get("/", (request, response) => {});
