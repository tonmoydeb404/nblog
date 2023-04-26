import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { Category } from "../../models/Category";
import asyncWrapper from "../../utils/asyncWrapper";

export const getCategoryList = asyncWrapper(async (_req, res, _next) => {
  const categories = await Category.find({}).sort({ createdAt: -1 });
  res.locals.data = { categories };
  res.render("dashboard/categories/list.ejs");
});

export const getCreateCategory = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  res.render("dashboard/categories/create.ejs");
};
export const createCategory = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);

  // send invalidate response
  if (!result.isEmpty()) {
    res.locals.errors = result.mapped();
    res.locals.data = req.body;
    res.render("dashboard/categories/create.ejs");
    return;
  }

  // save category
  const category = new Category({
    title: req.body.title,
    description: req.body.description,
  });
  await category.save();
  res.redirect("/dashboard/categories");
});

export const getUpdateCategory = asyncWrapper(async (req, res, _next) => {
  const id = req.params.id;
  const category = await Category.findOne({ _id: id });
  res.locals.data = category;
  res.render("dashboard/categories/update.ejs");
});

export const updateCategory = asyncWrapper(async (req, res, _next) => {
  const result = validationResult(req);
  const id = req.params.id;

  // send invalidate response
  if (!result.isEmpty()) {
    res.locals.errors = result.mapped();
    res.locals.data = { ...req.body, id };
    res.render("dashboard/categories/update.ejs");
    return;
  }

  // update category
  await Category.findByIdAndUpdate(id, {
    title: req.body.title,
    description: req.body.description,
  });
  res.redirect("/dashboard/categories");
});

export const deleteCategory = asyncWrapper(async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.redirect("/dashboard/categories/");
});
