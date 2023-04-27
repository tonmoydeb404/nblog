import { validationResult } from "express-validator";
import { Category } from "../models/Category";
import asyncWrapper from "../utils/asyncWrapper";

export const getCategories = asyncWrapper(async (_req, res, _next) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.json({ payload: categories });
});

export const getCategory = asyncWrapper(async (req, res, _next) => {
  const id = req.params.id;
  const category = await Category.findOne({ _id: id });
  res.json({ payload: category });
});

export const createCategory = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);

  // send error response
  if (!result.isEmpty()) {
    const errors = result.mapped();
    res.json({ errors });
    return;
  }
  // save category
  const category = new Category({
    title: req.body.title,
    description: req.body.description,
  });
  await category.save();
  res.json({ payload: category });
});

export const updateCategory = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);
  const id = req.params.id;

  // send invalidate response
  if (!result.isEmpty()) {
    const errors = result.mapped();
    res.json({ errors });
    return;
  }

  // update category
  const updatedCate = await Category.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      description: req.body.description,
    },
    { new: true }
  );
  res.json({ payload: updatedCate });
});

export const deleteCategory = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  await Category.findByIdAndDelete(id);
  res.json({ payload: id });
});
