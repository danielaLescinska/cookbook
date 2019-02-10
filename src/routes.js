import React from "react";
import { Switch, Route } from "react-router";
import ApiTestPage from "./pages/ApiTest";
import NotFoundPage from "./pages/NotFound";
import RecipiesList from "./pages/RecipiesList";
import RecipesDetail from "./pages/RecipeDetail";
import RecipesSideDishes from "./pages/RecipeSideDishes";
import NewRecipeDetail from "./pages/NewRecipeDetail";

export default (
  <Switch>
    <Route exact={true} path="/" component={RecipiesList} />
    <Route path="/api-test" component={ApiTestPage} />
    <Route path="/detail/:id" component={RecipesDetail} />
    <Route path="/prilohy" component={RecipesSideDishes} />
    <Route path="/novy-recept" component={NewRecipeDetail} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
